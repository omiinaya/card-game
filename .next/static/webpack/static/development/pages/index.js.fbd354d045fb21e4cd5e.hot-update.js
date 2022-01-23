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
  console.log(isMobile);
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
  }, "Hello world!"), __jsx(_cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DndProvider"], {
    backend: react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__["TouchBackend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), user && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiZGF0YSIsInVzZXIiLCJvcmlnaW4iLCJjb25zb2xlIiwibG9nIiwiaXNNb2JpbGUiLCJUb3VjaEJhY2tlbmQiLCJpZCIsImdldEluaXRpYWxQcm9wcyIsInJlcSIsInVzZXJBZ2VudCIsImhlYWRlcnMiLCJuYXZpZ2F0b3IiLCJCb29sZWFuIiwibWF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUEsb0JBQ1RBLEtBQUssQ0FBQ0MsSUFERztBQUFBLE1BQzFCQyxJQUQwQixlQUMxQkEsSUFEMEI7QUFBQSxNQUNwQkMsTUFEb0IsZUFDcEJBLE1BRG9CO0FBRWxDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxxREFBRDtBQUFhLFdBQU8sRUFBRUMsb0VBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLEVBTUdMLElBQUksSUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csV0FESCxFQUVHQSxJQUFJLENBQUNNLEVBRlIsQ0FQSixDQURGLENBREY7QUFpQkQ7S0FwQnVCVCxJOztBQXNCeEJVLGVBQWUsR0FBRywrQkFBYTtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUM3QixNQUFJQyxTQUFKOztBQUNBLE1BQUlELEdBQUosRUFBUztBQUFFO0FBQ1RDLGFBQVMsR0FBR0QsR0FBRyxDQUFDRSxPQUFKLENBQVksWUFBWixDQUFaLENBRE8sQ0FDK0I7QUFDdkMsR0FGRCxNQUVPO0FBQ0xELGFBQVMsR0FBR0UsU0FBUyxDQUFDRixTQUF0QixDQURLLENBQzJCO0FBQ2pDOztBQUVELE1BQUlMLFFBQVEsR0FBR1EsT0FBTyxDQUFDSCxTQUFTLENBQUNJLEtBQVYsQ0FDckIsb0VBRHFCLENBQUQsQ0FBdEI7QUFJQSxTQUFPO0FBQUVULFlBQVEsRUFBUkE7QUFBRixHQUFQO0FBQ0QsQ0FiRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZmJkMzU0ZDA0NWZiMjFlNGNkNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkQ3JlYXRlIGZyb20gJy4uL2NhcmRDcmVhdGUvQ2FyZENyZWF0ZSdcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL2dhbWUvQm9hcmQnXHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJ1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcclxuaW1wb3J0IHsgVG91Y2hCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc29sZS5sb2coaXNNb2JpbGUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhlbGxvIHdvcmxkITwvaDE+XHJcbiAgICAgICAgPENhcmRDcmVhdGUgLz5cclxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17VG91Y2hCYWNrZW5kfT5cclxuICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1wiVXNlciBJRDogXCJ9XHJcbiAgICAgICAgICAgIHt1c2VyLmlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZ2V0SW5pdGlhbFByb3BzID0gKHsgcmVxIH0pID0+IHtcclxuICBsZXQgdXNlckFnZW50O1xyXG4gIGlmIChyZXEpIHsgLy8gaWYgeW91IGFyZSBvbiB0aGUgc2VydmVyIGFuZCB5b3UgZ2V0IGEgJ3JlcScgcHJvcGVydHkgZnJvbSB5b3VyIGNvbnRleHRcclxuICAgIHVzZXJBZ2VudCA9IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gLy8gZ2V0IHRoZSB1c2VyLWFnZW50IGZyb20gdGhlIGhlYWRlcnNcclxuICB9IGVsc2Uge1xyXG4gICAgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudCAvLyBpZiB5b3UgYXJlIG9uIHRoZSBjbGllbnQgeW91IGNhbiBhY2Nlc3MgdGhlIG5hdmlnYXRvciBmcm9tIHRoZSB3aW5kb3cgb2JqZWN0XHJcbiAgfVxyXG5cclxuICBsZXQgaXNNb2JpbGUgPSBCb29sZWFuKHVzZXJBZ2VudC5tYXRjaChcclxuICAgIC9BbmRyb2lkfEJsYWNrQmVycnl8aVBob25lfGlQYWR8aVBvZHxPcGVyYSBNaW5pfElFTW9iaWxlfFdQRGVza3RvcC9pXHJcbiAgKSlcclxuICBcclxuICByZXR1cm4geyBpc01vYmlsZSB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9