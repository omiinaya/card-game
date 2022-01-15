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
  }), stateFormError.email && __jsx("span", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Zvcm0vRm9ybUxvZ2luLmpzeCJdLCJuYW1lcyI6WyJGb3JtTG9naW4iLCJwcm9wcyIsIm9uU3VibWl0SGFuZGxlciIsIm9uQ2hhbmdlSGFuZGxlciIsImxvYWRpbmciLCJzdGF0ZUZvcm1EYXRhIiwic3RhdGVGb3JtRXJyb3IiLCJzdGF0ZUZvcm1NZXNzYWdlIiwic3RhdHVzIiwiZXJyb3IiLCJ1c2VybmFtZSIsInZhbHVlIiwiZW1haWwiLCJoaW50IiwicGFzc3dvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBVCxPQUE4QjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUFBLE1BRTFCQyxlQUYwQixHQVF4QkQsS0FSd0IsQ0FFMUJDLGVBRjBCO0FBQUEsTUFHMUJDLGVBSDBCLEdBUXhCRixLQVJ3QixDQUcxQkUsZUFIMEI7QUFBQSxNQUkxQkMsT0FKMEIsR0FReEJILEtBUndCLENBSTFCRyxPQUowQjtBQUFBLE1BSzFCQyxhQUwwQixHQVF4QkosS0FSd0IsQ0FLMUJJLGFBTDBCO0FBQUEsTUFNMUJDLGNBTjBCLEdBUXhCTCxLQVJ3QixDQU0xQkssY0FOMEI7QUFBQSxNQU8xQkMsZ0JBUDBCLEdBUXhCTixLQVJ3QixDQU8xQk0sZ0JBUDBCO0FBVTVCLFNBQ0U7QUFBTSxhQUFTLEVBQUMsaUJBQWhCO0FBQWtDLFVBQU0sRUFBQyxNQUF6QztBQUFnRCxZQUFRLEVBQUVMLGVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHR0ssZ0JBQWdCLENBQUNDLE1BQWpCLEtBQTRCLE9BQTVCLElBQ0M7QUFBSSxhQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQ0QsZ0JBQWdCLENBQUNFLEtBQXRELENBSkosQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQ0UsYUFBUyxFQUFDLGNBRFo7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLE1BQUUsRUFBQyxVQUhMO0FBSUUsUUFBSSxFQUFDLFVBSlA7QUFLRSxlQUFXLEVBQUMsVUFMZDtBQU1FLFlBQVEsRUFBRU4sZUFOWjtBQU9FLFlBQVEsRUFBRUMsT0FBTyxJQUFJLElBUHZCO0FBUUUsU0FBSyxFQUFFQyxhQUFhLENBQUNLLFFBQWQsQ0FBdUJDLEtBUmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQVlHTCxjQUFjLENBQUNNLEtBQWYsSUFDQztBQUFNLGFBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJCTixjQUFjLENBQUNJLFFBQWYsQ0FBd0JHLElBQW5ELENBYkosQ0FSRixFQXdCRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFdBQU8sRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUNFLGFBQVMsRUFBQyxjQURaO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxNQUFFLEVBQUMsVUFITDtBQUlFLFFBQUksRUFBQyxVQUpQO0FBS0UsZUFBVyxFQUFDLFVBTGQ7QUFNRSxZQUFRLEVBQUVWLGVBTlo7QUFPRSxZQUFRLEVBQUVDLE9BQU8sSUFBSSxJQVB2QjtBQVFFLFNBQUssRUFBRUMsYUFBYSxDQUFDSyxRQUFkLENBQXVCSSxRQVJoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFZR1IsY0FBYyxDQUFDUSxRQUFmLElBQ0M7QUFBTSxhQUFTLEVBQUMsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEyQlIsY0FBYyxDQUFDUSxRQUFmLENBQXdCRCxJQUFuRCxDQWJKLENBeEJGLEVBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFDLDJCQUZaO0FBR0UsWUFBUSxFQUFFVCxPQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRyxDQUFDQSxPQUFELEdBQVcsT0FBWCxHQUFxQixZQUx4QixDQURGLENBeENGLENBREY7QUFvREQ7O0tBOURRSixTO0FBK0RNQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbG9naW4uanMuYzUzNTVhMzU4Yjk5ODZkYjgwNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEZvcm1Mb2dpbih7IHByb3BzIH0pIHtcclxuICBjb25zdCB7XHJcbiAgICBvblN1Ym1pdEhhbmRsZXIsXHJcbiAgICBvbkNoYW5nZUhhbmRsZXIsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgc3RhdGVGb3JtRGF0YSxcclxuICAgIHN0YXRlRm9ybUVycm9yLFxyXG4gICAgc3RhdGVGb3JtTWVzc2FnZSxcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWxvZ2luIGNhcmRcIiBtZXRob2Q9XCJQT1NUXCIgb25TdWJtaXQ9e29uU3VibWl0SGFuZGxlcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxoMj5Mb2dpbjwvaDI+XHJcbiAgICAgICAgPGhyIC8+XHJcbiAgICAgICAge3N0YXRlRm9ybU1lc3NhZ2Uuc3RhdHVzID09PSAnZXJyb3InICYmIChcclxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ3YXJuaW5nIHRleHQtY2VudGVyXCI+e3N0YXRlRm9ybU1lc3NhZ2UuZXJyb3J9PC9oND5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBpZD1cInVzZXJuYW1lXCJcclxuICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICByZWFkT25seT17bG9hZGluZyAmJiB0cnVlfVxyXG4gICAgICAgICAgdmFsdWU9e3N0YXRlRm9ybURhdGEudXNlcm5hbWUudmFsdWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7c3RhdGVGb3JtRXJyb3IuZW1haWwgJiYgKFxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid2FybmluZ1wiPntzdGF0ZUZvcm1FcnJvci51c2VybmFtZS5oaW50fTwvc3Bhbj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgcmVhZE9ubHk9e2xvYWRpbmcgJiYgdHJ1ZX1cclxuICAgICAgICAgIHZhbHVlPXtzdGF0ZUZvcm1EYXRhLnVzZXJuYW1lLnBhc3N3b3JkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge3N0YXRlRm9ybUVycm9yLnBhc3N3b3JkICYmIChcclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndhcm5pbmdcIj57c3RhdGVGb3JtRXJyb3IucGFzc3dvcmQuaGludH08L3NwYW4+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi13YXJuaW5nXCJcclxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHshbG9hZGluZyA/ICdMb2dpbicgOiAnTG9hZGluZy4uLid9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRm9ybUxvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9