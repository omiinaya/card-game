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
    console.log(index);
    myArray = cards.filter(function (obj) {
      return obj.id !== index;
    });
    setCards(myArray);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
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
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
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
        lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsIm15QXJyYXkiLCJmaWx0ZXIiLCJvYmoiLCJpZCIsIm92ZXJmbG93IiwiY2xlYXIiLCJtYXAiLCJjYXJkIiwiY2FyZE5hbWUiLCJjYXJkSW1hZ2UiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJ0eXBlSW1hZ2UiLCJjYXJkRGVzYyIsImNhcmRNb25zdGVyIiwiY2FyZEFUSyIsImNhcmRERUYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxrREFBSSxTQUFDLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFZkMsc0RBQVEsQ0FBQyxFQUFELENBRk87QUFBQSxNQUVsQ0MsS0FGa0M7QUFBQSxNQUUzQkMsUUFGMkI7O0FBSXpDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSUYsS0FBSyxDQUFDRyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCQyxrREFBSyxDQUFDQyxHQUFOLGNBQXVCQyxJQUF2QixDQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDakNOLGdCQUFRLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFWLENBQVI7QUFDSCxPQUZEO0FBR0g7QUFDSixHQU5EOztBQVFBQyx5REFBUyxDQUFDLFlBQU07QUFDWlAsWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQU8seURBQVMsQ0FBQyxZQUFNO0FBQ1pDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0gsR0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUOztBQUlBLE1BQU1ZLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZRSxLQUFaO0FBQ0FDLFdBQU8sR0FBR2QsS0FBSyxDQUFDZSxNQUFOLENBQWEsVUFBVUMsR0FBVixFQUFnQjtBQUNuQyxhQUFPQSxHQUFHLENBQUNDLEVBQUosS0FBV0osS0FBbEI7QUFDSCxLQUZTLENBQVY7QUFHQVosWUFBUSxDQUFDYSxPQUFELENBQVI7QUFDSCxHQVBEOztBQVNBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVJLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLbkIsS0FBSyxDQUFDb0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT1IsS0FBUDtBQUFBLFdBQ1A7QUFBSyxTQUFHLEVBQUVRLElBQUksQ0FBQ0MsUUFBTCxHQUFnQlQsS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdDQUFEO0FBQ0ksUUFBRSxFQUFFQSxLQURSO0FBRUksY0FBUSxFQUFFUSxJQUFJLENBQUNDLFFBRm5CO0FBR0ksZUFBUyxFQUFFRCxJQUFJLENBQUNFLFNBSHBCO0FBSUksZ0JBQVUsRUFBRUYsSUFBSSxDQUFDRyxVQUpyQjtBQUtJLGNBQVEsRUFBRUgsSUFBSSxDQUFDSSxRQUxuQjtBQU1JLGVBQVMsRUFBRUosSUFBSSxDQUFDSyxTQU5wQjtBQU9JLGNBQVEsRUFBRUwsSUFBSSxDQUFDTSxRQVBuQjtBQVFJLGlCQUFXLEVBQUVOLElBQUksQ0FBQ08sV0FSdEI7QUFTSSxhQUFPLEVBQUVQLElBQUksQ0FBQ1EsT0FUbEI7QUFVSSxhQUFPLEVBQUVSLElBQUksQ0FBQ1MsT0FWbEI7QUFXSSxjQUFRLEVBQUVsQixnQkFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURPO0FBQUEsR0FBVixDQURMLENBSkosQ0FESjtBQTRCSCxDQXpEc0Isa0NBQXZCO01BQU1oQixVO0FBMkRTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNzAyMGNiY2Y1ZGVkODc5NWNiMDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9Cb2FyZCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vQm94JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2FyZHMpO1xyXG4gICAgfSwgW2NhcmRzXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZFBsYXllZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vY2FyZHMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KVxyXG4gICAgICAgIG15QXJyYXkgPSBjYXJkcy5maWx0ZXIoZnVuY3Rpb24oIG9iaiApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5pZCAhPT0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0Q2FyZHMobXlBcnJheSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgICAgICAgICAgICB7Y2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXJkLmNhcmROYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZT17Y2FyZC5jYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFJhcml0eT17Y2FyZC5jYXJkUmFyaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkLmNhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVJbWFnZT17Y2FyZC50eXBlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlc2M9e2NhcmQuY2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE1vbnN0ZXI9e2NhcmQuY2FyZE1vbnN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEF0az17Y2FyZC5jYXJkQVRLfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZWY9e2NhcmQuY2FyZERFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJIYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==