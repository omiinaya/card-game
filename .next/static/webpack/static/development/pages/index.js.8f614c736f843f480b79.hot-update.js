webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Board.jsx":
/*!***********************************!*\
  !*** ./components/game/Board.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ "./components/game/Field.jsx");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hand */ "./components/game/Hand.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Board.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(_c = _s(function Container() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      onHand = _useState[0],
      setOnHand = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      onField = _useState2[0],
      setOnField = _useState2[1];

  var getCards = function getCards() {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/api/card").then(function (res) {
        setOnHand(res.data.data);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    sortOnHand();
    console.log(onHand);
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    console.log(onField);
  }, [onField]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setOnHand(function (prev) {
      return prev.filter(function (card) {
        return card.id != index - 1;
      });
    });
    sortOnHand();
    var x = onHand.filter(function (card) {
      return card.id == index - 1;
    })[0];
    setOnField(function (prevArray) {
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevArray), [x]);
    });
  };

  var sortOnHand = function sortOnHand() {
    var myArray = onHand;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      overflow: 'hidden',
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  })), __jsx("div", {
    style: {
      overflow: 'hidden',
      clear: 'both'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })));
}, "04N5cuwtClScjwx/b2x8cjPT0SQ="));
_c2 = PlayerHand;
/* harmony default export */ __webpack_exports__["default"] = (PlayerHand);

var _c, _c2;

$RefreshReg$(_c, "PlayerHand$memo");
$RefreshReg$(_c2, "PlayerHand");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm9hcmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwibGVuZ3RoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInNvcnRPbkhhbmQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2FyZFBsYXllZCIsImluZGV4IiwicHJldiIsImZpbHRlciIsImNhcmQiLCJpZCIsIngiLCJwcmV2QXJyYXkiLCJteUFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJvdmVyZmxvdyIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0Msa0RBQUksU0FBQyxTQUFTQyxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBRWJDLHNEQUFRLENBQUMsRUFBRCxDQUZLO0FBQUEsTUFFbENDLE1BRmtDO0FBQUEsTUFFMUJDLFNBRjBCOztBQUFBLG1CQUdYRixzREFBUSxDQUFDLEVBQUQsQ0FIRztBQUFBLE1BR2xDRyxPQUhrQztBQUFBLE1BR3pCQyxVQUh5Qjs7QUFLekMsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUNuQjtBQUNBLFFBQUlKLE1BQU0sQ0FBQ0ssTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkMsa0RBQUssQ0FBQ0MsR0FBTixjQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pDUixpQkFBUyxDQUFDUSxHQUFHLENBQUNDLElBQUosQ0FBU0EsSUFBVixDQUFUO0FBQ0gsT0FGRDtBQUdIO0FBQ0osR0FQRDs7QUFTQUMseURBQVMsQ0FBQyxZQUFNO0FBQ1pQLFlBQVE7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFPLHlEQUFTLENBQUMsWUFBTTtBQUNaQyxjQUFVO0FBQ1ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxNQUFaO0FBQ0gsR0FIUSxFQUdOLENBQUNBLE1BQUQsQ0FITSxDQUFUO0FBS0FXLHlEQUFTLENBQUMsWUFBTTtBQUNaRSxXQUFPLENBQUNDLEdBQVIsQ0FBWVosT0FBWjtBQUNILEdBRlEsRUFFTixDQUFDQSxPQUFELENBRk0sQ0FBVDs7QUFJQSxNQUFNYSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNoQ2YsYUFBUyxDQUFDLFVBQUFnQixJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQUMsSUFBSSxFQUFJO0FBQ2xDLGVBQU9BLElBQUksQ0FBQ0MsRUFBTCxJQUFXSixLQUFLLEdBQUcsQ0FBMUI7QUFDSCxPQUZpQixDQUFKO0FBQUEsS0FBTCxDQUFUO0FBR0FKLGNBQVU7QUFDVixRQUFJUyxDQUFDLEdBQUdyQixNQUFNLENBQUNrQixNQUFQLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQzFCLGFBQU9BLElBQUksQ0FBQ0MsRUFBTCxJQUFXSixLQUFLLEdBQUcsQ0FBMUI7QUFDSCxLQUZPLEVBRUwsQ0FGSyxDQUFSO0FBSUFiLGNBQVUsQ0FBQyxVQUFBbUIsU0FBUztBQUFBLG9IQUFRQSxTQUFSLElBQW1CRCxDQUFuQjtBQUFBLEtBQVYsQ0FBVjtBQUNILEdBVkQ7O0FBWUEsTUFBTVQsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFJVyxPQUFPLEdBQUd2QixNQUFkO0FBQ0F1QixXQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBVUMsT0FBVixFQUFtQlQsS0FBbkIsRUFBMEI7QUFDdENTLGFBQU8sQ0FBQ0wsRUFBUixHQUFhSixLQUFiO0FBQ0gsS0FGRDtBQUdILEdBTEQ7O0FBT0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRVUsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxTQUFLLEVBQUU7QUFBRUQsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQU0sU0FBSyxFQUFFM0IsTUFBYjtBQUFxQixZQUFRLEVBQUVlLGdCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKO0FBVUgsQ0F4RHNCLGtDQUF2QjtNQUFNbkIsVTtBQTBEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjhmNjE0YzczNmY4NDNmNDgwYjc5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCc7XHJcbmltcG9ydCBIYW5kIGZyb20gJy4vSGFuZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtvbkhhbmQsIHNldE9uSGFuZF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvbkZpZWxkLCBzZXRPbkZpZWxkXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vaWYgb25IYW5kIGhhdmUgbm90IGxvYWRlZCB5ZXQgdGhlbiBsb2FkIHRoZW0gZnJvbSBzZXJ2ZXIuXHJcbiAgICAgICAgaWYgKG9uSGFuZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE9uSGFuZChyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENhcmRzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3J0T25IYW5kKClcclxuICAgICAgICBjb25zb2xlLmxvZyhvbkhhbmQpXHJcbiAgICB9LCBbb25IYW5kXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvbkZpZWxkKVxyXG4gICAgfSwgW29uRmllbGRdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0T25IYW5kKHByZXYgPT4gcHJldi5maWx0ZXIoY2FyZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYXJkLmlkICE9IGluZGV4IC0gMVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIHNvcnRPbkhhbmQoKVxyXG4gICAgICAgIHZhciB4ID0gb25IYW5kLmZpbHRlcihjYXJkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmQuaWQgPT0gaW5kZXggLSAxXHJcbiAgICAgICAgfSlbMF1cclxuICAgICAgICBcclxuICAgICAgICBzZXRPbkZpZWxkKHByZXZBcnJheSA9PiBbLi4ucHJldkFycmF5LCB4XSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3J0T25IYW5kID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gb25IYW5kXHJcbiAgICAgICAgbXlBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGFuZCBjYXJkcz17b25IYW5kfSBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckhhbmQiXSwic291cmNlUm9vdCI6IiJ9