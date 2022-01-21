webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/board/PlayerHand.jsx":
/*!*****************************************!*\
  !*** ./components/board/PlayerHand.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Board */ "./components/board/Board.jsx");
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Box */ "./components/board/Box.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\board\\PlayerHand.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function Container() {
  var _this = this;

  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      cards = _useState[0],
      setCards = _useState[1];

  var getCards = function getCards() {
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/card").then(function (res) {
      setCards(res.data.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(cards);
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(index) {
    //cards.splice(index, 1)
    var newHand = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(cards);

    newHand.splice(index, 1);
    setCards(newHand);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
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
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_2__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 25
      }
    }, __jsx(_Box__WEBPACK_IMPORTED_MODULE_3__["Box"], {
      id: index,
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
        lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsIm5ld0hhbmQiLCJzcGxpY2UiLCJvdmVyZmxvdyIsImNsZWFyIiwibWFwIiwiY2FyZCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwidHlwZUltYWdlIiwiY2FyZERlc2MiLCJjYXJkTW9uc3RlciIsImNhcmRBVEsiLCJjYXJkREVGIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msa0RBQUksU0FBQyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWZDLHNEQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFbENDLEtBRmtDO0FBQUEsTUFFM0JDLFFBRjJCOztBQUl6QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CQyxnREFBSyxDQUFDQyxHQUFOLGNBQXVCQyxJQUF2QixDQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDakNMLGNBQVEsQ0FBQ0ssR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBUjtBQUNILEtBRkQ7QUFHSCxHQUpEOztBQU1BQyx5REFBUyxDQUFDLFlBQU07QUFDWk4sWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQU0seURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ0gsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLDZGQUFJYixLQUFQLENBQVg7O0FBQ0FhLFdBQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLEVBQXNCLENBQXRCO0FBQ0FYLFlBQVEsQ0FBQ1ksT0FBRCxDQUFSO0FBQ0gsR0FMRDs7QUFPQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFRSxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS2hCLEtBQUssQ0FBQ2lCLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9OLEtBQVA7QUFBQSxXQUNQO0FBQUssU0FBRyxFQUFFTSxJQUFJLENBQUNDLFFBQUwsR0FBZ0JQLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3Q0FBRDtBQUNJLFFBQUUsRUFBRUEsS0FEUjtBQUVJLGNBQVEsRUFBRU0sSUFBSSxDQUFDQyxRQUZuQjtBQUdJLGVBQVMsRUFBRUQsSUFBSSxDQUFDRSxTQUhwQjtBQUlJLGdCQUFVLEVBQUVGLElBQUksQ0FBQ0csVUFKckI7QUFLSSxjQUFRLEVBQUVILElBQUksQ0FBQ0ksUUFMbkI7QUFNSSxlQUFTLEVBQUVKLElBQUksQ0FBQ0ssU0FOcEI7QUFPSSxjQUFRLEVBQUVMLElBQUksQ0FBQ00sUUFQbkI7QUFRSSxpQkFBVyxFQUFFTixJQUFJLENBQUNPLFdBUnRCO0FBU0ksYUFBTyxFQUFFUCxJQUFJLENBQUNRLE9BVGxCO0FBVUksYUFBTyxFQUFFUixJQUFJLENBQUNTLE9BVmxCO0FBV0ksY0FBUSxFQUFFaEIsZ0JBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosQ0FETztBQUFBLEdBQVYsQ0FETCxDQUpKLENBREo7QUE0QkgsQ0FyRHNCLGtDQUF2QjtNQUFNZixVO0FBdURTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYWI4Mzc1MTI3MjBlZTNjYTYwODYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9Cb2FyZCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vQm94JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgc2V0Q2FyZHMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2FyZHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuICAgIH0sIFtjYXJkc10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRQbGF5ZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICAvL2NhcmRzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB2YXIgbmV3SGFuZCA9IFsuLi5jYXJkc11cclxuICAgICAgICBuZXdIYW5kLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBzZXRDYXJkcyhuZXdIYW5kKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmQuY2FyZE5hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkTW9uc3Rlcj17Y2FyZC5jYXJkTW9uc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckhhbmQiXSwic291cmNlUm9vdCI6IiJ9