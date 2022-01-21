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
    console.log(cards);
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(index) {
    //cards.splice(index, 1)
    var favorites = cards.filter(function (card) {
      return card.id != index - 1;
    });
    setCards(favorites);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__["Box"], {
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
        lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsImZhdm9yaXRlcyIsImZpbHRlciIsImNhcmQiLCJpZCIsIm92ZXJmbG93IiwiY2xlYXIiLCJtYXAiLCJjYXJkTmFtZSIsImNhcmRJbWFnZSIsImNhcmRSYXJpdHkiLCJjYXJkVHlwZSIsInR5cGVJbWFnZSIsImNhcmREZXNjIiwiY2FyZE1vbnN0ZXIiLCJjYXJkQVRLIiwiY2FyZERFRiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFJLFNBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUVmQyxzREFBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRWxDQyxLQUZrQztBQUFBLE1BRTNCQyxRQUYyQjs7QUFJekMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFJRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJDLGtEQUFLLENBQUNDLEdBQU4sY0FBdUJDLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ04sZ0JBQVEsQ0FBQ00sR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBUjtBQUNILE9BRkQ7QUFHSDtBQUNKLEdBTkQ7O0FBUUFDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxZQUFRO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQU07QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTVksZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDaEM7QUFDQSxRQUFJQyxTQUFTLEdBQUdkLEtBQUssQ0FBQ2UsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLEVBQUwsSUFBV0osS0FBSyxHQUFDLENBQXJCO0FBQUEsS0FBakIsQ0FBaEI7QUFDQVosWUFBUSxDQUFDYSxTQUFELENBQVI7QUFDSCxHQUpEOztBQU1BLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVJLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLbkIsS0FBSyxDQUFDb0IsR0FBTixDQUFVLFVBQUNKLElBQUQsRUFBT0gsS0FBUDtBQUFBLFdBQ1A7QUFBSyxTQUFHLEVBQUVHLElBQUksQ0FBQ0ssUUFBTCxHQUFnQlIsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdDQUFEO0FBQ0ksUUFBRSxFQUFFQSxLQURSO0FBRUksY0FBUSxFQUFFRyxJQUFJLENBQUNLLFFBRm5CO0FBR0ksZUFBUyxFQUFFTCxJQUFJLENBQUNNLFNBSHBCO0FBSUksZ0JBQVUsRUFBRU4sSUFBSSxDQUFDTyxVQUpyQjtBQUtJLGNBQVEsRUFBRVAsSUFBSSxDQUFDUSxRQUxuQjtBQU1JLGVBQVMsRUFBRVIsSUFBSSxDQUFDUyxTQU5wQjtBQU9JLGNBQVEsRUFBRVQsSUFBSSxDQUFDVSxRQVBuQjtBQVFJLGlCQUFXLEVBQUVWLElBQUksQ0FBQ1csV0FSdEI7QUFTSSxhQUFPLEVBQUVYLElBQUksQ0FBQ1ksT0FUbEI7QUFVSSxhQUFPLEVBQUVaLElBQUksQ0FBQ2EsT0FWbEI7QUFXSSxjQUFRLEVBQUVqQixnQkFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURPO0FBQUEsR0FBVixDQURMLENBSkosQ0FESjtBQTRCSCxDQXREc0Isa0NBQXZCO01BQU1oQixVO0FBd0RTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYTkwMDJlMTY3NzRkMzI2MTVhMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9Cb2FyZCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vQm94JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FyZHMpO1xyXG4gICAgfSwgW2NhcmRzXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZFBsYXllZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vY2FyZHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIHZhciBmYXZvcml0ZXMgPSBjYXJkcy5maWx0ZXIoY2FyZCA9PiBjYXJkLmlkICE9IGluZGV4LTEpXHJcbiAgICAgICAgc2V0Q2FyZHMoZmF2b3JpdGVzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmQuY2FyZE5hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkTW9uc3Rlcj17Y2FyZC5jYXJkTW9uc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckhhbmQiXSwic291cmNlUm9vdCI6IiJ9