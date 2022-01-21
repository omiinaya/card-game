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



var _this = undefined,
    _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var style = {
  height: '250px',
  width: '100%',
  color: 'white',
  textAlign: 'center',
  zIndex: 5,
  position: 'absolute',
  bottom: '150px',
  display: 'flex',
  justifyContent: 'center'
};
var Field = function Field(props) {
  _s();

  console.log(props.cards);

  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"])(function () {
    return {
      accept: _ItemTypes__WEBPACK_IMPORTED_MODULE_4__["ItemTypes"].CARD,
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
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      margin: 'auto',
      top: '50%',
      transform: 'translateY(-50%)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, props.cards.map(function (card) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 45
      }
    }, "test");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsInRleHRBbGlnbiIsInpJbmRleCIsInBvc2l0aW9uIiwiYm90dG9tIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiRmllbGQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjYXJkcyIsInVzZURyb3AiLCJhY2NlcHQiLCJJdGVtVHlwZXMiLCJDQVJEIiwiZHJvcCIsIm5hbWUiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJpc0FjdGl2ZSIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpbiIsInRvcCIsInRyYW5zZm9ybSIsIm1hcCIsImNhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNWQyxRQUFNLEVBQUUsT0FERTtBQUVWQyxPQUFLLEVBQUUsTUFGRztBQUdWQyxPQUFLLEVBQUUsT0FIRztBQUlWQyxXQUFTLEVBQUUsUUFKRDtBQUtWQyxRQUFNLEVBQUUsQ0FMRTtBQU1WQyxVQUFRLEVBQUUsVUFOQTtBQU9WQyxRQUFNLEVBQUUsT0FQRTtBQVFWQyxTQUFPLEVBQUUsTUFSQztBQVNWQyxnQkFBYyxFQUFFO0FBVE4sQ0FBZDtBQVlPLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQUssQ0FBQ0csS0FBbEI7O0FBRDRCLGlCQUVRQyx5REFBTyxDQUFDO0FBQUEsV0FBTztBQUMvQ0MsWUFBTSxFQUFFQyxvREFBUyxDQUFDQyxJQUQ2QjtBQUUvQ0MsVUFBSSxFQUFFO0FBQUEsZUFBTztBQUFFQyxjQUFJLEVBQUU7QUFBUixTQUFQO0FBQUEsT0FGeUM7QUFHL0NDLGFBQU8sRUFBRSxpQkFBQ0MsT0FBRDtBQUFBLGVBQWM7QUFDbkJDLGdCQUFNLEVBQUVELE9BQU8sQ0FBQ0MsTUFBUixFQURXO0FBRW5CQyxpQkFBTyxFQUFFRixPQUFPLENBQUNFLE9BQVI7QUFGVSxTQUFkO0FBQUE7QUFIc0MsS0FBUDtBQUFBLEdBQUQsQ0FGZjtBQUFBO0FBQUE7QUFBQSxNQUVuQkEsT0FGbUIsY0FFbkJBLE9BRm1CO0FBQUEsTUFFVkQsTUFGVSxjQUVWQSxNQUZVO0FBQUEsTUFFQUosSUFGQTs7QUFVNUIsTUFBTU0sUUFBUSxHQUFHRCxPQUFPLElBQUlELE1BQTVCO0FBQ0EsTUFBSUcsZUFBZSxHQUFHLE1BQXRCOztBQUNBLE1BQUlELFFBQUosRUFBYztBQUNWQyxtQkFBZSxHQUFHLFdBQWxCO0FBQ0gsR0FGRCxNQUlLLElBQUlGLE9BQUosRUFBYTtBQUNkRSxtQkFBZSxHQUFHLFdBQWxCO0FBQ0g7O0FBRUQsU0FDSTtBQUFLLE9BQUcsRUFBRVAsSUFBVjtBQUFnQixRQUFJLEVBQUUsT0FBdEI7QUFBK0IsU0FBSyxrQ0FBT25CLEtBQVA7QUFBYzBCLHFCQUFlLEVBQWZBO0FBQWQsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQ1JDLFlBQU0sRUFBRSxNQURBO0FBRVJDLFNBQUcsRUFBRSxLQUZHO0FBR1JDLGVBQVMsRUFBRTtBQUhILEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtLbEIsS0FBSyxDQUFDRyxLQUFOLENBQVlnQixHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSxXQUFXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBWDtBQUFBLEdBQWhCLENBTEwsQ0FESixDQURKO0FBV1MsQ0EvQk47O0dBQU1yQixLO1VBRTJCSyxpRDs7O0tBRjNCTCxLO0FBaUNFQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMzU0NGYyMWQ4ZGM3YmEzNTg0MTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyb3AgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGhlaWdodDogJzI1MHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogJzE1MHB4JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IEZpZWxkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5jYXJkcylcclxuICAgIGNvbnN0IFt7IGNhbkRyb3AsIGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3AoKCkgPT4gKHtcclxuICAgICAgICBhY2NlcHQ6IEl0ZW1UeXBlcy5DQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6ICdGaWVsZCcgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGNhbkRyb3AgJiYgaXNPdmVyO1xyXG4gICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICcjMjIyJztcclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJrZ3JlZW4nO1xyXG4gICAgfVxyXG5cclxuICAgIGVsc2UgaWYgKGNhbkRyb3ApIHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSAnZGFya2toYWtpJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcm9wfSByb2xlPXsnRmllbGQnfSBzdHlsZT17eyAuLi5zdHlsZSwgYmFja2dyb3VuZENvbG9yIH19PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQpID0+ICg8ZGl2PnRlc3Q8L2Rpdj4pKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZCJdLCJzb3VyY2VSb290IjoiIn0=