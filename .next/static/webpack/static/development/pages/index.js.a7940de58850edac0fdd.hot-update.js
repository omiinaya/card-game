webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/board/Box.jsx":
/*!**********************************!*\
  !*** ./components/board/Box.jsx ***!
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
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTypes */ "./components/board/ItemTypes.js");



var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\board\\Box.jsx",
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

  var index = _ref.index,
      cardName = _ref.cardName,
      cardImage = _ref.cardImage,
      cardRarity = _ref.cardRarity,
      cardType = _ref.cardType,
      cardMonster = _ref.cardMonster,
      cardDesc = _ref.cardDesc,
      typeImage = _ref.typeImage,
      cardAtk = _ref.cardAtk,
      cardDef = _ref.cardDef,
      fn = _ref.fn;

  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"])(function () {
    return {
      type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].BOX,
      item: {
        index: index,
        cardName: cardName
      },
      end: function end(item, monitor) {
        var dropResult = monitor.getDropResult();

        if (item && dropResult) {
          fn(index);
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
    role: "Box",
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: opacity
    }),
    "data-testid": "box-".concat(cardName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), __jsx("div", {
    id: "cardContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("img", {
    id: "cardTemplate",
    src: "https://i.ibb.co/mG6jvpR/monster-normal.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("img", {
    id: "cardFace",
    src: cardImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("img", {
    id: "starLevel",
    src: "https://i.ibb.co/M1bYC6V/star.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }), __jsx("div", {
    id: "cardTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, cardName), __jsx("img", {
    id: "cardType",
    src: typeImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx("h4", {
    id: "monsterType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, "[", cardMonster, "]"), __jsx("div", {
    id: "monsterDescription",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, cardDesc), __jsx("div", {
    id: "monsterAtk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, cardAtk), __jsx("div", {
    id: "monsterDef",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL0JveC5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ6SW5kZXgiLCJCb3giLCJpbmRleCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwiY2FyZE1vbnN0ZXIiLCJjYXJkRGVzYyIsInR5cGVJbWFnZSIsImNhcmRBdGsiLCJjYXJkRGVmIiwiZm4iLCJ1c2VEcmFnIiwidHlwZSIsIkl0ZW1UeXBlcyIsIkJPWCIsIml0ZW0iLCJlbmQiLCJtb25pdG9yIiwiZHJvcFJlc3VsdCIsImdldERyb3BSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNvbGxlY3QiLCJpc0RyYWdnaW5nIiwiaGFuZGxlcklkIiwiZ2V0SGFuZGxlcklkIiwiZHJhZyIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBRVZDLFFBQU0sRUFBRSxpQkFGRTtBQUdWQyxRQUFNLEVBQUUsTUFIRTtBQUlWQyxRQUFNLEVBQUU7QUFKRSxDQUFkO0FBTU8sSUFBTUMsR0FBRyxHQUFHLFNBQVNBLEdBQVQsT0FZaEI7QUFBQTs7QUFBQSxNQVhDQyxLQVdELFFBWENBLEtBV0Q7QUFBQSxNQVZDQyxRQVVELFFBVkNBLFFBVUQ7QUFBQSxNQVRDQyxTQVNELFFBVENBLFNBU0Q7QUFBQSxNQVJDQyxVQVFELFFBUkNBLFVBUUQ7QUFBQSxNQVBDQyxRQU9ELFFBUENBLFFBT0Q7QUFBQSxNQU5DQyxXQU1ELFFBTkNBLFdBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxPQUdELFFBSENBLE9BR0Q7QUFBQSxNQUZDQyxPQUVELFFBRkNBLE9BRUQ7QUFBQSxNQURDQyxFQUNELFFBRENBLEVBQ0Q7O0FBQUEs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L3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmE3OTQwZGU1ODg1MGVkYWMwZmRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBcclxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHpJbmRleDogMTBcclxufTtcclxuZXhwb3J0IGNvbnN0IEJveCA9IGZ1bmN0aW9uIEJveCh7XHJcbiAgICBpbmRleCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZE1vbnN0ZXIsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgZm5cclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuQk9YLFxyXG4gICAgICAgIGl0ZW06IHsgaW5kZXgsIGNhcmROYW1lIH0sXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGZuKGluZGV4KVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBkcm9wcGVkICR7aXRlbS5jYXJkTmFtZX0gaW50byAke2Ryb3BSZXN1bHQubmFtZX0hYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcclxuICAgICAgICAgICAgaGFuZGxlcklkOiBtb25pdG9yLmdldEhhbmRsZXJJZCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IGlzRHJhZ2dpbmcgPyAwLjQgOiAxO1xyXG4gICAgcmV0dXJuICg8ZGl2IHJlZj17ZHJhZ30gcm9sZT1cIkJveFwiIHN0eWxlPXt7IC4uLnN0eWxlLCBvcGFjaXR5IH19IGRhdGEtdGVzdGlkPXtgYm94LSR7Y2FyZE5hbWV9YH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURpZGFjdCtHb3RoaWMmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2FyZFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL21HNmp2cFIvbW9uc3Rlci1ub3JtYWwucG5nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJkRmFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXJkSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFyTGV2ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTTFiWUM2Vi9zdGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRUaXRsZVwiPntjYXJkTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJjYXJkVHlwZVwiIHNyYz17dHlwZUltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGlkPVwibW9uc3RlclR5cGVcIj5be2NhcmRNb25zdGVyfV08L2g0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJEZXNjcmlwdGlvblwiPntjYXJkRGVzY308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyQXRrXCI+e2NhcmRBdGt9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckRlZlwiPntjYXJkRGVmfTwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=