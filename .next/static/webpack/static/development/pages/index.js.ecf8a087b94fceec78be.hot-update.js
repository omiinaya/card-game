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
    sordOnHand();
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    sordOnField();
    console.log(onField);
  }, [onField]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setOnField(function (prev) {
      var x = onHand.filter(function (card) {
        return card.id == index - 1;
      })[0];
      return [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev), [x]);
    });
    setOnHand(function (prev) {
      return prev.filter(function (card) {
        return card.id != index - 1;
      });
    });
  };

  var sordOnHand = function sordOnHand() {
    var myArray = onHand;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  var sordOnField = function sordOnField() {
    var myArray2 = onField;
    myArray2.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
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
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
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
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm9hcmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwibGVuZ3RoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInNvcmRPbkhhbmQiLCJzb3JkT25GaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXJkUGxheWVkIiwiaW5kZXgiLCJwcmV2IiwieCIsImZpbHRlciIsImNhcmQiLCJpZCIsIm15QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm15QXJyYXkyIiwib3ZlcmZsb3ciLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFJLFNBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUViQyxzREFBUSxDQUFDLEVBQUQsQ0FGSztBQUFBLE1BRWxDQyxNQUZrQztBQUFBLE1BRTFCQyxTQUYwQjs7QUFBQSxtQkFHWEYsc0RBQVEsQ0FBQyxFQUFELENBSEc7QUFBQSxNQUdsQ0csT0FIa0M7QUFBQSxNQUd6QkMsVUFIeUI7O0FBS3pDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkI7QUFDQSxRQUFJSixNQUFNLENBQUNLLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJDLGtEQUFLLENBQUNDLEdBQU4sY0FBdUJDLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ1IsaUJBQVMsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBVDtBQUNILE9BRkQ7QUFHSDtBQUNKLEdBUEQ7O0FBU0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxZQUFRO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQU07QUFDWkMsY0FBVTtBQUNiLEdBRlEsRUFFTixDQUFDWixNQUFELENBRk0sQ0FBVDtBQUlBVyx5REFBUyxDQUFDLFlBQU07QUFDWkUsZUFBVztBQUNYQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsT0FBWjtBQUNILEdBSFEsRUFHTixDQUFDQSxPQUFELENBSE0sQ0FBVDs7QUFLQSxNQUFNYyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQsRUFBVztBQUNoQ2QsY0FBVSxDQUFDLFVBQUFlLElBQUksRUFBSTtBQUNmLFVBQUlDLENBQUMsR0FBR25CLE1BQU0sQ0FBQ29CLE1BQVAsQ0FBYyxVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDQyxFQUFMLElBQVdMLEtBQUssR0FBRyxDQUF2QjtBQUFBLE9BQWxCLEVBQTRDLENBQTVDLENBQVI7QUFDQSxvSEFBV0MsSUFBWCxJQUFpQkMsQ0FBakI7QUFDSCxLQUhTLENBQVY7QUFJQWxCLGFBQVMsQ0FBQyxVQUFBaUIsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQUFDLElBQUksRUFBSTtBQUNsQyxlQUFPQSxJQUFJLENBQUNDLEVBQUwsSUFBV0wsS0FBSyxHQUFHLENBQTFCO0FBQ0gsT0FGaUIsQ0FBSjtBQUFBLEtBQUwsQ0FBVDtBQUdILEdBUkQ7O0FBVUEsTUFBTUwsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUNyQixRQUFJVyxPQUFPLEdBQUd2QixNQUFkO0FBQ0F1QixXQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBVUMsT0FBVixFQUFtQlIsS0FBbkIsRUFBMEI7QUFDdENRLGFBQU8sQ0FBQ0gsRUFBUixHQUFhTCxLQUFiO0FBQ0gsS0FGRDtBQUdILEdBTEQ7O0FBT0EsTUFBTUosV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN0QixRQUFJYSxRQUFRLEdBQUd4QixPQUFmO0FBQ0F3QixZQUFRLENBQUNGLE9BQVQsQ0FBaUIsVUFBVUMsT0FBVixFQUFtQlIsS0FBbkIsRUFBMEI7QUFDdkNRLGFBQU8sQ0FBQ0gsRUFBUixHQUFhTCxLQUFiO0FBQ0gsS0FGRDtBQUdILEdBTEQ7O0FBT0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxTQUFLLEVBQUU7QUFBRVUsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxTQUFLLEVBQUU7QUFBRUQsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQU0sU0FBSyxFQUFFNUIsTUFBYjtBQUFxQixZQUFRLEVBQUVnQixnQkFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESjtBQVVILENBN0RzQixrQ0FBdkI7TUFBTXBCLFU7QUErRFNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lY2Y4YTA4N2I5NGZjZWVjNzhiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnO1xyXG5pbXBvcnQgSGFuZCBmcm9tICcuL0hhbmQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBsYXllckhhbmQgPSBtZW1vKGZ1bmN0aW9uIENvbnRhaW5lcigpIHtcclxuXHJcbiAgICBjb25zdCBbb25IYW5kLCBzZXRPbkhhbmRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW29uRmllbGQsIHNldE9uRmllbGRdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBnZXRDYXJkcyA9ICgpID0+IHtcclxuICAgICAgICAvL2lmIG9uSGFuZCBoYXZlIG5vdCBsb2FkZWQgeWV0IHRoZW4gbG9hZCB0aGVtIGZyb20gc2VydmVyLlxyXG4gICAgICAgIGlmIChvbkhhbmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS9jYXJkYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRPbkhhbmQocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29yZE9uSGFuZCgpXHJcbiAgICB9LCBbb25IYW5kXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3JkT25GaWVsZCgpXHJcbiAgICAgICAgY29uc29sZS5sb2cob25GaWVsZClcclxuICAgIH0sIFtvbkZpZWxkXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZFBsYXllZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldE9uRmllbGQocHJldiA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gb25IYW5kLmZpbHRlcihjYXJkID0+IGNhcmQuaWQgPT0gaW5kZXggLSAxKVswXVxyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnByZXYsIHhdXHJcbiAgICAgICAgfSlcclxuICAgICAgICBzZXRPbkhhbmQocHJldiA9PiBwcmV2LmZpbHRlcihjYXJkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmQuaWQgIT0gaW5kZXggLSAxXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29yZE9uSGFuZCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgbXlBcnJheSA9IG9uSGFuZFxyXG4gICAgICAgIG15QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IGluZGV4O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvcmRPbkZpZWxkID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5MiA9IG9uRmllbGRcclxuICAgICAgICBteUFycmF5Mi5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xyXG4gICAgICAgICAgICBlbGVtZW50LmlkID0gaW5kZXg7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGFuZCBjYXJkcz17b25IYW5kfSBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=