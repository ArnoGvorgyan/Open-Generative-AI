"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _navigation = require("next/navigation");
var _axios = _interopRequireDefault(require("axios"));
var _reactMarkdown = _interopRequireDefault(require("react-markdown"));
var _remarkGfm = _interopRequireDefault(require("remark-gfm"));
var _io = require("react-icons/io5");
var _hi = require("react-icons/hi2");
var _md = require("react-icons/md");
var _ri = require("react-icons/ri");
var _hi2 = require("react-icons/hi");
var _bi = require("react-icons/bi");
var _vsc = require("react-icons/vsc");
var _themes = require("./components/themes");
var _fa = require("react-icons/fa6");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t1 in e) "default" !== _t1 && {}.hasOwnProperty.call(e, _t1) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t1)) && (i.get || i.set) ? o(f, _t1, i) : f[_t1] = e[_t1]); return f; })(e, t); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BASE_URL = "/api/agents"; // "https://api.muapi.ai/agents";

var formatMessageTime = function formatMessageTime(date) {
  if (!date) return "";
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(new Date(date));
};
var getDateHeader = function getDateHeader(date) {
  var d = new Date(date);
  var now = new Date();
  var yesterday = new Date(now);
  yesterday.setDate(now.getDate() - 1);
  if (d.toDateString() === now.toDateString()) return "Today";
  if (d.toDateString() === yesterday.toDateString()) return "Yesterday";
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: d.getFullYear() !== now.getFullYear() ? "numeric" : undefined
  });
};
var parseMessageContent = function parseMessageContent(text) {
  if (!text) return [];
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  var parts = [];
  var lastIndex = 0;
  var match;
  while ((match = urlRegex.exec(text)) !== null) {
    var start = match.index;
    var end = start + match[0].length;
    var url = match[0];
    if (start > lastIndex) {
      parts.push({
        type: "text",
        content: text.substring(lastIndex, start)
      });
    }
    var cleanUrl = url.split("?")[0].toLowerCase();
    var isImage = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(cleanUrl);
    var isVideo = /\.(mp4|webm|mov|ogg)$/i.test(cleanUrl);
    var isAudio = /\.(mp3|wav|mpeg)$/i.test(cleanUrl);
    if (isImage) {
      parts.push({
        type: "image",
        url: url
      });
    } else if (isVideo) {
      parts.push({
        type: "video",
        url: url
      });
    } else if (isAudio) {
      parts.push({
        type: "audio",
        url: url
      });
    } else {
      parts.push({
        type: "text",
        content: url
      });
    }
    lastIndex = end;
  }
  if (lastIndex < text.length) {
    parts.push({
      type: "text",
      content: text.substring(lastIndex)
    });
  }
  return parts;
};
var CopyButton = function CopyButton(_ref) {
  var text = _ref.text;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    copied = _useState2[0],
    setCopied = _useState2[1];
  var handleCopy = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            _context.n = 1;
            return navigator.clipboard.writeText(text);
          case 1:
            setCopied(true);
            setTimeout(function () {
              return setCopied(false);
            }, 2000);
            _context.n = 3;
            break;
          case 2:
            _context.p = 2;
            _t = _context.v;
            console.error("Failed to copy text: ", _t);
          case 3:
            return _context.a(2);
        }
      }, _callee, null, [[0, 2]]);
    }));
    return function handleCopy() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
    onClick: handleCopy,
    className: "p-1.5 rounded-lg border transition-all group relative border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--component-hover)]",
    title: "Copy to clipboard",
    type: "button",
    children: [copied ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdCheck, {
      className: "w-3.5 h-3.5 text-green-400"
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdContentCopy, {
      className: "w-3.5 h-3.5"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded pointer-events-none transition-opacity duration-200 ".concat(copied ? "opacity-100" : "opacity-0"),
      children: "Copied!"
    })]
  });
};
var ChatPage = function ChatPage(_ref3) {
  var _agentDetails$owner_e, _agentDetails$initial;
  var initialAgentDetails = _ref3.initialAgentDetails,
    useUser = _ref3.useUser,
    _ref3$usedIn = _ref3.usedIn,
    usedIn = _ref3$usedIn === void 0 ? "muapiapp" : _ref3$usedIn,
    useSidebar = _ref3.useSidebar,
    _ref3$searchQuery = _ref3.searchQuery,
    searchQuery = _ref3$searchQuery === void 0 ? "" : _ref3$searchQuery,
    _ref3$setSearchQuery = _ref3.setSearchQuery,
    setSearchQuery = _ref3$setSearchQuery === void 0 ? function () {} : _ref3$setSearchQuery,
    _ref3$getSearchItems = _ref3.getSearchItems,
    getSearchItems = _ref3$getSearchItems === void 0 ? function () {} : _ref3$getSearchItems,
    _ref3$initialHistory = _ref3.initialHistory,
    initialHistory = _ref3$initialHistory === void 0 ? null : _ref3$initialHistory;
  var _useParams = (0, _navigation.useParams)(),
    routeAgentId = _useParams.id,
    agent_id = _useParams.agent_id,
    agent_name = _useParams.agent_name,
    routeConversationId = _useParams.conversation_id;
  var effectiveAgentId = agent_id || agent_name || routeAgentId;
  var lowerAgentSlug = effectiveAgentId === null || effectiveAgentId === void 0 ? void 0 : effectiveAgentId.toLowerCase();
  var effectiveConversationId = routeConversationId;
  var router = (0, _navigation.useRouter)();
  var userContext = useUser ? useUser() : {};
  var userName = "User";
  var userProfile = null;
  if (usedIn === "vadoo") {
    var _serverDetails$user_d, _serverDetails$user_d2;
    var serverDetails = userContext.serverDetails;
    userName = (serverDetails === null || serverDetails === void 0 || (_serverDetails$user_d = serverDetails.user_details) === null || _serverDetails$user_d === void 0 ? void 0 : _serverDetails$user_d.name) || "User";
    userProfile = serverDetails === null || serverDetails === void 0 || (_serverDetails$user_d2 = serverDetails.user_details) === null || _serverDetails$user_d2 === void 0 ? void 0 : _serverDetails$user_d2.profile;
  } else if (usedIn === "muapiapp") {
    // muapiapp
    var user = userContext.user;
    userName = (user === null || user === void 0 ? void 0 : user.username) || (user === null || user === void 0 ? void 0 : user.name) || "User";
    userProfile = user === null || user === void 0 ? void 0 : user.profile_photo;
  }
  var _useState3 = (0, _react.useState)(function () {
      if (initialHistory && initialHistory.history) {
        return initialHistory.history.map(function (msg, i) {
          var ts = msg.timestamp || initialHistory.created_at || new Date();
          if (typeof ts === 'string' && ts.includes('T') && !ts.endsWith('Z') && !ts.includes('+')) {
            ts += 'Z';
          }
          return _objectSpread(_objectSpread({}, msg), {}, {
            id: msg.id || "".concat(msg.role, "_").concat(Date.now(), "_").concat(i),
            timestamp: ts
          });
        });
      }
      return [];
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    messages = _useState4[0],
    setMessages = _useState4[1];
  var _useState5 = (0, _react.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    input = _useState6[0],
    setInput = _useState6[1];
  var _useState7 = (0, _react.useState)(function () {
      if (typeof window !== 'undefined' && effectiveConversationId) {
        return !!sessionStorage.getItem('pending_first_msg');
      }
      return false;
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    isStreaming = _useState8[0],
    setIsStreaming = _useState8[1];
  var _useState9 = (0, _react.useState)(initialAgentDetails || null),
    _useState0 = _slicedToArray(_useState9, 2),
    agentDetails = _useState0[0],
    setAgentDetails = _useState0[1];
  var _useState1 = (0, _react.useState)(null),
    _useState10 = _slicedToArray(_useState1, 2),
    error = _useState10[0],
    setError = _useState10[1];
  var _useState11 = (0, _react.useState)([]),
    _useState12 = _slicedToArray(_useState11, 2),
    debugLogs = _useState12[0],
    setDebugLogs = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showDebug = _useState14[0],
    setShowDebug = _useState14[1];
  var conversationIdRef = (0, _react.useRef)(null);
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showDropdown = _useState16[0],
    setShowDropdown = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    showThemeDropdown = _useState18[0],
    setShowThemeDropdown = _useState18[1];
  var _useState19 = (0, _react.useState)(null),
    _useState20 = _slicedToArray(_useState19, 2),
    selectedMedia = _useState20[0],
    setSelectedMedia = _useState20[1];
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    downloadingUrl = _useState22[0],
    setDownloadingUrl = _useState22[1];
  var _useState23 = (0, _react.useState)(function () {
      var themeData = initialAgentDetails === null || initialAgentDetails === void 0 ? void 0 : initialAgentDetails.theme;
      if (typeof themeData === 'string' && _themes.themes[themeData]) {
        return _themes.themes[themeData];
      }
      if (themeData && _typeof(themeData) === 'object' && themeData.colors) {
        return themeData;
      }
      return _themes.themes.cosmic;
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    currentTheme = _useState24[0],
    setCurrentTheme = _useState24[1];
  var textareaRef = (0, _react.useRef)(null);
  var scrollRef = (0, _react.useRef)(null);
  var _useState25 = (0, _react.useState)([]),
    _useState26 = _slicedToArray(_useState25, 2),
    attachments = _useState26[0],
    setAttachments = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isUploading = _useState28[0],
    setIsUploading = _useState28[1];
  var _useState29 = (0, _react.useState)(0),
    _useState30 = _slicedToArray(_useState29, 2),
    uploadProgress = _useState30[0],
    setUploadProgress = _useState30[1];
  var _useState31 = (0, _react.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    isDragging = _useState32[0],
    setIsDragging = _useState32[1];
  var fileInputRef = (0, _react.useRef)(null);
  var currentAssistantMsgRef = (0, _react.useRef)({
    content: "",
    thoughts: "",
    status: [],
    suggestions: []
  });
  var _useState33 = (0, _react.useState)(false),
    _useState34 = _slicedToArray(_useState33, 2),
    showCustomColorPanel = _useState34[0],
    setShowCustomColorPanel = _useState34[1];
  var _useState35 = (0, _react.useState)(false),
    _useState36 = _slicedToArray(_useState35, 2),
    isMounted = _useState36[0],
    setIsMounted = _useState36[1];
  var _useState37 = (0, _react.useState)(agentDetails ? agentDetails === null || agentDetails === void 0 ? void 0 : agentDetails.has_liked : false),
    _useState38 = _slicedToArray(_useState37, 2),
    liked = _useState38[0],
    setLiked = _useState38[1];
  var _useState39 = (0, _react.useState)(agentDetails ? agentDetails === null || agentDetails === void 0 ? void 0 : agentDetails.like_count : 0),
    _useState40 = _slicedToArray(_useState39, 2),
    likeCount = _useState40[0],
    setLikeCount = _useState40[1];
  (0, _react.useEffect)(function () {
    setIsMounted(true);
  }, []);
  (0, _react.useEffect)(function () {
    var fetchHistory = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var pending, _JSON$parse, convId, endpoint, res, hydratedMessages, _t2, _t3;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!(messages.length > 0)) {
                _context2.n = 1;
                break;
              }
              conversationIdRef.current = effectiveConversationId;
              return _context2.a(2);
            case 1:
              if (!(effectiveConversationId && lowerAgentSlug)) {
                _context2.n = 8;
                break;
              }
              pending = sessionStorage.getItem('pending_first_msg');
              if (!pending) {
                _context2.n = 5;
                break;
              }
              _context2.p = 2;
              _JSON$parse = JSON.parse(pending), convId = _JSON$parse.convId;
              if (!(convId === effectiveConversationId)) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2);
            case 3:
              _context2.n = 5;
              break;
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
            case 5:
              _context2.p = 5;
              endpoint = "".concat(BASE_URL, "/by-slug/").concat(lowerAgentSlug, "/").concat(effectiveConversationId);
              _context2.n = 6;
              return _axios["default"].get(endpoint);
            case 6:
              res = _context2.v;
              if (res.data && res.data.history) {
                hydratedMessages = res.data.history.map(function (msg, i) {
                  var ts = msg.timestamp || res.data.created_at || new Date();
                  if (typeof ts === 'string' && ts.includes('T') && !ts.endsWith('Z') && !ts.includes('+')) {
                    ts += 'Z';
                  }
                  return _objectSpread(_objectSpread({}, msg), {}, {
                    id: msg.id || "".concat(msg.role, "_").concat(Date.now(), "_").concat(i),
                    timestamp: ts
                  });
                });
                if (hydratedMessages.length > 0) {
                  setMessages(hydratedMessages);
                }
                conversationIdRef.current = effectiveConversationId;
              }
              _context2.n = 8;
              break;
            case 7:
              _context2.p = 7;
              _t3 = _context2.v;
              console.error("Failed to fetch conversation history:", _t3);
            case 8:
              return _context2.a(2);
          }
        }, _callee2, null, [[5, 7], [2, 4]]);
      }));
      return function fetchHistory() {
        return _ref4.apply(this, arguments);
      };
    }();
    fetchHistory();
  }, [effectiveConversationId, lowerAgentSlug]);
  var handleCustomColorChange = function handleCustomColorChange(part, color) {
    var updatedTheme = _objectSpread(_objectSpread({}, currentTheme), {}, {
      id: 'custom',
      name: 'Custom Theme',
      colors: _objectSpread(_objectSpread({}, currentTheme.colors), {}, _defineProperty({}, part, color))
    });
    setCurrentTheme(updatedTheme);
  };
  var handleThemeSync = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(theme) {
      var _t4;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            _context3.p = 0;
            _context3.n = 1;
            return _axios["default"].put("".concat(BASE_URL, "/by-slug/").concat(lowerAgentSlug), {
              theme: theme
            });
          case 1:
            _context3.n = 3;
            break;
          case 2:
            _context3.p = 2;
            _t4 = _context3.v;
            console.error("Failed to save theme:", _t4);
          case 3:
            setShowCustomColorPanel(false);
          case 4:
            return _context3.a(2);
        }
      }, _callee3, null, [[0, 2]]);
    }));
    return function handleThemeSync(_x) {
      return _ref5.apply(this, arguments);
    };
  }();
  var generateCssVariables = function generateCssVariables(theme) {
    var c = (theme === null || theme === void 0 ? void 0 : theme.colors) || _themes.themes.cosmic.colors;
    return {
      "--bg-primary": c.background,
      "--text-primary": c.foreground,
      "--text-secondary": c.muted,
      "--border-color": c.border,
      "--component-bg": c.componentBg,
      "--component-hover": c.componentHover,
      "--header-bg": c.headerBg,
      "--user-bubble": c.userBubble,
      "--user-text": c.userText,
      "--agent-bubble": c.agentBubble,
      "--agent-text": c.agentText,
      "--input-bg": c.inputBg,
      "--accent": c.accent,
      "--accent-text": c.accentText,
      "--font-family": "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    };
  };
  var handleDownloadFile = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(file_url) {
      var filename,
        response,
        signed_url,
        fetchResponse,
        blob,
        url,
        link,
        _args4 = arguments,
        _t5;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            filename = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : "download";
            if (file_url) {
              _context4.n = 1;
              break;
            }
            toast.error("File URL not found");
            return _context4.a(2);
          case 1:
            setDownloadingUrl(file_url);
            _context4.p = 2;
            _context4.n = 3;
            return _axios["default"].post("/api/workflow/cloudfront-signed-url", {
              url: file_url
            });
          case 3:
            response = _context4.v;
            signed_url = response.data.signed_url;
            _context4.n = 4;
            return fetch(signed_url, {
              mode: "cors"
            });
          case 4:
            fetchResponse = _context4.v;
            _context4.n = 5;
            return fetchResponse.blob();
          case 5:
            blob = _context4.v;
            url = window.URL.createObjectURL(blob);
            link = document.createElement("a");
            link.href = url;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
            _context4.n = 7;
            break;
          case 6:
            _context4.p = 6;
            _t5 = _context4.v;
            console.error("Download failed:", _t5);
            toast.error("Download failed: ".concat(_t5.message));
          case 7:
            _context4.p = 7;
            setDownloadingUrl(null);
            return _context4.f(7);
          case 8:
            return _context4.a(2);
        }
      }, _callee4, null, [[2, 6, 7, 8]]);
    }));
    return function handleDownloadFile(_x2) {
      return _ref6.apply(this, arguments);
    };
  }();
  (0, _react.useEffect)(function () {
    if (agentDetails !== null && agentDetails !== void 0 && agentDetails.theme && _themes.themes[agentDetails.theme]) {
      setCurrentTheme(_themes.themes[agentDetails.theme]);
    }
  }, [agentDetails]);
  (0, _react.useEffect)(function () {
    if (initialAgentDetails) {
      setAgentDetails(initialAgentDetails);
    } else {
      // fetchAgentDetails();
    }
  }, [lowerAgentSlug, initialAgentDetails]);
  (0, _react.useEffect)(function () {
    var checkPendingMessage = /*#__PURE__*/function () {
      var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
        var pending, _JSON$parse2, convId, text, pendingAttachments;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              if (effectiveConversationId) {
                pending = sessionStorage.getItem('pending_first_msg');
                if (pending) {
                  try {
                    _JSON$parse2 = JSON.parse(pending), convId = _JSON$parse2.convId, text = _JSON$parse2.text, pendingAttachments = _JSON$parse2.attachments;
                    if (convId === effectiveConversationId) {
                      sessionStorage.removeItem('pending_first_msg');
                      setTimeout(function () {
                        handleSendMessage(null, text, pendingAttachments);
                      }, 100);
                    }
                  } catch (e) {
                    console.error("Failed to parse pending message", e);
                  }
                }
              }
            case 1:
              return _context5.a(2);
          }
        }, _callee5);
      }));
      return function checkPendingMessage() {
        return _ref7.apply(this, arguments);
      };
    }();
    checkPendingMessage();
  }, [effectiveConversationId]);
  (0, _react.useEffect)(function () {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = "".concat(textareaRef.current.scrollHeight, "px");
    }
  }, [input]);
  (0, _react.useEffect)(function () {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [messages]);
  var fetchAgentDetails = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
      var endpoint, response, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            _context6.p = 0;
            endpoint = "".concat(BASE_URL, "/by-slug/").concat(lowerAgentSlug);
            _context6.n = 1;
            return _axios["default"].get(endpoint);
          case 1:
            response = _context6.v;
            setAgentDetails(response.data);
            _context6.n = 3;
            break;
          case 2:
            _context6.p = 2;
            _t6 = _context6.v;
            setAgentDetails({
              name: "Autonomous Agent",
              description: "MuAPI Powered Intelligence."
            });
          case 3:
            return _context6.a(2);
        }
      }, _callee6, null, [[0, 2]]);
    }));
    return function fetchAgentDetails() {
      return _ref8.apply(this, arguments);
    };
  }();
  var uploadFile = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(file) {
      var response, _response$data, url, fields, formData, prefix, uploadedUrl, _t7;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.p = _context7.n) {
          case 0:
            if (file) {
              _context7.n = 1;
              break;
            }
            return _context7.a(2);
          case 1:
            if (!(file.size > 10 * 1024 * 1024)) {
              _context7.n = 2;
              break;
            }
            setError("File size too large (max 10MB)");
            return _context7.a(2);
          case 2:
            _context7.p = 2;
            setUploadProgress(0);
            setIsUploading(true);
            _context7.n = 3;
            return _axios["default"].get("/api/app/get_file_upload_url", {
              params: {
                filename: file.name
              }
            });
          case 3:
            response = _context7.v;
            _response$data = response.data, url = _response$data.url, fields = _response$data.fields;
            formData = new FormData();
            Object.entries(fields).forEach(function (_ref0) {
              var _ref1 = _slicedToArray(_ref0, 2),
                key = _ref1[0],
                value = _ref1[1];
              formData.append(key, value);
            });
            formData.append("file", file);
            _context7.n = 4;
            return _axios["default"].post(url, formData, {
              headers: {
                "Content-Type": "multipart/form-data"
              },
              onUploadProgress: function onUploadProgress(progressEvent) {
                var percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                setUploadProgress(percent);
              }
            });
          case 4:
            prefix = "https://cdn.muapi.ai/";
            uploadedUrl = prefix + fields.key;
            setAttachments(function (prev) {
              return [].concat(_toConsumableArray(prev), [uploadedUrl]);
            });
            _context7.n = 6;
            break;
          case 5:
            _context7.p = 5;
            _t7 = _context7.v;
            console.error("Upload failed", _t7);
            setError("Failed to upload image.");
          case 6:
            _context7.p = 6;
            setIsUploading(false);
            setUploadProgress(0);
            if (fileInputRef.current) fileInputRef.current.value = "";
            return _context7.f(6);
          case 7:
            return _context7.a(2);
        }
      }, _callee7, null, [[2, 5, 6, 7]]);
    }));
    return function uploadFile(_x3) {
      return _ref9.apply(this, arguments);
    };
  }();
  var handleFileUpload = function handleFileUpload(e) {
    var file = e.target.files[0];
    uploadFile(file);
  };
  var handleDragOver = function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  };
  var handleDragLeave = function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  };
  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    var file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      uploadFile(file);
    } else if (file) {
      setError("Please only upload image files.");
    }
  };
  var removeAttachment = function removeAttachment(url) {
    setAttachments(function (prev) {
      return prev.filter(function (item) {
        return item !== url;
      });
    });
  };
  var handleThemeChange = /*#__PURE__*/function () {
    var _ref10 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(theme) {
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            setCurrentTheme(theme);
            handleThemeSync(theme);
          case 1:
            return _context8.a(2);
        }
      }, _callee8);
    }));
    return function handleThemeChange(_x4) {
      return _ref10.apply(this, arguments);
    };
  }();
  var handleLike = /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9() {
      var newLiked, prevLikeCount, res, _t8;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.p = _context9.n) {
          case 0:
            newLiked = !liked;
            prevLikeCount = likeCount; // Optimistic update
            setLiked(newLiked);
            setLikeCount(function (prev) {
              return newLiked ? prev + 1 : prev - 1;
            });
            _context9.p = 1;
            _context9.n = 2;
            return _axios["default"].post("/api/agents/by-slug/".concat(lowerAgentSlug, "/like?is_like=").concat(newLiked));
          case 2:
            res = _context9.v;
            setLiked(res.data.has_liked);
            setLikeCount(res.data.like_count);
            _context9.n = 4;
            break;
          case 3:
            _context9.p = 3;
            _t8 = _context9.v;
            console.error("Failed to sync like:", _t8);
            // Rollback
            setLiked(!newLiked);
            setLikeCount(prevLikeCount);
          case 4:
            return _context9.a(2);
        }
      }, _callee9, null, [[1, 3]]);
    }));
    return function handleLike() {
      return _ref11.apply(this, arguments);
    };
  }();
  var handleNewChat = function handleNewChat() {
    if (lowerAgentSlug) {
      router.push("/agents/".concat(lowerAgentSlug));
    }
  };
  var handleSendMessage = /*#__PURE__*/function () {
    var _ref12 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(e) {
      var overrideText,
        overrideAttachments,
        userText,
        currentAttachments,
        userMessage,
        assistantMsgId,
        currentConvId,
        newConvId,
        initialRes,
        request_id,
        pollInterval,
        isComplete,
        errors,
        _loop,
        errorMessage,
        _err$response,
        status,
        data,
        _args1 = arguments,
        _t0;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.p = _context1.n) {
          case 0:
            overrideText = _args1.length > 1 && _args1[1] !== undefined ? _args1[1] : null;
            overrideAttachments = _args1.length > 2 && _args1[2] !== undefined ? _args1[2] : null;
            if (e) e.preventDefault();
            userText = overrideText || input;
            currentAttachments = overrideAttachments || (overrideText ? [] : attachments);
            if (userText.trim()) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            if (!(isStreaming && !overrideText)) {
              _context1.n = 2;
              break;
            }
            return _context1.a(2);
          case 2:
            if (overrideText) setIsStreaming(false);
            userMessage = {
              role: "user",
              content: userText,
              attachments: _toConsumableArray(currentAttachments),
              timestamp: new Date()
            };
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [userMessage]);
            });
            if (!overrideText) {
              setAttachments([]);
              setInput("");
            }
            setIsStreaming(true);
            setError(null);
            setDebugLogs([]);
            assistantMsgId = "asst_".concat(Date.now());
            currentAssistantMsgRef.current = {
              id: assistantMsgId,
              role: "assistant",
              content: "",
              thoughts: "",
              status: [],
              suggestions: [],
              timestamp: new Date()
            };
            setMessages(function (prev) {
              return [].concat(_toConsumableArray(prev), [_objectSpread({}, currentAssistantMsgRef.current)]);
            });
            _context1.p = 3;
            currentConvId = conversationIdRef.current || effectiveConversationId;
            if (!(!currentConvId && !overrideText)) {
              _context1.n = 4;
              break;
            }
            newConvId = crypto.randomUUID();
            conversationIdRef.current = newConvId;
            sessionStorage.setItem('pending_first_msg', JSON.stringify({
              convId: newConvId,
              text: userText,
              attachments: currentAttachments,
              timestamp: new Date().toISOString()
            }));
            if (lowerAgentSlug) {
              router.replace("/agents/".concat(lowerAgentSlug, "/").concat(newConvId));
            }
            return _context1.a(2);
          case 4:
            _context1.n = 5;
            return _axios["default"].post("".concat(BASE_URL, "/by-slug/").concat(lowerAgentSlug, "/chat"), {
              message: userText,
              stream: false,
              conversation_id: currentConvId,
              attachments: userMessage.attachments
            });
          case 5:
            initialRes = _context1.v;
            request_id = initialRes.data.request_id;
            if (request_id) {
              _context1.n = 6;
              break;
            }
            throw new Error("No Request ID returned from agent");
          case 6:
            pollInterval = 1000;
            isComplete = false;
            errors = 0;
            _loop = /*#__PURE__*/_regenerator().m(function _loop() {
              var pollRes, data, incomingMessages, newContent, newThoughts, newStatus, _t9;
              return _regenerator().w(function (_context0) {
                while (1) switch (_context0.p = _context0.n) {
                  case 0:
                    _context0.p = 0;
                    _context0.n = 1;
                    return _axios["default"].get("/api/api/v1/predictions/".concat(request_id, "/result"));
                  case 1:
                    pollRes = _context0.v;
                    data = pollRes.data; // data format from backend execute_agent_chat_background:
                    // { 
                    //   conversation_id, 
                    //   messages: [{role, content...}, {type:'pulse'...}],
                    //   status_text, 
                    //   is_complete, 
                    //   suggestions,
                    //   error
                    // }
                    if (data.conversation_id) conversationIdRef.current = data.conversation_id;
                    incomingMessages = data.messages || [];
                    newContent = "";
                    newThoughts = "";
                    newStatus = [];
                    incomingMessages.forEach(function (msg) {
                      if (msg.role === "assistant" && msg.content) {
                        newContent = msg.content;
                      }
                      if (msg.type === "pulse" && msg.content) {
                        newStatus.push(msg.content);
                      }
                      if (msg.role === "assistant" && msg.thoughts) {
                        newThoughts = msg.thoughts;
                      }
                    });
                    currentAssistantMsgRef.current.content = newContent;
                    currentAssistantMsgRef.current.status = newStatus;
                    currentAssistantMsgRef.current.suggestions = data.suggestions || [];
                    setMessages(function (prev) {
                      var index = prev.findIndex(function (m) {
                        return m.id === assistantMsgId;
                      });
                      if (index !== -1) {
                        var newMessages = _toConsumableArray(prev);
                        newMessages[index] = _objectSpread(_objectSpread({}, newMessages[index]), {}, {
                          content: newContent,
                          status: newStatus,
                          suggestions: data.suggestions || []
                        });
                        return newMessages;
                      }
                      return prev;
                    });
                    if (!(data.status === "failed")) {
                      _context0.n = 2;
                      break;
                    }
                    throw new Error(data.error || "Agent execution failed");
                  case 2:
                    if (!(data.status === "completed" || data.status === "succeeded" || data.is_complete)) {
                      _context0.n = 3;
                      break;
                    }
                    isComplete = true;
                    _context0.n = 4;
                    break;
                  case 3:
                    _context0.n = 4;
                    return new Promise(function (r) {
                      return setTimeout(r, pollInterval);
                    });
                  case 4:
                    _context0.n = 6;
                    break;
                  case 5:
                    _context0.p = 5;
                    _t9 = _context0.v;
                    console.error("Polling error", _t9);
                    errors++;
                    _context0.n = 6;
                    return new Promise(function (r) {
                      return setTimeout(r, 2000);
                    });
                  case 6:
                    return _context0.a(2);
                }
              }, _loop, null, [[0, 5]]);
            });
          case 7:
            if (!(!isComplete && errors < 5)) {
              _context1.n = 9;
              break;
            }
            return _context1.d(_regeneratorValues(_loop()), 8);
          case 8:
            _context1.n = 7;
            break;
          case 9:
            if (!(errors >= 5)) {
              _context1.n = 10;
              break;
            }
            throw new Error("Lost connection to agent process");
          case 10:
            _context1.n = 12;
            break;
          case 11:
            _context1.p = 11;
            _t0 = _context1.v;
            console.log("Agent error:", _t0);
            errorMessage = _t0.message || "Something went wrong. Check browser console";
            if (_t0.response) {
              _err$response = _t0.response, status = _err$response.status, data = _err$response.data;
              errorMessage = (data === null || data === void 0 ? void 0 : data.error) || "Not enough credits";
            } else {
              errorMessage = _t0.message;
            }
            setError(errorMessage);
            if (!currentAssistantMsgRef.current.content) {
              setMessages(function (prev) {
                return prev.filter(function (m) {
                  return m.id !== assistantMsgId;
                });
              });
            }
          case 12:
            _context1.p = 12;
            setIsStreaming(false);
            return _context1.f(12);
          case 13:
            return _context1.a(2);
        }
      }, _callee0, null, [[3, 11, 12, 13]]);
    }));
    return function handleSendMessage(_x5) {
      return _ref12.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
    className: "h-dvh flex flex-col selection:bg-blue-500/30 relative",
    style: _objectSpread(_objectSpread({}, generateCssVariables(currentTheme)), {}, {
      background: "var(--bg-primary)",
      color: "var(--text-primary)",
      fontFamily: "var(--font-family)"
    }),
    children: [isMounted && /*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      dangerouslySetInnerHTML: {
        __html: "\n          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n          \n          main {\n            font-family: var(--font-family) !important;\n          }\n          \n          .prose, .prose p, .prose h1, .prose h2, .prose h3, .prose h4, .prose li {\n            font-family: var(--font-family) !important;\n          }\n        "
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("header", {
      className: "flex-shrink-0 border-b backdrop-blur-2xl px-6 py-4 flex items-center justify-center z-10 shadow-lg transition-colors duration-300 bg-[var(--header-bg)] border-[var(--border-color)]",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center justify-between gap-4 w-full lg:max-w-[80%]",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center gap-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return window.history.back();
            },
            className: "flex items-center justify-center transition-all group",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoChevronBack, {
              className: "w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [agentDetails !== null && agentDetails !== void 0 && agentDetails.icon_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: agentDetails.icon_url,
              alt: agentDetails.name,
              className: "w-9 h-9 rounded-lg object-cover border border-[var(--border-color)]"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-9 h-9 rounded-lg flex items-center justify-center",
              style: {
                background: 'var(--accent)',
                color: 'var(--accent-text)'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                className: "w-5 h-5"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                onClick: function onClick() {
                  return setShowDropdown(!showDropdown);
                },
                className: "flex items-center gap-2 px-2 py-1 rounded-lg transition-all hover:bg-[var(--component-hover)]",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "flex flex-col items-start leading-tight",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
                    className: "text-base font-semibold text-[var(--text-primary)] truncate",
                    children: (agentDetails === null || agentDetails === void 0 ? void 0 : agentDetails.name) || "Loading..."
                  }), agentDetails && !agentDetails.is_owner && (agentDetails.owner_username || agentDetails.owner_email) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                    className: "text-[10px] text-[var(--text-secondary)] font-medium",
                    children: ["by ", agentDetails.owner_username || ((_agentDetails$owner_e = agentDetails.owner_email) === null || _agentDetails$owner_e === void 0 ? void 0 : _agentDetails$owner_e.split('@')[0])]
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoChevronBack, {
                  className: "w-4 h-4 text-[var(--text-secondary)] transition-transform ".concat(showDropdown ? "rotate-90" : "-rotate-180")
                })]
              }), showDropdown && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "absolute top-10 left-0 border rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 min-w-[200px] bg-[var(--header-bg)] border-[var(--border-color)]",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                  onClick: function onClick() {
                    setShowDropdown(false);
                    router.push("/agents/".concat(lowerAgentSlug, "/profile"));
                  },
                  type: "button",
                  className: "w-full flex items-center gap-3 px-3 py-2 transition-all hover:bg-[var(--component-hover)] rounded-t-lg",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                    size: 16,
                    className: "text-[var(--text-secondary)]"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "text-sm text-[var(--text-primary)]",
                    children: "View Profile"
                  })]
                }), (agentDetails === null || agentDetails === void 0 ? void 0 : agentDetails.is_owner) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                    onClick: function onClick() {
                      setShowDropdown(false);
                      router.push("/agents/edit/".concat(agent_id));
                    },
                    type: "button",
                    className: "w-full flex items-center gap-3 px-3 py-2 transition-all hover:bg-[var(--component-hover)] border-t border-[var(--border-color)]",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdEdit, {
                      size: 16,
                      className: "text-[var(--text-secondary)]"
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                      className: "text-sm text-[var(--text-primary)]",
                      children: "Edit agent"
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "relative group/submenu",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                      onMouseEnter: function onMouseEnter() {
                        return setShowThemeDropdown(true);
                      },
                      onClick: function onClick() {
                        return setShowThemeDropdown(!showThemeDropdown);
                      },
                      type: "button",
                      className: "w-full flex items-center gap-3 px-3 py-2 transition-all hover:bg-[var(--component-hover)] border-t border-[var(--border-color)] rounded-b-lg ".concat(showThemeDropdown ? 'bg-[var(--component-hover)]' : ''),
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoColorPalette, {
                        size: 16,
                        className: "text-[var(--text-secondary)]"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "text-sm text-[var(--text-primary)]",
                        children: "Themes"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaAngleRight, {
                        size: 14,
                        className: "ml-auto text-[var(--text-secondary)]"
                      })]
                    }), showThemeDropdown && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "md:absolute relative md:left-full left-0 md:top-0 top-0 md:ml-1 ml-0 md:border border-none md:rounded-xl rounded-none md:shadow-2xl shadow-none overflow-hidden z-[60] animate-in fade-in md:slide-in-from-left-2 slide-in-from-top-2 duration-200 min-w-[200px] bg-[var(--header-bg)] md:border-[var(--border-color)] p-2",
                      onMouseEnter: function onMouseEnter() {
                        return setShowThemeDropdown(true);
                      },
                      onMouseLeave: function onMouseLeave() {
                        return setShowThemeDropdown(false);
                      },
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "text-[10px] font-bold text-[var(--text-secondary)] mb-2 px-2 uppercase tracking-[0.2em]",
                        children: "Select Theme"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "space-y-1 max-h-80 overflow-y-auto custom-scrollbar pr-1",
                        children: [Object.values(_themes.themes).map(function (theme) {
                          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                            onClick: function onClick() {
                              handleThemeChange(theme);
                              setShowThemeDropdown(false);
                              setShowDropdown(false);
                            },
                            type: "button",
                            className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all group/theme ".concat(currentTheme.id === theme.id ? "bg-[var(--accent)] text-[var(--accent-text)] shadow-md" : "text-[var(--text-secondary)] hover:bg-[var(--component-hover)]"),
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                              className: "w-4 h-4 rounded-full border border-white/20 shadow-inner flex-shrink-0",
                              style: {
                                background: theme.colors.background
                              }
                            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                              className: "font-medium",
                              children: theme.name
                            }), currentTheme.id === theme.id && /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdCheck, {
                              className: "ml-auto w-4 h-4"
                            })]
                          }, theme.id);
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                          onClick: function onClick() {
                            setShowCustomColorPanel(true);
                            setShowThemeDropdown(false);
                            setShowDropdown(false);
                          },
                          type: "button",
                          className: "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-[var(--text-secondary)] hover:bg-[var(--component-hover)] border-t border-[var(--border-color)] mt-1",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdEdit, {
                            className: "w-4 h-4"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            className: "font-medium",
                            children: "Customize Colors"
                          })]
                        })]
                      })]
                    })]
                  })]
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            type: "button",
            onClick: handleLike,
            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--component-hover)]",
            title: liked ? "Unlike agent" : "Like agent",
            children: [liked ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoHeart, {
              className: "w-4 h-4 text-red-500"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoHeartOutline, {
              className: "w-4 h-4"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs font-semibold",
              children: likeCount || 0
            })]
          }), effectiveConversationId && /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            type: "button",
            onClick: handleNewChat,
            className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--component-hover)]",
            title: "Start new chat",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_hi2.HiOutlinePencilAlt, {
              className: "w-4 h-4"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs hidden md:flex font-semibold",
              children: "New Chat"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex-1 flex overflow-y-auto",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        ref: scrollRef,
        className: "flex-1 overflow-y-auto px-4 py-8 custom-scrollbar",
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "max-w-3xl mx-auto space-y-6",
          children: [messages.length === 0 && agentDetails && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-6",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex justify-center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "px-4 py-1.5 rounded-full border text-[10px] uppercase tracking-widest font-bold bg-[var(--component-bg)] border-[var(--border-color)] text-[var(--text-secondary)]",
                children: "Today"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col items-start animate-in fade-in slide-in-from-bottom-2 duration-300",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex items-center gap-2 mb-1 ml-11",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "text-xs font-bold text-[var(--text-primary)]",
                  children: agentDetails === null || agentDetails === void 0 ? void 0 : agentDetails.name
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex gap-3 items-end max-w-[85%] group/msg",
                children: [agentDetails !== null && agentDetails !== void 0 && agentDetails.icon_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: agentDetails.icon_url,
                  alt: agentDetails.name,
                  className: "w-8 h-8 rounded-full object-cover border flex-shrink-0 border-[var(--border-color)] transition-all duration-500 ease-in-out"
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-in-out",
                  style: {
                    background: 'var(--accent)',
                    color: 'var(--accent-text)'
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                    className: "w-4 h-4"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "flex-1 space-y-3",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "flex items-end gap-2",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "backdrop-blur-sm rounded-2xl rounded-tl-md px-4 py-3 shadow-xl border inline-block",
                      style: {
                        background: 'var(--agent-bubble)',
                        color: 'var(--agent-text)',
                        borderColor: 'var(--border-color)'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "prose prose-sm max-w-none",
                        style: {
                          color: 'var(--agent-text)'
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                          children: agentDetails.welcome_message || "Hello! I am ".concat(agentDetails.name, ". ").concat(agentDetails.description || "How can I assist you today?")
                        })
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "opacity-0 group-hover/msg:opacity-100 transition-opacity",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CopyButton, {
                        text: (agentDetails === null || agentDetails === void 0 ? void 0 : agentDetails.welcome_message) || "Hello! I am ".concat(agentDetails.name, ". ").concat(agentDetails.description || "How can I assist you today?")
                      })
                    })]
                  }), ((_agentDetails$initial = agentDetails.initial_suggestions) === null || _agentDetails$initial === void 0 ? void 0 : _agentDetails$initial.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "flex flex-wrap gap-2 pt-2",
                    children: agentDetails.initial_suggestions.map(function (sug, i) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                        type: "button",
                        onClick: function onClick() {
                          setInput(sug.prompt);
                          if (textareaRef.current) {
                            textareaRef.current.focus();
                          }
                        },
                        className: "flex items-center gap-2 text-xs font-medium border px-3 py-2 rounded-lg transition-all group hover:opacity-80",
                        style: {
                          background: 'var(--component-bg)',
                          borderColor: 'var(--border-color)',
                          color: 'var(--text-primary)'
                        },
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_hi.HiLightBulb, {
                          className: "w-3.5 h-3.5 text-yellow-500 group-hover:scale-110 transition-transform"
                        }), sug.label]
                      }, i);
                    })
                  })]
                })]
              })]
            })]
          }), messages.map(function (msg, idx) {
            var _msg$attachments, _msg$status, _msg$suggestions;
            var prevMsg = messages[idx - 1];
            var showDateHeader = !prevMsg || new Date(msg.timestamp).toDateString() !== new Date(prevMsg.timestamp).toDateString();
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "space-y-6",
              children: [showDateHeader && msg.timestamp && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex justify-center",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "px-4 py-1.5 rounded-full border text-[10px] uppercase tracking-widest font-bold bg-[var(--component-bg)] border-[var(--border-color)] text-[var(--text-secondary)]",
                  children: getDateHeader(msg.timestamp)
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex ".concat(msg.role === "user" ? "justify-end" : "justify-start", " animate-in fade-in slide-in-from-bottom-2 duration-300"),
                children: msg.role === "user" ? /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "flex flex-col items-end max-w-[80%] group/msg",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "flex items-center gap-2 mb-1 mr-11",
                    children: [msg.timestamp && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text-[10px] font-medium text-[var(--text-secondary)]",
                      children: formatMessageTime(msg.timestamp)
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text-xs font-bold text-[var(--text-primary)]",
                      children: userName
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "flex gap-3 items-end w-full justify-end",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "flex-1 space-y-1 text-right",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "flex items-end justify-end gap-2",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                          className: "opacity-0 group-hover/msg:opacity-100 transition-opacity",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CopyButton, {
                            text: msg.content
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "px-4 py-3 rounded-2xl rounded-tr-md shadow-xl inline-block text-left",
                          style: {
                            background: 'var(--user-bubble)',
                            color: 'var(--user-text)'
                          },
                          children: [((_msg$attachments = msg.attachments) === null || _msg$attachments === void 0 ? void 0 : _msg$attachments.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "mb-3 flex flex-wrap justify-end gap-2",
                            children: msg.attachments.map(function (url, i) {
                              return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                                className: "relative group/user-att",
                                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                                  src: url,
                                  alt: "Uploaded Attachment",
                                  className: "w-24 h-24 sm:w-32 sm:h-32 rounded-xl object-cover border border-white/20 shadow-md cursor-pointer hover:scale-[1.02] transition-transform",
                                  onClick: function onClick() {
                                    return setSelectedMedia({
                                      type: "image",
                                      url: url
                                    });
                                  }
                                })
                              }, i);
                            })
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                            className: "text-sm leading-relaxed font-medium whitespace-pre-wrap",
                            children: msg.content
                          })]
                        })]
                      })
                    }), userProfile ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                      src: userProfile,
                      alt: userName,
                      className: "w-8 h-8 rounded-full object-cover border flex-shrink-0 border-[var(--border-color)] transition-all duration-500 ease-in-out"
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-in-out",
                      style: {
                        background: 'var(--accent)',
                        color: 'var(--accent-text)'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdPerson, {
                        className: "w-4 h-4"
                      })
                    })]
                  })]
                }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "flex flex-col items-start max-w-[85%] group/msg",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "flex items-center gap-2 mb-1 ml-11",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text-xs font-bold text-[var(--text-primary)]",
                      children: agentDetails === null || agentDetails === void 0 ? void 0 : agentDetails.name
                    }), msg.timestamp && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "text-[10px] font-medium text-[var(--text-secondary)]",
                      children: formatMessageTime(msg.timestamp)
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "flex gap-3 items-end w-full",
                    children: [agentDetails !== null && agentDetails !== void 0 && agentDetails.icon_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                      src: agentDetails.icon_url,
                      alt: agentDetails.name,
                      className: "w-8 h-8 rounded-full object-cover border flex-shrink-0 border-[var(--border-color)] transition-all duration-500 ease-in-out"
                    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ease-in-out",
                      style: {
                        background: 'var(--accent)',
                        color: 'var(--accent-text)'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                        className: "w-4 h-4"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "flex-1 space-y-3",
                      children: [((_msg$status = msg.status) === null || _msg$status === void 0 ? void 0 : _msg$status.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: msg.status.map(function (st, i) {
                          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                            className: "flex items-center gap-1.5 text-xs px-3 py-1 rounded-full border",
                            style: {
                              background: 'var(--component-bg)',
                              borderColor: 'var(--border-color)',
                              color: 'var(--accent)'
                            },
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdTerminal, {
                              className: "w-3 h-3"
                            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                              children: st
                            })]
                          }, i);
                        })
                      }), msg.thoughts && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "border rounded-xl p-4 space-y-2 bg-[var(--component-bg)] border-[var(--border-color)]",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "flex items-center gap-2 text-xs font-medium text-[var(--text-secondary)]",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                            className: "w-3.5 h-3.5"
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            children: "Thinking process"
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                          className: "text-xs leading-relaxed italic text-[var(--text-secondary)]",
                          children: msg.thoughts
                        })]
                      }), (msg.content || isStreaming && idx === messages.length - 1) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "flex items-end gap-2",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "backdrop-blur-sm rounded-2xl rounded-tl-md px-4 py-3 shadow-xl border inline-block",
                          style: {
                            background: 'var(--agent-bubble)',
                            color: 'var(--agent-text)',
                            borderColor: 'var(--border-color)'
                          },
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "prose prose-sm max-w-none",
                            style: {
                              color: 'var(--agent-text)'
                            },
                            children: parseMessageContent(msg.content || " ").map(function (part, i) {
                              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                children: [part.type === "text" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactMarkdown["default"], {
                                  remarkPlugins: [_remarkGfm["default"]],
                                  children: part.content
                                }), part.type === "image" && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "my-3 rounded-xl overflow-hidden border shadow-lg relative w-fit group/media bg-[var(--component-bg)] border-[var(--border-color)]",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                                    src: part.url,
                                    alt: "Generated Media",
                                    className: "w-full h-auto max-h-[300px] object-contain transition-transform duration-500 group-hover/media:scale-[1.02]",
                                    loading: "lazy"
                                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                    className: "absolute inset-0 bg-black/40 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4",
                                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                                      onClick: function onClick() {
                                        return setSelectedMedia({
                                          type: "image",
                                          url: part.url
                                        });
                                      },
                                      type: "button",
                                      className: "p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110",
                                      title: "View Full Screen",
                                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdFullscreen, {
                                        className: "w-6 h-6"
                                      })
                                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                                      onClick: function onClick() {
                                        return handleDownloadFile(part.url, "image-".concat(Date.now(), ".png"));
                                      },
                                      type: "button",
                                      className: "p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-110 disabled:opacity-50",
                                      title: "Download",
                                      disabled: downloadingUrl === part.url,
                                      children: downloadingUrl === part.url ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
                                        className: "w-6 h-6 animate-spin"
                                      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdFileDownload, {
                                        className: "w-6 h-6"
                                      })
                                    })]
                                  })]
                                }), part.type === "video" && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "my-3 rounded-xl overflow-hidden border shadow-lg relative w-fit group/media bg-[var(--component-bg)] border-[var(--border-color)]",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
                                    src: part.url,
                                    className: "w-full h-auto max-h-[300px] transition-transform duration-500 group-hover/media:scale-[1.02]"
                                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                    className: "absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 z-10",
                                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                                      onClick: function onClick() {
                                        return setSelectedMedia({
                                          type: "video",
                                          url: part.url
                                        });
                                      },
                                      className: "p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105",
                                      title: "View Full Screen",
                                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdFullscreen, {
                                        className: "w-5 h-5"
                                      })
                                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                                      onClick: function onClick() {
                                        return handleDownloadFile(part.url, "video-".concat(Date.now(), ".mp4"));
                                      },
                                      className: "p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 disabled:opacity-50",
                                      title: "Download",
                                      disabled: downloadingUrl === part.url,
                                      children: downloadingUrl === part.url ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
                                        className: "w-5 h-5 animate-spin"
                                      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdFileDownload, {
                                        className: "w-5 h-5"
                                      })
                                    })]
                                  })]
                                }), part.type === "audio" && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                                  className: "my-3 flex items-center gap-3 p-3 rounded-xl border backdrop-blur-sm bg-[var(--component-bg)] border-[var(--border-color)]",
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                                    className: "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                                    style: {
                                      background: 'var(--component-hover)',
                                      color: 'var(--accent)'
                                    },
                                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      fill: "none",
                                      viewBox: "0 0 24 24",
                                      strokeWidth: 1.5,
                                      stroke: "currentColor",
                                      className: "w-5 h-5",
                                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        d: "M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                                      })
                                    })
                                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("audio", {
                                    src: part.url,
                                    controls: true,
                                    className: "w-full h-8"
                                  })]
                                })]
                              }, i);
                            })
                          }), isStreaming && idx === messages.length - 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                            className: "flex gap-1 mt-2",
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                              className: "w-2 h-2 rounded-full animate-bounce",
                              style: {
                                background: 'var(--accent)',
                                animationDelay: "0ms"
                              }
                            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                              className: "w-2 h-2 rounded-full animate-bounce",
                              style: {
                                background: 'var(--accent)',
                                animationDelay: "150ms"
                              }
                            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                              className: "w-2 h-2 rounded-full animate-bounce",
                              style: {
                                background: 'var(--accent)',
                                animationDelay: "300ms"
                              }
                            })]
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                          className: "opacity-0 group-hover/msg:opacity-100 transition-opacity",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(CopyButton, {
                            text: msg.content
                          })
                        })]
                      }), ((_msg$suggestions = msg.suggestions) === null || _msg$suggestions === void 0 ? void 0 : _msg$suggestions.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: msg.suggestions.map(function (sug, i) {
                          return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                            onClick: function onClick() {
                              return setInput(sug.prompt);
                            },
                            className: "flex items-center gap-2 text-xs font-medium border px-3 py-2 rounded-lg transition-all hover:opacity-80",
                            style: {
                              background: 'var(--component-bg)',
                              borderColor: 'var(--border-color)',
                              color: 'var(--text-primary)'
                            },
                            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_hi.HiLightBulb, {
                              className: "w-3.5 h-3.5 text-yellow-500"
                            }), sug.label]
                          }, i);
                        })
                      })]
                    })]
                  })]
                })
              })]
            }, idx);
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("footer", {
      className: "flex-shrink-0 p-4",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "max-w-3xl mx-auto",
        children: [error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "mb-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
            className: "text-xs text-red-400 font-medium",
            children: ["Error: ", error]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return setError(null);
            },
            className: "text-red-400 hover:text-red-300",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdClose, {
              className: "w-4 h-4"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
          onSubmit: handleSendMessage,
          onDragOver: handleDragOver,
          onDragLeave: handleDragLeave,
          onDrop: handleDrop,
          className: "relative border rounded-2xl flex items-end gap-2 p-2 transition-all shadow-inner focus-within:border-[var(--accent)] ".concat(isDragging ? "ring-2 ring-[var(--accent)] border-[var(--accent)] bg-[var(--accent)]/5" : ""),
          style: {
            background: 'var(--input-bg)',
            borderColor: 'var(--border-color)'
          },
          children: [isDragging && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "absolute inset-0 z-50 flex items-center justify-center bg-[var(--accent)]/10 backdrop-blur-[2px] rounded-2xl pointer-events-none border-2 border-dashed border-[var(--accent)] animate-in fade-in duration-200",
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center justify-center gap-2 text-[var(--accent)]",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoAdd, {
                className: "w-8 h-8 animate-bounce"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-sm font-bold uppercase tracking-wider",
                children: "Drop image to upload"
              })]
            })
          }), attachments.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "absolute bottom-full left-0 right-0 mb-2 flex flex-wrap gap-2 animate-in slide-in-from-bottom-2",
            children: attachments.map(function (url, i) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "relative group/att",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: url,
                  className: "w-16 h-16 rounded-xl object-cover border-2 border-[var(--border-color)] shadow-lg",
                  alt: "Attachment Preview"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                  onClick: function onClick() {
                    return removeAttachment(url);
                  },
                  type: "button",
                  className: "absolute -top-1.5 -right-1.5 p-1 bg-red-500 text-white rounded-full shadow-lg opacity-0 group-hover/att:opacity-100 transition-opacity",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdClose, {
                    className: "w-3 h-3"
                  })
                })]
              }, i);
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
            type: "file",
            ref: fileInputRef,
            onChange: handleFileUpload,
            className: "hidden",
            accept: "image/*"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              var _fileInputRef$current;
              return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
            },
            type: "button",
            disabled: isUploading || isStreaming,
            className: "flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-[var(--component-hover)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] disabled:opacity-50 shadow-sm relative overflow-hidden",
            title: "Upload Image",
            children: isUploading ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
                className: "w-4 h-4 animate-spin opacity-20"
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[var(--accent)]",
                children: [uploadProgress, "%"]
              })]
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoAdd, {
              className: "w-5 h-5"
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            ref: textareaRef,
            value: input,
            onChange: function onChange(e) {
              return setInput(e.target.value);
            },
            onKeyDown: function onKeyDown(e) {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            },
            disabled: isStreaming,
            placeholder: isStreaming ? "Agent is thinking..." : "Type here or drop an image...",
            className: "flex-1 bg-transparent px-3 py-2.5 text-sm focus:outline-none resize-none max-h-32 placeholder:text-gray-500 custom-scrollbar text-[var(--text-primary)]",
            rows: 1
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            type: "submit",
            disabled: !input.trim() || isStreaming,
            className: "flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
            style: {
              background: 'var(--accent)',
              color: 'var(--accent-text)'
            },
            children: isStreaming ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
              className: "w-4 h-4 animate-spin"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoSend, {
              className: "w-4 h-4"
            })
          })]
        })]
      })
    }), selectedMedia && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-in fade-in duration-300",
      onClick: function onClick() {
        return setSelectedMedia(null);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        className: "absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all border border-white/10 z-[110]",
        onClick: function onClick() {
          return setSelectedMedia(null);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdClose, {
          className: "w-6 h-6"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "max-w-[90vw] max-h-[90vh] relative animate-in zoom-in-95 duration-300",
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        children: [selectedMedia.type === "image" ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: selectedMedia.url,
          alt: "Full Screen",
          className: "w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl border border-white/10"
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
          src: selectedMedia.url,
          controls: true,
          autoPlay: true,
          className: "w-full h-auto max-h-[90vh] rounded-lg shadow-2xl border border-white/10"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex justify-center",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return handleDownloadFile(selectedMedia.url, "".concat(selectedMedia.type, "-").concat(Date.now(), ".").concat(selectedMedia.type === "image" ? "png" : "mp4"));
            },
            type: "button",
            className: "flex items-center gap-2 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50",
            disabled: downloadingUrl === selectedMedia.url,
            children: downloadingUrl === selectedMedia.url ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
                className: "w-5 h-5 animate-spin"
              }), "Preparing..."]
            }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdFileDownload, {
                className: "w-5 h-5"
              }), "Download"]
            })
          })
        })]
      })]
    }), showCustomColorPanel && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "absolute inset-0 z-[100] flex items-center justify-center p-4",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "absolute inset-0 bg-black/10 backdrop-blur-sm transition-opacity",
        onClick: function onClick() {
          return setShowCustomColorPanel(false);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "relative w-full max-w-md bg-[var(--header-bg)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoColorPalette, {
              className: "w-5 h-5 text-[var(--accent)]"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "font-bold text-[var(--text-primary)]",
              children: "Customize Theme"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return setShowCustomColorPanel(false);
            },
            className: "p-1 rounded-lg hover:bg-[var(--component-hover)] text-[var(--text-secondary)] transition-colors",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdClose, {
              className: "w-6 h-6"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "p-6 max-h-[70vh] overflow-y-auto custom-scrollbar space-y-4",
          children: [{
            label: 'Background',
            key: 'background'
          }, {
            label: 'Text Primary',
            key: 'foreground'
          }, {
            label: 'Text Secondary',
            key: 'muted'
          }, {
            label: 'Border Color',
            key: 'border'
          }, {
            label: 'Panel Background',
            key: 'componentBg'
          }, {
            label: 'Header Background',
            key: 'headerBg'
          }, {
            label: 'User Bubble',
            key: 'userBubble'
          }, {
            label: 'User Text',
            key: 'userText'
          }, {
            label: 'Agent Bubble',
            key: 'agentBubble'
          }, {
            label: 'Agent Text',
            key: 'agentText'
          }, {
            label: 'Input Background',
            key: 'inputBg'
          }, {
            label: 'Accent Color',
            key: 'accent'
          }, {
            label: 'Accent Text',
            key: 'accentText'
          }].map(function (item) {
            var _currentTheme$colors$;
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center justify-between p-3 rounded-xl border border-[var(--border-color)] bg-[var(--component-bg)]/50",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-sm font-medium text-[var(--text-primary)]",
                children: item.label
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center gap-3",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-[10px] font-mono text-[var(--text-secondary)] uppercase",
                  children: currentTheme.colors[item.key]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "color",
                  value: (_currentTheme$colors$ = currentTheme.colors[item.key]) !== null && _currentTheme$colors$ !== void 0 && _currentTheme$colors$.startsWith('#') ? currentTheme.colors[item.key] : '#000000',
                  onChange: function onChange(e) {
                    return handleCustomColorChange(item.key, e.target.value);
                  },
                  className: "w-10 h-10 rounded-lg cursor-pointer border-none bg-transparent"
                })]
              })]
            }, item.key);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "p-4 bg-[var(--component-bg)]/50 border-t border-[var(--border-color)]",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return handleThemeSync(currentTheme);
            },
            className: "w-full py-3 rounded-xl font-bold transition-all shadow-lg active:scale-95",
            style: {
              background: 'var(--accent)',
              color: 'var(--accent-text)'
            },
            children: "Apply Changes"
          })
        })]
      })]
    })]
  });
};
var _default = exports["default"] = ChatPage;