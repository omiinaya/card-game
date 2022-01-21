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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      onHand = _useState[0],
      setOnHand = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      onField = _useState2[0],
      setOnField = _useState2[1];

  var getCards = function getCards() {
    //if cards have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/card").then(function (res) {
        setOnHand(res.data.data);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    sortCardIds();
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    console.log(onField);
  }, [onField]);

  var handleCardPlayed = function handleCardPlayed(index) {
    setOnField(function (prev) {
      return prev.push(prev.filter(function (card) {
        return card.id == index - 1;
      }));
    });
    setOnHand(function (prev) {
      return prev.filter(function (card) {
        return card.id != index - 1;
      });
    });
  };

  var playerAction = function playerAction() {
    console.log(onField);
  };

  var sortCardIds = function sortCardIds() {
    var myArray = onHand;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cards: onField,
    playerAction: playerAction,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvQm9hcmQuanN4Il0sIm5hbWVzIjpbIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwidXNlU3RhdGUiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwibGVuZ3RoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInVzZUVmZmVjdCIsInNvcnRDYXJkSWRzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsInByZXYiLCJwdXNoIiwiZmlsdGVyIiwiY2FyZCIsImlkIiwicGxheWVyQWN0aW9uIiwibXlBcnJheSIsImZvckVhY2giLCJlbGVtZW50Iiwib3ZlcmZsb3ciLCJjbGVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLGtEQUFJLFNBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUFBOztBQUFBLGtCQUViQyxzREFBUSxDQUFDLEVBQUQsQ0FGSztBQUFBLE1BRWxDQyxNQUZrQztBQUFBLE1BRTFCQyxTQUYwQjs7QUFBQSxtQkFHWEYsc0RBQVEsQ0FBQyxFQUFELENBSEc7QUFBQSxNQUdsQ0csT0FIa0M7QUFBQSxNQUd6QkMsVUFIeUI7O0FBS3pDLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDbkI7QUFDQSxRQUFJSixNQUFNLENBQUNLLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJDLGtEQUFLLENBQUNDLEdBQU4sY0FBdUJDLElBQXZCLENBQTRCLFVBQUNDLEdBQUQsRUFBUztBQUNqQ1IsaUJBQVMsQ0FBQ1EsR0FBRyxDQUFDQyxJQUFKLENBQVNBLElBQVYsQ0FBVDtBQUNILE9BRkQ7QUFHSDtBQUNKLEdBUEQ7O0FBU0FDLHlEQUFTLENBQUMsWUFBTTtBQUNaUCxZQUFRO0FBQ1gsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBTyx5REFBUyxDQUFDLFlBQU07QUFDWkMsZUFBVztBQUNkLEdBRlEsRUFFTixDQUFDWixNQUFELENBRk0sQ0FBVDtBQUlBVyx5REFBUyxDQUFDLFlBQU07QUFDWkUsV0FBTyxDQUFDQyxHQUFSLENBQVlaLE9BQVo7QUFDSCxHQUZRLEVBRU4sQ0FBQ0EsT0FBRCxDQUZNLENBQVQ7O0FBSUEsTUFBTWEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVc7QUFDaENiLGNBQVUsQ0FBQyxVQUFBYyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxJQUFMLENBQVVELElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNDLEVBQUwsSUFBV0wsS0FBSyxHQUFHLENBQXZCO0FBQUEsT0FBaEIsQ0FBVixDQUFKO0FBQUEsS0FBTCxDQUFWO0FBRUFmLGFBQVMsQ0FBQyxVQUFBZ0IsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0UsTUFBTCxDQUFZLFVBQUFDLElBQUksRUFBSTtBQUNsQyxlQUFPQSxJQUFJLENBQUNDLEVBQUwsSUFBV0wsS0FBSyxHQUFHLENBQTFCO0FBQ0gsT0FGaUIsQ0FBSjtBQUFBLEtBQUwsQ0FBVDtBQUdILEdBTkQ7O0FBUUEsTUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN2QlQsV0FBTyxDQUFDQyxHQUFSLENBQVlaLE9BQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEIsUUFBSVcsT0FBTyxHQUFHdkIsTUFBZDtBQUNBdUIsV0FBTyxDQUFDQyxPQUFSLENBQWdCLFVBQVVDLE9BQVYsRUFBbUJULEtBQW5CLEVBQTBCO0FBQ3RDUyxhQUFPLENBQUNKLEVBQVIsR0FBYUwsS0FBYjtBQUNILEtBRkQ7QUFHSCxHQUxEOztBQU9BLFNBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVVLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4Q0FBRDtBQUFPLFNBQUssRUFBRXpCLE9BQWQ7QUFBdUIsZ0JBQVksRUFBRW9CLFlBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUk7QUFBSyxTQUFLLEVBQUU7QUFBRUksY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZDQUFEO0FBQU0sU0FBSyxFQUFFM0IsTUFBYjtBQUFxQixZQUFRLEVBQUVlLGdCQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKO0FBVUgsQ0F2RHNCLGtDQUF2QjtNQUFNbkIsVTtBQXlEU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjBkMjY0NjNjZGNkYjQwNWNlNTdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCc7XHJcbmltcG9ydCBIYW5kIGZyb20gJy4vSGFuZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtvbkhhbmQsIHNldE9uSGFuZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbb25GaWVsZCwgc2V0T25GaWVsZF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9pZiBjYXJkcyBoYXZlIG5vdCBsb2FkZWQgeWV0IHRoZW4gbG9hZCB0aGVtIGZyb20gc2VydmVyLlxyXG4gICAgICAgIGlmIChvbkhhbmQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGF4aW9zLmdldChgL2FwaS9jYXJkYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRPbkhhbmQocmVzLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ydENhcmRJZHMoKTtcclxuICAgIH0sIFtvbkhhbmRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uRmllbGQpXHJcbiAgICB9LCBbb25GaWVsZF0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRQbGF5ZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRPbkZpZWxkKHByZXYgPT4gcHJldi5wdXNoKHByZXYuZmlsdGVyKGNhcmQgPT4gY2FyZC5pZCA9PSBpbmRleCAtIDEpXHJcbiAgICAgICAgKSlcclxuICAgICAgICBzZXRPbkhhbmQocHJldiA9PiBwcmV2LmZpbHRlcihjYXJkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmQuaWQgIT0gaW5kZXggLSAxXHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcGxheWVyQWN0aW9uID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uRmllbGQpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29ydENhcmRJZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG15QXJyYXkgPSBvbkhhbmRcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGNhcmRzPXtvbkZpZWxkfSBwbGF5ZXJBY3Rpb249e3BsYXllckFjdGlvbn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGFuZCBjYXJkcz17b25IYW5kfSBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCJdLCJzb3VyY2VSb290IjoiIn0=