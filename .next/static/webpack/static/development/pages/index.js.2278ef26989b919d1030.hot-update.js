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
  width: '160px',
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
      lineNumber: 41,
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
      lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvSGFuZENhcmQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiYm9yZGVyIiwiY3Vyc29yIiwid2lkdGgiLCJ6SW5kZXgiLCJIYW5kQ2FyZCIsImlkIiwiY2FyZE5hbWUiLCJjYXJkSW1hZ2UiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJjYXJkU3ViVHlwZSIsImNhcmREZXNjIiwidHlwZUltYWdlIiwiY2FyZEF0ayIsImNhcmREZWYiLCJwbGF5Q2FyZCIsInVzZURyYWciLCJ0eXBlIiwiSXRlbVR5cGVzIiwiSEFORENBUkQiLCJpdGVtIiwiZW5kIiwibW9uaXRvciIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjb2xsZWN0IiwiaXNEcmFnZ2luZyIsImhhbmRsZXJJZCIsImdldEhhbmRsZXJJZCIsImRyYWciLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNWQyxRQUFNLEVBQUUsaUJBREU7QUFFVkMsUUFBTSxFQUFFLE1BRkU7QUFHVkMsT0FBSyxFQUFFLE9BSEc7QUFJVkMsUUFBTSxFQUFFO0FBSkUsQ0FBZDtBQU1PLElBQU1DLFFBQVEsR0FBRyxTQUFTQSxRQUFULE9BWXJCO0FBQUE7O0FBQUEsTUFYQ0MsRUFXRCxRQVhDQSxFQVdEO0FBQUEsTUFWQ0MsUUFVRCxRQVZDQSxRQVVEO0FBQUEsTUFUQ0MsU0FTRCxRQVRDQSxTQVNEO0FBQUEsTUFSQ0MsVUFRRCxRQVJDQSxVQVFEO0FBQUEsTUFQQ0MsUUFPRCxRQVBDQSxRQU9EO0FBQUEsTUFOQ0MsV0FNRCxRQU5DQSxXQU1EO0FBQUEsTUFMQ0MsUUFLRCxRQUxDQSxRQUtEO0FBQUEsTUFKQ0MsU0FJRCxRQUpDQSxTQUlEO0FBQUEsTUFIQ0MsT0FHRCxRQUhDQSxPQUdEO0FBQUEsTUFGQ0MsT0FFRCxRQUZDQSxPQUVEO0FBQUEsTUFEQ0MsUUFDRCxRQURDQSxRQUNEOztBQUFBLGlCQUNnQ0MseURBQU8sQ0FBQztBQUFBLFdBQU87QUFDMUNDLFVBQUksRUFBRUMsb0RBQVMsQ0FBQ0MsUUFEMEI7QUFFMUNDLFVBQUksRUFBRTtBQUFFZixVQUFFLEVBQUZBLEVBQUY7QUFBTUMsZ0JBQVEsRUFBUkE7QUFBTixPQUZvQztBQUcxQ2UsU0FBRyxFQUFFLGFBQUNELElBQUQsRUFBT0UsT0FBUCxFQUFtQjtBQUNwQixZQUFNQyxVQUFVLEdBQUdELE9BQU8sQ0FBQ0UsYUFBUixFQUFuQjs7QUFDQSxZQUFJSixJQUFJLElBQUlHLFVBQVosRUFBd0I7QUFDcEJSLGtCQUFRLENBQUNLLElBQUksQ0FBQ2YsRUFBTixDQUFSO0FBQ0FvQixpQkFBTyxDQUFDQyxHQUFSLHVCQUEyQk4sSUFBSSxDQUFDZCxRQUFoQyxtQkFBaURpQixVQUFVLENBQUNJLElBQTVEO0FBQ0g7QUFDSixPQVR5QztBQVUxQ0MsYUFBTyxFQUFFLGlCQUFDTixPQUFEO0FBQUEsZUFBYztBQUNuQk8sb0JBQVUsRUFBRVAsT0FBTyxDQUFDTyxVQUFSLEVBRE87QUFFbkJDLG1CQUFTLEVBQUVSLE9BQU8sQ0FBQ1MsWUFBUjtBQUZRLFNBQWQ7QUFBQTtBQVZpQyxLQUFQO0FBQUEsR0FBRCxDQUR2QztBQUFBO0FBQUEsTUFDVUYsVUFEVixnQkFDVUEsVUFEVjtBQUFBLE1BQ3dCRyxJQUR4Qjs7QUFnQkMsTUFBTUMsT0FBTyxHQUFHSixVQUFVLEdBQUcsR0FBSCxHQUFTLENBQW5DO0FBQ0EsU0FDSTtBQUNJLE9BQUcsRUFBRUcsSUFEVDtBQUVJLFFBQUksRUFBQyxVQUZUO0FBR0ksU0FBSyxrQ0FBT2pDLEtBQVA7QUFBY2tDLGFBQU8sRUFBUEE7QUFBZCxNQUhUO0FBSUksc0NBQXlCM0IsUUFBekIsQ0FKSjtBQUtJLFdBQU8sRUFBRSxtQkFBTTtBQUNYbUIsYUFBTyxDQUFDQyxHQUFSLENBQVlyQixFQUFaO0FBQ0gsS0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUksTUFBQywwREFBRDtBQUNJLE1BQUUsRUFBRUEsRUFEUjtBQUVJLFlBQVEsRUFBRUMsUUFGZDtBQUdJLGFBQVMsRUFBRUMsU0FIZjtBQUlJLGNBQVUsRUFBRUMsVUFKaEI7QUFLSSxZQUFRLEVBQUVDLFFBTGQ7QUFNSSxlQUFXLEVBQUVDLFdBTmpCO0FBT0ksWUFBUSxFQUFFQyxRQVBkO0FBUUksYUFBUyxFQUFFQyxTQVJmO0FBU0ksV0FBTyxFQUFFQyxPQVRiO0FBVUksV0FBTyxFQUFFQyxPQVZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixDQURKO0FBdUJILENBcERNOztHQUFNVixRO1VBYXNCWSxpRDs7O0tBYnRCWixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yMjc4ZWYyNjk4OWI5MTlkMTAzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlcyB9IGZyb20gJy4vSXRlbVR5cGVzJztcclxuaW1wb3J0IENhcmRDYXJkIGZyb20gJy4uL2NhcmRDYXJkL0NhcmRDYXJkJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCBncmF5JyxcclxuICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgd2lkdGg6ICcxNjBweCcsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmV4cG9ydCBjb25zdCBIYW5kQ2FyZCA9IGZ1bmN0aW9uIEhhbmRDYXJkKHtcclxuICAgIGlkLFxyXG4gICAgY2FyZE5hbWUsXHJcbiAgICBjYXJkSW1hZ2UsXHJcbiAgICBjYXJkUmFyaXR5LFxyXG4gICAgY2FyZFR5cGUsXHJcbiAgICBjYXJkU3ViVHlwZSxcclxuICAgIGNhcmREZXNjLFxyXG4gICAgdHlwZUltYWdlLFxyXG4gICAgY2FyZEF0ayxcclxuICAgIGNhcmREZWYsXHJcbiAgICBwbGF5Q2FyZFxyXG59KSB7XHJcbiAgICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IEl0ZW1UeXBlcy5IQU5EQ0FSRCxcclxuICAgICAgICBpdGVtOiB7IGlkLCBjYXJkTmFtZSB9LFxyXG4gICAgICAgIGVuZDogKGl0ZW0sIG1vbml0b3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcFJlc3VsdCA9IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBkcm9wUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Q2FyZChpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBkcm9wcGVkICR7aXRlbS5jYXJkTmFtZX0gaW50byAke2Ryb3BSZXN1bHQubmFtZX0hYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcclxuICAgICAgICAgICAgaGFuZGxlcklkOiBtb25pdG9yLmdldEhhbmRsZXJJZCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IGlzRHJhZ2dpbmcgPyAwLjQgOiAxO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHJlZj17ZHJhZ31cclxuICAgICAgICAgICAgcm9sZT1cIkhhbmRDYXJkXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX1cclxuICAgICAgICAgICAgZGF0YS10ZXN0aWQ9e2BoYW5kY2FyZC0ke2NhcmROYW1lfWB9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPENhcmRDYXJkXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e3R5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmRBdGt9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkRGVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==