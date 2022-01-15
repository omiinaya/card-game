webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/form/FormLogin */ "./components/form/FormLogin.jsx");




var _jsxFileName = "C:\\Users\\Mr.X\\Desktop\\nextjs-sequelize\\pages\\login.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





/* utils */


var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,2|3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* login schemas */

var FORM_DATA_LOGIN = {
  email: {
    value: '',
    label: 'Email',
    min: 10,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid email'
    }
  },
  password: {
    value: '',
    label: 'Password',
    min: 6,
    max: 36,
    required: true,
    validator: {
      regEx: /^[a-z\sA-Z0-9\W\w]+$/,
      error: 'Please insert valid password'
    }
  }
};

function Login(props) {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var origin = props.origin,
      referer = props.referer,
      baseApiUrl = props.baseApiUrl;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(FORM_DATA_LOGIN),
      stateFormData = _useState2[0],
      setStateFormData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      stateFormError = _useState3[0],
      setStateFormError = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      stateFormValid = _useState4[0],
      setStateFormValid = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({}),
      stateFormMessage = _useState5[0],
      setStateFormMessage = _useState5[1];

  function onChangeHandler(e) {
    var _e$currentTarget = e.currentTarget,
        name = _e$currentTarget.name,
        value = _e$currentTarget.value;
    setStateFormData(_objectSpread(_objectSpread({}, stateFormData), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, name, _objectSpread(_objectSpread({}, stateFormData[name]), {}, {
      value: value
    }))));
    /* validation handler */

    validationHandler(stateFormData, e);
  }

  function onSubmitHandler(_x) {
    return _onSubmitHandler.apply(this, arguments);
  }

  function _onSubmitHandler() {
    _onSubmitHandler = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var data, isValid, loginApi, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              data = _objectSpread({}, stateFormData);
              /* email */

              data = _objectSpread(_objectSpread({}, data), {}, {
                username: data.username.value || ''
              });
              data = _objectSpread(_objectSpread({}, data), {}, {
                email: data.email.value || ''
              });
              /* password */

              data = _objectSpread(_objectSpread({}, data), {}, {
                password: data.password.value || ''
              });
              /* validation handler */

              isValid = validationHandler(stateFormData);

              if (!isValid) {
                _context.next = 16;
                break;
              }

              // Call an external API endpoint to get posts.
              // You can use any data fetching library
              setLoading(!loading);
              _context.next = 10;
              return fetch("".concat(baseApiUrl, "/auth"), {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })["catch"](function (error) {
                console.error('Error:', error);
              });

            case 10:
              loginApi = _context.sent;
              _context.next = 13;
              return loginApi.json();

            case 13:
              result = _context.sent;

              if (result.success && result.token) {
                js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', result.token); // window.location.href = referer ? referer : "/";
                // const pathUrl = referer ? referer.lastIndexOf("/") : "/";

                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
              } else {
                setStateFormMessage(result);
              }

              setLoading(false);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _onSubmitHandler.apply(this, arguments);
  }

  function validationHandler(states, e) {
    var input = e && e.target.name || '';
    var errors = [];
    var isValid = true;

    if (input) {
      if (states[input].required) {
        if (!states[input].value) {
          errors[input] = {
            hint: "".concat(states[e.target.name].label, " required"),
            isInvalid: true
          };
          isValid = false;
        }
      }

      if (states[input].value && states[input].min > states[input].value.length) {
        errors[input] = {
          hint: "Field ".concat(states[input].label, " min ").concat(states[input].min),
          isInvalid: true
        };
        isValid = false;
      }

      if (states[input].value && states[input].max < states[input].value.length) {
        errors[input] = {
          hint: "Field ".concat(states[input].label, " max ").concat(states[input].max),
          isInvalid: true
        };
        isValid = false;
      }

      if (states[input].validator !== null && typeof states[input].validator === 'object') {
        if (states[input].value && !states[input].validator.regEx.test(states[input].value)) {
          errors[input] = {
            hint: states[input].validator.error,
            isInvalid: true
          };
          isValid = false;
        }
      }
    } else {
      Object.entries(states).forEach(function (item) {
        item.forEach(function (field) {
          errors[item[0]] = '';

          if (field.required) {
            if (!field.value) {
              errors[item[0]] = {
                hint: "".concat(field.label, " required"),
                isInvalid: true
              };
              isValid = false;
            }
          }

          if (field.value && field.min >= field.value.length) {
            errors[item[0]] = {
              hint: "Field ".concat(field.label, " min ").concat(field.min),
              isInvalid: true
            };
            isValid = false;
          }

          if (field.value && field.max <= field.value.length) {
            errors[item[0]] = {
              hint: "Field ".concat(field.label, " max ").concat(field.max),
              isInvalid: true
            };
            isValid = false;
          }

          if (field.validator !== null && typeof field.validator === 'object') {
            if (field.value && !field.validator.regEx.test(field.value)) {
              errors[item[0]] = {
                hint: field.validator.error,
                isInvalid: true
              };
              isValid = false;
            }
          }
        });
      });
    }

    if (isValid) {
      setStateFormValid(isValid);
    }

    setStateFormError(_objectSpread({}, errors));
    return isValid;
  }

  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "content-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: {
      pathname: '/'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 11
    }
  }, "\u2190 Back")), __jsx(_components_form_FormLogin__WEBPACK_IMPORTED_MODULE_7__["default"], {
    props: {
      onSubmitHandler: onSubmitHandler,
      onChangeHandler: onChangeHandler,
      loading: loading,
      stateFormData: stateFormData,
      stateFormError: stateFormError,
      stateFormMessage: stateFormMessage
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 9
    }
  })));
}
/* getServerSideProps */


