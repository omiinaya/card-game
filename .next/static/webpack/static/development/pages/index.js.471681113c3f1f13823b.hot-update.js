webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Board.jsx":
/*!***********************************!*\
  !*** ./components/game/Board.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./components/game/Field.jsx");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hand */ "./components/game/Hand.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Board.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function Container() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      onHand = _useState[0],
      setOnHand = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      onField = _useState2[0],
      setOnField = _useState2[1];

  var getCards = function getCards() {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/card").then(function (res) {
        var hand = res.data.data.sort(function () {
          return Math.random() - Math.random();
        }).slice(0, 10);
        sortIDs(hand);
        setOnHand(hand);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    sortIDs(onHand);
    console.log(onHand);
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //sortIDs(onField)
    console.log(onField);
  }, [onField]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setOnHand(function (prev) {
      return prev.filter(function (card) {
        return card.id != index;
      });
    }); //setOnField(prevArray => [...prevArray, onHand.filter(card => card.id == index - 1)[0]])
  };

  var sortIDs = function sortIDs(array) {
    var myArray = array;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cards: onField,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
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
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm9hcmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwibGVuZ3RoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiaGFuZCIsImRhdGEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwic29ydElEcyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXJkUGxheWVkIiwiaW5kZXgiLCJwcmV2IiwiZmlsdGVyIiwiY2FyZCIsImlkIiwiYXJyYXkiLCJteUFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJvdmVyZmxvdyIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msa0RBQUksU0FBQyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBRWJDLHNEQUFRLENBQUMsRUFBRCxDQUZLO0FBQUEsTUFFbENDLE1BRmtDO0FBQUEsTUFFMUJDLFNBRjBCOztBQUFBLG1CQUdYRixzREFBUSxDQUFDLEVBQUQsQ0FIRztBQUFBLE1BR2xDRyxPQUhrQztBQUFBLE1BR3pCQyxVQUh5Qjs7QUFLekMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQjtBQUNBLFFBQUlKLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkMsa0RBQUssQ0FBQ0MsR0FBTixjQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDLFlBQUlDLElBQUksR0FBR0QsR0FBRyxDQUFDRSxJQUFKLENBQVNBLElBQVQsQ0FBY0MsSUFBZCxDQUFtQjtBQUFBLGlCQUFNQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0JELElBQUksQ0FBQ0MsTUFBTCxFQUF0QjtBQUFBLFNBQW5CLEVBQXdEQyxLQUF4RCxDQUE4RCxDQUE5RCxFQUFpRSxFQUFqRSxDQUFYO0FBQ0FDLGVBQU8sQ0FBQ04sSUFBRCxDQUFQO0FBQ0FULGlCQUFTLENBQUNTLElBQUQsQ0FBVDtBQUNILE9BSkQ7QUFLSDtBQUNKLEdBVEQ7O0FBV0FPLHlEQUFTLENBQUMsWUFBTTtBQUNaYixZQUFRO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBYSx5REFBUyxDQUFDLFlBQU07QUFDWkQsV0FBTyxDQUFDaEIsTUFBRCxDQUFQO0FBQ0FrQixXQUFPLENBQUNDLEdBQVIsQ0FBWW5CLE1BQVo7QUFDSCxHQUhRLEVBR04sQ0FBQ0EsTUFBRCxDQUhNLENBQVQ7QUFLQWlCLHlEQUFTLENBQUMsWUFBTTtBQUNaO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZakIsT0FBWjtBQUNILEdBSFEsRUFHTixDQUFDQSxPQUFELENBSE0sQ0FBVDs7QUFLQSxNQUFNa0IsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDaENwQixhQUFTLENBQUMsVUFBQXFCLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDQyxFQUFMLElBQVdKLEtBQWY7QUFBQSxPQUFoQixDQUFKO0FBQUEsS0FBTCxDQUFULENBRGdDLENBRWhDO0FBQ0gsR0FIRDs7QUFLQSxNQUFNTCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDVSxLQUFELEVBQVc7QUFDdkIsUUFBSUMsT0FBTyxHQUFHRCxLQUFkO0FBQ0FDLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFVQyxPQUFWLEVBQW1CUixLQUFuQixFQUEwQjtBQUN0Q1EsYUFBTyxDQUFDSixFQUFSLEdBQWFKLEtBQWI7QUFDSCxLQUZEO0FBR0gsR0FMRDs7QUFPQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFUyxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUU3QixPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxTQUFLLEVBQUU7QUFBRTRCLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFNLFNBQUssRUFBRS9CLE1BQWI7QUFBcUIsWUFBUSxFQUFFb0IsZ0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBREo7QUFVSCxDQXBEc0Isa0NBQXZCO01BQU14QixVO0FBc0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDcxNjgxMTEzYzNmMWYxMzgyM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJztcclxuaW1wb3J0IEhhbmQgZnJvbSAnLi9IYW5kJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW29uSGFuZCwgc2V0T25IYW5kXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW29uRmllbGQsIHNldE9uRmllbGRdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9pZiBvbkhhbmQgaGF2ZSBub3QgbG9hZGVkIHlldCB0aGVuIGxvYWQgdGhlbSBmcm9tIHNlcnZlci5cclxuICAgICAgICBpZiAob25IYW5kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmQgPSByZXMuZGF0YS5kYXRhLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgICAgICAgICAgc29ydElEcyhoYW5kKVxyXG4gICAgICAgICAgICAgICAgc2V0T25IYW5kKGhhbmQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2FyZHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvcnRJRHMob25IYW5kKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uSGFuZClcclxuICAgIH0sIFtvbkhhbmRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIC8vc29ydElEcyhvbkZpZWxkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uRmllbGQpXHJcbiAgICB9LCBbb25GaWVsZF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRQbGF5ZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRPbkhhbmQocHJldiA9PiBwcmV2LmZpbHRlcihjYXJkID0+IGNhcmQuaWQgIT0gaW5kZXgpKVxyXG4gICAgICAgIC8vc2V0T25GaWVsZChwcmV2QXJyYXkgPT4gWy4uLnByZXZBcnJheSwgb25IYW5kLmZpbHRlcihjYXJkID0+IGNhcmQuaWQgPT0gaW5kZXggLSAxKVswXV0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29ydElEcyA9IChhcnJheSkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gYXJyYXlcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGNhcmRzPXtvbkZpZWxkfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxIYW5kIGNhcmRzPXtvbkhhbmR9IHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=