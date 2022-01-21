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
      type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].BOX,
      item: id,
      end: function end(item, monitor) {
        var dropResult = monitor.getDropResult();

        if (item && dropResult) {
          playCard(id); //console.log(`You dropped ${item.cardName} into ${dropResult.name}!`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL0JveC5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ6SW5kZXgiLCJCb3giLCJpZCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwiY2FyZE1vbnN0ZXIiLCJjYXJkRGVzYyIsInR5cGVJbWFnZSIsImNhcmRBdGsiLCJjYXJkRGVmIiwicGxheUNhcmQiLCJ1c2VEcmFnIiwidHlwZSIsIkl0ZW1UeXBlcyIsIkJPWCIsIml0ZW0iLCJlbmQiLCJtb25pdG9yIiwiZHJvcFJlc3VsdCIsImdldERyb3BSZXN1bHQiLCJjb2xsZWN0IiwiaXNEcmFnZ2luZyIsImhhbmRsZXJJZCIsImdldEhhbmRsZXJJZCIsImRyYWciLCJvcGFjaXR5IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFFVkMsUUFBTSxFQUFFLGlCQUZFO0FBR1ZDLFFBQU0sRUFBRSxNQUhFO0FBSVZDLFFBQU0sRUFBRTtBQUpFLENBQWQ7QUFNTyxJQUFNQyxHQUFHLEdBQUcsU0FBU0EsR0FBVCxPQVloQjtBQUFBOztBQUFBLE1BWENDLEVBV0QsUUFYQ0EsRUFXRDtBQUFBLE1BVkNDLFFBVUQsUUFWQ0EsUUFVRDtBQUFBLE1BVENDLFNBU0QsUUFUQ0EsU0FTRDtBQUFBLE1BUkNDLFVBUUQsUUFSQ0EsVUFRRDtBQUFBLE1BUENDLFFBT0QsUUFQQ0EsUUFPRDtBQUFBLE1BTkNDLFdBTUQsUUFOQ0EsV0FNRDtBQUFBLE1BTENDLFFBS0QsUUFMQ0EsUUFLRDtBQUFBLE1BSkNDLFNBSUQsUUFKQ0EsU0FJRDtBQUFBLE1BSENDLE9BR0QsUUFIQ0EsT0FHRDtBQUFBLE1BRkNDLE9BRUQsUUFGQ0EsT0FFRDtBQUFBLE1BRENDLFFBQ0QsUUFEQ0EsUUFDRDs7QUFBQSxpQkFD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ZGV4LmpzLjVmZWRiNzhjODQ4OTY3NmRmMDIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcblxyXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCBncmF5JyxcclxuICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgekluZGV4OiAxMFxyXG59O1xyXG5leHBvcnQgY29uc3QgQm94ID0gZnVuY3Rpb24gQm94KHtcclxuICAgIGlkLFxyXG4gICAgY2FyZE5hbWUsXHJcbiAgICBjYXJkSW1hZ2UsXHJcbiAgICBjYXJkUmFyaXR5LFxyXG4gICAgY2FyZFR5cGUsXHJcbiAgICBjYXJkTW9uc3RlcixcclxuICAgIGNhcmREZXNjLFxyXG4gICAgdHlwZUltYWdlLFxyXG4gICAgY2FyZEF0ayxcclxuICAgIGNhcmREZWYsXHJcbiAgICBwbGF5Q2FyZFxyXG59KSB7XHJcbiAgICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IEl0ZW1UeXBlcy5CT1gsXHJcbiAgICAgICAgaXRlbTogaWQsXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlDYXJkKGlkKVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhgWW91IGRyb3BwZWQgJHtpdGVtLmNhcmROYW1lfSBpbnRvICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSByb2xlPVwiQm94XCIgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX0gZGF0YS10ZXN0aWQ9e2Bib3gtJHtjYXJkTmFtZX1gfSBvbkNsaWNrPXsoKT0+IHtjb25zb2xlLmxvZyhpZCl9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vbUc2anZwUi9tb25zdGVyLW5vcm1hbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRGYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXJkSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXJMZXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTTFiWUM2Vi9zdGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZFRpdGxlXCI+e2NhcmROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJjYXJkVHlwZVwiIHNyYz17dHlwZUltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBpZD1cIm1vbnN0ZXJUeXBlXCI+W3tjYXJkTW9uc3Rlcn1dPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckRlc2NyaXB0aW9uXCI+e2NhcmREZXNjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyQXRrXCI+e2NhcmRBdGt9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJEZWZcIj57Y2FyZERlZn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9