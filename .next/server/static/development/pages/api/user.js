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

/***/ "./db/config/config.js":
/*!*****************************!*\
  !*** ./db/config/config.js ***!
  \*****************************/
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

/***/ "./db/models/index.js":
/*!****************************!*\
  !*** ./db/models/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

const basename = path.basename(__filename);
const env = "development" || false;

const config = __webpack_require__(/*! ./db/models/../config/config.js */ "./db/config/config.js")[env];

const db = {};
/* Custom handler for reading current working directory */

const models = process.cwd() + '/db/models/' || false;

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

/***/ "./middleware/auth.js":
/*!****************************!*\
  !*** ./middleware/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./middleware/utils.js");


const middleware = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
/* Sample using middleware */

/* middleware.use(database).use(session).use(passport.initialize()).use(passport.session()); */

/* Set restricted public access / put any api access that is restricted in here */

const restricted = ['/api/post/[slug]', '/api/job/[slug]'];
/*
 * @params {request, response, callback} default Request and Response
 * @return {object} object if true, response message if false and continue
 */

/* harmony default export */ __webpack_exports__["default"] = (middleware.use(async (req, res, next) => {
  let authHeader = req.headers.authorization || '';
  let user = {};

  if (!restricted.includes(req.url) && !authHeader) {
    return next();
  }

  if (authHeader) {
    let sessionID = authHeader.split(' ')[1];

    if (sessionID) {
      user = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["verifyToken"])(sessionID);

      if (user) {
        /* Could put check against users tables in database  User.find({email:user.email}) */
        req.user = user;
      } else {
        res.statusCode = 401;
        return res.send({
          status: 'error',
          error: 'Expired'
        });
      }
    } else {
      res.statusCode = 401;
      return res.send({
        status: 'error',
        error: 'Wrong Token'
      });
    }
  } else {
    res.statusCode = 401;
    return res.send({
      status: 'error',
      error: 'Unauthorized'
    });
  }

  return next();
}));

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

/***/ "./pages/api/user/index.js":
/*!*********************************!*\
  !*** ./pages/api/user/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _middleware_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../middleware/auth */ "./middleware/auth.js");


const models = __webpack_require__(/*! ../../../db/models/index */ "./db/models/index.js");


const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()() // Middleware
.use(_middleware_auth__WEBPACK_IMPORTED_MODULE_1__["default"]) // Get method
.get(async (req, res) => {
  const {
    query: {
      nextPage
    },
    method,
    body
  } = req;
  const users = await models.users.findAndCountAll({
    include: [{
      model: models.posts,
      as: 'posts'
    }, {
      model: models.jobs,
      as: 'jobs'
    }],
    order: [// Will escape title and validate DESC against a list of valid direction parameters
    ['id', 'DESC']],
    offset: nextPage ? +nextPage : 0,
    limit: 5
  });
  res.statusCode = 200;
  res.json({
    status: 'success',
    data: users.rows,
    total: users.count,
    nextPage: +nextPage + 5
  });
}) // Post method
.post(async (req, res) => {
  const {
    body
  } = req;
  const {
    slug
  } = req.query;
  const {
    username,
    email,
    password
  } = body;
  const userId = slug;
  const newUser = await models.users.create({
    username,
    email,
    password,
    status: 1
  });
  return res.status(200).json({
    status: 'success',
    message: 'done',
    data: newUser
  });
}) // Put method
.put(async (req, res) => {
  res.end('method - put');
}) // Patch method
.patch(async (req, res) => {
  throw new Error('Throws me around! Error can be caught and handled.');
});
/* harmony default export */ __webpack_exports__["default"] = (handler);

/***/ }),

