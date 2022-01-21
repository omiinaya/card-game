webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Field.jsx":
/*!***********************************!*\
  !*** ./components/game/Field.jsx ***!
  \***********************************/
/*! exports provided: Field */
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
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  "float": 'left',
  zIndex: 5
};
var Field = function Field() {
  _s();

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
      lineNumber: 35,
      columnNumber: 9
    }
  }, isActive ? 'Release to drop' : 'Drag a box here');
};

_s(Field, "F504N0wuFSbvI1XEbEwXUidFCiM=", false, function () {
  return [react_dnd__WEBPACK_IMPORTED_MODULE_3__["useDrop"]];
});

_c = Field;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwicGFkZGluZyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInpJbmRleCIsIkZpZWxkIiwidXNlRHJvcCIsImFjY2VwdCIsIkl0ZW1UeXBlcyIsIkNBUkQiLCJkcm9wIiwibmFtZSIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNPdmVyIiwiY2FuRHJvcCIsImlzQWN0aXZlIiwiYmFja2dyb3VuZENvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDVkMsUUFBTSxFQUFFLE9BREU7QUFFVkMsT0FBSyxFQUFFLE1BRkc7QUFHVkMsYUFBVyxFQUFFLFFBSEg7QUFJVkMsY0FBWSxFQUFFLFFBSko7QUFLVkMsT0FBSyxFQUFFLE9BTEc7QUFNVkMsU0FBTyxFQUFFLE1BTkM7QUFPVkMsV0FBUyxFQUFFLFFBUEQ7QUFRVkMsVUFBUSxFQUFFLE1BUkE7QUFTVkMsWUFBVSxFQUFFLFFBVEY7QUFVVixXQUFPLE1BVkc7QUFXVkMsUUFBTSxFQUFFO0FBWEUsQ0FBZDtBQWFPLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxpQkFDYUMseURBQU8sQ0FBQztBQUFBLFdBQU87QUFDL0NDLFlBQU0sRUFBRUMsb0RBQVMsQ0FBQ0MsSUFENkI7QUFFL0NDLFVBQUksRUFBRTtBQUFBLGVBQU87QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBUDtBQUFBLE9BRnlDO0FBRy9DQyxhQUFPLEVBQUUsaUJBQUNDLE9BQUQ7QUFBQSxlQUFjO0FBQ25CQyxnQkFBTSxFQUFFRCxPQUFPLENBQUNDLE1BQVIsRUFEVztBQUVuQkMsaUJBQU8sRUFBRUYsT0FBTyxDQUFDRSxPQUFSO0FBRlUsU0FBZDtBQUFBO0FBSHNDLEtBQVA7QUFBQSxHQUFELENBRHBCO0FBQUE7QUFBQTtBQUFBLE1BQ2RBLE9BRGMsY0FDZEEsT0FEYztBQUFBLE1BQ0xELE1BREssY0FDTEEsTUFESztBQUFBLE1BQ0tKLElBREw7O0FBU3ZCLE1BQU1NLFFBQVEsR0FBR0QsT0FBTyxJQUFJRCxNQUE1QjtBQUNBLE1BQUlHLGVBQWUsR0FBRyxNQUF0Qjs7QUFDQSxNQUFJRCxRQUFKLEVBQWM7QUFDVkMsbUJBQWUsR0FBRyxXQUFsQjtBQUNILEdBRkQsTUFHSyxJQUFJRixPQUFKLEVBQWE7QUFDZEUsbUJBQWUsR0FBRyxXQUFsQjtBQUNIOztBQUNELFNBQ0k7QUFBSyxPQUFHLEVBQUVQLElBQVY7QUFBZ0IsUUFBSSxFQUFFLE9BQXRCO0FBQStCLFNBQUssa0NBQU9oQixLQUFQO0FBQWN1QixxQkFBZSxFQUFmQTtBQUFkLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0QsUUFBUSxHQUFHLGlCQUFILEdBQXVCLGlCQURwQyxDQURKO0FBS0gsQ0F0Qk07O0dBQU1YLEs7VUFDMkJDLGlEOzs7S0FEM0JELEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjExZmQ4MWZiNDFlYWRiMDljYzUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6ICcyNTBweCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICcxLjVyZW0nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMS41cmVtJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICB6SW5kZXg6IDVcclxufTtcclxuZXhwb3J0IGNvbnN0IEZpZWxkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3sgY2FuRHJvcCwgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgICAgIGFjY2VwdDogSXRlbVR5cGVzLkNBUkQsXHJcbiAgICAgICAgZHJvcDogKCkgPT4gKHsgbmFtZTogJ0ZpZWxkJyB9KSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgICAgICAgICBjYW5Ecm9wOiBtb25pdG9yLmNhbkRyb3AoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gY2FuRHJvcCAmJiBpc092ZXI7XHJcbiAgICBsZXQgYmFja2dyb3VuZENvbG9yID0gJyMyMjInO1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjYW5Ecm9wKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtraGFraSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcm9wfSByb2xlPXsnRmllbGQnfSBzdHlsZT17eyAuLi5zdHlsZSwgYmFja2dyb3VuZENvbG9yIH19PlxyXG4gICAgICAgICAgICB7aXNBY3RpdmUgPyAnUmVsZWFzZSB0byBkcm9wJyA6ICdEcmFnIGEgYm94IGhlcmUnfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==