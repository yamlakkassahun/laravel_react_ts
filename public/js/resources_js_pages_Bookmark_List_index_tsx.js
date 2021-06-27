(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Bookmark_List_index_tsx"],{

/***/ "./resources/js/components/commen/layouts/index.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/commen/layouts/index.tsx ***!
  \**********************************************************/
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

var Layout = function Layout(_a) {
  var children = _a.children;
  return react_1["default"].createElement("div", {
    className: "container"
  }, children);
};

exports.default = Layout;

/***/ }),

/***/ "./resources/js/pages/Bookmark/List/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/pages/Bookmark/List/index.tsx ***!
  \****************************************************/
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

var layouts_1 = __importDefault(__webpack_require__(/*! ../../../components/commen/layouts */ "./resources/js/components/commen/layouts/index.tsx"));

var bookmarkListPage = function bookmarkListPage(_a) {
  var bookmarks = _a.bookmarks;
  return react_1["default"].createElement(layouts_1["default"], null, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-md-8"
  }, react_1["default"].createElement("ul", {
    className: "list-group"
  }, bookmarks.length > 0 && bookmarks.map(function (bookmark, index) {
    return react_1["default"].createElement("li", {
      className: "list-group-item",
      key: index
    }, react_1["default"].createElement("p", null, "Title: ", bookmark.title));
  })))));
};

exports.default = bookmarkListPage;

/***/ })

}]);