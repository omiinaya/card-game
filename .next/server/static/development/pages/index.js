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
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dnd-touch-backend */ "react-dnd-touch-backend");
/* harmony import */ var react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Nfernal\\Desktop\\nextjs-sequelize\\components\\home\\Home.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Home(props) {
  const {
    user,
    origin,
    deviceType
  } = props.data;
  console.log(deviceType);
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
    backend: deviceType === 'desktop' ? react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_4__["HTML5Backend"] : react_dnd_touch_backend__WEBPACK_IMPORTED_MODULE_5__["TouchBackend"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkQ2FyZC9DYXJkQ2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jYXJkQ3JlYXRlL0NhcmRDcmVhdGUuanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZ2FtZS9Cb2FyZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0ZpZWxkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvRmllbGRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvSGFuZC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9nYW1lL0hhbmRDYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dhbWUvSXRlbVR5cGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaG9tZS9Ib21lLmpzeCIsIndlYnBhY2s6Ly8vLi9taWRkbGV3YXJlL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kbmRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRuZC10b3VjaC1iYWNrZW5kXCIiXSwibmFtZXMiOlsiQ2FyZENhcmQiLCJwcm9wcyIsImNhcmRJbWFnZSIsImNhcmROYW1lIiwidHlwZUltYWdlIiwiY2FyZFN1YlR5cGUiLCJjYXJkRGVzYyIsImNhcmRBdGsiLCJjYXJkRGVmIiwiQmFzaWNTZWxlY3QiLCJyYXJpdGllcyIsInNldFJhcml0aWVzIiwidXNlU3RhdGUiLCJ0eXBlcyIsInNldFR5cGVzIiwibmFtZSIsInNldE5hbWUiLCJyYXJpdHkiLCJzZXRSYXJpdHkiLCJpbWFnZSIsInNldEltYWdlIiwiZGVzYyIsInNldERlc2MiLCJ0eXBlIiwic2V0VHlwZSIsInN1YlR5cGUiLCJzZXRTdWJUeXBlIiwiYXRrIiwic2V0QXRrIiwiZGVmIiwic2V0RGVmIiwiZGF0YSIsInNldERhdGEiLCJnZXRSYXJpdGllcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImdldFR5cGVzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZU5hbWUiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlUmFyaXR5IiwiaGFuZGxlQ2hhbmdlSW1hZ2UiLCJoYW5kbGVDaGFuZ2VEZXNjIiwiZ2V0RGF0YSIsImNhcmRUeXBlIiwiY2FyZFJhcml0eSIsImNhcmRBVEsiLCJjYXJkREVGIiwibGVuZ3RoIiwibWluV2lkdGgiLCJtYXJnaW4iLCJtYXAiLCJ4IiwicmFyaXR5TmFtZSIsInNocmluayIsImRpc3BsYXkiLCJ3aWR0aCIsIlBsYXllckhhbmQiLCJtZW1vIiwiQ29udGFpbmVyIiwiaW5pdCIsInNldEluaXQiLCJvbkhhbmQiLCJzZXRPbkhhbmQiLCJvbkZpZWxkIiwic2V0T25GaWVsZCIsImdldENhcmRzIiwiaGFuZCIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic2xpY2UiLCJzb3J0SURzIiwiaGFuZGxlQ2FyZFBsYXllZCIsImluZGV4IiwicHJldiIsImZpbHRlciIsImNhcmQiLCJpZCIsInByZXZBcnJheSIsImFycmF5IiwibXlBcnJheSIsImZvckVhY2giLCJlbGVtZW50Iiwib3ZlcmZsb3ciLCJjbGVhciIsInN0eWxlIiwiaGVpZ2h0IiwiekluZGV4IiwicG9zaXRpb24iLCJib3R0b20iLCJGaWVsZCIsImNhbkRyb3AiLCJpc092ZXIiLCJkcm9wIiwidXNlRHJvcCIsImFjY2VwdCIsIkl0ZW1UeXBlcyIsIkhBTkRDQVJEIiwiY29sbGVjdCIsIm1vbml0b3IiLCJpc0FjdGl2ZSIsImJhY2tncm91bmRDb2xvciIsInRvcCIsInRyYW5zZm9ybSIsImp1c3RpZnlDb250ZW50IiwiY2FyZHMiLCJwbGF5Q2FyZCIsImJvcmRlciIsImN1cnNvciIsIkZpZWxkQ2FyZCIsImlzRHJhZ2dpbmciLCJkcmFnIiwidXNlRHJhZyIsIkZJRUxEQ0FSRCIsIml0ZW0iLCJlbmQiLCJkcm9wUmVzdWx0IiwiZ2V0RHJvcFJlc3VsdCIsImhhbmRsZXJJZCIsImdldEhhbmRsZXJJZCIsIm9wYWNpdHkiLCJIYW5kIiwiSGFuZENhcmQiLCJIb21lIiwidXNlciIsIm9yaWdpbiIsImRldmljZVR5cGUiLCJIVE1MNUJhY2tlbmQiLCJUb3VjaEJhY2tlbmQiLCJTRUNSRVRfS0VZIiwicHJvY2VzcyIsImVudiIsIkpXVF9LRVkiLCJ2ZXJpZnlUb2tlbiIsImp3dFRva2VuIiwiand0IiwidmVyaWZ5IiwiZSIsImdldEFwcENvb2tpZXMiLCJyZXEiLCJwYXJzZWRJdGVtcyIsImhlYWRlcnMiLCJjb29raWUiLCJjb29raWVzSXRlbXMiLCJzcGxpdCIsImNvb2tpZXMiLCJwYXJzZWRJdGVtIiwiZGVjb2RlVVJJIiwiYWJzb2x1dGVVcmwiLCJzZXRMb2NhbGhvc3QiLCJwcm90b2NvbCIsImhvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImluZGV4T2YiLCJ1cmwiLCJBcHAiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiVUEiLCJpc01vYmlsZSIsIkJvb2xlYW4iLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RmUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdEM7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxxRUFEUDtBQUVFLE9BQUcsRUFBQyxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUtFO0FB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Q0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmRDYXJkKHByb3BzKSB7XHJcbiAgLy9jb25zb2xlLmxvZyhwcm9wcylcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGxpbmtcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1EaWRhY3QrR290aGljJmRpc3BsYXk9c3dhcFwiXHJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgaWQ9XCJjYXJkQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgaWQ9XCJjYXJkVGVtcGxhdGVcIlxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9tRzZqdnBSL21vbnN0ZXItbm9ybWFsLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBpZD1cImNhcmRGYWNlXCJcclxuICAgICAgICAgIHNyYz17cHJvcHMuY2FyZEltYWdlfSAvPlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIGlkPVwic3RhckxldmVsXCJcclxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vTTFiWUM2Vi9zdGFyLnBuZ1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2IGlkPVwiY2FyZFRpdGxlXCI+e3Byb3BzLmNhcmROYW1lfTwvZGl2PlxyXG4gICAgICAgIDxpbWcgaWQ9XCJjYXJkVHlwZVwiIHNyYz17cHJvcHMudHlwZUltYWdlfSAvPlxyXG4gICAgICAgIDxoNCAgaWQ9XCJjYXJkU3ViVHlwZVwiPlt7cHJvcHMuY2FyZFN1YlR5cGV9XTwvaDQ+XHJcbiAgICAgICAgPGRpdiBpZD1cImNhcmREZXNjXCI+e3Byb3BzLmNhcmREZXNjfTwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJjYXJkQXRrXCI+e3Byb3BzLmNhcmRBdGt9PC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD1cImNhcmREZWZcIj57cHJvcHMuY2FyZERlZn08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQm94XCI7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsXCI7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhc2ljU2VsZWN0KCkge1xyXG4gIC8vc2VsZWN0b3JzXHJcbiAgY29uc3QgW3Jhcml0aWVzLCBzZXRSYXJpdGllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW3R5cGVzLCBzZXRUeXBlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy9jYXJkIGluZm9cclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcmFyaXR5LCBzZXRSYXJpdHldID0gdXNlU3RhdGUoXCJDb21tb25cIik7XHJcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc3ViVHlwZSwgc2V0U3ViVHlwZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXRrLCBzZXRBdGtdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW2RlZiwgc2V0RGVmXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0UmFyaXRpZXMgPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoYC9hcGkvY2FyZFJhcml0eWApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBzZXRSYXJpdGllcyhyZXMuZGF0YS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFR5cGVzID0gKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KGAvYXBpL2NhcmRUeXBlYCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgIHNldFR5cGVzKHJlcy5kYXRhLmRhdGEpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFJhcml0aWVzKCk7XHJcbiAgICBnZXRUeXBlcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vY29uc29sZS5jbGVhcigpO1xyXG4gICAgY29uc29sZS5sb2coXCJSYXJpdHk6IFwiICsgcmFyaXR5KTtcclxuICAgIGNvbnNvbGUubG9nKFwiTmFtZTogXCIgKyBuYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKFwiSW1hZ2U6IFwiICsgaW1hZ2UpO1xyXG4gIH0sIFtyYXJpdHksIG5hbWUsIGltYWdlXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyYXJpdGllcyk7XHJcbiAgICBjb25zb2xlLmxvZyh0eXBlcyk7XHJcbiAgfSwgW3Jhcml0aWVzLCB0eXBlc10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VOYW1lID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUmFyaXR5ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXRSYXJpdHkoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VJbWFnZSA9IChldmVudCkgPT4ge1xyXG4gICAgc2V0SW1hZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VEZXNjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBzZXREZXNjKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcclxuICAgIHNldERhdGEoe1xyXG4gICAgICBjYXJkTmFtZTogbmFtZSxcclxuICAgICAgY2FyZFR5cGU6IHR5cGUsXHJcbiAgICAgIGNhcmRSYXJpdHk6IHJhcml0eSxcclxuICAgICAgY2FyZFN1YlR5cGU6IHN1YlR5cGUsXHJcbiAgICAgIGNhcmRJbWFnZTogaW1hZ2UsXHJcbiAgICAgIGNhcmREZXNjOiBkZXNjLFxyXG4gICAgICBjYXJkQVRLOiBhdGssXHJcbiAgICAgIGNhcmRERUY6IGRlZixcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgcmFyaXRpZXMubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiAxMDUsIG1hcmdpbjogMCB9fT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsPkNhcmQgUmFyaXR5OjwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3QgdmFsdWU9e3Jhcml0eX0gbGFiZWw9XCJTZXJ2aWNlXCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVJhcml0eX0+XHJcbiAgICAgICAgICAgIHtyYXJpdGllcy5tYXAoKHgpID0+IChcclxuICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXt4LnJhcml0eU5hbWV9IHZhbHVlPXt4LnJhcml0eU5hbWV9PlxyXG4gICAgICAgICAgICAgICAge3gucmFyaXR5TmFtZX1cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcblxyXG4gICAgICAgIDxGb3JtQ29udHJvbCBzdHlsZT17eyBtaW5XaWR0aDogMTA1LCBtYXJnaW46IDAgfX0+XHJcbiAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwiY2FyZE5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiY2FyZE5hbWVcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIkNhcmQgTmFtZTpcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VOYW1lfVxyXG4gICAgICAgICAgICBJbnB1dExhYmVsUHJvcHM9e3sgc2hyaW5rOiB0cnVlIH19XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7IG1pbldpZHRoOiAyMDUsIG1hcmdpbjogMCwgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogMzAwIH19XHJcbiAgICAgICAgICAgIGlkPVwiY2FyZEltYWdlXCJcclxuICAgICAgICAgICAgbmFtZT1cImNhcmRJbWFnZVwiXHJcbiAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgTGluazpcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2ltYWdlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlSW1hZ2V9XHJcbiAgICAgICAgICAgIElucHV0TGFiZWxQcm9wcz17eyBzaHJpbms6IHRydWUgfX1cclxuICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwibWluaW11bSBoZWlnaHRcIlxyXG4gICAgICAgICAgICBtaW5Sb3dzPXszfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNhcmQgRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlRGVzY31cclxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMwMCB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17Z2V0RGF0YX0+dGVzdDE8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT4ge2NvbnNvbGUubG9nKGRhdGEpfX0+dGVzdDI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCc7XHJcbmltcG9ydCBIYW5kIGZyb20gJy4vSGFuZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUGxheWVySGFuZCA9IG1lbW8oZnVuY3Rpb24gQ29udGFpbmVyKCkge1xyXG5cclxuICAgIGNvbnN0IFtpbml0LCBzZXRJbml0XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW29uSGFuZCwgc2V0T25IYW5kXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgW29uRmllbGQsIHNldE9uRmllbGRdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgZ2V0Q2FyZHMgPSAoKSA9PiB7XHJcbiAgICAgICAgLy9pZiBvbkhhbmQgaGF2ZSBub3QgbG9hZGVkIHlldCB0aGVuIGxvYWQgdGhlbSBmcm9tIHNlcnZlci5cclxuICAgICAgICBpZiAob25IYW5kLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBheGlvcy5nZXQoYC9hcGkvY2FyZGApLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGhhbmQgPSByZXMuZGF0YS5kYXRhLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDEwKVxyXG4gICAgICAgICAgICAgICAgc29ydElEcyhoYW5kKVxyXG4gICAgICAgICAgICAgICAgc2V0T25IYW5kKGhhbmQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q2FyZHMoKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvcnRJRHMob25IYW5kKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9uSGFuZClcclxuICAgIH0sIFtvbkhhbmRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNvcnRJRHMob25GaWVsZClcclxuICAgICAgICBjb25zb2xlLmxvZyhvbkZpZWxkKVxyXG4gICAgfSwgW29uRmllbGRdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJkUGxheWVkID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgc2V0T25IYW5kKHByZXYgPT4gcHJldi5maWx0ZXIoKGNhcmQpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjYXJkLmlkLCBpbmRleClcclxuICAgICAgICAgICAgcmV0dXJuIGNhcmQuaWQgIT0gaW5kZXggLSAxXHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgc2V0T25GaWVsZChwcmV2QXJyYXkgPT4gWy4uLnByZXZBcnJheSwgb25IYW5kLmZpbHRlcihjYXJkID0+IGNhcmQuaWQgPT0gaW5kZXggLSAxKVswXV0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc29ydElEcyA9IChhcnJheSkgPT4ge1xyXG4gICAgICAgIHZhciBteUFycmF5ID0gYXJyYXlcclxuICAgICAgICBteUFycmF5LmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuaWQgPSAoaW5pdCA/IGluZGV4IDogaW5kZXggKyAxKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWluaXQpIHNldEluaXQodHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgb3ZlcmZsb3c6ICdoaWRkZW4nLCBjbGVhcjogJ2JvdGgnIH19PlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkIGNhcmRzPXtvbkZpZWxkfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBvdmVyZmxvdzogJ2hpZGRlbicsIGNsZWFyOiAnYm90aCcgfX0+XHJcbiAgICAgICAgICAgICAgICA8SGFuZCBjYXJkcz17b25IYW5kfSBwbGF5Q2FyZD17aGFuZGxlQ2FyZFBsYXllZH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllckhhbmQiLCJpbXBvcnQgeyB1c2VEcm9wIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgRmllbGRDYXJkIGZyb20gJy4vRmllbGRDYXJkJztcclxuXHJcbmNvbnN0IHN0eWxlID0ge1xyXG4gICAgaGVpZ2h0OiAnMjY1cHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHpJbmRleDogNSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAnMjYwcHgnLFxyXG59XHJcbmV4cG9ydCBjb25zdCBGaWVsZCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3sgY2FuRHJvcCwgaXNPdmVyIH0sIGRyb3BdID0gdXNlRHJvcCgoKSA9PiAoe1xyXG4gICAgICAgIGFjY2VwdDogSXRlbVR5cGVzLkhBTkRDQVJELFxyXG4gICAgICAgIGRyb3A6ICgpID0+ICh7IG5hbWU6ICdGaWVsZCcgfSksXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzT3ZlcjogbW9uaXRvci5pc092ZXIoKSxcclxuICAgICAgICAgICAgY2FuRHJvcDogbW9uaXRvci5jYW5Ecm9wKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgaXNBY3RpdmUgPSBjYW5Ecm9wICYmIGlzT3ZlcjtcclxuICAgIGxldCBiYWNrZ3JvdW5kQ29sb3IgPSAnIzIyMic7XHJcblxyXG4gICAgaWYgKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gJ2RhcmtncmVlbic7XHJcbiAgICB9XHJcblxyXG4gICAgZWxzZSBpZiAoY2FuRHJvcCkge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvciA9ICdkYXJra2hha2knO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiByZWY9e2Ryb3B9IHJvbGU9eydGaWVsZCd9IHN0eWxlPXt7IC4uLnN0eWxlLCBiYWNrZ3JvdW5kQ29sb3IgfX0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICAgICAgICAgIHRvcDogJzUwJScsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01MCUpJyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jYXJkcy5tYXAoKGNhcmQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9eydmaWVsZCcgKyBjYXJkLmNhcmROYW1lICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdlbmVyYXRlZC1maWVsZC1jYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmllbGRDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmQuY2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkLmNhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmQuY2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZUltYWdlPXtjYXJkLnR5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZC5jYXJkU3ViVHlwZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkLmNhcmRBVEt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDYXJkPXtwcm9wcy5wbGF5Q2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGQiLCJpbXBvcnQgeyB1c2VEcmFnIH0gZnJvbSAncmVhY3QtZG5kJztcclxuaW1wb3J0IHsgSXRlbVR5cGVzIH0gZnJvbSAnLi9JdGVtVHlwZXMnO1xyXG5pbXBvcnQgQ2FyZENhcmQgZnJvbSAnLi4vY2FyZENhcmQvQ2FyZENhcmQnO1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgICBib3JkZXI6ICcxcHggZGFzaGVkIGdyYXknLFxyXG4gICAgY3Vyc29yOiAnbW92ZScsXHJcbiAgICB6SW5kZXg6IDEwXHJcbn07XHJcbmNvbnN0IEZpZWxkQ2FyZCA9IGZ1bmN0aW9uIEZpZWxkQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZFN1YlR5cGUsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuRklFTERDQVJELFxyXG4gICAgICAgIGl0ZW06IHsgaWQsIGNhcmROYW1lIH0sXHJcbiAgICAgICAgZW5kOiAoaXRlbSwgbW9uaXRvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBkcm9wUmVzdWx0ID0gbW9uaXRvci5nZXREcm9wUmVzdWx0KCk7XHJcbiAgICAgICAgICAgIGlmIChpdGVtICYmIGRyb3BSZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIHBsYXlDYXJkKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgWW91IGRyb3BwZWQgJHtpdGVtLmNhcmROYW1lfSBpbnRvICR7ZHJvcFJlc3VsdC5uYW1lfSFgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29sbGVjdDogKG1vbml0b3IpID0+ICh7XHJcbiAgICAgICAgICAgIGlzRHJhZ2dpbmc6IG1vbml0b3IuaXNEcmFnZ2luZygpLFxyXG4gICAgICAgICAgICBoYW5kbGVySWQ6IG1vbml0b3IuZ2V0SGFuZGxlcklkKCksXHJcbiAgICAgICAgfSksXHJcbiAgICB9KSk7XHJcbiAgICBjb25zdCBvcGFjaXR5ID0gaXNEcmFnZ2luZyA/IDAuNCA6IDE7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgcmVmPXtkcmFnfSByb2xlPVwiRmllbGRDYXJkXCIgc3R5bGU9e3sgLi4uc3R5bGUsIG9wYWNpdHkgfX0gZGF0YS10ZXN0aWQ9e2BmaWVsZGNhcmQtJHtjYXJkTmFtZX1gfSBvbkNsaWNrPXsoKSA9PiB7IGNvbnNvbGUubG9nKGlkKSB9fT5cclxuICAgICAgICAgICAgPENhcmRDYXJkXHJcbiAgICAgICAgICAgICAgICBpZD17aWR9XHJcbiAgICAgICAgICAgICAgICBjYXJkTmFtZT17Y2FyZE5hbWV9XHJcbiAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmRJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRSYXJpdHk9e2NhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICBjYXJkVHlwZT17Y2FyZFR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkU3ViVHlwZT17Y2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZERlc2N9XHJcbiAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e3R5cGVJbWFnZX1cclxuICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmRBdGt9XHJcbiAgICAgICAgICAgICAgICBjYXJkRGVmPXtjYXJkRGVmfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpZWxkQ2FyZCIsImltcG9ydCB7IEhhbmRDYXJkIH0gZnJvbSAnLi9IYW5kQ2FyZCc7XHJcblxyXG5leHBvcnQgY29uc3QgSGFuZCA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgICAgICAgaGVpZ2h0OiAnMjU1cHgnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICAgICAgICBib3R0b206IDBcclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNhcmRzLm1hcCgoY2FyZCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2VuZXJhdGVkLWhhbmQtY2FyZFwiIGtleT17Y2FyZC5jYXJkTmFtZSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICA8SGFuZENhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2NhcmQuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmROYW1lPXtjYXJkLmNhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSW1hZ2U9e2NhcmQuY2FyZEltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkLmNhcmRSYXJpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRUeXBlPXtjYXJkLmNhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlSW1hZ2U9e2NhcmQudHlwZUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkRGVzYz17Y2FyZC5jYXJkRGVzY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZFN1YlR5cGU9e2NhcmQuY2FyZFN1YlR5cGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhcmRBdGs9e2NhcmQuY2FyZEFUS31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZC5jYXJkREVGfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5Q2FyZD17cHJvcHMucGxheUNhcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFuZCIsImltcG9ydCB7IHVzZURyYWcgfSBmcm9tICdyZWFjdC1kbmQnO1xyXG5pbXBvcnQgeyBJdGVtVHlwZXMgfSBmcm9tICcuL0l0ZW1UeXBlcyc7XHJcbmltcG9ydCBDYXJkQ2FyZCBmcm9tICcuLi9jYXJkQ2FyZC9DYXJkQ2FyZCc7XHJcblxyXG5jb25zdCBzdHlsZSA9IHtcclxuICAgIGJvcmRlcjogJzFweCBkYXNoZWQgZ3JheScsXHJcbiAgICBjdXJzb3I6ICdtb3ZlJyxcclxuICAgIHdpZHRoOiAnMjgwcHgnLFxyXG4gICAgekluZGV4OiAxMFxyXG59O1xyXG5leHBvcnQgY29uc3QgSGFuZENhcmQgPSBmdW5jdGlvbiBIYW5kQ2FyZCh7XHJcbiAgICBpZCxcclxuICAgIGNhcmROYW1lLFxyXG4gICAgY2FyZEltYWdlLFxyXG4gICAgY2FyZFJhcml0eSxcclxuICAgIGNhcmRUeXBlLFxyXG4gICAgY2FyZFN1YlR5cGUsXHJcbiAgICBjYXJkRGVzYyxcclxuICAgIHR5cGVJbWFnZSxcclxuICAgIGNhcmRBdGssXHJcbiAgICBjYXJkRGVmLFxyXG4gICAgcGxheUNhcmRcclxufSkge1xyXG4gICAgY29uc3QgW3sgaXNEcmFnZ2luZyB9LCBkcmFnXSA9IHVzZURyYWcoKCkgPT4gKHtcclxuICAgICAgICB0eXBlOiBJdGVtVHlwZXMuSEFORENBUkQsXHJcbiAgICAgICAgaXRlbTogeyBpZCwgY2FyZE5hbWUgfSxcclxuICAgICAgICBlbmQ6IChpdGVtLCBtb25pdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRyb3BSZXN1bHQgPSBtb25pdG9yLmdldERyb3BSZXN1bHQoKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0gJiYgZHJvcFJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgcGxheUNhcmQoaXRlbS5pZClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBZb3UgZHJvcHBlZCAke2l0ZW0uY2FyZE5hbWV9IGludG8gJHtkcm9wUmVzdWx0Lm5hbWV9IWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xsZWN0OiAobW9uaXRvcikgPT4gKHtcclxuICAgICAgICAgICAgaXNEcmFnZ2luZzogbW9uaXRvci5pc0RyYWdnaW5nKCksXHJcbiAgICAgICAgICAgIGhhbmRsZXJJZDogbW9uaXRvci5nZXRIYW5kbGVySWQoKSxcclxuICAgICAgICB9KSxcclxuICAgIH0pKTtcclxuICAgIGNvbnN0IG9wYWNpdHkgPSBpc0RyYWdnaW5nID8gMC40IDogMTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICByZWY9e2RyYWd9XHJcbiAgICAgICAgICAgIHJvbGU9XCJIYW5kQ2FyZFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IC4uLnN0eWxlLCBvcGFjaXR5IH19XHJcbiAgICAgICAgICAgIGRhdGEtdGVzdGlkPXtgaGFuZGNhcmQtJHtjYXJkTmFtZX1gfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIDxDYXJkQ2FyZFxyXG4gICAgICAgICAgICAgICAgaWQ9e2lkfVxyXG4gICAgICAgICAgICAgICAgY2FyZE5hbWU9e2NhcmROYW1lfVxyXG4gICAgICAgICAgICAgICAgY2FyZEltYWdlPXtjYXJkSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkUmFyaXR5PXtjYXJkUmFyaXR5fVxyXG4gICAgICAgICAgICAgICAgY2FyZFR5cGU9e2NhcmRUeXBlfVxyXG4gICAgICAgICAgICAgICAgY2FyZFN1YlR5cGU9e2NhcmRTdWJUeXBlfVxyXG4gICAgICAgICAgICAgICAgY2FyZERlc2M9e2NhcmREZXNjfVxyXG4gICAgICAgICAgICAgICAgdHlwZUltYWdlPXt0eXBlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICBjYXJkQXRrPXtjYXJkQXRrfVxyXG4gICAgICAgICAgICAgICAgY2FyZERlZj17Y2FyZERlZn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBJdGVtVHlwZXMgPSB7XHJcbiAgICBIQU5EQ0FSRDogJ2hhbmRjYXJkJyxcclxuICAgIEZJRUxEQ0FSRDogJ2ZpZWxkY2FyZCdcclxuICB9XHJcbiAgIiwiaW1wb3J0IENhcmRDcmVhdGUgZnJvbSAnLi4vY2FyZENyZWF0ZS9DYXJkQ3JlYXRlJ1xyXG5pbXBvcnQgQm9hcmQgZnJvbSAnLi4vZ2FtZS9Cb2FyZCdcclxuaW1wb3J0IHsgRG5kUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1kbmQnXHJcbmltcG9ydCB7IEhUTUw1QmFja2VuZCB9IGZyb20gJ3JlYWN0LWRuZC1odG1sNS1iYWNrZW5kJ1xyXG5pbXBvcnQgeyBUb3VjaEJhY2tlbmQgfSBmcm9tICdyZWFjdC1kbmQtdG91Y2gtYmFja2VuZCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcclxuICBjb25zdCB7IHVzZXIsIG9yaWdpbiwgZGV2aWNlVHlwZSB9ID0gcHJvcHMuZGF0YTtcclxuICBjb25zb2xlLmxvZyhkZXZpY2VUeXBlKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5IZWxsbyB3b3JsZCE8L2gxPlxyXG4gICAgICAgIDxDYXJkQ3JlYXRlIC8+XHJcbiAgICAgICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e2RldmljZVR5cGU9PT0nZGVza3RvcCcgPyBIVE1MNUJhY2tlbmQgOiBUb3VjaEJhY2tlbmR9PlxyXG4gICAgICAgICAgPEJvYXJkIC8+XHJcbiAgICAgICAgPC9EbmRQcm92aWRlcj5cclxuICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7XCJVc2VyIElEOiBcIn1cclxuICAgICAgICAgICAge3VzZXIuaWR9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59IiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xuXG5jb25zdCBTRUNSRVRfS0VZID0gcHJvY2Vzcy5lbnYuSldUX0tFWTtcblxuLypcbiAqIEBwYXJhbXMge2p3dFRva2VufSBleHRyYWN0ZWQgZnJvbSBjb29raWVzXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRva2VuKGp3dFRva2VuKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGp3dC52ZXJpZnkoand0VG9rZW4sIFNFQ1JFVF9LRVkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLypcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IG9mIHBhcnNlIGp3dCBjb29raWUgZGVjb2RlIG9iamVjdFxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcbiAgY29uc3QgcGFyc2VkSXRlbXMgPSB7fTtcbiAgaWYgKHJlcS5oZWFkZXJzLmNvb2tpZSkge1xuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcbiAgICBjb29raWVzSXRlbXMuZm9yRWFjaChjb29raWVzID0+IHtcbiAgICAgIGNvbnN0IHBhcnNlZEl0ZW0gPSBjb29raWVzLnNwbGl0KCc9Jyk7XG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcGFyc2VkSXRlbXM7XG59XG5cbi8qXG4gKiBAcGFyYW1zIHtyZXF1ZXN0fSBleHRyYWN0ZWQgZnJvbSByZXF1ZXN0IHJlc3BvbnNlLCB7c2V0TG9jYWxob3N0fSB5b3VyIGxvY2FsaG9zdCBhZGRyZXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdHMgb2YgcHJvdG9jb2wsIGhvc3QgYW5kIG9yaWdpblxuICovXG5leHBvcnQgZnVuY3Rpb24gYWJzb2x1dGVVcmwocmVxLCBzZXRMb2NhbGhvc3QpIHtcbiAgdmFyIHByb3RvY29sID0gJ2h0dHBzOic7XG4gIHZhciBob3N0ID0gcmVxXG4gICAgPyByZXEuaGVhZGVyc1sneC1mb3J3YXJkZWQtaG9zdCddIHx8IHJlcS5oZWFkZXJzWydob3N0J11cbiAgICA6IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XG4gICAgaWYgKHNldExvY2FsaG9zdCkgaG9zdCA9IHNldExvY2FsaG9zdDtcbiAgICBwcm90b2NvbCA9ICdodHRwOic7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm90b2NvbDogcHJvdG9jb2wsXG4gICAgaG9zdDogaG9zdCxcbiAgICBvcmlnaW46IHByb3RvY29sICsgJy8vJyArIGhvc3QsXG4gICAgdXJsOiByZXEsXG4gIH07XG59XG4iLCJpbXBvcnQgeyBhYnNvbHV0ZVVybCB9IGZyb20gJy4uL21pZGRsZXdhcmUvdXRpbHMnO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL2hvbWUvSG9tZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAocHJvcHMpIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxIb21lIGRhdGE9e3Byb3BzfSAvPlxyXG4gICk7XHJcbn1cclxuLyogZ2V0U2VydmVyU2lkZVByb3BzICovXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IHsgcmVxIH0gPSBjb250ZXh0O1xyXG4gIGNvbnN0IHsgb3JpZ2luIH0gPSBhYnNvbHV0ZVVybChyZXEpO1xyXG4gIGNvbnN0IFVBID0gY29udGV4dC5yZXEuaGVhZGVyc1sndXNlci1hZ2VudCddO1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gQm9vbGVhbihVQS5tYXRjaChcclxuICAgIC9BbmRyb2lkfEJsYWNrQmVycnl8aVBob25lfGlQYWR8aVBvZHxPcGVyYSBNaW5pfElFTW9iaWxlfFdQRGVza3RvcC9pXHJcbiAgKSlcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgb3JpZ2luLFxyXG4gICAgICBkZXZpY2VUeXBlOiBpc01vYmlsZSA/ICdtb2JpbGUnIDogJ2Rlc2t0b3AnXHJcbiAgICB9LFxyXG4gIH07XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Cb3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9TZWxlY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRuZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmQtaHRtbDUtYmFja2VuZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kbmQtdG91Y2gtYmFja2VuZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9