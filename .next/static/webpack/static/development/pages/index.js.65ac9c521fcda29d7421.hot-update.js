webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/board/PlayerHand.jsx":
/*!*****************************************!*\
  !*** ./components/board/PlayerHand.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./components/board/Board.jsx");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ "./components/board/Box.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\board\\PlayerHand.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function Container() {
  var _this = this;

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
  }), __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 25
      }
    }, __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      id: card.id,
      cardName: card.cardName,
      cardImage: card.cardImage,
      cardRarity: card.cardRarity,
      cardType: card.cardType,
      typeImage: card.typeImage,
      cardDesc: card.cardDesc,
      cardMonster: card.cardMonster,
      cardAtk: card.cardATK,
      cardDef: card.cardDEF,
      playCard: handleCardPlayed,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 29
      }
    })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0Iiwic29ydENhcmRJZHMiLCJoYW5kbGVDYXJkUGxheWVkIiwieCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwiaWQiLCJteUFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJpbmRleCIsIm92ZXJmbG93IiwiY2xlYXIiLCJtYXAiLCJjYXJkTmFtZSIsImNhcmRJbWFnZSIsImNhcmRSYXJpdHkiLCJjYXJkVHlwZSIsInR5cGVJbWFnZSIsImNhcmREZXNjIiwiY2FyZE1vbnN0ZXIiLCJjYXJkQVRLIiwiY2FyZERFRiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFJLFNBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUVmQyxzREFBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRWxDQyxLQUZrQztBQUFBLE1BRTNCQyxRQUYyQjs7QUFJekMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQjtBQUNBLFFBQUlGLEtBQUssQ0FBQ0csTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQkMsa0RBQUssQ0FBQ0MsR0FBTixjQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDTixnQkFBUSxDQUFDTSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFSO0FBQ0gsT0FGRDtBQUdIO0FBQ0osR0FQRDs7QUFTQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pQLFlBQVE7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFPLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxlQUFXO0FBQ2QsR0FGUSxFQUVOLENBQUNWLEtBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCWCxZQUFRLENBQUMsVUFBQVksSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUFDLElBQUksRUFBSTtBQUNqQyxlQUFPQSxJQUFJLENBQUNDLEVBQUwsSUFBV0osQ0FBQyxHQUFHLENBQXRCO0FBQ0gsT0FGZ0IsQ0FBSjtBQUFBLEtBQUwsQ0FBUjtBQUdILEdBSkQ7O0FBTUEsTUFBTUYsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJTyxPQUFPLEdBQUdqQixLQUFkO0FBQ0FpQixXQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBVUMsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdENELGFBQU8sQ0FBQ0gsRUFBUixHQUFhSSxLQUFiO0FBQ0gsS0FGRDtBQUdILEdBTEQ7O0FBT0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFLSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3RCLEtBQUssQ0FBQ3VCLEdBQU4sQ0FBVSxVQUFDUixJQUFELEVBQU9LLEtBQVA7QUFBQSxXQUNQO0FBQUssU0FBRyxFQUFFTCxJQUFJLENBQUNTLFFBQUwsR0FBZ0JKLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3Q0FBRDtBQUNJLFFBQUUsRUFBRUwsSUFBSSxDQUFDQyxFQURiO0FBRUksY0FBUSxFQUFFRCxJQUFJLENBQUNTLFFBRm5CO0FBR0ksZUFBUyxFQUFFVCxJQUFJLENBQUNVLFNBSHBCO0FBSUksZ0JBQVUsRUFBRVYsSUFBSSxDQUFDVyxVQUpyQjtBQUtJLGNBQVEsRUFBRVgsSUFBSSxDQUFDWSxRQUxuQjtBQU1JLGVBQVMsRUFBRVosSUFBSSxDQUFDYSxTQU5wQjtBQU9JLGNBQVEsRUFBRWIsSUFBSSxDQUFDYyxRQVBuQjtBQVFJLGlCQUFXLEVBQUVkLElBQUksQ0FBQ2UsV0FSdEI7QUFTSSxhQUFPLEVBQUVmLElBQUksQ0FBQ2dCLE9BVGxCO0FBVUksYUFBTyxFQUFFaEIsSUFBSSxDQUFDaUIsT0FWbEI7QUFXSSxjQUFRLEVBQUVyQixnQkFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURPO0FBQUEsR0FBVixDQURMLENBTEosQ0FESjtBQTZCSCxDQS9Ec0Isa0NBQXZCO01BQU1mLFU7QUFpRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42NWFjOWM1MjFmY2RhMjlkNzQyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQm9hcmQgfSBmcm9tICcuL0JvYXJkJztcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi9Cb3gnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBsYXllckhhbmQgPSBtZW1vKGZ1bmN0aW9uIENvbnRhaW5lcigpIHtcclxuXHJcbiAgICBjb25zdCBbY2FyZHMsIHNldENhcmRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICBjb25zdCBnZXRDYXJkcyA9ICgpID0+IHtcclxuICAgICAgICAvL2lmIGNhcmRzIGhhdmUgbm90IGxvYWRlZCB5ZXQgdGhlbiBsb2FkIHRoZW0gZnJvbSBzZXJ2ZXIuXHJcbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ydENhcmRJZHMoKTtcclxuICAgIH0sIFtjYXJkc10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRQbGF5ZWQgPSAoeCkgPT4ge1xyXG4gICAgICAgIHNldENhcmRzKHByZXYgPT4gcHJldi5maWx0ZXIoY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXJkLmlkICE9IHggLSAxXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29ydENhcmRJZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG15QXJyYXkgPSBjYXJkc1xyXG4gICAgICAgIG15QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0ZWQtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYXJkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZT17Y2FyZC5jYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFJhcml0eT17Y2FyZC5jYXJkUmFyaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkLmNhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVJbWFnZT17Y2FyZC50eXBlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlc2M9e2NhcmQuY2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE1vbnN0ZXI9e2NhcmQuY2FyZE1vbnN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEF0az17Y2FyZC5jYXJkQVRLfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZWY9e2NhcmQuY2FyZERFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJIYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==