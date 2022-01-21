webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Board.jsx":
/*!***********************************!*\
  !*** ./components/game/Board.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ "./components/game/Field.jsx");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hand */ "./components/game/Hand.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Board.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function Container() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      onHand = _useState[0],
      setOnHand = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      onField = _useState2[0],
      setOnField = _useState2[1];

  var getCards = function getCards() {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/card").then(function (res) {
        setOnHand(res.data.data);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    sordOnHand();
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    sordOnField();
    console.log(onField);
  }, [onField]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setOnField(function (prev) {
      var x = onHand.filter(function (card) {
        return card.id == index - 1;
      })[0];
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [x]);
    });
    setOnHand(function (prev) {
      return prev.filter(function (card) {
        return card.id != index - 1;
      });
    });
  };

  var sordOnHand = function sordOnHand() {
    var myArray = onHand;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      overflow: 'hidden',
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })));
}, "04N5cuwtClScjwx/b2x8cjPT0SQ="));
_c2 = PlayerHand;
/* harmony default export */ __webpack_exports__["default"] = (PlayerHand);

var _c, _c2;

$RefreshReg$(_c, "PlayerHand$memo");
$RefreshReg$(_c2, "PlayerHand");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm9hcmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwibGVuZ3RoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInNvcmRPbkhhbmQiLCJzb3JkT25GaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXJkUGxheWVkIiwiaW5kZXgiLCJwcmV2IiwieCIsImZpbHRlciIsImNhcmQiLCJpZCIsIm15QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm92ZXJmbG93IiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxrREFBSSxTQUFDLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFFYkMsc0RBQVEsQ0FBQyxFQUFELENBRks7QUFBQSxNQUVsQ0MsTUFGa0M7QUFBQSxNQUUxQkMsU0FGMEI7O0FBQUEsbUJBR1hGLHNEQUFRLENBQUMsRUFBRCxDQUhHO0FBQUEsTUFHbENHLE9BSGtDO0FBQUEsTUFHekJDLFVBSHlCOztBQUt6QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CO0FBQ0EsUUFBSUosTUFBTSxDQUFDSyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCQyxrREFBSyxDQUFDQyxHQUFOLGNBQXVCQyxJQUF2QixDQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDakNSLGlCQUFTLENBQUNRLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFWLENBQVQ7QUFDSCxPQUZEO0FBR0g7QUFDSixHQVBEOztBQVNBQyx5REFBUyxDQUFDLFlBQU07QUFDWlAsWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGNBQVU7QUFDYixHQUZRLEVBRU4sQ0FBQ1osTUFBRCxDQUZNLENBQVQ7QUFJQVcseURBQVMsQ0FBQyxZQUFNO0FBQ1pFLGVBQVc7QUFDWEMsV0FBTyxDQUFDQyxHQUFSLENBQVliLE9BQVo7QUFDSCxHQUhRLEVBR04sQ0FBQ0EsT0FBRCxDQUhNLENBQVQ7O0FBS0EsTUFBTWMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDaENkLGNBQVUsQ0FBQyxVQUFBZSxJQUFJLEVBQUk7QUFDZixVQUFJQyxDQUFDLEdBQUduQixNQUFNLENBQUNvQixNQUFQLENBQWMsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0MsRUFBTCxJQUFXTCxLQUFLLEdBQUcsQ0FBdkI7QUFBQSxPQUFsQixFQUE0QyxDQUE1QyxDQUFSO0FBQ0Esb0hBQVdDLElBQVgsSUFBaUJDLENBQWpCO0FBQ0gsS0FIUyxDQUFWO0FBSUFsQixhQUFTLENBQUMsVUFBQWlCLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFDbEMsZUFBT0EsSUFBSSxDQUFDQyxFQUFMLElBQVdMLEtBQUssR0FBRyxDQUExQjtBQUNILE9BRmlCLENBQUo7QUFBQSxLQUFMLENBQVQ7QUFHSCxHQVJEOztBQVVBLE1BQU1MLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckIsUUFBSVcsT0FBTyxHQUFHdkIsTUFBZDtBQUNBdUIsV0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQVVDLE9BQVYsRUFBbUJSLEtBQW5CLEVBQTBCO0FBQ3RDUSxhQUFPLENBQUNILEVBQVIsR0FBYUwsS0FBYjtBQUNILEtBRkQ7QUFHSCxHQUxEOztBQVNBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVTLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssU0FBSyxFQUFFO0FBQUVELGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFNLFNBQUssRUFBRTNCLE1BQWI7QUFBcUIsWUFBUSxFQUFFZ0IsZ0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBREo7QUFVSCxDQXhEc0Isa0NBQXZCO01BQU1wQixVO0FBMERTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODUwNDljYzBlZDgzZDEzOWUzYWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJztcclxuaW1wb3J0IEhhbmQgZnJvbSAnLi9IYW5kJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW29uSGFuZCwgc2V0T25IYW5kXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtvbkZpZWxkLCBzZXRPbkZpZWxkXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9pZiBvbkhhbmQgaGF2ZSBub3QgbG9hZGVkIHlldCB0aGVuIGxvYWQgdGhlbSBmcm9tIHNlcnZlci5cclxuICAgICAgICBpZiAob25IYW5kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0T25IYW5kKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2FyZHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvcmRPbkhhbmQoKVxyXG4gICAgfSwgW29uSGFuZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29yZE9uRmllbGQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uRmllbGQpXHJcbiAgICB9LCBbb25GaWVsZF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRQbGF5ZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRPbkZpZWxkKHByZXYgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeCA9IG9uSGFuZC5maWx0ZXIoY2FyZCA9PiBjYXJkLmlkID09IGluZGV4IC0gMSlbMF1cclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmV2LCB4XVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0T25IYW5kKHByZXYgPT4gcHJldi5maWx0ZXIoY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXJkLmlkICE9IGluZGV4IC0gMVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvcmRPbkhhbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG15QXJyYXkgPSBvbkhhbmRcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxIYW5kIGNhcmRzPXtvbkhhbmR9IHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJIYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==