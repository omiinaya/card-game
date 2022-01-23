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
/* harmony import */ var _cardCard_CardCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cardCard/CardCard */ "./components/cardCard/CardCard.jsx");



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
    }, __jsx(_cardCard_CardCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsImJvdHRvbSIsIkZpZWxkIiwicHJvcHMiLCJ1c2VEcm9wIiwiYWNjZXB0IiwiSXRlbVR5cGVzIiwiSEFORENBUkQiLCJkcm9wIiwibmFtZSIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNPdmVyIiwiY2FuRHJvcCIsImlzQWN0aXZlIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luIiwidG9wIiwidHJhbnNmb3JtIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY2FyZHMiLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJjYXJkTmFtZSIsImlkIiwiY2FyZEltYWdlIiwiY2FyZFJhcml0eSIsImNhcmRUeXBlIiwidHlwZUltYWdlIiwiY2FyZERlc2MiLCJjYXJkU3ViVHlwZSIsImNhcmRBVEsiLCJjYXJkREVGIiwicGxheUNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNWQyxRQUFNLEVBQUUsT0FERTtBQUVWQyxPQUFLLEVBQUUsTUFGRztBQUdWQyxRQUFNLEVBQUUsQ0FIRTtBQUlWQyxVQUFRLEVBQUUsVUFKQTtBQUtWQyxRQUFNLEVBQUU7QUFMRSxDQUFkO0FBT08sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsaUJBQ1FDLHlEQUFPLENBQUM7QUFBQSxXQUFPO0FBQy9DQyxZQUFNLEVBQUVDLG9EQUFTLENBQUNDLFFBRDZCO0FBRS9DQyxVQUFJLEVBQUU7QUFBQSxlQUFPO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQVA7QUFBQSxPQUZ5QztBQUcvQ0MsYUFBTyxFQUFFLGlCQUFDQyxPQUFEO0FBQUEsZUFBYztBQUNuQkMsZ0JBQU0sRUFBRUQsT0FBTyxDQUFDQyxNQUFSLEVBRFc7QUFFbkJDLGlCQUFPLEVBQUVGLE9BQU8sQ0FBQ0UsT0FBUjtBQUZVLFNBQWQ7QUFBQTtBQUhzQyxLQUFQO0FBQUEsR0FBRCxDQURmO0FBQUE7QUFBQTtBQUFBLE1BQ25CQSxPQURtQixjQUNuQkEsT0FEbUI7QUFBQSxNQUNWRCxNQURVLGNBQ1ZBLE1BRFU7QUFBQSxNQUNBSixJQURBOztBQVU1QixNQUFNTSxRQUFRLEdBQUdELE9BQU8sSUFBSUQsTUFBNUI7QUFDQSxNQUFJRyxlQUFlLEdBQUcsTUFBdEI7O0FBRUEsTUFBSUQsUUFBSixFQUFjO0FBQ1ZDLG1CQUFlLEdBQUcsV0FBbEI7QUFDSCxHQUZELE1BSUssSUFBSUYsT0FBSixFQUFhO0FBQ2RFLG1CQUFlLEdBQUcsV0FBbEI7QUFDSDs7QUFFRCxTQUNJO0FBQUssT0FBRyxFQUFFUCxJQUFWO0FBQWdCLFFBQUksRUFBRSxPQUF0QjtBQUErQixTQUFLLGtDQUFPWixLQUFQO0FBQWNtQixxQkFBZSxFQUFmQTtBQUFkLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUNSQyxZQUFNLEVBQUUsUUFEQTtBQUVSaEIsY0FBUSxFQUFFLFVBRkY7QUFHUmlCLFNBQUcsRUFBRSxLQUhHO0FBSVJDLGVBQVMsRUFBRSxrQkFKSDtBQUtSQyxhQUFPLEVBQUUsTUFMRDtBQU1SQyxvQkFBYyxFQUFFLFFBTlI7QUFPUnRCLFdBQUssRUFBRSxNQVBDO0FBUVJELFlBQU0sRUFBRTtBQVJBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVVLTSxLQUFLLENBQUNrQixLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsV0FDYjtBQUFLLFNBQUcsRUFBRSxVQUFVRCxJQUFJLENBQUNFLFFBQWYsR0FBMEJELEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywwREFBRDtBQUNJLFFBQUUsRUFBRUQsSUFBSSxDQUFDRyxFQURiO0FBRUksY0FBUSxFQUFFSCxJQUFJLENBQUNFLFFBRm5CO0FBR0ksZUFBUyxFQUFFRixJQUFJLENBQUNJLFNBSHBCO0FBSUksZ0JBQVUsRUFBRUosSUFBSSxDQUFDSyxVQUpyQjtBQUtJLGNBQVEsRUFBRUwsSUFBSSxDQUFDTSxRQUxuQjtBQU1JLGVBQVMsRUFBRU4sSUFBSSxDQUFDTyxTQU5wQjtBQU9JLGNBQVEsRUFBRVAsSUFBSSxDQUFDUSxRQVBuQjtBQVFJLGlCQUFXLEVBQUVSLElBQUksQ0FBQ1MsV0FSdEI7QUFTSSxhQUFPLEVBQUVULElBQUksQ0FBQ1UsT0FUbEI7QUFVSSxhQUFPLEVBQUVWLElBQUksQ0FBQ1csT0FWbEI7QUFXSSxjQUFRLEVBQUUvQixLQUFLLENBQUNnQyxRQVhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURhO0FBQUEsR0FBaEIsQ0FWTCxDQURKLENBREo7QUFrQ0gsQ0F2RE07O0dBQU1qQyxLO1VBQzJCRSxpRDs7O0tBRDNCRixLO0FBeURFQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNTU0ODUxNGY0NzE0MDIyZDIzZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyb3AgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcbmltcG9ydCBDYXJkQ2FyZCBmcm9tICcuLi9jYXJkQ2FyZC9DYXJkQ2FyZCc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGhlaWdodDogJzI2NXB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB6SW5kZXg6IDUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogJzI2MHB4JyxcclxufVxyXG5leHBvcnQgY29uc3QgRmllbGQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFt7IGNhbkRyb3AsIGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3AoKCkgPT4gKHtcclxuICAgICAgICBhY2NlcHQ6IEl0ZW1UeXBlcy5IQU5EQ0FSRCxcclxuICAgICAgICBkcm9wOiAoKSA9PiAoeyBuYW1lOiAnRmllbGQnIH0pLFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXHJcbiAgICAgICAgICAgIGNhbkRyb3A6IG1vbml0b3IuY2FuRHJvcCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IGlzQWN0aXZlID0gY2FuRHJvcCAmJiBpc092ZXI7XHJcbiAgICBsZXQgYmFja2dyb3VuZENvbG9yID0gJyMyMjInO1xyXG5cclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJrZ3JlZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAnZGFya2toYWtpJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcm9wfSByb2xlPXsnRmllbGQnfSBzdHlsZT17eyAuLi5zdHlsZSwgYmFja2dyb3VuZENvbG9yIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICB0b3A6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgtNTAlKScsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJSdcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2FyZHMubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXsnZmllbGQnICsgY2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnZW5lcmF0ZWQtZmllbGQtY2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZC5jYXJkU3ViVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtwcm9wcy5wbGF5Q2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQiXSwic291cmNlUm9vdCI6IiJ9