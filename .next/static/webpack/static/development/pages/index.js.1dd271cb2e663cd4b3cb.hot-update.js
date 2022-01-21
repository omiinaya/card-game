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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(rarities);
    console.log(types);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NhcmRDcmVhdGUvQ2FyZENyZWF0ZS5qc3giXSwibmFtZXMiOlsiQmFzaWNTZWxlY3QiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicmFyaXRpZXMiLCJzZXRSYXJpdGllcyIsInR5cGVzIiwic2V0VHlwZXMiLCJyYXJpdHkiLCJzZXRSYXJpdHkiLCJpbWFnZSIsInNldEltYWdlIiwiZGVzYyIsInNldERlc2MiLCJ0eXBlIiwic2V0VHlwZSIsImF0ayIsInNldEF0ayIsImRlZiIsInNldERlZiIsImdldFJhcml0aWVzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImdldFR5cGVzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZU5hbWUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlUmFyaXR5IiwiaGFuZGxlQ2hhbmdlSW1hZ2UiLCJoYW5kbGVDaGFuZ2VEZXNjIiwibGVuZ3RoIiwibWluV2lkdGgiLCJtYXJnaW4iLCJtYXAiLCJ4IiwicmFyaXR5TmFtZSIsInNocmluayIsImRpc3BsYXkiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDWkMsc0RBQVEsQ0FBQyxFQUFELENBREk7QUFBQSxNQUM3QkMsSUFENkI7QUFBQSxNQUN2QkMsT0FEdUI7O0FBQUEsbUJBRUpGLHNEQUFRLENBQUMsRUFBRCxDQUZKO0FBQUEsTUFFN0JHLFFBRjZCO0FBQUEsTUFFbkJDLFdBRm1COztBQUFBLG1CQUdWSixzREFBUSxDQUFDLEVBQUQsQ0FIRTtBQUFBLE1BRzdCSyxLQUg2QjtBQUFBLE1BR3RCQyxRQUhzQjs7QUFBQSxtQkFJUk4sc0RBQVEsQ0FBQyxRQUFELENBSkE7QUFBQSxNQUk3Qk8sTUFKNkI7QUFBQSxNQUlyQkMsU0FKcUI7O0FBQUEsbUJBS1ZSLHNEQUFRLENBQUMsRUFBRCxDQUxFO0FBQUEsTUFLN0JTLEtBTDZCO0FBQUEsTUFLdEJDLFFBTHNCOztBQUFBLG1CQU1aVixzREFBUSxDQUFDLEVBQUQsQ0FOSTtBQUFBLE1BTTdCVyxJQU42QjtBQUFBLE1BTXZCQyxPQU51Qjs7QUFBQSxtQkFPWlosc0RBQVEsQ0FBQyxFQUFELENBUEk7QUFBQSxNQU83QmEsSUFQNkI7QUFBQSxNQU92QkMsT0FQdUI7O0FBQUEsbUJBUWRkLHNEQUFRLENBQUMsQ0FBRCxDQVJNO0FBQUEsTUFRN0JlLEdBUjZCO0FBQUEsTUFReEJDLE1BUndCOztBQUFBLG1CQVNkaEIsc0RBQVEsQ0FBQyxDQUFELENBVE07QUFBQSxNQVM3QmlCLEdBVDZCO0FBQUEsTUFTeEJDLE1BVHdCOztBQVdwQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCQyxnREFBSyxDQUFDQyxHQUFOLG9CQUE2QkMsSUFBN0IsQ0FBa0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pDbkIsaUJBQVcsQ0FBQ21CLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQSxJQUFWLENBQVg7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCTCxnREFBSyxDQUFDQyxHQUFOLGtCQUEyQkMsSUFBM0IsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDakIsY0FBUSxDQUFDaUIsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBUjtBQUNELEtBRkQ7QUFHRCxHQUpEOztBQU1BRSx5REFBUyxDQUFDLFlBQU07QUFDZFAsZUFBVztBQUNYTSxZQUFRO0FBQ1QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBQyx5REFBUyxDQUFDLFlBQU0sQ0FDZDtBQUNBO0FBQ0E7QUFDRCxHQUpRLEVBSU4sQ0FBQ25CLE1BQUQsRUFBU04sSUFBVCxFQUFlUSxLQUFmLENBSk0sQ0FBVDtBQU1BaUIseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZekIsUUFBWjtBQUNBd0IsV0FBTyxDQUFDQyxHQUFSLENBQVl2QixLQUFaO0FBQ0QsR0FIUSxFQUdOLENBQUNGLFFBQUQsRUFBV0UsS0FBWCxDQUhNLENBQVQ7O0FBS0EsTUFBTXdCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2xDNUIsV0FBTyxDQUFDNEIsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDSCxLQUFELEVBQVc7QUFDcEN0QixhQUFTLENBQUNzQixLQUFLLENBQUNDLE1BQU4sQ0FBYUMsS0FBZCxDQUFUO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNKLEtBQUQsRUFBVztBQUNuQ3BCLFlBQVEsQ0FBQ29CLEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxLQUFkLENBQVI7QUFDRCxHQUZEOztBQUlBLE1BQU1HLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0wsS0FBRCxFQUFXO0FBQ2xDbEIsV0FBTyxDQUFDa0IsS0FBSyxDQUFDQyxNQUFOLENBQWFDLEtBQWQsQ0FBUDtBQUNELEdBRkQ7O0FBSUEsU0FDRTdCLFFBQVEsQ0FBQ2lDLE1BQVQsR0FBa0IsQ0FBbEIsSUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxRUFBRDtBQUFhLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsR0FBWjtBQUFpQkMsWUFBTSxFQUFFO0FBQXpCLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsRUFFRSxNQUFDLGdFQUFEO0FBQVEsU0FBSyxFQUFFL0IsTUFBZjtBQUF1QixTQUFLLEVBQUMsU0FBN0I7QUFBdUMsWUFBUSxFQUFFMEIsa0JBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRzlCLFFBQVEsQ0FBQ29DLEdBQVQsQ0FBYSxVQUFDQyxDQUFEO0FBQUEsV0FDWixNQUFDLGtFQUFEO0FBQVUsU0FBRyxFQUFFQSxDQUFDLENBQUNDLFVBQWpCO0FBQTZCLFdBQUssRUFBRUQsQ0FBQyxDQUFDQyxVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0dELENBQUMsQ0FBQ0MsVUFETCxDQURZO0FBQUEsR0FBYixDQURILENBRkYsQ0FERixFQVdFLE1BQUMscUVBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBRUosY0FBUSxFQUFFLEdBQVo7QUFBaUJDLFlBQU0sRUFBRTtBQUF6QixLQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUNFLE1BQUUsRUFBQyxVQURMO0FBRUUsUUFBSSxFQUFDLFVBRlA7QUFHRSxTQUFLLEVBQUMsWUFIUjtBQUlFLGdCQUFZLEVBQUVyQyxJQUpoQjtBQUtFLFlBQVEsRUFBRTRCLGdCQUxaO0FBTUUsbUJBQWUsRUFBRTtBQUFFYSxZQUFNLEVBQUU7QUFBVixLQU5uQjtBQU9FLFdBQU8sRUFBQyxVQVBWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLEVBc0JFLE1BQUMscUVBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBRUwsY0FBUSxFQUFFLEdBQVo7QUFBaUJDLFlBQU0sRUFBRSxDQUF6QjtBQUE0QkssYUFBTyxFQUFFO0FBQXJDLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQ0UsU0FBSyxFQUFFO0FBQUVOLGNBQVEsRUFBRTtBQUFaLEtBRFQ7QUFFRSxNQUFFLEVBQUMsV0FGTDtBQUdFLFFBQUksRUFBQyxXQUhQO0FBSUUsU0FBSyxFQUFDLGFBSlI7QUFLRSxnQkFBWSxFQUFFNUIsS0FMaEI7QUFNRSxZQUFRLEVBQUV5QixpQkFOWjtBQU9FLG1CQUFlLEVBQUU7QUFBRVEsWUFBTSxFQUFFO0FBQVYsS0FQbkI7QUFRRSxXQUFPLEVBQUMsVUFSVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F0QkYsRUFrQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwRUFBRDtBQUNFLGtCQUFXLGdCQURiO0FBRUUsV0FBTyxFQUFFLENBRlg7QUFHRSxlQUFXLEVBQUMsa0JBSGQ7QUFJRSxZQUFRLEVBQUVQLGdCQUpaO0FBS0UsU0FBSyxFQUFFO0FBQUVTLFdBQUssRUFBRTtBQUFULEtBTFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBbENGLENBRko7QUFnREQ7O0dBdkd1QjdDLFc7O0tBQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFkZDI3MWNiMmU2NjNjZDRiM2NiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1NlbGVjdCgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmFyaXRpZXMsIHNldFJhcml0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmFyaXR5LCBzZXRSYXJpdHldID0gdXNlU3RhdGUoXCJDb21tb25cIik7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXRrLCBzZXRBdGtdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2RlZiwgc2V0RGVmXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBnZXRSYXJpdGllcyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChgL2FwaS9jYXJkUmFyaXR5YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFJhcml0aWVzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VHlwZXMgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvY2FyZFR5cGVgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0VHlwZXMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UmFyaXRpZXMoKTtcclxuICAgIGdldFR5cGVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIlJhcml0eTogXCIgKyByYXJpdHkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIk5hbWU6IFwiICsgbmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiSW1hZ2U6IFwiICsgaW1hZ2UpO1xyXG4gIH0sIFtyYXJpdHksIG5hbWUsIGltYWdlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyYXJpdGllcyk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlcyk7XHJcbiAgfSwgW3Jhcml0aWVzLCB0eXBlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VOYW1lID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUmFyaXR5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRSYXJpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbWFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0SW1hZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEZXNjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXREZXNjKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHJhcml0aWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICA8Zm9ybT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IDEwNSwgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgPElucHV0TGFiZWw+Q2FyZCBSYXJpdHk6PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgPFNlbGVjdCB2YWx1ZT17cmFyaXR5fSBsYWJlbD1cIlNlcnZpY2VcIiBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlUmFyaXR5fT5cclxuICAgICAgICAgICAge3Jhcml0aWVzLm1hcCgoeCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBrZXk9e3gucmFyaXR5TmFtZX0gdmFsdWU9e3gucmFyaXR5TmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7eC5yYXJpdHlOYW1lfVxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IDEwNSwgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cImNhcmROYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImNhcmROYW1lXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDYXJkIE5hbWU6XCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTmFtZX1cclxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMjA1LCBtYXJnaW46IDAsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgICBpZD1cImNhcmRJbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjYXJkSW1hZ2VcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkltYWdlIExpbms6XCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUltYWdlfVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1pbmltdW0gaGVpZ2h0XCJcclxuICAgICAgICAgICAgbWluUm93cz17M31cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXJkIERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlc2N9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==