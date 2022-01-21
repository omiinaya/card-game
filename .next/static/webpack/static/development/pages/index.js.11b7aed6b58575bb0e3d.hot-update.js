webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Field.jsx":
/*!***********************************!*\
  !*** ./components/game/Field.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./components/game/Board.jsx");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hand */ "./components/game/Hand.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function Container() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      cards = _useState[0],
      setCards = _useState[1];

  var getCards = function getCards() {
    //if cards have not loaded yet then load them from server.
    if (cards.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/card").then(function (res) {
        setCards(res.data.data);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    sortCardIds();
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(x) {
    setCards(function (prev) {
      return prev.filter(function (card) {
        return card.id != x - 1;
      });
    });
  };

  var sortCardIds = function sortCardIds() {
    var myArray = cards;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_2__["Hand"], {
    data: cards,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })));
}, "lhdlCRwuReWhjum40cc5gVJGCpI="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0Iiwic29ydENhcmRJZHMiLCJoYW5kbGVDYXJkUGxheWVkIiwieCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwiaWQiLCJteUFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsIm92ZXJmbG93IiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxrREFBSSxTQUFDLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFFZkMsc0RBQVEsQ0FBQyxFQUFELENBRk87QUFBQSxNQUVsQ0MsS0FGa0M7QUFBQSxNQUUzQkMsUUFGMkI7O0FBSXpDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkI7QUFDQSxRQUFJRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJDLGtEQUFLLENBQUNDLEdBQU4sY0FBdUJDLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ04sZ0JBQVEsQ0FBQ00sR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBUjtBQUNILE9BRkQ7QUFHSDtBQUNKLEdBUEQ7O0FBU0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxZQUFRO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZUFBVztBQUNkLEdBRlEsRUFFTixDQUFDVixLQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM1QlgsWUFBUSxDQUFDLFVBQUFZLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFBQyxJQUFJLEVBQUk7QUFDakMsZUFBT0EsSUFBSSxDQUFDQyxFQUFMLElBQVdKLENBQUMsR0FBRyxDQUF0QjtBQUNILE9BRmdCLENBQUo7QUFBQSxLQUFMLENBQVI7QUFHSCxHQUpEOztBQU1BLE1BQU1GLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSU8sT0FBTyxHQUFHakIsS0FBZDtBQUNBaUIsV0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQVVDLE9BQVYsRUFBbUJDLEtBQW5CLEVBQTBCO0FBQ3RDRCxhQUFPLENBQUNILEVBQVIsR0FBYUksS0FBYjtBQUNILEtBRkQ7QUFHSCxHQUxEOztBQU9BLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVDLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssU0FBSyxFQUFFO0FBQUVELGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwQ0FBRDtBQUFNLFFBQUksRUFBRXRCLEtBQVo7QUFBbUIsWUFBUSxFQUFFVyxnQkFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESjtBQVVILENBNUNzQixrQ0FBdkI7TUFBTWYsVTtBQThDU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjExYjdhZWQ2YjU4NTc1YmIwZTNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQgeyBIYW5kIH0gZnJvbSAnLi9IYW5kJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9pZiBjYXJkcyBoYXZlIG5vdCBsb2FkZWQgeWV0IHRoZW4gbG9hZCB0aGVtIGZyb20gc2VydmVyLlxyXG4gICAgICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENhcmRzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2FyZHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvcnRDYXJkSWRzKCk7XHJcbiAgICB9LCBbY2FyZHNdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKHgpID0+IHtcclxuICAgICAgICBzZXRDYXJkcyhwcmV2ID0+IHByZXYuZmlsdGVyKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FyZC5pZCAhPSB4IC0gMVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvcnRDYXJkSWRzID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gY2FyZHNcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxIYW5kIGRhdGE9e2NhcmRzfSBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=