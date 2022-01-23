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





function Home(_ref, props) {
  var deviceType = _ref.deviceType;
  var _props$data = props.data,
      user = _props$data.user,
      origin = _props$data.origin;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiZGV2aWNlVHlwZSIsImRhdGEiLCJ1c2VyIiwib3JpZ2luIiwiY29uc29sZSIsImxvZyIsIlRvdWNoQmFja2VuZCIsImlkIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsIlVBIiwicmVxIiwiaGVhZGVycyIsImlzTW9iaWxlIiwiQm9vbGVhbiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsT0FBOEJDLEtBQTlCLEVBQXFDO0FBQUEsTUFBckJDLFVBQXFCLFFBQXJCQSxVQUFxQjtBQUFBLG9CQUN6QkQsS0FBSyxDQUFDRSxJQURtQjtBQUFBLE1BQzFDQyxJQUQwQyxlQUMxQ0EsSUFEMEM7QUFBQSxNQUNwQ0MsTUFEb0MsZUFDcENBLE1BRG9DO0FBRWxEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUwsVUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxxREFBRDtBQUFhLFdBQU8sRUFBRU0sb0VBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLEVBTUdKLElBQUksSUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csV0FESCxFQUVHQSxJQUFJLENBQUNLLEVBRlIsQ0FQSixDQURGLENBREY7QUFpQkQ7S0FwQnVCVCxJO0FBc0JqQixTQUFlVSxrQkFBdEI7QUFBQTtBQUFBOzs7eU1BQU8saUJBQWtDQyxPQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQ0MsY0FERCxHQUNNRCxPQUFPLENBQUNFLEdBQVIsQ0FBWUMsT0FBWixDQUFvQixZQUFwQixDQUROO0FBRUNDLG9CQUZELEdBRVlDLE9BQU8sQ0FBQ0osRUFBRSxDQUFDSyxLQUFILENBQ3ZCLG9FQUR1QixDQUFELENBRm5CO0FBQUEsNkNBTUU7QUFDTGhCLG1CQUFLLEVBQUU7QUFDTEMsMEJBQVUsRUFBRWEsUUFBUSxHQUFHLFFBQUgsR0FBYztBQUQ3QjtBQURGLGFBTkY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzcwNjM1MDcyMGUwMTc2YWJjOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkQ3JlYXRlIGZyb20gJy4uL2NhcmRDcmVhdGUvQ2FyZENyZWF0ZSdcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL2dhbWUvQm9hcmQnXHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJ1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcclxuaW1wb3J0IHsgVG91Y2hCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGV2aWNlVHlwZSB9LCBwcm9wcykge1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcy5kYXRhO1xyXG4gIGNvbnNvbGUubG9nKGRldmljZVR5cGUpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhlbGxvIHdvcmxkITwvaDE+XHJcbiAgICAgICAgPENhcmRDcmVhdGUgLz5cclxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17VG91Y2hCYWNrZW5kfT5cclxuICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1wiVXNlciBJRDogXCJ9XHJcbiAgICAgICAgICAgIHt1c2VyLmlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgVUEgPSBjb250ZXh0LnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J107XHJcbiAgY29uc3QgaXNNb2JpbGUgPSBCb29sZWFuKFVBLm1hdGNoKFxyXG4gICAgL0FuZHJvaWR8QmxhY2tCZXJyeXxpUGhvbmV8aVBhZHxpUG9kfE9wZXJhIE1pbml8SUVNb2JpbGV8V1BEZXNrdG9wL2lcclxuICApKVxyXG4gIFxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkZXZpY2VUeXBlOiBpc01vYmlsZSA/ICdtb2JpbGUnIDogJ2Rlc2t0b3AnXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==