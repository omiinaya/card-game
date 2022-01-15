webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/form/FormLogin.jsx":
/*!***************************************!*\
  !*** ./components/form/FormLogin.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Mr.X\\Desktop\\nextjs-sequelize\\components\\form\\FormLogin.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function FormLogin(_ref) {
  var props = _ref.props;
  var onSubmitHandler = props.onSubmitHandler,
      onChangeHandler = props.onChangeHandler,
      loading = props.loading,
      stateFormData = props.stateFormData,
      stateFormError = props.stateFormError,
      stateFormMessage = props.stateFormMessage;
  return __jsx("form", {
    className: "form-login card",
    method: "POST",
    onSubmit: onSubmitHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "Login"), __jsx("hr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), stateFormMessage.status === 'error' && __jsx("h4", {
    className: "warning text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, stateFormMessage.error)), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "username",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Username"), __jsx("input", {
    className: "form-control",
    type: "text",
    id: "username",
    name: "username",
    placeholder: "Username",
    onChange: onChangeHandler,
    readOnly: loading && true,
    value: stateFormData.username.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), stateFormError.username && __jsx("span", {
    className: "warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, stateFormError.username.hint)), __jsx("div", {
    className: "form-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("label", {
    htmlFor: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Password"), __jsx("input", {
    className: "form-control",
    type: "password",
    id: "password",
    name: "password",
    placeholder: "Password",
    onChange: onChangeHandler,
    readOnly: loading && true,
    value: stateFormData.username.password,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), stateFormError.password && __jsx("span", {
    className: "warning",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, stateFormError.password.hint)), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("button", {
    type: "submit",
    className: "btn btn-block btn-warning",
    disabled: loading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, !loading ? 'Login' : 'Loading...')));
}

_c = FormLogin;
/* harmony default export */ __webpack_exports__["default"] = (FormLogin);

var _c;

$RefreshReg$(_c, "FormLogin");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybUxvZ2luLmpzeCJdLCJuYW1lcyI6WyJGb3JtTG9naW4iLCJwcm9wcyIsIm9uU3VibWl0SGFuZGxlciIsIm9uQ2hhbmdlSGFuZGxlciIsImxvYWRpbmciLCJzdGF0ZUZvcm1EYXRhIiwic3RhdGVGb3JtRXJyb3IiLCJzdGF0ZUZvcm1NZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJ1c2VybmFtZSIsInZhbHVlIiwiaGludCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFNBQVQsT0FBOEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFBQSxNQUUxQkMsZUFGMEIsR0FReEJELEtBUndCLENBRTFCQyxlQUYwQjtBQUFBLE1BRzFCQyxlQUgwQixHQVF4QkYsS0FSd0IsQ0FHMUJFLGVBSDBCO0FBQUEsTUFJMUJDLE9BSjBCLEdBUXhCSCxLQVJ3QixDQUkxQkcsT0FKMEI7QUFBQSxNQUsxQkMsYUFMMEIsR0FReEJKLEtBUndCLENBSzFCSSxhQUwwQjtBQUFBLE1BTTFCQyxjQU4wQixHQVF4QkwsS0FSd0IsQ0FNMUJLLGNBTjBCO0FBQUEsTUFPMUJDLGdCQVAwQixHQVF4Qk4sS0FSd0IsQ0FPMUJNLGdCQVAwQjtBQVU1QixTQUNFO0FBQU0sYUFBUyxFQUFDLGlCQUFoQjtBQUFrQyxVQUFNLEVBQUMsTUFBekM7QUFBZ0QsWUFBUSxFQUFFTCxlQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0dLLGdCQUFnQixDQUFDQyxNQUFqQixLQUE0QixPQUE1QixJQUNDO0FBQUksYUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNELGdCQUFnQixDQUFDRSxLQUF0RCxDQUpKLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUNFLGFBQVMsRUFBQyxjQURaO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxNQUFFLEVBQUMsVUFITDtBQUlFLFFBQUksRUFBQyxVQUpQO0FBS0UsZUFBVyxFQUFDLFVBTGQ7QUFNRSxZQUFRLEVBQUVOLGVBTlo7QUFPRSxZQUFRLEVBQUVDLE9BQU8sSUFBSSxJQVB2QjtBQVFFLFNBQUssRUFBRUMsYUFBYSxDQUFDSyxRQUFkLENBQXVCQyxLQVJoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFZR0wsY0FBYyxDQUFDSSxRQUFmLElBQ0M7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQkosY0FBYyxDQUFDSSxRQUFmLENBQXdCRSxJQUFuRCxDQWJKLENBUkYsRUF3QkU7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsTUFBRSxFQUFDLFVBSEw7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUtFLGVBQVcsRUFBQyxVQUxkO0FBTUUsWUFBUSxFQUFFVCxlQU5aO0FBT0UsWUFBUSxFQUFFQyxPQUFPLElBQUksSUFQdkI7QUFRRSxTQUFLLEVBQUVDLGFBQWEsQ0FBQ0ssUUFBZCxDQUF1QkcsUUFSaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBWUdQLGNBQWMsQ0FBQ08sUUFBZixJQUNDO0FBQU0sYUFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkJQLGNBQWMsQ0FBQ08sUUFBZixDQUF3QkQsSUFBbkQsQ0FiSixDQXhCRixFQXdDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLGFBQVMsRUFBQywyQkFGWjtBQUdFLFlBQVEsRUFBRVIsT0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0csQ0FBQ0EsT0FBRCxHQUFXLE9BQVgsR0FBcUIsWUFMeEIsQ0FERixDQXhDRixDQURGO0FBb0REOztLQTlEUUosUztBQStETUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLjJmN2I4ZDVmODU2N2JmOTliYmMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBGb3JtTG9naW4oeyBwcm9wcyB9KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgb25TdWJtaXRIYW5kbGVyLFxyXG4gICAgb25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgbG9hZGluZyxcclxuICAgIHN0YXRlRm9ybURhdGEsXHJcbiAgICBzdGF0ZUZvcm1FcnJvcixcclxuICAgIHN0YXRlRm9ybU1lc3NhZ2UsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1sb2dpbiBjYXJkXCIgbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtvblN1Ym1pdEhhbmRsZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8aDI+TG9naW48L2gyPlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICAgIHtzdGF0ZUZvcm1NZXNzYWdlLnN0YXR1cyA9PT0gJ2Vycm9yJyAmJiAoXHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwid2FybmluZyB0ZXh0LWNlbnRlclwiPntzdGF0ZUZvcm1NZXNzYWdlLmVycm9yfTwvaDQ+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgcmVhZE9ubHk9e2xvYWRpbmcgJiYgdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtzdGF0ZUZvcm1EYXRhLnVzZXJuYW1lLnZhbHVlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3N0YXRlRm9ybUVycm9yLnVzZXJuYW1lICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhcm5pbmdcIj57c3RhdGVGb3JtRXJyb3IudXNlcm5hbWUuaGludH08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgIHJlYWRPbmx5PXtsb2FkaW5nICYmIHRydWV9XHJcbiAgICAgICAgICB2YWx1ZT17c3RhdGVGb3JtRGF0YS51c2VybmFtZS5wYXNzd29yZH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIHtzdGF0ZUZvcm1FcnJvci5wYXNzd29yZCAmJiAoXHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3YXJuaW5nXCI+e3N0YXRlRm9ybUVycm9yLnBhc3N3b3JkLmhpbnR9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4td2FybmluZ1wiXHJcbiAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IWxvYWRpbmcgPyAnTG9naW4nIDogJ0xvYWRpbmcuLi4nfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Mb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==