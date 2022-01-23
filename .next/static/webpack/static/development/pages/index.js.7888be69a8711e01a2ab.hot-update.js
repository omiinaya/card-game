webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Field.jsx":
/*!***********************************!*\
  !*** ./components/game/Field.jsx ***!
  \***********************************/
/*! exports provided: Field, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
/* harmony import */ var _FieldCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldCard */ "./components/game/FieldCard.jsx");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var style = {
  height: '265px',
  width: '100%',
  zIndex: 5,
  position: 'absolute',
  bottom: '260px'
};
var Field = function Field(props) {
  _s();

  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"])(function () {
    return {
      accept: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].HANDCARD,
      drop: function drop() {
        return {
          name: 'Field'
        };
      },
      collect: function collect(monitor) {
        return {
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop()
        };
      }
    };
  }),
      _useDrop2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useDrop, 2),
      _useDrop2$ = _useDrop2[0],
      canDrop = _useDrop2$.canDrop,
      isOver = _useDrop2$.isOver,
      drop = _useDrop2[1];

  var isActive = canDrop && isOver;
  var backgroundColor = '#222';

  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return __jsx("div", {
    ref: drop,
    role: 'Field',
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundColor: backgroundColor
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, props.cards.map(function (card, index) {
    return __jsx("div", {
      key: 'field' + card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-field-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, __jsx(_FieldCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: card.id,
      cardName: card.cardName,
      cardImage: card.cardImage,
      cardRarity: card.cardRarity,
      cardType: card.cardType,
      typeImage: card.typeImage,
      cardDesc: card.cardDesc,
      cardSubType: card.cardSubType,
      cardAtk: card.cardATK,
      cardDef: card.cardDEF,
      playCard: props.playCard,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 29
      }
    })));
  })));
};

_s(Field, "F504N0wuFSbvI1XEbEwXUidFCiM=", false, function () {
  return [react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"]];
});

_c = Field;
/* harmony default export */ __webpack_exports__["default"] = (Field);

var _c;

$RefreshReg$(_c, "Field");

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

/***/ }),

/***/ "./components/game/FieldCard.jsx":
/*!***************************************!*\
  !*** ./components/game/FieldCard.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
/* harmony import */ var _cardCard_CardCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cardCard/CardCard */ "./components/cardCard/CardCard.jsx");



var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\FieldCard.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var style = {
  border: '1px dashed gray',
  cursor: 'move',
  zIndex: 10
};

var FieldCard = function FieldCard(_ref) {
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
      type: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].FIELDCARD,
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
    role: "FieldCard",
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity: opacity
    }),
    "data-testid": "fieldcard-".concat(cardName),
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
      lineNumber: 41,
      columnNumber: 13
    }
  }));
};

