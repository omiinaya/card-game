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

  useEffect(function () {}, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvc2NyaXB0cy50c3giXSwibmFtZXMiOlsiZ2V0TW9iaWxlRGV0ZWN0IiwidXNlckFnZW50IiwiaXNBbmRyb2lkIiwiQm9vbGVhbiIsIm1hdGNoIiwiaXNJb3MiLCJpc09wZXJhIiwiaXNXaW5kb3dzIiwiaXNTU1IiLCJpc01vYmlsZSIsImlzRGVza3RvcCIsInVzZU1vYmlsZURldGVjdCIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxTQUFELEVBQXlDO0FBQ3BFLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTUMsT0FBTyxDQUFDRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBRCxDQUFiO0FBQUEsR0FBbEI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxXQUFNRixPQUFPLENBQUNGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixtQkFBaEIsQ0FBRCxDQUFiO0FBQUEsR0FBZDs7QUFDQSxNQUFNRSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLFdBQU1ILE9BQU8sQ0FBQ0YsU0FBUyxDQUFDRyxLQUFWLENBQWdCLGFBQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWhCOztBQUNBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTUosT0FBTyxDQUFDRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsV0FBaEIsQ0FBRCxDQUFiO0FBQUEsR0FBbEI7O0FBQ0EsTUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVE7QUFBQSxXQUFNTCxPQUFPLENBQUNGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixNQUFoQixDQUFELENBQWI7QUFBQSxHQUFkOztBQUNBLE1BQU1LLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsV0FBTU4sT0FBTyxDQUFDRCxTQUFTLE1BQU1HLEtBQUssRUFBcEIsSUFBMEJDLE9BQU8sRUFBakMsSUFBdUNDLFNBQVMsRUFBakQsQ0FBYjtBQUFBLEdBQWpCOztBQUNBLE1BQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTVAsT0FBTyxDQUFDLENBQUNNLFFBQVEsRUFBVCxJQUFlLENBQUNELEtBQUssRUFBdEIsQ0FBYjtBQUFBLEdBQWxCOztBQUNBLFNBQU87QUFDSEMsWUFBUSxFQUFSQSxRQURHO0FBRUhDLGFBQVMsRUFBVEEsU0FGRztBQUdIUixhQUFTLEVBQVRBLFNBSEc7QUFJSEcsU0FBSyxFQUFMQSxLQUpHO0FBS0hHLFNBQUssRUFBTEE7QUFMRyxHQUFQO0FBT0gsQ0FmTTtBQWlCQSxJQUFNRyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDakNDLFdBQVMsQ0FBQyxZQUFNLENBQUUsQ0FBVCxFQUFXLEVBQVgsQ0FBVDtBQUNBLE1BQU1YLFNBQVMsR0FBRyxPQUFPWSxTQUFQLEtBQXFCLFdBQXJCLEdBQW1DLEtBQW5DLEdBQTJDQSxTQUFTLENBQUNaLFNBQXZFO0FBQ0EsU0FBT0QsZUFBZSxDQUFDQyxTQUFELENBQXRCO0FBQ0gsQ0FKTTs7R0FBTVUsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjM3MjgxNWZiYTViNDAwZmRiZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRNb2JpbGVEZXRlY3QgPSAodXNlckFnZW50OiBOYXZpZ2F0b3JJRFsndXNlckFnZW50J10pID0+IHtcclxuICAgIGNvbnN0IGlzQW5kcm9pZCA9ICgpID0+IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpKVxyXG4gICAgY29uc3QgaXNJb3MgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvaVBob25lfGlQYWR8aVBvZC9pKSlcclxuICAgIGNvbnN0IGlzT3BlcmEgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvT3BlcmEgTWluaS9pKSlcclxuICAgIGNvbnN0IGlzV2luZG93cyA9ICgpID0+IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKC9JRU1vYmlsZS9pKSlcclxuICAgIGNvbnN0IGlzU1NSID0gKCkgPT4gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goL1NTUi9pKSlcclxuICAgIGNvbnN0IGlzTW9iaWxlID0gKCkgPT4gQm9vbGVhbihpc0FuZHJvaWQoKSB8fCBpc0lvcygpIHx8IGlzT3BlcmEoKSB8fCBpc1dpbmRvd3MoKSlcclxuICAgIGNvbnN0IGlzRGVza3RvcCA9ICgpID0+IEJvb2xlYW4oIWlzTW9iaWxlKCkgJiYgIWlzU1NSKCkpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzTW9iaWxlLFxyXG4gICAgICAgIGlzRGVza3RvcCxcclxuICAgICAgICBpc0FuZHJvaWQsXHJcbiAgICAgICAgaXNJb3MsXHJcbiAgICAgICAgaXNTU1IsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VNb2JpbGVEZXRlY3QgPSAoKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge30sIFtdKVxyXG4gICAgY29uc3QgdXNlckFnZW50ID0gdHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgPyAnU1NSJyA6IG5hdmlnYXRvci51c2VyQWdlbnRcclxuICAgIHJldHVybiBnZXRNb2JpbGVEZXRlY3QodXNlckFnZW50KVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==