/***/ 8:
/*!***************************************!*\
  !*** multi ./pages/api/user/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mr.X\Desktop\nextjs-sequelize\pages\api\user\index.js */"./pages/api/user/index.js");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGIvY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kYi9tb2RlbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbWlkZGxld2FyZS9hdXRoLmpzIiwid2VicGFjazovLy8uL21pZGRsZXdhcmUvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImRldmVsb3BtZW50IiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiREJfVVNFUiIsInBhc3N3b3JkIiwiREJfUEFTUyIsImRhdGFiYXNlIiwiREJfTkFNRSIsImhvc3QiLCJEQl9IT1NUIiwiZGlhbGVjdCIsImxvZ2dpbmciLCJ0ZXN0IiwicHJvZHVjdGlvbiIsImZzIiwicmVxdWlyZSIsInBhdGgiLCJTZXF1ZWxpemUiLCJiYXNlbmFtZSIsIl9fZmlsZW5hbWUiLCJjb25maWciLCJfX2Rpcm5hbWUiLCJkYiIsIm1vZGVscyIsImN3ZCIsInNlcXVlbGl6ZSIsInVzZV9lbnZfdmFyaWFibGUiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsImZpbGUiLCJpbmRleE9mIiwic2xpY2UiLCJmb3JFYWNoIiwibW9kZWwiLCJqb2luIiwibmFtZSIsIk9iamVjdCIsImtleXMiLCJtb2RlbE5hbWUiLCJhc3NvY2lhdGUiLCJtaWRkbGV3YXJlIiwibmV4dENvbm5lY3QiLCJyZXN0cmljdGVkIiwidXNlIiwicmVxIiwicmVzIiwibmV4dCIsImF1dGhIZWFkZXIiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInVzZXIiLCJpbmNsdWRlcyIsInVybCIsInNlc3Npb25JRCIsInNwbGl0IiwidmVyaWZ5VG9rZW4iLCJzdGF0dXNDb2RlIiwic2VuZCIsInN0YXR1cyIsImVycm9yIiwiU0VDUkVUX0tFWSIsIkpXVF9LRVkiLCJqd3RUb2tlbiIsImp3dCIsInZlcmlmeSIsImUiLCJjb25zb2xlIiwibG9nIiwiZ2V0QXBwQ29va2llcyIsInBhcnNlZEl0ZW1zIiwiY29va2llIiwiY29va2llc0l0ZW1zIiwiY29va2llcyIsInBhcnNlZEl0ZW0iLCJkZWNvZGVVUkkiLCJhYnNvbHV0ZVVybCIsInNldExvY2FsaG9zdCIsInByb3RvY29sIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJoYW5kbGVyIiwiZ2V0IiwicXVlcnkiLCJuZXh0UGFnZSIsIm1ldGhvZCIsImJvZHkiLCJ1c2VycyIsImZpbmRBbmRDb3VudEFsbCIsImluY2x1ZGUiLCJwb3N0cyIsImFzIiwiam9icyIsIm9yZGVyIiwib2Zmc2V0IiwibGltaXQiLCJqc29uIiwiZGF0YSIsInJvd3MiLCJ0b3RhbCIsImNvdW50IiwicG9zdCIsInNsdWciLCJlbWFpbCIsInVzZXJJZCIsIm5ld1VzZXIiLCJjcmVhdGUiLCJtZXNzYWdlIiwicHV0IiwiZW5kIiwicGF0Y2giLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQs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SUFBSWtFLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0QsQ0EvRGEsQ0FBaEI7QUFpRWU5QixzRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFQSwrQjs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXBpXFx1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBkZXZlbG9wbWVudDoge1xyXG4gICAgdXNlcm5hbWU6IHByb2Nlc3MuZW52LkRCX1VTRVIsXHJcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuREJfUEFTUyxcclxuICAgIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5EQl9OQU1FLFxyXG4gICAgaG9zdDogcHJvY2Vzcy5lbnYuREJfSE9TVCxcclxuICAgIGRpYWxlY3Q6ICdteXNxbCcsXHJcbiAgICBsb2dnaW5nOiBmYWxzZSxcclxuICB9LFxyXG4gIHRlc3Q6IHtcclxuICAgIHVzZXJuYW1lOiBwcm9jZXNzLmVudi5EQl9VU0VSLFxyXG4gICAgcGFzc3dvcmQ6IHByb2Nlc3MuZW52LkRCX1BBU1MsXHJcbiAgICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuREJfTkFNRSxcclxuICAgIGhvc3Q6IHByb2Nlc3MuZW52LkRCX0hPU1QsXHJcbiAgICBkaWFsZWN0OiAnbXlzcWwnLFxyXG4gICAgbG9nZ2luZzogZmFsc2UsXHJcbiAgfSxcclxuICBwcm9kdWN0aW9uOiB7XHJcbiAgICB1c2VybmFtZTogcHJvY2Vzcy5lbnYuREJfVVNFUixcclxuICAgIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5EQl9QQVNTLFxyXG4gICAgZGF0YWJhc2U6IHByb2Nlc3MuZW52LkRCX05BTUUsXHJcbiAgICBob3N0OiBwcm9jZXNzLmVudi5EQl9IT1NULFxyXG4gICAgZGlhbGVjdDogJ215c3FsJyxcclxuICAgIGxvZ2dpbmc6IGZhbHNlLFxyXG4gIH0sXHJcbn07XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcclxuY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XHJcbmNvbnN0IGJhc2VuYW1lID0gcGF0aC5iYXNlbmFtZShfX2ZpbGVuYW1lKTtcclxuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JztcclxuY29uc3QgY29uZmlnID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnLy4uL2NvbmZpZy9jb25maWcuanMnKVtlbnZdO1xyXG5jb25zdCBkYiA9IHt9O1xyXG5cclxuLyogQ3VzdG9tIGhhbmRsZXIgZm9yIHJlYWRpbmcgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAqL1xyXG5jb25zdCBtb2RlbHMgPSBwcm9jZXNzLmN3ZCgpICsgJy9kYi9tb2RlbHMvJyB8fCBfX2Rpcm5hbWU7XHJcblxyXG5sZXQgc2VxdWVsaXplO1xyXG5pZiAoY29uZmlnLnVzZV9lbnZfdmFyaWFibGUpIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKHByb2Nlc3MuZW52W2NvbmZpZy51c2VfZW52X3ZhcmlhYmxlXSwgY29uZmlnKTtcclxufSBlbHNlIHtcclxuICBzZXF1ZWxpemUgPSBuZXcgU2VxdWVsaXplKFxyXG4gICAgY29uZmlnLmRhdGFiYXNlLFxyXG4gICAgY29uZmlnLnVzZXJuYW1lLFxyXG4gICAgY29uZmlnLnBhc3N3b3JkLFxyXG4gICAgY29uZmlnLFxyXG4gICk7XHJcbn1cclxuLyogZnMucmVhZGRpclN5bmMoX19kaXJuYW1lKSAqL1xyXG5mcy5yZWFkZGlyU3luYyhtb2RlbHMpXHJcbiAgLmZpbHRlcihmaWxlID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGZpbGUuaW5kZXhPZignLicpICE9PSAwICYmIGZpbGUgIT09IGJhc2VuYW1lICYmIGZpbGUuc2xpY2UoLTMpID09PSAnLmpzJ1xyXG4gICAgKTtcclxuICB9KVxyXG4gIC5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgLyogY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbXCJpbXBvcnRcIl0ocGF0aC5qb2luKF9fZGlybmFtZSwgZmlsZSkpOyAqL1xyXG4gICAgY29uc3QgbW9kZWwgPSBzZXF1ZWxpemVbJ2ltcG9ydCddKHBhdGguam9pbihtb2RlbHMsIGZpbGUpKTtcclxuICAgIGRiW21vZGVsLm5hbWVdID0gbW9kZWw7XHJcbiAgfSk7XHJcblxyXG5PYmplY3Qua2V5cyhkYikuZm9yRWFjaChtb2RlbE5hbWUgPT4ge1xyXG4gIGlmIChkYlttb2RlbE5hbWVdLmFzc29jaWF0ZSkge1xyXG4gICAgZGJbbW9kZWxOYW1lXS5hc3NvY2lhdGUoZGIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgeyB2ZXJpZnlUb2tlbiB9IGZyb20gJy4vdXRpbHMnO1xyXG5cclxuY29uc3QgbWlkZGxld2FyZSA9IG5leHRDb25uZWN0KCk7XHJcblxyXG4vKiBTYW1wbGUgdXNpbmcgbWlkZGxld2FyZSAqL1xyXG4vKiBtaWRkbGV3YXJlLnVzZShkYXRhYmFzZSkudXNlKHNlc3Npb24pLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpLnVzZShwYXNzcG9ydC5zZXNzaW9uKCkpOyAqL1xyXG5cclxuLyogU2V0IHJlc3RyaWN0ZWQgcHVibGljIGFjY2VzcyAvIHB1dCBhbnkgYXBpIGFjY2VzcyB0aGF0IGlzIHJlc3RyaWN0ZWQgaW4gaGVyZSAqL1xyXG5jb25zdCByZXN0cmljdGVkID0gWycvYXBpL3Bvc3QvW3NsdWddJywgJy9hcGkvam9iL1tzbHVnXSddO1xyXG5cclxuLypcclxuICogQHBhcmFtcyB7cmVxdWVzdCwgcmVzcG9uc2UsIGNhbGxiYWNrfSBkZWZhdWx0IFJlcXVlc3QgYW5kIFJlc3BvbnNlXHJcbiAqIEByZXR1cm4ge29iamVjdH0gb2JqZWN0IGlmIHRydWUsIHJlc3BvbnNlIG1lc3NhZ2UgaWYgZmFsc2UgYW5kIGNvbnRpbnVlXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlLnVzZShhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBsZXQgYXV0aEhlYWRlciA9IHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24gfHwgJyc7XHJcbiAgbGV0IHVzZXIgPSB7fTtcclxuXHJcbiAgaWYgKCFyZXN0cmljdGVkLmluY2x1ZGVzKHJlcS51cmwpICYmICFhdXRoSGVhZGVyKSB7XHJcbiAgICByZXR1cm4gbmV4dCgpO1xyXG4gIH1cclxuICBpZiAoYXV0aEhlYWRlcikge1xyXG4gICAgbGV0IHNlc3Npb25JRCA9IGF1dGhIZWFkZXIuc3BsaXQoJyAnKVsxXTtcclxuICAgIGlmIChzZXNzaW9uSUQpIHtcclxuICAgICAgdXNlciA9IHZlcmlmeVRva2VuKHNlc3Npb25JRCk7XHJcbiAgICAgIGlmICh1c2VyKSB7XHJcbiAgICAgICAgLyogQ291bGQgcHV0IGNoZWNrIGFnYWluc3QgdXNlcnMgdGFibGVzIGluIGRhdGFiYXNlICBVc2VyLmZpbmQoe2VtYWlsOnVzZXIuZW1haWx9KSAqL1xyXG4gICAgICAgIHJlcS51c2VyID0gdXNlcjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDQwMTtcclxuICAgICAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgZXJyb3I6ICdFeHBpcmVkJyxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICAgIHJldHVybiByZXMuc2VuZCh7XHJcbiAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgIGVycm9yOiAnV3JvbmcgVG9rZW4nLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSA0MDE7XHJcbiAgICByZXR1cm4gcmVzLnNlbmQoe1xyXG4gICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgIGVycm9yOiAnVW5hdXRob3JpemVkJyxcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gbmV4dCgpO1xyXG59KTtcclxuIiwiaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LkpXVF9LRVk7XHJcblxyXG4vKlxyXG4gKiBAcGFyYW1zIHtqd3RUb2tlbn0gZXh0cmFjdGVkIGZyb20gY29va2llc1xyXG4gKiBAcmV0dXJuIHtvYmplY3R9IG9iamVjdCBvZiBleHRyYWN0ZWQgdG9rZW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUb2tlbihqd3RUb2tlbikge1xyXG4gIHRyeSB7XHJcbiAgICByZXR1cm4gand0LnZlcmlmeShqd3RUb2tlbiwgU0VDUkVUX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgY29uc29sZS5sb2coJ2U6JywgZSk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2VcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3Qgb2YgcGFyc2Ugand0IGNvb2tpZSBkZWNvZGUgb2JqZWN0XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXBwQ29va2llcyhyZXEpIHtcclxuICBjb25zdCBwYXJzZWRJdGVtcyA9IHt9O1xyXG4gIGlmIChyZXEuaGVhZGVycy5jb29raWUpIHtcclxuICAgIGNvbnN0IGNvb2tpZXNJdGVtcyA9IHJlcS5oZWFkZXJzLmNvb2tpZS5zcGxpdCgnOyAnKTtcclxuICAgIGNvb2tpZXNJdGVtcy5mb3JFYWNoKGNvb2tpZXMgPT4ge1xyXG4gICAgICBjb25zdCBwYXJzZWRJdGVtID0gY29va2llcy5zcGxpdCgnPScpO1xyXG4gICAgICBwYXJzZWRJdGVtc1twYXJzZWRJdGVtWzBdXSA9IGRlY29kZVVSSShwYXJzZWRJdGVtWzFdKTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcGFyc2VkSXRlbXM7XHJcbn1cclxuXHJcbi8qXHJcbiAqIEBwYXJhbXMge3JlcXVlc3R9IGV4dHJhY3RlZCBmcm9tIHJlcXVlc3QgcmVzcG9uc2UsIHtzZXRMb2NhbGhvc3R9IHlvdXIgbG9jYWxob3N0IGFkZHJlc3NcclxuICogQHJldHVybiB7b2JqZWN0fSBvYmplY3RzIG9mIHByb3RvY29sLCBob3N0IGFuZCBvcmlnaW5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhYnNvbHV0ZVVybChyZXEsIHNldExvY2FsaG9zdCkge1xyXG4gIHZhciBwcm90b2NvbCA9ICdodHRwczonO1xyXG4gIHZhciBob3N0ID0gcmVxXHJcbiAgICA/IHJlcS5oZWFkZXJzWyd4LWZvcndhcmRlZC1ob3N0J10gfHwgcmVxLmhlYWRlcnNbJ2hvc3QnXVxyXG4gICAgOiB3aW5kb3cubG9jYXRpb24uaG9zdDtcclxuICBpZiAoaG9zdC5pbmRleE9mKCdsb2NhbGhvc3QnKSA+IC0xKSB7XHJcbiAgICBpZiAoc2V0TG9jYWxob3N0KSBob3N0ID0gc2V0TG9jYWxob3N0O1xyXG4gICAgcHJvdG9jb2wgPSAnaHR0cDonO1xyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgcHJvdG9jb2w6IHByb3RvY29sLFxyXG4gICAgaG9zdDogaG9zdCxcclxuICAgIG9yaWdpbjogcHJvdG9jb2wgKyAnLy8nICsgaG9zdCxcclxuICAgIHVybDogcmVxLFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IG5leHRDb25uZWN0IGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmNvbnN0IG1vZGVscyA9IHJlcXVpcmUoJy4uLy4uLy4uL2RiL21vZGVscy9pbmRleCcpO1xyXG5pbXBvcnQgbWlkZGxld2FyZSBmcm9tICcuLi8uLi8uLi9taWRkbGV3YXJlL2F1dGgnO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IG5leHRDb25uZWN0KClcclxuICAvLyBNaWRkbGV3YXJlXHJcbiAgLnVzZShtaWRkbGV3YXJlKVxyXG4gIC8vIEdldCBtZXRob2RcclxuICAuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBxdWVyeTogeyBuZXh0UGFnZSB9LFxyXG4gICAgICBtZXRob2QsXHJcbiAgICAgIGJvZHksXHJcbiAgICB9ID0gcmVxO1xyXG5cclxuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgbW9kZWxzLnVzZXJzLmZpbmRBbmRDb3VudEFsbCh7XHJcbiAgICAgIGluY2x1ZGU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RlbDogbW9kZWxzLnBvc3RzLFxyXG4gICAgICAgICAgYXM6ICdwb3N0cycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtb2RlbDogbW9kZWxzLmpvYnMsXHJcbiAgICAgICAgICBhczogJ2pvYnMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIG9yZGVyOiBbXHJcbiAgICAgICAgLy8gV2lsbCBlc2NhcGUgdGl0bGUgYW5kIHZhbGlkYXRlIERFU0MgYWdhaW5zdCBhIGxpc3Qgb2YgdmFsaWQgZGlyZWN0aW9uIHBhcmFtZXRlcnNcclxuICAgICAgICBbJ2lkJywgJ0RFU0MnXSxcclxuICAgICAgXSxcclxuICAgICAgb2Zmc2V0OiBuZXh0UGFnZSA/ICtuZXh0UGFnZSA6IDAsXHJcbiAgICAgIGxpbWl0OiA1LFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVzLnN0YXR1c0NvZGUgPSAyMDA7XHJcbiAgICByZXMuanNvbih7XHJcbiAgICAgIHN0YXR1czogJ3N1Y2Nlc3MnLFxyXG4gICAgICBkYXRhOiB1c2Vycy5yb3dzLFxyXG4gICAgICB0b3RhbDogdXNlcnMuY291bnQsXHJcbiAgICAgIG5leHRQYWdlOiArbmV4dFBhZ2UgKyA1LFxyXG4gICAgfSk7XHJcbiAgfSlcclxuICAvLyBQb3N0IG1ldGhvZFxyXG4gIC5wb3N0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgeyBib2R5IH0gPSByZXE7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJlcS5xdWVyeTtcclxuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGVtYWlsLCBwYXNzd29yZCB9ID0gYm9keTtcclxuICAgIGNvbnN0IHVzZXJJZCA9IHNsdWc7XHJcbiAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgbW9kZWxzLnVzZXJzLmNyZWF0ZSh7XHJcbiAgICAgIHVzZXJuYW1lLFxyXG4gICAgICBlbWFpbCxcclxuICAgICAgcGFzc3dvcmQsXHJcbiAgICAgIHN0YXR1czogMSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcclxuICAgICAgc3RhdHVzOiAnc3VjY2VzcycsXHJcbiAgICAgIG1lc3NhZ2U6ICdkb25lJyxcclxuICAgICAgZGF0YTogbmV3VXNlcixcclxuICAgIH0pO1xyXG4gIH0pXHJcbiAgLy8gUHV0IG1ldGhvZFxyXG4gIC5wdXQoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMuZW5kKCdtZXRob2QgLSBwdXQnKTtcclxuICB9KVxyXG4gIC8vIFBhdGNoIG1ldGhvZFxyXG4gIC5wYXRjaChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcignVGhyb3dzIG1lIGFyb3VuZCEgRXJyb3IgY2FuIGJlIGNhdWdodCBhbmQgaGFuZGxlZC4nKTtcclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==