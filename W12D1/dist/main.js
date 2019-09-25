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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nfunction Asteroid(options) {\n\n  options.vel = utils.randomVec(5);\n  options.color = \"#FFFFFF\";\n  options.radius = 30;\n\n  MovingObject.call(this, options) //  super(options),  this = new MovingObject(options);\n}\nutils.inherits(MovingObject, Asteroid); // Asteroid < MovingObject\n\n// let a = new Asteroid({ pos: [12, 24] ..})\n\n\n// a = { { pos: [12, 24] \n//         vel: util.randomVec(5);}\n\n//     }\n\n// Asteroid {\n//   MovingObject{\n//     \n//       // this.options = options;\n//       let self = this\n\n//       const { pos, vel, radius, color } = options;\n//       //  const pos = options.pos;\n\n//       this.pos = pos; //@pos = pos\n//       this.vel = vel; //@vel = vel\n//       this.radius = radius; //@radius = radius\n//       this.color = color; //@color = color \n//     \n//   }\n// }\n\nmodule.exports = Asteroid\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game() {\n  this.dimX = window.innerWidth;\n  this.dimY = window.innerHeight;\n  this.numAstroids = 10;\n  this.asteroids = [];\n  this.addAsteroids();\n};\n\nGame.prototype.addAsteroids = function() {\n\n  for (let i = 0; i < this.numAstroids; i += 1) {\n    let junk = new Asteroid(this.randomPosition())\n    this.asteroids.push(junk);\n  }\n}\n\nGame.prototype.randomPosition = function() {\n  const posX = (Math.random() * (this.dimX - 0) + 0);\n  const posY = (Math.random() * (this.dimY - 0) + 0);\n  return {pos: [posX, posY]};\n}\n\nGame.prototype.draw = function(ctx) {\n  this.dimX = window.innerWidth;\n  this.dimY = window.innerHeight;\n  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);\n    // debugger\n  this.asteroids.forEach(asteroid => {\n    asteroid.draw(ctx);\n  });\n}\n\n// Game.prototype.moveObjects = function() {\n//   this.asteroidsPos.forEach(pos => {\n//     let pos = { pos: pos };\n//     let asteroid = new Asteroid(pos);\n//     asteroid.move(ctx);\n//   });\n// }\n\n\nmodule.exports = Game;\n\n\n// let dx = (Math.random() * 2) - 1;\n// let dy = (Math.random() * 2) - 1;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\")\n\n\nfunction GameView(Game, ctx) {\n  this.game = Game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n  setInterval(()=>{\n  // this.game.moveObjects();\n  this.game.draw(this.ctx);\n  }, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("console.log(\"webpack is working\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.MovingObject = MovingObject;\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function() {\n  \n  const canvasEl = document.getElementById('game-canvas');\n  canvasEl.height = window.innerHeight;\n  canvasEl.width = window.innerWidth;\n  const ctx = canvasEl.getContext(\"2d\");\n\n   const mo = new MovingObject({\n    pos: [30, 30],\n    vel: [10, 10],\n    radius: 30,\n    color: \"#00FF00\"\n  });\n\n  mo.draw(ctx);\n\n  const asteroid = new Asteroid ({pos: [100, 100]});\n\n  asteroid.draw(ctx);\n\n\n  const game1= new Game();\n  // newGame.draw(ctx); \n\n  const newGame = new GameView(game1, ctx);\n  newGame.start();\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const utils = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\nfunction MovingObject(options) {\n  // this.options = options;\n\n  const { pos, vel, radius, color } = options;\n  //  const pos = options.pos;\n\n  this.pos = pos; //@pos = pos\n  this.vel = vel; //@vel = vel\n  this.radius = radius; //@radius = radius\n  this.color = color; //@color = color \n\n \n}\n\nMovingObject.prototype.draw = function(ctx){\n  ctx.fillStyle = this.color\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n}\n\n\nmodule.exports = MovingObject;\n\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Utils = {\n\n    inherits: function (Parent, Child){\n        const Surrogate = function (){};\n        Surrogate.prototype = Parent.prototype;\n        Child.prototype = new Surrogate();\n        Child.prototype.constructor = Child;\n    },\n\n    randomVec: function(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Utils.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n\n    scale: function (vec, m) {\n    return [vec[0] * m, vec[1] * m];\n    }\n  \n}\n\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });