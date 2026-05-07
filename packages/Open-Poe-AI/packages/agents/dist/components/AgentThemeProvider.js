"use strict";
'use client';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AgentThemeProvider = void 0;
var _react = _interopRequireDefault(require("react"));
var _nextThemes = require("next-themes");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var AgentThemeProvider = exports.AgentThemeProvider = function AgentThemeProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_nextThemes.ThemeProvider, {
    attribute: "class",
    defaultTheme: "system",
    enableSystem: true,
    disableTransitionOnChange: true,
    children: children
  });
};
var _default = exports["default"] = AgentThemeProvider;