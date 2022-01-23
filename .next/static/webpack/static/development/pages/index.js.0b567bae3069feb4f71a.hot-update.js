webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Home.jsx":
/*!**********************************!*\
  !*** ./components/home/Home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardCreate/CardCreate */ "./components/cardCreate/CardCreate.jsx");
/* harmony import */ var _game_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/Board */ "./components/game/Board.jsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "./node_modules/react-dnd/dist/esm/index.js");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ "./node_modules/react-dnd-html5-backend/dist/esm/index.js");
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd-touch-backend */ "./node_modules/react-dnd-touch-backend/dist/esm/index.js");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\home\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import PlayerHand from '../playerHand/PlayerHand'





function Home(props) {
  var _props$data = props.data,
      user = _props$data.user,
      origin = _props$data.origin;
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Hello world!"), __jsx(_cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__["HTML5Backend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), user && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "User ID: ", user.id)));
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/OptionsReader.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/OptionsReader.js ***!
  \************************************************************************/
/*! exports provided: OptionsReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsReader", function() { return OptionsReader; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var OptionsReader = /*#__PURE__*/function () {
  function OptionsReader(args, context) {
    _classCallCheck(this, OptionsReader);

    _defineProperty(this, "args", void 0);

    _defineProperty(this, "context", void 0);

    this.args = args;
    this.context = context;
  }

  _createClass(OptionsReader, [{
    key: "delay",
    get: function get() {
      var _this$args$delay;

      return (_this$args$delay = this.args.delay) !== null && _this$args$delay !== void 0 ? _this$args$delay : 0;
    }
  }, {
    key: "scrollAngleRanges",
    get: function get() {
      return this.args.scrollAngleRanges;
    }
  }, {
    key: "getDropTargetElementsAtPoint",
    get: function get() {
      return this.args.getDropTargetElementsAtPoint;
    }
  }, {
    key: "ignoreContextMenu",
    get: function get() {
      var _this$args$ignoreCont;

      return (_this$args$ignoreCont = this.args.ignoreContextMenu) !== null && _this$args$ignoreCont !== void 0 ? _this$args$ignoreCont : false;
    }
  }, {
    key: "enableHoverOutsideTarget",
    get: function get() {
      var _this$args$enableHove;

      return (_this$args$enableHove = this.args.enableHoverOutsideTarget) !== null && _this$args$enableHove !== void 0 ? _this$args$enableHove : false;
    }
  }, {
    key: "enableKeyboardEvents",
    get: function get() {
      var _this$args$enableKeyb;

      return (_this$args$enableKeyb = this.args.enableKeyboardEvents) !== null && _this$args$enableKeyb !== void 0 ? _this$args$enableKeyb : false;
    }
  }, {
    key: "enableMouseEvents",
    get: function get() {
      var _this$args$enableMous;

      return (_this$args$enableMous = this.args.enableMouseEvents) !== null && _this$args$enableMous !== void 0 ? _this$args$enableMous : false;
    }
  }, {
    key: "enableTouchEvents",
    get: function get() {
      var _this$args$enableTouc;

      return (_this$args$enableTouc = this.args.enableTouchEvents) !== null && _this$args$enableTouc !== void 0 ? _this$args$enableTouc : true;
    }
  }, {
    key: "touchSlop",
    get: function get() {
      return this.args.touchSlop || 0;
    }
  }, {
    key: "delayTouchStart",
    get: function get() {
      var _ref, _this$args$delayTouch, _this$args, _this$args2;

      return (_ref = (_this$args$delayTouch = (_this$args = this.args) === null || _this$args === void 0 ? void 0 : _this$args.delayTouchStart) !== null && _this$args$delayTouch !== void 0 ? _this$args$delayTouch : (_this$args2 = this.args) === null || _this$args2 === void 0 ? void 0 : _this$args2.delay) !== null && _ref !== void 0 ? _ref : 0;
    }
  }, {
    key: "delayMouseStart",
    get: function get() {
      var _ref2, _this$args$delayMouse, _this$args3, _this$args4;

      return (_ref2 = (_this$args$delayMouse = (_this$args3 = this.args) === null || _this$args3 === void 0 ? void 0 : _this$args3.delayMouseStart) !== null && _this$args$delayMouse !== void 0 ? _this$args$delayMouse : (_this$args4 = this.args) === null || _this$args4 === void 0 ? void 0 : _this$args4.delay) !== null && _ref2 !== void 0 ? _ref2 : 0;
    }
  }, {
    key: "window",
    get: function get() {
      if (this.context && this.context.window) {
        return this.context.window;
      } else if (typeof window !== 'undefined') {
        return window;
      }

      return undefined;
    }
  }, {
    key: "document",
    get: function get() {
      var _this$context;

      if ((_this$context = this.context) !== null && _this$context !== void 0 && _this$context.document) {
        return this.context.document;
      }

      if (this.window) {
        return this.window.document;
      }

      return undefined;
    }
  }, {
    key: "rootElement",
    get: function get() {
      var _this$args5;

      return ((_this$args5 = this.args) === null || _this$args5 === void 0 ? void 0 : _this$args5.rootElement) || this.document;
    }
  }]);

  return OptionsReader;
}();

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/TouchBackendImpl.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/TouchBackendImpl.js ***!
  \***************************************************************************/
