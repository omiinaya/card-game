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
  fontSize: '1rem',
  lineHeight: 'normal',
  zIndex: 5,
  position: 'absolute',
  bottom: '150px',
  backgroundColor: 'darkkhaki'
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
      lineNumber: 32,
      columnNumber: 9
    }
  }, isActive ? __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 26
    }
  }, "Release to drop") : __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 63
    }
  }, "Drag a box here"), __jsx("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      textAlign: 'center',
      width: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, "test"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInpJbmRleCIsInBvc2l0aW9uIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiRmllbGQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjYXJkcyIsInVzZURyb3AiLCJhY2NlcHQiLCJJdGVtVHlwZXMiLCJDQVJEIiwiZHJvcCIsIm5hbWUiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJpc0FjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHO0FBQ1ZDLFFBQU0sRUFBRSxPQURFO0FBRVZDLE9BQUssRUFBRSxNQUZHO0FBR1ZDLE9BQUssRUFBRSxPQUhHO0FBSVZDLFdBQVMsRUFBRSxRQUpEO0FBS1ZDLFVBQVEsRUFBRSxNQUxBO0FBTVZDLFlBQVUsRUFBRSxRQU5GO0FBT1ZDLFFBQU0sRUFBRSxDQVBFO0FBUVZDLFVBQVEsRUFBRSxVQVJBO0FBU1ZDLFFBQU0sRUFBRSxPQVRFO0FBVVZDLGlCQUFlLEVBQUU7QUFWUCxDQUFkO0FBWU8sSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxLQUFsQjs7QUFENEIsaUJBRVFDLHlEQUFPLENBQUM7QUFBQSxXQUFPO0FBQy9DQyxZQUFNLEVBQUVDLG9EQUFTLENBQUNDLElBRDZCO0FBRS9DQyxVQUFJLEVBQUU7QUFBQSxlQUFPO0FBQUVDLGNBQUksRUFBRTtBQUFSLFNBQVA7QUFBQSxPQUZ5QztBQUcvQ0MsYUFBTyxFQUFFLGlCQUFDQyxPQUFEO0FBQUEsZUFBYztBQUNuQkMsZ0JBQU0sRUFBRUQsT0FBTyxDQUFDQyxNQUFSLEVBRFc7QUFFbkJDLGlCQUFPLEVBQUVGLE9BQU8sQ0FBQ0UsT0FBUjtBQUZVLFNBQWQ7QUFBQTtBQUhzQyxLQUFQO0FBQUEsR0FBRCxDQUZmO0FBQUE7QUFBQTtBQUFBLE1BRW5CQSxPQUZtQixjQUVuQkEsT0FGbUI7QUFBQSxNQUVWRCxNQUZVLGNBRVZBLE1BRlU7QUFBQSxNQUVBSixJQUZBOztBQVU1QixNQUFNTSxRQUFRLEdBQUdELE9BQU8sSUFBSUQsTUFBNUI7QUFDQSxNQUFJZCxlQUFlLEdBQUcsTUFBdEI7O0FBQ0EsTUFBSWdCLFFBQUosRUFBYztBQUNWaEIsbUJBQWUsR0FBRyxXQUFsQjtBQUNIOztBQUNELFNBQ0k7QUFBSyxPQUFHLEVBQUVVLElBQVY7QUFBZ0IsUUFBSSxFQUFFLE9BQXRCO0FBQStCLFNBQUssa0NBQU9wQixLQUFQO0FBQWNVLHFCQUFlLEVBQWZBO0FBQWQsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLZ0IsUUFBUSxHQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQUosR0FBeUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEdEQsRUFFSTtBQUFLLFNBQUssRUFBRTtBQUNSbEIsY0FBUSxFQUFFLFVBREY7QUFFUkMsWUFBTSxFQUFFLENBRkE7QUFHUkwsZUFBUyxFQUFFLFFBSEg7QUFJUkYsV0FBSyxFQUFFO0FBSkMsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosQ0FESjtBQWFILENBNUJNOztHQUFNUyxLO1VBRTJCSyxpRDs7O0tBRjNCTCxLO0FBOEJFQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTFjODZjZmE2NDQxNDdiMmEyZjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURyb3AgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGhlaWdodDogJzI1MHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXHJcbiAgICB6SW5kZXg6IDUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogJzE1MHB4JyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ2RhcmtraGFraSdcclxufVxyXG5leHBvcnQgY29uc3QgRmllbGQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmNhcmRzKVxyXG4gICAgY29uc3QgW3sgY2FuRHJvcCwgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgICAgIGFjY2VwdDogSXRlbVR5cGVzLkNBUkQsXHJcbiAgICAgICAgZHJvcDogKCkgPT4gKHsgbmFtZTogJ0ZpZWxkJyB9KSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgICAgICAgICBjYW5Ecm9wOiBtb25pdG9yLmNhbkRyb3AoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gY2FuRHJvcCAmJiBpc092ZXI7XHJcbiAgICBsZXQgYmFja2dyb3VuZENvbG9yID0gJyMyMjInO1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcm9wfSByb2xlPXsnRmllbGQnfSBzdHlsZT17eyAuLi5zdHlsZSwgYmFja2dyb3VuZENvbG9yIH19PlxyXG4gICAgICAgICAgICB7aXNBY3RpdmUgPyAoPGJ1dHRvbj5SZWxlYXNlIHRvIGRyb3A8L2J1dHRvbj4pIDogKDxidXR0b24+RHJhZyBhIGJveCBoZXJlPC9idXR0b24+KX1cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgICAgICBib3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHRlc3RcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZCJdLCJzb3VyY2VSb290IjoiIn0=