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
      fn = _ref.fn;

  var _useDrag = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"])(function () {
    return {
      type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].BOX,
      item: {
        id: id,
        cardName: cardName
      },
      end: function end(item, monitor) {
        var dropResult = monitor.getDropResult();

        if (item && dropResult) {
          fn(item.id);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JvYXJkL0JveC5qc3giXSwibmFtZXMiOlsic3R5bGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ6SW5kZXgiLCJCb3giLCJpZCIsImNhcmROYW1lIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwiY2FyZE1vbnN0ZXIiLCJjYXJkRGVzYyIsInR5cGVJbWFnZSIsImNhcmRBdGsiLCJjYXJkRGVmIiwiZm4iLCJ1c2VEcmFnIiwidHlwZSIsIkl0ZW1UeXBlcyIsIkJPWCIsIml0ZW0iLCJlbmQiLCJtb25pdG9yIiwiZHJvcFJlc3VsdCIsImdldERyb3BSZXN1bHQiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNvbGxlY3QiLCJpc0RyYWdnaW5nIiwiaGFuZGxlcklkIiwiZ2V0SGFuZGxlcklkIiwiZHJhZyIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBRVZDLFFBQU0sRUFBRSxpQkFGRTtBQUdWQyxRQUFNLEVBQUUsTUFIRTtBQUlWQyxRQUFNLEVBQUU7QUFKRSxDQUFkO0FBTU8sSUFBTUMsR0FBRyxHQUFHLFNBQVNBLEdBQVQsT0FZaEI7QUFBQTs7QUFBQSxNQVhDQyxFQVdELFFBWENBLEVBV0Q7QUFBQSxNQVZDQyxRQVVELFFBVkNBLFFBVUQ7QUFBQSxNQVRDQyxTQVNELFFBVENBLFNBU0Q7QUFBQSxNQVJDQyxVQVFELFFBUkNBLFVBUUQ7QUFBQSxNQVBDQyxRQU9ELFFBUENBLFFBT0Q7QUFBQSxNQU5DQyxXQU1ELFFBTkNBLFdBTUQ7QUFBQSxNQUxDQyxRQUtELFFBTENBLFFBS0Q7QUFBQSxNQUpDQyxTQUlELFFBSkNBLFNBSUQ7QUFBQSxNQUhDQyxPQUdELFFBSENBLE9BR0Q7QUFBQSxNQUZDQyxPQUVELFFBRkNBLE9BRUQ7QUFBQSxNQURDQyxFQUNELFFBRENBLEVBQ0Q7O0FBQUEsaUJB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OiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTQ2NDg5ZmFkZGZmOTM4N2FhYmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIFxyXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCBncmF5JyxcclxuICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgekluZGV4OiAxMFxyXG59O1xyXG5leHBvcnQgY29uc3QgQm94ID0gZnVuY3Rpb24gQm94KHtcclxuICAgIGlkLFxyXG4gICAgY2FyZE5hbWUsXHJcbiAgICBjYXJkSW1hZ2UsXHJcbiAgICBjYXJkUmFyaXR5LFxyXG4gICAgY2FyZFR5cGUsXHJcbiAgICBjYXJkTW9uc3RlcixcclxuICAgIGNhcmREZXNjLFxyXG4gICAgdHlwZUltYWdlLFxyXG4gICAgY2FyZEF0ayxcclxuICAgIGNhcmREZWYsXHJcbiAgICBmblxyXG59KSB7XHJcbiAgICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IEl0ZW1UeXBlcy5CT1gsXHJcbiAgICAgICAgaXRlbTogeyBpZCwgY2FyZE5hbWUgfSxcclxuICAgICAgICBlbmQ6IChpdGVtLCBtb25pdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgZHJvcFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgZm4oaXRlbS5pZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgZHJvcHBlZCAke2l0ZW0uY2FyZE5hbWV9IGludG8gJHtkcm9wUmVzdWx0Lm5hbWV9IWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICAgICAgICAgIGhhbmRsZXJJZDogbW9uaXRvci5nZXRIYW5kbGVySWQoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBpc0RyYWdnaW5nID8gMC40IDogMTtcclxuICAgIHJldHVybiAoPGRpdiByZWY9e2RyYWd9IHJvbGU9XCJCb3hcIiBzdHlsZT17eyAuLi5zdHlsZSwgb3BhY2l0eSB9fSBkYXRhLXRlc3RpZD17YGJveC0ke2NhcmROYW1lfWB9PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EaWRhY3QrR290aGljJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9tRzZqdnBSL21vbnN0ZXItbm9ybWFsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY2FyZEZhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyZEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic3RhckxldmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL00xYllDNlYvc3Rhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkVGl0bGVcIj57Y2FyZE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGlkPVwiY2FyZFR5cGVcIiBzcmM9e3R5cGVJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxoNCBpZD1cIm1vbnN0ZXJUeXBlXCI+W3tjYXJkTW9uc3Rlcn1dPC9oND5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyRGVzY3JpcHRpb25cIj57Y2FyZERlc2N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckF0a1wiPntjYXJkQXRrfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJEZWZcIj57Y2FyZERlZn08L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4pO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9