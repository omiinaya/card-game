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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
  //selectors
  const {
    0: rarities,
    1: setRarities
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: types,
    1: setTypes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); //card info

  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
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
    0: subType,
    1: setSubType
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: atk,
    1: setAtk
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: def,
    1: setDef
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

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
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    //console.clear();
    console.log("Rarity: " + rarity);
    console.log("Name: " + name);
    console.log("Image: " + image);
  }, [rarity, name, image]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    console.log(rarities);
    console.log(types);
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

  const getData = () => {
    setData({
      cardName: name,
      cardType: type,
      cardRarity: rarity,
      cardSubType: subType,
      cardImage: image,
      cardDesc: desc,
      cardATK: atk,
      cardDEF: def
    });
  };

  return rarities.length > 0 && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
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
      lineNumber: 87,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, "Card Rarity:"), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    value: rarity,
    label: "Service",
    onChange: handleChangeRarity,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 11
    }
  }, rarities.map(x => __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default.a, {
    key: x.rarityName,
    value: x.rarityName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
      lineNumber: 98,
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
      lineNumber: 99,
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
      lineNumber: 109,
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
      lineNumber: 110,
      columnNumber: 11
    }
  })), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
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
      lineNumber: 122,
      columnNumber: 11
    }
  })), __jsx("button", {
    onClick: getData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, "test1"), __jsx("button", {
    onClick: () => {
      console.log(data);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 9
    }
  }, "test2"));
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

  const getCards = () => {
    //if onHand have not loaded yet then load them from server.
    if (onHand.length === 0) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`/api/card`).then(res => {
        let hand = res.data.data.sort(() => Math.random() - Math.random()).slice(0, 10);
        sortIDs(hand);
        setOnHand(hand);
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

  const handleCardPlayed = index => {
    setOnHand(prev => prev.filter(card => {
      console.log(card.id, index);
      return Number(card.id) != Number(index - 1);
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
  width: '100%',
  zIndex: 5,
  position: 'absolute',
  bottom: '260px'
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
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    style: {
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, props.cards.map((card, index) => __jsx("div", {
    key: 'field' + card.cardName + index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "generated-field-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 48,
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
  cardDef,
  playCard
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
      margin: '0 auto',
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      height: '255px',
      margin: '0 !important',
      bottom: 0
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
      lineNumber: 16,
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
      lineNumber: 17,
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
      columnNumber: 11
    }
  })), user && __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
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

/***/ 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkQ2FyZC9DYXJkQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkQ3JlYXRlL0NhcmRDcmVhdGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9Cb2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0ZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvSGFuZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0hhbmRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvSXRlbVR5cGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiIl0sIm5hbWVzIjpbIkNhcmRDYXJkIiwicHJvcHMiLCJjYXJkSW1hZ2UiLCJjYXJkTmFtZSIsInR5cGVJbWFnZSIsImNhcmRTdWJUeXBlIiwiY2FyZERlc2MiLCJjYXJkQXRrIiwiY2FyZERlZiIsIkJhc2ljU2VsZWN0IiwicmFyaXRpZXMiLCJzZXRSYXJpdGllcyIsInVzZVN0YXRlIiwidHlwZXMiLCJzZXRUeXBlcyIsIm5hbWUiLCJzZXROYW1lIiwicmFyaXR5Iiwic2V0UmFyaXR5IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImRlc2MiLCJzZXREZXNjIiwidHlwZSIsInNldFR5cGUiLCJzdWJUeXBlIiwic2V0U3ViVHlwZSIsImF0ayIsInNldEF0ayIsImRlZiIsInNldERlZiIsImRhdGEiLCJzZXREYXRhIiwiZ2V0UmFyaXRpZXMiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXMiLCJnZXRUeXBlcyIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2VOYW1lIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoYW5nZVJhcml0eSIsImhhbmRsZUNoYW5nZUltYWdlIiwiaGFuZGxlQ2hhbmdlRGVzYyIsImdldERhdGEiLCJjYXJkVHlwZSIsImNhcmRSYXJpdHkiLCJjYXJkQVRLIiwiY2FyZERFRiIsImxlbmd0aCIsIm1pbldpZHRoIiwibWFyZ2luIiwibWFwIiwieCIsInJhcml0eU5hbWUiLCJzaHJpbmsiLCJkaXNwbGF5Iiwid2lkdGgiLCJQbGF5ZXJIYW5kIiwibWVtbyIsIkNvbnRhaW5lciIsImluaXQiLCJzZXRJbml0Iiwib25IYW5kIiwic2V0T25IYW5kIiwib25GaWVsZCIsInNldE9uRmllbGQiLCJnZXRDYXJkcyIsImhhbmQiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwic29ydElEcyIsImhhbmRsZUNhcmRQbGF5ZWQiLCJpbmRleCIsInByZXYiLCJmaWx0ZXIiLCJjYXJkIiwiaWQiLCJOdW1iZXIiLCJwcmV2QXJyYXkiLCJhcnJheSIsIm15QXJyYXkiLCJmb3JFYWNoIiwiZWxlbWVudCIsIm92ZXJmbG93IiwiY2xlYXIiLCJzdHlsZSIsImhlaWdodCIsInpJbmRleCIsInBvc2l0aW9uIiwiYm90dG9tIiwiRmllbGQiLCJjYW5Ecm9wIiwiaXNPdmVyIiwiZHJvcCIsInVzZURyb3AiLCJhY2NlcHQiLCJJdGVtVHlwZXMiLCJIQU5EQ0FSRCIsImNvbGxlY3QiLCJtb25pdG9yIiwiaXNBY3RpdmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0b3AiLCJ0cmFuc2Zvcm0iLCJqdXN0aWZ5Q29udGVudCIsImNhcmRzIiwicGxheUNhcmQiLCJib3JkZXIiLCJjdXJzb3IiLCJGaWVsZENhcmQiLCJpc0RyYWdnaW5nIiwiZHJhZyIsInVzZURyYWciLCJGSUVMRENBUkQiLCJpdGVtIiwiZW5kIiwiZHJvcFJlc3VsdCIsImdldERyb3BSZXN1bHQiLCJoYW5kbGVySWQiLCJnZXRIYW5kbGVySWQiLCJvcGFjaXR5IiwiSGFuZCIsIkhhbmRDYXJkIiwiSG9tZSIsInVzZXIiLCJvcmlnaW4iLCJIVE1MNUJhY2tlbmQiLCJTRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiIsIkpXVF9LRVkiLCJ2ZXJpZnlUb2tlbiIsImp3dFRva2VuIiwiand0IiwidmVyaWZ5IiwiZSIsImdldEFwcENvb2tpZXMiLCJyZXEiLCJwYXJzZWRJdGVtcyIsImhlYWRlcnMiLCJjb29raWUiLCJjb29raWVzSXRlbXMiLCJzcGxpdCIsImNvb2tpZXMiLCJwYXJzZWRJdGVtIiwiZGVjb2RlVVJJIiwiYWJzb2x1dGVVcmwiLCJzZXRMb2NhbGhvc3QiLCJwcm90b2NvbCIsImhvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImluZGV4T2YiLCJ1cmwiLCJBcHAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN0QztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLHFFQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxNQUFFLEVBQUMsZUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUMsY0FETDtBQUVFLE9BQUcsRUFBQyw2Q0FGTjtBQUFB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QUosRUFBa0JFLElBQUksR0FBR0YsWUFBUDtBQUNsQkMsWUFBUSxHQUFHLE9BQVg7QUFDRDs7QUFDRCxTQUFPO0FBQ0xBLFlBQVEsRUFBRUEsUUFETDtBQUVMQyxRQUFJLEVBQUVBLElBRkQ7QUFHTHhCLFVBQU0sRUFBRXVCLFFBQVEsR0FBRyxJQUFYLEdBQWtCQyxJQUhyQjtBQUlMSSxPQUFHLEVBQUVoQjtBQUpBLEdBQVA7QUFNRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEREO0FBQ0E7QUFFZSxTQUFTaUIsR0FBVCxDQUFhakssS0FBYixFQUFvQjtBQUVqQyxTQUNFLE1BQUMsNkRBQUQ7QUFBTSxRQUFJLEVBQUVBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBR0Q7QUFDRDs7QUFDTyxlQUFla0ssa0JBQWYsQ0FBa0NDLE9BQWxDLEVBQTJDO0FBQ2hELFFBQU07QUFBRW5CO0FBQUYsTUFBVW1CLE9BQWhCO0FBQ0EsUUFBTTtBQUFFL0I7QUFBRixNQUFhcUIscUVBQVcsQ0FBQ1QsR0FBRCxDQUE5QjtBQUNBLFNBQU87QUFDTGhKLFNBQUssRUFBRTtBQUNMb0k7QUFESztBQURGLEdBQVA7QUFLRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRCxrRDs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3RDs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJkQ2FyZChwcm9wcykge1xyXG4gIC8vY29uc29sZS5sb2cocHJvcHMpXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxsaW5rXHJcbiAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RGlkYWN0K0dvdGhpYyZkaXNwbGF5PXN3YXBcIlxyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGlkPVwiY2FyZENvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGlkPVwiY2FyZFRlbXBsYXRlXCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vbUc2anZwUi9tb25zdGVyLW5vcm1hbC5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgaWQ9XCJjYXJkRmFjZVwiXHJcbiAgICAgICAgICBzcmM9e3Byb3BzLmNhcmRJbWFnZX0gLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBpZD1cInN0YXJMZXZlbFwiXHJcbiAgICAgICAgICBzcmM9XCJodHRwczovL2kuaWJiLmNvL00xYllDNlYvc3Rhci5wbmdcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBpZD1cImNhcmRUaXRsZVwiPntwcm9wcy5jYXJkTmFtZX08L2Rpdj5cclxuICAgICAgICA8aW1nIGlkPVwiY2FyZFR5cGVcIiBzcmM9e3Byb3BzLnR5cGVJbWFnZX0gLz5cclxuICAgICAgICA8aDQgIGlkPVwiY2FyZFN1YlR5cGVcIj5be3Byb3BzLmNhcmRTdWJUeXBlfV08L2g0PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkRGVzY1wiPntwcm9wcy5jYXJkRGVzY308L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiY2FyZEF0a1wiPntwcm9wcy5jYXJkQXRrfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkRGVmXCI+e3Byb3BzLmNhcmREZWZ9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNpY1NlbGVjdCgpIHtcclxuICAvL3NlbGVjdG9yc1xyXG4gIGNvbnN0IFtyYXJpdGllcywgc2V0UmFyaXRpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0eXBlcywgc2V0VHlwZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vY2FyZCBpbmZvXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Jhcml0eSwgc2V0UmFyaXR5XSA9IHVzZVN0YXRlKFwiQ29tbW9uXCIpO1xyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2MsIHNldERlc2NdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3N1YlR5cGUsIHNldFN1YlR5cGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2F0aywgc2V0QXRrXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkZWYsIHNldERlZl0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGdldFJhcml0aWVzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRSYXJpdHlgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgc2V0UmFyaXRpZXMocmVzLmRhdGEuZGF0YSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUeXBlcyA9ICgpID0+IHtcclxuICAgIGF4aW9zLmdldChgL2FwaS9jYXJkVHlwZWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRUeXBlcyhyZXMuZGF0YS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRSYXJpdGllcygpO1xyXG4gICAgZ2V0VHlwZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2NvbnNvbGUuY2xlYXIoKTtcclxuICAgIGNvbnNvbGUubG9nKFwiUmFyaXR5OiBcIiArIHJhcml0eSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIk5hbWU6IFwiICsgbmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkltYWdlOiBcIiArIGltYWdlKTtcclxuICB9LCBbcmFyaXR5LCBuYW1lLCBpbWFnZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmFyaXRpZXMpO1xyXG4gICAgY29uc29sZS5sb2codHlwZXMpO1xyXG4gIH0sIFtyYXJpdGllcywgdHlwZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlTmFtZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJhcml0eSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0UmFyaXR5KGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW1hZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIHNldEltYWdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlRGVzYyA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0RGVzYyhldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICBzZXREYXRhKHtcclxuICAgICAgY2FyZE5hbWU6IG5hbWUsXHJcbiAgICAgIGNhcmRUeXBlOiB0eXBlLFxyXG4gICAgICBjYXJkUmFyaXR5OiByYXJpdHksXHJcbiAgICAgIGNhcmRTdWJUeXBlOiBzdWJUeXBlLFxyXG4gICAgICBjYXJkSW1hZ2U6IGltYWdlLFxyXG4gICAgICBjYXJkRGVzYzogZGVzYyxcclxuICAgICAgY2FyZEFUSzogYXRrLFxyXG4gICAgICBjYXJkREVGOiBkZWYsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHJhcml0aWVzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMTA1LCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICA8SW5wdXRMYWJlbD5DYXJkIFJhcml0eTo8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICA8U2VsZWN0IHZhbHVlPXtyYXJpdHl9IGxhYmVsPVwiU2VydmljZVwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSYXJpdHl9PlxyXG4gICAgICAgICAgICB7cmFyaXRpZXMubWFwKCh4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17eC5yYXJpdHlOYW1lfSB2YWx1ZT17eC5yYXJpdHlOYW1lfT5cclxuICAgICAgICAgICAgICAgIHt4LnJhcml0eU5hbWV9XHJcbiAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG5cclxuICAgICAgICA8Rm9ybUNvbnRyb2wgc3R5bGU9e3sgbWluV2lkdGg6IDEwNSwgbWFyZ2luOiAwIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBpZD1cImNhcmROYW1lXCJcclxuICAgICAgICAgICAgbmFtZT1cImNhcmROYW1lXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDYXJkIE5hbWU6XCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlTmFtZX1cclxuICAgICAgICAgICAgSW5wdXRMYWJlbFByb3BzPXt7IHNocmluazogdHJ1ZSB9fVxyXG4gICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMjA1LCBtYXJnaW46IDAsIGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgICBpZD1cImNhcmRJbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJjYXJkSW1hZ2VcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkltYWdlIExpbms6XCJcclxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtpbWFnZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZUltYWdlfVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm1pbmltdW0gaGVpZ2h0XCJcclxuICAgICAgICAgICAgbWluUm93cz17M31cclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXJkIERlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZURlc2N9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMDAgfX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dldERhdGF9PnRlc3QxPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IHtjb25zb2xlLmxvZyhkYXRhKX19PnRlc3QyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpZWxkIGZyb20gJy4vRmllbGQnO1xyXG5pbXBvcnQgSGFuZCBmcm9tICcuL0hhbmQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFBsYXllckhhbmQgPSBtZW1vKGZ1bmN0aW9uIENvbnRhaW5lcigpIHtcclxuXHJcbiAgICBjb25zdCBbaW5pdCwgc2V0SW5pdF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtvbkhhbmQsIHNldE9uSGFuZF0gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IFtvbkZpZWxkLCBzZXRPbkZpZWxkXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGdldENhcmRzID0gKCkgPT4ge1xyXG4gICAgICAgIC8vaWYgb25IYW5kIGhhdmUgbm90IGxvYWRlZCB5ZXQgdGhlbiBsb2FkIHRoZW0gZnJvbSBzZXJ2ZXIuXHJcbiAgICAgICAgaWYgKG9uSGFuZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRgKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBoYW5kID0gcmVzLmRhdGEuZGF0YS5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCAxMClcclxuICAgICAgICAgICAgICAgIHNvcnRJRHMoaGFuZClcclxuICAgICAgICAgICAgICAgIHNldE9uSGFuZChoYW5kKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENhcmRzKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3J0SURzKG9uSGFuZClcclxuICAgICAgICBjb25zb2xlLmxvZyhvbkhhbmQpXHJcbiAgICB9LCBbb25IYW5kXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzb3J0SURzKG9uRmllbGQpXHJcbiAgICAgICAgY29uc29sZS5sb2cob25GaWVsZClcclxuICAgIH0sIFtvbkZpZWxkXSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2FyZFBsYXllZCA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIHNldE9uSGFuZChwcmV2ID0+IHByZXYuZmlsdGVyKChjYXJkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcmQuaWQsIGluZGV4KVxyXG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKGNhcmQuaWQpICE9IE51bWJlcihpbmRleCAtIDEpXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgc2V0T25GaWVsZChwcmV2QXJyYXkgPT4gWy4uLnByZXZBcnJheSwgb25IYW5kLmZpbHRlcihjYXJkID0+IGNhcmQuaWQgPT0gaW5kZXggLSAxKVswXV0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29ydElEcyA9IChhcnJheSkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gYXJyYXlcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSAoaW5pdCA/IGluZGV4IDogaW5kZXggKyAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWluaXQpIHNldEluaXQodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGNhcmRzPXtvbkZpZWxkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGFuZCBjYXJkcz17b25IYW5kfSBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckhhbmQiLCJpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgRmllbGRDYXJkIGZyb20gJy4vRmllbGRDYXJkJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMjY1cHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHpJbmRleDogNSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAnMjYwcHgnLFxyXG59XHJcbmV4cG9ydCBjb25zdCBGaWVsZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3sgY2FuRHJvcCwgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgICAgIGFjY2VwdDogSXRlbVR5cGVzLkhBTkRDQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6ICdGaWVsZCcgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjYW5Ecm9wICYmIGlzT3ZlcjtcclxuICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnIzIyMic7XHJcblxyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2Ryb3B9IHJvbGU9eydGaWVsZCd9IHN0eWxlPXt7IC4uLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eydmaWVsZCcgKyBjYXJkLmNhcmROYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlZC1maWVsZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZC5jYXJkU3ViVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtwcm9wcy5wbGF5Q2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQiLCJpbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgQ2FyZENhcmQgZnJvbSAnLi4vY2FyZENhcmQvQ2FyZENhcmQnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknLFxyXG4gICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmNvbnN0IEZpZWxkQ2FyZCA9IGZ1bmN0aW9uIEZpZWxkQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZFN1YlR5cGUsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuRklFTERDQVJELFxyXG4gICAgICAgIGl0ZW06IHsgaWQsIGNhcmROYW1lIH0sXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlDYXJkKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGRyb3BwZWQgJHtpdGVtLmNhcmROYW1lfSBpbnRvICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSByb2xlPVwiRmllbGRDYXJkXCIgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX0gZGF0YS10ZXN0aWQ9e2BmaWVsZGNhcmQtJHtjYXJkTmFtZX1gfSBvbkNsaWNrPXsoKSA9PiB7IGNvbnNvbGUubG9nKGlkKSB9fT5cclxuICAgICAgICAgICAgPENhcmRDYXJkXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e3R5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmRBdGt9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkRGVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkQ2FyZCIsImltcG9ydCB7IEhhbmRDYXJkIH0gZnJvbSAnLi9IYW5kQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGFuZCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjU1cHgnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWhhbmQtY2FyZFwiIGtleT17Y2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGFuZENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmQuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkLmNhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e2NhcmQudHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFN1YlR5cGU9e2NhcmQuY2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmQuY2FyZEFUS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2FyZD17cHJvcHMucGxheUNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFuZCIsImltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcbmltcG9ydCBDYXJkQ2FyZCBmcm9tICcuLi9jYXJkQ2FyZC9DYXJkQ2FyZCc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHdpZHRoOiAnMjgwcHgnLFxyXG4gICAgekluZGV4OiAxMFxyXG59O1xyXG5leHBvcnQgY29uc3QgSGFuZENhcmQgPSBmdW5jdGlvbiBIYW5kQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZFN1YlR5cGUsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuSEFORENBUkQsXHJcbiAgICAgICAgaXRlbTogeyBpZCwgY2FyZE5hbWUgfSxcclxuICAgICAgICBlbmQ6IChpdGVtLCBtb25pdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgZHJvcFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcGxheUNhcmQoaXRlbS5pZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgZHJvcHBlZCAke2l0ZW0uY2FyZE5hbWV9IGludG8gJHtkcm9wUmVzdWx0Lm5hbWV9IWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICAgICAgICAgIGhhbmRsZXJJZDogbW9uaXRvci5nZXRIYW5kbGVySWQoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBpc0RyYWdnaW5nID8gMC40IDogMTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e2RyYWd9XHJcbiAgICAgICAgICAgIHJvbGU9XCJIYW5kQ2FyZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBvcGFjaXR5IH19XHJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgaGFuZGNhcmQtJHtjYXJkTmFtZX1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkQ2FyZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkUmFyaXR5fVxyXG4gICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgY2FyZFN1YlR5cGU9e2NhcmRTdWJUeXBlfVxyXG4gICAgICAgICAgICAgICAgY2FyZERlc2M9e2NhcmREZXNjfVxyXG4gICAgICAgICAgICAgICAgdHlwZUltYWdlPXt0eXBlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkQXRrfVxyXG4gICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZERlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBJdGVtVHlwZXMgPSB7XHJcbiAgICBIQU5EQ0FSRDogJ2hhbmRjYXJkJyxcclxuICAgIEZJRUxEQ0FSRDogJ2ZpZWxkY2FyZCdcclxuICB9XHJcbiAgIiwiaW1wb3J0IENhcmRDcmVhdGUgZnJvbSAnLi4vY2FyZENyZWF0ZS9DYXJkQ3JlYXRlJ1xyXG4vL2ltcG9ydCBQbGF5ZXJIYW5kIGZyb20gJy4uL3BsYXllckhhbmQvUGxheWVySGFuZCdcclxuaW1wb3J0IEJvYXJkIGZyb20gJy4uL2dhbWUvQm9hcmQnXHJcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtZG5kJ1xyXG5pbXBvcnQgeyBIVE1MNUJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtaHRtbDUtYmFja2VuZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiB9ID0gcHJvcHMuZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+SGVsbG8gd29ybGQhPC9oMT5cclxuICAgICAgICA8Q2FyZENyZWF0ZSAvPlxyXG4gICAgICAgIDxEbmRQcm92aWRlciBiYWNrZW5kPXtIVE1MNUJhY2tlbmR9PlxyXG4gICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XCJVc2VyIElEOiBcIn1cclxuICAgICAgICAgICAge3VzZXIuaWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcblxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XG5cbi8qXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgZXh0cmFjdGVkIHRva2VuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xuICB0cnkge1xuICAgIHJldHVybiBqd3QudmVyaWZ5KGp3dFRva2VuLCBTRUNSRVRfS0VZKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUubG9nKCdlOicsIGUpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8qXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBwYXJzZSBqd3QgY29va2llIGRlY29kZSBvYmplY3RcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEFwcENvb2tpZXMocmVxKSB7XG4gIGNvbnN0IHBhcnNlZEl0ZW1zID0ge307XG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICBjb25zdCBjb29raWVzSXRlbXMgPSByZXEuaGVhZGVycy5jb29raWUuc3BsaXQoJzsgJyk7XG4gICAgY29va2llc0l0ZW1zLmZvckVhY2goY29va2llcyA9PiB7XG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xuICAgICAgcGFyc2VkSXRlbXNbcGFyc2VkSXRlbVswXV0gPSBkZWNvZGVVUkkocGFyc2VkSXRlbVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHBhcnNlZEl0ZW1zO1xufVxuXG4vKlxuICogQHBhcmFtcyB7cmVxdWVzdH0gZXh0cmFjdGVkIGZyb20gcmVxdWVzdCByZXNwb25zZSwge3NldExvY2FsaG9zdH0geW91ciBsb2NhbGhvc3QgYWRkcmVzc1xuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFic29sdXRlVXJsKHJlcSwgc2V0TG9jYWxob3N0KSB7XG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xuICB2YXIgaG9zdCA9IHJlcVxuICAgID8gcmVxLmhlYWRlcnNbJ3gtZm9yd2FyZGVkLWhvc3QnXSB8fCByZXEuaGVhZGVyc1snaG9zdCddXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgaWYgKGhvc3QuaW5kZXhPZignbG9jYWxob3N0JykgPiAtMSkge1xuICAgIGlmIChzZXRMb2NhbGhvc3QpIGhvc3QgPSBzZXRMb2NhbGhvc3Q7XG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xuICB9XG4gIHJldHVybiB7XG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxuICAgIGhvc3Q6IGhvc3QsXG4gICAgb3JpZ2luOiBwcm90b2NvbCArICcvLycgKyBob3N0LFxuICAgIHVybDogcmVxLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgYWJzb2x1dGVVcmwgfSBmcm9tICcuLi9taWRkbGV3YXJlL3V0aWxzJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi4vY29tcG9uZW50cy9ob21lL0hvbWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SG9tZSBkYXRhPXtwcm9wc30gLz5cclxuICApO1xyXG59XHJcbi8qIGdldFNlcnZlclNpZGVQcm9wcyAqL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCB7IHJlcSB9ID0gY29udGV4dDtcclxuICBjb25zdCB7IG9yaWdpbiB9ID0gYWJzb2x1dGVVcmwocmVxKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgfSxcclxuICB9O1xyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0lucHV0TGFiZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG5kLWh0bWw1LWJhY2tlbmRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==