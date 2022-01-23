webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Home.jsx":
/*!**********************************!*\
  !*** ./components/home/Home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardCreate/CardCreate */ "./components/cardCreate/CardCreate.jsx");
/* harmony import */ var _game_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/Board */ "./components/game/Board.jsx");
/* harmony import */ var _public_scripts_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/scripts.tsx */ "./public/scripts.tsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-touch-backend */ "./node_modules/react-dnd-touch-backend/dist/esm/index.js");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\home\\Home.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Home(props) {
  _s();

  var _props$data = props.data,
      user = _props$data.user,
      origin = _props$data.origin;
  console.log(Object(_public_scripts_tsx__WEBPACK_IMPORTED_MODULE_3__["useMobileDetect"])());
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Hello world!"), __jsx(_cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_4__["DndProvider"], {
    backend: react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_6__["TouchBackend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  })), user && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, "User ID: ", user.id)));
}

_s(Home, "8D2JDWM8H+pPgHlFml7tqmjNhWI=", false, function () {
  return [_public_scripts_tsx__WEBPACK_IMPORTED_MODULE_3__["useMobileDetect"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./public/scripts.tsx":
/*!****************************!*\
  !*** ./public/scripts.tsx ***!
  \****************************/
/*! exports provided: getMobileDetect, useMobileDetect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMobileDetect", function() { return getMobileDetect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMobileDetect", function() { return useMobileDetect; });
var getMobileDetect = function getMobileDetect(userAgent) {
  var isAndroid = function isAndroid() {
    return Boolean(userAgent.match(/Android/i));
  };

  var isIos = function isIos() {
    return Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  };

  var isOpera = function isOpera() {
    return Boolean(userAgent.match(/Opera Mini/i));
  };

  var isWindows = function isWindows() {
    return Boolean(userAgent.match(/IEMobile/i));
  };

  var isSSR = function isSSR() {
    return Boolean(userAgent.match(/SSR/i));
  };

  var isMobile = function isMobile() {
    return Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  };

  var isDesktop = function isDesktop() {
    return Boolean(!isMobile() && !isSSR());
  };

  return {
    isMobile: isMobile,
    isDesktop: isDesktop,
    isAndroid: isAndroid,
    isIos: isIos,
    isSSR: isSSR
  };
};
var useMobileDetect = function useMobileDetect() {
  var userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  return getMobileDetect(userAgent);
};

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NjcmlwdHMudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImRhdGEiLCJ1c2VyIiwib3JpZ2luIiwiY29uc29sZSIsImxvZyIsInVzZU1vYmlsZURldGVjdCIsIlRvdWNoQmFja2VuZCIsImlkIiwiZ2V0TW9iaWxlRGV0ZWN0IiwidXNlckFnZW50IiwiaXNBbmRyb2lkIiwiQm9vbGVhbiIsIm1hdGNoIiwiaXNJb3MiLCJpc09wZXJhIiwiaXNXaW5kb3dzIiwiaXNTU1IiLCJpc01vYmlsZSIsImlzRGVza3RvcCIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLG9CQUNUQSxLQUFLLENBQUNDLElBREc7QUFBQSxNQUMxQkMsSUFEMEIsZUFDMUJBLElBRDBCO0FBQUEsTUFDcEJDLE1BRG9CLGVBQ3BCQSxNQURvQjtBQUVsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlDLDJFQUFlLEVBQTNCO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQWEsV0FBTyxFQUFFQyxvRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNR0wsSUFBSSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxXQURILEVBRUdBLElBQUksQ0FBQ00sRUFGUixDQVBKLENBREYsQ0FERjtBQWlCRDs7R0FwQnVCVCxJO1VBRVZPLG1FOzs7S0FGVVAsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B4QjtBQUFBO0FBQUE7QUFBTyxJQUFNVSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLFNBQUQsRUFBeUM7QUFDcEUsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNQyxPQUFPLENBQUNGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixVQUFoQixDQUFELENBQWI7QUFBQSxHQUFsQjs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFdBQU1GLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDRyxLQUFWLENBQWdCLG1CQUFoQixDQUFELENBQWI7QUFBQSxHQUFkOztBQUNBLE1BQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUEsV0FBTUgsT0FBTyxDQUFDRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsYUFBaEIsQ0FBRCxDQUFiO0FBQUEsR0FBaEI7O0FBQ0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNSixPQUFPLENBQUNGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixXQUFoQixDQUFELENBQWI7QUFBQSxHQUFsQjs7QUFDQSxNQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUTtBQUFBLFdBQU1MLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDRyxLQUFWLENBQWdCLE1BQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWQ7O0FBQ0EsTUFBTUssUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNTixPQUFPLENBQUNELFNBQVMsTUFBTUcsS0FBSyxFQUFwQixJQUEwQkMsT0FBTyxFQUFqQyxJQUF1Q0MsU0FBUyxFQUFqRCxDQUFiO0FBQUEsR0FBakI7O0FBQ0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNUCxPQUFPLENBQUMsQ0FBQ00sUUFBUSxFQUFULElBQWUsQ0FBQ0QsS0FBSyxFQUF0QixDQUFiO0FBQUEsR0FBbEI7O0FBQ0EsU0FBTztBQUNIQyxZQUFRLEVBQVJBLFFBREc7QUFFSEMsYUFBUyxFQUFUQSxTQUZHO0FBR0hSLGFBQVMsRUFBVEEsU0FIRztBQUlIRyxTQUFLLEVBQUxBLEtBSkc7QUFLSEcsU0FBSyxFQUFMQTtBQUxHLEdBQVA7QUFPSCxDQWZNO0FBaUJBLElBQU1YLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUNqQyxNQUFNSSxTQUFTLEdBQUcsT0FBT1UsU0FBUCxLQUFxQixXQUFyQixHQUFtQyxLQUFuQyxHQUEyQ0EsU0FBUyxDQUFDVixTQUF2RTtBQUNBLFNBQU9ELGVBQWUsQ0FBQ0MsU0FBRCxDQUF0QjtBQUNILENBSE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmNjYjFhZTRmMGZhM2M4MjYxMTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZENyZWF0ZSBmcm9tICcuLi9jYXJkQ3JlYXRlL0NhcmRDcmVhdGUnXHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9nYW1lL0JvYXJkJ1xyXG5pbXBvcnQgeyB1c2VNb2JpbGVEZXRlY3QgfSBmcm9tICcuLi8uLi9wdWJsaWMvc2NyaXB0cy50c3gnXHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJ1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcclxuaW1wb3J0IHsgVG91Y2hCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc29sZS5sb2codXNlTW9iaWxlRGV0ZWN0KCkpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhlbGxvIHdvcmxkITwvaDE+XHJcbiAgICAgICAgPENhcmRDcmVhdGUgLz5cclxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17VG91Y2hCYWNrZW5kfT5cclxuICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1wiVXNlciBJRDogXCJ9XHJcbiAgICAgICAgICAgIHt1c2VyLmlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2V0TW9iaWxlRGV0ZWN0ID0gKHVzZXJBZ2VudDogTmF2aWdhdG9ySURbJ3VzZXJBZ2VudCddKSA9PiB7XHJcbiAgICBjb25zdCBpc0FuZHJvaWQgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSlcclxuICAgIGNvbnN0IGlzSW9zID0gKCkgPT4gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSkpXHJcbiAgICBjb25zdCBpc09wZXJhID0gKCkgPT4gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSkpXHJcbiAgICBjb25zdCBpc1dpbmRvd3MgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSkpXHJcbiAgICBjb25zdCBpc1NTUiA9ICgpID0+IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKC9TU1IvaSkpXHJcbiAgICBjb25zdCBpc01vYmlsZSA9ICgpID0+IEJvb2xlYW4oaXNBbmRyb2lkKCkgfHwgaXNJb3MoKSB8fCBpc09wZXJhKCkgfHwgaXNXaW5kb3dzKCkpXHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSAoKSA9PiBCb29sZWFuKCFpc01vYmlsZSgpICYmICFpc1NTUigpKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc01vYmlsZSxcclxuICAgICAgICBpc0Rlc2t0b3AsXHJcbiAgICAgICAgaXNBbmRyb2lkLFxyXG4gICAgICAgIGlzSW9zLFxyXG4gICAgICAgIGlzU1NSLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTW9iaWxlRGV0ZWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlckFnZW50ID0gdHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgPyAnU1NSJyA6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgIHJldHVybiBnZXRNb2JpbGVEZXRlY3QodXNlckFnZW50KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==