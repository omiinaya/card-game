module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/cardCard/CardCard.jsx":
/*!******************************************!*\
  !*** ./components/cardCard/CardCard.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\cardCard\\CardCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function CardCard(props) {
  //console.log(props)
  return __jsx("div", {
    style: {
      color: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: "cardContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("img", {
    id: "cardTemplate",
    src: "https://i.ibb.co/mG6jvpR/monster-normal.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }), __jsx("img", {
    id: "cardFace",
    src: props.cardImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("img", {
    id: "starLevel",
    src: "https://i.ibb.co/M1bYC6V/star.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "cardTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, props.cardName), __jsx("img", {
    id: "cardType",
    src: props.typeImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx("h4", {
    id: "cardSubType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "[", props.cardSubType, "]"), __jsx("div", {
    id: "cardDesc",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, props.cardDesc), __jsx("div", {
    id: "cardAtk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, props.cardAtk), __jsx("div", {
    id: "cardDef",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, props.cardDef)));
}

/***/ }),

/***/ "./components/game/Board.jsx":
/*!***********************************!*\
  !*** ./components/game/Board.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EField */ "./components/game/EField.jsx");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Field */ "./components/game/Field.jsx");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hand */ "./components/game/Hand.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Board.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function Container() {
  const {
    0: init,
    1: setInit
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: onHand,
    1: setOnHand
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: onField,
    1: setOnField
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: onEnemy,
    1: setOnEnemy
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getCards = () => {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`/api/card`).then(res => {
        let hand = res.data.data.sort(() => Math.random() - Math.random()).slice(0, 10);
        let enemy = res.data.data.sort(() => Math.random() - Math.random()).slice(0, 3);
        sortIDs(hand);
        setOnHand(hand);
        setOnEnemy(enemy);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sortIDs(onHand);
    console.log(onHand);
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sortIDs(onField);
    console.log(onField);
  }, [onField]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sortIDs(onEnemy);
    console.log(onEnemy);
  }, [onEnemy]);

  const handleCardPlayed = index => {
    setOnHand(prev => prev.filter(card => {
      //console.log(card.id, index)
      return card.id != index - 1;
    }));
    setOnField(prevArray => [...prevArray, onHand.filter(card => card.id == index - 1)[0]]);
  };

  const sortIDs = array => {
    var myArray = array;
    myArray.forEach(function (element, index) {
      element.id = init ? index : index + 1;
    });
    if (!init) setInit(true);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
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
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_EField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cards: onEnemy,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
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
      lineNumber: 68,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: onField,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_3__["default"], {
    cards: onHand,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (PlayerHand);

/***/ }),

/***/ "./components/game/EField.jsx":
/*!************************************!*\
  !*** ./components/game/EField.jsx ***!
  \************************************/
/*! exports provided: EField, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EField", function() { return EField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Enemy */ "./components/game/Enemy.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\EField.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const EField = props => {
  const style = {
    height: '265px',
    width: '100%'
  };
  return __jsx("div", {
    style: _objectSpread({}, style),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "cards",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, props.cards.map((card, index) => __jsx("div", {
    key: "efield" + card.cardName + index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "generated-efield-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, __jsx(_Enemy__WEBPACK_IMPORTED_MODULE_1__["default"], {
    card: card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 33
    }
  })))))));
};
/* harmony default export */ __webpack_exports__["default"] = (EField);

/***/ }),

/***/ "./components/game/Enemy.jsx":
/*!***********************************!*\
  !*** ./components/game/Enemy.jsx ***!
  \***********************************/
