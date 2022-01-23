webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/game/Board.jsx":
/*!***********************************!*\
  !*** ./components/game/Board.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./components/game/Field.jsx");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hand */ "./components/game/Hand.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Board.jsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_c = _s(function Container() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      init = _useState[0],
      setInit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      onHand = _useState2[0],
      setOnHand = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      onField = _useState3[0],
      setOnField = _useState3[1];

  var getCards = function getCards() {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/card").then(function (res) {
        var hand = res.data.data.sort(function () {
          return Math.random() - Math.random();
        }).slice(0, 10);
        sortIDs(hand);
        setOnHand(hand);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    sortIDs(onHand);
    console.log(onHand);
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    //sortIDs(onField)
    console.log(onField);
  }, [onField]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setOnHand(function (prev) {
      return prev.filter(function (card) {
        console.log(card.id, index);
        return Number(card.id) != Number(index - 1);
      });
    }); //setOnField(prevArray => [...prevArray, onHand.filter(card => card.id == index - 1)[0]])
  };

  var sortIDs = function sortIDs(array) {
    var myArray = array;
    myArray.forEach(function (element, index) {
      element.id = init ? index + 1 : index;
    }); //setInit(true)
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cards: onField,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
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
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  })));
}, "EirVxFMSFnF6iM9owpf6sCnavMg="));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm9hcmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJpbml0Iiwic2V0SW5pdCIsIm9uSGFuZCIsInNldE9uSGFuZCIsIm9uRmllbGQiLCJzZXRPbkZpZWxkIiwiZ2V0Q2FyZHMiLCJsZW5ndGgiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJoYW5kIiwiZGF0YSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic2xpY2UiLCJzb3J0SURzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwiaWQiLCJOdW1iZXIiLCJhcnJheSIsIm15QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm92ZXJmbG93IiwiY2xlYXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyxrREFBSSxTQUFDLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxrQkFFakJDLHNEQUFRLENBQUMsS0FBRCxDQUZTO0FBQUEsTUFFbENDLElBRmtDO0FBQUEsTUFFNUJDLE9BRjRCOztBQUFBLG1CQUdiRixzREFBUSxDQUFDLEVBQUQsQ0FISztBQUFBLE1BR2xDRyxNQUhrQztBQUFBLE1BRzFCQyxTQUgwQjs7QUFBQSxtQkFJWEosc0RBQVEsQ0FBQyxFQUFELENBSkc7QUFBQSxNQUlsQ0ssT0FKa0M7QUFBQSxNQUl6QkMsVUFKeUI7O0FBTXpDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkI7QUFDQSxRQUFJSixNQUFNLENBQUNLLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJDLGtEQUFLLENBQUNDLEdBQU4sY0FBdUJDLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQyxZQUFJQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTQSxJQUFULENBQWNDLElBQWQsQ0FBbUI7QUFBQSxpQkFBTUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCRCxJQUFJLENBQUNDLE1BQUwsRUFBdEI7QUFBQSxTQUFuQixFQUF3REMsS0FBeEQsQ0FBOEQsQ0FBOUQsRUFBaUUsRUFBakUsQ0FBWDtBQUNBQyxlQUFPLENBQUNOLElBQUQsQ0FBUDtBQUNBVCxpQkFBUyxDQUFDUyxJQUFELENBQVQ7QUFDSCxPQUpEO0FBS0g7QUFDSixHQVREOztBQVdBTyx5REFBUyxDQUFDLFlBQU07QUFDWmIsWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQWEseURBQVMsQ0FBQyxZQUFNO0FBQ1pELFdBQU8sQ0FBQ2hCLE1BQUQsQ0FBUDtBQUNBa0IsV0FBTyxDQUFDQyxHQUFSLENBQVluQixNQUFaO0FBQ0gsR0FIUSxFQUdOLENBQUNBLE1BQUQsQ0FITSxDQUFUO0FBS0FpQix5REFBUyxDQUFDLFlBQU07QUFDWjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWpCLE9BQVo7QUFDSCxHQUhRLEVBR04sQ0FBQ0EsT0FBRCxDQUhNLENBQVQ7O0FBS0EsTUFBTWtCLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDcEIsYUFBUyxDQUFDLFVBQUFxQixJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxNQUFMLENBQVksVUFBQ0MsSUFBRCxFQUFVO0FBQ3BDTixlQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBSSxDQUFDQyxFQUFqQixFQUFxQkosS0FBckI7QUFDQSxlQUFPSyxNQUFNLENBQUNGLElBQUksQ0FBQ0MsRUFBTixDQUFOLElBQW1CQyxNQUFNLENBQUNMLEtBQUssR0FBRyxDQUFULENBQWhDO0FBQ0gsT0FIaUIsQ0FBSjtBQUFBLEtBQUwsQ0FBVCxDQURnQyxDQUtoQztBQUNILEdBTkQ7O0FBUUEsTUFBTUwsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ1csS0FBRCxFQUFXO0FBQ3ZCLFFBQUlDLE9BQU8sR0FBR0QsS0FBZDtBQUNBQyxXQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBVUMsT0FBVixFQUFtQlQsS0FBbkIsRUFBMEI7QUFDdENTLGFBQU8sQ0FBQ0wsRUFBUixHQUFjM0IsSUFBSSxHQUFHdUIsS0FBSyxHQUFHLENBQVgsR0FBZUEsS0FBakM7QUFDSCxLQUZELEVBRnVCLENBS3ZCO0FBQ0gsR0FORDs7QUFRQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFVSxjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUU5QixPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxTQUFLLEVBQUU7QUFBRTZCLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFNLFNBQUssRUFBRWhDLE1BQWI7QUFBcUIsWUFBUSxFQUFFb0IsZ0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLENBREo7QUFVSCxDQXpEc0Isa0NBQXZCO01BQU0xQixVO0FBMkRTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjc4YzBjYmU5ODkxZjRmODFlOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJztcclxuaW1wb3J0IEhhbmQgZnJvbSAnLi9IYW5kJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2luaXQsIHNldEluaXRdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbb25IYW5kLCBzZXRPbkhhbmRdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBbb25GaWVsZCwgc2V0T25GaWVsZF0gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBnZXRDYXJkcyA9ICgpID0+IHtcclxuICAgICAgICAvL2lmIG9uSGFuZCBoYXZlIG5vdCBsb2FkZWQgeWV0IHRoZW4gbG9hZCB0aGVtIGZyb20gc2VydmVyLlxyXG4gICAgICAgIGlmIChvbkhhbmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS9jYXJkYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZCA9IHJlcy5kYXRhLmRhdGEuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gTWF0aC5yYW5kb20oKSkuc2xpY2UoMCwgMTApXHJcbiAgICAgICAgICAgICAgICBzb3J0SURzKGhhbmQpXHJcbiAgICAgICAgICAgICAgICBzZXRPbkhhbmQoaGFuZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ydElEcyhvbkhhbmQpXHJcbiAgICAgICAgY29uc29sZS5sb2cob25IYW5kKVxyXG4gICAgfSwgW29uSGFuZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9zb3J0SURzKG9uRmllbGQpXHJcbiAgICAgICAgY29uc29sZS5sb2cob25GaWVsZClcclxuICAgIH0sIFtvbkZpZWxkXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZFBsYXllZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldE9uSGFuZChwcmV2ID0+IHByZXYuZmlsdGVyKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmQuaWQsIGluZGV4KVxyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGNhcmQuaWQpICE9IE51bWJlcihpbmRleCAtIDEpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLy9zZXRPbkZpZWxkKHByZXZBcnJheSA9PiBbLi4ucHJldkFycmF5LCBvbkhhbmQuZmlsdGVyKGNhcmQgPT4gY2FyZC5pZCA9PSBpbmRleCAtIDEpWzBdXSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3J0SURzID0gKGFycmF5KSA9PiB7XHJcbiAgICAgICAgdmFyIG15QXJyYXkgPSBhcnJheVxyXG4gICAgICAgIG15QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IChpbml0ID8gaW5kZXggKyAxIDogaW5kZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vc2V0SW5pdCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgY2FyZHM9e29uRmllbGR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxIYW5kIGNhcmRzPXtvbkhhbmR9IHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=