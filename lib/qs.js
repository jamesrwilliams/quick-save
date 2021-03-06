(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("qs", [], factory);
	else if(typeof exports === 'object')
		exports["qs"] = factory();
	else
		root["qs"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var qs = function () {
  function qs(args) {
    _classCallCheck(this, qs);

    this.options = {
      storage: 'local',
      prefix: 'qs_',
      attribute: 'qs',
      debug: false
    };

    this.storage;

    this.initialize(args);
  }

  /**
   * Initialise the script
   */


  _createClass(qs, [{
    key: 'initialize',
    value: function initialize(args) {
      var _this = this;

      // Parse user arguments
      this.options = Object.assign(this.options, args);

      // Determine the storage vector
      if (this.options.storage === 'local') {

        this.storage = window.localStorage;
      } else if (this.options.storage === 'session') {

        this.storage = window.sessionStorage;
      } else {

        console.error('QS - Unknown storage option. Please use either "session" or "local".');
      }

      this.$elms = document.querySelectorAll('[data-' + this.options.attribute + ']');

      for (var i = 0; i < this.$elms.length; i++) {

        var $elm = this.$elms[i];

        if (!$elm.name && this.options.debug === true) {

          console.warn('QS - Form element needs a name attribute.', $elm);
        } else {

          var content = this.readFromStorage($elm);

          if (content !== '') {

            $elm.value = JSON.parse(content);
          }

          $elm.addEventListener('change', function (event) {
            return _this.writeToStorage(event.srcElement);
          });
        }
      }
    }

    /**
     * Wrapper for writing to designated storage system.
     * @param  {object} $elm  HTML Node object of the field that has changed.
     * @return {undefined}
     */

  }, {
    key: 'writeToStorage',
    value: function writeToStorage($elm) {

      this.storage.setItem(this.getStorageKey($elm), JSON.stringify($elm.value));
    }

    /**
     * Load field data from storage.
     * @param  {object} $elm HTML Node object of the field that has changed.
     * @return {object}      JSON encoded content from provided elements storage.
     */

  }, {
    key: 'readFromStorage',
    value: function readFromStorage($elm) {

      var lsContent = this.storage.getItem(this.getStorageKey($elm));

      return lsContent;
    }

    /**
     * Returns the storage key using the provided element and the specified prefix.
     * @param  {object} $elm  HTML Node object of a field.
     * @return {string}       Storage key string
     */

  }, {
    key: 'getStorageKey',
    value: function getStorageKey($elm) {

      var lsKey = this.options.prefix + $elm.tagName.toLowerCase() + '#' + $elm.name;

      return lsKey;
    }

    /**
     * Method that clears all storage data for provided key
     * @return {int} Number of removed elements.
     */

  }, {
    key: 'removeFromStorage',
    value: function removeFromStorage(key) {

      if (key) {

        this.storage.removeItem(key);
      }
    }

    /**
     * Clears the current storage vector
     * @return {undefined}
     */

  }, {
    key: 'removeAll',
    value: function removeAll() {

      this.storage.clear();
    }
  }]);

  return qs;
}();

exports.default = qs;
;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=qs.js.map