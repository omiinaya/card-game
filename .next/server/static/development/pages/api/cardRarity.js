module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false
  }
};

/***/ }),

/***/ "./models/index.js":
/*!*************************!*\
  !*** ./models/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const basename = path.basename(__filename);
const env = "development" || false;

const config = __webpack_require__(/*! ./models/../config/config.js */ "./config/config.js")[env];

const db = {};
/* Custom handler for reading current working directory */

const models = process.cwd() + '/models/' || false;

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}
/* fs.readdirSync(__dirname) */


fs.readdirSync(models).filter(file => {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(file => {
  /* const model = sequelize["import"](path.join(__dirname, file)); */
  const model = sequelize['import'](path.join(models, file));
  db[model.name] = model;
});
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./pages/api/cardRarity/index.js":
/*!***************************************!*\
  !*** ./pages/api/cardRarity/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);


const models = __webpack_require__(/*! ../../../models/index */ "./models/index.js");

const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()() // Get method
.get(async (req, res) => {
  const {
    query: {
      nextPage
    },
    method,
    body
  } = req;
  const cardRarity = await models.cardRarities.findAndCountAll({
    offset: nextPage ? +nextPage : 0
  });
  res.statusCode = 200;
  res.json({
    status: 'success',
    data: cardRarity.rows,
    total: cardRarity.count,
    nextPage: +nextPage + 5
  });
}) // Post method
.post(async (req, res) => {
  const {
    body
  } = req;
  const {
    typeName
  } = body;
  const newCard = await models.cardRarities.create({
    typeName,
    status: 1
  });
  return res.status(200).json({
    status: 'success',
    message: 'done',
    data: newCard
  });
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 7:
/*!*********************************************!*\
  !*** multi ./pages/api/cardRarity/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nfernal\Desktop\nextjs-sequelize\pages\api\cardRarity\index.js */"./pages/api/cardRarity/index.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-connect");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhcmRSYXJpdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsImxvZ2dpbmciLCJ0ZXN0IiwicHJvZHVjdGlvbiIsImZzIiwicmVxdWlyZSIsInBhdGgiLCJTZXF1ZWxpemUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJjb25maWciLCJfX2Rpcm5hbWUiLCJkYiIsIm1vZGVscyIsImN3ZCIsInNlcXVlbGl6ZSIsInVzZV9lbnZfdmFyaWFibGUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJqb2luIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJoYW5kbGVyIiwibmV4dENvbm5lY3QiLCJnZXQiLCJyZXEiLCJyZXMiLCJxdWVyeSIsIm5leHRQYWdlIiwibWV0aG9kIiwiYm9keSIsImNhcmRSYXJpdHkiLCJjYXJkUmFyaXRpZXMiLCJmaW5kQW5kQ291bnRBbGwiLCJvZmZzZXQiLCJzdGF0dXNDb2RlIiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJyb3dz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QWdCRCxJQUFoQixDQUFxQjtBQUMxQkMsVUFBTSxFQUFFLFNBRGtCO0FBRTFCUyxXQUFPLEVBQUUsTUFGaUI7QUFHMUJSLFFBQUksRUFBRU07QUFIb0IsR0FBckIsQ0FBUDtBQUtELENBckNhLENBQWhCO0FBdUNldEIsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0EsK0I7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFwaVxcY2FyZFJhcml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsIid1c2Ugc3RyaWN0Jztcbm1vZHVsZS5leHBvcnRzID0ge1xuICBkZXZlbG9wbWVudDoge1xuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgZGlhbGVjdDogJ215c3FsJyxcbiAgICBsb2dnaW5nOiBmYWxzZSxcbiAgfSxcbiAgdGVzdDoge1xuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgZGlhbGVjdDogJ215c3FsJyxcbiAgICBsb2dnaW5nOiBmYWxzZSxcbiAgfSxcbiAgcHJvZHVjdGlvbjoge1xuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXG4gICAgZGlhbGVjdDogJ215c3FsJyxcbiAgICBsb2dnaW5nOiBmYWxzZSxcbiAgfSxcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5jb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcbmNvbnN0IGVudiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCc7XG5jb25zdCBjb25maWcgPSByZXF1aXJlKF9fZGlybmFtZSArICcvLi4vY29uZmlnL2NvbmZpZy5qcycpW2Vudl07XG5jb25zdCBkYiA9IHt9O1xuXG4vKiBDdXN0b20gaGFuZGxlciBmb3IgcmVhZGluZyBjdXJyZW50IHdvcmtpbmcgZGlyZWN0b3J5ICovXG5jb25zdCBtb2RlbHMgPSBwcm9jZXNzLmN3ZCgpICsgJy9tb2RlbHMvJyB8fCBfX2Rpcm5hbWU7XG5cbmxldCBzZXF1ZWxpemU7XG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShwcm9jZXNzLmVudltjb25maWcudXNlX2Vudl92YXJpYWJsZV0sIGNvbmZpZyk7XG59IGVsc2Uge1xuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxuICAgIGNvbmZpZy5kYXRhYmFzZSxcbiAgICBjb25maWcudXNlcm5hbWUsXG4gICAgY29uZmlnLnBhc3N3b3JkLFxuICAgIGNvbmZpZyxcbiAgKTtcbn1cbi8qIGZzLnJlYWRkaXJTeW5jKF9fZGlybmFtZSkgKi9cbmZzLnJlYWRkaXJTeW5jKG1vZGVscylcbiAgLmZpbHRlcihmaWxlID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgZmlsZS5pbmRleE9mKCcuJykgIT09IDAgJiYgZmlsZSAhPT0gYmFzZW5hbWUgJiYgZmlsZS5zbGljZSgtMykgPT09ICcuanMnXG4gICAgKTtcbiAgfSlcbiAgLmZvckVhY2goZmlsZSA9PiB7XG4gICAgLyogY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbXCJpbXBvcnRcIl0ocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpOyAqL1xuICAgIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplWydpbXBvcnQnXShwYXRoLmpvaW4obW9kZWxzLCBmaWxlKSk7XG4gICAgZGJbbW9kZWwubmFtZV0gPSBtb2RlbDtcbiAgfSk7XG5cbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKG1vZGVsTmFtZSA9PiB7XG4gIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xuICAgIGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKGRiKTtcbiAgfVxufSk7XG5cbmRiLnNlcXVlbGl6ZSA9IHNlcXVlbGl6ZTtcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBkYjtcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5jb25zdCBtb2RlbHMgPSByZXF1aXJlKCcuLi8uLi8uLi9tb2RlbHMvaW5kZXgnKTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCgpXHJcbiAgLy8gR2V0IG1ldGhvZFxyXG4gIC5nZXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHF1ZXJ5OiB7IG5leHRQYWdlIH0sXHJcbiAgICAgIG1ldGhvZCxcclxuICAgICAgYm9keSxcclxuICAgIH0gPSByZXE7XHJcblxyXG4gICAgY29uc3QgY2FyZFJhcml0eSA9IGF3YWl0IG1vZGVscy5jYXJkUmFyaXRpZXMuZmluZEFuZENvdW50QWxsKHtcclxuICAgICAgb2Zmc2V0OiBuZXh0UGFnZSA/ICtuZXh0UGFnZSA6IDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIGRhdGE6IGNhcmRSYXJpdHkucm93cyxcclxuICAgICAgdG90YWw6IGNhcmRSYXJpdHkuY291bnQsXHJcbiAgICAgIG5leHRQYWdlOiArbmV4dFBhZ2UgKyA1LFxyXG4gICAgfSk7XHJcbiAgfSlcclxuXHJcbiAgLy8gUG9zdCBtZXRob2RcclxuICAucG9zdChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHsgYm9keSB9ID0gcmVxO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0eXBlTmFtZSxcclxuICAgIH0gPSBib2R5O1xyXG4gICAgY29uc3QgbmV3Q2FyZCA9IGF3YWl0IG1vZGVscy5jYXJkUmFyaXRpZXMuY3JlYXRlKHtcclxuICAgICAgdHlwZU5hbWUsXHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIG1lc3NhZ2U6ICdkb25lJyxcclxuICAgICAgZGF0YTogbmV3Q2FyZCxcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==