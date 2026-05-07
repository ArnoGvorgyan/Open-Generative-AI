"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _navigation = require("next/navigation");
var _link = _interopRequireDefault(require("next/link"));
var _axios = _interopRequireDefault(require("axios"));
var _io = require("react-icons/io5");
var _bi = require("react-icons/bi");
var _ri = require("react-icons/ri");
var _reactHotToast = _interopRequireDefault(require("react-hot-toast"));
var _fa = require("react-icons/fa6");
var _md = require("react-icons/md");
var _themes = require("./themes");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t7 in e) "default" !== _t7 && {}.hasOwnProperty.call(e, _t7) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t7)) && (i.get || i.set) ? o(f, _t7, i) : f[_t7] = e[_t7]); return f; })(e, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
var EditAgent = function EditAgent(_ref) {
  var _ref0, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20;
  var useUser = _ref.useUser,
    usedIn = _ref.usedIn;
  // Project-specific user detail extraction
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
  var _useParams = (0, _navigation.useParams)(),
    id = _useParams.id;
  var router = (0, _navigation.useRouter)();
  var fileInputRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)({
      name: "",
      description: "",
      system_prompt: "",
      icon_url: "",
      skill_ids: [],
      theme: "cosmic",
      is_published: false,
      is_template: false
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    availableSkills = _useState4[0],
    setAvailableSkills = _useState4[1];
  var _useState5 = (0, _react.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    saving = _useState8[0],
    setSaving = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    uploading = _useState0[0],
    setUploading = _useState0[1];
  var _useState1 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState1, 2),
    uploadProgress = _useState10[0],
    setUploadProgress = _useState10[1];
  var _useState11 = (0, _react.useState)(""),
    _useState12 = _slicedToArray(_useState11, 2),
    searchTerm = _useState12[0],
    setSearchTerm = _useState12[1];
  var _useState13 = (0, _react.useState)(null),
    _useState14 = _slicedToArray(_useState13, 2),
    error = _useState14[0],
    setError = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    success = _useState16[0],
    setSuccess = _useState16[1];
  var _useState17 = (0, _react.useState)([]),
    _useState18 = _slicedToArray(_useState17, 2),
    initialSkills = _useState18[0],
    setInitialSkills = _useState18[1];
  var _useState19 = (0, _react.useState)(""),
    _useState20 = _slicedToArray(_useState19, 2),
    realignedPrompt = _useState20[0],
    setRealignedPrompt = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    isRealigning = _useState22[0],
    setIsRealigning = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showRealignModal = _useState24[0],
    setShowRealignModal = _useState24[1];
  var _useState25 = (0, _react.useState)(false),
    _useState26 = _slicedToArray(_useState25, 2),
    generatingIcon = _useState26[0],
    setGeneratingIcon = _useState26[1];
  var _useState27 = (0, _react.useState)(false),
    _useState28 = _slicedToArray(_useState27, 2),
    showIconPromptModal = _useState28[0],
    setShowIconPromptModal = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    showIconSelectionModal = _useState30[0],
    setShowIconSelectionModal = _useState30[1];
  var _useState31 = (0, _react.useState)(""),
    _useState32 = _slicedToArray(_useState31, 2),
    iconPrompt = _useState32[0],
    setIconPrompt = _useState32[1];
  (0, _react.useEffect)(function () {
    if (id) {
      fetchData();
    }
  }, [id]);
  var fetchData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _yield$Promise$all, _yield$Promise$all2, agentRes, skillsRes, agent, _err$response, _err$response2, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _context.p = 0;
            setLoading(true);
            setError(null);
            _context.n = 1;
            return Promise.all([_axios["default"].get("".concat(BASE_URL, "/by-slug/").concat(id)), _axios["default"].get("".concat(BASE_URL, "/skills"))]);
          case 1:
            _yield$Promise$all = _context.v;
            _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
            agentRes = _yield$Promise$all2[0];
            skillsRes = _yield$Promise$all2[1];
            agent = agentRes.data;
            if (agent.is_owner) {
              _context.n = 2;
              break;
            }
            setError("You are not authorized to edit this agent.");
            setLoading(false);
            return _context.a(2);
          case 2:
            setFormData({
              name: agent.name,
              description: agent.description || "",
              system_prompt: agent.system_prompt,
              icon_url: agent.icon_url || "",
              skill_ids: agent.skills.map(function (s) {
                return s.id;
              }),
              theme: agent.theme || "cosmic",
              is_published: agent.is_published || false,
              is_template: agent.is_template || false
            });
            setInitialSkills(agent.skills.map(function (s) {
              return s.id;
            }));
            setAvailableSkills(skillsRes.data);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            console.error("Error fetching data:", _t);
            setError(((_err$response = _t.response) === null || _err$response === void 0 || (_err$response = _err$response.data) === null || _err$response === void 0 ? void 0 : _err$response.message) || ((_err$response2 = _t.response) === null || _err$response2 === void 0 || (_err$response2 = _err$response2.data) === null || _err$response2 === void 0 ? void 0 : _err$response2.detail) || "Failed to load agent details.");
          case 4:
            _context.p = 4;
            setLoading(false);
            return _context.f(4);
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[0, 3, 4, 5]]);
    }));
    return function fetchData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, name, value));
    });
  };
  var handleSkillToggle = function handleSkillToggle(skillId) {
    setFormData(function (prev) {
      var isSelected = prev.skill_ids.includes(skillId);
      if (isSelected) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          skill_ids: prev.skill_ids.filter(function (id) {
            return id !== skillId;
          })
        });
      } else {
        return _objectSpread(_objectSpread({}, prev), {}, {
          skill_ids: [].concat(_toConsumableArray(prev.skill_ids), [skillId])
        });
      }
    });
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _err$response3, _t2;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (window.confirm("Are you sure you want to delete this agent? This action cannot be undone.")) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            setSaving(true);
            _context2.n = 2;
            return _axios["default"]["delete"]("".concat(BASE_URL, "/by-slug/").concat(id));
          case 2:
            _reactHotToast["default"].success("Agent deleted successfully");
            router.push("/agents");
            _context2.n = 4;
            break;
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            console.error("Delete error:", _t2);
            _reactHotToast["default"].error("Failed to delete agent");
            setError(((_err$response3 = _t2.response) === null || _err$response3 === void 0 || (_err$response3 = _err$response3.data) === null || _err$response3 === void 0 ? void 0 : _err$response3.detail) || "Delete failed");
          case 4:
            _context2.p = 4;
            setSaving(false);
            return _context2.f(4);
          case 5:
            return _context2.a(2);
        }
      }, _callee2, null, [[1, 3, 4, 5]]);
    }));
    return function handleDelete() {
      return _ref3.apply(this, arguments);
    };
  }();
  var handleShare = function handleShare() {
    var url = "".concat(window.location.origin, "/agents/").concat(id);
    navigator.clipboard.writeText(url);
    _reactHotToast["default"].success("Chat link copied to clipboard!");
  };
  var handleFileUpload = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
      var _e$target$files;
      var file, _yield$axios$get, uploadParams, url, fields, uploadData, prefix, uploadedUrl, _t3;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.p = _context3.n) {
          case 0:
            file = (_e$target$files = e.target.files) === null || _e$target$files === void 0 ? void 0 : _e$target$files[0];
            if (file) {
              _context3.n = 1;
              break;
            }
            return _context3.a(2);
          case 1:
            if (file.type.startsWith("image/")) {
              _context3.n = 2;
              break;
            }
            _reactHotToast["default"].error("Please upload an image file");
            return _context3.a(2);
          case 2:
            _context3.p = 2;
            setUploading(true);
            setUploadProgress(0);
            _context3.n = 3;
            return _axios["default"].get("/api/app/get_file_upload_url", {
              params: {
                filename: file.name
              }
            });
          case 3:
            _yield$axios$get = _context3.v;
            uploadParams = _yield$axios$get.data;
            url = uploadParams.url, fields = uploadParams.fields;
            uploadData = new FormData();
            Object.entries(fields).forEach(function (_ref5) {
              var _ref6 = _slicedToArray(_ref5, 2),
                key = _ref6[0],
                value = _ref6[1];
              uploadData.append(key, value);
            });
            uploadData.append("file", file);
            _context3.n = 4;
            return _axios["default"].post(url, uploadData, {
              headers: {
                "Content-Type": "multipart/form-data"
              },
              onUploadProgress: function onUploadProgress(progressEvent) {
                var percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
                setUploadProgress(percent);
              }
            });
          case 4:
            prefix = usedIn === "vadoo" ? "https://d3adwkbyhxyrtq.cloudfront.net/" : "https://cdn.muapi.ai/";
            uploadedUrl = "".concat(prefix).concat(fields.key);
            setFormData(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                icon_url: uploadedUrl
              });
            });
            _reactHotToast["default"].success("Profile image updated");
            _context3.n = 6;
            break;
          case 5:
            _context3.p = 5;
            _t3 = _context3.v;
            console.error("Upload failed:", _t3);
            _reactHotToast["default"].error("Failed to upload image");
          case 6:
            _context3.p = 6;
            setUploading(false);
            setUploadProgress(0);
            return _context3.f(6);
          case 7:
            return _context3.a(2);
        }
      }, _callee3, null, [[2, 5, 6, 7]]);
    }));
    return function handleFileUpload(_x) {
      return _ref4.apply(this, arguments);
    };
  }();
  var handleGenerateIcon = /*#__PURE__*/function () {
    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(customPrompt) {
      var prompt, response, generatedUrl, _err$response4, _t4;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.p = _context4.n) {
          case 0:
            if (!(!formData.name && !customPrompt)) {
              _context4.n = 1;
              break;
            }
            _reactHotToast["default"].error("Please enter an agent name first");
            return _context4.a(2);
          case 1:
            _context4.p = 1;
            setGeneratingIcon(true);
            prompt = customPrompt || "A professional, clean profile icon for an AI agent named \"".concat(formData.name, "\". Description: ").concat(formData.description || "An AI assistant", ". Minimalist, high-quality, circular composition.");
            _context4.n = 2;
            return _axios["default"].post("/api/api/v1/flux-schnell-image", {
              prompt: prompt,
              width: 1024,
              height: 1024,
              num_images: 1,
              sync: true
            });
          case 2:
            response = _context4.v;
            if (!(response.data && response.data.outputs && response.data.outputs.length > 0)) {
              _context4.n = 3;
              break;
            }
            generatedUrl = response.data.outputs[0];
            setFormData(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, {
                icon_url: generatedUrl
              });
            });
            setShowIconPromptModal(false);
            _reactHotToast["default"].success("AI icon generated!");
            _context4.n = 4;
            break;
          case 3:
            throw new Error("No image generated");
          case 4:
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t4 = _context4.v;
            console.error("Icon generation failed:", _t4);
            _reactHotToast["default"].error(((_err$response4 = _t4.response) === null || _err$response4 === void 0 || (_err$response4 = _err$response4.data) === null || _err$response4 === void 0 ? void 0 : _err$response4.detail) || "Failed to generate AI icon");
          case 6:
            _context4.p = 6;
            setGeneratingIcon(false);
            return _context4.f(6);
          case 7:
            return _context4.a(2);
        }
      }, _callee4, null, [[1, 5, 6, 7]]);
    }));
    return function handleGenerateIcon(_x2) {
      return _ref7.apply(this, arguments);
    };
  }();
  var handleRealign = /*#__PURE__*/function () {
    var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
      var res, _t5;
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.p = _context5.n) {
          case 0:
            _context5.p = 0;
            setIsRealigning(true);
            _context5.n = 1;
            return _axios["default"].post("".concat(BASE_URL, "/by-slug/").concat(id, "/preview-realign"), {
              current_prompt: formData.system_prompt,
              new_skill_ids: formData.skill_ids
            });
          case 1:
            res = _context5.v;
            setRealignedPrompt(res.data.proposed_prompt);
            setShowRealignModal(true);
            _reactHotToast["default"].success("Prompt realigned! Please review.");
            _context5.n = 3;
            break;
          case 2:
            _context5.p = 2;
            _t5 = _context5.v;
            console.error("Realign failed:", _t5);
            _reactHotToast["default"].error("Failed to realign prompt");
          case 3:
            _context5.p = 3;
            setIsRealigning(false);
            return _context5.f(3);
          case 4:
            return _context5.a(2);
        }
      }, _callee5, null, [[0, 2, 3, 4]]);
    }));
    return function handleRealign() {
      return _ref8.apply(this, arguments);
    };
  }();
  var applyRealignedPrompt = function applyRealignedPrompt() {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        system_prompt: realignedPrompt
      });
    });
    setShowRealignModal(false);
    _reactHotToast["default"].success("New instructions applied!");
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(e) {
      var _err$response5, _err$response6, _t6;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.p = _context6.n) {
          case 0:
            e.preventDefault();
            _context6.p = 1;
            setSaving(true);
            setError(null);
            setSuccess(false);
            _context6.n = 2;
            return _axios["default"].put("".concat(BASE_URL, "/by-slug/").concat(id), formData);
          case 2:
            setSuccess(true);
            _reactHotToast["default"].success("Agent profile updated successfully!");
            setTimeout(function () {
              router.push("/agents");
            }, 1500);
            _context6.n = 4;
            break;
          case 3:
            _context6.p = 3;
            _t6 = _context6.v;
            console.error("Error updating agent:", _t6);
            setError(((_err$response5 = _t6.response) === null || _err$response5 === void 0 || (_err$response5 = _err$response5.data) === null || _err$response5 === void 0 ? void 0 : _err$response5.message) || ((_err$response6 = _t6.response) === null || _err$response6 === void 0 || (_err$response6 = _err$response6.data) === null || _err$response6 === void 0 ? void 0 : _err$response6.detail) || "Failed to update agent.");
            _reactHotToast["default"].error("Failed to save changes");
          case 4:
            _context6.p = 4;
            setSaving(false);
            return _context6.f(4);
          case 5:
            return _context6.a(2);
        }
      }, _callee6, null, [[1, 3, 4, 5]]);
    }));
    return function handleSubmit(_x3) {
      return _ref9.apply(this, arguments);
    };
  }();
  if (loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "flex-1 flex items-center justify-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-col items-center gap-2",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
          className: "w-12 h-12 text-blue-600 animate-spin"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-gray-500 font-medium animate-pulse",
          children: "Loading Identity Data..."
        })]
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("main", {
      className: "flex-1 flex flex-col items-center justify-center h-full gap-4 text-center p-8",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-2",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoCloseOutline, {
          className: "w-10 h-10 text-red-500 dark:text-red-400"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
        className: "text-2xl font-bold text-gray-900 dark:text-white",
        children: "Access Denied"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-gray-600 dark:text-secondary-text max-w-md font-medium",
        children: error
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
        href: "/agents",
        className: "mt-4 px-8 py-3 bg-gray-900 dark:bg-primary text-white font-bold rounded-xl hover:bg-gray-800 dark:hover:bg-primary/90 transition-all shadow-lg active:scale-95",
        children: "Return to My Agents"
      })]
    });
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex-1 flex flex-col gap-8 items-center w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] relative",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex items-center justify-between pb-2 border-b border-gray-50 dark:border-divider w-full",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_link["default"], {
        href: "/agents",
        className: "flex items-center gap-2 text-gray-500 hover:text-gray-900 dark:text-secondary-text dark:hover:text-primary-text transition-colors text-sm font-medium",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoChevronBack, {
          className: "w-4 h-4"
        }), "Back"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex items-center gap-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_link["default"], {
          href: "".concat(window.location.origin, "/agents/").concat(id),
          className: "flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl text-sm font-bold text-white transition-all active:scale-95 shadow-sm",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoChatbubblesOutline, {
            className: "w-4 h-4"
          }), "Chat"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: handleShare,
          className: "flex items-center gap-2 px-4 py-2 border border-gray-100 dark:border-divider rounded-xl text-sm font-bold text-gray-600 dark:text-primary-text hover:bg-gray-50 dark:hover:bg-secondary-bg transition-all active:scale-95",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoShareOutline, {
            className: "w-4 h-4"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          onClick: handleDelete,
          disabled: saving,
          className: "flex items-center gap-2 px-4 py-2 border border-red-50 dark:border-red-900/30 rounded-xl text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all active:scale-95 disabled:opacity-50",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoTrashOutline, {
            className: "w-4 h-4"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
          href: "/docs/agents",
          target: "_blank",
          className: "flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-secondary-bg border border-gray-100 dark:border-divider rounded-lg text-xs font-bold text-blue-600 dark:text-primary hover:bg-blue-50 dark:hover:bg-primary-bg transition-all active:scale-95 shadow-sm",
          children: "Docs"
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex flex-col items-center gap-2 w-full",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
        id: "edit-agent-form",
        onSubmit: handleSubmit,
        className: "flex flex-col gap-12 w-full",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col md:flex-row md:items-center gap-8 w-full",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-8 w-full",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "relative",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                onClick: function onClick() {
                  return setShowIconSelectionModal(true);
                },
                className: "w-28 h-28 rounded-full bg-gray-100 dark:bg-secondary-bg overflow-hidden ring-4 ring-white dark:ring-primary-bg shadow-sm border border-gray-100 dark:border-divider cursor-pointer group transition-all hover:ring-blue-500/30",
                children: [formData.icon_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: formData.icon_url,
                  alt: "Profile",
                  className: "w-full h-full object-cover transition-transform group-hover:scale-110"
                }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "w-full h-full flex items-center justify-center bg-gray-50 dark:bg-primary-bg transition-colors group-hover:bg-gray-100 dark:group-hover:bg-secondary-bg",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                    className: "w-12 h-12 text-gray-300 dark:text-divider group-hover:text-blue-500 transition-colors"
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-full",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoPencilOutline, {
                    className: "w-6 h-6 text-white"
                  })
                }), uploading && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "absolute inset-0 bg-white/95 dark:bg-primary-bg/95 flex items-center justify-center rounded-full z-10 backdrop-blur-[1px]",
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "relative w-16 h-16",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
                      className: "w-full h-full -rotate-90",
                      viewBox: "0 0 36 36",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                        cx: "18",
                        cy: "18",
                        r: "16",
                        fill: "none",
                        className: "stroke-gray-100 dark:stroke-divider",
                        strokeWidth: "3.5"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
                        cx: "18",
                        cy: "18",
                        r: "16",
                        fill: "none",
                        className: "stroke-black dark:stroke-primary transition-all duration-500 ease-out",
                        strokeWidth: "3.5",
                        strokeDasharray: "100.53",
                        strokeDashoffset: 100.53 * (1 - uploadProgress / 100),
                        strokeLinecap: "round"
                      })]
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "absolute inset-0 flex items-center justify-center",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
                        className: "text-xs font-bold text-gray-900 dark:text-white",
                        children: [uploadProgress, "%"]
                      })
                    })]
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                type: "file",
                ref: fileInputRef,
                onChange: handleFileUpload,
                className: "hidden",
                accept: "image/*"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-2 w-full",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex items-center gap-2 group/title w-full",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  name: "name",
                  value: formData.name,
                  onChange: handleInputChange,
                  className: "text-3xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight truncate bg-transparent border-none p-0 focus:ring-0 w-full",
                  placeholder: "Unnamed Agent",
                  required: true
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoPencilOutline, {
                  className: "w-5 h-5 text-gray-300 dark:text-divider opacity-0 group-hover/title:opacity-100 transition-opacity"
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "flex items-center gap-3 mt-1 mr-auto"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col gap-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
              type: "submit",
              form: "edit-agent-form",
              disabled: saving,
              className: "px-6 py-3 whitespace-nowrap bg-black dark:bg-primary hover:bg-gray-800 dark:hover:bg-primary/90 disabled:opacity-50 text-white font-bold rounded-xl transition-all shadow-lg text-sm active:scale-95",
              children: saving ? "Saving..." : "Save Changes"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex items-center gap-1.5 p-1 bg-gray-100 dark:bg-secondary-bg rounded-2xl border border-gray-200 dark:border-divider w-fit",
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                onClick: function onClick() {
                  return setFormData(function (prev) {
                    return _objectSpread(_objectSpread({}, prev), {}, {
                      is_published: !prev.is_published
                    });
                  });
                },
                className: "flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-pointer transition-all duration-300 ".concat(formData.is_published ? "bg-white dark:bg-primary-bg shadow-sm text-blue-600 dark:text-primary" : "text-gray-400 hover:text-gray-600 dark:text-secondary-text dark:hover:text-primary-text"),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "w-2 h-2 rounded-full transition-all duration-500 ".concat(formData.is_published ? "bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" : "bg-gray-300 dark:bg-gray-600")
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                  className: "text-xs font-bold tracking-wider",
                  children: "Publish"
                })]
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex flex-col gap-12",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col gap-6",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
                className: "text-xl font-bold text-gray-900 dark:text-white",
                children: "Behavior & Identity"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-sm text-gray-500 dark:text-secondary-text font-medium",
                children: "Shape how your agent thinks, responds, and describes itself"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-6",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "flex items-center justify-between border-l-4 border-black dark:border-primary pl-3 ml-1 mb-1",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                    className: "text-base font-bold text-gray-900 dark:text-white",
                    children: "Instructions"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                    type: "button",
                    onClick: handleRealign,
                    disabled: isRealigning || JSON.stringify(formData.skill_ids.sort()) === JSON.stringify(initialSkills.sort()),
                    className: "flex items-center gap-2 px-3 py-1.5 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-100 disabled:text-gray-400 text-white text-xs font-bold rounded-lg transition-all active:scale-95 shadow-sm",
                    title: JSON.stringify(formData.skill_ids.sort()) === JSON.stringify(initialSkills.sort()) ? "No changes to skills" : "Sync instructions with current skills",
                    children: isRealigning ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
                      className: "animate-spin"
                    }) : "✨ Realign with Skills"
                  })]
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "relative group",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
                    name: "system_prompt",
                    value: formData.system_prompt,
                    onChange: handleInputChange,
                    className: "w-full bg-white dark:bg-secondary-bg border border-gray-100 dark:border-divider rounded-2xl px-6 py-6 text-gray-800 dark:text-primary-text text-sm focus:ring-4 focus:ring-black/5 dark:focus:ring-primary/5 focus:border-black dark:focus:border-primary transition-all outline-none min-h-[200px] leading-relaxed shadow-sm font-medium",
                    placeholder: "Define how your agent thinks and communicates...",
                    required: true
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                    className: "text-xs text-gray-400 dark:text-secondary-text font-medium ml-1",
                    children: "Define how your agent thinks and communicates. Start with \"You are...\" and include specific examples."
                  })]
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
                  className: "text-base font-bold text-gray-900 dark:text-white border-l-4 border-black dark:border-primary pl-3 ml-1",
                  children: "Description"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
                  name: "description",
                  value: formData.description,
                  onChange: handleInputChange,
                  className: "w-full bg-white dark:bg-secondary-bg border border-gray-100 dark:border-divider rounded-2xl px-6 py-4 text-gray-800 dark:text-primary-text text-sm focus:ring-4 focus:ring-black/5 dark:focus:ring-primary/5 focus:border-black dark:focus:border-primary transition-all outline-none min-h-[100px] leading-relaxed shadow-sm font-medium",
                  placeholder: "Add a description that describes your agent to others..."
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                  className: "text-xs text-gray-400 dark:text-secondary-text font-medium ml-1",
                  children: "This will be visible to users when they discover your agent."
                })]
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col gap-6 border-t border-gray-50 dark:border-divider pt-12",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex flex-col gap-2",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
                className: "text-base font-bold text-gray-900 dark:text-white border-l-4 border-black dark:border-primary pl-3 ml-1",
                children: "Theme & Appearance"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-sm text-gray-500 dark:text-secondary-text font-medium ml-1",
                children: "Customize how your agent looks in the chat interface"
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "bg-white dark:bg-secondary-bg shadow-lg rounded-3xl p-8 border border-gray-100 dark:border-divider flex flex-col lg:flex-row gap-8",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex-1 flex flex-col gap-4",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                  className: "text-xs text-gray-400 dark:text-secondary-text font-bold uppercase tracking-wider ml-1",
                  children: "Select Theme"
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                  children: Object.values(_themes.themes || {}).map(function (theme) {
                    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                      type: "button",
                      onClick: function onClick() {
                        return setFormData(function (prev) {
                          return _objectSpread(_objectSpread({}, prev), {}, {
                            theme: theme.id
                          });
                        });
                      },
                      className: "group relative flex flex-col items-center gap-2 p-3 rounded-2xl border-2 transition-all ".concat(formData.theme === theme.id ? "border-black dark:border-primary bg-gray-50 dark:bg-primary-bg shadow-md scale-[1.02]" : "border-gray-100 dark:border-divider hover:border-gray-200 dark:hover:border-primary bg-white dark:bg-primary-bg/50"),
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "w-full aspect-video rounded-xl shadow-inner border border-black/5 flex items-center justify-center relative overflow-hidden",
                        style: {
                          background: theme.colors.background
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "flex flex-col gap-1 w-[60%]",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "h-1.5 w-[80%] rounded-full opacity-40",
                            style: {
                              background: theme.colors.foreground
                            }
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                            className: "h-1.5 w-[50%] rounded-full opacity-40 ml-auto",
                            style: {
                              background: theme.colors.userBubble
                            }
                          })]
                        })
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "text-xs font-bold transition-colors ".concat(formData.theme === theme.id ? "text-black dark:text-white" : "text-gray-500 dark:text-secondary-text group-hover:text-gray-700 dark:group-hover:text-primary-text"),
                        children: theme.name
                      }), formData.theme === theme.id && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "absolute -top-2 -right-2 w-5 h-5 bg-black dark:bg-primary text-white rounded-full flex items-center justify-center shadow-lg",
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
                          className: "w-3 h-3",
                          fill: "none",
                          stroke: "currentColor",
                          viewBox: "0 0 24 24",
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: "3",
                            d: "M5 13l4 4L19 7"
                          })
                        })
                      })]
                    }, theme.id);
                  })
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex-1 flex flex-col gap-4",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                  className: "text-xs text-gray-400 dark:text-secondary-text font-bold uppercase tracking-wider ml-1",
                  children: "Chat Preview"
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "w-full h-[300px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-divider relative",
                  style: {
                    background: (_ref0 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref0 === void 0 ? void 0 : _ref0.colors.background,
                    color: (_ref1 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref1 === void 0 ? void 0 : _ref1.colors.foreground
                  },
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "px-4 py-3 flex items-center gap-2 border-b",
                    style: {
                      background: (_ref10 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref10 === void 0 ? void 0 : _ref10.colors.headerBg,
                      borderColor: (_ref11 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref11 === void 0 ? void 0 : _ref11.colors.border
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "w-8 h-8 rounded-full bg-gray-400 overflow-hidden",
                      children: formData.icon_url ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                        src: formData.icon_url,
                        className: "w-full h-full object-cover"
                      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                        className: "w-full h-full p-1.5 text-white/50"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "flex flex-col",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "text-xs font-bold truncate",
                        children: formData.name || "Agent Name"
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "text-[10px] opacity-60",
                        children: "Online"
                      })]
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                    className: "p-4 flex flex-col gap-4 h-[180px] overflow-y-auto",
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "flex flex-col items-end gap-1 max-w-[85%] ml-auto",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "px-3 py-2 rounded-2xl text-xs font-medium shadow-sm",
                        style: {
                          background: (_ref12 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref12 === void 0 ? void 0 : _ref12.colors.userBubble,
                          color: (_ref13 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref13 === void 0 ? void 0 : _ref13.colors.userText
                        },
                        children: "Hi! How can you help me today?"
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                      className: "flex flex-col items-start gap-1 max-w-[85%]",
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "px-3 py-2 rounded-2xl text-xs font-medium border shadow-sm",
                        style: {
                          background: (_ref14 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref14 === void 0 ? void 0 : _ref14.colors.agentBubble,
                          color: (_ref15 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref15 === void 0 ? void 0 : _ref15.colors.agentText,
                          borderColor: (_ref16 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref16 === void 0 ? void 0 : _ref16.colors.border
                        },
                        children: ["I can help you with tasks, answer questions, and much more using ", formData.skill_ids.length, " configured skills!"]
                      })
                    })]
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "absolute bottom-0 w-full p-4",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                      className: "h-10 rounded-xl flex items-center px-4 gap-2 border shadow-inner",
                      style: {
                        background: (_ref17 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref17 === void 0 ? void 0 : _ref17.colors.inputBg,
                        borderColor: (_ref18 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref18 === void 0 ? void 0 : _ref18.colors.border
                      },
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                        className: "text-xs opacity-30 flex-1",
                        children: "Type a message..."
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                        className: "w-6 h-6 rounded-lg flex items-center justify-center",
                        style: {
                          background: (_ref19 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref19 === void 0 ? void 0 : _ref19.colors.accent
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                          className: "w-1.5 h-1.5 rounded-full",
                          style: {
                            background: (_ref20 = _themes.themes[formData.theme] || _themes.themes.cosmic) === null || _ref20 === void 0 ? void 0 : _ref20.colors.accentText
                          }
                        })
                      })]
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-xs text-gray-400 dark:text-secondary-text font-medium ml-1",
              children: "This theme will be automatically applied to the chat interface for all users."
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex flex-col gap-6 border-t border-gray-50 dark:border-divider pt-12",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
              className: "text-base font-bold text-gray-900 dark:text-white border-l-4 border-black dark:border-primary pl-3 ml-1",
              children: "Capabilities"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "bg-white dark:bg-secondary-bg shadow-lg rounded-3xl p-8 border border-gray-100 dark:border-divider flex flex-col gap-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                className: "relative",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
                  type: "text",
                  placeholder: "Type to search and add skills (e.g. image generation, web search)...",
                  value: searchTerm,
                  onChange: function onChange(e) {
                    return setSearchTerm(e.target.value);
                  },
                  className: "w-full bg-white dark:bg-primary-bg border border-gray-100 dark:border-divider rounded-xl px-5 py-3.5 text-sm dark:text-white focus:ring-4 focus:ring-black/5 dark:focus:ring-primary/5 focus:border-black dark:focus:border-primary transition-all outline-none shadow-sm"
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
                  className: "text-xs text-gray-400 dark:text-secondary-text ml-1",
                  children: ["Active Agent Skills (", formData.skill_ids.length, ")"]
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                  children: formData.skill_ids.length > 0 ? formData.skill_ids.map(function (id) {
                    var skill = availableSkills.find(function (s) {
                      return s.id === id;
                    });
                    if (!skill) return null;
                    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                      type: "button",
                      onClick: function onClick() {
                        return handleSkillToggle(skill.id);
                      },
                      className: "relative p-4 flex items-center justify-between rounded-2xl bg-white dark:bg-primary-bg border border-gray-100 dark:border-divider shadow-sm transition-all hover:border-black dark:hover:border-primary group",
                      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                        className: "flex flex-col text-left",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          title: skill.name,
                          className: "text-base font-bold text-gray-900 dark:text-white line-clamp-1",
                          children: skill.name
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          title: skill.description,
                          className: "text-xs text-gray-400 dark:text-secondary-text line-clamp-2",
                          children: skill.description
                        })]
                      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_fa.FaRegTrashCan, {
                        size: 18,
                        className: "absolute right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out bg-white dark:bg-primary-bg text-red-500"
                      })]
                    }, skill.id);
                  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "col-span-full p-12 rounded-2xl border border-dashed border-gray-200 dark:border-divider text-center bg-white/50 dark:bg-primary-bg/50",
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                      className: "text-sm text-gray-400 dark:text-secondary-text",
                      children: "No skills configured yet"
                    })
                  })
                }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                  className: "border-t border-gray-200/50 dark:border-divider pt-4",
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                    className: "text-xs text-gray-400 dark:text-secondary-text ml-1 mb-2",
                    children: "Available in Registry"
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar",
                    children: availableSkills.filter(function (skill) {
                      return !formData.skill_ids.includes(skill.id) && (skill.name.toLowerCase().includes(searchTerm.toLowerCase()) || skill.id.toLowerCase().includes(searchTerm.toLowerCase()));
                    }).map(function (skill) {
                      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
                        type: "button",
                        onClick: function onClick() {
                          handleSkillToggle(skill.id);
                          setSearchTerm("");
                        },
                        className: "p-4 flex items-center justify-between rounded-2xl border border-gray-100 dark:border-divider bg-white dark:bg-primary-bg hover:border-black dark:hover:border-primary transition-all shadow-sm hover:shadow-md group",
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
                          className: "flex flex-col text-left",
                          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            title: skill.name,
                            className: "text-base font-bold text-gray-900 dark:text-white line-clamp-1",
                            children: skill.name
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                            title: skill.description,
                            className: "text-xs text-gray-400 dark:text-secondary-text line-clamp-2",
                            children: skill.description
                          })]
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                          className: "text-lg text-white bg-black dark:bg-primary rounded-full p-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0",
                          children: "+"
                        })]
                      }, skill.id);
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-xs text-gray-400 dark:text-secondary-text font-medium ml-1",
              children: "Manage tools and skills your agent can use to perform tasks"
            })]
          })]
        }), error && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl text-red-600 dark:text-red-400 text-sm flex items-center gap-3 animate-shake",
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
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
            className: "font-medium",
            children: error
          })]
        })]
      })
    }), showRealignModal && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-in fade-in duration-200",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "bg-white dark:bg-secondary-bg rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-200",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "px-8 py-6 border-b border-gray-100 dark:border-divider flex items-center justify-between bg-violet-50/50 dark:bg-violet-900/10",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-200 dark:shadow-none",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ri.RiRobot2Fill, {
                className: "w-6 h-6"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
                className: "text-xl font-bold text-gray-900 dark:text-white",
                children: "Review Brain Realignment"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-xs text-gray-500 dark:text-secondary-text font-medium",
                children: "The AI has refactored your instructions to match your new skills."
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return setShowRealignModal(false);
            },
            className: "p-2 hover:bg-white dark:hover:bg-primary-bg rounded-full transition-colors text-gray-400 dark:text-secondary-text hover:text-gray-900 dark:hover:text-white",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdClose, {
              className: "w-6 h-6"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex-1 overflow-y-auto p-8 flex flex-col md:flex-row gap-6 custom-scrollbar",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex-1 flex flex-col gap-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-xs font-bold text-gray-400 dark:text-secondary-text uppercase tracking-wider ml-1",
              children: "Current Instructions"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "flex-1 p-5 bg-gray-50 dark:bg-primary-bg border border-gray-100 dark:border-divider rounded-2xl text-sm text-gray-600 dark:text-secondary-text font-medium whitespace-pre-wrap overflow-y-auto max-h-[400px]",
              children: formData.system_prompt
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            className: "hidden md:flex items-center justify-center text-violet-300 dark:text-violet-500",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M13 5l7 7-7 7M5 5l7 7-7 7"
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex-1 flex flex-col gap-3",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
              className: "text-xs font-bold text-violet-600 dark:text-violet-400 uppercase tracking-wider ml-1",
              children: "Proposed Instructions"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
              value: realignedPrompt,
              onChange: function onChange(e) {
                return setRealignedPrompt(e.target.value);
              },
              className: "flex-1 p-5 bg-violet-50/30 dark:bg-violet-900/10 border-2 border-violet-100 dark:border-violet-800/50 rounded-2xl text-sm text-gray-800 dark:text-primary-text font-medium leading-relaxed focus:ring-4 focus:ring-violet-500/10 focus:border-violet-500 outline-none transition-all resize-none min-h-[400px]"
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "px-8 py-6 bg-gray-50 dark:bg-primary-bg border-t border-gray-100 dark:border-divider flex items-center justify-end gap-3",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return setShowRealignModal(false);
            },
            className: "px-6 py-2.5 text-sm font-bold text-gray-600 dark:text-secondary-text hover:text-gray-900 dark:hover:text-white transition-colors",
            children: "Discard Changes"
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: applyRealignedPrompt,
            className: "px-8 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-violet-200 dark:shadow-none active:scale-95",
            children: "Accept & Apply"
          })]
        })]
      })
    }), showIconPromptModal && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "bg-white dark:bg-secondary-bg w-full max-w-lg rounded-3xl shadow-2xl border border-gray-100 dark:border-divider overflow-hidden transform animate-in zoom-in-95 duration-200",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-6 border-b border-gray-100 dark:border-divider flex items-center justify-between bg-gray-50/50 dark:bg-primary-bg/50",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h3", {
            className: "text-xl font-bold dark:text-white flex items-center gap-2",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
              className: "text-2xl",
              children: "\u2728"
            }), " Customize AI Icon Prompt"]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return setShowIconPromptModal(false);
            },
            className: "p-2 hover:bg-white dark:hover:bg-secondary-bg rounded-full transition-colors text-gray-400 hover:text-gray-600 dark:hover:text-primary-text",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoCloseOutline, {
              className: "w-6 h-6"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-8",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-sm text-gray-500 dark:text-secondary-text mb-6",
            children: "Tell the AI what kind of icon you want. You can describe style, colors, and specific elements."
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "space-y-4",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("textarea", {
              value: iconPrompt,
              onChange: function onChange(e) {
                return setIconPrompt(e.target.value);
              },
              placeholder: "Describe your agent's icon...",
              className: "w-full h-40 p-5 bg-gray-50 dark:bg-primary-bg border border-gray-200 dark:border-divider rounded-2xl text-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none dark:text-white placeholder:text-gray-400"
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "flex gap-3 pt-4",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                onClick: function onClick() {
                  return setShowIconPromptModal(false);
                },
                className: "flex-1 px-6 py-4 border border-gray-200 dark:border-divider rounded-2xl text-sm font-bold text-gray-600 dark:text-primary-text hover:bg-gray-50 dark:hover:bg-primary-bg transition-all active:scale-[0.98]",
                children: "Cancel"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
                onClick: function onClick() {
                  return handleGenerateIcon(iconPrompt);
                },
                disabled: generatingIcon || !iconPrompt.trim(),
                className: "flex-[2] px-6 py-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-2",
                children: generatingIcon ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bi.BiLoaderAlt, {
                    className: "w-5 h-5 animate-spin"
                  }), "Generating..."]
                }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
                    className: "text-lg",
                    children: "\u2728"
                  }), "Generate Icon"]
                })
              })]
            })]
          })]
        })]
      })
    }), showIconSelectionModal && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "bg-white dark:bg-secondary-bg w-full max-w-md rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-divider overflow-hidden transform animate-in zoom-in-95 duration-200",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-8 border-b border-gray-50 dark:border-divider flex items-center justify-between",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
              className: "text-2xl font-black dark:text-white leading-tight",
              children: "Profile Icon"
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              className: "text-sm text-gray-500 dark:text-secondary-text mt-1 font-medium",
              children: "Choose how to update your agent's look"
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
            onClick: function onClick() {
              return setShowIconSelectionModal(false);
            },
            className: "w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-primary-bg rounded-full text-gray-400 hover:text-black dark:hover:text-white transition-colors",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoCloseOutline, {
              className: "w-6 h-6"
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "p-8 grid grid-cols-1 gap-4",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: function onClick() {
              var _fileInputRef$current;
              setShowIconSelectionModal(false);
              (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 || _fileInputRef$current.click();
            },
            className: "group flex flex-col items-center gap-4 p-8 bg-gray-50 dark:bg-primary-bg rounded-[2rem] border border-gray-100 dark:border-divider hover:border-blue-500/50 hover:bg-white dark:hover:bg-secondary-bg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 active:scale-[0.98]",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-16 h-16 rounded-2xl bg-white dark:bg-secondary-bg shadow-sm flex items-center justify-center text-gray-400 group-hover:text-blue-500 transition-colors duration-300",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoImageOutline, {
                className: "w-8 h-8"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                className: "font-bold text-gray-900 dark:text-white text-lg",
                children: "Upload Photo"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-sm text-gray-500 dark:text-secondary-text mt-1",
                children: "Pick a file from your device"
              })]
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", {
            onClick: function onClick() {
              setShowIconSelectionModal(false);
              setIconPrompt("A professional, clean profile icon for an AI agent named \"".concat(formData.name, "\". Description: ").concat(formData.description || "An AI assistant", ". Minimalist, high-quality, circular composition."));
              setShowIconPromptModal(true);
            },
            className: "group flex flex-col items-center gap-4 p-8 bg-blue-50/30 dark:bg-blue-500/5 rounded-[2rem] border border-blue-100/50 dark:border-blue-500/20 hover:border-blue-500 hover:bg-white dark:hover:bg-secondary-bg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 active:scale-[0.98]",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "w-16 h-16 rounded-2xl bg-blue-600 shadow-lg shadow-blue-500/30 flex items-center justify-center text-white transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_io.IoSparklesOutline, {
                className: "w-8 h-8"
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
              className: "text-center",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
                className: "font-bold text-blue-600 dark:text-primary text-lg",
                children: "Generate with AI"
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
                className: "text-sm text-blue-500/70 dark:text-primary/70 mt-1",
                children: "Create unique icon from prompt"
              })]
            })]
          })]
        })]
      })
    })]
  });
};
var _default = exports["default"] = EditAgent;