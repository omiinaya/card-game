webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


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
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {}, []);
  var userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  return getMobileDetect(userAgent);
};

_s(useMobileDetect, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2NyaXB0cy50c3giXSwibmFtZXMiOlsiZ2V0TW9iaWxlRGV0ZWN0IiwidXNlckFnZW50IiwiaXNBbmRyb2lkIiwiQm9vbGVhbiIsIm1hdGNoIiwiaXNJb3MiLCJpc09wZXJhIiwiaXNXaW5kb3dzIiwiaXNTU1IiLCJpc01vYmlsZSIsImlzRGVza3RvcCIsInVzZU1vYmlsZURldGVjdCIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsU0FBRCxFQUF5QztBQUNwRSxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1DLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDRyxLQUFWLENBQWdCLFVBQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWxCOztBQUNBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsV0FBTUYsT0FBTyxDQUFDRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsbUJBQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWQ7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFNSCxPQUFPLENBQUNGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixhQUFoQixDQUFELENBQWI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1KLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDRyxLQUFWLENBQWdCLFdBQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWxCOztBQUNBLE1BQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsV0FBTUwsT0FBTyxDQUFDRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsTUFBaEIsQ0FBRCxDQUFiO0FBQUEsR0FBZDs7QUFDQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1OLE9BQU8sQ0FBQ0QsU0FBUyxNQUFNRyxLQUFLLEVBQXBCLElBQTBCQyxPQUFPLEVBQWpDLElBQXVDQyxTQUFTLEVBQWpELENBQWI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1QLE9BQU8sQ0FBQyxDQUFDTSxRQUFRLEVBQVQsSUFBZSxDQUFDRCxLQUFLLEVBQXRCLENBQWI7QUFBQSxHQUFsQjs7QUFDQSxTQUFPO0FBQ0hDLFlBQVEsRUFBUkEsUUFERztBQUVIQyxhQUFTLEVBQVRBLFNBRkc7QUFHSFIsYUFBUyxFQUFUQSxTQUhHO0FBSUhHLFNBQUssRUFBTEEsS0FKRztBQUtIRyxTQUFLLEVBQUxBO0FBTEcsR0FBUDtBQU9ILENBZk07QUFpQkEsSUFBTUcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQ2pDQyx5REFBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsRUFBWCxDQUFUO0FBQ0EsTUFBTVgsU0FBUyxHQUFHLE9BQU9ZLFNBQVAsS0FBcUIsV0FBckIsR0FBbUMsS0FBbkMsR0FBMkNBLFNBQVMsQ0FBQ1osU0FBdkU7QUFDQSxTQUFPRCxlQUFlLENBQUNDLFNBQUQsQ0FBdEI7QUFDRCxDQUpJOztHQUFNVSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wNGQ2OTE0MzIwZGZkZGQxOWU0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TW9iaWxlRGV0ZWN0ID0gKHVzZXJBZ2VudDogTmF2aWdhdG9ySURbJ3VzZXJBZ2VudCddKSA9PiB7XHJcbiAgICBjb25zdCBpc0FuZHJvaWQgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSlcclxuICAgIGNvbnN0IGlzSW9zID0gKCkgPT4gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSkpXHJcbiAgICBjb25zdCBpc09wZXJhID0gKCkgPT4gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSkpXHJcbiAgICBjb25zdCBpc1dpbmRvd3MgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSkpXHJcbiAgICBjb25zdCBpc1NTUiA9ICgpID0+IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKC9TU1IvaSkpXHJcbiAgICBjb25zdCBpc01vYmlsZSA9ICgpID0+IEJvb2xlYW4oaXNBbmRyb2lkKCkgfHwgaXNJb3MoKSB8fCBpc09wZXJhKCkgfHwgaXNXaW5kb3dzKCkpXHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSAoKSA9PiBCb29sZWFuKCFpc01vYmlsZSgpICYmICFpc1NTUigpKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc01vYmlsZSxcclxuICAgICAgICBpc0Rlc2t0b3AsXHJcbiAgICAgICAgaXNBbmRyb2lkLFxyXG4gICAgICAgIGlzSW9zLFxyXG4gICAgICAgIGlzU1NSLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlTW9iaWxlRGV0ZWN0ID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHt9LCBbXSlcclxuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnID8gJ1NTUicgOiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICByZXR1cm4gZ2V0TW9iaWxlRGV0ZWN0KHVzZXJBZ2VudClcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==