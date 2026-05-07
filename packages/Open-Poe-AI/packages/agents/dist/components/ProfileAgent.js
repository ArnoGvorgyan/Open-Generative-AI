"use strict";
"use client";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ProfileAgent;
var _react = _interopRequireWildcard(require("react"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _axios = _interopRequireDefault(require("axios"));
var _ri = require("react-icons/ri");
var _bi = require("react-icons/bi");
var _io = require("react-icons/io5");
var _fi = require("react-icons/fi");
var _md = require("react-icons/md");
var _hi = require("react-icons/hi2");
var _navigation = require("next/navigation");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t3 in e) "default" !== _t3 && {}.hasOwnProperty.call(e, _t3) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t3)) && (i.get || i.set) ? o(f, _t3, i) : f[_t3] = e[_t3]); return f; })(e, t); }
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
var BASE_URL = "/api/agents";
function timeAgo(dateStr) {
  if (!dateStr) return "";
  var utcStr = dateStr.endsWith("Z") || dateStr.includes("+") ? dateStr : dateStr + "Z";
  var now = new Date();
  var d = new Date(utcStr);
  var diff = Math.floor((now - d) / 1000);
  if (diff < 60) return "just now";
  if (diff < 3600) return "".concat(Math.floor(diff / 60), "m ago");
  if (diff < 86400) return "".concat(Math.floor(diff / 3600), "h ago");
  if (diff < 604800) return "".concat(Math.floor(diff / 86400), "d ago");
  var months = Math.floor(diff / 2592000);
  if (months < 12) return "".concat(months, " mo. ago");
  return "".concat(Math.floor(months / 12), " yr. ago");
}
function formatCount(n) {
  if (!n && n !== 0) return "–";
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000) return (n / 1000).toFixed(1) + "K";
  return n.toLocaleString();
}

/**
 * ProfileAgent — Agent profile content component.
 * Supports light (muapiapp default) and dark (vadoo / dark-mode) themes via
 * Tailwind's `dark:` prefix + CSS variables set by the host app.
 *
 * Props:
 *   useUser  {function} — hook to get the current logged-in user
 *   usedIn   {string}   — "muapiapp" | "vadoo"
 */
