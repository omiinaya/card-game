webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CMr.X%5CDesktop%5Cnextjs-sequelize%5Cpages%5C_error.js!./":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CMr.X%5CDesktop%5Cnextjs-sequelize%5Cpages%5C_error.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.js */ "./pages/_error.js");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/head.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js":
false,

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Mr.X\\Desktop\\nextjs-sequelize\\pages\\_error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Error(_ref) {
  var statusCode = _ref.statusCode;
  return __jsx("div", {
    className: "page-error",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h2", {
    className: "text-warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, statusCode ? "An error ".concat(statusCode, " occurred on server") : 'An error occurred on client'), __jsx("span", {
    className: "small clearfix d-block text-center my-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "text-light font-weight-bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "fas fa-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), " Back to Home"))));
}

_c = Error;
/* harmony default export */ __webpack_exports__["default"] = (Error);

var _c;

$RefreshReg$(_c, "Error");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 17:
/*!*******************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CMr.X%5CDesktop%5Cnextjs-sequelize%5Cpages%5C_error.js ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CMr.X%5CDesktop%5Cnextjs-sequelize%5Cpages%5C_error.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=C%3A%5CUsers%5CMr.X%5CDesktop%5Cnextjs-sequelize%5Cpages%5C_error.js!./");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLmpzIl0sIm5hbWVzIjpbIkVycm9yIiwic3RhdHVzQ29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBOEQ7QUFDckY7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBLFNBQVNBLEtBQVQsT0FBK0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDN0IsU0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxjQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0EsVUFBVSxzQkFDS0EsVUFETCwyQkFFUCw2QkFITixDQURGLEVBTUU7QUFBTSxhQUFTLEVBQUMseUNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLDZCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixrQkFERixDQURGLENBTkYsQ0FERjtBQWdCRDs7S0FqQlFELEs7QUFtQk1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfZXJyb3IuanMuODBjMzUzZmFhNTZiNDAyNmY5MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcTXIuWFxcXFxEZXNrdG9wXFxcXG5leHRqcy1zZXF1ZWxpemVcXFxccGFnZXNcXFxcX2Vycm9yLmpzXCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gRXJyb3IoeyBzdGF0dXNDb2RlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLWVycm9yXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXdhcm5pbmdcIj5cclxuICAgICAgICB7c3RhdHVzQ29kZVxyXG4gICAgICAgICAgPyBgQW4gZXJyb3IgJHtzdGF0dXNDb2RlfSBvY2N1cnJlZCBvbiBzZXJ2ZXJgXHJcbiAgICAgICAgICA6ICdBbiBlcnJvciBvY2N1cnJlZCBvbiBjbGllbnQnfVxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzbWFsbCBjbGVhcmZpeCBkLWJsb2NrIHRleHQtY2VudGVyIG15LTJcIj5cclxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1saWdodCBmb250LXdlaWdodC1ib2xkXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1ob21lXCI+PC9pPiBCYWNrIHRvIEhvbWVcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9