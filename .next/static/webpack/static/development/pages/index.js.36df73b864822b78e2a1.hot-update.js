webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/HandCard.jsx":
/*!**************************************!*\
  !*** ./components/game/HandCard.jsx ***!
  \**************************************/
/*! exports provided: HandCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandCard", function() { return HandCard; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
/* harmony import */ var _cardCard_CardCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cardCard/CardCard */ "./components/cardCard/CardCard.jsx");



var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\HandCard.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var style = {
  border: '1px dashed gray',
  cursor: 'move',
  zIndex: 10
};
var HandCard = function HandCard(_ref) {
  _s();

  var id = _ref.id,
      cardName = _ref.cardName,
      cardImage = _ref.cardImage,
      cardRarity = _ref.cardRarity,
      cardType = _ref.cardType,
      cardSubType = _ref.cardSubType,
      cardDesc = _ref.cardDesc,
      typeImage = _ref.typeImage,
      cardAtk = _ref.cardAtk,
      cardDef = _ref.cardDef,
      playCard = _ref.playCard;

  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"])(function () {
    return {
      type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].HANDCARD,
      item: {
        id: id,
        cardName: cardName
      },
      end: function end(item, monitor) {
        var dropResult = monitor.getDropResult();

        if (item && dropResult) {
          playCard(item.id);
          console.log("You dropped ".concat(item.cardName, " into ").concat(dropResult.name, "!"));
        }
      },
      collect: function collect(monitor) {
        return {
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId()
        };
      }
    };
  }),
      _useDrag2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useDrag, 2),
      isDragging = _useDrag2[0].isDragging,
      drag = _useDrag2[1];

  var opacity = isDragging ? 0.4 : 1;
  return __jsx("div", {
    ref: drag,
    role: "HandCard",
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: opacity
    }),
    "data-testid": "handcard-".concat(cardName),
    onClick: function onClick() {
      console.log(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_cardCard_CardCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    cardName: cardName,
    cardImage: cardImage,
    cardRarity: cardRarity,
    cardType: cardType,
    cardSubType: cardSubType,
    cardDesc: cardDesc,
    typeImage: typeImage,
    cardAtk: cardAtk,
    cardDef: cardDef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }));
};

