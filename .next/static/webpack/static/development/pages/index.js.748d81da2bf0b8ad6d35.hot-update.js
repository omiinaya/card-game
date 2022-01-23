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






Home.getInitialProps = function (_ref) {
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

function Home(props, _ref2) {
  var isMobile = _ref2.isMobile;
  var _props$data = props.data,
      user = _props$data.user,
      origin = _props$data.origin;
  console.log(isMobile);
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "Hello world!"), __jsx(_cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DndProvider"], {
    backend: react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__["TouchBackend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), user && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "User ID: ", user.id)));
}
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJpc01vYmlsZSIsIkJvb2xlYW4iLCJtYXRjaCIsInByb3BzIiwiZGF0YSIsInVzZXIiLCJvcmlnaW4iLCJjb25zb2xlIiwibG9nIiwiVG91Y2hCYWNrZW5kIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBQSxJQUFJLENBQUNDLGVBQUwsR0FBdUIsZ0JBQWE7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDbEMsTUFBSUMsU0FBSjs7QUFDQSxNQUFJRCxHQUFKLEVBQVM7QUFBRTtBQUNUQyxhQUFTLEdBQUdELEdBQUcsQ0FBQ0UsT0FBSixDQUFZLFlBQVosQ0FBWixDQURPLENBQytCO0FBQ3ZDLEdBRkQsTUFFTztBQUNMRCxhQUFTLEdBQUdFLFNBQVMsQ0FBQ0YsU0FBdEIsQ0FESyxDQUMyQjtBQUNqQzs7QUFFRCxNQUFJRyxRQUFRLEdBQUdDLE9BQU8sQ0FBQ0osU0FBUyxDQUFDSyxLQUFWLENBQ3JCLG9FQURxQixDQUFELENBQXRCO0FBSUEsU0FBTztBQUFFRixZQUFRLEVBQVJBO0FBQUYsR0FBUDtBQUNELENBYkQ7O0FBZWUsU0FBU04sSUFBVCxDQUFjUyxLQUFkLFNBQW1DO0FBQUEsTUFBWkgsUUFBWSxTQUFaQSxRQUFZO0FBQUEsb0JBQ3ZCRyxLQUFLLENBQUNDLElBRGlCO0FBQUEsTUFDeENDLElBRHdDLGVBQ3hDQSxJQUR3QztBQUFBLE1BQ2xDQyxNQURrQyxlQUNsQ0EsTUFEa0M7QUFFaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUixRQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHFEQUFEO0FBQWEsV0FBTyxFQUFFUyxvRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSEYsRUFNR0osSUFBSSxJQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxXQURILEVBRUdBLElBQUksQ0FBQ0ssRUFGUixDQVBKLENBREYsQ0FERjtBQWlCRDtLQXBCdUJoQixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy43NDhkODFkYTJiZjBiOGFkNmQzNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRDcmVhdGUgZnJvbSAnLi4vY2FyZENyZWF0ZS9DYXJkQ3JlYXRlJ1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vZ2FtZS9Cb2FyZCdcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnXHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xyXG5pbXBvcnQgeyBUb3VjaEJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCdcclxuXHJcbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVxIH0pID0+IHtcclxuICBsZXQgdXNlckFnZW50O1xyXG4gIGlmIChyZXEpIHsgLy8gaWYgeW91IGFyZSBvbiB0aGUgc2VydmVyIGFuZCB5b3UgZ2V0IGEgJ3JlcScgcHJvcGVydHkgZnJvbSB5b3VyIGNvbnRleHRcclxuICAgIHVzZXJBZ2VudCA9IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gLy8gZ2V0IHRoZSB1c2VyLWFnZW50IGZyb20gdGhlIGhlYWRlcnNcclxuICB9IGVsc2Uge1xyXG4gICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCAvLyBpZiB5b3UgYXJlIG9uIHRoZSBjbGllbnQgeW91IGNhbiBhY2Nlc3MgdGhlIG5hdmlnYXRvciBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgfVxyXG5cclxuICBsZXQgaXNNb2JpbGUgPSBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaChcclxuICAgIC9BbmRyb2lkfEJsYWNrQmVycnl8aVBob25lfGlQYWR8aVBvZHxPcGVyYSBNaW5pfElFTW9iaWxlfFdQRGVza3RvcC9pXHJcbiAgKSlcclxuICBcclxuICByZXR1cm4geyBpc01vYmlsZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMsIHsgaXNNb2JpbGUgfSkge1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGlzTW9iaWxlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5IZWxsbyB3b3JsZCE8L2gxPlxyXG4gICAgICAgIDxDYXJkQ3JlYXRlIC8+XHJcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e1RvdWNoQmFja2VuZH0+XHJcbiAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICA8L0RuZFByb3ZpZGVyPlxyXG4gICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcIlVzZXIgSUQ6IFwifVxyXG4gICAgICAgICAgICB7dXNlci5pZH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9