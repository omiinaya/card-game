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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


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

  var _useDrop = Object(react_dnd__WEBPACK_IMPORTED_MODULE_2__["useDrop"])(function () {
    return {
      accept: _ItemTypes__WEBPACK_IMPORTED_MODULE_3__["ItemTypes"].CARD,
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
      _useDrop2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useDrop, 2),
      _useDrop2$ = _useDrop2[0],
      canDrop = _useDrop2$.canDrop,
      isOver = _useDrop2$.isOver,
      drop = _useDrop2[1];

  var isActive = canDrop && isOver;

  if (isActive) {
    backgroundColor = 'darkgreen';
  }

  return __jsx("div", {
    ref: drop,
    role: 'Field',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, isActive ? __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 26
    }
  }, "Release to drop") : __jsx("button", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 13
    }
  }, "test"));
};

_s(Field, "F504N0wuFSbvI1XEbEwXUidFCiM=", false, function () {
  return [react_dnd__WEBPACK_IMPORTED_MODULE_2__["useDrop"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInpJbmRleCIsInBvc2l0aW9uIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiRmllbGQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjYXJkcyIsInVzZURyb3AiLCJhY2NlcHQiLCJJdGVtVHlwZXMiLCJDQVJEIiwiZHJvcCIsIm5hbWUiLCJjb2xsZWN0IiwibW9uaXRvciIsImlzT3ZlciIsImNhbkRyb3AiLCJpc0FjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDVkMsUUFBTSxFQUFFLE9BREU7QUFFVkMsT0FBSyxFQUFFLE1BRkc7QUFHVkMsT0FBSyxFQUFFLE9BSEc7QUFJVkMsV0FBUyxFQUFFLFFBSkQ7QUFLVkMsVUFBUSxFQUFFLE1BTEE7QUFNVkMsWUFBVSxFQUFFLFFBTkY7QUFPVkMsUUFBTSxFQUFFLENBUEU7QUFRVkMsVUFBUSxFQUFFLFVBUkE7QUFTVkMsUUFBTSxFQUFFLE9BVEU7QUFVVkMsaUJBQWUsRUFBRTtBQVZQLENBQWQ7QUFZTyxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDNUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLEtBQWxCOztBQUQ0QixpQkFFUUMseURBQU8sQ0FBQztBQUFBLFdBQU87QUFDL0NDLFlBQU0sRUFBRUMsb0RBQVMsQ0FBQ0MsSUFENkI7QUFFL0NDLFVBQUksRUFBRTtBQUFBLGVBQU87QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBUDtBQUFBLE9BRnlDO0FBRy9DQyxhQUFPLEVBQUUsaUJBQUNDLE9BQUQ7QUFBQSxlQUFjO0FBQ25CQyxnQkFBTSxFQUFFRCxPQUFPLENBQUNDLE1BQVIsRUFEVztBQUVuQkMsaUJBQU8sRUFBRUYsT0FBTyxDQUFDRSxPQUFSO0FBRlUsU0FBZDtBQUFBO0FBSHNDLEtBQVA7QUFBQSxHQUFELENBRmY7QUFBQTtBQUFBO0FBQUEsTUFFbkJBLE9BRm1CLGNBRW5CQSxPQUZtQjtBQUFBLE1BRVZELE1BRlUsY0FFVkEsTUFGVTtBQUFBLE1BRUFKLElBRkE7O0FBVTVCLE1BQU1NLFFBQVEsR0FBR0QsT0FBTyxJQUFJRCxNQUE1Qjs7QUFDQSxNQUFJRSxRQUFKLEVBQWM7QUFDVmhCLG1CQUFlLEdBQUcsV0FBbEI7QUFDSDs7QUFDRCxTQUNJO0FBQUssT0FBRyxFQUFFVSxJQUFWO0FBQWdCLFFBQUksRUFBRSxPQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tNLFFBQVEsR0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFKLEdBQXlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRHRELEVBRUk7QUFBSyxTQUFLLEVBQUU7QUFDUmxCLGNBQVEsRUFBRSxVQURGO0FBRVJDLFlBQU0sRUFBRSxDQUZBO0FBR1JMLGVBQVMsRUFBRSxRQUhIO0FBSVJGLFdBQUssRUFBRTtBQUpDLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLENBREo7QUFhSCxDQTNCTTs7R0FBTVMsSztVQUUyQkssaUQ7OztLQUYzQkwsSztBQTZCRUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjU4NmI2OTJmMWZkMDk2YmJiNzhiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6ICcyNTBweCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6ICcxcmVtJyxcclxuICAgIGxpbmVIZWlnaHQ6ICdub3JtYWwnLFxyXG4gICAgekluZGV4OiA1LFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206ICcxNTBweCcsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdkYXJra2hha2knXHJcbn1cclxuZXhwb3J0IGNvbnN0IEZpZWxkID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5jYXJkcylcclxuICAgIGNvbnN0IFt7IGNhbkRyb3AsIGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3AoKCkgPT4gKHtcclxuICAgICAgICBhY2NlcHQ6IEl0ZW1UeXBlcy5DQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6ICdGaWVsZCcgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGNhbkRyb3AgJiYgaXNPdmVyO1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcm9wfSByb2xlPXsnRmllbGQnfSA+XHJcbiAgICAgICAgICAgIHtpc0FjdGl2ZSA/ICg8YnV0dG9uPlJlbGVhc2UgdG8gZHJvcDwvYnV0dG9uPikgOiAoPGJ1dHRvbj5EcmFnIGEgYm94IGhlcmU8L2J1dHRvbj4pfVxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgdGVzdFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkIl0sInNvdXJjZVJvb3QiOiIifQ==