_s(HandCard, "wuumsFp4qAni9XRJfRhQAZjuD/k=", false, function () {
  return [react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"]];
});

_c = HandCard;

var _c;

$RefreshReg$(_c, "HandCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvSGFuZENhcmQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiYm9yZGVyIiwiY3Vyc29yIiwiekluZGV4IiwiSGFuZENhcmQiLCJpZCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwiY2FyZFN1YlR5cGUiLCJjYXJkRGVzYyIsInR5cGVJbWFnZSIsImNhcmRBdGsiLCJjYXJkRGVmIiwicGxheUNhcmQiLCJ1c2VEcmFnIiwidHlwZSIsIkl0ZW1UeXBlcyIsIkhBTkRDQVJEIiwiaXRlbSIsImVuZCIsIm1vbml0b3IiLCJkcm9wUmVzdWx0IiwiZ2V0RHJvcFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiY29sbGVjdCIsImlzRHJhZ2dpbmciLCJoYW5kbGVySWQiLCJnZXRIYW5kbGVySWQiLCJkcmFnIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDVkMsUUFBTSxFQUFFLGlCQURFO0FBRVZDLFFBQU0sRUFBRSxNQUZFO0FBR1ZDLFFBQU0sRUFBRTtBQUhFLENBQWQ7QUFLTyxJQUFNQyxRQUFRLEdBQUcsU0FBU0EsUUFBVCxPQVlyQjtBQUFBOztBQUFBLE1BWENDLEVBV0QsUUFYQ0EsRUFXRDtBQUFBLE1BVkNDLFFBVUQsUUFWQ0EsUUFVRDtBQUFBLE1BVENDLFNBU0QsUUFUQ0EsU0FTRDtBQUFBLE1BUkNDLFVBUUQsUUFSQ0EsVUFRRDtBQUFBLE1BUENDLFFBT0QsUUFQQ0EsUUFPRDtBQUFBLE1BTkNDLFdBTUQsUUFOQ0EsV0FNRDtBQUFBLE1BTENDLFFBS0QsUUFMQ0EsUUFLRDtBQUFBLE1BSkNDLFNBSUQsUUFKQ0EsU0FJRDtBQUFBLE1BSENDLE9BR0QsUUFIQ0EsT0FHRDtBQUFBLE1BRkNDLE9BRUQsUUFGQ0EsT0FFRDtBQUFBLE1BRENDLFFBQ0QsUUFEQ0EsUUFDRDs7QUFBQSxpQkFDZ0NDLHlEQUFPLENBQUM7QUFBQSxXQUFPO0FBQzFDQyxVQUFJLEVBQUVDLG9EQUFTLENBQUNDLFFBRDBCO0FBRTFDQyxVQUFJLEVBQUU7QUFBRWYsVUFBRSxFQUFGQSxFQUFGO0FBQU1DLGdCQUFRLEVBQVJBO0FBQU4sT0FGb0M7QUFHMUNlLFNBQUcsRUFBRSxhQUFDRCxJQUFELEVBQU9FLE9BQVAsRUFBbUI7QUFDcEIsWUFBTUMsVUFBVSxHQUFHRCxPQUFPLENBQUNFLGFBQVIsRUFBbkI7O0FBQ0EsWUFBSUosSUFBSSxJQUFJRyxVQUFaLEVBQXdCO0FBQ3BCUixrQkFBUSxDQUFDSyxJQUFJLENBQUNmLEVBQU4sQ0FBUjtBQUNBb0IsaUJBQU8sQ0FBQ0MsR0FBUix1QkFBMkJOLElBQUksQ0FBQ2QsUUFBaEMsbUJBQWlEaUIsVUFBVSxDQUFDSSxJQUE1RDtBQUNIO0FBQ0osT0FUeUM7QUFVMUNDLGFBQU8sRUFBRSxpQkFBQ04sT0FBRDtBQUFBLGVBQWM7QUFDbkJPLG9CQUFVLEVBQUVQLE9BQU8sQ0FBQ08sVUFBUixFQURPO0FBRW5CQyxtQkFBUyxFQUFFUixPQUFPLENBQUNTLFlBQVI7QUFGUSxTQUFkO0FBQUE7QUFWaUMsS0FBUDtBQUFBLEdBQUQsQ0FEdkM7QUFBQTtBQUFBLE1BQ1VGLFVBRFYsZ0JBQ1VBLFVBRFY7QUFBQSxNQUN3QkcsSUFEeEI7O0FBZ0JDLE1BQU1DLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUgsR0FBUyxDQUFuQztBQUNBLFNBQ0k7QUFDSSxPQUFHLEVBQUVHLElBRFQ7QUFFSSxRQUFJLEVBQUMsVUFGVDtBQUdJLFNBQUssa0NBQU9oQyxLQUFQO0FBQWNpQyxhQUFPLEVBQVBBO0FBQWQsTUFIVDtBQUlJLHNDQUF5QjNCLFFBQXpCLENBSko7QUFLSSxXQUFPLEVBQUUsbUJBQU07QUFDWG1CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZckIsRUFBWjtBQUNILEtBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJLE1BQUMsMERBQUQ7QUFDSSxNQUFFLEVBQUVBLEVBRFI7QUFFSSxZQUFRLEVBQUVDLFFBRmQ7QUFHSSxhQUFTLEVBQUVDLFNBSGY7QUFJSSxjQUFVLEVBQUVDLFVBSmhCO0FBS0ksWUFBUSxFQUFFQyxRQUxkO0FBTUksZUFBVyxFQUFFQyxXQU5qQjtBQU9JLFlBQVEsRUFBRUMsUUFQZDtBQVFJLGFBQVMsRUFBRUMsU0FSZjtBQVNJLFdBQU8sRUFBRUMsT0FUYjtBQVVJLFdBQU8sRUFBRUMsT0FWYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQXVCSCxDQXBETTs7R0FBTVYsUTtVQWFzQlksaUQ7OztLQWJ0QlosUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzZkZjczYjg2NDgyMmI3OGUyYTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcbmltcG9ydCBDYXJkQ2FyZCBmcm9tICcuLi9jYXJkQ2FyZC9DYXJkQ2FyZCc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHpJbmRleDogMTBcclxufTtcclxuZXhwb3J0IGNvbnN0IEhhbmRDYXJkID0gZnVuY3Rpb24gSGFuZENhcmQoe1xyXG4gICAgaWQsXHJcbiAgICBjYXJkTmFtZSxcclxuICAgIGNhcmRJbWFnZSxcclxuICAgIGNhcmRSYXJpdHksXHJcbiAgICBjYXJkVHlwZSxcclxuICAgIGNhcmRTdWJUeXBlLFxyXG4gICAgY2FyZERlc2MsXHJcbiAgICB0eXBlSW1hZ2UsXHJcbiAgICBjYXJkQXRrLFxyXG4gICAgY2FyZERlZixcclxuICAgIHBsYXlDYXJkXHJcbn0pIHtcclxuICAgIGNvbnN0IFt7IGlzRHJhZ2dpbmcgfSwgZHJhZ10gPSB1c2VEcmFnKCgpID0+ICh7XHJcbiAgICAgICAgdHlwZTogSXRlbVR5cGVzLkhBTkRDQVJELFxyXG4gICAgICAgIGl0ZW06IHsgaWQsIGNhcmROYW1lIH0sXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlDYXJkKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGRyb3BwZWQgJHtpdGVtLmNhcmROYW1lfSBpbnRvICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgICAgcmVmPXtkcmFnfVxyXG4gICAgICAgICAgICByb2xlPVwiSGFuZENhcmRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyAuLi5zdHlsZSwgb3BhY2l0eSB9fVxyXG4gICAgICAgICAgICBkYXRhLXRlc3RpZD17YGhhbmRjYXJkLSR7Y2FyZE5hbWV9YH1cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8Q2FyZENhcmRcclxuICAgICAgICAgICAgICAgIGlkPXtpZH1cclxuICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkTmFtZX1cclxuICAgICAgICAgICAgICAgIGNhcmRJbWFnZT17Y2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgY2FyZFJhcml0eT17Y2FyZFJhcml0eX1cclxuICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkVHlwZX1cclxuICAgICAgICAgICAgICAgIGNhcmRTdWJUeXBlPXtjYXJkU3ViVHlwZX1cclxuICAgICAgICAgICAgICAgIGNhcmREZXNjPXtjYXJkRGVzY31cclxuICAgICAgICAgICAgICAgIHR5cGVJbWFnZT17dHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgY2FyZEF0az17Y2FyZEF0a31cclxuICAgICAgICAgICAgICAgIGNhcmREZWY9e2NhcmREZWZ9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9