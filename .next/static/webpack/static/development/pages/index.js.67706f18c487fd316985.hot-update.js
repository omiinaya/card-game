webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/cardCreate/CardCreate.jsx":
/*!**********************************************!*\
  !*** ./components/cardCreate/CardCreate.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\cardCreate\\CardCreate.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function BasicSelect() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      rarities = _useState2[0],
      setRarities = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      types = _useState3[0],
      setTypes = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Common"),
      rarity = _useState4[0],
      setRarity = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      image = _useState5[0],
      setImage = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      desc = _useState6[0],
      setDesc = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      type = _useState7[0],
      setType = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      atk = _useState8[0],
      setAtk = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      def = _useState9[0],
      setDef = _useState9[1];

  var getRarities = function getRarities() {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/cardRarity").then(function (res) {
      setRarities(res.data.data);
    });
  };

  var getTypes = function getTypes() {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("/api/cardType").then(function (res) {
      setTypes(res.data.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getRarities();
    getTypes();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {//console.log("Rarity: " + rarity);
    //console.log("Name: " + name);
    //console.log("Image: " + image);
  }, [rarity, name, image]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {//console.log(rarities);
    //console.log(types);
  }, [rarities, types]);

  var handleChangeName = function handleChangeName(event) {
    setName(event.target.value);
  };

  var handleChangeRarity = function handleChangeRarity(event) {
    setRarity(event.target.value);
  };

  var handleChangeImage = function handleChangeImage(event) {
    setImage(event.target.value);
  };

  var handleChangeDesc = function handleChangeDesc(event) {
    setDesc(event.target.value);
  };

  return rarities.length > 0 && __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      minWidth: 105,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Card Rarity:"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__["default"], {
    value: rarity,
    label: "Service",
    onChange: handleChangeRarity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, rarities.map(function (x) {
    return __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: x.rarityName,
      value: x.rarityName,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, x.rarityName);
  }))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      minWidth: 105,
      margin: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "cardName",
    name: "cardName",
    label: "Card Name:",
    defaultValue: name,
    onChange: handleChangeName,
    InputLabelProps: {
      shrink: true
    },
    variant: "standard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      minWidth: 205,
      margin: 0,
      display: "block"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      minWidth: 300
    },
    id: "cardImage",
    name: "cardImage",
    label: "Image Link:",
    defaultValue: image,
    onChange: handleChangeImage,
    InputLabelProps: {
      shrink: true
    },
    variant: "standard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_7__["default"], {
    "aria-label": "minimum height",
    minRows: 3,
    placeholder: "Card Description",
    onChange: handleChangeDesc,
    style: {
      width: 300
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  })));
}

_s(BasicSelect, "uiTpB6MtjqGyqqwRcM3r1VXuREQ=");

_c = BasicSelect;

var _c;

$RefreshReg$(_c, "BasicSelect");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRDcmVhdGUvQ2FyZENyZWF0ZS5qc3giXSwibmFtZXMiOlsiQmFzaWNTZWxlY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicmFyaXRpZXMiLCJzZXRSYXJpdGllcyIsInR5cGVzIiwic2V0VHlwZXMiLCJyYXJpdHkiLCJzZXRSYXJpdHkiLCJpbWFnZSIsInNldEltYWdlIiwiZGVzYyIsInNldERlc2MiLCJ0eXBlIiwic2V0VHlwZSIsImF0ayIsInNldEF0ayIsImRlZiIsInNldERlZiIsImdldFJhcml0aWVzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImdldFR5cGVzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlTmFtZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VSYXJpdHkiLCJoYW5kbGVDaGFuZ2VJbWFnZSIsImhhbmRsZUNoYW5nZURlc2MiLCJsZW5ndGgiLCJtaW5XaWR0aCIsIm1hcmdpbiIsIm1hcCIsIngiLCJyYXJpdHlOYW1lIiwic2hyaW5rIiwiZGlzcGxheSIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsV0FBVCxHQUF1QjtBQUFBOztBQUFBOztBQUFBLGtCQUNaQyxzREFBUSxDQUFDLEVBQUQsQ0FESTtBQUFBLE1BQzdCQyxJQUQ2QjtBQUFBLE1BQ3ZCQyxPQUR1Qjs7QUFBQSxtQkFFSkYsc0RBQVEsQ0FBQyxFQUFELENBRko7QUFBQSxNQUU3QkcsUUFGNkI7QUFBQSxNQUVuQkMsV0FGbUI7O0FBQUEsbUJBR1ZKLHNEQUFRLENBQUMsRUFBRCxDQUhFO0FBQUEsTUFHN0JLLEtBSDZCO0FBQUEsTUFHdEJDLFFBSHNCOztBQUFBLG1CQUlSTixzREFBUSxDQUFDLFFBQUQsQ0FKQTtBQUFBLE1BSTdCTyxNQUo2QjtBQUFBLE1BSXJCQyxTQUpxQjs7QUFBQSxtQkFLVlIsc0RBQVEsQ0FBQyxFQUFELENBTEU7QUFBQSxNQUs3QlMsS0FMNkI7QUFBQSxNQUt0QkMsUUFMc0I7O0FBQUEsbUJBTVpWLHNEQUFRLENBQUMsRUFBRCxDQU5JO0FBQUEsTUFNN0JXLElBTjZCO0FBQUEsTUFNdkJDLE9BTnVCOztBQUFBLG1CQU9aWixzREFBUSxDQUFDLEVBQUQsQ0FQSTtBQUFBLE1BTzdCYSxJQVA2QjtBQUFBLE1BT3ZCQyxPQVB1Qjs7QUFBQSxtQkFRZGQsc0RBQVEsQ0FBQyxDQUFELENBUk07QUFBQSxNQVE3QmUsR0FSNkI7QUFBQSxNQVF4QkMsTUFSd0I7O0FBQUEsbUJBU2RoQixzREFBUSxDQUFDLENBQUQsQ0FUTTtBQUFBLE1BUzdCaUIsR0FUNkI7QUFBQSxNQVN4QkMsTUFUd0I7O0FBV3BDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLGdEQUFLLENBQUNDLEdBQU4sb0JBQTZCQyxJQUE3QixDQUFrQyxVQUFDQyxHQUFELEVBQVM7QUFDekNuQixpQkFBVyxDQUFDbUIsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBWDtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckJMLGdEQUFLLENBQUNDLEdBQU4sa0JBQTJCQyxJQUEzQixDQUFnQyxVQUFDQyxHQUFELEVBQVM7QUFDdkNqQixjQUFRLENBQUNpQixHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFSO0FBQ0QsS0FGRDtBQUdELEdBSkQ7O0FBTUFFLHlEQUFTLENBQUMsWUFBTTtBQUNkUCxlQUFXO0FBQ1hNLFlBQVE7QUFDVCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0FDLHlEQUFTLENBQUMsWUFBTSxDQUNkO0FBQ0E7QUFDQTtBQUNELEdBSlEsRUFJTixDQUFDbkIsTUFBRCxFQUFTTixJQUFULEVBQWVRLEtBQWYsQ0FKTSxDQUFUO0FBTUFpQix5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0QsR0FIUSxFQUdOLENBQUN2QixRQUFELEVBQVdFLEtBQVgsQ0FITSxDQUFUOztBQUtBLE1BQU1zQixnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNsQzFCLFdBQU8sQ0FBQzBCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVA7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0gsS0FBRCxFQUFXO0FBQ3BDcEIsYUFBUyxDQUFDb0IsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBVDtBQUNELEdBRkQ7O0FBSUEsTUFBTUUsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSixLQUFELEVBQVc7QUFDbkNsQixZQUFRLENBQUNrQixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNMLEtBQUQsRUFBVztBQUNsQ2hCLFdBQU8sQ0FBQ2dCLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVA7QUFDRCxHQUZEOztBQUlBLFNBQ0UzQixRQUFRLENBQUMrQixNQUFULEdBQWtCLENBQWxCLElBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMscUVBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLEdBQVo7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUUsTUFBQyxnRUFBRDtBQUFRLFNBQUssRUFBRTdCLE1BQWY7QUFBdUIsU0FBSyxFQUFDLFNBQTdCO0FBQXVDLFlBQVEsRUFBRXdCLGtCQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0c1QixRQUFRLENBQUNrQyxHQUFULENBQWEsVUFBQ0MsQ0FBRDtBQUFBLFdBQ1osTUFBQyxrRUFBRDtBQUFVLFNBQUcsRUFBRUEsQ0FBQyxDQUFDQyxVQUFqQjtBQUE2QixXQUFLLEVBQUVELENBQUMsQ0FBQ0MsVUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHRCxDQUFDLENBQUNDLFVBREwsQ0FEWTtBQUFBLEdBQWIsQ0FESCxDQUZGLENBREYsRUFXRSxNQUFDLHFFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVKLGNBQVEsRUFBRSxHQUFaO0FBQWlCQyxZQUFNLEVBQUU7QUFBekIsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFDRSxNQUFFLEVBQUMsVUFETDtBQUVFLFFBQUksRUFBQyxVQUZQO0FBR0UsU0FBSyxFQUFDLFlBSFI7QUFJRSxnQkFBWSxFQUFFbkMsSUFKaEI7QUFLRSxZQUFRLEVBQUUwQixnQkFMWjtBQU1FLG1CQUFlLEVBQUU7QUFBRWEsWUFBTSxFQUFFO0FBQVYsS0FObkI7QUFPRSxXQUFPLEVBQUMsVUFQVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FYRixFQXNCRSxNQUFDLHFFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUVMLGNBQVEsRUFBRSxHQUFaO0FBQWlCQyxZQUFNLEVBQUUsQ0FBekI7QUFBNEJLLGFBQU8sRUFBRTtBQUFyQyxLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLFNBQUssRUFBRTtBQUFFTixjQUFRLEVBQUU7QUFBWixLQURUO0FBRUUsTUFBRSxFQUFDLFdBRkw7QUFHRSxRQUFJLEVBQUMsV0FIUDtBQUlFLFNBQUssRUFBQyxhQUpSO0FBS0UsZ0JBQVksRUFBRTFCLEtBTGhCO0FBTUUsWUFBUSxFQUFFdUIsaUJBTlo7QUFPRSxtQkFBZSxFQUFFO0FBQUVRLFlBQU0sRUFBRTtBQUFWLEtBUG5CO0FBUUUsV0FBTyxFQUFDLFVBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdEJGLEVBa0NFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMEVBQUQ7QUFDRSxrQkFBVyxnQkFEYjtBQUVFLFdBQU8sRUFBRSxDQUZYO0FBR0UsZUFBVyxFQUFDLGtCQUhkO0FBSUUsWUFBUSxFQUFFUCxnQkFKWjtBQUtFLFNBQUssRUFBRTtBQUFFUyxXQUFLLEVBQUU7QUFBVCxLQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQWxDRixDQUZKO0FBZ0REOztHQXZHdUIzQyxXOztLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42NzcwNmYxOGM0ODdmZDMxNjk4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNTZWxlY3QoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jhcml0aWVzLCBzZXRSYXJpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jhcml0eSwgc2V0UmFyaXR5XSA9IHVzZVN0YXRlKFwiQ29tbW9uXCIpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2F0aywgc2V0QXRrXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkZWYsIHNldERlZl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZ2V0UmFyaXRpZXMgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvY2FyZFJhcml0eWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRSYXJpdGllcyhyZXMuZGF0YS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFR5cGVzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRUeXBlYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFR5cGVzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFJhcml0aWVzKCk7XHJcbiAgICBnZXRUeXBlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJSYXJpdHk6IFwiICsgcmFyaXR5KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJOYW1lOiBcIiArIG5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIkltYWdlOiBcIiArIGltYWdlKTtcclxuICB9LCBbcmFyaXR5LCBuYW1lLCBpbWFnZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyYXJpdGllcyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHR5cGVzKTtcclxuICB9LCBbcmFyaXRpZXMsIHR5cGVzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU5hbWUgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VSYXJpdHkgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFJhcml0eShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUltYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRJbWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlc2MgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldERlc2MoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgcmFyaXRpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMTA1LCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbD5DYXJkIFJhcml0eTo8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtyYXJpdHl9IGxhYmVsPVwiU2VydmljZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSYXJpdHl9PlxyXG4gICAgICAgICAgICB7cmFyaXRpZXMubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17eC5yYXJpdHlOYW1lfSB2YWx1ZT17eC5yYXJpdHlOYW1lfT5cclxuICAgICAgICAgICAgICAgIHt4LnJhcml0eU5hbWV9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMTA1LCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwiY2FyZE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2FyZE5hbWVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkNhcmQgTmFtZTpcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiAyMDUsIG1hcmdpbjogMCwgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMzAwIH19XHJcbiAgICAgICAgICAgIGlkPVwiY2FyZEltYWdlXCJcclxuICAgICAgICAgICAgbmFtZT1cImNhcmRJbWFnZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgTGluazpcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ltYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW1hZ2V9XHJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWluaW11bSBoZWlnaHRcIlxyXG4gICAgICAgICAgICBtaW5Sb3dzPXszfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhcmQgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVzY31cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9