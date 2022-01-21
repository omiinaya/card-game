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
    console.log('changed');
    console.log(cards);
    var myArray = cards;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(x) {
    setCards(function (prev) {
      return prev.filter(function (card) {
        return card.id != x - 1;
      });
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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
        lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIm15QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsImluZGV4IiwiaWQiLCJoYW5kbGVDYXJkUGxheWVkIiwieCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwib3ZlcmZsb3ciLCJjbGVhciIsIm1hcCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwidHlwZUltYWdlIiwiY2FyZERlc2MiLCJjYXJkTW9uc3RlciIsImNhcmRBVEsiLCJjYXJkREVGIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msa0RBQUksU0FBQyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWZDLHNEQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFbENDLEtBRmtDO0FBQUEsTUFFM0JDLFFBRjJCOztBQUl6QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CLFFBQUlGLEtBQUssQ0FBQ0csTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQkMsa0RBQUssQ0FBQ0MsR0FBTixjQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBRWpDTixnQkFBUSxDQUFDTSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFSO0FBQ0gsT0FIRDtBQUlIO0FBQ0osR0FQRDs7QUFTQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pQLFlBQVE7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFPLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0EsUUFBSVksT0FBTyxHQUFHWixLQUFkO0FBQ0FZLFdBQU8sQ0FBQ0MsT0FBUixDQUFnQixVQUFVQyxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUN0Q0QsYUFBTyxDQUFDRSxFQUFSLEdBQWFELEtBQWI7QUFDSCxLQUZEO0FBR0gsR0FQUSxFQU9OLENBQUNmLEtBQUQsQ0FQTSxDQUFUOztBQVNBLE1BQU1pQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM1QmpCLFlBQVEsQ0FBQyxVQUFBa0IsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUFDLElBQUksRUFBSTtBQUNqQyxlQUFPQSxJQUFJLENBQUNMLEVBQUwsSUFBV0UsQ0FBQyxHQUFDLENBQXBCO0FBQ0gsT0FGZ0IsQ0FBSjtBQUFBLEtBQUwsQ0FBUjtBQUdILEdBSkQ7O0FBTUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUksY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0t2QixLQUFLLENBQUN3QixHQUFOLENBQVUsVUFBQ0gsSUFBRCxFQUFPTixLQUFQO0FBQUEsV0FDUDtBQUFLLFNBQUcsRUFBRU0sSUFBSSxDQUFDSSxRQUFMLEdBQWdCVixLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsd0NBQUQ7QUFDSSxRQUFFLEVBQUVNLElBQUksQ0FBQ0wsRUFEYjtBQUVJLGNBQVEsRUFBRUssSUFBSSxDQUFDSSxRQUZuQjtBQUdJLGVBQVMsRUFBRUosSUFBSSxDQUFDSyxTQUhwQjtBQUlJLGdCQUFVLEVBQUVMLElBQUksQ0FBQ00sVUFKckI7QUFLSSxjQUFRLEVBQUVOLElBQUksQ0FBQ08sUUFMbkI7QUFNSSxlQUFTLEVBQUVQLElBQUksQ0FBQ1EsU0FOcEI7QUFPSSxjQUFRLEVBQUVSLElBQUksQ0FBQ1MsUUFQbkI7QUFRSSxpQkFBVyxFQUFFVCxJQUFJLENBQUNVLFdBUnRCO0FBU0ksYUFBTyxFQUFFVixJQUFJLENBQUNXLE9BVGxCO0FBVUksYUFBTyxFQUFFWCxJQUFJLENBQUNZLE9BVmxCO0FBV0ksY0FBUSxFQUFFaEIsZ0JBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosQ0FETztBQUFBLEdBQVYsQ0FETCxDQUpKLENBREo7QUE0QkgsQ0E1RHNCLGtDQUF2QjtNQUFNckIsVTtBQThEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmM0YWIyZTllMDFlNTFkMDhhNzg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL0JveCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuICAgICAgICB2YXIgbXlBcnJheSA9IGNhcmRzXHJcbiAgICAgICAgbXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbY2FyZHNdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKHgpID0+IHtcclxuICAgICAgICBzZXRDYXJkcyhwcmV2ID0+IHByZXYuZmlsdGVyKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FyZC5pZCAhPSB4LTFcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXJkLmNhcmROYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkTW9uc3Rlcj17Y2FyZC5jYXJkTW9uc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckhhbmQiXSwic291cmNlUm9vdCI6IiJ9