_s(Login, "H74yycDbrUKBie4ozDraexj/joM=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = Login;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJlbWFpbFJlZ0V4IiwiRk9STV9EQVRBX0xPR0lOIiwiZW1haWwiLCJ2YWx1ZSIsImxhYmVsIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJyZWdFeCIsImVycm9yIiwicGFzc3dvcmQiLCJMb2dpbiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwib3JpZ2luIiwicmVmZXJlciIsImJhc2VBcGlVcmwiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdGVGb3JtRGF0YSIsInNldFN0YXRlRm9ybURhdGEiLCJzdGF0ZUZvcm1FcnJvciIsInNldFN0YXRlRm9ybUVycm9yIiwic3RhdGVGb3JtVmFsaWQiLCJzZXRTdGF0ZUZvcm1WYWxpZCIsInN0YXRlRm9ybU1lc3NhZ2UiLCJzZXRTdGF0ZUZvcm1NZXNzYWdlIiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsaWRhdGlvbkhhbmRsZXIiLCJvblN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJ1c2VybmFtZSIsImlzVmFsaWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2dpbkFwaSIsImpzb24iLCJyZXN1bHQiLCJzdWNjZXNzIiwidG9rZW4iLCJDb29raWVzIiwic2V0IiwiUm91dGVyIiwicHVzaCIsInN0YXRlcyIsImlucHV0IiwidGFyZ2V0IiwiZXJyb3JzIiwiaGludCIsImlzSW52YWxpZCIsImxlbmd0aCIsInRlc3QiLCJPYmplY3QiLCJlbnRyaWVzIiwiZm9yRWFjaCIsIml0ZW0iLCJmaWVsZCIsInBhdGhuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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RE47QUFFaEJvRCx5QkFBUyxFQUFFO0FBRkssZUFBbEI7QUFJQXZCLHFCQUFPLEdBQUcsS0FBVjtBQUNEO0FBQ0Y7QUFDRixTQWxDRDtBQW1DRCxPQXBDRDtBQXFDRDs7QUFDRCxRQUFJQSxPQUFKLEVBQWE7QUFDWFosdUJBQWlCLENBQUNZLE9BQUQsQ0FBakI7QUFDRDs7QUFDRGQscUJBQWlCLG1CQUNabUMsTUFEWSxFQUFqQjtBQUdBLFdBQU9yQixPQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxnQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFDRSxRQUFJLEVBQUU7QUFDSitCLGNBQVEsRUFBRTtBQUROLEtBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsQ0FERixFQVFFLE1BQUMsa0VBQUQ7QUFDRSxTQUFLLEVBQUU7QUFDTG5DLHFCQUFlLEVBQWZBLGVBREs7QUFFTEwscUJBQWUsRUFBZkEsZUFGSztBQUdMVixhQUFPLEVBQVBBLE9BSEs7QUFJTEUsbUJBQWEsRUFBYkEsYUFKSztBQUtMRSxvQkFBYyxFQUFkQSxjQUxLO0FBTUxJLHNCQUFnQixFQUFoQkE7QUFOSyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQURGLENBREY7QUF1QkQ7QUFFRDs7O0dBL0xTaEIsSztVQUNRRyxxRDs7O0tBRFJILEs7O0FBZ05NQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcbG9naW4uanMuYjIxNGRhYTMyODg2ZDk1ODc5ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbi8qIHV0aWxzICovXHJcbmltcG9ydCB7IGFic29sdXRlVXJsIH0gZnJvbSAnLi4vbWlkZGxld2FyZS91dGlscyc7XHJcblxyXG5pbXBvcnQgRm9ybUxvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvZm9ybS9Gb3JtTG9naW4nO1xyXG5cclxuY29uc3QgZW1haWxSZWdFeCA9IC9eKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwyfDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuXHJcbi8qIGxvZ2luIHNjaGVtYXMgKi9cclxuY29uc3QgRk9STV9EQVRBX0xPR0lOID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICB2YWx1ZTogJycsXHJcbiAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgIG1pbjogMTAsXHJcbiAgICBtYXg6IDM2LFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgcmVnRXg6IC9eW2Etelxcc0EtWjAtOVxcV1xcd10rJC8sXHJcbiAgICAgIGVycm9yOiAnUGxlYXNlIGluc2VydCB2YWxpZCBlbWFpbCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxyXG4gICAgbWluOiA2LFxyXG4gICAgbWF4OiAzNixcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgIHJlZ0V4OiAvXlthLXpcXHNBLVowLTlcXFdcXHddKyQvLFxyXG4gICAgICBlcnJvcjogJ1BsZWFzZSBpbnNlcnQgdmFsaWQgcGFzc3dvcmQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBvcmlnaW4sIHJlZmVyZXIsIGJhc2VBcGlVcmwgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3N0YXRlRm9ybURhdGEsIHNldFN0YXRlRm9ybURhdGFdID0gdXNlU3RhdGUoRk9STV9EQVRBX0xPR0lOKTtcclxuICBjb25zdCBbc3RhdGVGb3JtRXJyb3IsIHNldFN0YXRlRm9ybUVycm9yXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdGVGb3JtVmFsaWQsIHNldFN0YXRlRm9ybVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RhdGVGb3JtTWVzc2FnZSwgc2V0U3RhdGVGb3JtTWVzc2FnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgc2V0U3RhdGVGb3JtRGF0YSh7XHJcbiAgICAgIC4uLnN0YXRlRm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXToge1xyXG4gICAgICAgIC4uLnN0YXRlRm9ybURhdGFbbmFtZV0sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiB2YWxpZGF0aW9uIGhhbmRsZXIgKi9cclxuICAgIHZhbGlkYXRpb25IYW5kbGVyKHN0YXRlRm9ybURhdGEsIGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHsgLi4uc3RhdGVGb3JtRGF0YSB9O1xyXG5cclxuICAgIC8qIGVtYWlsICovXHJcbiAgICBkYXRhID0geyAuLi5kYXRhLCB1c2VybmFtZTogZGF0YS51c2VybmFtZS52YWx1ZSB8fCAnJyB9O1xyXG5cclxuICAgIGRhdGEgPSB7IC4uLmRhdGEsIGVtYWlsOiBkYXRhLmVtYWlsLnZhbHVlIHx8ICcnIH07XHJcbiAgICAvKiBwYXNzd29yZCAqL1xyXG4gICAgZGF0YSA9IHsgLi4uZGF0YSwgcGFzc3dvcmQ6IGRhdGEucGFzc3dvcmQudmFsdWUgfHwgJycgfTtcclxuXHJcbiAgICAvKiB2YWxpZGF0aW9uIGhhbmRsZXIgKi9cclxuICAgIGNvbnN0IGlzVmFsaWQgPSB2YWxpZGF0aW9uSGFuZGxlcihzdGF0ZUZvcm1EYXRhKTtcclxuXHJcbiAgICBpZiAoaXNWYWxpZCkge1xyXG4gICAgICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHMuXHJcbiAgICAgIC8vIFlvdSBjYW4gdXNlIGFueSBkYXRhIGZldGNoaW5nIGxpYnJhcnlcclxuICAgICAgc2V0TG9hZGluZyghbG9hZGluZyk7XHJcbiAgICAgIGNvbnN0IGxvZ2luQXBpID0gYXdhaXQgZmV0Y2goYCR7YmFzZUFwaVVybH0vYXV0aGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcclxuICAgICAgfSkuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBsb2dpbkFwaS5qc29uKCk7XHJcbiAgICAgIGlmIChyZXN1bHQuc3VjY2VzcyAmJiByZXN1bHQudG9rZW4pIHtcclxuICAgICAgICBDb29raWVzLnNldCgndG9rZW4nLCByZXN1bHQudG9rZW4pO1xyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmVmZXJlciA/IHJlZmVyZXIgOiBcIi9cIjtcclxuICAgICAgICAvLyBjb25zdCBwYXRoVXJsID0gcmVmZXJlciA/IHJlZmVyZXIubGFzdEluZGV4T2YoXCIvXCIpIDogXCIvXCI7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTdGF0ZUZvcm1NZXNzYWdlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiB2YWxpZGF0aW9uSGFuZGxlcihzdGF0ZXMsIGUpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gKGUgJiYgZS50YXJnZXQubmFtZSkgfHwgJyc7XHJcbiAgICBjb25zdCBlcnJvcnMgPSBbXTtcclxuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgaWYgKHN0YXRlc1tpbnB1dF0ucmVxdWlyZWQpIHtcclxuICAgICAgICBpZiAoIXN0YXRlc1tpbnB1dF0udmFsdWUpIHtcclxuICAgICAgICAgIGVycm9yc1tpbnB1dF0gPSB7XHJcbiAgICAgICAgICAgIGhpbnQ6IGAke3N0YXRlc1tlLnRhcmdldC5uYW1lXS5sYWJlbH0gcmVxdWlyZWRgLFxyXG4gICAgICAgICAgICBpc0ludmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc3RhdGVzW2lucHV0XS52YWx1ZSAmJlxyXG4gICAgICAgIHN0YXRlc1tpbnB1dF0ubWluID4gc3RhdGVzW2lucHV0XS52YWx1ZS5sZW5ndGhcclxuICAgICAgKSB7XHJcbiAgICAgICAgZXJyb3JzW2lucHV0XSA9IHtcclxuICAgICAgICAgIGhpbnQ6IGBGaWVsZCAke3N0YXRlc1tpbnB1dF0ubGFiZWx9IG1pbiAke3N0YXRlc1tpbnB1dF0ubWlufWAsXHJcbiAgICAgICAgICBpc0ludmFsaWQ6IHRydWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXRlc1tpbnB1dF0udmFsdWUgJiZcclxuICAgICAgICBzdGF0ZXNbaW5wdXRdLm1heCA8IHN0YXRlc1tpbnB1dF0udmFsdWUubGVuZ3RoXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVycm9yc1tpbnB1dF0gPSB7XHJcbiAgICAgICAgICBoaW50OiBgRmllbGQgJHtzdGF0ZXNbaW5wdXRdLmxhYmVsfSBtYXggJHtzdGF0ZXNbaW5wdXRdLm1heH1gLFxyXG4gICAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGF0ZXNbaW5wdXRdLnZhbGlkYXRvciAhPT0gbnVsbCAmJlxyXG4gICAgICAgIHR5cGVvZiBzdGF0ZXNbaW5wdXRdLnZhbGlkYXRvciA9PT0gJ29iamVjdCdcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgc3RhdGVzW2lucHV0XS52YWx1ZSAmJlxyXG4gICAgICAgICAgIXN0YXRlc1tpbnB1dF0udmFsaWRhdG9yLnJlZ0V4LnRlc3Qoc3RhdGVzW2lucHV0XS52YWx1ZSlcclxuICAgICAgICApIHtcclxuICAgICAgICAgIGVycm9yc1tpbnB1dF0gPSB7XHJcbiAgICAgICAgICAgIGhpbnQ6IHN0YXRlc1tpbnB1dF0udmFsaWRhdG9yLmVycm9yLFxyXG4gICAgICAgICAgICBpc0ludmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgT2JqZWN0LmVudHJpZXMoc3RhdGVzKS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgIGl0ZW0uZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICBlcnJvcnNbaXRlbVswXV0gPSAnJztcclxuICAgICAgICAgIGlmIChmaWVsZC5yZXF1aXJlZCkge1xyXG4gICAgICAgICAgICBpZiAoIWZpZWxkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3JzW2l0ZW1bMF1dID0ge1xyXG4gICAgICAgICAgICAgICAgaGludDogYCR7ZmllbGQubGFiZWx9IHJlcXVpcmVkYCxcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGZpZWxkLnZhbHVlICYmIGZpZWxkLm1pbiA+PSBmaWVsZC52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZXJyb3JzW2l0ZW1bMF1dID0ge1xyXG4gICAgICAgICAgICAgIGhpbnQ6IGBGaWVsZCAke2ZpZWxkLmxhYmVsfSBtaW4gJHtmaWVsZC5taW59YCxcclxuICAgICAgICAgICAgICBpc0ludmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSAmJiBmaWVsZC5tYXggPD0gZmllbGQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtWzBdXSA9IHtcclxuICAgICAgICAgICAgICBoaW50OiBgRmllbGQgJHtmaWVsZC5sYWJlbH0gbWF4ICR7ZmllbGQubWF4fWAsXHJcbiAgICAgICAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZmllbGQudmFsaWRhdG9yICE9PSBudWxsICYmIHR5cGVvZiBmaWVsZC52YWxpZGF0b3IgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSAmJiAhZmllbGQudmFsaWRhdG9yLnJlZ0V4LnRlc3QoZmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgZXJyb3JzW2l0ZW1bMF1dID0ge1xyXG4gICAgICAgICAgICAgICAgaGludDogZmllbGQudmFsaWRhdG9yLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgc2V0U3RhdGVGb3JtVmFsaWQoaXNWYWxpZCk7XHJcbiAgICB9XHJcbiAgICBzZXRTdGF0ZUZvcm1FcnJvcih7XHJcbiAgICAgIC4uLmVycm9ycyxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGVudC1kZXRhaWxcIj5cclxuICAgICAgICA8TGlua1xyXG4gICAgICAgICAgaHJlZj17e1xyXG4gICAgICAgICAgICBwYXRobmFtZTogJy8nLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8YT4mbGFycjsgQmFjazwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPEZvcm1Mb2dpblxyXG4gICAgICAgICAgcHJvcHM9e3tcclxuICAgICAgICAgICAgb25TdWJtaXRIYW5kbGVyLFxyXG4gICAgICAgICAgICBvbkNoYW5nZUhhbmRsZXIsXHJcbiAgICAgICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgICAgIHN0YXRlRm9ybURhdGEsXHJcbiAgICAgICAgICAgIHN0YXRlRm9ybUVycm9yLFxyXG4gICAgICAgICAgICBzdGF0ZUZvcm1NZXNzYWdlLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcblxyXG4gIGNvbnN0IHJlZmVyZXIgPSByZXEuaGVhZGVycy5yZWZlcmVyIHx8ICcnO1xyXG4gIGNvbnN0IGJhc2VBcGlVcmwgPSBgJHtvcmlnaW59L2FwaWA7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICAgIHJlZmVyZXIsXHJcbiAgICAgIGJhc2VBcGlVcmwsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9