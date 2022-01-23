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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

/***/ "./pages/api/card/index.js":
/*!*********************************!*\
  !*** ./pages/api/card/index.js ***!
  \*********************************/
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
  const cards = await models.cards.findAndCountAll({
    offset: nextPage ? +nextPage : 0
  });
  res.statusCode = 200;
  res.json({
    status: 'success',
    data: cards.rows,
    total: cards.count,
    nextPage: +nextPage + 5
  });
}) // Post method
.post(async (req, res) => {
  const {
    body
  } = req;
  const {
    cardName,
    cardRarity,
    cardImage,
    cardDesc,
    cardType,
    cardATK,
    cardDEF,
    cardSubType,
    typeImage
  } = body;
  const newCard = await models.cards.create({
    cardName,
    cardRarity,
    cardImage,
    cardDesc,
    cardType,
    cardATK,
    cardDEF,
    cardSubType,
    typeImage,
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

/***/ 8:
/*!***************************************!*\
  !*** multi ./pages/api/card/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nfernal\Desktop\nextjs-sequelize\pages\api\card\index.js */"./pages/api/card/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsImxvZ2dpbmciLCJ0ZXN0IiwicHJvZHVjdGlvbiIsImZzIiwicmVxdWlyZSIsInBhdGgiLCJTZXF1ZWxpemUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJjb25maWciLCJfX2Rpcm5hbWUiLCJkYiIsIm1vZGVscyIsImN3ZCIsInNlcXVlbGl6ZSIsInVzZV9lbnZfdmFyaWFibGUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJqb2luIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJoYW5kbGVyIiwibmV4dENvbm5lY3QiLCJnZXQiLCJyZXEiLCJyZXMiLCJxdWVyeSIsIm5leHRQYWdlIiwibWV0aG9kIiwiYm9keSIsImNhcmRzIiwiZmluZEFuZENvdW50QWxsIiwib2Zmc2V0Iiwic3RhdHVzQ29kZSIsImpzb24iLCJzdGF0dXMiLCJkYXRhIiwicm93cyIsInRvdGFsIiwiY291bnQiLCJwb3N0IiwiY2FyZE5hbWUiLCJjYXJkUmFyaXR5IiwiY2FyZEltYWdlIiwiY2FyZERlc2MiLCJjYXJkVHlwZSIsImNhcmRBVEsiLCJjYXJkREVGIiwiY2FyZFN1YlR5cGUiLCJ0eXBlSW1hZ2UiLCJuZXdDYXJkIiwiY3JlYXRlIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ3hGYTs7QUFDYkEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLGFBQVcsRUFBRTtBQUNYQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQURYO0FBRVhDLFlBQVEsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLE9BRlg7QUFHWEMsWUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssT0FIWDtBQUlYQyxRQUFJLEVBQUVQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTyxPQUpQO0FB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Vko7QUFXQSxRQUFNcUIsT0FBTyxHQUFHLE1BQU05QyxNQUFNLENBQUMwQixLQUFQLENBQWFxQixNQUFiLENBQW9CO0FBQ3hDVixZQUR3QztBQUV4Q0MsY0FGd0M7QUFHeENDLGFBSHdDO0FBSXhDQyxZQUp3QztBQUt4Q0MsWUFMd0M7QUFNeENDLFdBTndDO0FBT3hDQyxXQVB3QztBQVF4Q0MsZUFSd0M7QUFTeENDLGFBVHdDO0FBVXhDZCxVQUFNLEVBQUU7QUFWZ0MsR0FBcEIsQ0FBdEI7QUFZQSxTQUFPVixHQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCRCxJQUFoQixDQUFxQjtBQUMxQkMsVUFBTSxFQUFFLFNBRGtCO0FBRTFCaUIsV0FBTyxFQUFFLE1BRmlCO0FBRzFCaEIsUUFBSSxFQUFFYztBQUhvQixHQUFyQixDQUFQO0FBS0QsQ0FyRGEsQ0FBaEI7QUF1RGU3QixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFxjYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRldmVsb3BtZW50OiB7XG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxuICAgIGxvZ2dpbmc6IGZhbHNlLFxuICB9LFxuICB0ZXN0OiB7XG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxuICAgIGxvZ2dpbmc6IGZhbHNlLFxuICB9LFxuICBwcm9kdWN0aW9uOiB7XG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxuICAgIGxvZ2dpbmc6IGZhbHNlLFxuICB9LFxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpO1xuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcbmNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xuY29uc3QgYmFzZW5hbWUgPSBwYXRoLmJhc2VuYW1lKF9fZmlsZW5hbWUpO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy8uLi9jb25maWcvY29uZmlnLmpzJylbZW52XTtcbmNvbnN0IGRiID0ge307XG5cbi8qIEN1c3RvbSBoYW5kbGVyIGZvciByZWFkaW5nIGN1cnJlbnQgd29ya2luZyBkaXJlY3RvcnkgKi9cbmNvbnN0IG1vZGVscyA9IHByb2Nlc3MuY3dkKCkgKyAnL21vZGVscy8nIHx8IF9fZGlybmFtZTtcblxubGV0IHNlcXVlbGl6ZTtcbmlmIChjb25maWcudXNlX2Vudl92YXJpYWJsZSkge1xuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcbn0gZWxzZSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUoXG4gICAgY29uZmlnLmRhdGFiYXNlLFxuICAgIGNvbmZpZy51c2VybmFtZSxcbiAgICBjb25maWcucGFzc3dvcmQsXG4gICAgY29uZmlnLFxuICApO1xufVxuLyogZnMucmVhZGRpclN5bmMoX19kaXJuYW1lKSAqL1xuZnMucmVhZGRpclN5bmMobW9kZWxzKVxuICAuZmlsdGVyKGZpbGUgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICBmaWxlLmluZGV4T2YoJy4nKSAhPT0gMCAmJiBmaWxlICE9PSBiYXNlbmFtZSAmJiBmaWxlLnNsaWNlKC0zKSA9PT0gJy5qcydcbiAgICApO1xuICB9KVxuICAuZm9yRWFjaChmaWxlID0+IHtcbiAgICAvKiBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVtcImltcG9ydFwiXShwYXRoLmpvaW4oX19kaXJuYW1lLCBmaWxlKSk7ICovXG4gICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbJ2ltcG9ydCddKHBhdGguam9pbihtb2RlbHMsIGZpbGUpKTtcbiAgICBkYlttb2RlbC5uYW1lXSA9IG1vZGVsO1xuICB9KTtcblxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2gobW9kZWxOYW1lID0+IHtcbiAgaWYgKGRiW21vZGVsTmFtZV0uYXNzb2NpYXRlKSB7XG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xuICB9XG59KTtcblxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xuZGIuU2VxdWVsaXplID0gU2VxdWVsaXplO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmNvbnN0IG1vZGVscyA9IHJlcXVpcmUoJy4uLy4uLy4uL21vZGVscy9pbmRleCcpO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KClcclxuICAvLyBHZXQgbWV0aG9kXHJcbiAgLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgcXVlcnk6IHsgbmV4dFBhZ2UgfSxcclxuICAgICAgbWV0aG9kLFxyXG4gICAgICBib2R5LFxyXG4gICAgfSA9IHJlcTtcclxuXHJcbiAgICBjb25zdCBjYXJkcyA9IGF3YWl0IG1vZGVscy5jYXJkcy5maW5kQW5kQ291bnRBbGwoe1xyXG4gICAgICBvZmZzZXQ6IG5leHRQYWdlID8gK25leHRQYWdlIDogMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gICAgcmVzLmpzb24oe1xyXG4gICAgICBzdGF0dXM6ICdzdWNjZXNzJyxcclxuICAgICAgZGF0YTogY2FyZHMucm93cyxcclxuICAgICAgdG90YWw6IGNhcmRzLmNvdW50LFxyXG4gICAgICBuZXh0UGFnZTogK25leHRQYWdlICsgNSxcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG4gIC8vIFBvc3QgbWV0aG9kXHJcbiAgLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGJvZHkgfSA9IHJlcTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgY2FyZE5hbWUsXHJcbiAgICAgIGNhcmRSYXJpdHksXHJcbiAgICAgIGNhcmRJbWFnZSxcclxuICAgICAgY2FyZERlc2MsXHJcbiAgICAgIGNhcmRUeXBlLFxyXG4gICAgICBjYXJkQVRLLFxyXG4gICAgICBjYXJkREVGLFxyXG4gICAgICBjYXJkU3ViVHlwZSxcclxuICAgICAgdHlwZUltYWdlXHJcbiAgICB9ID0gYm9keTtcclxuICAgIGNvbnN0IG5ld0NhcmQgPSBhd2FpdCBtb2RlbHMuY2FyZHMuY3JlYXRlKHtcclxuICAgICAgY2FyZE5hbWUsXHJcbiAgICAgIGNhcmRSYXJpdHksXHJcbiAgICAgIGNhcmRJbWFnZSxcclxuICAgICAgY2FyZERlc2MsXHJcbiAgICAgIGNhcmRUeXBlLFxyXG4gICAgICBjYXJkQVRLLFxyXG4gICAgICBjYXJkREVGLFxyXG4gICAgICBjYXJkU3ViVHlwZSxcclxuICAgICAgdHlwZUltYWdlLFxyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICB9KTtcclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XHJcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICBtZXNzYWdlOiAnZG9uZScsXHJcbiAgICAgIGRhdGE6IG5ld0NhcmQsXHJcbiAgICB9KTtcclxuICB9KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2VxdWVsaXplXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=