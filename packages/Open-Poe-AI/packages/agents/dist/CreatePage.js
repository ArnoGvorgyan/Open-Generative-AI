"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _CreateAgent = _interopRequireDefault(require("./components/CreateAgent"));
var _reactHotToast = require("react-hot-toast");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var CreateAgentPage = function CreateAgentPage(_ref) {
  var useUser = _ref.useUser,
    _ref$usedIn = _ref.usedIn,
    usedIn = _ref$usedIn === void 0 ? "muapiapp" : _ref$usedIn;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "h-screen w-full flex flex-col bg-gray-100 transition-all duration-300 ease-in-out",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("main", {
      className: "flex flex-col items-center gap-2 w-full h-full overflow-y-auto pt-8",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CreateAgent["default"], {
        useUser: useUser,
        usedIn: usedIn
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactHotToast.Toaster, {
      position: "top-center",
      reverseOrder: false
    })]
  });
};
var _default = exports["default"] = CreateAgentPage;