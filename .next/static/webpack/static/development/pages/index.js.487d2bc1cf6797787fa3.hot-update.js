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
        var myArray = res.data.data;
        myArray.forEach(function (element, index) {
          element.id = index;
        });
        setCards(myArray);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    cards.forEach(function (element, index) {
      element.id = index;
    });
    console.log(cards);
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setCards(function (prev) {
      return prev.splce(index, 1);
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
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
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL1BsYXllckhhbmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJteUFycmF5IiwiZGF0YSIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJpZCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXJkUGxheWVkIiwicHJldiIsInNwbGNlIiwib3ZlcmZsb3ciLCJjbGVhciIsIm1hcCIsImNhcmQiLCJjYXJkTmFtZSIsImNhcmRJbWFnZSIsImNhcmRSYXJpdHkiLCJjYXJkVHlwZSIsInR5cGVJbWFnZSIsImNhcmREZXNjIiwiY2FyZE1vbnN0ZXIiLCJjYXJkQVRLIiwiY2FyZERFRiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFJLFNBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBOztBQUFBLGtCQUVmQyxzREFBUSxDQUFDLEVBQUQsQ0FGTztBQUFBLE1BRWxDQyxLQUZrQztBQUFBLE1BRTNCQyxRQUYyQjs7QUFJekMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQixRQUFJRixLQUFLLENBQUNHLE1BQU4sS0FBaUIsQ0FBckIsRUFBd0I7QUFDcEJDLGtEQUFLLENBQUNDLEdBQU4sY0FBdUJDLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQyxZQUFJQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTQSxJQUF2QjtBQUNBRCxlQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBVUMsT0FBVixFQUFtQkMsS0FBbkIsRUFBMEI7QUFDdENELGlCQUFPLENBQUNFLEVBQVIsR0FBYUQsS0FBYjtBQUNILFNBRkQ7QUFHQVgsZ0JBQVEsQ0FBQ08sT0FBRCxDQUFSO0FBQ0gsT0FORDtBQU9IO0FBQ0osR0FWRDs7QUFZQU0seURBQVMsQ0FBQyxZQUFNO0FBQ1paLFlBQVE7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFZLHlEQUFTLENBQUMsWUFBTTtBQUNaZCxTQUFLLENBQUNVLE9BQU4sQ0FBYyxVQUFVQyxPQUFWLEVBQW1CQyxLQUFuQixFQUEwQjtBQUNwQ0QsYUFBTyxDQUFDRSxFQUFSLEdBQWFELEtBQWI7QUFDSCxLQUZEO0FBR0FHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsS0FBWjtBQUNILEdBTFEsRUFLTixDQUFDQSxLQUFELENBTE0sQ0FBVDs7QUFPQSxNQUFNaUIsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxLQUFELEVBQVc7QUFDaENYLFlBQVEsQ0FBQyxVQUFBaUIsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsS0FBTCxDQUFXUCxLQUFYLEVBQWtCLENBQWxCLENBQUo7QUFBQSxLQUFMLENBQVI7QUFDSCxHQUZEOztBQUlBLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVRLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLckIsS0FBSyxDQUFDc0IsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT1gsS0FBUDtBQUFBLFdBQ1A7QUFBSyxTQUFHLEVBQUVXLElBQUksQ0FBQ0MsUUFBTCxHQUFnQlosS0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLHdDQUFEO0FBQ0ksUUFBRSxFQUFFVyxJQUFJLENBQUNWLEVBRGI7QUFFSSxjQUFRLEVBQUVVLElBQUksQ0FBQ0MsUUFGbkI7QUFHSSxlQUFTLEVBQUVELElBQUksQ0FBQ0UsU0FIcEI7QUFJSSxnQkFBVSxFQUFFRixJQUFJLENBQUNHLFVBSnJCO0FBS0ksY0FBUSxFQUFFSCxJQUFJLENBQUNJLFFBTG5CO0FBTUksZUFBUyxFQUFFSixJQUFJLENBQUNLLFNBTnBCO0FBT0ksY0FBUSxFQUFFTCxJQUFJLENBQUNNLFFBUG5CO0FBUUksaUJBQVcsRUFBRU4sSUFBSSxDQUFDTyxXQVJ0QjtBQVNJLGFBQU8sRUFBRVAsSUFBSSxDQUFDUSxPQVRsQjtBQVVJLGFBQU8sRUFBRVIsSUFBSSxDQUFDUyxPQVZsQjtBQVdJLGNBQVEsRUFBRWYsZ0JBWGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREosQ0FETztBQUFBLEdBQVYsQ0FETCxDQUpKLENBREo7QUE0QkgsQ0EzRHNCLGtDQUF2QjtNQUFNckIsVTtBQTZEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjQ4N2QyYmMxY2Y2Nzk3Nzg3ZmEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vQm9hcmQnO1xyXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuL0JveCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBteUFycmF5ID0gcmVzLmRhdGEuZGF0YVxyXG4gICAgICAgICAgICAgICAgbXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2FyZHMobXlBcnJheSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY2FyZHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNhcmRzKTtcclxuICAgIH0sIFtjYXJkc10pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRQbGF5ZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRDYXJkcyhwcmV2ID0+IHByZXYuc3BsY2UoaW5kZXgsIDEpKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuICAgICAgICAgICAgICAgIHtjYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmQuY2FyZE5hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FyZC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZC5jYXJkTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmQuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmQuY2FyZFJhcml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZC5jYXJkVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e2NhcmQudHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZXNjPXtjYXJkLmNhcmREZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRNb25zdGVyPXtjYXJkLmNhcmRNb25zdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmQuY2FyZEFUS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkLmNhcmRERUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheUNhcmQ9e2hhbmRsZUNhcmRQbGF5ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=