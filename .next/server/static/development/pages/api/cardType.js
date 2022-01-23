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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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

/***/ "./pages/api/cardType/index.js":
/*!*************************************!*\
  !*** ./pages/api/cardType/index.js ***!
  \*************************************/
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
  const cardTypes = await models.cardTypes.findAndCountAll({
    offset: nextPage ? +nextPage : 0
  });
  res.statusCode = 200;
  res.json({
    status: 'success',
    data: cardTypes.rows,
    total: cardTypes.count,
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
  const newCard = await models.cards.create({
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

/***/ 6:
/*!*******************************************!*\
  !*** multi ./pages/api/cardType/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nfernal\Desktop\nextjs-sequelize\pages\api\cardType\index.js */"./pages/api/cardType/index.js");


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhcmRUeXBlL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlcXVlbGl6ZVwiIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkZXZlbG9wbWVudCIsInVzZXJuYW1lIiwicHJvY2VzcyIsImVudiIsIkRCX1VTRVIiLCJwYXNzd29yZCIsIkRCX1BBU1MiLCJkYXRhYmFzZSIsIkRCX05BTUUiLCJob3N0IiwiREJfSE9TVCIsImRpYWxlY3QiLCJsb2dnaW5nIiwidGVzdCIsInByb2R1Y3Rpb24iLCJmcyIsInJlcXVpcmUiLCJwYXRoIiwiU2VxdWVsaXplIiwiYmFzZW5hbWUiLCJfX2ZpbGVuYW1lIiwiY29uZmlnIiwiX19kaXJuYW1lIiwiZGIiLCJtb2RlbHMiLCJjd2QiLCJzZXF1ZWxpemUiLCJ1c2VfZW52X3ZhcmlhYmxlIiwicmVhZGRpclN5bmMiLCJmaWx0ZXIiLCJmaWxlIiwiaW5kZXhPZiIsInNsaWNlIiwiZm9yRWFjaCIsIm1vZGVsIiwiam9pbiIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwibW9kZWxOYW1lIiwiYXNzb2NpYXRlIiwiaGFuZGxlciIsIm5leHRDb25uZWN0IiwiZ2V0IiwicmVxIiwicmVzIiwicXVlcnkiLCJuZXh0UGFnZSIsIm1ldGhvZCIsImJvZHkiLCJjYXJkVHlwZXMiLCJmaW5kQW5kQ291bnRBbGwiLCJvZmZzZXQiLCJzdGF0dXNDb2RlIiwianNvbiIsInN0YXR1cyIsImRhdGEiLCJyb3dzIiwidG90YWwiLCJjb3VudCIs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QUFxQjtBQUMxQkMsVUFBTSxFQUFFLFNBRGtCO0FBRTFCVSxXQUFPLEVBQUUsTUFGaUI7QUFHMUJULFFBQUksRUFBRU07QUFIb0IsR0FBckIsQ0FBUDtBQUtELENBckNhLENBQWhCO0FBdUNlckIsc0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ0EsK0I7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFwaVxcY2FyZFR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGV2ZWxvcG1lbnQ6IHtcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXG4gICAgbG9nZ2luZzogZmFsc2UsXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXG4gICAgbG9nZ2luZzogZmFsc2UsXG4gIH0sXG4gIHByb2R1Y3Rpb246IHtcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXG4gICAgbG9nZ2luZzogZmFsc2UsXG4gIH0sXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpO1xuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5jb25zdCBiYXNlbmFtZSA9IHBhdGguYmFzZW5hbWUoX19maWxlbmFtZSk7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAnZGV2ZWxvcG1lbnQnO1xuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanMnKVtlbnZdO1xuY29uc3QgZGIgPSB7fTtcblxuLyogQ3VzdG9tIGhhbmRsZXIgZm9yIHJlYWRpbmcgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAqL1xuY29uc3QgbW9kZWxzID0gcHJvY2Vzcy5jd2QoKSArICcvbW9kZWxzLycgfHwgX19kaXJuYW1lO1xuXG5sZXQgc2VxdWVsaXplO1xuaWYgKGNvbmZpZy51c2VfZW52X3ZhcmlhYmxlKSB7XG4gIHNlcXVlbGl6ZSA9IG5ldyBTZXF1ZWxpemUocHJvY2Vzcy5lbnZbY29uZmlnLnVzZV9lbnZfdmFyaWFibGVdLCBjb25maWcpO1xufSBlbHNlIHtcbiAgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcbiAgICBjb25maWcuZGF0YWJhc2UsXG4gICAgY29uZmlnLnVzZXJuYW1lLFxuICAgIGNvbmZpZy5wYXNzd29yZCxcbiAgICBjb25maWcsXG4gICk7XG59XG4vKiBmcy5yZWFkZGlyU3luYyhfX2Rpcm5hbWUpICovXG5mcy5yZWFkZGlyU3luYyhtb2RlbHMpXG4gIC5maWx0ZXIoZmlsZSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGZpbGUuaW5kZXhPZignLicpICE9PSAwICYmIGZpbGUgIT09IGJhc2VuYW1lICYmIGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJ1xuICAgICk7XG4gIH0pXG4gIC5mb3JFYWNoKGZpbGUgPT4ge1xuICAgIC8qIGNvbnN0IG1vZGVsID0gc2VxdWVsaXplW1wiaW1wb3J0XCJdKHBhdGguam9pbihfX2Rpcm5hbWUsIGZpbGUpKTsgKi9cbiAgICBjb25zdCBtb2RlbCA9IHNlcXVlbGl6ZVsnaW1wb3J0J10ocGF0aC5qb2luKG1vZGVscywgZmlsZSkpO1xuICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XG4gIH0pO1xuXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xuICBpZiAoZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUpIHtcbiAgICBkYlttb2RlbE5hbWVdLmFzc29jaWF0ZShkYik7XG4gIH1cbn0pO1xuXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XG5cbm1vZHVsZS5leHBvcnRzID0gZGI7XG4iLCJpbXBvcnQgbmV4dENvbm5lY3QgZnJvbSAnbmV4dC1jb25uZWN0JztcclxuY29uc3QgbW9kZWxzID0gcmVxdWlyZSgnLi4vLi4vLi4vbW9kZWxzL2luZGV4Jyk7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmV4dENvbm5lY3QoKVxyXG4gIC8vIEdldCBtZXRob2RcclxuICAuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBxdWVyeTogeyBuZXh0UGFnZSB9LFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9ID0gcmVxO1xyXG5cclxuICAgIGNvbnN0IGNhcmRUeXBlcyA9IGF3YWl0IG1vZGVscy5jYXJkVHlwZXMuZmluZEFuZENvdW50QWxsKHtcclxuICAgICAgb2Zmc2V0OiBuZXh0UGFnZSA/ICtuZXh0UGFnZSA6IDAsXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXMuc3RhdHVzQ29kZSA9IDIwMDtcclxuICAgIHJlcy5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIGRhdGE6IGNhcmRUeXBlcy5yb3dzLFxyXG4gICAgICB0b3RhbDogY2FyZFR5cGVzLmNvdW50LFxyXG4gICAgICBuZXh0UGFnZTogK25leHRQYWdlICsgNSxcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG4gIC8vIFBvc3QgbWV0aG9kXHJcbiAgLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCB7IGJvZHkgfSA9IHJlcTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdHlwZU5hbWUsXHJcbiAgICB9ID0gYm9keTtcclxuICAgIGNvbnN0IG5ld0NhcmQgPSBhd2FpdCBtb2RlbHMuY2FyZHMuY3JlYXRlKHtcclxuICAgICAgdHlwZU5hbWUsXHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIG1lc3NhZ2U6ICdkb25lJyxcclxuICAgICAgZGF0YTogbmV3Q2FyZCxcclxuICAgIH0pO1xyXG4gIH0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==