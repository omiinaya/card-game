webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Box.jsx":
/*!*********************************!*\
  !*** ./components/game/Box.jsx ***!
  \*********************************/
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



var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Box.jsx",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm94LmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsImJvcmRlciIsImN1cnNvciIsInpJbmRleCIsIkJveCIsImlkIiwiY2FyZE5hbWUiLCJjYXJkSW1hZ2UiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJjYXJkTW9uc3RlciIsImNhcmREZXNjIiwidHlwZUltYWdlIiwiY2FyZEF0ayIsImNhcmREZWYiLCJwbGF5Q2FyZCIsInVzZURyYWciLCJ0eXBlIiwiSXRlbVR5cGVzIiwiQk9YIiwiaXRlbSIsImVuZCIsIm1vbml0b3IiLCJkcm9wUmVzdWx0IiwiZ2V0RHJvcFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiY29sbGVjdCIsImlzRHJhZ2dpbmciLCJoYW5kbGVySWQiLCJnZXRIYW5kbGVySWQiLCJkcmFnIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFFVkMsUUFBTSxFQUFFLGlCQUZFO0FBR1ZDLFFBQU0sRUFBRSxNQUhFO0FBSVZDLFFBQU0sRUFBRTtBQUpFLENBQWQ7QUFNTyxJQUFNQyxHQUFHLEdBQUcsU0FBU0EsR0FBVCxPQVloQjtBQUFBOztBQUFBLE1BWENDLEVBV0QsUUFYQ0EsRUFXRDtBQUFBLE1BVkNDLFFBVUQsUUFWQ0EsUUFVRDtBQUFBLE1BVENDLFNBU0QsUUFUQ0EsU0FTRDtBQUFBLE1BUkNDLFVBUUQsUUFSQ0EsVUFRRDtBQUFBLE1BUENDLFFBT0QsUUFQQ0EsUUFPRDtBQUFBLE1BTkNDLFdBTUQsUUFOQ0EsV0FNRDtBQUFBLE1BTENDLFFBS0QsUUFMQ0EsUUFLRDtBQUFBLE1BSkNDLFNBSUQsUUFKQ0EsU0FJRDtBQUFBLE1BSENDLE9BR0QsUUFIQ0EsT0FHRDtBQUFBLE1BRkNDLE9BRUQsUUFGQ0EsT0FFRDtBQUFBLE1BRENDLFFBQ0QsUUFEQ0EsUUFDRDs7QUFB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QUF0QixDQWpCSixDQUxKLENBREosQ0FESjtBQTRCSCxDQXpETTs7R0FBTVYsRztVQWFzQlksaUQ7OztLQWJ0QlosRyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuM2Q2YzA3M2I1Njc0MGFjOTBmNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuXHJcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknLFxyXG4gICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmV4cG9ydCBjb25zdCBCb3ggPSBmdW5jdGlvbiBCb3goe1xyXG4gICAgaWQsXHJcbiAgICBjYXJkTmFtZSxcclxuICAgIGNhcmRJbWFnZSxcclxuICAgIGNhcmRSYXJpdHksXHJcbiAgICBjYXJkVHlwZSxcclxuICAgIGNhcmRNb25zdGVyLFxyXG4gICAgY2FyZERlc2MsXHJcbiAgICB0eXBlSW1hZ2UsXHJcbiAgICBjYXJkQXRrLFxyXG4gICAgY2FyZERlZixcclxuICAgIHBsYXlDYXJkXHJcbn0pIHtcclxuICAgIGNvbnN0IFt7IGlzRHJhZ2dpbmcgfSwgZHJhZ10gPSB1c2VEcmFnKCgpID0+ICh7XHJcbiAgICAgICAgdHlwZTogSXRlbVR5cGVzLkJPWCxcclxuICAgICAgICBpdGVtOiB7IGlkLCBjYXJkTmFtZSB9LFxyXG4gICAgICAgIGVuZDogKGl0ZW0sIG1vbml0b3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcFJlc3VsdCA9IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBkcm9wUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Q2FyZChpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBkcm9wcGVkICR7aXRlbS5jYXJkTmFtZX0gaW50byAke2Ryb3BSZXN1bHQubmFtZX0hYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcclxuICAgICAgICAgICAgaGFuZGxlcklkOiBtb25pdG9yLmdldEhhbmRsZXJJZCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IGlzRHJhZ2dpbmcgPyAwLjQgOiAxO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17ZHJhZ30gcm9sZT1cIkJveFwiIHN0eWxlPXt7IC4uLnN0eWxlLCBvcGFjaXR5IH19IGRhdGEtdGVzdGlkPXtgYm94LSR7Y2FyZE5hbWV9YH0gb25DbGljaz17KCk9PiB7Y29uc29sZS5sb2coaWQpfX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURpZGFjdCtHb3RoaWMmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJkVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL21HNmp2cFIvbW9uc3Rlci1ub3JtYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJkRmFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyZEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFyTGV2ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL00xYllDNlYvc3Rhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRUaXRsZVwiPntjYXJkTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiY2FyZFR5cGVcIiBzcmM9e3R5cGVJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgaWQ9XCJtb25zdGVyVHlwZVwiPlt7Y2FyZE1vbnN0ZXJ9XTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJEZXNjcmlwdGlvblwiPntjYXJkRGVzY308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckF0a1wiPntjYXJkQXRrfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyRGVmXCI+e2NhcmREZWZ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==