function ProfileAgent(_ref) {
  var useUser = _ref.useUser,
    _ref$usedIn = _ref.usedIn,
    usedIn = _ref$usedIn === void 0 ? "muapiapp" : _ref$usedIn;
  var _useParams = (0, _navigation.useParams)(),
    agent_id = _useParams.agent_id;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    profile = _useState2[0],
    setProfile = _useState2[1];
  var _useState3 = (0, _react.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    liked = _useState8[0],
    setLiked = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    copied = _useState0[0],
    setCopied = _useState0[1];
  var fetchProfile = (0, _react.useCallback)(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var _res$data, res, _err$response, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          setLoading(true);
          _context.n = 1;
          return _axios["default"].get("".concat(BASE_URL, "/").concat(agent_id, "/profile"));
        case 1:
          res = _context.v;
          setProfile(res.data);
          if ((_res$data = res.data) !== null && _res$data !== void 0 && _res$data.agent) {
            setLiked(res.data.agent.has_liked || false);
          }
          setError(null);
          _context.n = 3;
          break;
        case 2:
          _context.p = 2;
          _t = _context.v;
          setError(((_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.detail) || _t.message || "Failed to load agent profile");
        case 3:
          _context.p = 3;
          setLoading(false);
          return _context.f(3);
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 2, 3, 4]]);
  })), [agent_id]);
  (0, _react.useEffect)(function () {
    if (agent_id) fetchProfile();
  }, [agent_id, fetchProfile]);
  var handleShare = function handleShare() {
    var url = window.location.href;
    navigator.clipboard.writeText(url).then(function () {
      setCopied(true);
      setTimeout(function () {
        return setCopied(false);
      }, 2000);
    });
  };
  var handleLike = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var newLiked, res, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            newLiked = !liked;
            setLiked(newLiked);
            _context2.p = 1;
            _context2.n = 2;
            return _axios["default"].post("/api/agents/by-slug/".concat(agent.agent_id || agent.id, "/like?is_like=").concat(newLiked));
          case 2:
            res = _context2.v;
            // Update the local state properly to trigger re-render
            if (profile) {
              setProfile(_objectSpread(_objectSpread({}, profile), {}, {
                agent: _objectSpread(_objectSpread({}, profile.agent), {}, {
                  like_count: res.data.like_count,
                  has_liked: res.data.has_liked
                })
              }));
              // Also ensure the 'liked' state is in sync with the real source of truth
              setLiked(res.data.has_liked);
            }
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("Failed to sync like:", _t2);
            // Rollback on error
            setLiked(!newLiked);
          case 4:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3]]);
    }));
    return function handleLike() {
      return _ref3.apply(this, arguments);
    };
  }();
  if (loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-col items-center justify-center py-32 gap-3 w-full",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
        className: "w-8 h-8 text-gray-400 dark:text-secondary-text animate-spin"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-gray-400 dark:text-secondary-text text-sm",
        children: "Loading agent profile..."
      })]
    });
  }
  if (error || !profile) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-col items-center justify-center py-32 gap-2 w-full",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
        className: "w-12 h-12 text-gray-300 dark:text-secondary-text mx-auto"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-gray-800 dark:text-primary-text font-bold",
        children: "Agent not found"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-gray-500 dark:text-secondary-text text-sm",
        children: error
      })]
    });
  }
  var agent = profile.agent,
    total_messages = profile.total_messages,
    total_chats = profile.total_chats,
    recent_chats = profile.recent_chats;
  var chatUrl = agent.agent_id ? "/agents/".concat(agent.agent_id) : "/agents/".concat(agent.id);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full max-w-5xl mx-auto px-4 sm:px-6 pb-16",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border-b border-gray-200 dark:border-divider py-6",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col md:flex-row md:items-start gap-5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center gap-5",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "relative w-16 h-16 rounded-full overflow-hidden bg-gray-100 dark:bg-secondary-bg border-2 border-gray-200 dark:border-divider shrink-0",
            children: agent.icon_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
              src: agent.icon_url,
              alt: agent.name,
              fill: true,
              className: "object-cover"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-full h-full flex items-center justify-center",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                className: "w-8 h-8 text-gray-400 dark:text-secondary-text"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex-1 min-w-0",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex items-center gap-2 flex-wrap",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
                className: "text-2xl font-bold text-black dark:text-white",
                children: agent.name
              }), agent.is_published && /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-blue-50 dark:bg-white/10 text-blue-600 dark:text-gray-300 border border-blue-100 dark:border-white/10",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdOutlineVerified, {
                  className: "w-3 h-3"
                }), " Public"]
              })]
            }), agent.description && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-gray-500 dark:text-secondary-text text-sm mt-1 leading-relaxed max-w-xl",
              children: agent.description
            }), (agent.owner_username || agent.owner_email) && /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
              className: "text-xs text-gray-400 dark:text-secondary-text mt-1.5",
              children: ["by", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                className: "text-gray-600 dark:text-gray-300 font-medium",
                children: agent.owner_username || agent.owner_email.split("@")[0]
              })]
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center gap-2 shrink-0",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            type: "button",
            onClick: handleLike,
            className: "flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-secondary-bg hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-divider text-sm transition-all",
            children: [liked ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoHeart, {
              className: "w-4 h-4 text-red-500"
            }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoHeartOutline, {
              className: "w-4 h-4 text-gray-500 dark:text-secondary-text"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "font-medium text-gray-700 dark:text-gray-300",
              children: agent.like_count || 0
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: handleShare,
            title: copied ? "Copied!" : "Share link",
            className: "flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-100 dark:bg-secondary-bg hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-divider text-sm transition-all",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoShareOutline, {
              className: "w-4 h-4 text-gray-500 dark:text-secondary-text"
            }), copied && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-xs text-green-500 dark:text-green-400",
              children: "Copied!"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_link["default"], {
            href: chatUrl,
            className: "flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-bold rounded-lg transition-all shadow-sm",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoChatbubbleEllipsesSharp, {
              className: "w-4 h-4"
            }), "Chat"]
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8 mt-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "space-y-8",
        children: [agent.skills && agent.skills.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-[11px] font-bold text-gray-400 dark:text-secondary-text uppercase tracking-widest mb-3",
            children: "Workflows"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "flex flex-wrap gap-2",
            children: agent.skills.map(function (skill) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                className: "flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 dark:bg-secondary-bg border border-gray-200 dark:border-divider rounded-lg text-xs text-gray-600 dark:text-gray-300 font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fi.FiZap, {
                  className: "w-3 h-3 text-violet-500 dark:text-violet-400"
                }), skill.name]
              }, skill.id);
            })
          })]
        }), agent.description && /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            className: "text-[11px] font-bold text-gray-400 dark:text-secondary-text uppercase tracking-widest mb-3",
            children: ["About ", agent.name]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-700 dark:text-gray-300 text-sm leading-relaxed",
            children: agent.description
          })]
        }), agent.welcome_message && /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
          className: "bg-gray-50 dark:bg-secondary-bg border border-gray-200 dark:border-divider rounded-xl p-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-[11px] font-bold text-gray-400 dark:text-secondary-text uppercase tracking-widest mb-2",
            children: "Greeting"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
            className: "text-gray-600 dark:text-gray-300 text-sm italic leading-relaxed",
            children: ["\"", agent.welcome_message, "\""]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("section", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-[11px] font-bold text-gray-400 dark:text-secondary-text uppercase tracking-widest mb-3",
            children: "Details"
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-2.5",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(DetailRow, {
              label: "Messages",
              value: formatCount(total_messages)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DetailRow, {
              label: "Chats",
              value: formatCount(total_chats)
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(DetailRow, {
              label: "Created",
              value: timeAgo(agent.created_at)
            }), agent.skills && agent.skills.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(DetailRow, {
              label: "Skills",
              value: agent.skills.length.toString()
            })]
          })]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "space-y-4",
        children: [recent_chats && recent_chats.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bg-gray-50 dark:bg-secondary-bg border border-gray-200 dark:border-divider rounded-2xl p-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-2 mb-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_fi.FiClock, {
              className: "w-3.5 h-3.5 text-gray-400 dark:text-secondary-text"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-[11px] font-bold text-gray-400 dark:text-secondary-text uppercase tracking-widest",
              children: "Recent chats with this agent"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "space-y-1",
            children: recent_chats.map(function (chat) {
              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_link["default"], {
                href: chat.agent_slug ? "/agents/".concat(chat.agent_slug, "/").concat(chat.id) : "/agents/".concat(chat.agent_id, "/").concat(chat.id),
                className: "flex items-center gap-3 p-2.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors group",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "w-8 h-8 rounded-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center shrink-0",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoChatbubbleEllipsesSharp, {
                    className: "w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-white transition-colors"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "flex-1 min-w-0",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                    className: "text-sm font-medium text-gray-800 dark:text-gray-200 truncate group-hover:text-black dark:group-hover:text-white transition-colors",
                    children: chat.title || "New Chat"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
                    className: "text-[11px] text-gray-400 dark:text-secondary-text",
                    children: [chat.message_count, " msg", chat.message_count !== 1 ? "s" : "", " \xB7 ", timeAgo(chat.updated_at)]
                  })]
                })]
              }, chat.id);
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_link["default"], {
            href: chatUrl,
            className: "mt-3 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 border border-gray-200 dark:border-divider text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-all font-medium",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_hi.HiPlus, {
              className: "w-4 h-4"
            }), "New chat"]
          })]
        }), agent.initial_suggestions && agent.initial_suggestions.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "bg-gray-50 dark:bg-secondary-bg border border-gray-200 dark:border-divider rounded-2xl p-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-[11px] font-bold text-gray-400 dark:text-secondary-text uppercase tracking-widest mb-3",
            children: "Try asking"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "space-y-2",
            children: agent.initial_suggestions.slice(0, 4).map(function (s, i) {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
                href: "".concat(chatUrl, "?prompt=").concat(encodeURIComponent(s.prompt || s.label || "")),
                className: "block text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-divider rounded-xl px-3 py-2 transition-all truncate",
                children: s.label || s.prompt
              }, i);
            })
          })]
        })]
      })]
    })]
  });
}
function DetailRow(_ref4) {
  var label = _ref4.label,
    value = _ref4.value;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex items-center gap-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "text-sm text-gray-400 dark:text-secondary-text w-24 shrink-0",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "text-sm text-gray-800 dark:text-primary-text font-medium",
      children: value
    })]
  });
}