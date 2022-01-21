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
        cardName: cardName
      },
      end: function end(item, monitor) {
        var dropResult = monitor.getDropResult();

        if (item && dropResult) {
          fn(item.index);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL0JveC5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ6SW5kZXgiLCJCb3giLCJpbmRleCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwiY2FyZE1vbnN0ZXIiLCJjYXJkRGVzYyIsInR5cGVJbWFnZSIsImNhcmRBdGsiLCJjYXJkRGVmIiwiZm4iLCJ1c2VEcmFnIiwidHlwZSIsIkl0ZW1UeXBlcyIsIkJPWCIsIml0ZW0iLCJlbmQiLCJtb25pdG9yIiwiZHJvcFJlc3VsdCIsImdldERyb3BSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNvbGxlY3QiLCJpc0RyYWdnaW5nIiwiaGFuZGxlcklkIiwiZ2V0SGFuZGxlcklkIiwiZHJhZyIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBRVZDLFFBQU0sRUFBRSxpQkFGRTtBQUdWQyxRQUFNLEVBQUUsTUFIRTtBQUlWQyxRQUFNLEVBQUU7QUFKRSxDQUFkO0FBTU8sSUFBTUMsR0FBRyxHQUFHLFNBQVNBLEdBQVQsT0FZaEI7QUFBQTs7QUFBQSxNQVhDQyxLQVdELFFBWENBLEtBV0Q7QUFBQSxNQVZDQyxRQVVELFFBVkNBLFFBVUQ7QUFBQSxNQVRDQyxTQVNELFFBVENBLFNBU0Q7QUFBQSxNQVJDQyxVQVFELFFBUkNBLFVBUUQ7QUFBQSxNQVBDQyxRQU9ELFFBUENBLFFBT0Q7QUFBQSxNQU5DQyxXQU1ELFFBTkNBLFdBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxPQUdELFFBSENBLE9BR0Q7QUFBQSxNQUZDQyxPQUVELFFBRkNBLE9BRUQ7QUFBQSxNQURDQyxFQUNELFFBRENBLEVBQ0Q7O0FBQUEs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YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40N2ExNWM4Y2Q1ZTRlM2QwOGIzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlcyB9IGZyb20gJy4vSXRlbVR5cGVzJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgXHJcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknLFxyXG4gICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBmdW5jdGlvbiBCb3goe1xyXG4gICAgaW5kZXgsXHJcbiAgICBjYXJkTmFtZSxcclxuICAgIGNhcmRJbWFnZSxcclxuICAgIGNhcmRSYXJpdHksXHJcbiAgICBjYXJkVHlwZSxcclxuICAgIGNhcmRNb25zdGVyLFxyXG4gICAgY2FyZERlc2MsXHJcbiAgICB0eXBlSW1hZ2UsXHJcbiAgICBjYXJkQXRrLFxyXG4gICAgY2FyZERlZixcclxuICAgIGZuXHJcbn0pIHtcclxuICAgIGNvbnN0IFt7IGlzRHJhZ2dpbmcgfSwgZHJhZ10gPSB1c2VEcmFnKCgpID0+ICh7XHJcbiAgICAgICAgdHlwZTogSXRlbVR5cGVzLkJPWCxcclxuICAgICAgICBpdGVtOiB7IGNhcmROYW1lIH0sXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGZuKGl0ZW0uaW5kZXgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGRyb3BwZWQgJHtpdGVtLmNhcmROYW1lfSBpbnRvICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKDxkaXYgcmVmPXtkcmFnfSByb2xlPVwiQm94XCIgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX0gZGF0YS10ZXN0aWQ9e2Bib3gtJHtjYXJkTmFtZX1gfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJkVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vbUc2anZwUi9tb25zdGVyLW5vcm1hbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRGYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2NhcmRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXJMZXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9NMWJZQzZWL3N0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZFRpdGxlXCI+e2NhcmROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBpZD1cImNhcmRUeXBlXCIgc3JjPXt0eXBlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDQgaWQ9XCJtb25zdGVyVHlwZVwiPlt7Y2FyZE1vbnN0ZXJ9XTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckRlc2NyaXB0aW9uXCI+e2NhcmREZXNjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJBdGtcIj57Y2FyZEF0a308L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyRGVmXCI+e2NhcmREZWZ9PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==