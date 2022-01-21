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
  backgroundColor: '#222'
};
var Field = function Field() {
  _s();

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
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
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
  }, isActive ? 'Release to drop' : 'Drag a box here');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGQuanN4Il0sIm5hbWVzIjpbInN0eWxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJjb2xvciIsInRleHRBbGlnbiIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInpJbmRleCIsImJhY2tncm91bmRDb2xvciIsIkZpZWxkIiwidXNlRHJvcCIsImFjY2VwdCIsIkl0ZW1UeXBlcyIsIkNBUkQiLCJkcm9wIiwibmFtZSIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNPdmVyIiwiY2FuRHJvcCIsImlzQWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBRztBQUNWQyxRQUFNLEVBQUUsT0FERTtBQUVWQyxPQUFLLEVBQUUsTUFGRztBQUdWQyxPQUFLLEVBQUUsT0FIRztBQUlWQyxXQUFTLEVBQUUsUUFKRDtBQUtWQyxVQUFRLEVBQUUsTUFMQTtBQU1WQyxZQUFVLEVBQUUsUUFORjtBQU9WQyxRQUFNLEVBQUUsQ0FQRTtBQVFWQyxpQkFBZSxFQUFFO0FBUlAsQ0FBZDtBQVVPLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQSxpQkFDYUMseURBQU8sQ0FBQztBQUFBLFdBQU87QUFDL0NDLFlBQU0sRUFBRUMsb0RBQVMsQ0FBQ0MsSUFENkI7QUFFL0NDLFVBQUksRUFBRTtBQUFBLGVBQU87QUFBRUMsY0FBSSxFQUFFO0FBQVIsU0FBUDtBQUFBLE9BRnlDO0FBRy9DQyxhQUFPLEVBQUUsaUJBQUNDLE9BQUQ7QUFBQSxlQUFjO0FBQ25CQyxnQkFBTSxFQUFFRCxPQUFPLENBQUNDLE1BQVIsRUFEVztBQUVuQkMsaUJBQU8sRUFBRUYsT0FBTyxDQUFDRSxPQUFSO0FBRlUsU0FBZDtBQUFBO0FBSHNDLEtBQVA7QUFBQSxHQUFELENBRHBCO0FBQUE7QUFBQTtBQUFBLE1BQ2RBLE9BRGMsY0FDZEEsT0FEYztBQUFBLE1BQ0xELE1BREssY0FDTEEsTUFESztBQUFBLE1BQ0tKLElBREw7O0FBU3ZCLE1BQU1NLFFBQVEsR0FBR0QsT0FBTyxJQUFJRCxNQUE1Qjs7QUFDQSxNQUFJRSxRQUFKLEVBQWM7QUFDVlosbUJBQWUsR0FBRyxXQUFsQjtBQUNILEdBRkQsTUFHSyxJQUFJVyxPQUFKLEVBQWE7QUFDZFgsbUJBQWUsR0FBRyxXQUFsQjtBQUNIOztBQUNELFNBQ0k7QUFBSyxPQUFHLEVBQUVNLElBQVY7QUFBZ0IsUUFBSSxFQUFFLE9BQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS00sUUFBUSxHQUFHLGlCQUFILEdBQXVCLGlCQURwQyxDQURKO0FBS0gsQ0FyQk07O0dBQU1YLEs7VUFDMkJDLGlEOzs7S0FEM0JELEs7QUF1QkVBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4zNTk1YjcwMzMwNjYxYTdkODdjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlcyB9IGZyb20gJy4vSXRlbVR5cGVzJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMXJlbScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnbm9ybWFsJyxcclxuICAgIHpJbmRleDogNSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjInLFxyXG59O1xyXG5leHBvcnQgY29uc3QgRmllbGQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbeyBjYW5Ecm9wLCBpc092ZXIgfSwgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XHJcbiAgICAgICAgYWNjZXB0OiBJdGVtVHlwZXMuQ0FSRCxcclxuICAgICAgICBkcm9wOiAoKSA9PiAoeyBuYW1lOiAnRmllbGQnIH0pLFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc092ZXI6IG1vbml0b3IuaXNPdmVyKCksXHJcbiAgICAgICAgICAgIGNhbkRyb3A6IG1vbml0b3IuY2FuRHJvcCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjYW5Ecm9wICYmIGlzT3ZlcjtcclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJrZ3JlZW4nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17ZHJvcH0gcm9sZT17J0ZpZWxkJ30+XHJcbiAgICAgICAgICAgIHtpc0FjdGl2ZSA/ICdSZWxlYXNlIHRvIGRyb3AnIDogJ0RyYWcgYSBib3ggaGVyZSd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWVsZCJdLCJzb3VyY2VSb290IjoiIn0=