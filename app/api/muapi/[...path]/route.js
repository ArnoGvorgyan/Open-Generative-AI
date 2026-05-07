import { NextResponse } from 'next/server';

const MUAPI_BASE = 'https://api.muapi.ai';

// Hop-by-hop and sensitive headers that must not be forwarded upstream.
const STRIP_HEADERS = new Set([
    'host',
    'connection',
    'cookie',          // never forward browser cookies; api key goes via x-api-key
    'transfer-encoding',
]);

function getApiKey(request) {
    const fromHeader = request.headers.get('x-api-key');
    if (fromHeader) return fromHeader;
    return request.cookies.get('muapi_key')?.value ?? null;
}

function buildUpstreamHeaders(request) {
    const headers = new Headers();
    for (const [key, value] of request.headers.entries()) {
        if (!STRIP_HEADERS.has(key.toLowerCase())) {
            headers.set(key, value);
        }
    }
    return headers;
}

async function handle(request, { params }) {
    const slug = await params;
    const pathSegments = slug.path ?? [];
    const path = pathSegments.join('/');

    const { search } = new URL(request.url);
    const targetUrl = `${MUAPI_BASE}/api/v1/${path}${search}`;

    const headers = buildUpstreamHeaders(request);
    const apiKey = getApiKey(request);
    if (apiKey) headers.set('x-api-key', apiKey);

    const method = request.method;
    let body;
    if (method !== 'GET' && method !== 'HEAD') {
        const buf = await request.arrayBuffer();
        if (buf.byteLength > 0) body = buf;
    }

    try {
        const upstream = await fetch(targetUrl, { method, headers, body });
        const responseBuffer = await upstream.arrayBuffer();
        const contentType = upstream.headers.get('content-type') ?? 'application/octet-stream';

        return new NextResponse(responseBuffer, {
            status: upstream.status,
            headers: { 'content-type': contentType },
        });
    } catch (error) {
        console.error(`[/api/muapi] Proxy error → ${targetUrl}:`, error.message);
        return NextResponse.json({ error: 'Upstream request failed', detail: error.message }, { status: 502 });
    }
}

export { handle as GET, handle as POST, handle as PUT, handle as DELETE, handle as PATCH };
