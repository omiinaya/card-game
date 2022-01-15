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
  username: {
    value: '',
    label: 'Username',
    min: 5,
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
              /* password */

              data = _objectSpread(_objectSpread({}, data), {}, {
                password: data.password.value || ''
              });
              /* validation handler */

              isValid = validationHandler(stateFormData);

              if (!isValid) {
                _context.next = 15;
                break;
              }

              // Call an external API endpoint to get posts.
              // You can use any data fetching library
              setLoading(!loading);
              _context.next = 9;
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

            case 9:
              loginApi = _context.sent;
              _context.next = 12;
              return loginApi.json();

            case 12:
              result = _context.sent;

              if (result.success && result.token) {
                js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.set('token', result.token); // window.location.href = referer ? referer : "/";
                // const pathUrl = referer ? referer.lastIndexOf("/") : "/";

                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
              } else {
                setStateFormMessage(result);
              }

              setLoading(false);

            case 15:
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
      lineNumber: 204,
      columnNumber: 5
    }
  }, __jsx("main", {
    className: "content-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: {
      pathname: '/'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
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
      lineNumber: 213,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJlbWFpbFJlZ0V4IiwiRk9STV9EQVRBX0xPR0lOIiwidXNlcm5hbWUiLCJ2YWx1ZSIsImxhYmVsIiwibWluIiwibWF4IiwicmVxdWlyZWQiLCJ2YWxpZGF0b3IiLCJyZWdFeCIsImVycm9yIiwicGFzc3dvcmQiLCJMb2dpbiIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwib3JpZ2luIiwicmVmZXJlciIsImJhc2VBcGlVcmwiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhdGVGb3JtRGF0YSIsInNldFN0YXRlRm9ybURhdGEiLCJzdGF0ZUZvcm1FcnJvciIsInNldFN0YXRlRm9ybUVycm9yIiwic3RhdGVGb3JtVmFsaWQiLCJzZXRTdGF0ZUZvcm1WYWxpZCIsInN0YXRlRm9ybU1lc3NhZ2UiLCJzZXRTdGF0ZUZvcm1NZXNzYWdlIiwib25DaGFuZ2VIYW5kbGVyIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuYW1lIiwidmFsaWRhdGlvbkhhbmRsZXIiLCJvblN1Ym1pdEhhbmRsZXIiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJpc1ZhbGlkIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9naW5BcGkiLCJqc29uIiwicmVzdWx0Iiwic3VjY2VzcyIsInRva2VuIiwiQ29va2llcyIsInNldCIsIlJvdXRlciIsInB1c2giLCJzdGF0ZXMiLCJpbnB1dCIsInRhcmdldCIsImVycm9ycyIsImhpbnQiLCJpc0ludmFsaWQiLCJsZW5ndGgiLCJ0ZXN0IiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJpdGVtIiwiZmllbGQiLCJwYXRobmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtB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Q0QsUUFBSUEsT0FBSixFQUFhO0FBQ1hYLHVCQUFpQixDQUFDVyxPQUFELENBQWpCO0FBQ0Q7O0FBQ0RiLHFCQUFpQixtQkFDWmtDLE1BRFksRUFBakI7QUFHQSxXQUFPckIsT0FBUDtBQUNEOztBQUVELFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQ0UsUUFBSSxFQUFFO0FBQ0orQixjQUFRLEVBQUU7QUFETixLQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLENBREYsRUFRRSxNQUFDLGtFQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQ0xsQyxxQkFBZSxFQUFmQSxlQURLO0FBRUxMLHFCQUFlLEVBQWZBLGVBRks7QUFHTFYsYUFBTyxFQUFQQSxPQUhLO0FBSUxFLG1CQUFhLEVBQWJBLGFBSks7QUFLTEUsb0JBQWMsRUFBZEEsY0FMSztBQU1MSSxzQkFBZ0IsRUFBaEJBO0FBTkssS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkYsQ0FERixDQURGO0FBdUJEO0FBRUQ7OztHQTdMU2hCLEs7VUFDUUcscUQ7OztLQURSSCxLOztBQThNTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGxvZ2luLmpzLmRjMjI4NmVkYWJhOWEzMmQ3N2ZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciwgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb29raWVzIGZyb20gJ2pzLWNvb2tpZSc7XHJcblxyXG4vKiB1dGlscyAqL1xyXG5pbXBvcnQgeyBhYnNvbHV0ZVVybCB9IGZyb20gJy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5cclxuaW1wb3J0IEZvcm1Mb2dpbiBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vRm9ybUxvZ2luJztcclxuXHJcbmNvbnN0IGVtYWlsUmVnRXggPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsMnwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcblxyXG4vKiBsb2dpbiBzY2hlbWFzICovXHJcbmNvbnN0IEZPUk1fREFUQV9MT0dJTiA9IHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgbGFiZWw6ICdVc2VybmFtZScsXHJcbiAgICBtaW46IDUsXHJcbiAgICBtYXg6IDM2LFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB2YWxpZGF0b3I6IHtcclxuICAgICAgcmVnRXg6IC9eW2Etelxcc0EtWjAtOVxcV1xcd10rJC8sXHJcbiAgICAgIGVycm9yOiAnUGxlYXNlIGluc2VydCB2YWxpZCBlbWFpbCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGFzc3dvcmQ6IHtcclxuICAgIHZhbHVlOiAnJyxcclxuICAgIGxhYmVsOiAnUGFzc3dvcmQnLFxyXG4gICAgbWluOiA2LFxyXG4gICAgbWF4OiAzNixcclxuICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgdmFsaWRhdG9yOiB7XHJcbiAgICAgIHJlZ0V4OiAvXlthLXpcXHNBLVowLTlcXFdcXHddKyQvLFxyXG4gICAgICBlcnJvcjogJ1BsZWFzZSBpbnNlcnQgdmFsaWQgcGFzc3dvcmQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZnVuY3Rpb24gTG9naW4ocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgeyBvcmlnaW4sIHJlZmVyZXIsIGJhc2VBcGlVcmwgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgW3N0YXRlRm9ybURhdGEsIHNldFN0YXRlRm9ybURhdGFdID0gdXNlU3RhdGUoRk9STV9EQVRBX0xPR0lOKTtcclxuICBjb25zdCBbc3RhdGVGb3JtRXJyb3IsIHNldFN0YXRlRm9ybUVycm9yXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbc3RhdGVGb3JtVmFsaWQsIHNldFN0YXRlRm9ybVZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RhdGVGb3JtTWVzc2FnZSwgc2V0U3RhdGVGb3JtTWVzc2FnZV0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlSGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XHJcblxyXG4gICAgc2V0U3RhdGVGb3JtRGF0YSh7XHJcbiAgICAgIC4uLnN0YXRlRm9ybURhdGEsXHJcbiAgICAgIFtuYW1lXToge1xyXG4gICAgICAgIC4uLnN0YXRlRm9ybURhdGFbbmFtZV0sXHJcbiAgICAgICAgdmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiB2YWxpZGF0aW9uIGhhbmRsZXIgKi9cclxuICAgIHZhbGlkYXRpb25IYW5kbGVyKHN0YXRlRm9ybURhdGEsIGUpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gb25TdWJtaXRIYW5kbGVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgZGF0YSA9IHsgLi4uc3RhdGVGb3JtRGF0YSB9O1xyXG5cclxuICAgIC8qIGVtYWlsICovXHJcbiAgICBkYXRhID0geyAuLi5kYXRhLCB1c2VybmFtZTogZGF0YS51c2VybmFtZS52YWx1ZSB8fCAnJyB9O1xyXG4gICAgLyogcGFzc3dvcmQgKi9cclxuICAgIGRhdGEgPSB7IC4uLmRhdGEsIHBhc3N3b3JkOiBkYXRhLnBhc3N3b3JkLnZhbHVlIHx8ICcnIH07XHJcblxyXG4gICAgLyogdmFsaWRhdGlvbiBoYW5kbGVyICovXHJcbiAgICBjb25zdCBpc1ZhbGlkID0gdmFsaWRhdGlvbkhhbmRsZXIoc3RhdGVGb3JtRGF0YSk7XHJcblxyXG4gICAgaWYgKGlzVmFsaWQpIHtcclxuICAgICAgLy8gQ2FsbCBhbiBleHRlcm5hbCBBUEkgZW5kcG9pbnQgdG8gZ2V0IHBvc3RzLlxyXG4gICAgICAvLyBZb3UgY2FuIHVzZSBhbnkgZGF0YSBmZXRjaGluZyBsaWJyYXJ5XHJcbiAgICAgIHNldExvYWRpbmcoIWxvYWRpbmcpO1xyXG4gICAgICBjb25zdCBsb2dpbkFwaSA9IGF3YWl0IGZldGNoKGAke2Jhc2VBcGlVcmx9L2F1dGhgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgICAgIH0pLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH0pO1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgbG9naW5BcGkuanNvbigpO1xyXG4gICAgICBpZiAocmVzdWx0LnN1Y2Nlc3MgJiYgcmVzdWx0LnRva2VuKSB7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ3Rva2VuJywgcmVzdWx0LnRva2VuKTtcclxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlZmVyZXIgPyByZWZlcmVyIDogXCIvXCI7XHJcbiAgICAgICAgLy8gY29uc3QgcGF0aFVybCA9IHJlZmVyZXIgPyByZWZlcmVyLmxhc3RJbmRleE9mKFwiL1wiKSA6IFwiL1wiO1xyXG4gICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0U3RhdGVGb3JtTWVzc2FnZShyZXN1bHQpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gdmFsaWRhdGlvbkhhbmRsZXIoc3RhdGVzLCBlKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IChlICYmIGUudGFyZ2V0Lm5hbWUpIHx8ICcnO1xyXG4gICAgY29uc3QgZXJyb3JzID0gW107XHJcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgIGlmIChzdGF0ZXNbaW5wdXRdLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgaWYgKCFzdGF0ZXNbaW5wdXRdLnZhbHVlKSB7XHJcbiAgICAgICAgICBlcnJvcnNbaW5wdXRdID0ge1xyXG4gICAgICAgICAgICBoaW50OiBgJHtzdGF0ZXNbZS50YXJnZXQubmFtZV0ubGFiZWx9IHJlcXVpcmVkYCxcclxuICAgICAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKFxyXG4gICAgICAgIHN0YXRlc1tpbnB1dF0udmFsdWUgJiZcclxuICAgICAgICBzdGF0ZXNbaW5wdXRdLm1pbiA+IHN0YXRlc1tpbnB1dF0udmFsdWUubGVuZ3RoXHJcbiAgICAgICkge1xyXG4gICAgICAgIGVycm9yc1tpbnB1dF0gPSB7XHJcbiAgICAgICAgICBoaW50OiBgRmllbGQgJHtzdGF0ZXNbaW5wdXRdLmxhYmVsfSBtaW4gJHtzdGF0ZXNbaW5wdXRdLm1pbn1gLFxyXG4gICAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChcclxuICAgICAgICBzdGF0ZXNbaW5wdXRdLnZhbHVlICYmXHJcbiAgICAgICAgc3RhdGVzW2lucHV0XS5tYXggPCBzdGF0ZXNbaW5wdXRdLnZhbHVlLmxlbmd0aFxyXG4gICAgICApIHtcclxuICAgICAgICBlcnJvcnNbaW5wdXRdID0ge1xyXG4gICAgICAgICAgaGludDogYEZpZWxkICR7c3RhdGVzW2lucHV0XS5sYWJlbH0gbWF4ICR7c3RhdGVzW2lucHV0XS5tYXh9YCxcclxuICAgICAgICAgIGlzSW52YWxpZDogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgc3RhdGVzW2lucHV0XS52YWxpZGF0b3IgIT09IG51bGwgJiZcclxuICAgICAgICB0eXBlb2Ygc3RhdGVzW2lucHV0XS52YWxpZGF0b3IgPT09ICdvYmplY3QnXHJcbiAgICAgICkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHN0YXRlc1tpbnB1dF0udmFsdWUgJiZcclxuICAgICAgICAgICFzdGF0ZXNbaW5wdXRdLnZhbGlkYXRvci5yZWdFeC50ZXN0KHN0YXRlc1tpbnB1dF0udmFsdWUpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBlcnJvcnNbaW5wdXRdID0ge1xyXG4gICAgICAgICAgICBoaW50OiBzdGF0ZXNbaW5wdXRdLnZhbGlkYXRvci5lcnJvcixcclxuICAgICAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIE9iamVjdC5lbnRyaWVzKHN0YXRlcykuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBpdGVtLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgZXJyb3JzW2l0ZW1bMF1dID0gJyc7XHJcbiAgICAgICAgICBpZiAoZmllbGQucmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgaWYgKCFmaWVsZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgIGVycm9yc1tpdGVtWzBdXSA9IHtcclxuICAgICAgICAgICAgICAgIGhpbnQ6IGAke2ZpZWxkLmxhYmVsfSByZXF1aXJlZGAsXHJcbiAgICAgICAgICAgICAgICBpc0ludmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmIChmaWVsZC52YWx1ZSAmJiBmaWVsZC5taW4gPj0gZmllbGQudmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVycm9yc1tpdGVtWzBdXSA9IHtcclxuICAgICAgICAgICAgICBoaW50OiBgRmllbGQgJHtmaWVsZC5sYWJlbH0gbWluICR7ZmllbGQubWlufWAsXHJcbiAgICAgICAgICAgICAgaXNJbnZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoZmllbGQudmFsdWUgJiYgZmllbGQubWF4IDw9IGZpZWxkLnZhbHVlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlcnJvcnNbaXRlbVswXV0gPSB7XHJcbiAgICAgICAgICAgICAgaGludDogYEZpZWxkICR7ZmllbGQubGFiZWx9IG1heCAke2ZpZWxkLm1heH1gLFxyXG4gICAgICAgICAgICAgIGlzSW52YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGZpZWxkLnZhbGlkYXRvciAhPT0gbnVsbCAmJiB0eXBlb2YgZmllbGQudmFsaWRhdG9yID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQudmFsdWUgJiYgIWZpZWxkLnZhbGlkYXRvci5yZWdFeC50ZXN0KGZpZWxkLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgIGVycm9yc1tpdGVtWzBdXSA9IHtcclxuICAgICAgICAgICAgICAgIGhpbnQ6IGZpZWxkLnZhbGlkYXRvci5lcnJvcixcclxuICAgICAgICAgICAgICAgIGlzSW52YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChpc1ZhbGlkKSB7XHJcbiAgICAgIHNldFN0YXRlRm9ybVZhbGlkKGlzVmFsaWQpO1xyXG4gICAgfVxyXG4gICAgc2V0U3RhdGVGb3JtRXJyb3Ioe1xyXG4gICAgICAuLi5lcnJvcnMsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRlbnQtZGV0YWlsXCI+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGE+JmxhcnI7IEJhY2s8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxGb3JtTG9naW5cclxuICAgICAgICAgIHByb3BzPXt7XHJcbiAgICAgICAgICAgIG9uU3VibWl0SGFuZGxlcixcclxuICAgICAgICAgICAgb25DaGFuZ2VIYW5kbGVyLFxyXG4gICAgICAgICAgICBsb2FkaW5nLFxyXG4gICAgICAgICAgICBzdGF0ZUZvcm1EYXRhLFxyXG4gICAgICAgICAgICBzdGF0ZUZvcm1FcnJvcixcclxuICAgICAgICAgICAgc3RhdGVGb3JtTWVzc2FnZSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG5cclxuICBjb25zdCByZWZlcmVyID0gcmVxLmhlYWRlcnMucmVmZXJlciB8fCAnJztcclxuICBjb25zdCBiYXNlQXBpVXJsID0gYCR7b3JpZ2lufS9hcGlgO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgICByZWZlcmVyLFxyXG4gICAgICBiYXNlQXBpVXJsLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==