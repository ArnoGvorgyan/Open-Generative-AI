"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactHotToast = require("react-hot-toast");
var _ProfileAgent = _interopRequireDefault(require("./components/ProfileAgent"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var AgentProfile = function AgentProfile(_ref) {
  var useUser = _ref.useUser,
    _ref$usedIn = _ref.usedIn,
    usedIn = _ref$usedIn === void 0 ? "muapiapp" : _ref$usedIn;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "h-screen w-full flex flex-col bg-blue-50/50 transition-all duration-300 ease-in-out",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHotToast.Toaster, {
      position: "top-center",
      reverseOrder: false
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "flex flex-col items-center gap-2 w-full h-full overflow-y-auto pt-8",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProfileAgent["default"], {
        useUser: useUser,
        usedIn: usedIn
      })
    })]
  });
};
var _default = exports["default"] = AgentProfile;