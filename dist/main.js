/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Asteroid; });\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar DEFAULTS = {\n  COLOR: 'yellow',\n  RADIUS: 20,\n  SPEED: 1\n};\n\nvar Asteroid =\n/*#__PURE__*/\nfunction (_MovingObject) {\n  _inherits(Asteroid, _MovingObject);\n\n  function Asteroid(options) {\n    _classCallCheck(this, Asteroid);\n\n    options.color = DEFAULTS.COLOR;\n    options.pos = options.pos || options.game.randomPosition();\n    options.radius = DEFAULTS.RADIUS;\n    options.vel = options.vel || _util__WEBPACK_IMPORTED_MODULE_2__[\"default\"].randomVec(DEFAULTS.SPEED);\n    options.isWrappable = true;\n    return _possibleConstructorReturn(this, _getPrototypeOf(Asteroid).call(this, options));\n  }\n\n  _createClass(Asteroid, [{\n    key: \"collideWith\",\n    value: function collideWith(otherObject) {\n      if (otherObject instanceof _ship__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n        otherObject.relocate();\n      } else if (otherObject instanceof _bullet__WEBPACK_IMPORTED_MODULE_4__[\"default\"]) {\n        this.game.remove(this);\n      }\n    }\n  }]);\n\n  return Asteroid;\n}(_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"MovingObject\"]);\n\n\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Bullet =\n/*#__PURE__*/\nfunction (_MovingObject) {\n  _inherits(Bullet, _MovingObject);\n\n  function Bullet(options) {\n    _classCallCheck(this, Bullet);\n\n    options.color = Bullet.COLOR;\n    options.radius = Bullet.RADIUS;\n    options.vel = _util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scale(_util__WEBPACK_IMPORTED_MODULE_1__[\"default\"].direction(options.vel), 10);\n    options.isWrappable = Bullet.isWrappable;\n    return _possibleConstructorReturn(this, _getPrototypeOf(Bullet).call(this, options));\n  }\n\n  return Bullet;\n}(_moving_object__WEBPACK_IMPORTED_MODULE_0__[\"MovingObject\"]);\n\nBullet.COLOR = \"yellow\";\nBullet.RADIUS = 10;\nBullet.SPEED = 10;\nBullet.isWrappable = false; // Commenting this back in causes righthand since of instanceof is not callable bug\n// Bullet.prototype.collideWith = function(obj) {\n//   if (obj instanceof Asteroid) {\n//     this.game.remove(obj);\n//   } else {\n//     return;\n//   }\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bullet);\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar DEFAULTS = {\n  DIM_X: 800,\n  DIM_Y: 600,\n  NUM_ASTEROIDS: 15\n};\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.asteroids = [];\n    this.addAsteroids();\n    this.bullets = [];\n    this.ship = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n      pos: this.randomPosition(),\n      game: this\n    });\n  }\n\n  _createClass(Game, [{\n    key: \"add\",\n    value: function add(obj) {\n      if (obj instanceof _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        this.asteroids.push(obj);\n      } else if (obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n        this.bullets.push(obj);\n      }\n    }\n  }, {\n    key: \"addAsteroids\",\n    value: function addAsteroids() {\n      for (var i = 0; i < DEFAULTS.NUM_ASTEROIDS; i++) {\n        var ast = new _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          pos: this.randomPosition(),\n          game: this\n        });\n        this.add(ast);\n      }\n    }\n  }, {\n    key: \"allObjects\",\n    value: function allObjects() {\n      var allObjects = [].concat(this.asteroids, this.ship, this.bullets);\n      return allObjects;\n    }\n  }, {\n    key: \"checkCollisions\",\n    value: function checkCollisions() {\n      var allObjects = this.allObjects();\n\n      for (var i = 0; i < allObjects.length; i++) {\n        for (var j = i + 1; j < allObjects.length; j++) {\n          if (allObjects[i].isCollidedWith(allObjects[j])) {\n            allObjects[i].collideWith(allObjects[j]);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.clearRect(0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);\n      var img = document.getElementById(\"source\");\n      ctx.drawImage(img, 0, 0, DEFAULTS.DIM_X, DEFAULTS.DIM_Y);\n      this.allObjects().forEach(function (obj) {\n        return obj.draw(ctx);\n      });\n    }\n  }, {\n    key: \"isOutOfBounds\",\n    value: function isOutOfBounds(pos) {\n      return pos[0] > DEFAULTS.DIM_X || pos[1] > DEFAULTS.DIM_Y;\n    }\n  }, {\n    key: \"moveObjects\",\n    value: function moveObjects(delta) {\n      this.allObjects().forEach(function (obj) {\n        return obj.move(delta);\n      });\n    }\n  }, {\n    key: \"randomPosition\",\n    value: function randomPosition() {\n      var randX = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_X));\n      var randY = Math.floor(Math.random() * Math.floor(DEFAULTS.DIM_Y));\n      return [randX, randY];\n    }\n  }, {\n    key: \"remove\",\n    value: function remove(obj) {\n      if (obj instanceof _asteroid__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n        this.asteroids.splice(this.asteroids.indexOf(obj), 1);\n      } else if (obj instanceof _bullet__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n        this.bullets.splice(this.bullets.indexOf(obj), 1);\n      }\n    }\n  }, {\n    key: \"step\",\n    value: function step(ctx) {\n      this.moveObjects(ctx);\n      this.checkCollisions();\n    }\n  }, {\n    key: \"wrap\",\n    value: function wrap(pos) {\n      var newPos = [pos[0], pos[1]];\n\n      if (pos[0] > DEFAULTS.DIM_X) {\n        newPos[0] = newPos[0] % DEFAULTS.DIM_X;\n      } else if (pos[0] < 0) {\n        newPos[0] = newPos[0] + DEFAULTS.DIM_X;\n      }\n\n      if (pos[1] > DEFAULTS.DIM_Y) {\n        newPos[1] = newPos[1] % DEFAULTS.DIM_Y;\n      } else if (pos[1] < 0) {\n        newPos[1] = newPos[1] + DEFAULTS.DIM_Y;\n      }\n\n      return newPos;\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameView; });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar GameView =\n/*#__PURE__*/\nfunction () {\n  function GameView(ctx) {\n    _classCallCheck(this, GameView);\n\n    this.lastTime = 0;\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.ctx = ctx;\n    this.lastTime;\n  }\n\n  _createClass(GameView, [{\n    key: \"animate\",\n    value: function animate(time) {\n      var timeDelta = time - this.lastTime;\n      this.game.step(timeDelta);\n      this.game.draw(this.ctx);\n      this.lastTime = time;\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }, {\n    key: \"bindKeyHandlers\",\n    value: function bindKeyHandlers() {\n      // keymaster exposes a global method, key(key, callback) that triggers the callback when the key is pressed\n      var ship = this.game.ship;\n      key(\"w\", function () {\n        ship.power([0, -1]);\n      });\n      key(\"a\", function () {\n        ship.power([-1, 0]);\n      });\n      key(\"s\", function () {\n        ship.power([0, 1]);\n      });\n      key(\"d\", function () {\n        ship.power([1, 0]);\n      });\n      key(\"space\", function () {\n        ship.fireBullet();\n        return false;\n      });\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.bindKeyHandlers();\n      this.lastTime = 0;\n      requestAnimationFrame(this.animate.bind(this));\n    }\n  }]);\n\n  return GameView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _asteroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n\n\n\n\nconsole.log(\"Index file loading properly\");\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('game-canvas');\n  var ctx = canvas.getContext('2d');\n  var gameView = new _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"](ctx);\n  gameView.start();\n  return Promise.resolve(\"Dummy response to keep console quiet\");\n});\nwindow.MovingObject = _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"MovingObject\"];\nwindow.Asteroid = _asteroid__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Game = _game__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.GameView = _game_view__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nwindow.Ship = _ship__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! exports provided: MovingObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MovingObject\", function() { return MovingObject; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar MovingObject =\n/*#__PURE__*/\nfunction () {\n  function MovingObject(options) {\n    _classCallCheck(this, MovingObject);\n\n    this.color = options.color;\n    this.game = options.game;\n    this.isWrappable = options.isWrappable;\n    this.pos = options.pos;\n    this.radius = options.radius;\n    this.vel = options.vel;\n  }\n\n  _createClass(MovingObject, [{\n    key: \"collideWith\",\n    value: function collideWith(otherObject) {}\n  }, {\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = this.color;\n      ctx.beginPath();\n      var _ref = [this.pos[0], this.pos[1]],\n          x = _ref[0],\n          y = _ref[1];\n      ctx.arc(x, y, this.radius, 0, 2 * Math.PI);\n      ctx.fill();\n    }\n  }, {\n    key: \"isCollidedWith\",\n    value: function isCollidedWith(otherObject) {\n      var sumRadii = otherObject.radius + this.radius;\n      return _util__WEBPACK_IMPORTED_MODULE_0__[\"default\"].distance(this.pos, otherObject.pos) < sumRadii;\n    }\n  }, {\n    key: \"move\",\n    value: function move() {\n      var timeDelta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n      var _ref2 = [this.pos[0], this.pos[1]],\n          posX = _ref2[0],\n          posY = _ref2[1];\n      var _ref3 = [this.vel[0], this.vel[1]],\n          velX = _ref3[0],\n          velY = _ref3[1];\n      var newPos = [posX + velX * timeDelta / 20, posY + velY * timeDelta / 20];\n\n      if (this.game.isOutOfBounds(newPos)) {\n        if (this.isWrappable) {\n          this.pos = this.game.wrap(newPos);\n          return;\n        } else {\n          this.game.remove(this);\n          return;\n        }\n      } else {\n        this.pos = newPos;\n      }\n    }\n  }]);\n\n  return MovingObject;\n}();\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ship; });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./src/util.js\");\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n/* harmony import */ var _bullet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Ship =\n/*#__PURE__*/\nfunction (_MovingObject) {\n  _inherits(Ship, _MovingObject);\n\n  function Ship(options) {\n    _classCallCheck(this, Ship);\n\n    options.vel = [0, 0];\n    options.radius = Ship.RADIUS;\n    options.color = Ship.COLOR;\n    options.isWrappable = true;\n    return _possibleConstructorReturn(this, _getPrototypeOf(Ship).call(this, options));\n  }\n\n  _createClass(Ship, [{\n    key: \"fireBullet\",\n    value: function fireBullet() {\n      var bullet = new _bullet__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n        vel: this.vel.slice(),\n        pos: this.pos,\n        game: this.game\n      });\n      this.game.add(bullet);\n    }\n  }, {\n    key: \"power\",\n    value: function power(impulse) {\n      var newVel = [this.vel[0] + impulse[0], this.vel[1] + impulse[1]];\n      this.vel = newVel;\n    }\n  }, {\n    key: \"relocate\",\n    value: function relocate() {\n      this.pos = this.game.randomPosition();\n      this.vel = [0, 0];\n    }\n  }]);\n\n  return Ship;\n}(_moving_object__WEBPACK_IMPORTED_MODULE_1__[\"MovingObject\"]);\n\n\n\nShip.prototype.relocate = function () {\n  this.pos = this.game.randomPosition();\n  this.vel = [0, 0];\n};\n\nShip.RADIUS = 20;\nShip.COLOR = 'rgb(22.9%, 20.4%, 46.4%)';\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Util = {\n  direction: function direction(vec) {\n    if (Math.abs(vec[0]) > 1) vec[0] /= vec[0];\n    if (Math.abs(vec[1]) > 1) vec[1] /= vec[1];\n    return vec;\n  },\n  distance: function distance(p1, p2) {\n    ;\n    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));\n  },\n  randomVec: function randomVec(length) {\n    var deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  scale: function scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Util);\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });