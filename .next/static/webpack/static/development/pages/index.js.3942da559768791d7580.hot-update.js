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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {//console.log(cards);
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(x) {
    //cards.splice(index, 1)
    console.log("id: " + x);
    var favorites = cards.filter(function (card) {
      return card.id != x;
    });
    console.log(favorites); //setCards(favorites)
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
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
        lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2FyZFBsYXllZCIsIngiLCJjb25zb2xlIiwibG9nIiwiZmF2b3JpdGVzIiwiZmlsdGVyIiwiY2FyZCIsImlkIiwib3ZlcmZsb3ciLCJjbGVhciIsIm1hcCIsImluZGV4IiwiY2FyZE5hbWUiLCJjYXJkSW1hZ2UiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJ0eXBlSW1hZ2UiLCJjYXJkRGVzYyIsImNhcmRNb25zdGVyIiwiY2FyZEFUSyIsImNhcmRERUYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxrREFBSSxTQUFDLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFFZkMsc0RBQVEsQ0FBQyxFQUFELENBRk87QUFBQSxNQUVsQ0MsS0FGa0M7QUFBQSxNQUUzQkMsUUFGMkI7O0FBSXpDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkIsUUFBSUYsS0FBSyxDQUFDRyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCQyxrREFBSyxDQUFDQyxHQUFOLGNBQXVCQyxJQUF2QixDQUE0QixVQUFDQyxHQUFELEVBQVM7QUFDakNOLGdCQUFRLENBQUNNLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFWLENBQVI7QUFDSCxPQUZEO0FBR0g7QUFDSixHQU5EOztBQVFBQyx5REFBUyxDQUFDLFlBQU07QUFDWlAsWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQU8seURBQVMsQ0FBQyxZQUFNLENBQ1o7QUFDSCxHQUZRLEVBRU4sQ0FBQ1QsS0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTVUsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVksU0FBT0YsQ0FBbkI7QUFDQSxRQUFJRyxTQUFTLEdBQUdkLEtBQUssQ0FBQ2UsTUFBTixDQUFhLFVBQUNDLElBQUQ7QUFBQSxhQUFVQSxJQUFJLENBQUNDLEVBQUwsSUFBV04sQ0FBckI7QUFBQSxLQUFiLENBQWhCO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxTQUFaLEVBSjRCLENBSzVCO0FBQ0gsR0FORDs7QUFRQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFSSxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS25CLEtBQUssQ0FBQ29CLEdBQU4sQ0FBVSxVQUFDSixJQUFELEVBQU9LLEtBQVA7QUFBQSxXQUNQO0FBQUssU0FBRyxFQUFFTCxJQUFJLENBQUNNLFFBQUwsR0FBZ0JELEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx3Q0FBRDtBQUNJLFFBQUUsRUFBRUEsS0FEUjtBQUVJLGNBQVEsRUFBRUwsSUFBSSxDQUFDTSxRQUZuQjtBQUdJLGVBQVMsRUFBRU4sSUFBSSxDQUFDTyxTQUhwQjtBQUlJLGdCQUFVLEVBQUVQLElBQUksQ0FBQ1EsVUFKckI7QUFLSSxjQUFRLEVBQUVSLElBQUksQ0FBQ1MsUUFMbkI7QUFNSSxlQUFTLEVBQUVULElBQUksQ0FBQ1UsU0FOcEI7QUFPSSxjQUFRLEVBQUVWLElBQUksQ0FBQ1csUUFQbkI7QUFRSSxpQkFBVyxFQUFFWCxJQUFJLENBQUNZLFdBUnRCO0FBU0ksYUFBTyxFQUFFWixJQUFJLENBQUNhLE9BVGxCO0FBVUksYUFBTyxFQUFFYixJQUFJLENBQUNjLE9BVmxCO0FBV0ksY0FBUSxFQUFFcEIsZ0JBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosQ0FETztBQUFBLEdBQVYsQ0FETCxDQUpKLENBREo7QUE0QkgsQ0F4RHNCLGtDQUF2QjtNQUFNZCxVO0FBMERTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzk0MmRhNTU5NzY4NzkxZDc1ODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9Cb2FyZCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vQm94JztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjYXJkcyk7XHJcbiAgICB9LCBbY2FyZHNdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKHgpID0+IHtcclxuICAgICAgICAvL2NhcmRzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcImlkOiBcIit4KVxyXG4gICAgICAgIHZhciBmYXZvcml0ZXMgPSBjYXJkcy5maWx0ZXIoKGNhcmQpID0+IGNhcmQuaWQgIT0geClcclxuICAgICAgICBjb25zb2xlLmxvZyhmYXZvcml0ZXMpXHJcbiAgICAgICAgLy9zZXRDYXJkcyhmYXZvcml0ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0ZWQtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZC5jYXJkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmQuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmQuY2FyZFJhcml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZC5jYXJkVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e2NhcmQudHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZXNjPXtjYXJkLmNhcmREZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRNb25zdGVyPXtjYXJkLmNhcmRNb25zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmQuY2FyZEFUS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkLmNhcmRERUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheUNhcmQ9e2hhbmRsZUNhcmRQbGF5ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=