_s(FieldCard, "wuumsFp4qAni9XRJfRhQAZjuD/k=", false, function () {
  return [react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrag"]];
});

_c = FieldCard;
/* harmony default export */ __webpack_exports__["default"] = (FieldCard);

var _c;

$RefreshReg$(_c, "FieldCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9GaWVsZENhcmQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImJvdHRvbSIsIkZpZWxkIiwicHJvcHMiLCJ1c2VEcm9wIiwiYWNjZXB0IiwiSXRlbVR5cGVzIiwiSEFORENBUkQiLCJkcm9wIiwibmFtZSIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNPdmVyIiwiY2FuRHJvcCIsImlzQWN0aXZlIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwidG9wIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY2FyZHMiLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJjYXJkTmFtZSIsImlkIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwidHlwZUltYWdlIiwiY2FyZERlc2MiLCJjYXJkU3ViVHlwZSIsImNhcmRBVEsiLCJjYXJkREVGIiwicGxheUNhcmQiLCJib3JkZXIiLCJjdXJzb3IiLCJGaWVsZENhcmQiLCJjYXJkQXRrIiwiY2FyZERlZiIsInVzZURyYWciLCJ0eXBlIiwiRklFTERDQVJEIiwiaXRlbSIsImVuZCIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImlzRHJhZ2dpbmciLCJoYW5kbGVySWQiLCJnZXRIYW5kbGVySWQiLCJkcmFnIiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1ZDLFFBQU0sRUFBRSxPQURFO0FBRVZDLE9BQUssRUFBRSxNQUZHO0FBR1ZDLFFBQU0sRUFBRSxDQUhFO0FBSVZDLFVBQVEsRUFBRSxVQUpBO0FBS1ZDLFFBQU0sRUFBRTtBQUxFLENB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dUMsb0JBQVUsRUFBRXZDLE9BQU8sQ0FBQ3VDLFVBQVIsRUFETztBQUVuQkMsbUJBQVMsRUFBRXhDLE9BQU8sQ0FBQ3lDLFlBQVI7QUFGUSxTQUFkO0FBQUE7QUFWaUMsS0FBUDtBQUFBLEdBQUQsQ0FEdkM7QUFBQTtBQUFBLE1BQ1VGLFVBRFYsZ0JBQ1VBLFVBRFY7QUFBQSxNQUN3QkcsSUFEeEI7O0FBZ0JDLE1BQU1DLE9BQU8sR0FBR0osVUFBVSxHQUFHLEdBQUgsR0FBUyxDQUFuQztBQUNBLFNBQ0k7QUFBSyxPQUFHLEVBQUVHLElBQVY7QUFBZ0IsUUFBSSxFQUFDLFdBQXJCO0FBQWlDLFNBQUssa0NBQU96RCxLQUFQO0FBQWMwRCxhQUFPLEVBQVBBO0FBQWQsTUFBdEM7QUFBK0QsdUNBQTBCN0IsUUFBMUIsQ0FBL0Q7QUFBcUcsV0FBTyxFQUFFLG1CQUFNO0FBQUV1QixhQUFPLENBQUNDLEdBQVIsQ0FBWXZCLEVBQVo7QUFBaUIsS0FBdkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFDSSxNQUFFLEVBQUVBLEVBRFI7QUFFSSxZQUFRLEVBQUVELFFBRmQ7QUFHSSxhQUFTLEVBQUVFLFNBSGY7QUFJSSxjQUFVLEVBQUVDLFVBSmhCO0FBS0ksWUFBUSxFQUFFQyxRQUxkO0FBTUksZUFBVyxFQUFFRyxXQU5qQjtBQU9JLFlBQVEsRUFBRUQsUUFQZDtBQVFJLGFBQVMsRUFBRUQsU0FSZjtBQVNJLFdBQU8sRUFBRVMsT0FUYjtBQVVJLFdBQU8sRUFBRUMsT0FWYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESjtBQWdCSCxDQTdDRDs7R0FBTUYsUztVQWE2QkcsaUQ7OztLQWI3QkgsUztBQStDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc4ODhiZTY5YTg3MTFlMDFhMmFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgRmllbGRDYXJkIGZyb20gJy4vRmllbGRDYXJkJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMjY1cHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHpJbmRleDogNSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAnMjYwcHgnLFxyXG59XHJcbmV4cG9ydCBjb25zdCBGaWVsZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3sgY2FuRHJvcCwgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgICAgIGFjY2VwdDogSXRlbVR5cGVzLkhBTkRDQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6ICdGaWVsZCcgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjYW5Ecm9wICYmIGlzT3ZlcjtcclxuICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnIzIyMic7XHJcblxyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2Ryb3B9IHJvbGU9eydGaWVsZCd9IHN0eWxlPXt7IC4uLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eydmaWVsZCcgKyBjYXJkLmNhcmROYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlZC1maWVsZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZC5jYXJkU3ViVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtwcm9wcy5wbGF5Q2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQiLCJpbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgQ2FyZENhcmQgZnJvbSAnLi4vY2FyZENhcmQvQ2FyZENhcmQnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknLFxyXG4gICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmNvbnN0IEZpZWxkQ2FyZCA9IGZ1bmN0aW9uIEZpZWxkQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZFN1YlR5cGUsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuRklFTERDQVJELFxyXG4gICAgICAgIGl0ZW06IHsgaWQsIGNhcmROYW1lIH0sXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlDYXJkKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGRyb3BwZWQgJHtpdGVtLmNhcmROYW1lfSBpbnRvICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSByb2xlPVwiRmllbGRDYXJkXCIgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX0gZGF0YS10ZXN0aWQ9e2BmaWVsZGNhcmQtJHtjYXJkTmFtZX1gfSBvbkNsaWNrPXsoKSA9PiB7IGNvbnNvbGUubG9nKGlkKSB9fT5cclxuICAgICAgICAgICAgPENhcmRDYXJkXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e3R5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmRBdGt9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkRGVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=