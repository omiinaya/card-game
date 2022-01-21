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
    //if cards have not loaded yet then load them from server.
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
    sortHand();
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    sortField();
  }, [onField]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setOnField(function (prev) {
      var x = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [onHand.filter(function (card) {
        return card.id == index - 1;
      })[0]]);
      return x;
    });
    setOnHand(function (prev) {
      return prev.filter(function (card) {
        return card.id != index - 1;
      });
    });
  };

  var playerAction = function playerAction() {
    console.log(onField);
  };

  var sortHand = function sortHand() {
    var myArray = onHand;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  var sortField = function sortField() {
    var myArray = onField;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
    setOnField(myArray);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
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
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: onField,
    playerAction: playerAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm9hcmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwibGVuZ3RoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInNvcnRIYW5kIiwic29ydEZpZWxkIiwiaGFuZGxlQ2FyZFBsYXllZCIsImluZGV4IiwicHJldiIsIngiLCJmaWx0ZXIiLCJjYXJkIiwiaWQiLCJwbGF5ZXJBY3Rpb24iLCJjb25zb2xlIiwibG9nIiwibXlBcnJheSIsImZvckVhY2giLCJlbGVtZW50Iiwib3ZlcmZsb3ciLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFJLFNBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUViQyxzREFBUSxDQUFDLEVBQUQsQ0FGSztBQUFBLE1BRWxDQyxNQUZrQztBQUFBLE1BRTFCQyxTQUYwQjs7QUFBQSxtQkFHWEYsc0RBQVEsQ0FBQyxFQUFELENBSEc7QUFBQSxNQUdsQ0csT0FIa0M7QUFBQSxNQUd6QkMsVUFIeUI7O0FBS3pDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkI7QUFDQSxRQUFJSixNQUFNLENBQUNLLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJDLGtEQUFLLENBQUNDLEdBQU4sY0FBdUJDLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ1IsaUJBQVMsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBVDtBQUNILE9BRkQ7QUFHSDtBQUNKLEdBUEQ7O0FBU0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxZQUFRO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQU07QUFDWkMsWUFBUTtBQUNYLEdBRlEsRUFFTixDQUFDWixNQUFELENBRk0sQ0FBVDtBQUlBVyx5REFBUyxDQUFDLFlBQU07QUFDWkUsYUFBUztBQUNaLEdBRlEsRUFFTixDQUFDWCxPQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNWSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNoQ1osY0FBVSxDQUFDLFVBQUFhLElBQUksRUFBSTtBQUNmLFVBQUlDLENBQUMsMEdBQU9ELElBQVAsSUFBYWhCLE1BQU0sQ0FBQ2tCLE1BQVAsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDQyxFQUFMLElBQVdMLEtBQUssR0FBRyxDQUF2QjtBQUFBLE9BQWxCLEVBQTRDLENBQTVDLENBQWIsRUFBTDtBQUNBLGFBQU9FLENBQVA7QUFDSCxLQUhTLENBQVY7QUFJQWhCLGFBQVMsQ0FBQyxVQUFBZSxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDRSxNQUFMLENBQVksVUFBQUMsSUFBSSxFQUFJO0FBQ2xDLGVBQU9BLElBQUksQ0FBQ0MsRUFBTCxJQUFXTCxLQUFLLEdBQUcsQ0FBMUI7QUFDSCxPQUZpQixDQUFKO0FBQUEsS0FBTCxDQUFUO0FBR0gsR0FSRDs7QUFVQSxNQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3ZCQyxXQUFPLENBQUNDLEdBQVIsQ0FBWXJCLE9BQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1VLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSVksT0FBTyxHQUFHeEIsTUFBZDtBQUNBd0IsV0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQVVDLE9BQVYsRUFBbUJYLEtBQW5CLEVBQTBCO0FBQ3RDVyxhQUFPLENBQUNOLEVBQVIsR0FBYUwsS0FBYjtBQUNILEtBRkQ7QUFHSCxHQUxEOztBQU9BLE1BQU1GLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDcEIsUUFBSVcsT0FBTyxHQUFHdEIsT0FBZDtBQUNBc0IsV0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQVVDLE9BQVYsRUFBbUJYLEtBQW5CLEVBQTBCO0FBQ3RDVyxhQUFPLENBQUNOLEVBQVIsR0FBYUwsS0FBYjtBQUNILEtBRkQ7QUFHQVosY0FBVSxDQUFDcUIsT0FBRCxDQUFWO0FBQ0gsR0FORDs7QUFRQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFRyxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUUxQixPQUFkO0FBQXVCLGdCQUFZLEVBQUVtQixZQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssU0FBSyxFQUFFO0FBQUVNLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFNLFNBQUssRUFBRTVCLE1BQWI7QUFBcUIsWUFBUSxFQUFFYyxnQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESjtBQVVILENBakVzQixrQ0FBdkI7TUFBTWxCLFU7QUFtRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5iMTg5NWI4Yzg1NzYzNDJhMzdlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnO1xyXG5pbXBvcnQgSGFuZCBmcm9tICcuL0hhbmQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBsYXllckhhbmQgPSBtZW1vKGZ1bmN0aW9uIENvbnRhaW5lcigpIHtcclxuXHJcbiAgICBjb25zdCBbb25IYW5kLCBzZXRPbkhhbmRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW29uRmllbGQsIHNldE9uRmllbGRdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vaWYgY2FyZHMgaGF2ZSBub3QgbG9hZGVkIHlldCB0aGVuIGxvYWQgdGhlbSBmcm9tIHNlcnZlci5cclxuICAgICAgICBpZiAob25IYW5kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0T25IYW5kKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2FyZHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvcnRIYW5kKCk7XHJcbiAgICB9LCBbb25IYW5kXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3J0RmllbGQoKVxyXG4gICAgfSwgW29uRmllbGRdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKGluZGV4KSA9PiB7ICAgICBcclxuICAgICAgICBzZXRPbkZpZWxkKHByZXYgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFsuLi5wcmV2LCBvbkhhbmQuZmlsdGVyKGNhcmQgPT4gY2FyZC5pZCA9PSBpbmRleCAtIDEpWzBdXVxyXG4gICAgICAgICAgICByZXR1cm4geFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgc2V0T25IYW5kKHByZXYgPT4gcHJldi5maWx0ZXIoY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXJkLmlkICE9IGluZGV4IC0gMVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXllckFjdGlvbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvbkZpZWxkKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvcnRIYW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gb25IYW5kXHJcbiAgICAgICAgbXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29ydEZpZWxkID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gb25GaWVsZFxyXG4gICAgICAgIG15QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldE9uRmllbGQobXlBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGNhcmRzPXtvbkZpZWxkfSBwbGF5ZXJBY3Rpb249e3BsYXllckFjdGlvbn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGFuZCBjYXJkcz17b25IYW5kfSBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=