/*! exports provided: Enemy, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Enemy", function() { return Enemy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
/* harmony import */ var _cardCard_CardCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardCard/CardCard */ "./components/cardCard/CardCard.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Enemy.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const style = {
  height: '265px',
  width: '175px',
  zIndex: 10,
  position: 'absolute',
  color: 'white'
};
const Enemy = props => {
  const card = props.card;
  const [{
    canDrop,
    isOver
  }, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrop"])(() => ({
    accept: _ItemTypes__WEBPACK_IMPORTED_MODULE_2__["ItemTypes"].FIELDCARD,
    drop: () => ({
      name: card.cardName
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';

  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return __jsx("div", {
    ref: drop,
    role: 'Enemy',
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundColor
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, __jsx(_cardCard_CardCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: card.id,
    cardName: card.cardName,
    cardImage: card.cardImage,
    cardRarity: card.cardRarity,
    cardType: card.cardType,
    typeImage: card.typeImage,
    cardDesc: card.cardDesc,
    cardSubType: card.cardSubType,
    cardAtk: card.cardATK,
    cardDef: card.cardDEF,
    playCard: props.playCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./components/game/Field.jsx":
/*!***********************************!*\
  !*** ./components/game/Field.jsx ***!
  \***********************************/
/*! exports provided: Field, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
/* harmony import */ var _FieldCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldCard */ "./components/game/FieldCard.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const style = {
  height: '265px',
  width: '100%'
};
const Field = props => {
  const [{
    canDrop,
    isOver
  }, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrop"])(() => ({
    accept: _ItemTypes__WEBPACK_IMPORTED_MODULE_2__["ItemTypes"].HANDCARD,
    drop: () => ({
      name: 'Field'
    }),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));
  const isActive = canDrop && isOver;
  let backgroundColor = '#222';

  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return __jsx("div", {
    ref: drop,
    role: 'Field',
    style: _objectSpread(_objectSpread({}, style), {}, {
      backgroundColor
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, props.cards.map((card, index) => __jsx("div", {
    key: 'field' + card.cardName + index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "generated-field-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx(_FieldCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: card.id,
    cardName: card.cardName,
    cardImage: card.cardImage,
    cardRarity: card.cardRarity,
    cardType: card.cardType,
    typeImage: card.typeImage,
    cardDesc: card.cardDesc,
    cardSubType: card.cardSubType,
    cardAtk: card.cardATK,
    cardDef: card.cardDEF,
    playCard: props.playCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Field);

/***/ }),

/***/ "./components/game/FieldCard.jsx":
/*!***************************************!*\
  !*** ./components/game/FieldCard.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
/* harmony import */ var _cardCard_CardCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardCard/CardCard */ "./components/cardCard/CardCard.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\FieldCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const style = {
  border: '1px dashed gray',
  cursor: 'move',
  zIndex: 10
};

const FieldCard = function FieldCard({
  id,
  cardName,
  cardImage,
  cardRarity,
  cardType,
  cardSubType,
  cardDesc,
  typeImage,
  cardAtk,
  cardDef //playCard

}) {
  const [{
    isDragging
  }, drag] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrag"])(() => ({
    type: _ItemTypes__WEBPACK_IMPORTED_MODULE_2__["ItemTypes"].FIELDCARD,
    item: {
      id,
      cardName
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        //playCard(item.id)
        console.log(`You used ${item.cardName} to attack ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));
  const opacity = isDragging ? 0.4 : 1;
  return __jsx("div", {
    ref: drag,
    role: "FieldCard",
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity
    }),
    "data-testid": `fieldcard-${cardName}`,
    onClick: () => {
      console.log(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(_cardCard_CardCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    cardName: cardName,
    cardImage: cardImage,
    cardRarity: cardRarity,
    cardType: cardType,
    cardSubType: cardSubType,
    cardDesc: cardDesc,
    typeImage: typeImage,
    cardAtk: cardAtk,
    cardDef: cardDef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FieldCard);

/***/ }),

/***/ "./components/game/Hand.jsx":
/*!**********************************!*\
  !*** ./components/game/Hand.jsx ***!
  \**********************************/
/*! exports provided: Hand, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hand", function() { return Hand; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HandCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HandCard */ "./components/game/HandCard.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Hand.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Hand = props => {
  return __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '255px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, props.cards.map((card, index) => __jsx("div", {
    className: "generated-hand-card",
    key: card.cardName + index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(_HandCard__WEBPACK_IMPORTED_MODULE_1__["HandCard"], {
    id: card.id,
    cardName: card.cardName,
    cardImage: card.cardImage,
    cardRarity: card.cardRarity,
    cardType: card.cardType,
    typeImage: card.typeImage,
    cardDesc: card.cardDesc,
    cardSubType: card.cardSubType,
    cardAtk: card.cardATK,
    cardDef: card.cardDEF,
    playCard: props.playCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (Hand);

/***/ }),

/***/ "./components/game/HandCard.jsx":
/*!**************************************!*\
  !*** ./components/game/HandCard.jsx ***!
  \**************************************/
/*! exports provided: HandCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandCard", function() { return HandCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
/* harmony import */ var _cardCard_CardCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cardCard/CardCard */ "./components/cardCard/CardCard.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\HandCard.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const style = {
  border: '1px dashed gray',
  cursor: 'move',
  width: '280px',
  zIndex: 10
};
const HandCard = function HandCard({
  id,
  cardName,
  cardImage,
  cardRarity,
  cardType,
  cardSubType,
  cardDesc,
  typeImage,
  cardAtk,
  cardDef,
  playCard
}) {
  const [{
    isDragging
  }, drag] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrag"])(() => ({
    type: _ItemTypes__WEBPACK_IMPORTED_MODULE_2__["ItemTypes"].HANDCARD,
    item: {
      id,
      cardName
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        playCard(item.id);
        console.log(`You dropped ${item.cardName} into ${dropResult.name}!`);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId()
    })
  }));
  const opacity = isDragging ? 0.4 : 1;
  return __jsx("div", {
    ref: drag,
    role: "HandCard",
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity
    }),
    "data-testid": `handcard-${cardName}`,
    onClick: () => {
      console.log(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(_cardCard_CardCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id,
    cardName: cardName,
    cardImage: cardImage,
    cardRarity: cardRarity,
    cardType: cardType,
    cardSubType: cardSubType,
    cardDesc: cardDesc,
    typeImage: typeImage,
    cardAtk: cardAtk,
    cardDef: cardDef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./components/game/ItemTypes.js":
/*!**************************************!*\
  !*** ./components/game/ItemTypes.js ***!
  \**************************************/
/*! exports provided: ItemTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemTypes", function() { return ItemTypes; });
const ItemTypes = {
  HANDCARD: 'handcard',
  FIELDCARD: 'fieldcard'
};

/***/ }),

/***/ "./components/home/Home.jsx":
/*!**********************************!*\
  !*** ./components/home/Home.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game_Board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../game/Board */ "./components/game/Board.jsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-touch-backend */ "react-dnd-touch-backend");
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\home\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function Home(props) {
  const {
    user,
    origin,
    deviceType,
    baseApiUrl
  } = props.data;
  console.log(deviceType);
  console.log(baseApiUrl);
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
  }, __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_2__["DndProvider"], {
    backend: deviceType === 'desktop' ? react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_3__["HTML5Backend"] : react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_4__["TouchBackend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), user && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "User ID: ", user.id)));
}

/***/ }),

/***/ "./middleware/utils.js":
/*!*****************************!*\
  !*** ./middleware/utils.js ***!
  \*****************************/
/*! exports provided: verifyToken, getAppCookies, absoluteUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyToken", function() { return verifyToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppCookies", function() { return getAppCookies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absoluteUrl", function() { return absoluteUrl; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const SECRET_KEY = process.env.JWT_KEY;
/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */

function verifyToken(jwtToken) {
  try {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default.a.verify(jwtToken, SECRET_KEY);
  } catch (e) {
    console.log('e:', e);
    return null;
  }
}
/*
 * @params {request} extracted from request response
 * @return {object} object of parse jwt cookie decode object
 */

function getAppCookies(req) {
  const parsedItems = {};

  if (req.headers.cookie) {
    const cookiesItems = req.headers.cookie.split('; ');
    cookiesItems.forEach(cookies => {
      const parsedItem = cookies.split('=');
      parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
    });
  }

  return parsedItems;
}
/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */

function absoluteUrl(req, setLocalhost) {
  var protocol = 'https:';
  var host = req ? req.headers['x-forwarded-host'] || req.headers['host'] : window.location.host;

  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = 'http:';
  }

  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host,
    url: req
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/utils */ "./middleware/utils.js");
/* harmony import */ var _components_home_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/home/Home */ "./components/home/Home.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function App(props) {
  return __jsx(_components_home_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: props,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
}
/* getServerSideProps */

async function getServerSideProps(context) {
  const {
    req
  } = context;
  const {
    origin
  } = Object(_middleware_utils__WEBPACK_IMPORTED_MODULE_1__["absoluteUrl"])(req);
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i));
  return {
    props: {
      origin,
      deviceType: isMobile ? 'mobile' : 'desktop'
    }
  };
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nfernal\Desktop\nextjs-sequelize\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dnd":
/*!****************************!*\
  !*** external "react-dnd" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),

/***/ "react-dnd-html5-backend":
/*!******************************************!*\
  !*** external "react-dnd-html5-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),

/***/ "react-dnd-touch-backend":
/*!******************************************!*\
  !*** external "react-dnd-touch-backend" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dnd-touch-backend");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkQ2FyZC9DYXJkQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0JvYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRUZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRW5lbXkuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9GaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0ZpZWxkQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0hhbmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9IYW5kQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0l0ZW1UeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvbWUvSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG5kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kbmQtdG91Y2gtYmFja2VuZFwiIl0sIm5hbWVzIjpbIkNhcmRDYXJkIiwicHJvcHMiLCJjb2xvciIsImNhcmRJbWFnZSIsImNhcmROYW1lIiwidHlwZUltYWdlIiwiY2FyZFN1YlR5cGUiLCJjYXJkRGVzYyIsImNhcmRBdGsiLCJjYXJkRGVmIiwiUGxheWVySGFuZCIsIm1lbW8iLCJDb250YWluZXIiLCJpbml0Iiwic2V0SW5pdCIsInVzZVN0YXRlIiwib25IYW5kIiwic2V0T25IYW5kIiwib25GaWVsZCIsInNldE9uRmllbGQiLCJvbkVuZW15Iiwic2V0T25FbmVteSIsImdldENhcmRzIiwibGVuZ3RoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiaGFuZCIsImRhdGEiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwiZW5lbXkiLCJzb3J0SURzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwiaWQiLCJwcmV2QXJyYXkiLCJhcnJheSIsIm15QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm92ZXJmbG93IiwiY2xlYXIiLCJFRmllbGQiLCJzdHlsZSIsImhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY2FyZHMiLCJtYXAiLCJ6SW5kZXgiLCJwb3NpdGlvbiIsIkVuZW15IiwiY2FuRHJvcCIsImlzT3ZlciIsImRyb3AiLCJ1c2VEcm9wIiwiYWNjZXB0IiwiSXRlbVR5cGVzIiwiRklFTERDQVJEIiwibmFtZSIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNBY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJjYXJkQVRLIiwiY2FyZERFRiIsInBsYXlDYXJkIiwiRmllbGQiLCJIQU5EQ0FSRCIsImJvcmRlciIsImN1cnNvciIsIkZpZWxkQ2FyZCIsImlzRHJhZ2dpbmciLCJkcmFnIiwidXNlRHJhZyIsInR5cGUiLCJpdGVtIiwiZW5kIiwiZHJvcFJlc3VsdCIsImdldERyb3BSZXN1bHQiLCJoYW5kbGVySWQiLCJnZXRIYW5kbGVySWQiLCJvcGFjaXR5IiwiSGFuZCIsIkhhbmRDYXJkIiwiSG9tZSIsInVzZXIiLCJvcmlnaW4iLCJkZXZpY2VUeXBlIiwiYmFzZUFwaVVybCIsIkhUTUw1QmFja2VuZCIsIlRvdWNoQmFja2VuZCIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiSldUX0tFWSIsInZlcmlmeVRva2VuIiwiand0VG9rZW4iLCJqd3QiLCJ2ZXJpZnkiLCJlIiwiZ2V0QXBwQ29va2llcyIsInJlcSIsInBhcnNlZEl0ZW1zIiwiaGVhZGVycyIsImNvb2tpZSIsImNvb2tpZXNJdGVtcyIsInNwbGl0IiwiY29va2llcyIsInBhcnNlZEl0ZW0iLCJkZWNvZGVVUkkiLCJhYnNvbHV0ZVVybCIsInNldExvY2FsaG9zdCIsInByb3RvY29sIiwiaG9zdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaW5kZXhPZiIsInVybCIsIkFwcCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJVQSIsImlzTW9iaWxlIiwiQm9vbGVhbiIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN0QztBQUNBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMscUVBRFA7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFLRTtBQUFLLE1BQUUsRUFBQyxlQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE1BQUUsRUFBQyxjQURMO0FBRUUsT0FBRyxFQUFDLDZDQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FBQ0UsTUFBRSxFQUFDLFVBREw7QUFFRSxPQUFHLEVBQUVELEtBQUssQ0FBQ0UsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFRRTtBQUNFLE1BQUUsRUFBQyxXQURMO0FBRUUsT0FBRyxFQUFDLG1DQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVlFO0FBQUssTUFBRSxFQUFDLFdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQkYsS0FBSyxDQUFDRyxRQUEzQixDQVpGLEVBYUU7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixPQUFHLEVBQUVILEtBQUssQ0FBQ0ksU0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJGLEVBY0U7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQXdCSixLQUFLLENBQUNLLFdBQTlCLE1BZEYsRUFlRTtBQUFLLE1BQUUsRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0JMLEtBQUssQ0FBQ00sUUFBMUIsQ0FmRixFQWdCRTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUJOLEtBQUssQ0FBQ08sT0FBekIsQ0FoQkYsRUFpQkU7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CUCxLQUFLLENBQUNRLE9BQXpCLENBakJGLENBTEYsQ0FERjtBQTJCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQyxVQUFVLEdBQUdDLGtEQUFJLENBQUMsU0FBU0MsU0FBVCxHQUFxQjtBQUV6QyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQkYsc0RBQVEsQ0FBQyxFQUFELENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCSixzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ssT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JOLHNEQUFRLENBQUMsRUFBRCxDQUF0Qzs7QUFFQSxRQUFNTyxRQUFRLEdBQUcsTUFBTTtBQUNuQjtBQUNBLFFBQUlOLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUNyQkMsa0RBQUssQ0FBQ0MsR0FBTixDQUFXLFdBQVgsRUFBdUJDLElBQXZCLENBQTZCQyxHQUFELElBQVM7QUFDakMsWUFBSUMsSUFBSSxHQUFHRCxHQUFHLENBQUNFLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxJQUFkLENBQW1CLE1BQU1DLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDQyxNQUFMLEVBQXpDLEVBQXdEQyxLQUF4RCxDQUE4RCxDQUE5RCxFQUFpRSxFQUFqRSxDQUFYO0FBQ0EsWUFBSUMsS0FBSyxHQUFHUCxHQUFHLENBQUNFLElBQUosQ0FBU0EsSUFBVCxDQUFjQyxJQUFkLENBQW1CLE1BQU1DLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkQsSUFBSSxDQUFDQyxNQUFMLEVBQXpDLEVBQXdEQyxLQUF4RCxDQUE4RCxDQUE5RCxFQUFpRSxDQUFqRSxDQUFaO0FBQ0FFLGVBQU8sQ0FBQ1AsSUFBRCxDQUFQO0FBQ0FYLGlCQUFTLENBQUNXLElBQUQsQ0FBVDtBQUNBUCxrQkFBVSxDQUFDYSxLQUFELENBQVY7QUFDSCxPQU5EO0FBT0g7QUFDSixHQVhEOztBQWFBRSx5REFBUyxDQUFDLE1BQU07QUFDWmQsWUFBUTtBQUNYLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQWMseURBQVMsQ0FBQyxNQUFNO0FBQ1pELFdBQU8sQ0FBQ25CLE1BQUQsQ0FBUDtBQUNBcUIsV0FBTyxDQUFDQyxHQUFSLENBQVl0QixNQUFaO0FBQ0gsR0FIUSxFQUdOLENBQUNBLE1BQUQsQ0FITSxDQUFUO0FBS0FvQix5REFBUyxDQUFDLE1BQU07QUFDWkQsV0FBTyxDQUFDakIsT0FBRCxDQUFQO0FBQ0FtQixXQUFPLENBQUNDLEdBQVIsQ0FBWXBCLE9BQVo7QUFDSCxHQUhRLEVBR04sQ0FBQ0EsT0FBRCxDQUhNLENBQVQ7QUFLQWtCLHlEQUFTLENBQUMsTUFBTTtBQUNaRCxXQUFPLENBQUNmLE9BQUQsQ0FBUDtBQUNBaUIsV0FBTyxDQUFDQyxHQUFSLENBQVlsQixPQUFaO0FBQ0gsR0FIUSxFQUdOLENBQUNBLE9BQUQsQ0FITSxDQUFUOztBQUtBLFFBQU1tQixnQkFBZ0IsR0FBSUMsS0FBRCxJQUFXO0FBQ2hDdkIsYUFBUyxDQUFDd0IsSUFBSSxJQUFJQSxJQUFJLENBQUNDLE1BQUwsQ0FBYUMsSUFBRCxJQUFVO0FBQ3BDO0FBQ0EsYUFBT0EsSUFBSSxDQUFDQyxFQUFMLElBQVdKLEtBQUssR0FBRyxDQUExQjtBQUNILEtBSGlCLENBQVQsQ0FBVDtBQUlBckIsY0FBVSxDQUFDMEIsU0FBUyxJQUFJLENBQUMsR0FBR0EsU0FBSixFQUFlN0IsTUFBTSxDQUFDMEIsTUFBUCxDQUFjQyxJQUFJLElBQUlBLElBQUksQ0FBQ0MsRUFBTCxJQUFXSixLQUFLLEdBQUcsQ0FBekMsRUFBNEMsQ0FBNUMsQ0FBZixDQUFkLENBQVY7QUFDSCxHQU5EOztBQVFBLFFBQU1MLE9BQU8sR0FBSVcsS0FBRCxJQUFXO0FBQ3ZCLFFBQUlDLE9BQU8sR0FBR0QsS0FBZDtBQUNBQyxXQUFPLENBQUNDLE9BQVIsQ0FBZ0IsVUFBVUMsT0FBVixFQUFtQlQsS0FBbkIsRUFBMEI7QUFDdENTLGFBQU8sQ0FBQ0wsRUFBUixHQUFjL0IsSUFBSSxHQUFHMkIsS0FBSCxHQUFXQSxLQUFLLEdBQUcsQ0FBckM7QUFDSCxLQUZEO0FBR0EsUUFBSSxDQUFDM0IsSUFBTCxFQUFXQyxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ2QsR0FORDs7QUFRQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUFFb0MsY0FBUSxFQUFFLFFBQVo7QUFBc0JDLFdBQUssRUFBRTtBQUE3QixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtDQUFEO0FBQVEsU0FBSyxFQUFFL0IsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJO0FBQUssU0FBSyxFQUFFO0FBQUU4QixjQUFRLEVBQUUsUUFBWjtBQUFzQkMsV0FBSyxFQUFFO0FBQTdCLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBTyxTQUFLLEVBQUVqQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0k7QUFBSyxTQUFLLEVBQUU7QUFBRWdDLGNBQVEsRUFBRSxRQUFaO0FBQXNCQyxXQUFLLEVBQUU7QUFBN0IsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2Q0FBRDtBQUFNLFNBQUssRUFBRW5DLE1BQWI7QUFBcUIsWUFBUSxFQUFFdUIsZ0JBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLENBREo7QUFhSCxDQXBFc0IsQ0FBdkI7QUFzRWU3Qix5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFFTyxNQUFNMEMsTUFBTSxHQUFJbkQsS0FBRCxJQUFXO0FBQzdCLFFBQU1vRCxLQUFLLEdBQUc7QUFDVkMsVUFBTSxFQUFFLE9BREU7QUFFVkMsU0FBSyxFQUFFO0FBRkcsR0FBZDtBQUlBLFNBRUk7QUFBSyxTQUFLLG9CQUFPRixLQUFQLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssU0FBSyxFQUFFO0FBQ1JHLGFBQU8sRUFBRSxNQUREO0FBRVJDLG9CQUFjLEVBQUU7QUFGUixLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS3hELEtBQUssQ0FBQ3lELEtBQU4sQ0FBWUMsR0FBWixDQUFnQixDQUFDaEIsSUFBRCxFQUFPSCxLQUFQLEtBQ2I7QUFBSyxPQUFHLEVBQUUsV0FBV0csSUFBSSxDQUFDdkMsUUFBaEIsR0FBMkJvQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOENBQUQ7QUFBTyxRQUFJLEVBQUVHLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESCxDQURMLENBSkosQ0FESixDQUZKO0FBbUJILENBeEJNO0FBMEJRUyxxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBRUEsTUFBTUMsS0FBSyxHQUFHO0FBQ1ZDLFFBQU0sRUFBRSxPQURFO0FBRVZDLE9BQUssRUFBRSxPQUZHO0FBR1ZLLFFBQU0sRUFBRSxFQUhFO0FBSVZDLFVBQVEsRUFBRSxVQUpBO0FBS1YzRCxPQUFLLEVBQUU7QUFMRyxDQUFkO0FBT08sTUFBTTRELEtBQUssR0FBSTdELEtBQUQsSUFBVztBQUM1QixRQUFNMEMsSUFBSSxHQUFHMUMsS0FBSyxDQUFDMEMsSUFBbkI7QUFDQSxRQUFNLENBQUM7QUFBRW9CLFdBQUY7QUFBV0M7QUFBWCxHQUFELEVBQXNCQyxJQUF0QixJQUE4QkMseURBQU8sQ0FBQyxPQUFPO0FBQy9DQyxVQUFNLEVBQUVDLG9EQUFTLENBQUNDLFNBRDZCO0FBRS9DSixRQUFJLEVBQUUsT0FBTztBQUFFSyxVQUFJLEVBQUUzQixJQUFJLENBQUN2QztBQUFiLEtBQVAsQ0FGeUM7QUFHL0NtRSxXQUFPLEVBQUdDLE9BQUQsS0FBYztBQUNuQlIsWUFBTSxFQUFFUSxPQUFPLENBQUNSLE1BQVIsRUFEVztBQUVuQkQsYUFBTyxFQUFFUyxPQUFPLENBQUNULE9BQVI7QUFGVSxLQUFkO0FBSHNDLEdBQVAsQ0FBRCxDQUEzQztBQVNBLFFBQU1VLFFBQVEsR0FBR1YsT0FBTyxJQUFJQyxNQUE1QjtBQUNBLE1BQUlVLGVBQWUsR0FBRyxNQUF0Qjs7QUFFQSxNQUFJRCxRQUFKLEVBQWM7QUFDVkMsbUJBQWUsR0FBRyxXQUFsQjtBQUNILEdBRkQsTUFJSyxJQUFJWCxPQUFKLEVBQWE7QUFDZFcsbUJBQWUsR0FBRyxXQUFsQjtBQUNIOztBQUVELFNBQ0k7QUFBSyxPQUFHLEVBQUVULElBQVY7QUFBZ0IsUUFBSSxFQUFFLE9BQXRCO0FBQStCLFNBQUssa0NBQU9aLEtBQVA7QUFBY3FCO0FBQWQsTUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFDSSxNQUFFLEVBQUUvQixJQUFJLENBQUNDLEVBRGI7QUFFSSxZQUFRLEVBQUVELElBQUksQ0FBQ3ZDLFFBRm5CO0FBR0ksYUFBUyxFQUFFdUMsSUFBSSxDQUFDeEMsU0FIcEI7QUFJSSxjQUFVLEVBQUV3QyxJQUFJLENBQUNnQyxVQUpyQjtBQUtJLFlBQVEsRUFBRWhDLElBQUksQ0FBQ2lDLFFBTG5CO0FBTUksYUFBUyxFQUFFakMsSUFBSSxDQUFDdEMsU0FOcEI7QUFPSSxZQUFRLEVBQUVzQyxJQUFJLENBQUNwQyxRQVBuQjtBQVFJLGVBQVcsRUFBRW9DLElBQUksQ0FBQ3JDLFdBUnRCO0FBU0ksV0FBTyxFQUFFcUMsSUFBSSxDQUFDa0MsT0FUbEI7QUFVSSxXQUFPLEVBQUVsQyxJQUFJLENBQUNtQyxPQVZsQjtBQVdJLFlBQVEsRUFBRTdFLEtBQUssQ0FBQzhFLFFBWHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBaUJILENBdkNNO0FBeUNRakIsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUVBLE1BQU1ULEtBQUssR0FBRztBQUNWQyxRQUFNLEVBQUUsT0FERTtBQUVWQyxPQUFLLEVBQUU7QUFGRyxDQUFkO0FBSU8sTUFBTXlCLEtBQUssR0FBSS9FLEtBQUQsSUFBVztBQUM1QixRQUFNLENBQUM7QUFBRThELFdBQUY7QUFBV0M7QUFBWCxHQUFELEVBQXNCQyxJQUF0QixJQUE4QkMseURBQU8sQ0FBQyxPQUFPO0FBQy9DQyxVQUFNLEVBQUVDLG9EQUFTLENBQUNhLFFBRDZCO0FBRS9DaEIsUUFBSSxFQUFFLE9BQU87QUFBRUssVUFBSSxFQUFFO0FBQVIsS0FBUCxDQUZ5QztBQUcvQ0MsV0FBTyxFQUFHQyxPQUFELEtBQWM7QUFDbkJSLFlBQU0sRUFBRVEsT0FBTyxDQUFDUixNQUFSLEVBRFc7QUFFbkJELGFBQU8sRUFBRVMsT0FBTyxDQUFDVCxPQUFSO0FBRlUsS0FBZDtBQUhzQyxHQUFQLENBQUQsQ0FBM0M7QUFTQSxRQUFNVSxRQUFRLEdBQUdWLE9BQU8sSUFBSUMsTUFBNUI7QUFDQSxNQUFJVSxlQUFlLEdBQUcsTUFBdEI7O0FBRUEsTUFBSUQsUUFBSixFQUFjO0FBQ1ZDLG1CQUFlLEdBQUcsV0FBbEI7QUFDSCxHQUZELE1BSUssSUFBSVgsT0FBSixFQUFhO0FBQ2RXLG1CQUFlLEdBQUcsV0FBbEI7QUFDSDs7QUFFRCxTQUNJO0FBQUssT0FBRyxFQUFFVCxJQUFWO0FBQWdCLFFBQUksRUFBRSxPQUF0QjtBQUErQixTQUFLLGtDQUFPWixLQUFQO0FBQWNxQjtBQUFkLE1BQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFNBQUssRUFBRTtBQUNSbEIsYUFBTyxFQUFFLE1BREQ7QUFFUkMsb0JBQWMsRUFBRSxRQUZSO0FBR1JGLFdBQUssRUFBRSxNQUhDO0FBSVJELFlBQU0sRUFBRTtBQUpBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1LckQsS0FBSyxDQUFDeUQsS0FBTixDQUFZQyxHQUFaLENBQWdCLENBQUNoQixJQUFELEVBQU9ILEtBQVAsS0FDYjtBQUFLLE9BQUcsRUFBRSxVQUFVRyxJQUFJLENBQUN2QyxRQUFmLEdBQTBCb0MsS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQ0ksTUFBRSxFQUFFRyxJQUFJLENBQUNDLEVBRGI7QUFFSSxZQUFRLEVBQUVELElBQUksQ0FBQ3ZDLFFBRm5CO0FBR0ksYUFBUyxFQUFFdUMsSUFBSSxDQUFDeEMsU0FIcEI7QUFJSSxjQUFVLEVBQUV3QyxJQUFJLENBQUNnQyxVQUpyQjtBQUtJLFlBQVEsRUFBRWhDLElBQUksQ0FBQ2lDLFFBTG5CO0FBTUksYUFBUyxFQUFFakMsSUFBSSxDQUFDdEMsU0FOcEI7QUFPSSxZQUFRLEVBQUVzQyxJQUFJLENBQUNwQyxRQVBuQjtBQVFJLGVBQVcsRUFBRW9DLElBQUksQ0FBQ3JDLFdBUnRCO0FBU0ksV0FBTyxFQUFFcUMsSUFBSSxDQUFDa0MsT0FUbEI7QUFVSSxXQUFPLEVBQUVsQyxJQUFJLENBQUNtQyxPQVZsQjtBQVdJLFlBQVEsRUFBRTdFLEtBQUssQ0FBQzhFLFFBWHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBREgsQ0FOTCxDQURKLENBREo7QUE4QkgsQ0FuRE07QUFxRFFDLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUVBLE1BQU0zQixLQUFLLEdBQUc7QUFDVjZCLFFBQU0sRUFBRSxpQkFERTtBQUVWQyxRQUFNLEVBQUUsTUFGRTtBQUdWdkIsUUFBTSxFQUFFO0FBSEUsQ0FBZDs7QUFLQSxNQUFNd0IsU0FBUyxHQUFHLFNBQVNBLFNBQVQsQ0FBbUI7QUFDakN4QyxJQURpQztBQUVqQ3hDLFVBRmlDO0FBR2pDRCxXQUhpQztBQUlqQ3dFLFlBSmlDO0FBS2pDQyxVQUxpQztBQU1qQ3RFLGFBTmlDO0FBT2pDQyxVQVBpQztBQVFqQ0YsV0FSaUM7QUFTakNHLFNBVGlDO0FBVWpDQyxTQVZpQyxDQVdqQzs7QUFYaUMsQ0FBbkIsRUFZZjtBQUNDLFFBQU0sQ0FBQztBQUFFNEU7QUFBRixHQUFELEVBQWlCQyxJQUFqQixJQUF5QkMseURBQU8sQ0FBQyxPQUFPO0FBQzFDQyxRQUFJLEVBQUVwQixvREFBUyxDQUFDQyxTQUQwQjtBQUUxQ29CLFFBQUksRUFBRTtBQUFFN0MsUUFBRjtBQUFNeEM7QUFBTixLQUZvQztBQUcxQ3NGLE9BQUcsRUFBRSxDQUFDRCxJQUFELEVBQU9qQixPQUFQLEtBQW1CO0FBQ3BCLFlBQU1tQixVQUFVLEdBQUduQixPQUFPLENBQUNvQixhQUFSLEVBQW5COztBQUNBLFVBQUlILElBQUksSUFBSUUsVUFBWixFQUF3QjtBQUNwQjtBQUNBdEQsZUFBTyxDQUFDQyxHQUFSLENBQWEsWUFBV21ELElBQUksQ0FBQ3JGLFFBQVMsY0FBYXVGLFVBQVUsQ0FBQ3JCLElBQUssR0FBbkU7QUFDSDtBQUNKLEtBVHlDO0FBVTFDQyxXQUFPLEVBQUdDLE9BQUQsS0FBYztBQUNuQmEsZ0JBQVUsRUFBRWIsT0FBTyxDQUFDYSxVQUFSLEVBRE87QUFFbkJRLGVBQVMsRUFBRXJCLE9BQU8sQ0FBQ3NCLFlBQVI7QUFGUSxLQUFkO0FBVmlDLEdBQVAsQ0FBRCxDQUF0QztBQWVBLFFBQU1DLE9BQU8sR0FBR1YsVUFBVSxHQUFHLEdBQUgsR0FBUyxDQUFuQztBQUNBLFNBQ0k7QUFBSyxPQUFHLEVBQUVDLElBQVY7QUFBZ0IsUUFBSSxFQUFDLFdBQXJCO0FBQWlDLFNBQUssa0NBQU9qQyxLQUFQO0FBQWMwQztBQUFkLE1BQXRDO0FBQStELG1CQUFjLGFBQVkzRixRQUFTLEVBQWxHO0FBQXFHLFdBQU8sRUFBRSxNQUFNO0FBQUVpQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU0sRUFBWjtBQUFpQixLQUF2STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwREFBRDtBQUNJLE1BQUUsRUFBRUEsRUFEUjtBQUVJLFlBQVEsRUFBRXhDLFFBRmQ7QUFHSSxhQUFTLEVBQUVELFNBSGY7QUFJSSxjQUFVLEVBQUV3RSxVQUpoQjtBQUtJLFlBQVEsRUFBRUMsUUFMZDtBQU1JLGVBQVcsRUFBRXRFLFdBTmpCO0FBT0ksWUFBUSxFQUFFQyxRQVBkO0FBUUksYUFBUyxFQUFFRixTQVJmO0FBU0ksV0FBTyxFQUFFRyxPQVRiO0FBVUksV0FBTyxFQUFFQyxPQVZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKO0FBZ0JILENBN0NEOztBQStDZTJFLHdFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeERBO0FBRU8sTUFBTVksSUFBSSxHQUFJL0YsS0FBRCxJQUFXO0FBQzNCLFNBQ0k7QUFBSyxTQUFLLEVBQUU7QUFDUnVELGFBQU8sRUFBRSxNQUREO0FBRVJDLG9CQUFjLEVBQUUsUUFGUjtBQUdSRixXQUFLLEVBQUUsTUFIQztBQUlSRCxZQUFNLEVBQUU7QUFKQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNS3JELEtBQUssQ0FBQ3lELEtBQU4sQ0FBWUMsR0FBWixDQUFnQixDQUFDaEIsSUFBRCxFQUFPSCxLQUFQLEtBQ2I7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBcUMsT0FBRyxFQUFFRyxJQUFJLENBQUN2QyxRQUFMLEdBQWdCb0MsS0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFDSSxNQUFFLEVBQUVHLElBQUksQ0FBQ0MsRUFEYjtBQUVJLFlBQVEsRUFBRUQsSUFBSSxDQUFDdkMsUUFGbkI7QUFHSSxhQUFTLEVBQUV1QyxJQUFJLENBQUN4QyxTQUhwQjtBQUlJLGNBQVUsRUFBRXdDLElBQUksQ0FBQ2dDLFVBSnJCO0FBS0ksWUFBUSxFQUFFaEMsSUFBSSxDQUFDaUMsUUFMbkI7QUFNSSxhQUFTLEVBQUVqQyxJQUFJLENBQUN0QyxTQU5wQjtBQU9JLFlBQVEsRUFBRXNDLElBQUksQ0FBQ3BDLFFBUG5CO0FBUUksZUFBVyxFQUFFb0MsSUFBSSxDQUFDckMsV0FSdEI7QUFTSSxXQUFPLEVBQUVxQyxJQUFJLENBQUNrQyxPQVRsQjtBQVVJLFdBQU8sRUFBRWxDLElBQUksQ0FBQ21DLE9BVmxCO0FBV0ksWUFBUSxFQUFFN0UsS0FBSyxDQUFDOEUsUUFYcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREgsQ0FOTCxDQURKO0FBMEJILENBM0JNO0FBNkJRaUIsbUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQ0E7QUFDQTtBQUVBLE1BQU0zQyxLQUFLLEdBQUc7QUFDVjZCLFFBQU0sRUFBRSxpQkFERTtBQUVWQyxRQUFNLEVBQUUsTUFGRTtBQUdWNUIsT0FBSyxFQUFFLE9BSEc7QUFJVkssUUFBTSxFQUFFO0FBSkUsQ0FBZDtBQU1PLE1BQU1xQyxRQUFRLEdBQUcsU0FBU0EsUUFBVCxDQUFrQjtBQUN0Q3JELElBRHNDO0FBRXRDeEMsVUFGc0M7QUFHdENELFdBSHNDO0FBSXRDd0UsWUFKc0M7QUFLdENDLFVBTHNDO0FBTXRDdEUsYUFOc0M7QUFPdENDLFVBUHNDO0FBUXRDRixXQVJzQztBQVN0Q0csU0FUc0M7QUFVdENDLFNBVnNDO0FBV3RDc0U7QUFYc0MsQ0FBbEIsRUFZckI7QUFDQyxRQUFNLENBQUM7QUFBRU07QUFBRixHQUFELEVBQWlCQyxJQUFqQixJQUF5QkMseURBQU8sQ0FBQyxPQUFPO0FBQzFDQyxRQUFJLEVBQUVwQixvREFBUyxDQUFDYSxRQUQwQjtBQUUxQ1EsUUFBSSxFQUFFO0FBQUU3QyxRQUFGO0FBQU14QztBQUFOLEtBRm9DO0FBRzFDc0YsT0FBRyxFQUFFLENBQUNELElBQUQsRUFBT2pCLE9BQVAsS0FBbUI7QUFDcEIsWUFBTW1CLFVBQVUsR0FBR25CLE9BQU8sQ0FBQ29CLGFBQVIsRUFBbkI7O0FBQ0EsVUFBSUgsSUFBSSxJQUFJRSxVQUFaLEVBQXdCO0FBQ3BCWixnQkFBUSxDQUFDVSxJQUFJLENBQUM3QyxFQUFOLENBQVI7QUFDQVAsZUFBTyxDQUFDQyxHQUFSLENBQWEsZUFBY21ELElBQUksQ0FBQ3JGLFFBQVMsU0FBUXVGLFVBQVUsQ0FBQ3JCLElBQUssR0FBakU7QUFDSDtBQUNKLEtBVHlDO0FBVTFDQyxXQUFPLEVBQUdDLE9BQUQsS0FBYztBQUNuQmEsZ0JBQVUsRUFBRWIsT0FBTyxDQUFDYSxVQUFSLEVBRE87QUFFbkJRLGVBQVMsRUFBRXJCLE9BQU8sQ0FBQ3NCLFlBQVI7QUFGUSxLQUFkO0FBVmlDLEdBQVAsQ0FBRCxDQUF0QztBQWVBLFFBQU1DLE9BQU8sR0FBR1YsVUFBVSxHQUFHLEdBQUgsR0FBUyxDQUFuQztBQUNBLFNBQ0k7QUFDSSxPQUFHLEVBQUVDLElBRFQ7QUFFSSxRQUFJLEVBQUMsVUFGVDtBQUdJLFNBQUssa0NBQU9qQyxLQUFQO0FBQWMwQztBQUFkLE1BSFQ7QUFJSSxtQkFBYyxZQUFXM0YsUUFBUyxFQUp0QztBQUtJLFdBQU8sRUFBRSxNQUFNO0FBQ1hpQyxhQUFPLENBQUNDLEdBQVIsQ0FBWU0sRUFBWjtBQUNILEtBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFJLE1BQUMsMERBQUQ7QUFDSSxNQUFFLEVBQUVBLEVBRFI7QUFFSSxZQUFRLEVBQUV4QyxRQUZkO0FBR0ksYUFBUyxFQUFFRCxTQUhmO0FBSUksY0FBVSxFQUFFd0UsVUFKaEI7QUFLSSxZQUFRLEVBQUVDLFFBTGQ7QUFNSSxlQUFXLEVBQUV0RSxXQU5qQjtBQU9JLFlBQVEsRUFBRUMsUUFQZDtBQVFJLGFBQVMsRUFBRUYsU0FSZjtBQVNJLFdBQU8sRUFBRUcsT0FUYjtBQVVJLFdBQU8sRUFBRUMsT0FWYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosQ0FESjtBQXVCSCxDQXBETSxDOzs7Ozs7Ozs7Ozs7QUNWUDtBQUFBO0FBQU8sTUFBTTJELFNBQVMsR0FBRztBQUNyQmEsVUFBUSxFQUFFLFVBRFc7QUFFckJaLFdBQVMsRUFBRTtBQUZVLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTNkIsSUFBVCxDQUFjakcsS0FBZCxFQUFxQjtBQUNsQyxRQUFNO0FBQUVrRyxRQUFGO0FBQVFDLFVBQVI7QUFBZ0JDLGNBQWhCO0FBQTRCQztBQUE1QixNQUEyQ3JHLEtBQUssQ0FBQzRCLElBQXZEO0FBQ0FRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZK0QsVUFBWjtBQUNBaEUsU0FBTyxDQUFDQyxHQUFSLENBQVlnRSxVQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFhLFdBQU8sRUFBRUQsVUFBVSxLQUFHLFNBQWIsR0FBeUJFLG9FQUF6QixHQUF3Q0Msb0VBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUdMLElBQUksSUFDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csV0FESCxFQUVHQSxJQUFJLENBQUN2RCxFQUZSLENBTEosQ0FERixDQURGO0FBZUQsQzs7Ozs7Ozs7Ozs7O0FDeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTTZELFVBQVUsR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQS9CO0FBRUE7Ozs7O0FBSU8sU0FBU0MsV0FBVCxDQUFxQkMsUUFBckIsRUFBK0I7QUFDcEMsTUFBSTtBQUNGLFdBQU9DLG1EQUFHLENBQUNDLE1BQUosQ0FBV0YsUUFBWCxFQUFxQkwsVUFBckIsQ0FBUDtBQUNELEdBRkQsQ0FFRSxPQUFPUSxDQUFQLEVBQVU7QUFDVjVFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVosRUFBa0IyRSxDQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFFRDs7Ozs7QUFJTyxTQUFTQyxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUNqQyxRQUFNQyxXQUFXLEdBQUcsRUFBcEI7O0FBQ0EsTUFBSUQsR0FBRyxDQUFDRSxPQUFKLENBQVlDLE1BQWhCLEVBQXdCO0FBQ3RCLFVBQU1DLFlBQVksR0FBR0osR0FBRyxDQUFDRSxPQUFKLENBQVlDLE1BQVosQ0FBbUJFLEtBQW5CLENBQXlCLElBQXpCLENBQXJCO0FBQ0FELGdCQUFZLENBQUN2RSxPQUFiLENBQXFCeUUsT0FBTyxJQUFJO0FBQzlCLFlBQU1DLFVBQVUsR0FBR0QsT0FBTyxDQUFDRCxLQUFSLENBQWMsR0FBZCxDQUFuQjtBQUNBSixpQkFBVyxDQUFDTSxVQUFVLENBQUMsQ0FBRCxDQUFYLENBQVgsR0FBNkJDLFNBQVMsQ0FBQ0QsVUFBVSxDQUFDLENBQUQsQ0FBWCxDQUF0QztBQUNELEtBSEQ7QUFJRDs7QUFDRCxTQUFPTixXQUFQO0FBQ0Q7QUFFRDs7Ozs7QUFJTyxTQUFTUSxXQUFULENBQXFCVCxHQUFyQixFQUEwQlUsWUFBMUIsRUFBd0M7QUFDN0MsTUFBSUMsUUFBUSxHQUFHLFFBQWY7QUFDQSxNQUFJQyxJQUFJLEdBQUdaLEdBQUcsR0FDVkEsR0FBRyxDQUFDRSxPQUFKLENBQVksa0JBQVosS0FBbUNGLEdBQUcsQ0FBQ0UsT0FBSixDQUFZLE1BQVosQ0FEekIsR0FFVlcsTUFBTSxDQUFDQyxRQUFQLENBQWdCRixJQUZwQjs7QUFHQSxNQUFJQSxJQUFJLENBQUNHLE9BQUwsQ0FBYSxXQUFiLElBQTRCLENBQUMsQ0FBakMsRUFBb0M7QUFDbEMsUUFBSUwsWUFBSixFQUFrQkUsSUFBSSxHQUFHRixZQUFQO0FBQ2xCQyxZQUFRLEdBQUcsT0FBWDtBQUNEOztBQUNELFNBQU87QUFDTEEsWUFBUSxFQUFFQSxRQURMO0FBRUxDLFFBQUksRUFBRUEsSUFGRDtBQUdMM0IsVUFBTSxFQUFFMEIsUUFBUSxHQUFHLElBQVgsR0FBa0JDLElBSHJCO0FBSUxJLE9BQUcsRUFBRWhCO0FBSkEsR0FBUDtBQU1ELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREQ7QUFDQTtBQUVlLFNBQVNpQixHQUFULENBQWFuSSxLQUFiLEVBQW9CO0FBRWpDLFNBQ0UsTUFBQyw2REFBRDtBQUFNLFFBQUksRUFBRUEsS0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFHRDtBQUNEOztBQUNPLGVBQWVvSSxrQkFBZixDQUFrQ0MsT0FBbEMsRUFBMkM7QUFDaEQsUUFBTTtBQUFFbkI7QUFBRixNQUFVbUIsT0FBaEI7QUFDQSxRQUFNO0FBQUVsQztBQUFGLE1BQWF3QixxRUFBVyxDQUFDVCxHQUFELENBQTlCO0FBQ0EsUUFBTW9CLEVBQUUsR0FBR0QsT0FBTyxDQUFDbkIsR0FBUixDQUFZRSxPQUFaLENBQW9CLFlBQXBCLENBQVg7QUFDQSxRQUFNbUIsUUFBUSxHQUFHQyxPQUFPLENBQUNGLEVBQUUsQ0FBQ0csS0FBSCxDQUN2QixvRUFEdUIsQ0FBRCxDQUF4QjtBQUdBLFNBQU87QUFDTHpJLFNBQUssRUFBRTtBQUNMbUcsWUFESztBQUVMQyxnQkFBVSxFQUFFbUMsUUFBUSxHQUFHLFFBQUgsR0FBYztBQUY3QjtBQURGLEdBQVA7QUFNRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCRCxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQ2FyZChwcm9wcykge1xyXG4gIC8vY29uc29sZS5sb2cocHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6ICdibGFjaycgfX0+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGlkPVwiY2FyZENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGlkPVwiY2FyZFRlbXBsYXRlXCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vbUc2anZwUi9tb25zdGVyLW5vcm1hbC5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgaWQ9XCJjYXJkRmFjZVwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLmNhcmRJbWFnZX0gLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBpZD1cInN0YXJMZXZlbFwiXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL00xYllDNlYvc3Rhci5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBpZD1cImNhcmRUaXRsZVwiPntwcm9wcy5jYXJkTmFtZX08L2Rpdj5cclxuICAgICAgICA8aW1nIGlkPVwiY2FyZFR5cGVcIiBzcmM9e3Byb3BzLnR5cGVJbWFnZX0gLz5cclxuICAgICAgICA8aDQgIGlkPVwiY2FyZFN1YlR5cGVcIj5be3Byb3BzLmNhcmRTdWJUeXBlfV08L2g0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkRGVzY1wiPntwcm9wcy5jYXJkRGVzY308L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiY2FyZEF0a1wiPntwcm9wcy5jYXJkQXRrfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkRGVmXCI+e3Byb3BzLmNhcmREZWZ9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRUZpZWxkIGZyb20gJy4vRUZpZWxkJztcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnO1xyXG5pbXBvcnQgSGFuZCBmcm9tICcuL0hhbmQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBsYXllckhhbmQgPSBtZW1vKGZ1bmN0aW9uIENvbnRhaW5lcigpIHtcclxuXHJcbiAgICBjb25zdCBbaW5pdCwgc2V0SW5pdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtvbkhhbmQsIHNldE9uSGFuZF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvbkZpZWxkLCBzZXRPbkZpZWxkXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW29uRW5lbXksIHNldE9uRW5lbXldID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9pZiBvbkhhbmQgaGF2ZSBub3QgbG9hZGVkIHlldCB0aGVuIGxvYWQgdGhlbSBmcm9tIHNlcnZlci5cclxuICAgICAgICBpZiAob25IYW5kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmQgPSByZXMuZGF0YS5kYXRhLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgICAgICAgICAgbGV0IGVuZW15ID0gcmVzLmRhdGEuZGF0YS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCAzKVxyXG4gICAgICAgICAgICAgICAgc29ydElEcyhoYW5kKVxyXG4gICAgICAgICAgICAgICAgc2V0T25IYW5kKGhhbmQpO1xyXG4gICAgICAgICAgICAgICAgc2V0T25FbmVteShlbmVteSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBnZXRDYXJkcygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ydElEcyhvbkhhbmQpXHJcbiAgICAgICAgY29uc29sZS5sb2cob25IYW5kKVxyXG4gICAgfSwgW29uSGFuZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ydElEcyhvbkZpZWxkKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uRmllbGQpXHJcbiAgICB9LCBbb25GaWVsZF0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc29ydElEcyhvbkVuZW15KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uRW5lbXkpXHJcbiAgICB9LCBbb25FbmVteV0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcmRQbGF5ZWQgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBzZXRPbkhhbmQocHJldiA9PiBwcmV2LmZpbHRlcigoY2FyZCkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNhcmQuaWQsIGluZGV4KVxyXG4gICAgICAgICAgICByZXR1cm4gY2FyZC5pZCAhPSBpbmRleCAtIDFcclxuICAgICAgICB9KSlcclxuICAgICAgICBzZXRPbkZpZWxkKHByZXZBcnJheSA9PiBbLi4ucHJldkFycmF5LCBvbkhhbmQuZmlsdGVyKGNhcmQgPT4gY2FyZC5pZCA9PSBpbmRleCAtIDEpWzBdXSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3J0SURzID0gKGFycmF5KSA9PiB7XHJcbiAgICAgICAgdmFyIG15QXJyYXkgPSBhcnJheVxyXG4gICAgICAgIG15QXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5pZCA9IChpbml0ID8gaW5kZXggOiBpbmRleCArIDEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghaW5pdCkgc2V0SW5pdCh0cnVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8RUZpZWxkIGNhcmRzPXtvbkVuZW15fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8RmllbGQgY2FyZHM9e29uRmllbGR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxIYW5kIGNhcmRzPXtvbkhhbmR9IHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCIsImltcG9ydCBFbmVteSBmcm9tICcuL0VuZW15JztcclxuXHJcbmV4cG9ydCBjb25zdCBFRmllbGQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIGhlaWdodDogJzI2NXB4JyxcclxuICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZSB9fT5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtcImVmaWVsZFwiICsgY2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWVmaWVsZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVuZW15IGNhcmQ9e2NhcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVGaWVsZCIsImltcG9ydCB7IHVzZURyb3AgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcbmltcG9ydCBDYXJkQ2FyZCBmcm9tICcuLi9jYXJkQ2FyZC9DYXJkQ2FyZCc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGhlaWdodDogJzI2NXB4JyxcclxuICAgIHdpZHRoOiAnMTc1cHgnLFxyXG4gICAgekluZGV4OiAxMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZSdcclxufVxyXG5leHBvcnQgY29uc3QgRW5lbXkgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBwcm9wcy5jYXJkXHJcbiAgICBjb25zdCBbeyBjYW5Ecm9wLCBpc092ZXIgfSwgZHJvcF0gPSB1c2VEcm9wKCgpID0+ICh7XHJcbiAgICAgICAgYWNjZXB0OiBJdGVtVHlwZXMuRklFTERDQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6IGNhcmQuY2FyZE5hbWUgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjYW5Ecm9wICYmIGlzT3ZlcjtcclxuICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnIzIyMic7XHJcblxyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2Ryb3B9IHJvbGU9eydFbmVteSd9IHN0eWxlPXt7IC4uLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkQ2FyZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZC5jYXJkTmFtZX1cclxuICAgICAgICAgICAgICAgIGNhcmRJbWFnZT17Y2FyZC5jYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZC5jYXJkVHlwZX1cclxuICAgICAgICAgICAgICAgIHR5cGVJbWFnZT17Y2FyZC50eXBlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgIGNhcmRTdWJUeXBlPXtjYXJkLmNhcmRTdWJUeXBlfVxyXG4gICAgICAgICAgICAgICAgY2FyZEF0az17Y2FyZC5jYXJkQVRLfVxyXG4gICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgcGxheUNhcmQ9e3Byb3BzLnBsYXlDYXJkfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW5lbXkiLCJpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgRmllbGRDYXJkIGZyb20gJy4vRmllbGRDYXJkJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMjY1cHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJ1xyXG59XHJcbmV4cG9ydCBjb25zdCBGaWVsZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3sgY2FuRHJvcCwgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgICAgIGFjY2VwdDogSXRlbVR5cGVzLkhBTkRDQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6ICdGaWVsZCcgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjYW5Ecm9wICYmIGlzT3ZlcjtcclxuICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnIzIyMic7XHJcblxyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2Ryb3B9IHJvbGU9eydGaWVsZCd9IHN0eWxlPXt7IC4uLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eydmaWVsZCcgKyBjYXJkLmNhcmROYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlZC1maWVsZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZC5jYXJkU3ViVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtwcm9wcy5wbGF5Q2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQiLCJpbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgQ2FyZENhcmQgZnJvbSAnLi4vY2FyZENhcmQvQ2FyZENhcmQnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknLFxyXG4gICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmNvbnN0IEZpZWxkQ2FyZCA9IGZ1bmN0aW9uIEZpZWxkQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZFN1YlR5cGUsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgLy9wbGF5Q2FyZFxyXG59KSB7XHJcbiAgICBjb25zdCBbeyBpc0RyYWdnaW5nIH0sIGRyYWddID0gdXNlRHJhZygoKSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IEl0ZW1UeXBlcy5GSUVMRENBUkQsXHJcbiAgICAgICAgaXRlbTogeyBpZCwgY2FyZE5hbWUgfSxcclxuICAgICAgICBlbmQ6IChpdGVtLCBtb25pdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgZHJvcFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgLy9wbGF5Q2FyZChpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSB1c2VkICR7aXRlbS5jYXJkTmFtZX0gdG8gYXR0YWNrICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSByb2xlPVwiRmllbGRDYXJkXCIgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX0gZGF0YS10ZXN0aWQ9e2BmaWVsZGNhcmQtJHtjYXJkTmFtZX1gfSBvbkNsaWNrPXsoKSA9PiB7IGNvbnNvbGUubG9nKGlkKSB9fT5cclxuICAgICAgICAgICAgPENhcmRDYXJkXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e3R5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmRBdGt9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkRGVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkQ2FyZCIsImltcG9ydCB7IEhhbmRDYXJkIH0gZnJvbSAnLi9IYW5kQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGFuZCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICcyNTVweCdcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWhhbmQtY2FyZFwiIGtleT17Y2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGFuZENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmQuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkLmNhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e2NhcmQudHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFN1YlR5cGU9e2NhcmQuY2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmQuY2FyZEFUS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2FyZD17cHJvcHMucGxheUNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFuZCIsImltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcbmltcG9ydCBDYXJkQ2FyZCBmcm9tICcuLi9jYXJkQ2FyZC9DYXJkQ2FyZCc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHdpZHRoOiAnMjgwcHgnLFxyXG4gICAgekluZGV4OiAxMFxyXG59O1xyXG5leHBvcnQgY29uc3QgSGFuZENhcmQgPSBmdW5jdGlvbiBIYW5kQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZFN1YlR5cGUsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuSEFORENBUkQsXHJcbiAgICAgICAgaXRlbTogeyBpZCwgY2FyZE5hbWUgfSxcclxuICAgICAgICBlbmQ6IChpdGVtLCBtb25pdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgZHJvcFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcGxheUNhcmQoaXRlbS5pZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgZHJvcHBlZCAke2l0ZW0uY2FyZE5hbWV9IGludG8gJHtkcm9wUmVzdWx0Lm5hbWV9IWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICAgICAgICAgIGhhbmRsZXJJZDogbW9uaXRvci5nZXRIYW5kbGVySWQoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBpc0RyYWdnaW5nID8gMC40IDogMTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e2RyYWd9XHJcbiAgICAgICAgICAgIHJvbGU9XCJIYW5kQ2FyZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBvcGFjaXR5IH19XHJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgaGFuZGNhcmQtJHtjYXJkTmFtZX1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkQ2FyZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkUmFyaXR5fVxyXG4gICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgY2FyZFN1YlR5cGU9e2NhcmRTdWJUeXBlfVxyXG4gICAgICAgICAgICAgICAgY2FyZERlc2M9e2NhcmREZXNjfVxyXG4gICAgICAgICAgICAgICAgdHlwZUltYWdlPXt0eXBlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkQXRrfVxyXG4gICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZERlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBJdGVtVHlwZXMgPSB7XHJcbiAgICBIQU5EQ0FSRDogJ2hhbmRjYXJkJyxcclxuICAgIEZJRUxEQ0FSRDogJ2ZpZWxkY2FyZCdcclxuICB9XHJcbiAgIiwiaW1wb3J0IEJvYXJkIGZyb20gJy4uL2dhbWUvQm9hcmQnXHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJ1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcclxuaW1wb3J0IHsgVG91Y2hCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLXRvdWNoLWJhY2tlbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4sIGRldmljZVR5cGUsIGJhc2VBcGlVcmwgfSA9IHByb3BzLmRhdGE7XHJcbiAgY29uc29sZS5sb2coZGV2aWNlVHlwZSlcclxuICBjb25zb2xlLmxvZyhiYXNlQXBpVXJsKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17ZGV2aWNlVHlwZT09PSdkZXNrdG9wJyA/IEhUTUw1QmFja2VuZCA6IFRvdWNoQmFja2VuZH0+XHJcbiAgICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICA8L0RuZFByb3ZpZGVyPlxyXG4gICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcIlVzZXIgSUQ6IFwifVxyXG4gICAgICAgICAgICB7dXNlci5pZH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iLCJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5cbmNvbnN0IFNFQ1JFVF9LRVkgPSBwcm9jZXNzLmVudi5KV1RfS0VZO1xuXG4vKlxuICogQHBhcmFtcyB7and0VG9rZW59IGV4dHJhY3RlZCBmcm9tIGNvb2tpZXNcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIGV4dHJhY3RlZCB0b2tlblxuICovXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VG9rZW4oand0VG9rZW4pIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gand0LnZlcmlmeShqd3RUb2tlbiwgU0VDUkVUX0tFWSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZygnZTonLCBlKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKlxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZVxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgcGFyc2Ugand0IGNvb2tpZSBkZWNvZGUgb2JqZWN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBDb29raWVzKHJlcSkge1xuICBjb25zdCBwYXJzZWRJdGVtcyA9IHt9O1xuICBpZiAocmVxLmhlYWRlcnMuY29va2llKSB7XG4gICAgY29uc3QgY29va2llc0l0ZW1zID0gcmVxLmhlYWRlcnMuY29va2llLnNwbGl0KCc7ICcpO1xuICAgIGNvb2tpZXNJdGVtcy5mb3JFYWNoKGNvb2tpZXMgPT4ge1xuICAgICAgY29uc3QgcGFyc2VkSXRlbSA9IGNvb2tpZXMuc3BsaXQoJz0nKTtcbiAgICAgIHBhcnNlZEl0ZW1zW3BhcnNlZEl0ZW1bMF1dID0gZGVjb2RlVVJJKHBhcnNlZEl0ZW1bMV0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBwYXJzZWRJdGVtcztcbn1cblxuLypcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2UsIHtzZXRMb2NhbGhvc3R9IHlvdXIgbG9jYWxob3N0IGFkZHJlc3NcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0cyBvZiBwcm90b2NvbCwgaG9zdCBhbmQgb3JpZ2luXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChyZXEsIHNldExvY2FsaG9zdCkge1xuICB2YXIgcHJvdG9jb2wgPSAnaHR0cHM6JztcbiAgdmFyIGhvc3QgPSByZXFcbiAgICA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gfHwgcmVxLmhlYWRlcnNbJ2hvc3QnXVxuICAgIDogd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gIGlmIChob3N0LmluZGV4T2YoJ2xvY2FsaG9zdCcpID4gLTEpIHtcbiAgICBpZiAoc2V0TG9jYWxob3N0KSBob3N0ID0gc2V0TG9jYWxob3N0O1xuICAgIHByb3RvY29sID0gJ2h0dHA6JztcbiAgfVxuICByZXR1cm4ge1xuICAgIHByb3RvY29sOiBwcm90b2NvbCxcbiAgICBob3N0OiBob3N0LFxuICAgIG9yaWdpbjogcHJvdG9jb2wgKyAnLy8nICsgaG9zdCxcbiAgICB1cmw6IHJlcSxcbiAgfTtcbn1cbiIsImltcG9ydCB7IGFic29sdXRlVXJsIH0gZnJvbSAnLi4vbWlkZGxld2FyZS91dGlscyc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4uL2NvbXBvbmVudHMvaG9tZS9Ib21lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcChwcm9wcykge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEhvbWUgZGF0YT17cHJvcHN9IC8+XHJcbiAgKTtcclxufVxyXG4vKiBnZXRTZXJ2ZXJTaWRlUHJvcHMgKi9cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3QgeyByZXEgfSA9IGNvbnRleHQ7XHJcbiAgY29uc3QgeyBvcmlnaW4gfSA9IGFic29sdXRlVXJsKHJlcSk7XHJcbiAgY29uc3QgVUEgPSBjb250ZXh0LnJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J107XHJcbiAgY29uc3QgaXNNb2JpbGUgPSBCb29sZWFuKFVBLm1hdGNoKFxyXG4gICAgL0FuZHJvaWR8QmxhY2tCZXJyeXxpUGhvbmV8aVBhZHxpUG9kfE9wZXJhIE1pbml8SUVNb2JpbGV8V1BEZXNrdG9wL2lcclxuICApKVxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICAgIGRldmljZVR5cGU6IGlzTW9iaWxlID8gJ21vYmlsZScgOiAnZGVza3RvcCdcclxuICAgIH0sXHJcbiAgfTtcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG5kLXRvdWNoLWJhY2tlbmRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==