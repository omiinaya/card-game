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
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd-touch-backend */ "./node_modules/react-dnd-touch-backend/dist/esm/index.js");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\home\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home(props) {
  var _props$data = props.data,
      user = _props$data.user,
      origin = _props$data.origin;
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Hello world!"), __jsx(_cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DndProvider"], {
    backend: react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__["TouchBackend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  })), user && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "User ID: ", user.id)));
}
_c = Home;

getInitialProps = function getInitialProps(_ref) {
  var req = _ref.req;
  var userAgent;

  if (req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = req.headers['user-agent']; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }

  var isMobile = Boolean(userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
  return {
    isMobile: isMobile
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiZGF0YSIsInVzZXIiLCJvcmlnaW4iLCJUb3VjaEJhY2tlbmQiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJpc01vYmlsZSIsIkJvb2xlYW4iLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFBQSxvQkFDVEEsS0FBSyxDQUFDQyxJQURHO0FBQUEsTUFDMUJDLElBRDBCLGVBQzFCQSxJQUQwQjtBQUFBLE1BQ3BCQyxNQURvQixlQUNwQkEsTUFEb0I7QUFFbEMsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQWEsV0FBTyxFQUFFQyxvRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNR0YsSUFBSSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxXQURILEVBRUdBLElBQUksQ0FBQ0csRUFGUixDQVBKLENBREYsQ0FERjtBQWlCRDtLQW5CdUJOLEk7O0FBcUJ4Qk8sZUFBZSxHQUFHLCtCQUFhO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQzdCLE1BQUlDLFNBQUo7O0FBQ0EsTUFBSUQsR0FBSixFQUFTO0FBQUU7QUFDVEMsYUFBUyxHQUFHRCxHQUFHLENBQUNFLE9BQUosQ0FBWSxZQUFaLENBQVosQ0FETyxDQUMrQjtBQUN2QyxHQUZELE1BRU87QUFDTEQsYUFBUyxHQUFHRSxTQUFTLENBQUNGLFNBQXRCLENBREssQ0FDMkI7QUFDakM7O0FBRUQsTUFBSUcsUUFBUSxHQUFHQyxPQUFPLENBQUNKLFNBQVMsQ0FBQ0ssS0FBVixDQUNyQixvRUFEcUIsQ0FBRCxDQUF0QjtBQUlBLFNBQU87QUFBRUYsWUFBUSxFQUFSQTtBQUFGLEdBQVA7QUFDRCxDQWJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mMzliZTFmYTFlZmM5NzZkYzMyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRDcmVhdGUgZnJvbSAnLi4vY2FyZENyZWF0ZS9DYXJkQ3JlYXRlJ1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vZ2FtZS9Cb2FyZCdcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnXHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xyXG5pbXBvcnQgeyBUb3VjaEJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHMuZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+SGVsbG8gd29ybGQhPC9oMT5cclxuICAgICAgICA8Q2FyZENyZWF0ZSAvPlxyXG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtUb3VjaEJhY2tlbmR9PlxyXG4gICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XCJVc2VyIElEOiBcIn1cclxuICAgICAgICAgICAge3VzZXIuaWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXEgfSkgPT4ge1xyXG4gIGxldCB1c2VyQWdlbnQ7XHJcbiAgaWYgKHJlcSkgeyAvLyBpZiB5b3UgYXJlIG9uIHRoZSBzZXJ2ZXIgYW5kIHlvdSBnZXQgYSAncmVxJyBwcm9wZXJ0eSBmcm9tIHlvdXIgY29udGV4dFxyXG4gICAgdXNlckFnZW50ID0gcmVxLmhlYWRlcnNbJ3VzZXItYWdlbnQnXSAvLyBnZXQgdGhlIHVzZXItYWdlbnQgZnJvbSB0aGUgaGVhZGVyc1xyXG4gIH0gZWxzZSB7XHJcbiAgICB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IC8vIGlmIHlvdSBhcmUgb24gdGhlIGNsaWVudCB5b3UgY2FuIGFjY2VzcyB0aGUgbmF2aWdhdG9yIGZyb20gdGhlIHdpbmRvdyBvYmplY3RcclxuICB9XHJcbiAgXHJcbiAgbGV0IGlzTW9iaWxlID0gQm9vbGVhbih1c2VyQWdlbnQubWF0Y2goXHJcbiAgICAvQW5kcm9pZHxCbGFja0JlcnJ5fGlQaG9uZXxpUGFkfGlQb2R8T3BlcmEgTWluaXxJRU1vYmlsZXxXUERlc2t0b3AvaVxyXG4gICkpXHJcbiAgXHJcbiAgcmV0dXJuIHsgaXNNb2JpbGUgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==