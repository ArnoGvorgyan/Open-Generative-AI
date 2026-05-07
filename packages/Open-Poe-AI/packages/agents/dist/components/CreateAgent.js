"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _link = _interopRequireDefault(require("next/link"));
var _axios = _interopRequireDefault(require("axios"));
var _bi = require("react-icons/bi");
var _ri = require("react-icons/ri");
var _io = require("react-icons/io5");
var _navigation = require("next/navigation");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
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
var BASE_URL = "/api/agents";
var CreateAgent = function CreateAgent(_ref) {
  var useUser = _ref.useUser,
    usedIn = _ref.usedIn;
  var userContext = useUser ? useUser() : {};
  var user = null;
  if (usedIn === "vadoo") {
    var serverDetails = userContext.serverDetails;
    user = serverDetails !== null && serverDetails !== void 0 && serverDetails.user_details ? {
      email: serverDetails.user_details.email,
      name: serverDetails.user_details.name
    } : null;
  } else {
    // muapiapp
    user = userContext.user || null;
  }
  var router = (0, _navigation.useRouter)();
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    prompt = _useState2[0],
    setPrompt = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var handleArchitectAgent = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var suggestResponse, suggestion, createPayload, createResponse, createdAgent, _err$response, _err$response2, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            e.preventDefault();
            if (prompt.trim()) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            _context.p = 1;
            setLoading(true);
            setError(null);
            _context.n = 2;
            return _axios["default"].post("".concat(BASE_URL, "/suggest"), {
              prompt: prompt
            });
          case 2:
            suggestResponse = _context.v;
            suggestion = suggestResponse.data;
            createPayload = {
              name: suggestion.name || "Unnamed Agent",
              description: suggestion.description || "",
              system_prompt: suggestion.system_prompt || "",
              skill_ids: suggestion.recommended_skill_ids || [],
              welcome_message: suggestion.welcome_message || "",
              initial_suggestions: suggestion.initial_suggestions || [],
              is_published: false,
              is_template: false
            };
            _context.n = 3;
            return _axios["default"].post("".concat(BASE_URL), createPayload);
          case 3:
            createResponse = _context.v;
            if (createResponse.status === 200 || createResponse.status === 201) {
              createdAgent = createResponse.data;
              router.push("/agents/edit/".concat(createdAgent.agent_id));
            }
            _context.n = 5;
            break;
          case 4:
            _context.p = 4;
            _t = _context.v;
            console.error("Agent creation failed:", _t);
            setError(((_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.message) || ((_err$response2 = _t.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.detail) || _t.message || "Failed to architect agent. Please try again.");
          case 5:
            _context.p = 5;
            setLoading(false);
            return _context.f(5);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 4, 5, 6]]);
    }));
    return function handleArchitectAgent(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-1 flex flex-col gap-8 items-center w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] relative pb-12",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex items-start gap-2 w-full",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
        href: "/agents",
        className: "p-2 hover:bg-gray-100 dark:hover:bg-secondary-bg rounded-full transition-colors group",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoArrowBackOutline, {
          className: "w-4 h-4 text-gray-800 dark:text-primary-text group-hover:scale-110 transition-transform"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col gap-2 w-full",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
          className: "text-2xl font-bold text-black dark:text-white",
          children: "Prompt Any Assistant"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-gray-500 dark:text-secondary-text text-sm font-medium",
          children: "Use this to prompt up an assistant to help you with any topic!"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      onSubmit: handleArchitectAgent,
      className: "space-y-8 w-full",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "space-y-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
          className: "text-lg font-semibold text-black dark:text-white block",
          children: "What should your assistant be able to do and be knowledgeable in?"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "relative",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
            value: prompt,
            autoFocus: true,
            onChange: function onChange(e) {
              return setPrompt(e.target.value);
            },
            placeholder: "Ex: A helpful travel agent that finds the best destinations in Italy...",
            className: "w-full bg-white dark:bg-secondary-bg border border-gray-200 dark:border-divider rounded-xl p-4 text-gray-900 dark:text-primary-text text-sm focus:outline-none focus:ring-2 focus:ring-black/10 dark:focus:ring-primary/10 focus:border-gray-400 dark:focus:border-primary transition-all resize-none min-h-[140px] shadow-sm",
            disabled: loading
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "flex items-center gap-6"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col gap-4",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "submit",
          disabled: loading || !prompt.trim(),
          className: "w-full py-3 bg-blue-500 dark:bg-primary hover:bg-blue-600 dark:hover:bg-primary/90 disabled:bg-gray-200 dark:disabled:bg-divider disabled:text-gray-400 dark:disabled:text-secondary-text disabled:cursor-not-allowed text-white text-base font-semibold rounded-xl transition-all flex items-center justify-center gap-3 active:scale-[0.98]",
          children: loading ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
              className: "w-6 h-6 animate-spin"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              children: "Creating agent..."
            })]
          }) : "Create agent"
        }), loading && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-center text-gray-400 dark:text-secondary-text text-sm animate-pulse",
          children: "Analyzing prompt and building capabilities..."
        }), error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl text-red-600 dark:text-red-400 text-sm flex items-center gap-3 animate-in fade-in duration-300",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
            className: "w-5 h-5 flex-shrink-0",
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            })
          }), error]
        })]
      })]
    })]
  });
};
var _default = exports["default"] = CreateAgent;