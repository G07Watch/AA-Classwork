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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DomNodeCollection; });\nclass DomNodeCollection {\n  constructor(collection) {\n    this.collection = collection;\n    //return this.collection; somehow return it\n    this.eventCallbacks = [];\n  }\n\n  html(str) {\n    if (str) {\n      this.collection.forEach(node => {\n        node.innerHTML = str;\n      });\n    } else {\n      return this.collection[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.collection.forEach(node => {\n      node.innerHTML = \"\";\n    });\n  }\n\n  append(arg) {\n    if (arg instanceof DomNodeCollection) {\n      this.collection.forEach(node => {\n        arg.collection.forEach(argNode => {\n          node.innerHTML += argNode.outerHTML;\n        });\n      });\n    } else if (arg instanceof HTMLElement) {\n      this.collection.forEach(node => {\n        node.innerHTML += arg.outerHTML;\n      });\n    } else if (typeof arg === \"string\") {\n      this.collection.forEach(node => {\n        node.innerHTML += arg;\n      });\n    }\n  }\n\n  attr(attributeName, value) {\n\n    if (value || typeof (value) === 'string') {\n      this.collection.forEach(node => {\n        node.setAttribute(attributeName, value)\n      })\n    } else {\n      return this.collection[0].getAttribute(attributeName);\n    }\n  }\n\n  addClass(className) {\n\n    let currentClasses = this.attr(\"class\");\n    currentClasses = currentClasses ? currentClasses + \" \" : \"\";\n    this.attr(\"class\", currentClasses + className);\n\n  }\n\n  removeClass(className) {\n    let currentClasses = this.attr(\"class\");\n    if (currentClasses.split(\" \").includes(className)) {\n      let keptClasses = currentClasses.replace(className, \"\");\n      if (keptClasses === \"\") {\n        this.collection.forEach(node => { node.removeAttribute(\"class\") })\n\n      } else {\n        if (keptClasses[0] === \" \") { keptClasses = keptClasses.slice(1) }\n        if (keptClasses[keptClasses.length - 1] === \" \") {\n          keptClasses = keptClasses.slice(0, keptClasses.length - 1)\n        }\n        this.attr(\"class\", keptClasses);\n      }\n    }\n  }\n\n  children(selector) {\n    let childs = [];\n    if (selector) {\n      this.collection.forEach(node => {\n        let nodeChilds = Array.from(node.querySelectorAll(selector))\n        childs = childs.concat(nodeChilds);\n      });\n    } else {\n      this.collection.forEach(node => {\n        childs = childs.concat(Array.from(node.children));\n      });\n    }\n\n    return new DomNodeCollection(childs);\n  }\n\n  parent(selector) {\n\n    let parents = [];\n    this.collection.forEach(  node => {\n      parents.push(node.parentElement);\n    });\n\n    if (selector) {\n      parents = parents.filter(parent => parent.matches(selector))\n    }\n\n    return new DomNodeCollection(parents);\n  }\n  \n  find(selector) {\n    return this.children(selector);\n  }\n\n  remove(selector) {\n    if (selector) {\n        let removed = this.collection.filter(node => node.matches(selector));\n        this.collection = this.collection.filter(node => !removed.includes(node));\n        removed.forEach(node => { \n            node.innerHTML = \"\";\n            node.outerHTML = \"\"; \n        });\n    } else {\n        this.collection.forEach(node => {\n            node.innerHTML = \"\";\n            node.outerHTML = \"\";\n        });\n        this.collection = [];\n    }\n  }\n\n  on(event, callback) {\n    this.eventCallbacks.push(callback);\n    this.collection.forEach(node => {\n        node.addEventListener(event, callback);\n    });\n  }\n\n  off(event, callback) {\n    if (this.eventCallbacks.includes(callback)) {\n        this.collection.forEach(node => {\n            node.removeEventListener(event, callback);\n        });\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\n\nlet queue = [\n  function () { console.log(\"HERE\") },\n  function () { console.log(\"WE\") },\n  function() { console.log(\"ARE!\") }\n]\n\nwindow.$l = function (arg) {\n  let nodeList;\n  let domNodeCollection;\n\n  if (arg instanceof Function) {\n    queue.push(arg);\n  }\n  if (arg instanceof HTMLElement) {\n    nodeList = [arg];\n    domNodeCollection = new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nodeList);\n  } else if (typeof arg === \"string\") {\n    const elements = document.querySelectorAll(arg);\n    nodeList = Array.from(elements);\n    domNodeCollection = new _dom_node_collection__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nodeList);\n  }\n\n  return domNodeCollection;\n}\n\nwindow.$l.extend = function (...objects) {\n    \n}\n\nwindow.addEventListener('DOMContentLoaded', event => {\n    queue.forEach(fn => fn());\n    queue = [];\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });