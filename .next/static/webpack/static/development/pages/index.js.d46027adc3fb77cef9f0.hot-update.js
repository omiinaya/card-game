webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Card.jsx":
/*!**********************************!*\
  !*** ./components/game/Card.jsx ***!
  \**********************************/
/*! exports provided: Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");



var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Card.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var style = {
  border: '1px dashed gray',
  cursor: 'move',
  zIndex: 10
};
var Box = function Box(_ref) {
  _s();

  var id = _ref.id,
      cardName = _ref.cardName,
      cardImage = _ref.cardImage,
      cardRarity = _ref.cardRarity,
      cardType = _ref.cardType,
      cardMonster = _ref.cardMonster,
      cardDesc = _ref.cardDesc,
      typeImage = _ref.typeImage,
      cardAtk = _ref.cardAtk,
      cardDef = _ref.cardDef,
      playCard = _ref.playCard;

  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"])(function () {
    return {
      type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].CARD,
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
    role: "Card",
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: opacity
    }),
    "data-testid": "card-".concat(cardName),
    onClick: function onClick() {
      console.log(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("div", {
    id: "cardContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("img", {
    id: "cardTemplate",
    src: "https://i.ibb.co/mG6jvpR/monster-normal.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("img", {
    id: "cardFace",
    src: cardImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("img", {
    id: "starLevel",
    src: "https://i.ibb.co/M1bYC6V/star.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx("div", {
    id: "cardTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, cardName), __jsx("img", {
    id: "cardType",
    src: typeImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), __jsx("h4", {
    id: "monsterType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "[", cardMonster, "]"), __jsx("div", {
    id: "monsterDescription",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, cardDesc), __jsx("div", {
    id: "monsterAtk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, cardAtk), __jsx("div", {
    id: "monsterDef",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, cardDef))));
};

_s(Box, "wuumsFp4qAni9XRJfRhQAZjuD/k=", false, function () {
  return [react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"]];
});

_c = Box;

var _c;

$RefreshReg$(_c, "Box");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQ2FyZC5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ6SW5kZXgiLCJCb3giLCJpZCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwiY2FyZE1vbnN0ZXIiLCJjYXJkRGVzYyIsInR5cGVJbWFnZSIsImNhcmRBdGsiLCJjYXJkRGVmIiwicGxheUNhcmQiLCJ1c2VEcmFnIiwidHlwZSIsIkl0ZW1UeXBlcyIsIkNBUkQiLCJpdGVtIiwiZW5kIiwibW9uaXRvciIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjb2xsZWN0IiwiaXNEcmFnZ2luZyIsImhhbmRsZXJJZCIsImdldEhhbmRsZXJJZCIsImRyYWciLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUVWQyxRQUFNLEVBQUUsaUJBRkU7QUFHVkMsUUFBTSxFQUFFLE1BSEU7QUFJVkMsUUFBTSxFQUFFO0FBSkUsQ0FBZDtBQU1PLElBQU1DLEdBQUcsR0FBRyxTQUFTQSxHQUFULE9BWWhCO0FBQUE7O0FBQUEsTUFYQ0MsRUFXRCxRQVhDQSxFQVdEO0FBQUEsTUFWQ0MsUUFVRCxRQVZDQSxRQVVEO0FBQUEsTUFUQ0MsU0FTRCxRQVRDQSxTQVNEO0FBQUEsTUFSQ0MsVUFRRCxRQVJDQSxVQVFEO0FBQUEsTUFQQ0MsUUFPRCxRQVBDQSxRQU9EO0FBQUEsTUFOQ0MsV0FNRCxRQU5DQSxXQU1EO0FBQUEsTUFMQ0MsUUFLRCxRQUxDQSxRQUtEO0FBQUEsTUFKQ0MsU0FJRCxRQUpDQSxTQUlEO0FBQUEsTUFIQ0MsT0FHRCxRQUhDQSxPQUdEO0FBQUEsTUFGQ0MsT0FFRCxRQUZDQSxPQUVEO0FBQUEsTUFEQ0MsUUFDRCxRQURDQSxRQUNEOztB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LE9BQXRCLENBakJKLENBTEosQ0FESixDQURKO0FBNEJILENBekRNOztHQUFNVixHO1VBYXNCWSxpRDs7O0tBYnRCWixHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5kNDYwMjdhZGMzZmI3N2NlZjlmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlcyB9IGZyb20gJy4vSXRlbVR5cGVzJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG5cclxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHpJbmRleDogMTBcclxufTtcclxuZXhwb3J0IGNvbnN0IEJveCA9IGZ1bmN0aW9uIEJveCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZE1vbnN0ZXIsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuQ0FSRCxcclxuICAgICAgICBpdGVtOiB7IGlkLCBjYXJkTmFtZSB9LFxyXG4gICAgICAgIGVuZDogKGl0ZW0sIG1vbml0b3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcFJlc3VsdCA9IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBkcm9wUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Q2FyZChpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBkcm9wcGVkICR7aXRlbS5jYXJkTmFtZX0gaW50byAke2Ryb3BSZXN1bHQubmFtZX0hYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcclxuICAgICAgICAgICAgaGFuZGxlcklkOiBtb25pdG9yLmdldEhhbmRsZXJJZCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IGlzRHJhZ2dpbmcgPyAwLjQgOiAxO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17ZHJhZ30gcm9sZT1cIkNhcmRcIiBzdHlsZT17eyAuLi5zdHlsZSwgb3BhY2l0eSB9fSBkYXRhLXRlc3RpZD17YGNhcmQtJHtjYXJkTmFtZX1gfSBvbkNsaWNrPXsoKT0+IHtjb25zb2xlLmxvZyhpZCl9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vbUc2anZwUi9tb25zdGVyLW5vcm1hbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRGYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXJkSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXJMZXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTTFiWUM2Vi9zdGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZFRpdGxlXCI+e2NhcmROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJjYXJkVHlwZVwiIHNyYz17dHlwZUltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBpZD1cIm1vbnN0ZXJUeXBlXCI+W3tjYXJkTW9uc3Rlcn1dPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckRlc2NyaXB0aW9uXCI+e2NhcmREZXNjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyQXRrXCI+e2NhcmRBdGt9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJEZWZcIj57Y2FyZERlZn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9