module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PersianRug/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__("./components/PersianRug/styles.js");
var _jsxFileName = '/Users/ads1018/Sites/jakespersianrug/components/PersianRug/index.js';



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var price = _ref.price;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* Container */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 4
      }
    },
    'On February 7th, 2018, Jake Burden bought a persian rug for 376.344 Spank.',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    'That rug is now worth:',
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__styles__["b" /* Price */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      '$',
      price.toFixed(2)
    )
  );
});

/***/ }),

/***/ "./components/PersianRug/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Price; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_glamorous__);


var Container = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div({
  textAlign: 'center',
  color: '#ffffff',
  fontSize: '24px',
  lineHeight: '40px',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
});

var Price = __WEBPACK_IMPORTED_MODULE_0_glamorous___default.a.div({
  fontWeight: 'bold',
  paddingTop: '20px',
  fontSize: '48px',
  lineHeight: '56px'
});

/***/ }),

/***/ "./lib/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor__ = __webpack_require__("glamor");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_glamorous__);
var _jsxFileName = '/Users/ads1018/Sites/jakespersianrug/lib/layout.js';




// Adds server generated styles to glamor cache.
// Has to run before any `style()` calls
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined' && window.__NEXT_DATA__ !== undefined) {
  Object(__WEBPACK_IMPORTED_MODULE_1_glamor__["rehydrate"])(window.__NEXT_DATA__.ids);
}

// Add global styles
__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('*', {
  fontFamily: 'Menlo, Monaco, "Lucida Console", "Liberation Mono", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Courier New", monospace, serif'
});

__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('body', {
  backgroundColor: '#ff3b81',
  padding: 0,
  margin: 0
});

__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('a', {
  color: '#22BAD9',
  textDecoration: 'none'
});

__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('p', {
  fontSize: '14px',
  lineHeight: '24px'
});

__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('article', {
  margin: '0 auto',
  maxWidth: '650px'
});

__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('button', {
  alignItems: 'center',
  backgroundColor: '#22BAD9',
  border: 0,
  color: 'white',
  display: 'flex',
  padding: '5px 7px',
  transition: 'background-color .3s'
});

__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('button:active', {
  backgroundColor: '#1B9DB7',
  transition: 'background-color .3s'
});

__WEBPACK_IMPORTED_MODULE_1_glamor__["css"].global('button:focus', {
  outline: 'none'
});

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_glamorous___default.a.Div,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      },
      children
    )
  );
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__ = __webpack_require__("isomorphic-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_layout__ = __webpack_require__("./lib/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PersianRug__ = __webpack_require__("./components/PersianRug/index.js");

var _jsxFileName = '/Users/ads1018/Sites/jakespersianrug/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__lib_layout__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_PersianRug__["a" /* default */], { price: this.props.price, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        })
      );
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req = _ref.req;
        var res, json;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_2_isomorphic_fetch___default()('https://api.coinmarketcap.com/v1/ticker/spankchain/');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                json = _context.sent;
                return _context.abrupt('return', { price: json[0].price_usd * 376.344 });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _class;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (_class);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "glamor":
/***/ (function(module, exports) {

module.exports = require("glamor");

/***/ }),

/***/ "glamorous":
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),

/***/ "isomorphic-fetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map