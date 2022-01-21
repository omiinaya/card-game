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
    0: onHand,
    1: setOnHand
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: onField,
    1: setOnField
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const getCards = () => {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/card`).then(res => {
        setOnHand(res.data.data);
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getCards();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sortOnHand();
    console.log(onHand);
  }, [onHand]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    sortOnField();
    console.log(onField);
  }, [onField]);

  const handleCardPlayed = index => {
    setOnHand(prev => prev.filter(card => card.id != index - 1));
    setOnField(prevArray => [...prevArray, onHand.filter(card => card.id == index - 1)[0]]);
  };

  const sortOnHand = () => {
    var myArray = onHand;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
  };

  const sortOnField = () => {
    var myArray = onField;
    myArray.forEach(function (element, index) {
      element.id = index;
    });
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
  color: 'white',
  zIndex: 5,
  position: 'absolute',
  bottom: '150px'
};
const Field = props => {
  console.log(props.cards);
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
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, props.cards.map(card => __jsx("div", {
    style: {
      margin: '20px'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, card.cardName))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkQ3JlYXRlL0NhcmRDcmVhdGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9Cb2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0NhcmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9GaWVsZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0hhbmQuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9JdGVtVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lL0hvbWUuanN4Iiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRuZC1odG1sNS1iYWNrZW5kXCIiXSwibmFtZXMiOlsiQmFzaWNTZWxlY3QiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwicmFyaXRpZXMiLCJzZXRSYXJpdGllcyIsInR5cGVzIiwic2V0VHlwZXMiLCJyYXJpdHkiLCJzZXRSYXJpdHkiLCJpbWFnZSIsInNldEltYWdlIiwiZGVzYyIsInNldERlc2MiLCJ0eXBlIiwic2V0VHlwZSIsImF0ayIsInNldEF0ayIsImRlZiIsInNldERlZiIsImdldFJhcml0aWVzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImdldFR5cGVzIiwidXNlRWZmZWN0IiwiaGFuZGxlQ2hhbmdlTmFtZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VSYXJpdHkiLCJoYW5kbGVDaGFuZ2VJbWFnZSIsImhhbmRsZUNoYW5nZURlc2MiLCJsZW5ndGgiLCJtaW5XaWR0aCIsIm1hcmdpbiIsIm1hcCIsIngiLCJyYXJpdHlOYW1lIiwic2hyaW5rIiwiZGlzcGxheSIsIndpZHRoIiwiUGxheWVySGFuZCIsIm1lbW8iLCJDb250YWluZXIiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwic29ydE9uSGFuZCIsImNvbnNvbGUiLCJsb2ciLCJzb3J0T25GaWVsZCIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwiaWQiLCJwcmV2QXJyYXkiLCJteUFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJvdmVyZmxvdyIsImNsZWFyIiwic3R5bGUiLCJib3JkZXIiLCJjdXJzb3IiLCJ6SW5kZXgiLCJDYXJkIiwiY2FyZE5hbWUiLCJjYXJkSW1hZ2UiLCJjYXJkUmFyaXR5IiwiY2FyZFR5cGUiLCJjYXJkTW9uc3RlciIsImNhcmREZXNjIiwidHlwZUltYWdlIiwiY2FyZEF0ayIsImNhcmREZWYiLCJwbGF5Q2FyZCIsImlzRHJhZ2dpbmciLCJkcmFnIiwidXNlRHJhZyIsIkl0ZW1UeXBlcyIsIkNBUkQiLCJpdGVtIiwiZW5kIiwibW9uaXRvciIsImRyb3BSZXN1bHQiLCJnZXREcm9wUmVzdWx0IiwiY29sbGVjdCIsImhhbmRsZXJJZCIsImdldEhhbmRsZXJJZCIsIm9wYWNpdHkiLCJoZWlnaHQiLCJjb2xvciIsInBvc2l0aW9uIiwiYm90dG9tIiwiRmllbGQiLCJwcm9wcyIsImNhcmRzIiwiY2FuRHJvcCIsImlzT3ZlciIsImRyb3AiLCJ1c2VEcm9wIiwiYWNjZXB0IiwiaXNBY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJ0ZXh0QWxpZ24iLCJqdXN0aWZ5Q29udGVudCIsIkhhbmQiLCJjYXJkQVRLIiwiY2FyZERFRiIsIkhvbWUiLCJ1c2VyIiwib3JpZ2luIiwiSFRNTDVCYWNrZW5kIiwiU0VDUkVUX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJKV1RfS0VZIiwidmVyaWZ5VG9rZW4iLCJqd3RUb2tlbiIsImp3dCIsInZlcmlmeSIsImUiLCJnZXRBcHBDb29raWVzIiwicmVxIiwicGFyc2VkSXRlbXMiLCJoZWFkZXJzIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwic3BsaXQiLCJjb29raWVzIiwicGFyc2VkSXRlbSIsImRlY29kZVVSSSIsImFic29sdXRlVXJsIiwic2V0TG9jYWxob3N0IiwicHJvdG9jb2wiLCJob3N0Iiwid2luZG93IiwibG9jYXRpb24iLCJpbmRleE9mIiwidXJsIiwiQXBwIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FB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YS9DLEtBQWIsRUFBb0I7QUFFakMsU0FDRSxNQUFDLDZEQUFEO0FBQU0sUUFBSSxFQUFFQSxLQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQUdEO0FBQ0Q7O0FBQ08sZUFBZWdELGtCQUFmLENBQWtDQyxPQUFsQyxFQUEyQztBQUNoRCxRQUFNO0FBQUVuQjtBQUFGLE1BQVVtQixPQUFoQjtBQUNBLFFBQU07QUFBRS9CO0FBQUYsTUFBYXFCLHFFQUFXLENBQUNULEdBQUQsQ0FBOUI7QUFDQSxTQUFPO0FBQ0w5QixTQUFLLEVBQUU7QUFDTGtCO0FBREs7QUFERixHQUFQO0FBS0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkQsa0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIjtcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1NlbGVjdFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFzaWNTZWxlY3QoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jhcml0aWVzLCBzZXRSYXJpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3Jhcml0eSwgc2V0UmFyaXR5XSA9IHVzZVN0YXRlKFwiQ29tbW9uXCIpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2F0aywgc2V0QXRrXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkZWYsIHNldERlZl0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgY29uc3QgZ2V0UmFyaXRpZXMgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvY2FyZFJhcml0eWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRSYXJpdGllcyhyZXMuZGF0YS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFR5cGVzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRUeXBlYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFR5cGVzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFJhcml0aWVzKCk7XHJcbiAgICBnZXRUeXBlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vY29uc29sZS5sb2coXCJSYXJpdHk6IFwiICsgcmFyaXR5KTtcclxuICAgIC8vY29uc29sZS5sb2coXCJOYW1lOiBcIiArIG5hbWUpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIkltYWdlOiBcIiArIGltYWdlKTtcclxuICB9LCBbcmFyaXR5LCBuYW1lLCBpbWFnZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy9jb25zb2xlLmxvZyhyYXJpdGllcyk7XHJcbiAgICAvL2NvbnNvbGUubG9nKHR5cGVzKTtcclxuICB9LCBbcmFyaXRpZXMsIHR5cGVzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZU5hbWUgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VSYXJpdHkgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldFJhcml0eShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZUltYWdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRJbWFnZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlc2MgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldERlc2MoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgcmFyaXRpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMTA1LCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbD5DYXJkIFJhcml0eTo8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtyYXJpdHl9IGxhYmVsPVwiU2VydmljZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSYXJpdHl9PlxyXG4gICAgICAgICAgICB7cmFyaXRpZXMubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17eC5yYXJpdHlOYW1lfSB2YWx1ZT17eC5yYXJpdHlOYW1lfT5cclxuICAgICAgICAgICAgICAgIHt4LnJhcml0eU5hbWV9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMTA1LCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwiY2FyZE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2FyZE5hbWVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkNhcmQgTmFtZTpcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiAyMDUsIG1hcmdpbjogMCwgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMzAwIH19XHJcbiAgICAgICAgICAgIGlkPVwiY2FyZEltYWdlXCJcclxuICAgICAgICAgICAgbmFtZT1cImNhcmRJbWFnZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgTGluazpcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ltYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW1hZ2V9XHJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWluaW11bSBoZWlnaHRcIlxyXG4gICAgICAgICAgICBtaW5Sb3dzPXszfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhcmQgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVzY31cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCc7XHJcbmltcG9ydCBIYW5kIGZyb20gJy4vSGFuZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtvbkhhbmQsIHNldE9uSGFuZF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvbkZpZWxkLCBzZXRPbkZpZWxkXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vaWYgb25IYW5kIGhhdmUgbm90IGxvYWRlZCB5ZXQgdGhlbiBsb2FkIHRoZW0gZnJvbSBzZXJ2ZXIuXHJcbiAgICAgICAgaWYgKG9uSGFuZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE9uSGFuZChyZXMuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENhcmRzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3J0T25IYW5kKClcclxuICAgICAgICBjb25zb2xlLmxvZyhvbkhhbmQpXHJcbiAgICB9LCBbb25IYW5kXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3J0T25GaWVsZCgpXHJcbiAgICAgICAgY29uc29sZS5sb2cob25GaWVsZClcclxuICAgIH0sIFtvbkZpZWxkXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZFBsYXllZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldE9uSGFuZChwcmV2ID0+IHByZXYuZmlsdGVyKGNhcmQgPT4gY2FyZC5pZCAhPSBpbmRleCAtIDEpKVxyXG4gICAgICAgIHNldE9uRmllbGQocHJldkFycmF5ID0+IFsuLi5wcmV2QXJyYXksIG9uSGFuZC5maWx0ZXIoY2FyZCA9PiBjYXJkLmlkID09IGluZGV4IC0gMSlbMF1dKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNvcnRPbkhhbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgdmFyIG15QXJyYXkgPSBvbkhhbmRcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzb3J0T25GaWVsZCA9ICgpID0+IHtcclxuICAgICAgICB2YXIgbXlBcnJheSA9IG9uRmllbGRcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBpbmRleDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGNhcmRzPXtvbkZpZWxkfS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG92ZXJmbG93OiAnaGlkZGVuJywgY2xlYXI6ICdib3RoJyB9fT5cclxuICAgICAgICAgICAgICAgIDxIYW5kIGNhcmRzPXtvbkhhbmR9IHBsYXlDYXJkPXtoYW5kbGVDYXJkUGxheWVkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGxheWVySGFuZCIsImltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuXHJcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknLFxyXG4gICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmV4cG9ydCBjb25zdCBDYXJkID0gZnVuY3Rpb24gQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZE1vbnN0ZXIsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuQ0FSRCxcclxuICAgICAgICBpdGVtOiB7IGlkLCBjYXJkTmFtZSB9LFxyXG4gICAgICAgIGVuZDogKGl0ZW0sIG1vbml0b3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZHJvcFJlc3VsdCA9IG1vbml0b3IuZ2V0RHJvcFJlc3VsdCgpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbSAmJiBkcm9wUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5Q2FyZChpdGVtLmlkKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFlvdSBkcm9wcGVkICR7aXRlbS5jYXJkTmFtZX0gaW50byAke2Ryb3BSZXN1bHQubmFtZX0hYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbGxlY3Q6IChtb25pdG9yKSA9PiAoe1xyXG4gICAgICAgICAgICBpc0RyYWdnaW5nOiBtb25pdG9yLmlzRHJhZ2dpbmcoKSxcclxuICAgICAgICAgICAgaGFuZGxlcklkOiBtb25pdG9yLmdldEhhbmRsZXJJZCgpLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG4gICAgY29uc3Qgb3BhY2l0eSA9IGlzRHJhZ2dpbmcgPyAwLjQgOiAxO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHJlZj17ZHJhZ30gcm9sZT1cIkNhcmRcIiBzdHlsZT17eyAuLi5zdHlsZSwgb3BhY2l0eSB9fSBkYXRhLXRlc3RpZD17YGNhcmQtJHtjYXJkTmFtZX1gfSBvbkNsaWNrPXsoKT0+IHtjb25zb2xlLmxvZyhpZCl9fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjYXJkQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vbUc2anZwUi9tb25zdGVyLW5vcm1hbC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhcmRGYWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjYXJkSW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YXJMZXZlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTTFiWUM2Vi9zdGFyLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2FyZFRpdGxlXCI+e2NhcmROYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJjYXJkVHlwZVwiIHNyYz17dHlwZUltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBpZD1cIm1vbnN0ZXJUeXBlXCI+W3tjYXJkTW9uc3Rlcn1dPC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibW9uc3RlckRlc2NyaXB0aW9uXCI+e2NhcmREZXNjfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtb25zdGVyQXRrXCI+e2NhcmRBdGt9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1vbnN0ZXJEZWZcIj57Y2FyZERlZn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBoZWlnaHQ6ICcyNTBweCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB6SW5kZXg6IDUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogJzE1MHB4JyxcclxufVxyXG5leHBvcnQgY29uc3QgRmllbGQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmNhcmRzKVxyXG4gICAgY29uc3QgW3sgY2FuRHJvcCwgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgICAgIGFjY2VwdDogSXRlbVR5cGVzLkNBUkQsXHJcbiAgICAgICAgZHJvcDogKCkgPT4gKHsgbmFtZTogJ0ZpZWxkJyB9KSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNPdmVyOiBtb25pdG9yLmlzT3ZlcigpLFxyXG4gICAgICAgICAgICBjYW5Ecm9wOiBtb25pdG9yLmNhbkRyb3AoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gY2FuRHJvcCAmJiBpc092ZXI7XHJcbiAgICBsZXQgYmFja2dyb3VuZENvbG9yID0gJyMyMjInO1xyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2Ryb3B9IHJvbGU9eydGaWVsZCd9IHN0eWxlPXt7IC4uLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnMjBweCcgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICApOyBcclxuICAgICAgICAgICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQiLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi9DYXJkJztcclxuXHJcbmV4cG9ydCBjb25zdCBIYW5kID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZHNcIj5cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjYXJkLmNhcmROYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtjYXJkLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmQuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFJhcml0eT17Y2FyZC5jYXJkUmFyaXR5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e2NhcmQudHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlc2M9e2NhcmQuY2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkTW9uc3Rlcj17Y2FyZC5jYXJkTW9uc3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmQuY2FyZEFUS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcmREZWY9e2NhcmQuY2FyZERFRn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtwcm9wcy5wbGF5Q2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFuZCIsImV4cG9ydCBjb25zdCBJdGVtVHlwZXMgPSB7XHJcbiAgICBDQVJEOiAnY2FyZCcsXHJcbiAgfVxyXG4gICIsImltcG9ydCBDYXJkQ3JlYXRlIGZyb20gJy4uL2NhcmRDcmVhdGUvQ2FyZENyZWF0ZSdcclxuLy9pbXBvcnQgUGxheWVySGFuZCBmcm9tICcuLi9wbGF5ZXJIYW5kL1BsYXllckhhbmQnXHJcbmltcG9ydCBCb2FyZCBmcm9tICcuLi9nYW1lL0JvYXJkJ1xyXG5pbXBvcnQgeyBEbmRQcm92aWRlciB9IGZyb20gJ3JlYWN0LWRuZCdcclxuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSAncmVhY3QtZG5kLWh0bWw1LWJhY2tlbmQnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1c2VyLCBvcmlnaW4gfSA9IHByb3BzLmRhdGE7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkhlbGxvIHdvcmxkITwvaDE+XHJcbiAgICAgICAgPENhcmRDcmVhdGUgLz5cclxuICAgICAgICA8RG5kUHJvdmlkZXIgYmFja2VuZD17SFRNTDVCYWNrZW5kfT5cclxuICAgICAgICA8Qm9hcmQgLz5cclxuICAgICAgICA8L0RuZFByb3ZpZGVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtcIlVzZXIgSUQ6IFwifVxyXG4gICAgICAgICAgICB7dXNlci5pZH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUX0tFWTtcblxuLypcbiAqIEBwYXJhbXMge2p3dFRva2VufSBleHRyYWN0ZWQgZnJvbSBjb29raWVzXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKGp3dFRva2VuKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLypcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcbiAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcbiAgICAgIGNvbnN0IHBhcnNlZEl0ZW0gPSBjb29raWVzLnNwbGl0KCc9Jyk7XG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcGFyc2VkSXRlbXM7XG59XG5cbi8qXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdHMgb2YgcHJvdG9jb2wsIGhvc3QgYW5kIG9yaWdpblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcbiAgdmFyIHByb3RvY29sID0gJ2h0dHBzOic7XG4gIHZhciBob3N0ID0gcmVxXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cbiAgICA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcbiAgICBwcm90b2NvbCA9ICdodHRwOic7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm90b2NvbDogcHJvdG9jb2wsXG4gICAgaG9zdDogaG9zdCxcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXG4gICAgdXJsOiByZXEsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBhYnNvbHV0ZVVybCB9IGZyb20gJy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvSG9tZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIb21lIGRhdGE9e3Byb3BzfSAvPlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBvcmlnaW4sXHJcbiAgICB9LFxyXG4gIH07XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRuZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9