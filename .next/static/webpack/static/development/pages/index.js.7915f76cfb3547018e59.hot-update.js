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
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/card").then(function (res) {
      setCards(res.data.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(cards);
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(a) {
    console.log(a);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 25
      }
    }, __jsx(_Box__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      cardName: card.cardName,
      cardImage: card.cardImage,
      cardRarity: card.cardRarity,
      cardType: card.cardType,
      typeImage: card.typeImage,
      cardDesc: card.cardDesc,
      cardMonster: card.cardMonster,
      cardAtk: card.cardATK,
      cardDef: card.cardDEF,
      fn: handleCardPlayed,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJhIiwib3ZlcmZsb3ciLCJjbGVhciIsIm1hcCIsImNhcmQiLCJpbmRleCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwidHlwZUltYWdlIiwiY2FyZERlc2MiLCJjYXJkTW9uc3RlciIsImNhcmRBVEsiLCJjYXJkREVGIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msa0RBQUksU0FBQyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUE7O0FBQUEsa0JBRWZDLHNEQUFRLENBQUMsRUFBRCxDQUZPO0FBQUEsTUFFbENDLEtBRmtDO0FBQUEsTUFFM0JDLFFBRjJCOztBQUl6QyxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ25CQyxnREFBSyxDQUFDQyxHQUFOLGNBQXVCQyxJQUF2QixDQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDakNMLGNBQVEsQ0FBQ0ssR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBUjtBQUNILEtBRkQ7QUFHSCxHQUpEOztBQU1BQyx5REFBUyxDQUFDLFlBQU07QUFDWk4sWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQU0seURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ0gsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzVCSCxXQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tkLEtBQUssQ0FBQ2UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLFdBQ1A7QUFBSyxTQUFHLEVBQUVELElBQUksQ0FBQ0UsUUFBTCxHQUFnQkQsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdDQUFEO0FBQ0ksY0FBUSxFQUFFRCxJQUFJLENBQUNFLFFBRG5CO0FBRUksZUFBUyxFQUFFRixJQUFJLENBQUNHLFNBRnBCO0FBR0ksZ0JBQVUsRUFBRUgsSUFBSSxDQUFDSSxVQUhyQjtBQUlJLGNBQVEsRUFBRUosSUFBSSxDQUFDSyxRQUpuQjtBQUtJLGVBQVMsRUFBRUwsSUFBSSxDQUFDTSxTQUxwQjtBQU1JLGNBQVEsRUFBRU4sSUFBSSxDQUFDTyxRQU5uQjtBQU9JLGlCQUFXLEVBQUVQLElBQUksQ0FBQ1EsV0FQdEI7QUFRSSxhQUFPLEVBQUVSLElBQUksQ0FBQ1MsT0FSbEI7QUFTSSxhQUFPLEVBQUVULElBQUksQ0FBQ1UsT0FUbEI7QUFVSSxRQUFFLEVBQUVmLGdCQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKLENBRE87QUFBQSxHQUFWLENBREwsQ0FKSixDQURKO0FBMkJILENBakRzQixrQ0FBdkI7TUFBTWYsVTtBQW1EU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc5MTVmNzZjZmIzNTQ3MDE4ZTU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL0JveCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgL2FwaS9jYXJkYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIHNldENhcmRzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENhcmRzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjYXJkcyk7XHJcbiAgICB9LCBbY2FyZHNdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmQuY2FyZE5hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZC5jYXJkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmQuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmQuY2FyZFJhcml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZC5jYXJkVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e2NhcmQudHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZXNjPXtjYXJkLmNhcmREZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRNb25zdGVyPXtjYXJkLmNhcmRNb25zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmQuY2FyZEFUS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkLmNhcmRERUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm49e2hhbmRsZUNhcmRQbGF5ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=