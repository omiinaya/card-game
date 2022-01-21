webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Box.jsx":
false,

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

/***/ }),

/***/ "./components/game/Field.jsx":
/*!***********************************!*\
  !*** ./components/game/Field.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Board */ "./components/game/Board.jsx");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./components/game/Card.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function Container() {
  var _this = this;

  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      cards = _useState[0],
      setCards = _useState[1];

  var getCards = function getCards() {
    //if cards have not loaded yet then load them from server.
    if (cards.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/card").then(function (res) {
        setCards(res.data.data);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    sortCardIds();
  }, [cards]);

  var handleCardPlayed = function handleCardPlayed(x) {
    setCards(function (prev) {
      return prev.filter(function (card) {
        return card.id != x - 1;
      });
    });
  };

  var sortCardIds = function sortCardIds() {
    var myArray = cards;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_Board__WEBPACK_IMPORTED_MODULE_1__["Board"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "cards",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, cards.map(function (card, index) {
    return __jsx("div", {
      key: card.cardName + index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "generated-card",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 25
      }
    }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_2__["Box"], {
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
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0ZpZWxkLmpzeCJdLCJuYW1lcyI6WyJzdHlsZSIsImJvcmRlciIsImN1cnNvciIsInpJbmRleCIsIkJveCIsImlkIiwiY2FyZE5hbWUiLCJjYXJkSW1hZ2UiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJjYXJkTW9uc3RlciIsImNhcmREZXNjIiwidHlwZUltYWdlIiwiY2FyZEF0ayIsImNhcmREZWYiLCJwbGF5Q2FyZCIsInVzZURyYWciLCJ0eXBlIiwiSXRlbVR5cGVzIiwiQk9YIiwiaXRlbSIsImVuZCIsIm1vbml0b3IiLCJkcm9wUmVzdWx0IiwiZ2V0RHJvcFJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiY29sbGVjdCIsImlzRHJhZ2dpbmciLCJoYW5kbGVySWQiLCJnZXRIYW5kbGVySWQiLCJkcmFnIiwib3BhY2l0eSIsIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwidXNlRWZmZWN0Iiwic29ydENhcmRJZHMiLCJoYW5kbGVDYXJkUGxheWVkIiwieCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwibXlBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJvdmVyZmxvdyIsImNsZWFyIiwibWFwIiwiY2FyZEFUSyIsImNhcmRERUYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBRVZDLFFBQU0sRUFBRSxpQkFGRTtBQUdWQyxRQUFNLEVBQUUsTUFIRTtBQUlWQyxRQUFNLEVBQUU7QUFKRSxDQUFkO0FBTU8sSUFBTUMsR0FBRyxHQUFHLFNBQVNBLEdB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STtBQUFLLGVBQVMsRUFBQyxnQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyx5Q0FBRDtBQUNJLFFBQUUsRUFBRUosSUFBSSxDQUFDaEQsRUFEYjtBQUVJLGNBQVEsRUFBRWdELElBQUksQ0FBQy9DLFFBRm5CO0FBR0ksZUFBUyxFQUFFK0MsSUFBSSxDQUFDOUMsU0FIcEI7QUFJSSxnQkFBVSxFQUFFOEMsSUFBSSxDQUFDN0MsVUFKckI7QUFLSSxjQUFRLEVBQUU2QyxJQUFJLENBQUM1QyxRQUxuQjtBQU1JLGVBQVMsRUFBRTRDLElBQUksQ0FBQ3pDLFNBTnBCO0FBT0ksY0FBUSxFQUFFeUMsSUFBSSxDQUFDMUMsUUFQbkI7QUFRSSxpQkFBVyxFQUFFMEMsSUFBSSxDQUFDM0MsV0FSdEI7QUFTSSxhQUFPLEVBQUUyQyxJQUFJLENBQUNRLE9BVGxCO0FBVUksYUFBTyxFQUFFUixJQUFJLENBQUNTLE9BVmxCO0FBV0ksY0FBUSxFQUFFYixnQkFYZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURPO0FBQUEsR0FBVixDQURMLENBSkosQ0FESjtBQTRCSCxDQTlEc0Isa0NBQXZCO01BQU1mLFU7QUFnRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40MWM5OTg2M2FkNjU2NDYzM2FiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRHJhZyB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlcyB9IGZyb20gJy4vSXRlbVR5cGVzJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG5cclxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHpJbmRleDogMTBcclxufTtcclxuZXhwb3J0IGNvbnN0IEJveCA9IGZ1bmN0aW9uIEJveCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZE1vbnN0ZXIsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuQk9YLFxyXG4gICAgICAgIGl0ZW06IHsgaWQsIGNhcmROYW1lIH0sXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlDYXJkKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGRyb3BwZWQgJHtpdGVtLmNhcmROYW1lfSBpbnRvICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSByb2xlPVwiQ2FyZFwiIHN0eWxlPXt7IC4uLnN0eWxlLCBvcGFjaXR5IH19IGRhdGEtdGVzdGlkPXtgY2FyZC0ke2NhcmROYW1lfWB9IG9uQ2xpY2s9eygpPT4ge2NvbnNvbGUubG9nKGlkKX19PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EaWRhY3QrR290aGljJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2FyZFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9tRzZqdnBSL21vbnN0ZXItbm9ybWFsLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2FyZEZhY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NhcmRJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic3RhckxldmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9NMWJZQzZWL3N0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkVGl0bGVcIj57Y2FyZE5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cImNhcmRUeXBlXCIgc3JjPXt0eXBlSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg0IGlkPVwibW9uc3RlclR5cGVcIj5be2NhcmRNb25zdGVyfV08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyRGVzY3JpcHRpb25cIj57Y2FyZERlc2N9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJBdGtcIj57Y2FyZEF0a308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckRlZlwiPntjYXJkRGVmfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pik7XHJcbn07XHJcbiIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9Cb2FyZCc7XHJcbmltcG9ydCB7IEJveCB9IGZyb20gJy4vQ2FyZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtjYXJkcywgc2V0Q2FyZHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vaWYgY2FyZHMgaGF2ZSBub3QgbG9hZGVkIHlldCB0aGVuIGxvYWQgdGhlbSBmcm9tIHNlcnZlci5cclxuICAgICAgICBpZiAoY2FyZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS9jYXJkYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDYXJkcyhyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENhcmRzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3J0Q2FyZElkcygpO1xyXG4gICAgfSwgW2NhcmRzXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZFBsYXllZCA9ICh4KSA9PiB7XHJcbiAgICAgICAgc2V0Q2FyZHMocHJldiA9PiBwcmV2LmZpbHRlcihjYXJkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmQuaWQgIT0geCAtIDFcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3J0Q2FyZElkcyA9ICgpID0+IHtcclxuICAgICAgICB2YXIgbXlBcnJheSA9IGNhcmRzXHJcbiAgICAgICAgbXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAge2NhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0ZWQtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYXJkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRJbWFnZT17Y2FyZC5jYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFJhcml0eT17Y2FyZC5jYXJkUmFyaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkLmNhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVJbWFnZT17Y2FyZC50eXBlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlc2M9e2NhcmQuY2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE1vbnN0ZXI9e2NhcmQuY2FyZE1vbnN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEF0az17Y2FyZC5jYXJkQVRLfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZWY9e2NhcmQuY2FyZERFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXJIYW5kIl0sInNvdXJjZVJvb3QiOiIifQ==