/*! exports provided: TouchBackendImpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchBackendImpl", function() { return TouchBackendImpl; });
/* harmony import */ var _react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-dnd/invariant */ "./node_modules/@react-dnd/invariant/dist/invariant.esm.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./node_modules/react-dnd-touch-backend/dist/esm/interfaces.js");
/* harmony import */ var _utils_predicates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/predicates */ "./node_modules/react-dnd-touch-backend/dist/esm/utils/predicates.js");
/* harmony import */ var _utils_offsets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/offsets */ "./node_modules/react-dnd-touch-backend/dist/esm/utils/offsets.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/math */ "./node_modules/react-dnd-touch-backend/dist/esm/utils/math.js");
/* harmony import */ var _utils_supportsPassive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/supportsPassive */ "./node_modules/react-dnd-touch-backend/dist/esm/utils/supportsPassive.js");
/* harmony import */ var _OptionsReader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OptionsReader */ "./node_modules/react-dnd-touch-backend/dist/esm/OptionsReader.js");
var _eventNames;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var eventNames = (_eventNames = {}, _defineProperty(_eventNames, _interfaces__WEBPACK_IMPORTED_MODULE_1__["ListenerType"].mouse, {
  start: 'mousedown',
  move: 'mousemove',
  end: 'mouseup',
  contextmenu: 'contextmenu'
}), _defineProperty(_eventNames, _interfaces__WEBPACK_IMPORTED_MODULE_1__["ListenerType"].touch, {
  start: 'touchstart',
  move: 'touchmove',
  end: 'touchend'
}), _defineProperty(_eventNames, _interfaces__WEBPACK_IMPORTED_MODULE_1__["ListenerType"].keyboard, {
  keydown: 'keydown'
}), _eventNames);
var TouchBackendImpl = /*#__PURE__*/function () {
  // React-DnD Dependencies
  // Internal State
  // Patch for iOS 13, discussion over #1585
  function TouchBackendImpl(manager, context, options) {
    var _this = this;

    _classCallCheck(this, TouchBackendImpl);

    _defineProperty(this, "options", void 0);

    _defineProperty(this, "actions", void 0);

    _defineProperty(this, "monitor", void 0);

    _defineProperty(this, "sourceNodes", void 0);

    _defineProperty(this, "sourcePreviewNodes", void 0);

    _defineProperty(this, "sourcePreviewNodeOptions", void 0);

    _defineProperty(this, "targetNodes", void 0);

    _defineProperty(this, "_mouseClientOffset", void 0);

    _defineProperty(this, "_isScrolling", void 0);

    _defineProperty(this, "listenerTypes", void 0);

    _defineProperty(this, "moveStartSourceIds", void 0);

    _defineProperty(this, "waitingForDelay", void 0);

    _defineProperty(this, "timeout", void 0);

    _defineProperty(this, "dragOverTargetIds", void 0);

    _defineProperty(this, "draggedSourceNode", void 0);

    _defineProperty(this, "draggedSourceNodeRemovalObserver", void 0);

    _defineProperty(this, "lastTargetTouchFallback", void 0);

    _defineProperty(this, "getSourceClientOffset", function (sourceId) {
      var element = _this.sourceNodes.get(sourceId);

      return element && Object(_utils_offsets__WEBPACK_IMPORTED_MODULE_3__["getNodeClientOffset"])(element);
    });

    _defineProperty(this, "handleTopMoveStartCapture", function (e) {
      if (!Object(_utils_predicates__WEBPACK_IMPORTED_MODULE_2__["eventShouldStartDrag"])(e)) {
        return;
      }

      _this.moveStartSourceIds = [];
    });

    _defineProperty(this, "handleMoveStart", function (sourceId) {
      // Just because we received an event doesn't necessarily mean we need to collect drag sources.
      // We only collect start collecting drag sources on touch and left mouse events.
      if (Array.isArray(_this.moveStartSourceIds)) {
        _this.moveStartSourceIds.unshift(sourceId);
      }
    });

    _defineProperty(this, "handleTopMoveStart", function (e) {
      if (!Object(_utils_predicates__WEBPACK_IMPORTED_MODULE_2__["eventShouldStartDrag"])(e)) {
        return;
      } // Don't prematurely preventDefault() here since it might:
      // 1. Mess up scrolling
      // 2. Mess up long tap (which brings up context menu)
      // 3. If there's an anchor link as a child, tap won't be triggered on link


      var clientOffset = Object(_utils_offsets__WEBPACK_IMPORTED_MODULE_3__["getEventClientOffset"])(e);

      if (clientOffset) {
        if (Object(_utils_predicates__WEBPACK_IMPORTED_MODULE_2__["isTouchEvent"])(e)) {
          _this.lastTargetTouchFallback = e.targetTouches[0];
        }

        _this._mouseClientOffset = clientOffset;
      }

      _this.waitingForDelay = false;
    });

    _defineProperty(this, "handleTopMoveStartDelay", function (e) {
      if (!Object(_utils_predicates__WEBPACK_IMPORTED_MODULE_2__["eventShouldStartDrag"])(e)) {
        return;
      }

      var delay = e.type === eventNames.touch.start ? _this.options.delayTouchStart : _this.options.delayMouseStart;
      _this.timeout = setTimeout(_this.handleTopMoveStart.bind(_this, e), delay);
      _this.waitingForDelay = true;
    });

    _defineProperty(this, "handleTopMoveCapture", function () {
      _this.dragOverTargetIds = [];
    });

    _defineProperty(this, "handleMove", function (_evt, targetId) {
      if (_this.dragOverTargetIds) {
        _this.dragOverTargetIds.unshift(targetId);
      }
    });

    _defineProperty(this, "handleTopMove", function (e) {
      if (_this.timeout) {
        clearTimeout(_this.timeout);
      }

      if (!_this.document || _this.waitingForDelay) {
        return;
      }

      var moveStartSourceIds = _this.moveStartSourceIds,
          dragOverTargetIds = _this.dragOverTargetIds;
      var enableHoverOutsideTarget = _this.options.enableHoverOutsideTarget;
      var clientOffset = Object(_utils_offsets__WEBPACK_IMPORTED_MODULE_3__["getEventClientOffset"])(e, _this.lastTargetTouchFallback);

      if (!clientOffset) {
        return;
      } // If the touch move started as a scroll, or is is between the scroll angles


      if (_this._isScrolling || !_this.monitor.isDragging() && Object(_utils_math__WEBPACK_IMPORTED_MODULE_4__["inAngleRanges"])(_this._mouseClientOffset.x || 0, _this._mouseClientOffset.y || 0, clientOffset.x, clientOffset.y, _this.options.scrollAngleRanges)) {
        _this._isScrolling = true;
        return;
      } // If we're not dragging and we've moved a little, that counts as a drag start


      if (!_this.monitor.isDragging() && // eslint-disable-next-line no-prototype-builtins
      _this._mouseClientOffset.hasOwnProperty('x') && moveStartSourceIds && Object(_utils_math__WEBPACK_IMPORTED_MODULE_4__["distance"])(_this._mouseClientOffset.x || 0, _this._mouseClientOffset.y || 0, clientOffset.x, clientOffset.y) > (_this.options.touchSlop ? _this.options.touchSlop : 0)) {
        _this.moveStartSourceIds = undefined;

        _this.actions.beginDrag(moveStartSourceIds, {
          clientOffset: _this._mouseClientOffset,
          getSourceClientOffset: _this.getSourceClientOffset,
          publishSource: false
        });
      }

      if (!_this.monitor.isDragging()) {
        return;
      }

      var sourceNode = _this.sourceNodes.get(_this.monitor.getSourceId());

      _this.installSourceNodeRemovalObserver(sourceNode);

      _this.actions.publishDragSource();

      if (e.cancelable) e.preventDefault(); // Get the node elements of the hovered DropTargets

      var dragOverTargetNodes = (dragOverTargetIds || []).map(function (key) {
        return _this.targetNodes.get(key);
      }).filter(function (e) {
        return !!e;
      }); // Get the a ordered list of nodes that are touched by

      var elementsAtPoint = _this.options.getDropTargetElementsAtPoint ? _this.options.getDropTargetElementsAtPoint(clientOffset.x, clientOffset.y, dragOverTargetNodes) : _this.document.elementsFromPoint(clientOffset.x, clientOffset.y); // Extend list with parents that are not receiving elementsFromPoint events (size 0 elements and svg groups)

      var elementsAtPointExtended = [];

      for (var nodeId in elementsAtPoint) {
        // eslint-disable-next-line no-prototype-builtins
        if (!elementsAtPoint.hasOwnProperty(nodeId)) {
          continue;
        }

        var currentNode = elementsAtPoint[nodeId];
        elementsAtPointExtended.push(currentNode);

        while (currentNode) {
          currentNode = currentNode.parentElement;

          if (currentNode && elementsAtPointExtended.indexOf(currentNode) === -1) {
            elementsAtPointExtended.push(currentNode);
          }
        }
      }

      var orderedDragOverTargetIds = elementsAtPointExtended // Filter off nodes that arent a hovered DropTargets nodes
      .filter(function (node) {
        return dragOverTargetNodes.indexOf(node) > -1;
      }) // Map back the nodes elements to targetIds
      .map(function (node) {
        return _this._getDropTargetId(node);
      }) // Filter off possible null rows
      .filter(function (node) {
        return !!node;
      }).filter(function (id, index, ids) {
        return ids.indexOf(id) === index;
      }); // Invoke hover for drop targets when source node is still over and pointer is outside

      if (enableHoverOutsideTarget) {
        for (var targetId in _this.targetNodes) {
          var targetNode = _this.targetNodes.get(targetId);

          if (sourceNode && targetNode && targetNode.contains(sourceNode) && orderedDragOverTargetIds.indexOf(targetId) === -1) {
            orderedDragOverTargetIds.unshift(targetId);
            break;
          }
        }
      } // Reverse order because dnd-core reverse it before calling the DropTarget drop methods


      orderedDragOverTargetIds.reverse();

      _this.actions.hover(orderedDragOverTargetIds, {
        clientOffset: clientOffset
      });
    });

    _defineProperty(this, "_getDropTargetId", function (node) {
      var keys = _this.targetNodes.keys();

      var next = keys.next();

      while (next.done === false) {
        var targetId = next.value;

        if (node === _this.targetNodes.get(targetId)) {
          return targetId;
        } else {
          next = keys.next();
        }
      }

      return undefined;
    });

    _defineProperty(this, "handleTopMoveEndCapture", function (e) {
      _this._isScrolling = false;
      _this.lastTargetTouchFallback = undefined;

      if (!Object(_utils_predicates__WEBPACK_IMPORTED_MODULE_2__["eventShouldEndDrag"])(e)) {
        return;
      }

      if (!_this.monitor.isDragging() || _this.monitor.didDrop()) {
        _this.moveStartSourceIds = undefined;
        return;
      }

      if (e.cancelable) e.preventDefault();
      _this._mouseClientOffset = {};

      _this.uninstallSourceNodeRemovalObserver();

      _this.actions.drop();

      _this.actions.endDrag();
    });

    _defineProperty(this, "handleCancelOnEscape", function (e) {
      if (e.key === 'Escape' && _this.monitor.isDragging()) {
        _this._mouseClientOffset = {};

        _this.uninstallSourceNodeRemovalObserver();

        _this.actions.endDrag();
      }
    });

    this.options = new _OptionsReader__WEBPACK_IMPORTED_MODULE_6__["OptionsReader"](options, context);
    this.actions = manager.getActions();
    this.monitor = manager.getMonitor();
    this.sourceNodes = new Map();
    this.sourcePreviewNodes = new Map();
    this.sourcePreviewNodeOptions = new Map();
    this.targetNodes = new Map();
    this.listenerTypes = [];
    this._mouseClientOffset = {};
    this._isScrolling = false;

    if (this.options.enableMouseEvents) {
      this.listenerTypes.push(_interfaces__WEBPACK_IMPORTED_MODULE_1__["ListenerType"].mouse);
    }

    if (this.options.enableTouchEvents) {
      this.listenerTypes.push(_interfaces__WEBPACK_IMPORTED_MODULE_1__["ListenerType"].touch);
    }

    if (this.options.enableKeyboardEvents) {
      this.listenerTypes.push(_interfaces__WEBPACK_IMPORTED_MODULE_1__["ListenerType"].keyboard);
    }
  }
  /**
   * Generate profiling statistics for the HTML5Backend.
   */


  _createClass(TouchBackendImpl, [{
    key: "profile",
    value: function profile() {
      var _this$dragOverTargetI;

      return {
        sourceNodes: this.sourceNodes.size,
        sourcePreviewNodes: this.sourcePreviewNodes.size,
        sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
        targetNodes: this.targetNodes.size,
        dragOverTargetIds: ((_this$dragOverTargetI = this.dragOverTargetIds) === null || _this$dragOverTargetI === void 0 ? void 0 : _this$dragOverTargetI.length) || 0
      };
    } // public for test

  }, {
    key: "document",
    get: function get() {
      return this.options.document;
    }
  }, {
    key: "setup",
    value: function setup() {
      var root = this.options.rootElement;

      if (!root) {
        return;
      }

      Object(_react_dnd_invariant__WEBPACK_IMPORTED_MODULE_0__["invariant"])(!TouchBackendImpl.isSetUp, 'Cannot have two Touch backends at the same time.');
      TouchBackendImpl.isSetUp = true;
      this.addEventListener(root, 'start', this.getTopMoveStartHandler());
      this.addEventListener(root, 'start', this.handleTopMoveStartCapture, true);
      this.addEventListener(root, 'move', this.handleTopMove);
      this.addEventListener(root, 'move', this.handleTopMoveCapture, true);
      this.addEventListener(root, 'end', this.handleTopMoveEndCapture, true);

      if (this.options.enableMouseEvents && !this.options.ignoreContextMenu) {
        this.addEventListener(root, 'contextmenu', this.handleTopMoveEndCapture);
      }

      if (this.options.enableKeyboardEvents) {
        this.addEventListener(root, 'keydown', this.handleCancelOnEscape, true);
      }
    }
  }, {
    key: "teardown",
    value: function teardown() {
      var root = this.options.rootElement;

      if (!root) {
        return;
      }

      TouchBackendImpl.isSetUp = false;
      this._mouseClientOffset = {};
      this.removeEventListener(root, 'start', this.handleTopMoveStartCapture, true);
      this.removeEventListener(root, 'start', this.handleTopMoveStart);
      this.removeEventListener(root, 'move', this.handleTopMoveCapture, true);
      this.removeEventListener(root, 'move', this.handleTopMove);
      this.removeEventListener(root, 'end', this.handleTopMoveEndCapture, true);

      if (this.options.enableMouseEvents && !this.options.ignoreContextMenu) {
        this.removeEventListener(root, 'contextmenu', this.handleTopMoveEndCapture);
      }

      if (this.options.enableKeyboardEvents) {
        this.removeEventListener(root, 'keydown', this.handleCancelOnEscape, true);
      }

      this.uninstallSourceNodeRemovalObserver();
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(subject, event, handler, capture) {
      var options = _utils_supportsPassive__WEBPACK_IMPORTED_MODULE_5__["supportsPassive"] ? {
        capture: capture,
        passive: false
      } : capture;
      this.listenerTypes.forEach(function (listenerType) {
        var evt = eventNames[listenerType][event];

        if (evt) {
          subject.addEventListener(evt, handler, options);
        }
      });
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(subject, event, handler, capture) {
      var options = _utils_supportsPassive__WEBPACK_IMPORTED_MODULE_5__["supportsPassive"] ? {
        capture: capture,
        passive: false
      } : capture;
      this.listenerTypes.forEach(function (listenerType) {
        var evt = eventNames[listenerType][event];

        if (evt) {
          subject.removeEventListener(evt, handler, options);
        }
      });
    }
  }, {
    key: "connectDragSource",
    value: function connectDragSource(sourceId, node) {
      var _this2 = this;

      var handleMoveStart = this.handleMoveStart.bind(this, sourceId);
      this.sourceNodes.set(sourceId, node);
      this.addEventListener(node, 'start', handleMoveStart);
      return function () {
        _this2.sourceNodes.delete(sourceId);

        _this2.removeEventListener(node, 'start', handleMoveStart);
      };
    }
  }, {
    key: "connectDragPreview",
    value: function connectDragPreview(sourceId, node, options) {
      var _this3 = this;

      this.sourcePreviewNodeOptions.set(sourceId, options);
      this.sourcePreviewNodes.set(sourceId, node);
      return function () {
        _this3.sourcePreviewNodes.delete(sourceId);

        _this3.sourcePreviewNodeOptions.delete(sourceId);
      };
    }
  }, {
    key: "connectDropTarget",
    value: function connectDropTarget(targetId, node) {
      var _this4 = this;

      var root = this.options.rootElement;

      if (!this.document || !root) {
        return function () {
          /* noop */
        };
      }

      var handleMove = function handleMove(e) {
        if (!_this4.document || !root || !_this4.monitor.isDragging()) {
          return;
        }

        var coords;
        /**
         * Grab the coordinates for the current mouse/touch position
         */

        switch (e.type) {
          case eventNames.mouse.move:
            coords = {
              x: e.clientX,
              y: e.clientY
            };
            break;

          case eventNames.touch.move:
            coords = {
              x: e.touches[0].clientX,
              y: e.touches[0].clientY
            };
            break;
        }
        /**
         * Use the coordinates to grab the element the drag ended on.
         * If the element is the same as the target node (or any of it's children) then we have hit a drop target and can handle the move.
         */


        var droppedOn = coords != null ? _this4.document.elementFromPoint(coords.x, coords.y) : undefined;
        var childMatch = droppedOn && node.contains(droppedOn);

        if (droppedOn === node || childMatch) {
          return _this4.handleMove(e, targetId);
        }
      };
      /**
       * Attaching the event listener to the body so that touchmove will work while dragging over multiple target elements.
       */


      this.addEventListener(this.document.body, 'move', handleMove);
      this.targetNodes.set(targetId, node);
      return function () {
        if (_this4.document) {
          _this4.targetNodes.delete(targetId);

          _this4.removeEventListener(_this4.document.body, 'move', handleMove);
        }
      };
    }
  }, {
    key: "getTopMoveStartHandler",
    value: function getTopMoveStartHandler() {
      if (!this.options.delayTouchStart && !this.options.delayMouseStart) {
        return this.handleTopMoveStart;
      }

      return this.handleTopMoveStartDelay;
    }
  }, {
    key: "installSourceNodeRemovalObserver",
    value: function installSourceNodeRemovalObserver(node) {
      var _this5 = this;

      this.uninstallSourceNodeRemovalObserver();
      this.draggedSourceNode = node;
      this.draggedSourceNodeRemovalObserver = new MutationObserver(function () {
        if (node && !node.parentElement) {
          _this5.resurrectSourceNode();

          _this5.uninstallSourceNodeRemovalObserver();
        }
      });

      if (!node || !node.parentElement) {
        return;
      }

      this.draggedSourceNodeRemovalObserver.observe(node.parentElement, {
        childList: true
      });
    }
  }, {
    key: "resurrectSourceNode",
    value: function resurrectSourceNode() {
      if (this.document && this.draggedSourceNode) {
        this.draggedSourceNode.style.display = 'none';
        this.draggedSourceNode.removeAttribute('data-reactid');
        this.document.body.appendChild(this.draggedSourceNode);
      }
    }
  }, {
    key: "uninstallSourceNodeRemovalObserver",
    value: function uninstallSourceNodeRemovalObserver() {
      if (this.draggedSourceNodeRemovalObserver) {
        this.draggedSourceNodeRemovalObserver.disconnect();
      }

      this.draggedSourceNodeRemovalObserver = undefined;
      this.draggedSourceNode = undefined;
    }
  }]);

  return TouchBackendImpl;
}();

_defineProperty(TouchBackendImpl, "isSetUp", void 0);

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/index.js ***!
  \****************************************************************/
/*! exports provided: ListenerType, TouchBackendImpl, TouchBackend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchBackend", function() { return TouchBackend; });
/* harmony import */ var _TouchBackendImpl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TouchBackendImpl */ "./node_modules/react-dnd-touch-backend/dist/esm/TouchBackendImpl.js");
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces */ "./node_modules/react-dnd-touch-backend/dist/esm/interfaces.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListenerType", function() { return _interfaces__WEBPACK_IMPORTED_MODULE_1__["ListenerType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TouchBackendImpl", function() { return _TouchBackendImpl__WEBPACK_IMPORTED_MODULE_0__["TouchBackendImpl"]; });




var TouchBackend = function createBackend(manager) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return new _TouchBackendImpl__WEBPACK_IMPORTED_MODULE_0__["TouchBackendImpl"](manager, context, options);
};

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/interfaces.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/interfaces.js ***!
  \*********************************************************************/
/*! exports provided: ListenerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListenerType", function() { return ListenerType; });
var ListenerType;

(function (ListenerType) {
  ListenerType["mouse"] = "mouse";
  ListenerType["touch"] = "touch";
  ListenerType["keyboard"] = "keyboard";
})(ListenerType || (ListenerType = {}));

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/utils/math.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/utils/math.js ***!
  \*********************************************************************/
/*! exports provided: distance, inAngleRanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inAngleRanges", function() { return inAngleRanges; });
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));
}
function inAngleRanges(x1, y1, x2, y2, angleRanges) {
  if (!angleRanges) {
    return false;
  }

  var angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI + 180;

  for (var i = 0; i < angleRanges.length; ++i) {
    if ((angleRanges[i].start == null || angle >= angleRanges[i].start) && (angleRanges[i].end == null || angle <= angleRanges[i].end)) {
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/utils/offsets.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/utils/offsets.js ***!
  \************************************************************************/
/*! exports provided: getNodeClientOffset, getEventClientTouchOffset, getEventClientOffset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNodeClientOffset", function() { return getNodeClientOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventClientTouchOffset", function() { return getEventClientTouchOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventClientOffset", function() { return getEventClientOffset; });
/* harmony import */ var _predicates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./predicates */ "./node_modules/react-dnd-touch-backend/dist/esm/utils/predicates.js");

var ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
  var el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;

  if (!el) {
    return undefined;
  }

  var _el$getBoundingClient = el.getBoundingClientRect(),
      top = _el$getBoundingClient.top,
      left = _el$getBoundingClient.left;

  return {
    x: left,
    y: top
  };
}
function getEventClientTouchOffset(e, lastTargetTouchFallback) {
  if (e.targetTouches.length === 1) {
    return getEventClientOffset(e.targetTouches[0]);
  } else if (lastTargetTouchFallback && e.touches.length === 1) {
    if (e.touches[0].target === lastTargetTouchFallback.target) {
      return getEventClientOffset(e.touches[0]);
    }
  }
}
function getEventClientOffset(e, lastTargetTouchFallback) {
  if (Object(_predicates__WEBPACK_IMPORTED_MODULE_0__["isTouchEvent"])(e)) {
    return getEventClientTouchOffset(e, lastTargetTouchFallback);
  } else {
    return {
      x: e.clientX,
      y: e.clientY
    };
  }
}

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/utils/predicates.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/utils/predicates.js ***!
  \***************************************************************************/
/*! exports provided: eventShouldStartDrag, eventShouldEndDrag, isTouchEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventShouldStartDrag", function() { return eventShouldStartDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventShouldEndDrag", function() { return eventShouldEndDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouchEvent", function() { return isTouchEvent; });
// Used for MouseEvent.buttons (note the s on the end).
var MouseButtons = {
  Left: 1,
  Right: 2,
  Center: 4
}; // Used for e.button (note the lack of an s on the end).

var MouseButton = {
  Left: 0,
  Center: 1,
  Right: 2
};
/**
 * Only touch events and mouse events where the left button is pressed should initiate a drag.
 * @param {MouseEvent | TouchEvent} e The event
 */

function eventShouldStartDrag(e) {
  // For touch events, button will be undefined. If e.button is defined,
  // then it should be MouseButton.Left.
  return e.button === undefined || e.button === MouseButton.Left;
}
/**
 * Only touch events and mouse events where the left mouse button is no longer held should end a drag.
 * It's possible the user mouse downs with the left mouse button, then mouse down and ups with the right mouse button.
 * We don't want releasing the right mouse button to end the drag.
 * @param {MouseEvent | TouchEvent} e The event
 */

function eventShouldEndDrag(e) {
  // Touch events will have buttons be undefined, while mouse events will have e.buttons's left button
  // bit field unset if the left mouse button has been released
  return e.buttons === undefined || (e.buttons & MouseButtons.Left) === 0;
}
function isTouchEvent(e) {
  return !!e.targetTouches;
}

/***/ }),

/***/ "./node_modules/react-dnd-touch-backend/dist/esm/utils/supportsPassive.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-dnd-touch-backend/dist/esm/utils/supportsPassive.js ***!
  \********************************************************************************/
