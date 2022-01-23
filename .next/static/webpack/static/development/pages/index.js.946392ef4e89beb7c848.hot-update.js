webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Home.jsx":
/*!**********************************!*\
  !*** ./components/home/Home.jsx ***!
  \**********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardCreate/CardCreate */ "./components/cardCreate/CardCreate.jsx");
/* harmony import */ var _game_Board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game/Board */ "./components/game/Board.jsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd-touch-backend */ "./node_modules/react-dnd-touch-backend/dist/esm/index.js");


var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\home\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Home(_ref) {
  var deviceType = _ref.deviceType;
  //const { user, origin } = props.data;
  console.log(deviceType);
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Hello world!"), __jsx(_cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_5__["DndProvider"], {
    backend: react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_7__["TouchBackend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "User ID: "), ")}"));
}
_c = Home;
function getServerSideProps(_x) {
  return _getServerSideProps.apply(this, arguments);
}

function _getServerSideProps() {
  _getServerSideProps = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var UA, isMobile;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            UA = context.req.headers['user-agent'];
            isMobile = Boolean(UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
            return _context.abrupt("return", {
              props: {
                deviceType: isMobile ? 'mobile' : 'desktop'
              }
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getServerSideProps.apply(this, arguments);
}

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsImRldmljZVR5cGUiLCJjb25zb2xlIiwibG9nIiwiVG91Y2hCYWNrZW5kIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIlVBIiwicmVxIiwiaGVhZGVycyIsImlzTW9iaWxlIiwiQm9vbGVhbiIsIm1hdGNoIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxPQUE4QjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUMzQztBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxxREFBRDtBQUFhLFdBQU8sRUFBRUcsb0VBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLFdBREgsQ0FQSixPQURGLENBREY7QUFpQkQ7S0FwQnVCSixJO0FBc0JqQixTQUFlSyxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU8saUJBQWtDQyxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsY0FERCxHQUNNRCxPQUFPLENBQUNFLEdBQVIsQ0FBWUMsT0FBWixDQUFvQixZQUFwQixDQUROO0FBRUNDLG9CQUZELEdBRVlDLE9BQU8sQ0FBQ0osRUFBRSxDQUFDSyxLQUFILENBQ3ZCLG9FQUR1QixDQUFELENBRm5CO0FBQUEsNkNBTUU7QUFDTEMsbUJBQUssRUFBRTtBQUNMWiwwQkFBVSxFQUFFUyxRQUFRLEdBQUcsUUFBSCxHQUFjO0FBRDdCO0FBREYsYUFORjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45NDYzOTJlZjRlODliZWI3Yzg0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRDcmVhdGUgZnJvbSAnLi4vY2FyZENyZWF0ZS9DYXJkQ3JlYXRlJ1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vZ2FtZS9Cb2FyZCdcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnXHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xyXG5pbXBvcnQgeyBUb3VjaEJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBkZXZpY2VUeXBlIH0pIHtcclxuICAvL2NvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGRldmljZVR5cGUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhlbGxvIHdvcmxkITwvaDE+XHJcbiAgICAgICAgPENhcmRDcmVhdGUgLz5cclxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17VG91Y2hCYWNrZW5kfT5cclxuICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XCJVc2VyIElEOiBcIn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBVQSA9IGNvbnRleHQucmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXTtcclxuICBjb25zdCBpc01vYmlsZSA9IEJvb2xlYW4oVUEubWF0Y2goXHJcbiAgICAvQW5kcm9pZHxCbGFja0JlcnJ5fGlQaG9uZXxpUGFkfGlQb2R8T3BlcmEgTWluaXxJRU1vYmlsZXxXUERlc2t0b3AvaVxyXG4gICkpXHJcbiAgXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRldmljZVR5cGU6IGlzTW9iaWxlID8gJ21vYmlsZScgOiAnZGVza3RvcCdcclxuICAgIH1cclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9