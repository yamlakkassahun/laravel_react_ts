(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Bookmark_View_index_tsx"],{

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
    className: "container-fluid"
  }, react_1["default"].createElement("div", {
    className: "container"
  }, children));
};

exports.default = Layout;

/***/ }),

/***/ "./resources/js/pages/Bookmark/View/index.tsx":
/*!****************************************************!*\
  !*** ./resources/js/pages/Bookmark/View/index.tsx ***!
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

var inertia_1 = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var layouts_1 = __importDefault(__webpack_require__(/*! ../../../components/commen/layouts */ "./resources/js/components/commen/layouts/index.tsx"));

var bookmarkViewPage = function bookmarkViewPage(_a) {
  var bookmarks = _a.bookmarks;

  var handelSave = function handelSave(event) {
    event.preventDefault();
    inertia_1.Inertia.post('/bookmark/make-active', {
      id: bookmarks.id
    });
  };

  return react_1["default"].createElement(layouts_1["default"], null, react_1["default"].createElement("div", {
    className: "row"
  }, react_1["default"].createElement("div", {
    className: "col-md-6"
  }, bookmarks.title && react_1["default"].createElement("div", {
    className: "card"
  }, react_1["default"].createElement("div", {
    className: "card-header"
  }, bookmarks.title), react_1["default"].createElement("div", {
    className: "card-body"
  }, react_1["default"].createElement("p", null, bookmarks.description), react_1["default"].createElement("div", {
    className: "mt-3 mb-3"
  }, react_1["default"].createElement("img", {
    src: bookmarks.image_url,
    alt: bookmarks.title,
    className: "img-fluid"
  })), react_1["default"].createElement("button", {
    className: "btn btn-small btn-primary mt-2",
    onClick: handelSave
  }, "save"))))));
};

exports.default = bookmarkViewPage;

/***/ })

}]);