/*! exports provided: supportsPassive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassive", function() { return supportsPassive; });
var supportsPassive = function () {
  // simular to jQuery's test
  var supported = false;

  try {
    addEventListener('test', function () {// do nothing
    }, Object.defineProperty({}, 'passive', {
      get: function get() {
        supported = true;
        return true;
      }
    }));
  } catch (e) {// do nothing
  }

  return supported;
}();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kL2Rpc3QvZXNtL09wdGlvbnNSZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kL2Rpc3QvZXNtL1RvdWNoQmFja2VuZEltcGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRuZC10b3VjaC1iYWNrZW5kL2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L2VzbS9pbnRlcmZhY2VzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L2VzbS91dGlscy9tYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L2VzbS91dGlscy9vZmZzZXRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L2VzbS91dGlscy9wcmVkaWNhdGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kbmQtdG91Y2gtYmFja2VuZC9kaXN0L2VzbS91dGlscy9zdXBwb3J0c1Bhc3NpdmUuanMiXSwibmFtZXMiOlsiSG9tZSIsInByb3BzIiwiZGF0YSIsInVzZXIiLCJvcmlnaW4iLCJIVE1MNUJhY2tlbmQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUEsb0JBQ1RBLEtBQUssQ0FBQ0MsSUFERztBQUFBLE1BQzFCQyxJQUQwQixlQUMxQkEsSUFEMEI7QUFBQSxNQUNwQkMsTUFEb0IsZUFDcEJBLE1BRG9CO0FBRWxDLFNBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxxREFBRDtBQUFhLFdBQU8sRUFBRUMsb0VBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUhGLEVBTUdGLElBQUksSUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csV0FESCxFQUVHQSxJQUFJLENBQUNHLEVBRlIsQ0FQSixDQURGLENBREY7QUFpQkQ7S0FuQnVCTixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHhCO0FBQUE7QUFBQSxpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SiwyQ0FBMkMsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFM1QsNkRBQTZELHNFQUFzRSw4REFBOEQsb0JBQW9COztBQUVyTiwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFeE07QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUMsRzs7Ozs7Ozs7Ozs7O0FDL0hEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLGlEQUFpRCwwQ0FBMEMsMERBQTBELEVBQUU7O0FBRXZKLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7O0FBRXJOLDJDQUEyQyxrQkFBa0Isa0NBQWtDLHFFQUFxRSxFQUFFLEVBQUUsT0FBTyxrQkFBa0IsRUFBRSxZQUFZOztBQUU5SjtBQUNMO0FBQ2dEO0FBQ2hCO0FBQ3JCO0FBQ0c7QUFDVjtBQUNoRCxrQ0FBa0MsK0JBQStCLHdEQUFZO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0Msd0RBQVk7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnQ0FBZ0Msd0RBQVk7QUFDN0M7QUFDQSxDQUFDO0FBQ007QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsd0JBQXdCLDBFQUFtQjtBQUMzQyxLQUFLOztBQUVMO0FBQ0EsV0FBVyw4RUFBb0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLFdBQVcsOEVBQW9CO0FBQy9CO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0EseUJBQXlCLDJFQUFvQjs7QUFFN0M7QUFDQSxZQUFZLHNFQUFZO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxXQUFXLDhFQUFvQjtBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMkVBQW9COztBQUU3QztBQUNBO0FBQ0EsT0FBTzs7O0FBR1AsK0RBQStELGlFQUFhO0FBQzVFO0FBQ0E7QUFDQSxPQUFPOzs7QUFHUDtBQUNBLDRFQUE0RSw0REFBUTtBQUNwRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyxFQUFFOztBQUVULDRPQUE0Tzs7QUFFNU87O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBLFdBQVcsNEVBQWtCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHVCQUF1Qiw0REFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEIsd0RBQVk7QUFDMUM7O0FBRUE7QUFDQSw4QkFBOEIsd0RBQVk7QUFDMUM7O0FBRUE7QUFDQSw4QkFBOEIsd0RBQVk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0sc0VBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0Isc0VBQWU7QUFDbkM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHNFQUFlO0FBQ25DO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOztBQUVELHFEOzs7Ozs7Ozs7Ozs7QUM3akJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBc0Q7QUFDekI7QUFDTTtBQUM1QjtBQUNQO0FBQ0E7QUFDQSxhQUFhLGtFQUFnQjtBQUM3QixFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQyxHOzs7Ozs7Ozs7Ozs7QUNOckM7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRDO0FBQzVDO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1AsTUFBTSxnRUFBWTtBQUNsQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdCQUF3QjtBQUNuQzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHdCQUF3QjtBQUNuQzs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDLEtBQUssMEJBQTBCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUcsWUFBWTtBQUNmOztBQUVBO0FBQ0EsQ0FBQyxHIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wYjU2N2JhZTMwNjlmZWI0ZjcxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmRDcmVhdGUgZnJvbSAnLi4vY2FyZENyZWF0ZS9DYXJkQ3JlYXRlJ1xyXG4vL2ltcG9ydCBQbGF5ZXJIYW5kIGZyb20gJy4uL3BsYXllckhhbmQvUGxheWVySGFuZCdcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL2dhbWUvQm9hcmQnXHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJ1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcclxuaW1wb3J0IHsgVG91Y2hCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzLmRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhlbGxvIHdvcmxkITwvaDE+XHJcbiAgICAgICAgPENhcmRDcmVhdGUgLz5cclxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cclxuICAgICAgICAgIDxCb2FyZCAvPlxyXG4gICAgICAgIDwvRG5kUHJvdmlkZXI+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1wiVXNlciBJRDogXCJ9XHJcbiAgICAgICAgICAgIHt1c2VyLmlkfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmV4cG9ydCB2YXIgT3B0aW9uc1JlYWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9wdGlvbnNSZWFkZXIoYXJncywgY29udGV4dCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb25zUmVhZGVyKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFyZ3NcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImNvbnRleHRcIiwgdm9pZCAwKTtcblxuICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhPcHRpb25zUmVhZGVyLCBbe1xuICAgIGtleTogXCJkZWxheVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJGFyZ3MkZGVsYXk7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkYXJncyRkZWxheSA9IHRoaXMuYXJncy5kZWxheSkgIT09IG51bGwgJiYgX3RoaXMkYXJncyRkZWxheSAhPT0gdm9pZCAwID8gX3RoaXMkYXJncyRkZWxheSA6IDA7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInNjcm9sbEFuZ2xlUmFuZ2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcmdzLnNjcm9sbEFuZ2xlUmFuZ2VzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXREcm9wVGFyZ2V0RWxlbWVudHNBdFBvaW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcmdzLmdldERyb3BUYXJnZXRFbGVtZW50c0F0UG9pbnQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImlnbm9yZUNvbnRleHRNZW51XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkYXJncyRpZ25vcmVDb250O1xuXG4gICAgICByZXR1cm4gKF90aGlzJGFyZ3MkaWdub3JlQ29udCA9IHRoaXMuYXJncy5pZ25vcmVDb250ZXh0TWVudSkgIT09IG51bGwgJiYgX3RoaXMkYXJncyRpZ25vcmVDb250ICE9PSB2b2lkIDAgPyBfdGhpcyRhcmdzJGlnbm9yZUNvbnQgOiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlSG92ZXJPdXRzaWRlVGFyZ2V0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkYXJncyRlbmFibGVIb3ZlO1xuXG4gICAgICByZXR1cm4gKF90aGlzJGFyZ3MkZW5hYmxlSG92ZSA9IHRoaXMuYXJncy5lbmFibGVIb3Zlck91dHNpZGVUYXJnZXQpICE9PSBudWxsICYmIF90aGlzJGFyZ3MkZW5hYmxlSG92ZSAhPT0gdm9pZCAwID8gX3RoaXMkYXJncyRlbmFibGVIb3ZlIDogZmFsc2U7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImVuYWJsZUtleWJvYXJkRXZlbnRzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkYXJncyRlbmFibGVLZXliO1xuXG4gICAgICByZXR1cm4gKF90aGlzJGFyZ3MkZW5hYmxlS2V5YiA9IHRoaXMuYXJncy5lbmFibGVLZXlib2FyZEV2ZW50cykgIT09IG51bGwgJiYgX3RoaXMkYXJncyRlbmFibGVLZXliICE9PSB2b2lkIDAgPyBfdGhpcyRhcmdzJGVuYWJsZUtleWIgOiBmYWxzZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZW5hYmxlTW91c2VFdmVudHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfdGhpcyRhcmdzJGVuYWJsZU1vdXM7XG5cbiAgICAgIHJldHVybiAoX3RoaXMkYXJncyRlbmFibGVNb3VzID0gdGhpcy5hcmdzLmVuYWJsZU1vdXNlRXZlbnRzKSAhPT0gbnVsbCAmJiBfdGhpcyRhcmdzJGVuYWJsZU1vdXMgIT09IHZvaWQgMCA/IF90aGlzJGFyZ3MkZW5hYmxlTW91cyA6IGZhbHNlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJlbmFibGVUb3VjaEV2ZW50c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJGFyZ3MkZW5hYmxlVG91YztcblxuICAgICAgcmV0dXJuIChfdGhpcyRhcmdzJGVuYWJsZVRvdWMgPSB0aGlzLmFyZ3MuZW5hYmxlVG91Y2hFdmVudHMpICE9PSBudWxsICYmIF90aGlzJGFyZ3MkZW5hYmxlVG91YyAhPT0gdm9pZCAwID8gX3RoaXMkYXJncyRlbmFibGVUb3VjIDogdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwidG91Y2hTbG9wXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hcmdzLnRvdWNoU2xvcCB8fCAwO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJkZWxheVRvdWNoU3RhcnRcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBfcmVmLCBfdGhpcyRhcmdzJGRlbGF5VG91Y2gsIF90aGlzJGFyZ3MsIF90aGlzJGFyZ3MyO1xuXG4gICAgICByZXR1cm4gKF9yZWYgPSAoX3RoaXMkYXJncyRkZWxheVRvdWNoID0gKF90aGlzJGFyZ3MgPSB0aGlzLmFyZ3MpID09PSBudWxsIHx8IF90aGlzJGFyZ3MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGFyZ3MuZGVsYXlUb3VjaFN0YXJ0KSAhPT0gbnVsbCAmJiBfdGhpcyRhcmdzJGRlbGF5VG91Y2ggIT09IHZvaWQgMCA/IF90aGlzJGFyZ3MkZGVsYXlUb3VjaCA6IChfdGhpcyRhcmdzMiA9IHRoaXMuYXJncykgPT09IG51bGwgfHwgX3RoaXMkYXJnczIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGFyZ3MyLmRlbGF5KSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZGVsYXlNb3VzZVN0YXJ0XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3JlZjIsIF90aGlzJGFyZ3MkZGVsYXlNb3VzZSwgX3RoaXMkYXJnczMsIF90aGlzJGFyZ3M0O1xuXG4gICAgICByZXR1cm4gKF9yZWYyID0gKF90aGlzJGFyZ3MkZGVsYXlNb3VzZSA9IChfdGhpcyRhcmdzMyA9IHRoaXMuYXJncykgPT09IG51bGwgfHwgX3RoaXMkYXJnczMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGFyZ3MzLmRlbGF5TW91c2VTdGFydCkgIT09IG51bGwgJiYgX3RoaXMkYXJncyRkZWxheU1vdXNlICE9PSB2b2lkIDAgPyBfdGhpcyRhcmdzJGRlbGF5TW91c2UgOiAoX3RoaXMkYXJnczQgPSB0aGlzLmFyZ3MpID09PSBudWxsIHx8IF90aGlzJGFyZ3M0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdGhpcyRhcmdzNC5kZWxheSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwid2luZG93XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0ICYmIHRoaXMuY29udGV4dC53aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC53aW5kb3c7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3c7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRvY3VtZW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICB2YXIgX3RoaXMkY29udGV4dDtcblxuICAgICAgaWYgKChfdGhpcyRjb250ZXh0ID0gdGhpcy5jb250ZXh0KSAhPT0gbnVsbCAmJiBfdGhpcyRjb250ZXh0ICE9PSB2b2lkIDAgJiYgX3RoaXMkY29udGV4dC5kb2N1bWVudCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmRvY3VtZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy53aW5kb3cpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2luZG93LmRvY3VtZW50O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyb290RWxlbWVudFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgdmFyIF90aGlzJGFyZ3M1O1xuXG4gICAgICByZXR1cm4gKChfdGhpcyRhcmdzNSA9IHRoaXMuYXJncykgPT09IG51bGwgfHwgX3RoaXMkYXJnczUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGFyZ3M1LnJvb3RFbGVtZW50KSB8fCB0aGlzLmRvY3VtZW50O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBPcHRpb25zUmVhZGVyO1xufSgpOyIsInZhciBfZXZlbnROYW1lcztcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBpbnZhcmlhbnQgfSBmcm9tICdAcmVhY3QtZG5kL2ludmFyaWFudCc7XG5pbXBvcnQgeyBMaXN0ZW5lclR5cGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZXZlbnRTaG91bGRTdGFydERyYWcsIGV2ZW50U2hvdWxkRW5kRHJhZywgaXNUb3VjaEV2ZW50IH0gZnJvbSAnLi91dGlscy9wcmVkaWNhdGVzJztcbmltcG9ydCB7IGdldEV2ZW50Q2xpZW50T2Zmc2V0LCBnZXROb2RlQ2xpZW50T2Zmc2V0IH0gZnJvbSAnLi91dGlscy9vZmZzZXRzJztcbmltcG9ydCB7IGRpc3RhbmNlLCBpbkFuZ2xlUmFuZ2VzIH0gZnJvbSAnLi91dGlscy9tYXRoJztcbmltcG9ydCB7IHN1cHBvcnRzUGFzc2l2ZSB9IGZyb20gJy4vdXRpbHMvc3VwcG9ydHNQYXNzaXZlJztcbmltcG9ydCB7IE9wdGlvbnNSZWFkZXIgfSBmcm9tICcuL09wdGlvbnNSZWFkZXInO1xudmFyIGV2ZW50TmFtZXMgPSAoX2V2ZW50TmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9ldmVudE5hbWVzLCBMaXN0ZW5lclR5cGUubW91c2UsIHtcbiAgc3RhcnQ6ICdtb3VzZWRvd24nLFxuICBtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgZW5kOiAnbW91c2V1cCcsXG4gIGNvbnRleHRtZW51OiAnY29udGV4dG1lbnUnXG59KSwgX2RlZmluZVByb3BlcnR5KF9ldmVudE5hbWVzLCBMaXN0ZW5lclR5cGUudG91Y2gsIHtcbiAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcbiAgbW92ZTogJ3RvdWNobW92ZScsXG4gIGVuZDogJ3RvdWNoZW5kJ1xufSksIF9kZWZpbmVQcm9wZXJ0eShfZXZlbnROYW1lcywgTGlzdGVuZXJUeXBlLmtleWJvYXJkLCB7XG4gIGtleWRvd246ICdrZXlkb3duJ1xufSksIF9ldmVudE5hbWVzKTtcbmV4cG9ydCB2YXIgVG91Y2hCYWNrZW5kSW1wbCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8vIFJlYWN0LURuRCBEZXBlbmRlbmNpZXNcbiAgLy8gSW50ZXJuYWwgU3RhdGVcbiAgLy8gUGF0Y2ggZm9yIGlPUyAxMywgZGlzY3Vzc2lvbiBvdmVyICMxNTg1XG4gIGZ1bmN0aW9uIFRvdWNoQmFja2VuZEltcGwobWFuYWdlciwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVG91Y2hCYWNrZW5kSW1wbCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJvcHRpb25zXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhY3Rpb25zXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJtb25pdG9yXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzb3VyY2VOb2Rlc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic291cmNlUHJldmlld05vZGVzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJzb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnNcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRhcmdldE5vZGVzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJfbW91c2VDbGllbnRPZmZzZXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9pc1Njcm9sbGluZ1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibGlzdGVuZXJUeXBlc1wiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwibW92ZVN0YXJ0U291cmNlSWRzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJ3YWl0aW5nRm9yRGVsYXlcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInRpbWVvdXRcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImRyYWdPdmVyVGFyZ2V0SWRzXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJkcmFnZ2VkU291cmNlTm9kZVwiLCB2b2lkIDApO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXJcIiwgdm9pZCAwKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImxhc3RUYXJnZXRUb3VjaEZhbGxiYWNrXCIsIHZvaWQgMCk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRTb3VyY2VDbGllbnRPZmZzZXRcIiwgZnVuY3Rpb24gKHNvdXJjZUlkKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IF90aGlzLnNvdXJjZU5vZGVzLmdldChzb3VyY2VJZCk7XG5cbiAgICAgIHJldHVybiBlbGVtZW50ICYmIGdldE5vZGVDbGllbnRPZmZzZXQoZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWV2ZW50U2hvdWxkU3RhcnREcmFnKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMubW92ZVN0YXJ0U291cmNlSWRzID0gW107XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVNb3ZlU3RhcnRcIiwgZnVuY3Rpb24gKHNvdXJjZUlkKSB7XG4gICAgICAvLyBKdXN0IGJlY2F1c2Ugd2UgcmVjZWl2ZWQgYW4gZXZlbnQgZG9lc24ndCBuZWNlc3NhcmlseSBtZWFuIHdlIG5lZWQgdG8gY29sbGVjdCBkcmFnIHNvdXJjZXMuXG4gICAgICAvLyBXZSBvbmx5IGNvbGxlY3Qgc3RhcnQgY29sbGVjdGluZyBkcmFnIHNvdXJjZXMgb24gdG91Y2ggYW5kIGxlZnQgbW91c2UgZXZlbnRzLlxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3RoaXMubW92ZVN0YXJ0U291cmNlSWRzKSkge1xuICAgICAgICBfdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMudW5zaGlmdChzb3VyY2VJZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVUb3BNb3ZlU3RhcnRcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmICghZXZlbnRTaG91bGRTdGFydERyYWcoZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBEb24ndCBwcmVtYXR1cmVseSBwcmV2ZW50RGVmYXVsdCgpIGhlcmUgc2luY2UgaXQgbWlnaHQ6XG4gICAgICAvLyAxLiBNZXNzIHVwIHNjcm9sbGluZ1xuICAgICAgLy8gMi4gTWVzcyB1cCBsb25nIHRhcCAod2hpY2ggYnJpbmdzIHVwIGNvbnRleHQgbWVudSlcbiAgICAgIC8vIDMuIElmIHRoZXJlJ3MgYW4gYW5jaG9yIGxpbmsgYXMgYSBjaGlsZCwgdGFwIHdvbid0IGJlIHRyaWdnZXJlZCBvbiBsaW5rXG5cblxuICAgICAgdmFyIGNsaWVudE9mZnNldCA9IGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUpO1xuXG4gICAgICBpZiAoY2xpZW50T2Zmc2V0KSB7XG4gICAgICAgIGlmIChpc1RvdWNoRXZlbnQoZSkpIHtcbiAgICAgICAgICBfdGhpcy5sYXN0VGFyZ2V0VG91Y2hGYWxsYmFjayA9IGUudGFyZ2V0VG91Y2hlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLl9tb3VzZUNsaWVudE9mZnNldCA9IGNsaWVudE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgX3RoaXMud2FpdGluZ0ZvckRlbGF5ID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVUb3BNb3ZlU3RhcnREZWxheVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKCFldmVudFNob3VsZFN0YXJ0RHJhZyhlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkZWxheSA9IGUudHlwZSA9PT0gZXZlbnROYW1lcy50b3VjaC5zdGFydCA/IF90aGlzLm9wdGlvbnMuZGVsYXlUb3VjaFN0YXJ0IDogX3RoaXMub3B0aW9ucy5kZWxheU1vdXNlU3RhcnQ7XG4gICAgICBfdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChfdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQuYmluZChfdGhpcywgZSksIGRlbGF5KTtcbiAgICAgIF90aGlzLndhaXRpbmdGb3JEZWxheSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJoYW5kbGVUb3BNb3ZlQ2FwdHVyZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5kcmFnT3ZlclRhcmdldElkcyA9IFtdO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFuZGxlTW92ZVwiLCBmdW5jdGlvbiAoX2V2dCwgdGFyZ2V0SWQpIHtcbiAgICAgIGlmIChfdGhpcy5kcmFnT3ZlclRhcmdldElkcykge1xuICAgICAgICBfdGhpcy5kcmFnT3ZlclRhcmdldElkcy51bnNoaWZ0KHRhcmdldElkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImhhbmRsZVRvcE1vdmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy50aW1lb3V0KSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy50aW1lb3V0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5kb2N1bWVudCB8fCBfdGhpcy53YWl0aW5nRm9yRGVsYXkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgbW92ZVN0YXJ0U291cmNlSWRzID0gX3RoaXMubW92ZVN0YXJ0U291cmNlSWRzLFxuICAgICAgICAgIGRyYWdPdmVyVGFyZ2V0SWRzID0gX3RoaXMuZHJhZ092ZXJUYXJnZXRJZHM7XG4gICAgICB2YXIgZW5hYmxlSG92ZXJPdXRzaWRlVGFyZ2V0ID0gX3RoaXMub3B0aW9ucy5lbmFibGVIb3Zlck91dHNpZGVUYXJnZXQ7XG4gICAgICB2YXIgY2xpZW50T2Zmc2V0ID0gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSwgX3RoaXMubGFzdFRhcmdldFRvdWNoRmFsbGJhY2spO1xuXG4gICAgICBpZiAoIWNsaWVudE9mZnNldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIElmIHRoZSB0b3VjaCBtb3ZlIHN0YXJ0ZWQgYXMgYSBzY3JvbGwsIG9yIGlzIGlzIGJldHdlZW4gdGhlIHNjcm9sbCBhbmdsZXNcblxuXG4gICAgICBpZiAoX3RoaXMuX2lzU2Nyb2xsaW5nIHx8ICFfdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSAmJiBpbkFuZ2xlUmFuZ2VzKF90aGlzLl9tb3VzZUNsaWVudE9mZnNldC54IHx8IDAsIF90aGlzLl9tb3VzZUNsaWVudE9mZnNldC55IHx8IDAsIGNsaWVudE9mZnNldC54LCBjbGllbnRPZmZzZXQueSwgX3RoaXMub3B0aW9ucy5zY3JvbGxBbmdsZVJhbmdlcykpIHtcbiAgICAgICAgX3RoaXMuX2lzU2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBJZiB3ZSdyZSBub3QgZHJhZ2dpbmcgYW5kIHdlJ3ZlIG1vdmVkIGEgbGl0dGxlLCB0aGF0IGNvdW50cyBhcyBhIGRyYWcgc3RhcnRcblxuXG4gICAgICBpZiAoIV90aGlzLm1vbml0b3IuaXNEcmFnZ2luZygpICYmIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgIF90aGlzLl9tb3VzZUNsaWVudE9mZnNldC5oYXNPd25Qcm9wZXJ0eSgneCcpICYmIG1vdmVTdGFydFNvdXJjZUlkcyAmJiBkaXN0YW5jZShfdGhpcy5fbW91c2VDbGllbnRPZmZzZXQueCB8fCAwLCBfdGhpcy5fbW91c2VDbGllbnRPZmZzZXQueSB8fCAwLCBjbGllbnRPZmZzZXQueCwgY2xpZW50T2Zmc2V0LnkpID4gKF90aGlzLm9wdGlvbnMudG91Y2hTbG9wID8gX3RoaXMub3B0aW9ucy50b3VjaFNsb3AgOiAwKSkge1xuICAgICAgICBfdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgX3RoaXMuYWN0aW9ucy5iZWdpbkRyYWcobW92ZVN0YXJ0U291cmNlSWRzLCB7XG4gICAgICAgICAgY2xpZW50T2Zmc2V0OiBfdGhpcy5fbW91c2VDbGllbnRPZmZzZXQsXG4gICAgICAgICAgZ2V0U291cmNlQ2xpZW50T2Zmc2V0OiBfdGhpcy5nZXRTb3VyY2VDbGllbnRPZmZzZXQsXG4gICAgICAgICAgcHVibGlzaFNvdXJjZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghX3RoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlTm9kZSA9IF90aGlzLnNvdXJjZU5vZGVzLmdldChfdGhpcy5tb25pdG9yLmdldFNvdXJjZUlkKCkpO1xuXG4gICAgICBfdGhpcy5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihzb3VyY2VOb2RlKTtcblxuICAgICAgX3RoaXMuYWN0aW9ucy5wdWJsaXNoRHJhZ1NvdXJjZSgpO1xuXG4gICAgICBpZiAoZS5jYW5jZWxhYmxlKSBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEdldCB0aGUgbm9kZSBlbGVtZW50cyBvZiB0aGUgaG92ZXJlZCBEcm9wVGFyZ2V0c1xuXG4gICAgICB2YXIgZHJhZ092ZXJUYXJnZXROb2RlcyA9IChkcmFnT3ZlclRhcmdldElkcyB8fCBbXSkubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnRhcmdldE5vZGVzLmdldChrZXkpO1xuICAgICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiAhIWU7XG4gICAgICB9KTsgLy8gR2V0IHRoZSBhIG9yZGVyZWQgbGlzdCBvZiBub2RlcyB0aGF0IGFyZSB0b3VjaGVkIGJ5XG5cbiAgICAgIHZhciBlbGVtZW50c0F0UG9pbnQgPSBfdGhpcy5vcHRpb25zLmdldERyb3BUYXJnZXRFbGVtZW50c0F0UG9pbnQgPyBfdGhpcy5vcHRpb25zLmdldERyb3BUYXJnZXRFbGVtZW50c0F0UG9pbnQoY2xpZW50T2Zmc2V0LngsIGNsaWVudE9mZnNldC55LCBkcmFnT3ZlclRhcmdldE5vZGVzKSA6IF90aGlzLmRvY3VtZW50LmVsZW1lbnRzRnJvbVBvaW50KGNsaWVudE9mZnNldC54LCBjbGllbnRPZmZzZXQueSk7IC8vIEV4dGVuZCBsaXN0IHdpdGggcGFyZW50cyB0aGF0IGFyZSBub3QgcmVjZWl2aW5nIGVsZW1lbnRzRnJvbVBvaW50IGV2ZW50cyAoc2l6ZSAwIGVsZW1lbnRzIGFuZCBzdmcgZ3JvdXBzKVxuXG4gICAgICB2YXIgZWxlbWVudHNBdFBvaW50RXh0ZW5kZWQgPSBbXTtcblxuICAgICAgZm9yICh2YXIgbm9kZUlkIGluIGVsZW1lbnRzQXRQb2ludCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gICAgICAgIGlmICghZWxlbWVudHNBdFBvaW50Lmhhc093blByb3BlcnR5KG5vZGVJZCkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjdXJyZW50Tm9kZSA9IGVsZW1lbnRzQXRQb2ludFtub2RlSWRdO1xuICAgICAgICBlbGVtZW50c0F0UG9pbnRFeHRlbmRlZC5wdXNoKGN1cnJlbnROb2RlKTtcblxuICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUpIHtcbiAgICAgICAgICBjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICBpZiAoY3VycmVudE5vZGUgJiYgZWxlbWVudHNBdFBvaW50RXh0ZW5kZWQuaW5kZXhPZihjdXJyZW50Tm9kZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBlbGVtZW50c0F0UG9pbnRFeHRlbmRlZC5wdXNoKGN1cnJlbnROb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIG9yZGVyZWREcmFnT3ZlclRhcmdldElkcyA9IGVsZW1lbnRzQXRQb2ludEV4dGVuZGVkIC8vIEZpbHRlciBvZmYgbm9kZXMgdGhhdCBhcmVudCBhIGhvdmVyZWQgRHJvcFRhcmdldHMgbm9kZXNcbiAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGRyYWdPdmVyVGFyZ2V0Tm9kZXMuaW5kZXhPZihub2RlKSA+IC0xO1xuICAgICAgfSkgLy8gTWFwIGJhY2sgdGhlIG5vZGVzIGVsZW1lbnRzIHRvIHRhcmdldElkc1xuICAgICAgLm1hcChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuX2dldERyb3BUYXJnZXRJZChub2RlKTtcbiAgICAgIH0pIC8vIEZpbHRlciBvZmYgcG9zc2libGUgbnVsbCByb3dzXG4gICAgICAuZmlsdGVyKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgIHJldHVybiAhIW5vZGU7XG4gICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGlkLCBpbmRleCwgaWRzKSB7XG4gICAgICAgIHJldHVybiBpZHMuaW5kZXhPZihpZCkgPT09IGluZGV4O1xuICAgICAgfSk7IC8vIEludm9rZSBob3ZlciBmb3IgZHJvcCB0YXJnZXRzIHdoZW4gc291cmNlIG5vZGUgaXMgc3RpbGwgb3ZlciBhbmQgcG9pbnRlciBpcyBvdXRzaWRlXG5cbiAgICAgIGlmIChlbmFibGVIb3Zlck91dHNpZGVUYXJnZXQpIHtcbiAgICAgICAgZm9yICh2YXIgdGFyZ2V0SWQgaW4gX3RoaXMudGFyZ2V0Tm9kZXMpIHtcbiAgICAgICAgICB2YXIgdGFyZ2V0Tm9kZSA9IF90aGlzLnRhcmdldE5vZGVzLmdldCh0YXJnZXRJZCk7XG5cbiAgICAgICAgICBpZiAoc291cmNlTm9kZSAmJiB0YXJnZXROb2RlICYmIHRhcmdldE5vZGUuY29udGFpbnMoc291cmNlTm9kZSkgJiYgb3JkZXJlZERyYWdPdmVyVGFyZ2V0SWRzLmluZGV4T2YodGFyZ2V0SWQpID09PSAtMSkge1xuICAgICAgICAgICAgb3JkZXJlZERyYWdPdmVyVGFyZ2V0SWRzLnVuc2hpZnQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IC8vIFJldmVyc2Ugb3JkZXIgYmVjYXVzZSBkbmQtY29yZSByZXZlcnNlIGl0IGJlZm9yZSBjYWxsaW5nIHRoZSBEcm9wVGFyZ2V0IGRyb3AgbWV0aG9kc1xuXG5cbiAgICAgIG9yZGVyZWREcmFnT3ZlclRhcmdldElkcy5yZXZlcnNlKCk7XG5cbiAgICAgIF90aGlzLmFjdGlvbnMuaG92ZXIob3JkZXJlZERyYWdPdmVyVGFyZ2V0SWRzLCB7XG4gICAgICAgIGNsaWVudE9mZnNldDogY2xpZW50T2Zmc2V0XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIl9nZXREcm9wVGFyZ2V0SWRcIiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgIHZhciBrZXlzID0gX3RoaXMudGFyZ2V0Tm9kZXMua2V5cygpO1xuXG4gICAgICB2YXIgbmV4dCA9IGtleXMubmV4dCgpO1xuXG4gICAgICB3aGlsZSAobmV4dC5kb25lID09PSBmYWxzZSkge1xuICAgICAgICB2YXIgdGFyZ2V0SWQgPSBuZXh0LnZhbHVlO1xuXG4gICAgICAgIGlmIChub2RlID09PSBfdGhpcy50YXJnZXROb2Rlcy5nZXQodGFyZ2V0SWQpKSB7XG4gICAgICAgICAgcmV0dXJuIHRhcmdldElkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQgPSBrZXlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFuZGxlVG9wTW92ZUVuZENhcHR1cmVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLl9pc1Njcm9sbGluZyA9IGZhbHNlO1xuICAgICAgX3RoaXMubGFzdFRhcmdldFRvdWNoRmFsbGJhY2sgPSB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICghZXZlbnRTaG91bGRFbmREcmFnKGUpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFfdGhpcy5tb25pdG9yLmlzRHJhZ2dpbmcoKSB8fCBfdGhpcy5tb25pdG9yLmRpZERyb3AoKSkge1xuICAgICAgICBfdGhpcy5tb3ZlU3RhcnRTb3VyY2VJZHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGUuY2FuY2VsYWJsZSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG5cbiAgICAgIF90aGlzLnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcblxuICAgICAgX3RoaXMuYWN0aW9ucy5kcm9wKCk7XG5cbiAgICAgIF90aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwiaGFuZGxlQ2FuY2VsT25Fc2NhcGVcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleSA9PT0gJ0VzY2FwZScgJiYgX3RoaXMubW9uaXRvci5pc0RyYWdnaW5nKCkpIHtcbiAgICAgICAgX3RoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG5cbiAgICAgICAgX3RoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuXG4gICAgICAgIF90aGlzLmFjdGlvbnMuZW5kRHJhZygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vcHRpb25zID0gbmV3IE9wdGlvbnNSZWFkZXIob3B0aW9ucywgY29udGV4dCk7XG4gICAgdGhpcy5hY3Rpb25zID0gbWFuYWdlci5nZXRBY3Rpb25zKCk7XG4gICAgdGhpcy5tb25pdG9yID0gbWFuYWdlci5nZXRNb25pdG9yKCk7XG4gICAgdGhpcy5zb3VyY2VOb2RlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2RlcyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9ucyA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnRhcmdldE5vZGVzID0gbmV3IE1hcCgpO1xuICAgIHRoaXMubGlzdGVuZXJUeXBlcyA9IFtdO1xuICAgIHRoaXMuX21vdXNlQ2xpZW50T2Zmc2V0ID0ge307XG4gICAgdGhpcy5faXNTY3JvbGxpbmcgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlTW91c2VFdmVudHMpIHtcbiAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5wdXNoKExpc3RlbmVyVHlwZS5tb3VzZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy5lbmFibGVUb3VjaEV2ZW50cykge1xuICAgICAgdGhpcy5saXN0ZW5lclR5cGVzLnB1c2goTGlzdGVuZXJUeXBlLnRvdWNoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vcHRpb25zLmVuYWJsZUtleWJvYXJkRXZlbnRzKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyVHlwZXMucHVzaChMaXN0ZW5lclR5cGUua2V5Ym9hcmQpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGUgcHJvZmlsaW5nIHN0YXRpc3RpY3MgZm9yIHRoZSBIVE1MNUJhY2tlbmQuXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFRvdWNoQmFja2VuZEltcGwsIFt7XG4gICAga2V5OiBcInByb2ZpbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvZmlsZSgpIHtcbiAgICAgIHZhciBfdGhpcyRkcmFnT3ZlclRhcmdldEk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvdXJjZU5vZGVzOiB0aGlzLnNvdXJjZU5vZGVzLnNpemUsXG4gICAgICAgIHNvdXJjZVByZXZpZXdOb2RlczogdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZXMuc2l6ZSxcbiAgICAgICAgc291cmNlUHJldmlld05vZGVPcHRpb25zOiB0aGlzLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9ucy5zaXplLFxuICAgICAgICB0YXJnZXROb2RlczogdGhpcy50YXJnZXROb2Rlcy5zaXplLFxuICAgICAgICBkcmFnT3ZlclRhcmdldElkczogKChfdGhpcyRkcmFnT3ZlclRhcmdldEkgPSB0aGlzLmRyYWdPdmVyVGFyZ2V0SWRzKSA9PT0gbnVsbCB8fCBfdGhpcyRkcmFnT3ZlclRhcmdldEkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGRyYWdPdmVyVGFyZ2V0SS5sZW5ndGgpIHx8IDBcbiAgICAgIH07XG4gICAgfSAvLyBwdWJsaWMgZm9yIHRlc3RcblxuICB9LCB7XG4gICAga2V5OiBcImRvY3VtZW50XCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmRvY3VtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzZXR1cFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXR1cCgpIHtcbiAgICAgIHZhciByb290ID0gdGhpcy5vcHRpb25zLnJvb3RFbGVtZW50O1xuXG4gICAgICBpZiAoIXJvb3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpbnZhcmlhbnQoIVRvdWNoQmFja2VuZEltcGwuaXNTZXRVcCwgJ0Nhbm5vdCBoYXZlIHR3byBUb3VjaCBiYWNrZW5kcyBhdCB0aGUgc2FtZSB0aW1lLicpO1xuICAgICAgVG91Y2hCYWNrZW5kSW1wbC5pc1NldFVwID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihyb290LCAnc3RhcnQnLCB0aGlzLmdldFRvcE1vdmVTdGFydEhhbmRsZXIoKSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIocm9vdCwgJ3N0YXJ0JywgdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnRDYXB0dXJlLCB0cnVlKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihyb290LCAnbW92ZScsIHRoaXMuaGFuZGxlVG9wTW92ZSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIocm9vdCwgJ21vdmUnLCB0aGlzLmhhbmRsZVRvcE1vdmVDYXB0dXJlLCB0cnVlKTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihyb290LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlTW91c2VFdmVudHMgJiYgIXRoaXMub3B0aW9ucy5pZ25vcmVDb250ZXh0TWVudSkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIocm9vdCwgJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlS2V5Ym9hcmRFdmVudHMpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKHJvb3QsICdrZXlkb3duJywgdGhpcy5oYW5kbGVDYW5jZWxPbkVzY2FwZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRlYXJkb3duXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRlYXJkb3duKCkge1xuICAgICAgdmFyIHJvb3QgPSB0aGlzLm9wdGlvbnMucm9vdEVsZW1lbnQ7XG5cbiAgICAgIGlmICghcm9vdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIFRvdWNoQmFja2VuZEltcGwuaXNTZXRVcCA9IGZhbHNlO1xuICAgICAgdGhpcy5fbW91c2VDbGllbnRPZmZzZXQgPSB7fTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihyb290LCAnc3RhcnQnLCB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydENhcHR1cmUsIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHJvb3QsICdzdGFydCcsIHRoaXMuaGFuZGxlVG9wTW92ZVN0YXJ0KTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihyb290LCAnbW92ZScsIHRoaXMuaGFuZGxlVG9wTW92ZUNhcHR1cmUsIHRydWUpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHJvb3QsICdtb3ZlJywgdGhpcy5oYW5kbGVUb3BNb3ZlKTtcbiAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihyb290LCAnZW5kJywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlTW91c2VFdmVudHMgJiYgIXRoaXMub3B0aW9ucy5pZ25vcmVDb250ZXh0TWVudSkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIocm9vdCwgJ2NvbnRleHRtZW51JywgdGhpcy5oYW5kbGVUb3BNb3ZlRW5kQ2FwdHVyZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZW5hYmxlS2V5Ym9hcmRFdmVudHMpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHJvb3QsICdrZXlkb3duJywgdGhpcy5oYW5kbGVDYW5jZWxPbkVzY2FwZSwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJhZGRFdmVudExpc3RlbmVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIoc3ViamVjdCwgZXZlbnQsIGhhbmRsZXIsIGNhcHR1cmUpIHtcbiAgICAgIHZhciBvcHRpb25zID0gc3VwcG9ydHNQYXNzaXZlID8ge1xuICAgICAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSA6IGNhcHR1cmU7XG4gICAgICB0aGlzLmxpc3RlbmVyVHlwZXMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXJUeXBlKSB7XG4gICAgICAgIHZhciBldnQgPSBldmVudE5hbWVzW2xpc3RlbmVyVHlwZV1bZXZlbnRdO1xuXG4gICAgICAgIGlmIChldnQpIHtcbiAgICAgICAgICBzdWJqZWN0LmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbW92ZUV2ZW50TGlzdGVuZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihzdWJqZWN0LCBldmVudCwgaGFuZGxlciwgY2FwdHVyZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBzdXBwb3J0c1Bhc3NpdmUgPyB7XG4gICAgICAgIGNhcHR1cmU6IGNhcHR1cmUsXG4gICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICB9IDogY2FwdHVyZTtcbiAgICAgIHRoaXMubGlzdGVuZXJUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lclR5cGUpIHtcbiAgICAgICAgdmFyIGV2dCA9IGV2ZW50TmFtZXNbbGlzdGVuZXJUeXBlXVtldmVudF07XG5cbiAgICAgICAgaWYgKGV2dCkge1xuICAgICAgICAgIHN1YmplY3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29ubmVjdERyYWdTb3VyY2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdTb3VyY2Uoc291cmNlSWQsIG5vZGUpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgaGFuZGxlTW92ZVN0YXJ0ID0gdGhpcy5oYW5kbGVNb3ZlU3RhcnQuYmluZCh0aGlzLCBzb3VyY2VJZCk7XG4gICAgICB0aGlzLnNvdXJjZU5vZGVzLnNldChzb3VyY2VJZCwgbm9kZSk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIobm9kZSwgJ3N0YXJ0JywgaGFuZGxlTW92ZVN0YXJ0KTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zb3VyY2VOb2Rlcy5kZWxldGUoc291cmNlSWQpO1xuXG4gICAgICAgIF90aGlzMi5yZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsICdzdGFydCcsIGhhbmRsZU1vdmVTdGFydCk7XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb25uZWN0RHJhZ1ByZXZpZXdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyYWdQcmV2aWV3KHNvdXJjZUlkLCBub2RlLCBvcHRpb25zKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdGhpcy5zb3VyY2VQcmV2aWV3Tm9kZU9wdGlvbnMuc2V0KHNvdXJjZUlkLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuc291cmNlUHJldmlld05vZGVzLnNldChzb3VyY2VJZCwgbm9kZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczMuc291cmNlUHJldmlld05vZGVzLmRlbGV0ZShzb3VyY2VJZCk7XG5cbiAgICAgICAgX3RoaXMzLnNvdXJjZVByZXZpZXdOb2RlT3B0aW9ucy5kZWxldGUoc291cmNlSWQpO1xuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29ubmVjdERyb3BUYXJnZXRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdERyb3BUYXJnZXQodGFyZ2V0SWQsIG5vZGUpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICB2YXIgcm9vdCA9IHRoaXMub3B0aW9ucy5yb290RWxlbWVudDtcblxuICAgICAgaWYgKCF0aGlzLmRvY3VtZW50IHx8ICFyb290KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLyogbm9vcCAqL1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB2YXIgaGFuZGxlTW92ZSA9IGZ1bmN0aW9uIGhhbmRsZU1vdmUoZSkge1xuICAgICAgICBpZiAoIV90aGlzNC5kb2N1bWVudCB8fCAhcm9vdCB8fCAhX3RoaXM0Lm1vbml0b3IuaXNEcmFnZ2luZygpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvb3JkcztcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdyYWIgdGhlIGNvb3JkaW5hdGVzIGZvciB0aGUgY3VycmVudCBtb3VzZS90b3VjaCBwb3NpdGlvblxuICAgICAgICAgKi9cblxuICAgICAgICBzd2l0Y2ggKGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgZXZlbnROYW1lcy5tb3VzZS5tb3ZlOlxuICAgICAgICAgICAgY29vcmRzID0ge1xuICAgICAgICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgY2FzZSBldmVudE5hbWVzLnRvdWNoLm1vdmU6XG4gICAgICAgICAgICBjb29yZHMgPSB7XG4gICAgICAgICAgICAgIHg6IGUudG91Y2hlc1swXS5jbGllbnRYLFxuICAgICAgICAgICAgICB5OiBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBVc2UgdGhlIGNvb3JkaW5hdGVzIHRvIGdyYWIgdGhlIGVsZW1lbnQgdGhlIGRyYWcgZW5kZWQgb24uXG4gICAgICAgICAqIElmIHRoZSBlbGVtZW50IGlzIHRoZSBzYW1lIGFzIHRoZSB0YXJnZXQgbm9kZSAob3IgYW55IG9mIGl0J3MgY2hpbGRyZW4pIHRoZW4gd2UgaGF2ZSBoaXQgYSBkcm9wIHRhcmdldCBhbmQgY2FuIGhhbmRsZSB0aGUgbW92ZS5cbiAgICAgICAgICovXG5cblxuICAgICAgICB2YXIgZHJvcHBlZE9uID0gY29vcmRzICE9IG51bGwgPyBfdGhpczQuZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChjb29yZHMueCwgY29vcmRzLnkpIDogdW5kZWZpbmVkO1xuICAgICAgICB2YXIgY2hpbGRNYXRjaCA9IGRyb3BwZWRPbiAmJiBub2RlLmNvbnRhaW5zKGRyb3BwZWRPbik7XG5cbiAgICAgICAgaWYgKGRyb3BwZWRPbiA9PT0gbm9kZSB8fCBjaGlsZE1hdGNoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzNC5oYW5kbGVNb3ZlKGUsIHRhcmdldElkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8qKlxuICAgICAgICogQXR0YWNoaW5nIHRoZSBldmVudCBsaXN0ZW5lciB0byB0aGUgYm9keSBzbyB0aGF0IHRvdWNobW92ZSB3aWxsIHdvcmsgd2hpbGUgZHJhZ2dpbmcgb3ZlciBtdWx0aXBsZSB0YXJnZXQgZWxlbWVudHMuXG4gICAgICAgKi9cblxuXG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5kb2N1bWVudC5ib2R5LCAnbW92ZScsIGhhbmRsZU1vdmUpO1xuICAgICAgdGhpcy50YXJnZXROb2Rlcy5zZXQodGFyZ2V0SWQsIG5vZGUpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzNC5kb2N1bWVudCkge1xuICAgICAgICAgIF90aGlzNC50YXJnZXROb2Rlcy5kZWxldGUodGFyZ2V0SWQpO1xuXG4gICAgICAgICAgX3RoaXM0LnJlbW92ZUV2ZW50TGlzdGVuZXIoX3RoaXM0LmRvY3VtZW50LmJvZHksICdtb3ZlJywgaGFuZGxlTW92ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFRvcE1vdmVTdGFydEhhbmRsZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VG9wTW92ZVN0YXJ0SGFuZGxlcigpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmRlbGF5VG91Y2hTdGFydCAmJiAhdGhpcy5vcHRpb25zLmRlbGF5TW91c2VTdGFydCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVUb3BNb3ZlU3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVRvcE1vdmVTdGFydERlbGF5O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcihub2RlKSB7XG4gICAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgICAgdGhpcy51bmluc3RhbGxTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKCk7XG4gICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlID0gbm9kZTtcbiAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChub2RlICYmICFub2RlLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICBfdGhpczUucmVzdXJyZWN0U291cmNlTm9kZSgpO1xuXG4gICAgICAgICAgX3RoaXM1LnVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghbm9kZSB8fCAhbm9kZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZVJlbW92YWxPYnNlcnZlci5vYnNlcnZlKG5vZGUucGFyZW50RWxlbWVudCwge1xuICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXN1cnJlY3RTb3VyY2VOb2RlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlc3VycmVjdFNvdXJjZU5vZGUoKSB7XG4gICAgICBpZiAodGhpcy5kb2N1bWVudCAmJiB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcmVhY3RpZCcpO1xuICAgICAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kcmFnZ2VkU291cmNlTm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInVuaW5zdGFsbFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdW5pbnN0YWxsU291cmNlTm9kZVJlbW92YWxPYnNlcnZlcigpIHtcbiAgICAgIGlmICh0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyKSB7XG4gICAgICAgIHRoaXMuZHJhZ2dlZFNvdXJjZU5vZGVSZW1vdmFsT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmRyYWdnZWRTb3VyY2VOb2RlUmVtb3ZhbE9ic2VydmVyID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kcmFnZ2VkU291cmNlTm9kZSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVG91Y2hCYWNrZW5kSW1wbDtcbn0oKTtcblxuX2RlZmluZVByb3BlcnR5KFRvdWNoQmFja2VuZEltcGwsIFwiaXNTZXRVcFwiLCB2b2lkIDApOyIsImltcG9ydCB7IFRvdWNoQmFja2VuZEltcGwgfSBmcm9tICcuL1RvdWNoQmFja2VuZEltcGwnO1xuZXhwb3J0ICogZnJvbSAnLi9pbnRlcmZhY2VzJztcbmV4cG9ydCAqIGZyb20gJy4vVG91Y2hCYWNrZW5kSW1wbCc7XG5leHBvcnQgdmFyIFRvdWNoQmFja2VuZCA9IGZ1bmN0aW9uIGNyZWF0ZUJhY2tlbmQobWFuYWdlcikge1xuICB2YXIgY29udGV4dCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcmV0dXJuIG5ldyBUb3VjaEJhY2tlbmRJbXBsKG1hbmFnZXIsIGNvbnRleHQsIG9wdGlvbnMpO1xufTsiLCJleHBvcnQgdmFyIExpc3RlbmVyVHlwZTtcblxuKGZ1bmN0aW9uIChMaXN0ZW5lclR5cGUpIHtcbiAgTGlzdGVuZXJUeXBlW1wibW91c2VcIl0gPSBcIm1vdXNlXCI7XG4gIExpc3RlbmVyVHlwZVtcInRvdWNoXCJdID0gXCJ0b3VjaFwiO1xuICBMaXN0ZW5lclR5cGVbXCJrZXlib2FyZFwiXSA9IFwia2V5Ym9hcmRcIjtcbn0pKExpc3RlbmVyVHlwZSB8fCAoTGlzdGVuZXJUeXBlID0ge30pKTsiLCJleHBvcnQgZnVuY3Rpb24gZGlzdGFuY2UoeDEsIHkxLCB4MiwgeTIpIHtcbiAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhNYXRoLmFicyh4MiAtIHgxKSwgMikgKyBNYXRoLnBvdyhNYXRoLmFicyh5MiAtIHkxKSwgMikpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGluQW5nbGVSYW5nZXMoeDEsIHkxLCB4MiwgeTIsIGFuZ2xlUmFuZ2VzKSB7XG4gIGlmICghYW5nbGVSYW5nZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgYW5nbGUgPSBNYXRoLmF0YW4yKHkyIC0geTEsIHgyIC0geDEpICogMTgwIC8gTWF0aC5QSSArIDE4MDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFuZ2xlUmFuZ2VzLmxlbmd0aDsgKytpKSB7XG4gICAgaWYgKChhbmdsZVJhbmdlc1tpXS5zdGFydCA9PSBudWxsIHx8IGFuZ2xlID49IGFuZ2xlUmFuZ2VzW2ldLnN0YXJ0KSAmJiAoYW5nbGVSYW5nZXNbaV0uZW5kID09IG51bGwgfHwgYW5nbGUgPD0gYW5nbGVSYW5nZXNbaV0uZW5kKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSIsImltcG9ydCB7IGlzVG91Y2hFdmVudCB9IGZyb20gJy4vcHJlZGljYXRlcyc7XG52YXIgRUxFTUVOVF9OT0RFID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlQ2xpZW50T2Zmc2V0KG5vZGUpIHtcbiAgdmFyIGVsID0gbm9kZS5ub2RlVHlwZSA9PT0gRUxFTUVOVF9OT0RFID8gbm9kZSA6IG5vZGUucGFyZW50RWxlbWVudDtcblxuICBpZiAoIWVsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBfZWwkZ2V0Qm91bmRpbmdDbGllbnQgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHRvcCA9IF9lbCRnZXRCb3VuZGluZ0NsaWVudC50b3AsXG4gICAgICBsZWZ0ID0gX2VsJGdldEJvdW5kaW5nQ2xpZW50LmxlZnQ7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBsZWZ0LFxuICAgIHk6IHRvcFxuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50Q2xpZW50VG91Y2hPZmZzZXQoZSwgbGFzdFRhcmdldFRvdWNoRmFsbGJhY2spIHtcbiAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZS50YXJnZXRUb3VjaGVzWzBdKTtcbiAgfSBlbHNlIGlmIChsYXN0VGFyZ2V0VG91Y2hGYWxsYmFjayAmJiBlLnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgaWYgKGUudG91Y2hlc1swXS50YXJnZXQgPT09IGxhc3RUYXJnZXRUb3VjaEZhbGxiYWNrLnRhcmdldCkge1xuICAgICAgcmV0dXJuIGdldEV2ZW50Q2xpZW50T2Zmc2V0KGUudG91Y2hlc1swXSk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RXZlbnRDbGllbnRPZmZzZXQoZSwgbGFzdFRhcmdldFRvdWNoRmFsbGJhY2spIHtcbiAgaWYgKGlzVG91Y2hFdmVudChlKSkge1xuICAgIHJldHVybiBnZXRFdmVudENsaWVudFRvdWNoT2Zmc2V0KGUsIGxhc3RUYXJnZXRUb3VjaEZhbGxiYWNrKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogZS5jbGllbnRYLFxuICAgICAgeTogZS5jbGllbnRZXG4gICAgfTtcbiAgfVxufSIsIi8vIFVzZWQgZm9yIE1vdXNlRXZlbnQuYnV0dG9ucyAobm90ZSB0aGUgcyBvbiB0aGUgZW5kKS5cbnZhciBNb3VzZUJ1dHRvbnMgPSB7XG4gIExlZnQ6IDEsXG4gIFJpZ2h0OiAyLFxuICBDZW50ZXI6IDRcbn07IC8vIFVzZWQgZm9yIGUuYnV0dG9uIChub3RlIHRoZSBsYWNrIG9mIGFuIHMgb24gdGhlIGVuZCkuXG5cbnZhciBNb3VzZUJ1dHRvbiA9IHtcbiAgTGVmdDogMCxcbiAgQ2VudGVyOiAxLFxuICBSaWdodDogMlxufTtcbi8qKlxuICogT25seSB0b3VjaCBldmVudHMgYW5kIG1vdXNlIGV2ZW50cyB3aGVyZSB0aGUgbGVmdCBidXR0b24gaXMgcHJlc3NlZCBzaG91bGQgaW5pdGlhdGUgYSBkcmFnLlxuICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgVG91Y2hFdmVudH0gZSBUaGUgZXZlbnRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRTaG91bGRTdGFydERyYWcoZSkge1xuICAvLyBGb3IgdG91Y2ggZXZlbnRzLCBidXR0b24gd2lsbCBiZSB1bmRlZmluZWQuIElmIGUuYnV0dG9uIGlzIGRlZmluZWQsXG4gIC8vIHRoZW4gaXQgc2hvdWxkIGJlIE1vdXNlQnV0dG9uLkxlZnQuXG4gIHJldHVybiBlLmJ1dHRvbiA9PT0gdW5kZWZpbmVkIHx8IGUuYnV0dG9uID09PSBNb3VzZUJ1dHRvbi5MZWZ0O1xufVxuLyoqXG4gKiBPbmx5IHRvdWNoIGV2ZW50cyBhbmQgbW91c2UgZXZlbnRzIHdoZXJlIHRoZSBsZWZ0IG1vdXNlIGJ1dHRvbiBpcyBubyBsb25nZXIgaGVsZCBzaG91bGQgZW5kIGEgZHJhZy5cbiAqIEl0J3MgcG9zc2libGUgdGhlIHVzZXIgbW91c2UgZG93bnMgd2l0aCB0aGUgbGVmdCBtb3VzZSBidXR0b24sIHRoZW4gbW91c2UgZG93biBhbmQgdXBzIHdpdGggdGhlIHJpZ2h0IG1vdXNlIGJ1dHRvbi5cbiAqIFdlIGRvbid0IHdhbnQgcmVsZWFzaW5nIHRoZSByaWdodCBtb3VzZSBidXR0b24gdG8gZW5kIHRoZSBkcmFnLlxuICogQHBhcmFtIHtNb3VzZUV2ZW50IHwgVG91Y2hFdmVudH0gZSBUaGUgZXZlbnRcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZXZlbnRTaG91bGRFbmREcmFnKGUpIHtcbiAgLy8gVG91Y2ggZXZlbnRzIHdpbGwgaGF2ZSBidXR0b25zIGJlIHVuZGVmaW5lZCwgd2hpbGUgbW91c2UgZXZlbnRzIHdpbGwgaGF2ZSBlLmJ1dHRvbnMncyBsZWZ0IGJ1dHRvblxuICAvLyBiaXQgZmllbGQgdW5zZXQgaWYgdGhlIGxlZnQgbW91c2UgYnV0dG9uIGhhcyBiZWVuIHJlbGVhc2VkXG4gIHJldHVybiBlLmJ1dHRvbnMgPT09IHVuZGVmaW5lZCB8fCAoZS5idXR0b25zICYgTW91c2VCdXR0b25zLkxlZnQpID09PSAwO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzVG91Y2hFdmVudChlKSB7XG4gIHJldHVybiAhIWUudGFyZ2V0VG91Y2hlcztcbn0iLCJleHBvcnQgdmFyIHN1cHBvcnRzUGFzc2l2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gc2ltdWxhciB0byBqUXVlcnkncyB0ZXN0XG4gIHZhciBzdXBwb3J0ZWQgPSBmYWxzZTtcblxuICB0cnkge1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBmdW5jdGlvbiAoKSB7Ly8gZG8gbm90aGluZ1xuICAgIH0sIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ3Bhc3NpdmUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgc3VwcG9ydGVkID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkpO1xuICB9IGNhdGNoIChlKSB7Ly8gZG8gbm90aGluZ1xuICB9XG5cbiAgcmV0dXJuIHN1cHBvcnRlZDtcbn0oKTsiXSwic291cmNlUm9vdCI6IiJ9