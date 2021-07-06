(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Welcome_index_tsx"],{

/***/ "./resources/js/pages/Welcome/index.tsx":
/*!**********************************************!*\
  !*** ./resources/js/pages/Welcome/index.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var WelcomePage = function WelcomePage() {
  return react_1["default"].createElement("div", {
    className: ""
  }, react_1["default"].createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light"
  }, react_1["default"].createElement("a", {
    className: "navbar-brand",
    href: "#"
  }, "Bookmarks"), react_1["default"].createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, react_1["default"].createElement("span", {
    className: "navbar-toggler-icon"
  })), react_1["default"].createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav"
  }, react_1["default"].createElement("ul", {
    className: "navbar-nav ml-auto"
  }, react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    className: "nav-link",
    href: "/login"
  }, "Login")), react_1["default"].createElement("li", {
    className: "nav-item"
  }, react_1["default"].createElement("a", {
    className: "nav-link disabled",
    href: "/register"
  }, "Register"))))), react_1["default"].createElement("hr", null), react_1["default"].createElement("h1", {
    className: "mt-5 text-center"
  }, "Welcome to Bookmark App"));
};

exports.default = WelcomePage;

/***/ })

}]);