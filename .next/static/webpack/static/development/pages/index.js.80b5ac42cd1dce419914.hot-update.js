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
  var currentDevice = Object(_public_scripts_tsx__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

_s(Home, "eOMpk5b700oR/CkrGo6X4afiSGA=", false, function () {
  return [_public_scripts_tsx__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/* harmony default export */ __webpack_exports__["default"] = (useMobileDetect);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vcHVibGljL3NjcmlwdHMudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImRhdGEiLCJ1c2VyIiwib3JpZ2luIiwiY3VycmVudERldmljZSIsInVzZU1vYmlsZURldGVjdCIsIlRvdWNoQmFja2VuZCIsImlkIiwiZ2V0TW9iaWxlRGV0ZWN0IiwidXNlckFnZW50IiwiaXNBbmRyb2lkIiwiQm9vbGVhbiIsIm1hdGNoIiwiaXNJb3MiLCJpc09wZXJhIiwiaXNXaW5kb3dzIiwiaXNTU1IiLCJpc01vYmlsZSIsImlzRGVza3RvcCIsInVzZUVmZmVjdCIsIm5hdmlnYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLG9CQUNUQSxLQUFLLENBQUNDLElBREc7QUFBQSxNQUMxQkMsSUFEMEIsZUFDMUJBLElBRDBCO0FBQUEsTUFDcEJDLE1BRG9CLGVBQ3BCQSxNQURvQjtBQUVsQyxNQUFNQyxhQUFhLEdBQUdDLG1FQUFlLEVBQXJDO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQWEsV0FBTyxFQUFFQyxvRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNR0osSUFBSSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxXQURILEVBRUdBLElBQUksQ0FBQ0ssRUFGUixDQVBKLENBREYsQ0FERjtBQWlCRDs7R0FwQnVCUixJO1VBRUFNLDJEOzs7S0FGQU4sSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHhCOztBQUVBLElBQU1TLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsU0FBRCxFQUF5QztBQUM3RCxNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1DLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDRyxLQUFWLENBQWdCLFVBQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWxCOztBQUNBLE1BQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsV0FBTUYsT0FBTyxDQUFDRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsbUJBQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWQ7O0FBQ0EsTUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQSxXQUFNSCxPQUFPLENBQUNGLFNBQVMsQ0FBQ0csS0FBVixDQUFnQixhQUFoQixDQUFELENBQWI7QUFBQSxHQUFoQjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1KLE9BQU8sQ0FBQ0YsU0FBUyxDQUFDRyxLQUFWLENBQWdCLFdBQWhCLENBQUQsQ0FBYjtBQUFBLEdBQWxCOztBQUNBLE1BQU1JLEtBQUssR0FBRyxTQUFSQSxLQUFRO0FBQUEsV0FBTUwsT0FBTyxDQUFDRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0IsTUFBaEIsQ0FBRCxDQUFiO0FBQUEsR0FBZDs7QUFDQSxNQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1OLE9BQU8sQ0FBQ0QsU0FBUyxNQUFNRyxLQUFLLEVBQXBCLElBQTBCQyxPQUFPLEVBQWpDLElBQXVDQyxTQUFTLEVBQWpELENBQWI7QUFBQSxHQUFqQjs7QUFDQSxNQUFNRyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFdBQU1QLE9BQU8sQ0FBQyxDQUFDTSxRQUFRLEVBQVQsSUFBZSxDQUFDRCxLQUFLLEVBQXRCLENBQWI7QUFBQSxHQUFsQjs7QUFDQSxTQUFPO0FBQ0hDLFlBQVEsRUFBUkEsUUFERztBQUVIQyxhQUFTLEVBQVRBLFNBRkc7QUFHSFIsYUFBUyxFQUFUQSxTQUhHO0FBSUhHLFNBQUssRUFBTEEsS0FKRztBQUtIRyxTQUFLLEVBQUxBO0FBTEcsR0FBUDtBQU9ILENBZkQ7O0FBaUJBLElBQU1YLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUMxQmMseURBQVMsQ0FBQyxZQUFNLENBQUcsQ0FBVixFQUFZLEVBQVosQ0FBVDtBQUNBLE1BQU1WLFNBQVMsR0FBRyxPQUFPVyxTQUFQLEtBQXFCLFdBQXJCLEdBQW1DLEtBQW5DLEdBQTJDQSxTQUFTLENBQUNYLFNBQXZFO0FBQ0EsU0FBT0QsZUFBZSxDQUFDQyxTQUFELENBQXRCO0FBQ0gsQ0FKRDs7R0FBTUosZTs7QUFNU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjgwYjVhYzQyY2QxZGNlNDE5OTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZENyZWF0ZSBmcm9tICcuLi9jYXJkQ3JlYXRlL0NhcmRDcmVhdGUnXHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9nYW1lL0JvYXJkJ1xyXG5pbXBvcnQgdXNlTW9iaWxlRGV0ZWN0IGZyb20gJy4uLy4uL3B1YmxpYy9zY3JpcHRzLnRzeCdcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnXHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xyXG5pbXBvcnQgeyBUb3VjaEJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHMuZGF0YTtcclxuICBjb25zdCBjdXJyZW50RGV2aWNlID0gdXNlTW9iaWxlRGV0ZWN0KClcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+SGVsbG8gd29ybGQhPC9oMT5cclxuICAgICAgICA8Q2FyZENyZWF0ZSAvPlxyXG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtUb3VjaEJhY2tlbmR9PlxyXG4gICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XCJVc2VyIElEOiBcIn1cclxuICAgICAgICAgICAge3VzZXIuaWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgZ2V0TW9iaWxlRGV0ZWN0ID0gKHVzZXJBZ2VudDogTmF2aWdhdG9ySURbJ3VzZXJBZ2VudCddKSA9PiB7XHJcbiAgICBjb25zdCBpc0FuZHJvaWQgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvQW5kcm9pZC9pKSlcclxuICAgIGNvbnN0IGlzSW9zID0gKCkgPT4gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goL2lQaG9uZXxpUGFkfGlQb2QvaSkpXHJcbiAgICBjb25zdCBpc09wZXJhID0gKCkgPT4gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goL09wZXJhIE1pbmkvaSkpXHJcbiAgICBjb25zdCBpc1dpbmRvd3MgPSAoKSA9PiBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaCgvSUVNb2JpbGUvaSkpXHJcbiAgICBjb25zdCBpc1NTUiA9ICgpID0+IEJvb2xlYW4odXNlckFnZW50Lm1hdGNoKC9TU1IvaSkpXHJcbiAgICBjb25zdCBpc01vYmlsZSA9ICgpID0+IEJvb2xlYW4oaXNBbmRyb2lkKCkgfHwgaXNJb3MoKSB8fCBpc09wZXJhKCkgfHwgaXNXaW5kb3dzKCkpXHJcbiAgICBjb25zdCBpc0Rlc2t0b3AgPSAoKSA9PiBCb29sZWFuKCFpc01vYmlsZSgpICYmICFpc1NTUigpKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpc01vYmlsZSxcclxuICAgICAgICBpc0Rlc2t0b3AsXHJcbiAgICAgICAgaXNBbmRyb2lkLFxyXG4gICAgICAgIGlzSW9zLFxyXG4gICAgICAgIGlzU1NSLFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCB1c2VNb2JpbGVEZXRlY3QgPSAoKSA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4geyB9LCBbXSlcclxuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnID8gJ1NTUicgOiBuYXZpZ2F0b3IudXNlckFnZW50XHJcbiAgICByZXR1cm4gZ2V0TW9iaWxlRGV0ZWN0KHVzZXJBZ2VudClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlTW9iaWxlRGV0ZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==