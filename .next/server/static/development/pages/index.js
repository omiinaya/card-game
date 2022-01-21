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

/***/ "./components/cardCreate/CardCreate.jsx":
/*!**********************************************!*\
  !*** ./components/cardCreate/CardCreate.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BasicSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "@material-ui/core/TextareaAutosize");
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\cardCreate\\CardCreate.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function BasicSelect() {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: rarities,
    1: setRarities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: types,
    1: setTypes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: rarity,
    1: setRarity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("Common");
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: desc,
    1: setDesc
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: atk,
    1: setAtk
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: def,
    1: setDef
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);

  const getRarities = () => {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`/api/cardRarity`).then(res => {
      setRarities(res.data.data);
    });
  };

  const getTypes = () => {
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(`/api/cardType`).then(res => {
      setTypes(res.data.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getRarities();
    getTypes();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {//console.log("Rarity: " + rarity);
    //console.log("Name: " + name);
    //console.log("Image: " + image);
  }, [rarity, name, image]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {//console.log(rarities);
    //console.log(types);
  }, [rarities, types]);

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangeRarity = event => {
    setRarity(event.target.value);
  };

  const handleChangeImage = event => {
    setImage(event.target.value);
  };

  const handleChangeDesc = event => {
    setDesc(event.target.value);
  };

  return rarities.length > 0 && __jsx("form", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }, "Card Rarity:"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: rarity,
    label: "Service",
    onChange: handleChangeRarity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, rarities.map(x => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: x.rarityName,
    value: x.rarityName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 15
    }
  }, x.rarityName)))), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, __jsx(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_7___default.a, {
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
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./components/game/Field.jsx");
/* harmony import */ var _Hand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hand */ "./components/game/Hand.jsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Board.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PlayerHand = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function Container() {
  const {
    0: cards,
    1: setCards
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getCards = () => {
    //if cards have not loaded yet then load them from server.
    if (cards.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/card`).then(res => {
        setCards(res.data.data);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sortCardIds();
  }, [cards]);

  const handleCardPlayed = x => {
    setCards(prev => prev.filter(card => {
      return card.id != x - 1;
    }));
  };

  const sortCardIds = () => {
    var myArray = cards;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(_Field__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
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
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_Hand__WEBPACK_IMPORTED_MODULE_2__["default"], {
    cards: cards,
    playCard: handleCardPlayed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (PlayerHand);

/***/ }),

/***/ "./components/game/Card.jsx":
/*!**********************************!*\
  !*** ./components/game/Card.jsx ***!
  \**********************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ItemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ItemTypes */ "./components/game/ItemTypes.js");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Card.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const style = {
  border: '1px dashed gray',
  cursor: 'move',
  zIndex: 10
};
const Card = function Card({
  id,
  cardName,
  cardImage,
  cardRarity,
  cardType,
  cardMonster,
  cardDesc,
  typeImage,
  cardAtk,
  cardDef,
  playCard
}) {
  const [{
    isDragging
  }, drag] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrag"])(() => ({
    type: _ItemTypes__WEBPACK_IMPORTED_MODULE_2__["ItemTypes"].CARD,
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
    role: "Card",
    style: _objectSpread(_objectSpread({}, style), {}, {
      opacity
    }),
    "data-testid": `card-${cardName}`,
    onClick: () => {
      console.log(id);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, __jsx("link", {
    href: "https://fonts.googleapis.com/css2?family=Didact+Gothic&display=swap",
    rel: "stylesheet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), __jsx("div", {
    id: "cardContainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("img", {
    id: "cardTemplate",
    src: "https://i.ibb.co/mG6jvpR/monster-normal.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }), __jsx("img", {
    id: "cardFace",
    src: cardImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }), __jsx("img", {
    id: "starLevel",
    src: "https://i.ibb.co/M1bYC6V/star.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }), __jsx("div", {
    id: "cardTitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 21
    }
  }, cardName), __jsx("img", {
    id: "cardType",
    src: typeImage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }), __jsx("h4", {
    id: "monsterType",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "[", cardMonster, "]"), __jsx("div", {
    id: "monsterDescription",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }, cardDesc), __jsx("div", {
    id: "monsterAtk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, cardAtk), __jsx("div", {
    id: "monsterDef",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, cardDef))));
};

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
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Field.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const style = {
  height: '250px',
  width: '100%',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  zIndex: 5
};
const Field = () => {
  const [{
    canDrop,
    isOver
  }, drop] = Object(react_dnd__WEBPACK_IMPORTED_MODULE_1__["useDrop"])(() => ({
    accept: _ItemTypes__WEBPACK_IMPORTED_MODULE_2__["ItemTypes"].CARD,
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
      lineNumber: 35,
      columnNumber: 9
    }
  }, isActive ? 'Release to drop' : 'Drag a box here');
};
/* harmony default export */ __webpack_exports__["default"] = (Field);

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
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/game/Card.jsx");
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\game\\Hand.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Hand = props => {
  return __jsx("div", {
    className: "cards",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, props.cards.map((card, index) => __jsx("div", {
    key: card.cardName + index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "generated-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    id: card.id,
    cardName: card.cardName,
    cardImage: card.cardImage,
    cardRarity: card.cardRarity,
    cardType: card.cardType,
    typeImage: card.typeImage,
    cardDesc: card.cardDesc,
    cardMonster: card.cardMonster,
    cardAtk: card.cardATK,
    cardDef: card.cardDEF,
    playCard: props.playCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  })))));
};
/* harmony default export */ __webpack_exports__["default"] = (Hand);

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
  CARD: 'card'
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
/* harmony import */ var _cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cardCreate/CardCreate */ "./components/cardCreate/CardCreate.jsx");
/* harmony import */ var _game_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game/Board */ "./components/game/Board.jsx");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dnd */ "react-dnd");
/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dnd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dnd-html5-backend */ "react-dnd-html5-backend");
/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\home\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 //import PlayerHand from '../playerHand/PlayerHand'




function Home(props) {
  const {
    user,
    origin
  } = props.data;
  return __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Hello world!"), __jsx(_cardCreate_CardCreate__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), __jsx(react_dnd__WEBPACK_IMPORTED_MODULE_3__["DndProvider"], {
    backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__["HTML5Backend"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx(_game_Board__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
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
  return {
    props: {
      origin
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

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/TextareaAutosize":
/*!*****************************************************!*\
  !*** external "@material-ui/core/TextareaAutosize" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextareaAutosize");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkQ3JlYXRlL0NhcmRDcmVhdGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9Cb2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0NhcmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9GaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0hhbmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9JdGVtVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL0hvbWUuanN4Iiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRuZC1odG1sNS1iYWNrZW5kXCIiXSwibmFtZXMiOlsiQmFzaWNTZWxlY3QiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwicmFyaXRpZXMiLCJzZXRSYXJpdGllcyIsInR5cGVzIiwic2V0VHlwZXMiLCJyYXJpdHkiLCJzZXRSYXJpdHkiLCJpbWFnZSIsInNldEltYWdlIiwiZGVzYyIsInNldERlc2MiLCJ0eXBlIiwic2V0VHlwZSIsImF0ayIsInNldEF0ayIsImRlZiIsInNldERlZiIsImdldFJhcml0aWVzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImdldFR5cGVzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlTmFtZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VSYXJpdHkiLCJoYW5kbGVDaGFuZ2VJbWFnZSIsImhhbmRsZUNoYW5nZURlc2MiLCJsZW5ndGgiLCJtaW5XaWR0aCIsIm1hcmdpbiIsIm1hcCIsIngiLCJyYXJpdHlOYW1lIiwic2hyaW5rIiwiZGlzcGxheSIsIndpZHRoIiwiUGxheWVySGFuZCIsIm1lbW8iLCJDb250YWluZXIiLCJjYXJkcyIsInNldENhcmRzIiwiZ2V0Q2FyZHMiLCJzb3J0Q2FyZElkcyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJwcmV2IiwiZmlsdGVyIiwiY2FyZCIsImlkIiwibXlBcnJheSIsImZvckVhY2giLCJlbGVtZW50IiwiaW5kZXgiLCJvdmVyZmxvdyIsImNsZWFyIiwic3R5bGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ6SW5kZXgiLCJDYXJkIiwiY2FyZE5hbWUiLCJjYXJkSW1hZ2UiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJjYXJkTW9uc3RlciIsImNhcmREZXNjIiwidHlwZUltYWdlIiwiY2FyZEF0ayIsImNhcmREZWYiLCJwbGF5Q2FyZCIsImlzRHJhZ2dpbmciLCJkcmFnIiwidXNlRHJhZyIsIkl0ZW1UeXBlcyIsIkNBUkQiLCJpdGVtIiwiZW5kIiwibW9uaXRvciIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNvbGxlY3QiLCJoYW5kbGVySWQiLCJnZXRIYW5kbGVySWQiLCJvcGFjaXR5IiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmbG9hdCIsIkZpZWxkIiwiY2FuRHJvcCIsImlzT3ZlciIsImRyb3AiLCJ1c2VEcm9wIiwiYWNjZXB0IiwiaXNBY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJIYW5kIiwicHJvcHMiLCJjYXJkQVRLIiwiY2FyZERFRiIsIkhvbWUiLCJ1c2VyIiwib3JpZ2luIiwiSFRNTDVCYWNrZW5kIiwiU0VDUkVUX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfS0VZIiwidmVyaWZ5VG9rZW4iLCJqd3RUb2tlbiIsImp3dCIsInZlcmlmeSIsImUiLCJnZXRBcHBDb29raWVzIiwicmVxIiwicGFyc2VkSXRlbXMiLCJoZWFkZXJzIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwic3BsaXQiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJob3N0Iiwid2luZG93IiwibG9jYXRpb24iLCJpbmRleE9mIiwidXJsIiwiQXBwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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U0FBU2lCLEdBQVQsQ0FBYWxDLEtBQWIsRUFBb0I7QUFFakMsU0FDRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxFQUFFQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUdEO0FBQ0Q7O0FBQ08sZUFBZW1DLGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNO0FBQUVuQjtBQUFGLE1BQVVtQixPQUFoQjtBQUNBLFFBQU07QUFBRS9CO0FBQUYsTUFBYXFCLHFFQUFXLENBQUNULEdBQUQsQ0FBOUI7QUFDQSxTQUFPO0FBQ0xqQixTQUFLLEVBQUU7QUFDTEs7QUFESztBQURGLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRCxrRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1NlbGVjdCgpIHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmFyaXRpZXMsIHNldFJhcml0aWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdHlwZXMsIHNldFR5cGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcmFyaXR5LCBzZXRSYXJpdHldID0gdXNlU3RhdGUoXCJDb21tb25cIik7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXRrLCBzZXRBdGtdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2RlZiwgc2V0RGVmXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICBjb25zdCBnZXRSYXJpdGllcyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChgL2FwaS9jYXJkUmFyaXR5YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFJhcml0aWVzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VHlwZXMgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvY2FyZFR5cGVgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0VHlwZXMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0UmFyaXRpZXMoKTtcclxuICAgIGdldFR5cGVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIlJhcml0eTogXCIgKyByYXJpdHkpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIk5hbWU6IFwiICsgbmFtZSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiSW1hZ2U6IFwiICsgaW1hZ2UpO1xyXG4gIH0sIFtyYXJpdHksIG5hbWUsIGltYWdlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUubG9nKHJhcml0aWVzKTtcclxuICAgIC8vY29uc29sZS5sb2codHlwZXMpO1xyXG4gIH0sIFtyYXJpdGllcywgdHlwZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTmFtZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJhcml0eSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UmFyaXR5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW1hZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEltYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRGVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RGVzYyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICByYXJpdGllcy5sZW5ndGggPiAwICYmIChcclxuICAgICAgPGZvcm0+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiAxMDUsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsPkNhcmQgUmFyaXR5OjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e3Jhcml0eX0gbGFiZWw9XCJTZXJ2aWNlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVJhcml0eX0+XHJcbiAgICAgICAgICAgIHtyYXJpdGllcy5tYXAoKHgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXt4LnJhcml0eU5hbWV9IHZhbHVlPXt4LnJhcml0eU5hbWV9PlxyXG4gICAgICAgICAgICAgICAge3gucmFyaXR5TmFtZX1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiAxMDUsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgaWQ9XCJjYXJkTmFtZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjYXJkTmFtZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiQ2FyZCBOYW1lOlwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZU5hbWV9XHJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IDIwNSwgbWFyZ2luOiAwLCBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAzMDAgfX1cclxuICAgICAgICAgICAgaWQ9XCJjYXJkSW1hZ2VcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2FyZEltYWdlXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJJbWFnZSBMaW5rOlwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17aW1hZ2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VJbWFnZX1cclxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJtaW5pbXVtIGhlaWdodFwiXHJcbiAgICAgICAgICAgIG1pblJvd3M9ezN9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2FyZCBEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VEZXNjfVxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMzAwIH19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIClcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGaWVsZCBmcm9tICcuL0ZpZWxkJztcclxuaW1wb3J0IEhhbmQgZnJvbSAnLi9IYW5kJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBQbGF5ZXJIYW5kID0gbWVtbyhmdW5jdGlvbiBDb250YWluZXIoKSB7XHJcblxyXG4gICAgY29uc3QgW2NhcmRzLCBzZXRDYXJkc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9pZiBjYXJkcyBoYXZlIG5vdCBsb2FkZWQgeWV0IHRoZW4gbG9hZCB0aGVtIGZyb20gc2VydmVyLlxyXG4gICAgICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENhcmRzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2FyZHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvcnRDYXJkSWRzKCk7XHJcbiAgICB9LCBbY2FyZHNdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKHgpID0+IHtcclxuICAgICAgICBzZXRDYXJkcyhwcmV2ID0+IHByZXYuZmlsdGVyKGNhcmQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FyZC5pZCAhPSB4IC0gMVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvcnRDYXJkSWRzID0gKCkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gY2FyZHNcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxIYW5kIGNhcmRzPXtjYXJkc30gcGxheUNhcmQ9e2hhbmRsZUNhcmRQbGF5ZWR9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckhhbmQiLCJpbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcblxyXG4gICAgYm9yZGVyOiAnMXB4IGRhc2hlZCBncmF5JyxcclxuICAgIGN1cnNvcjogJ21vdmUnLFxyXG4gICAgekluZGV4OiAxMFxyXG59O1xyXG5leHBvcnQgY29uc3QgQ2FyZCA9IGZ1bmN0aW9uIENhcmQoe1xyXG4gICAgaWQsXHJcbiAgICBjYXJkTmFtZSxcclxuICAgIGNhcmRJbWFnZSxcclxuICAgIGNhcmRSYXJpdHksXHJcbiAgICBjYXJkVHlwZSxcclxuICAgIGNhcmRNb25zdGVyLFxyXG4gICAgY2FyZERlc2MsXHJcbiAgICB0eXBlSW1hZ2UsXHJcbiAgICBjYXJkQXRrLFxyXG4gICAgY2FyZERlZixcclxuICAgIHBsYXlDYXJkXHJcbn0pIHtcclxuICAgIGNvbnN0IFt7IGlzRHJhZ2dpbmcgfSwgZHJhZ10gPSB1c2VEcmFnKCgpID0+ICh7XHJcbiAgICAgICAgdHlwZTogSXRlbVR5cGVzLkNBUkQsXHJcbiAgICAgICAgaXRlbTogeyBpZCwgY2FyZE5hbWUgfSxcclxuICAgICAgICBlbmQ6IChpdGVtLCBtb25pdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgZHJvcFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcGxheUNhcmQoaXRlbS5pZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgZHJvcHBlZCAke2l0ZW0uY2FyZE5hbWV9IGludG8gJHtkcm9wUmVzdWx0Lm5hbWV9IWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICAgICAgICAgIGhhbmRsZXJJZDogbW9uaXRvci5nZXRIYW5kbGVySWQoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBpc0RyYWdnaW5nID8gMC40IDogMTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2RyYWd9IHJvbGU9XCJDYXJkXCIgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX0gZGF0YS10ZXN0aWQ9e2BjYXJkLSR7Y2FyZE5hbWV9YH0gb25DbGljaz17KCk9PiB7Y29uc29sZS5sb2coaWQpfX0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PURpZGFjdCtHb3RoaWMmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJkVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL21HNmp2cFIvbW9uc3Rlci1ub3JtYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJkRmFjZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y2FyZEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFyTGV2ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL00xYllDNlYvc3Rhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNhcmRUaXRsZVwiPntjYXJkTmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiY2FyZFR5cGVcIiBzcmM9e3R5cGVJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDQgaWQ9XCJtb25zdGVyVHlwZVwiPlt7Y2FyZE1vbnN0ZXJ9XTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJEZXNjcmlwdGlvblwiPntjYXJkRGVzY308L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckF0a1wiPntjYXJkQXRrfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyRGVmXCI+e2NhcmREZWZ9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlRHJvcCB9IGZyb20gJ3JlYWN0LWRuZCc7XHJcbmltcG9ydCB7IEl0ZW1UeXBlcyB9IGZyb20gJy4vSXRlbVR5cGVzJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpblJpZ2h0OiAnMS41cmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEuNXJlbScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzFyZW0nLFxyXG4gICAgbGluZUhlaWdodDogJ25vcm1hbCcsXHJcbiAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgekluZGV4OiA1XHJcbn07XHJcbmV4cG9ydCBjb25zdCBGaWVsZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt7IGNhbkRyb3AsIGlzT3ZlciB9LCBkcm9wXSA9IHVzZURyb3AoKCkgPT4gKHtcclxuICAgICAgICBhY2NlcHQ6IEl0ZW1UeXBlcy5DQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6ICdGaWVsZCcgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBpc0FjdGl2ZSA9IGNhbkRyb3AgJiYgaXNPdmVyO1xyXG4gICAgbGV0IGJhY2tncm91bmRDb2xvciA9ICcjMjIyJztcclxuICAgIGlmIChpc0FjdGl2ZSkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJrZ3JlZW4nO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17ZHJvcH0gcm9sZT17J0ZpZWxkJ30gc3R5bGU9e3sgLi4uc3R5bGUsIGJhY2tncm91bmRDb2xvciB9fT5cclxuICAgICAgICAgICAge2lzQWN0aXZlID8gJ1JlbGVhc2UgdG8gZHJvcCcgOiAnRHJhZyBhIGJveCBoZXJlJ31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkIiwiaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4vQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGFuZCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRzXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Y2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17Y2FyZC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmQuY2FyZFJhcml0eX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkLmNhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZXNjPXtjYXJkLmNhcmREZXNjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE1vbnN0ZXI9e2NhcmQuY2FyZE1vbnN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkLmNhcmRERUZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2FyZD17cHJvcHMucGxheUNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbmQiLCJleHBvcnQgY29uc3QgSXRlbVR5cGVzID0ge1xyXG4gICAgQ0FSRDogJ2NhcmQnLFxyXG4gIH1cclxuICAiLCJpbXBvcnQgQ2FyZENyZWF0ZSBmcm9tICcuLi9jYXJkQ3JlYXRlL0NhcmRDcmVhdGUnXHJcbi8vaW1wb3J0IFBsYXllckhhbmQgZnJvbSAnLi4vcGxheWVySGFuZC9QbGF5ZXJIYW5kJ1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vZ2FtZS9Cb2FyZCdcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnXHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgdXNlciwgb3JpZ2luIH0gPSBwcm9wcy5kYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5IZWxsbyB3b3JsZCE8L2gxPlxyXG4gICAgICAgIDxDYXJkQ3JlYXRlIC8+XHJcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XHJcbiAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICAgICBcclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XCJVc2VyIElEOiBcIn1cclxuICAgICAgICAgICAge3VzZXIuaWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XG5cbi8qXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xuICB0cnkge1xuICAgIHJldHVybiBqd3QudmVyaWZ5KGp3dFRva2VuLCBTRUNSRVRfS0VZKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBwYXJzZSBqd3QgY29va2llIGRlY29kZSBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XG4gIGNvbnN0IHBhcnNlZEl0ZW1zID0ge307XG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XG4gICAgY29va2llc0l0ZW1zLmZvckVhY2goY29va2llcyA9PiB7XG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xufVxuXG4vKlxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZSwge3NldExvY2FsaG9zdH0geW91ciBsb2NhbGhvc3QgYWRkcmVzc1xuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFic29sdXRlVXJsKHJlcSwgc2V0TG9jYWxob3N0KSB7XG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xuICB2YXIgaG9zdCA9IHJlcVxuICAgID8gcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWhvc3QnXSB8fCByZXEuaGVhZGVyc1snaG9zdCddXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xuICAgIGlmIChzZXRMb2NhbGhvc3QpIGhvc3QgPSBzZXRMb2NhbGhvc3Q7XG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxuICAgIGhvc3Q6IGhvc3QsXG4gICAgb3JpZ2luOiBwcm90b2NvbCArICcvLycgKyBob3N0LFxuICAgIHVybDogcmVxLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgYWJzb2x1dGVVcmwgfSBmcm9tICcuLi9taWRkbGV3YXJlL3V0aWxzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SG9tZSBkYXRhPXtwcm9wc30gLz5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==