/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 58);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Routes
var routes = [{ path: '/', component: __webpack_require__(34) }, { path: '/installation', component: __webpack_require__(33) }, { path: '/buttons', component: __webpack_require__(27) }, { path: '/containers', component: __webpack_require__(28) }, { path: '/dialogs', component: __webpack_require__(29) }, { path: '/forms', component: __webpack_require__(30) }, { path: '/icons', component: __webpack_require__(31) }, { path: '/indicators', component: __webpack_require__(32) }, { path: '/navbar', component: __webpack_require__(35) }, { path: '/navs', component: __webpack_require__(36) }, { path: '/progress-bars', component: __webpack_require__(37) }, { path: '/tables', component: __webpack_require__(38) }, { path: '/typography', component: __webpack_require__(39) }, { path: '/*', redirect: '/' }];

// Components
Vue.component('side-bar', __webpack_require__(26));
Vue.component('main-nav', __webpack_require__(25));

var router = new VueRouter({
    routes: routes
});

var app = new Vue({
    router: router
}).$mount('#app');

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/components/MainNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MainNav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c29bb18", Component.options)
  } else {
    hotAPI.reload("data-v-0c29bb18", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/components/Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a1d33fb4", Component.options)
  } else {
    hotAPI.reload("data-v-a1d33fb4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(44),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Buttons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Buttons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f2029fa", Component.options)
  } else {
    hotAPI.reload("data-v-2f2029fa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(43),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Containers.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Containers.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22570c00", Component.options)
  } else {
    hotAPI.reload("data-v-22570c00", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(46),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Dialogs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Dialogs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-52b872ad", Component.options)
  } else {
    hotAPI.reload("data-v-52b872ad", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(42),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Forms.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Forms.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-208bf99e", Component.options)
  } else {
    hotAPI.reload("data-v-208bf99e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(45),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Icons.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Icons.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30fb5c9c", Component.options)
  } else {
    hotAPI.reload("data-v-30fb5c9c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(52),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Indicators.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Indicators.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-da11399c", Component.options)
  } else {
    hotAPI.reload("data-v-da11399c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Installation.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Installation.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-185ed6b0", Component.options)
  } else {
    hotAPI.reload("data-v-185ed6b0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(50),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Introduction.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Introduction.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c579e88", Component.options)
  } else {
    hotAPI.reload("data-v-7c579e88", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(47),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Navbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-66cb6004", Component.options)
  } else {
    hotAPI.reload("data-v-66cb6004", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(48),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Navs.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Navs.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-675f85c4", Component.options)
  } else {
    hotAPI.reload("data-v-675f85c4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(53),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/ProgressBars.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ProgressBars.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc9b990a", Component.options)
  } else {
    hotAPI.reload("data-v-fc9b990a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(54),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Tables.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Tables.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fec9805a", Component.options)
  } else {
    hotAPI.reload("data-v-fec9805a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(49),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/new-material/samples/pages/Typography.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Typography.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78f5669d", Component.options)
  } else {
    hotAPI.reload("data-v-78f5669d", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', [_c('nav', {
    staticClass: "navbar navbar-default navbar-fixed-top"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('button', {
    staticClass: "navbar-toggle collapsed ripple",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#app-navbar-collapse"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Toggle Navigation")]), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn-nav ripple",
    attrs: {
      "type": "button",
      "onclick": "toggleSidebar()"
    }
  }, [_c('i', {
    staticClass: "fa fa-bars"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "app-navbar-collapse"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_vm._v("\n                     \n                ")])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c29bb18", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Installation")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('h2', [_vm._v("NPM")]), _vm._v(" "), _c('p', [_vm._v("NPM is preferred due to its potential for further customization.")]), _vm._v(" "), _c('code', [_vm._v("\n            npm install material-bootstrap\n        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("Directory Structure")]), _vm._v(" "), _c('h4', [_vm._v("1. assets")]), _vm._v(" "), _c('p', [_vm._v("This contains the source files to import and compile into your project.")]), _vm._v(" "), _c('p', [_vm._v("The js directory contains the js files.")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("material_bootstrap_full.js - includes all the dependencies (jquery, bootstrap.js, ...etc)")]), _vm._v(" "), _c('li', [_vm._v("material_bootstrap.js - includes only the elements added for these theme. it is the main js file and is what is imported by npm")])]), _vm._v(" "), _c('p', [_vm._v("The scss diretory contains the scss files.")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("material_bootstrap_full.scss - includes all the dependencies (bootstrap, font-awesome, ...etc) ")]), _vm._v(" "), _c('li', [_vm._v("material_bootstrap.scss - includes only the theme files required.")]), _vm._v(" "), _c('li', [_vm._v("_variables.scss - contains the default color variables for the theme. Copy this file to your development environment. If you define these values, the defaults will be ignored.")]), _vm._v(" "), _c('li', [_vm._v("_theme.scss - contains the theme scss itself.")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("2. dist")]), _vm._v(" "), _c('p', [_vm._v("This contains the compiled files. These are the direct download files and are ready to import without any changes or further processing.")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("material_bootstrap_full.css - includes all the dependencies like bootstrap It is a one file import and everything works immediately.")]), _vm._v(" "), _c('li', [_vm._v("material_bootstrap_full.min.css - it is a minified version of material_bootstrap_full.css")]), _vm._v(" "), _c('li', [_vm._v("material_bootstrap.css - inludes only the theme file. you will need to import bootstrap to your project and other dependencie for this file to be useful.")]), _vm._v(" "), _c('li', [_vm._v("material_bootsrap.min.css - it is a minified verion of material_bootstrap.css")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("3. fonts")]), _vm._v(" "), _c('p', [_vm._v("This is a placeholder directory for the fonts included. It is only necessary for this package's development for running the index.html file.")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("4. samples")]), _vm._v(" "), _c('p', [_vm._v("This directory contains samples for theme in vue.js")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("5. index.html")]), _vm._v(" "), _c('p', [_vm._v("This is the sample html file")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("Other files")]), _vm._v(" "), _c('p', [_vm._v("The other files serve the purpose defined by their names.")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("import")]), _vm._v(" "), _c('p', [_vm._v("in your development, import the scss and js files as:")]), _vm._v(" "), _c('p', [_vm._v("for the scss, first create the variables file in your directory and import it first. See the variables availabe below")]), _vm._v(" "), _c('pre', [_vm._v("            $body_background: #EEEEEE;\n\n            $default_text: rgba(0,0,0,.87);\n            $white_text: #FFFFFF;\n\n            $primary: #78909C;\n            $danger: #F44336;\n            $default: #78909C;\n            $warning: #f0ad4e;\n            $info: #03A9F4;\n            $success: #4CAF50;\n            $secondary: #ff5a92;\n            $tertiary: #009688;\n\n            $navbar_content_color: $white_text;\n            $navbar_primary_background: $tertiary;\n            $navbar_primary_content_color: $white_text;\n        ")]), _vm._v(" "), _c('p', [_vm._v("Then import it")]), _vm._v(" "), _c('pre', [_vm._v("            @import \"variables\"\n            @import \"node_modules/material-bootstrap/assets/material_bootstrap\";\n        ")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("for the js")]), _vm._v(" "), _c('code', [_vm._v("\n            require('material-bootstrap')\n        ")]), _vm._v(" "), _c('br')]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('h2', [_vm._v("Direct Download / CDN")]), _vm._v(" "), _c('p', [_vm._v("Coming soon.")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-185ed6b0", module.exports)
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Forms and Inputs")]), _vm._v(" "), _c('div', {
    staticClass: "bs-docs-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "well bs-component"
  }, [_c('form', {}, [_c('fieldset', [_c('legend', [_vm._v("Legend")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "required": "required",
      "type": "text"
    }
  }), _vm._v(" "), _c('label', [_vm._v("Name")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "required": "required",
      "type": "password"
    }
  }), _vm._v(" "), _c('label', [_vm._v("Password")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    attrs: {
      "type": "checkbox"
    }
  }), _vm._v(" Checkbox\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('textarea', {
    staticClass: "form-control"
  }), _vm._v(" "), _c('label', [_vm._v("Textarea")]), _vm._v(" "), _c('span', {
    staticClass: "help-block"
  }, [_vm._v("A longer block of help text that breaks onto a new line and may extend beyond one line.")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    attrs: {
      "type": "radio",
      "name": "radio_option"
    }
  }), _vm._v(" Option 1\n                                "), _c('input', {
    attrs: {
      "type": "radio",
      "name": "radio_option"
    }
  }), _vm._v(" Option 2\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "col-lg-2 control-label",
    attrs: {
      "for": "select"
    }
  }, [_vm._v("Selects")]), _vm._v(" "), _c('select', {
    staticClass: "form-control",
    attrs: {
      "id": "select"
    }
  }, [_c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('select', {
    staticClass: "form-control",
    attrs: {
      "multiple": ""
    }
  }, [_c('option', [_vm._v("1")]), _vm._v(" "), _c('option', [_vm._v("2")]), _vm._v(" "), _c('option', [_vm._v("3")]), _vm._v(" "), _c('option', [_vm._v("4")]), _vm._v(" "), _c('option', [_vm._v("5")])])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('div', {
    staticClass: "col-lg-10 col-lg-offset-2"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "reset"
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4 col-lg-offset-1"
  }, [_c('form', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "focusedInput",
      "type": "text",
      "value": "This is focused..."
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "focusedInput"
    }
  }, [_vm._v("Focused input")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "id": "disabledInput",
      "type": "text",
      "placeholder": "Disabled input here...",
      "disabled": ""
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "disabledInput"
    }
  }, [_vm._v("Disabled input")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-warning"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputWarning"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputWarning"
    }
  }, [_vm._v("Input warning")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-error"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputError"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputError"
    }
  }, [_vm._v("Input error")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group has-success"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputSuccess"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputSuccess"
    }
  }, [_vm._v("Input success")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control input-lg",
    attrs: {
      "type": "text",
      "id": "inputLarge"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputLarge"
    }
  }, [_vm._v("Large input")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "id": "inputDefault"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputDefault"
    }
  }, [_vm._v("Default input")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control input-sm",
    attrs: {
      "type": "text",
      "id": "inputSmall"
    }
  }), _vm._v(" "), _c('label', {
    staticClass: "control-label",
    attrs: {
      "for": "inputSmall"
    }
  }, [_vm._v("Small input")])]), _vm._v(" "), _c('div', {
    staticClass: "form-group"
  }, [_c('label', {
    staticClass: "control-label"
  }, [_vm._v("Input addons")]), _vm._v(" "), _c('div', {
    staticClass: "input-group"
  }, [_c('span', {
    staticClass: "input-group-addon"
  }, [_vm._v("$")]), _vm._v(" "), _c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "input-group-btn"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Button")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-208bf99e", module.exports)
  }
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Containers")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "bs-docs-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "jumbotron"
  }, [_c('h1', [_vm._v("Jumbotron")]), _vm._v(" "), _c('p', [_vm._v("This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.")]), _vm._v(" "), _c('p', [_c('a', {
    staticClass: "btn btn-primary btn-lg"
  }, [_vm._v("Learn more")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', [_vm._v("List groups")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "list-group"
  }, [_c('li', {
    staticClass: "list-group-item"
  }, [_c('span', {
    staticClass: "badge"
  }, [_vm._v("14")]), _vm._v("\n                                Cras justo odio\n                            ")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('span', {
    staticClass: "badge"
  }, [_vm._v("2")]), _vm._v("\n                                Dapibus ac facilisis in\n                            ")]), _vm._v(" "), _c('li', {
    staticClass: "list-group-item"
  }, [_c('span', {
    staticClass: "badge"
  }, [_vm._v("1")]), _vm._v("\n                                Morbi leo risus\n                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "list-group"
  }, [_c('a', {
    staticClass: "list-group-item active",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("\n                                Cras justo odio\n                            ")]), _vm._v(" "), _c('a', {
    staticClass: "list-group-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Dapibus ac facilisis in\n                            ")]), _vm._v(" "), _c('a', {
    staticClass: "list-group-item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Morbi leo risus\n                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "list-group"
  }, [_c('a', {
    staticClass: "list-group-item",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("List group item heading")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")])]), _vm._v(" "), _c('a', {
    staticClass: "list-group-item",
    attrs: {
      "href": "#"
    }
  }, [_c('h4', {
    staticClass: "list-group-item-heading"
  }, [_vm._v("List group item heading")]), _vm._v(" "), _c('p', {
    staticClass: "list-group-item-text"
  }, [_vm._v("Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', [_vm._v("Panels")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Basic panel\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_vm._v("Panel heading")]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Panel content\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-default"
  }, [_c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Panel content\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "panel-footer"
  }, [_vm._v("Panel footer")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "panel panel-primary"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("Panel primary")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Panel content\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-success"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("Panel success")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Panel content\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-warning"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("Panel warning")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Panel content\n                            ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "panel panel-danger"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("Panel danger")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Panel content\n                            ")])]), _vm._v(" "), _c('div', {
    staticClass: "panel panel-info"
  }, [_c('div', {
    staticClass: "panel-heading"
  }, [_c('h3', {
    staticClass: "panel-title"
  }, [_vm._v("Panel info")])]), _vm._v(" "), _c('div', {
    staticClass: "panel-body"
  }, [_vm._v("\n                                Panel content\n                            ")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', [_vm._v("Wells")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "well"
  }, [_vm._v("\n                            Look, I'm in a well!\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "well well-sm"
  }, [_vm._v("\n                            Look, I'm in a small well!\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "well well-lg"
  }, [_vm._v("\n                            Look, I'm in a large well!\n                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h2', [_vm._v("Cards")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card default"
  }, [_vm._v("\n                        This is a default card\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card deep"
  }, [_vm._v("\n                        This is a deep card\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card deeper"
  }, [_vm._v("\n                        This is a deeper card\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-3"
  }, [_c('div', {
    staticClass: "card hover"
  }, [_vm._v("\n                        This card rises on hover\n                    ")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22570c00", module.exports)
  }
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Buttons")]), _vm._v(" "), _c('div', {}, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-12"
  }, [_c('h4', [_vm._v("Button Colors")]), _vm._v(" "), _c('p', {
    staticClass: "bs-component"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-secondary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Secondary")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-tertiary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Tertiary")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-info",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-warning",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-danger",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Danger")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("Disabled")]), _vm._v(" "), _c('p', {
    staticClass: "bs-component"
  }, [_c('a', {
    staticClass: "btn btn-default disabled",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary disabled",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-success disabled",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-info disabled",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-warning disabled",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Warning")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-danger disabled",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Danger")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("With attached action")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('div', {
    staticClass: "btn-toolbar bs-component",
    staticStyle: {
      "margin": "0"
    }
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Default")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-primary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Primary")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-success",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Success")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-success dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-info",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Info")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-info dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("Button Sizes")]), _vm._v(" "), _c('p', {
    staticClass: "bs-component"
  }, [_c('a', {
    staticClass: "btn btn-primary btn-lg",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Large button")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Default button")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Small button")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary btn-xs",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Mini button")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h4', [_vm._v("Floating action buttons "), _c('small', [_vm._v("a.k.a FAB")])]), _vm._v(" "), _c('p', {
    staticClass: "bs-component"
  }, [_c('a', {
    staticClass: "btn btn-default btn-fab",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil-square-o"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-primary btn-fab",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil-square-o"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-success btn-fab",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil-square-o"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-info btn-lg btn-fab",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil-square-o"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-warning btn-sm btn-fab",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil-square-o"
  })]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-danger btn-xs btn-fab",
    attrs: {
      "href": "javascript:void(0)"
    }
  }, [_c('i', {
    staticClass: "fa fa-pencil-square-o"
  })])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "col-md-12"
  }, [_c('h3', [_vm._v("Other Buttons")])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-12",
    staticStyle: {
      "margin-top": "30px"
    }
  }, [_c('p', {
    staticClass: "bs-component"
  }, [_c('a', {
    staticClass: "btn btn-default btn-lg btn-block",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Block level button")])]), _vm._v(" "), _c('div', {
    staticClass: "bs-component",
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('div', {
    staticClass: "btn-group btn-group-justified"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Left")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Middle")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Right")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "bs-component",
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_c('div', {
    staticClass: "btn-toolbar"
  }, [_c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("5")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("6")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("7")])]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("8")]), _vm._v(" "), _c('div', {
    staticClass: "btn-group"
  }, [_c('a', {
    staticClass: "btn btn-default dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown"
    }
  }, [_vm._v("\n                                            Dropdown\n                                            "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Dropdown link")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Dropdown link")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Dropdown link")])])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-md-6"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "btn-group-vertical"
  }, [_c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Button")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Button")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Button")]), _vm._v(" "), _c('a', {
    staticClass: "btn btn-default",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Button")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2f2029fa", module.exports)
  }
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Icons")]), _vm._v(" "), _c('div', {
    staticClass: "card deep"
  }, [_c('h2', {
    attrs: {
      "id": "type-icons"
    }
  }, [_vm._v("Font Awesome Icons")]), _vm._v(" "), _c('p', [_vm._v("Font awesome Icons included!")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-30fb5c9c", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Dialogs")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "bs-docs-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('h2', [_vm._v("Modals")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "modal"
  }, [_c('div', {
    staticClass: "modal-dialog"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Modal title")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('p', [_vm._v("One fine body…")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-footer"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-dismiss": "modal"
    }
  }, [_vm._v("Close")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-primary",
    attrs: {
      "type": "button"
    }
  }, [_vm._v("Save changes")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('h2', [_vm._v("Popovers")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "left",
      "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    }
  }, [_vm._v("Left")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "top",
      "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    }
  }, [_vm._v("Top")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "bottom",
      "data-content": "Vivamus\n          sagittis lacus vel augue laoreet rutrum faucibus."
    }
  }, [_vm._v("Bottom")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-container": "body",
      "data-toggle": "popover",
      "data-placement": "right",
      "data-content": "Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
    }
  }, [_vm._v("Right")])]), _vm._v(" "), _c('h2', [_vm._v("Tooltips")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "data-placement": "left",
      "title": "",
      "data-original-title": "Tooltip on left"
    }
  }, [_vm._v("Left")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "data-placement": "top",
      "title": "",
      "data-original-title": "Tooltip on top"
    }
  }, [_vm._v("Top")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "data-placement": "bottom",
      "title": "",
      "data-original-title": "Tooltip on bottom"
    }
  }, [_vm._v("Bottom")]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "button",
      "data-toggle": "tooltip",
      "data-placement": "right",
      "title": "",
      "data-original-title": "Tooltip on right"
    }
  }, [_vm._v("Right")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal fade",
    attrs: {
      "id": "source-modal"
    }
  }, [_c('div', {
    staticClass: "modal-dialog modal-lg"
  }, [_c('div', {
    staticClass: "modal-content"
  }, [_c('div', {
    staticClass: "modal-header"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "modal",
      "aria-hidden": "true"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', {
    staticClass: "modal-title"
  }, [_vm._v("Source Code")])]), _vm._v(" "), _c('div', {
    staticClass: "modal-body"
  }, [_c('pre')])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-52b872ad", module.exports)
  }
}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Navbar")]), _vm._v(" "), _c('h3', [_vm._v("1. Default")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('nav', {
    staticClass: "navbar navbar-default"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('button', {
    staticClass: "navbar-toggle collapsed",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-1"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  })]), _vm._v(" "), _c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Brand")])]), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "bs-example-navbar-collapse-1"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("(current)")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])]), _vm._v(" "), _c('li', {
    staticClass: "dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown",
      "role": "button",
      "aria-expanded": "false"
    }
  }, [_vm._v("Dropdown "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("One more separated link")])])])])]), _vm._v(" "), _c('form', {
    staticClass: "navbar-form navbar-left",
    attrs: {
      "role": "search"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])]), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])])])])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("2. Primary")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('nav', {
    staticClass: "navbar navbar-primary"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('button', {
    staticClass: "navbar-toggle collapsed",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-2"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  })]), _vm._v(" "), _c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Brand")])]), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "bs-example-navbar-collapse-2"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("(current)")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])]), _vm._v(" "), _c('li', {
    staticClass: "dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown",
      "role": "button",
      "aria-expanded": "false"
    }
  }, [_vm._v("Dropdown "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("One more separated link")])])])])]), _vm._v(" "), _c('form', {
    staticClass: "navbar-form navbar-left",
    attrs: {
      "role": "search"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])]), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])])])])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("3. With sidebar")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('p', [_vm._v("Like this page. ")])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('h3', [_vm._v("Other colors")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('nav', {
    staticClass: "navbar navbar-inverse"
  }, [_c('div', {
    staticClass: "container-fluid"
  }, [_c('div', {
    staticClass: "navbar-header"
  }, [_c('button', {
    staticClass: "navbar-toggle collapsed",
    attrs: {
      "type": "button",
      "data-toggle": "collapse",
      "data-target": "#bs-example-navbar-collapse-2"
    }
  }, [_c('span', {
    staticClass: "sr-only"
  }, [_vm._v("Toggle navigation")]), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-bar"
  })]), _vm._v(" "), _c('a', {
    staticClass: "navbar-brand",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Brand")])]), _vm._v(" "), _c('div', {
    staticClass: "collapse navbar-collapse",
    attrs: {
      "id": "bs-example-navbar-collapse-2"
    }
  }, [_c('ul', {
    staticClass: "nav navbar-nav"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link "), _c('span', {
    staticClass: "sr-only"
  }, [_vm._v("(current)")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])]), _vm._v(" "), _c('li', {
    staticClass: "dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown",
      "role": "button",
      "aria-expanded": "false"
    }
  }, [_vm._v("Dropdown "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("One more separated link")])])])])]), _vm._v(" "), _c('form', {
    staticClass: "navbar-form navbar-left",
    attrs: {
      "role": "search"
    }
  }, [_c('div', {
    staticClass: "form-group"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "Search"
    }
  })]), _vm._v(" "), _c('button', {
    staticClass: "btn btn-default",
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Submit")])]), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Link")])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-66cb6004", module.exports)
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Navs")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "bs-docs-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('h2', {
    attrs: {
      "id": "nav-tabs"
    }
  }, [_vm._v("Tabs")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "nav nav-tabs"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#home",
      "data-toggle": "tab"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#profile",
      "data-toggle": "tab"
    }
  }, [_vm._v("Profile")])]), _vm._v(" "), _c('li', {
    staticClass: "disabled"
  }, [_c('a', [_vm._v("Disabled")])]), _vm._v(" "), _c('li', {
    staticClass: "dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "data-toggle": "dropdown",
      "href": "#"
    }
  }, [_vm._v("\n                                    Dropdown "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#dropdown1",
      "data-toggle": "tab"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#dropdown2",
      "data-toggle": "tab"
    }
  }, [_vm._v("Another action")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "tab-content",
    attrs: {
      "id": "myTabContent"
    }
  }, [_c('div', {
    staticClass: "tab-pane fade active in",
    attrs: {
      "id": "home"
    }
  }, [_c('p', [_vm._v("Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.")])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "profile"
    }
  }, [_c('p', [_vm._v("Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.")])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "dropdown1"
    }
  }, [_c('p', [_vm._v("Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.")])]), _vm._v(" "), _c('div', {
    staticClass: "tab-pane fade",
    attrs: {
      "id": "dropdown2"
    }
  }, [_c('p', [_vm._v("Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('h2', {
    attrs: {
      "id": "nav-pills"
    }
  }, [_vm._v("Pills")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "nav nav-pills"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Profile")])]), _vm._v(" "), _c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Disabled")])]), _vm._v(" "), _c('li', {
    staticClass: "dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "data-toggle": "dropdown",
      "href": "#"
    }
  }, [_vm._v("\n                                    Dropdown "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])])])]), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "nav nav-pills nav-stacked"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Profile")])]), _vm._v(" "), _c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Disabled")])]), _vm._v(" "), _c('li', {
    staticClass: "dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "data-toggle": "dropdown",
      "href": "#"
    }
  }, [_vm._v("\n                                    Dropdown "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Another action")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Something else here")])]), _vm._v(" "), _c('li', {
    staticClass: "divider"
  }), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Separated link")])])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('h2', {
    attrs: {
      "id": "nav-breadcrumbs"
    }
  }, [_vm._v("Breadcrumbs")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', {
    staticClass: "active"
  }, [_vm._v("Home")])]), _vm._v(" "), _c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', {
    staticClass: "active"
  }, [_vm._v("Library")])]), _vm._v(" "), _c('ul', {
    staticClass: "breadcrumb"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Library")])]), _vm._v(" "), _c('li', {
    staticClass: "active"
  }, [_vm._v("Data")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('h2', {
    attrs: {
      "id": "pagination"
    }
  }, [_vm._v("Pagination")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "pagination"
  }, [_c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("«")])]), _vm._v(" "), _c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("5")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("»")])])]), _vm._v(" "), _c('ul', {
    staticClass: "pagination pagination-lg"
  }, [_c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("«")])]), _vm._v(" "), _c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("»")])])]), _vm._v(" "), _c('ul', {
    staticClass: "pagination pagination-sm"
  }, [_c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("«")])]), _vm._v(" "), _c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("1")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("2")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("3")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("4")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("5")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("»")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('h2', {
    attrs: {
      "id": "pager"
    }
  }, [_vm._v("Pager")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "pager"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Previous")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Next")])])]), _vm._v(" "), _c('ul', {
    staticClass: "pager"
  }, [_c('li', {
    staticClass: "previous disabled"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("← Older")])]), _vm._v(" "), _c('li', {
    staticClass: "next"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Newer →")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  })])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-675f85c4", module.exports)
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Typography")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('h1', [_vm._v("Heading 1")]), _vm._v(" "), _c('h2', [_vm._v("Heading 2")]), _vm._v(" "), _c('h3', [_vm._v("Heading 3")]), _vm._v(" "), _c('h4', [_vm._v("Heading 4")]), _vm._v(" "), _c('h5', [_vm._v("Heading 5")]), _vm._v(" "), _c('h6', [_vm._v("Heading 6")]), _vm._v(" "), _c('p', {
    staticClass: "lead"
  }, [_vm._v("Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('h2', [_vm._v("Example body text")]), _vm._v(" "), _c('p', [_vm._v("Nullam quis risus eget "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("urna mollis ornare")]), _vm._v(" vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.")]), _vm._v(" "), _c('p', [_c('small', [_vm._v("This line of text is meant to be treated as fine print.")])]), _vm._v(" "), _c('p', [_vm._v("The following snippet of text is "), _c('strong', [_vm._v("rendered as bold text")]), _vm._v(".")]), _vm._v(" "), _c('p', [_vm._v("The following snippet of text is "), _c('em', [_vm._v("rendered as italicized text")]), _vm._v(".")]), _vm._v(" "), _c('p', [_vm._v("An abbreviation of the word attribute is "), _c('abbr', {
    attrs: {
      "title": "attribute"
    }
  }, [_vm._v("attr")]), _vm._v(".")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('h2', [_vm._v("Emphasis classes")]), _vm._v(" "), _c('p', {
    staticClass: "text-muted"
  }, [_vm._v("Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.")]), _vm._v(" "), _c('p', {
    staticClass: "text-primary"
  }, [_vm._v("Nullam id dolor id nibh ultricies vehicula ut id elit.")]), _vm._v(" "), _c('p', {
    staticClass: "text-warning"
  }, [_vm._v("Etiam porta sem malesuada magna mollis euismod.")]), _vm._v(" "), _c('p', {
    staticClass: "text-danger"
  }, [_vm._v("Donec ullamcorper nulla non metus auctor fringilla.")]), _vm._v(" "), _c('p', {
    staticClass: "text-success"
  }, [_vm._v("Duis mollis, est non commodo luctus, nisi erat porttitor ligula.")]), _vm._v(" "), _c('p', {
    staticClass: "text-info"
  }, [_vm._v("Maecenas sed diam eget risus varius blandit sit amet non magna.")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', {
    attrs: {
      "id": "type-blockquotes"
    }
  }, [_vm._v("Blockquotes")])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('blockquote', [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('small', [_vm._v("Someone famous in "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-6"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('blockquote', {
    staticClass: "blockquote-reverse"
  }, [_c('p', [_vm._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.")]), _vm._v(" "), _c('small', [_vm._v("Someone famous in "), _c('cite', {
    attrs: {
      "title": "Source Title"
    }
  }, [_vm._v("Source Title")])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78f5669d", module.exports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Introduction")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('p', [_vm._v("This is a simple materialization of bootstrap. It is more or less a theme that may go on top of bootstrap to change the bootstrap default styles.")]), _vm._v(" "), _c('p', [_vm._v("it includes most material design components for aesthetic and functional purposes.")]), _vm._v(" "), _c('p', [_vm._v("No extra classess or ids needed.")]), _vm._v(" "), _c('p', [_vm._v("Some other usefull components already intalled. These are:")]), _vm._v(" "), _c('ol', [_c('li', [_vm._v("Font Awesome")]), _vm._v(" "), _c('li', [_vm._v("Select2")]), _vm._v(" "), _c('li', [_vm._v("Data Tables")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7c579e88", module.exports)
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "side-bar",
    attrs: {
      "id": "sidebar"
    }
  }, [_c('nav', {
    staticClass: "side-nav"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "mui-divider"
  }), _vm._v(" "), _c('ul', {
    staticClass: "parent"
  }, [_c('router-link', {
    attrs: {
      "to": "/"
    }
  }, [_c('li', [_c('strong', [_vm._v("Introduction")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/installation"
    }
  }, [_c('li', [_c('strong', [_vm._v("Installation")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/navbar"
    }
  }, [_c('li', [_c('strong', [_vm._v("Navbar")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/buttons"
    }
  }, [_c('li', [_c('strong', [_vm._v("Buttons")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/typography"
    }
  }, [_c('li', [_c('strong', [_vm._v("Typography")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/icons"
    }
  }, [_c('li', [_c('strong', [_vm._v("Icons")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/tables"
    }
  }, [_c('li', [_c('strong', [_vm._v("Tables")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/forms"
    }
  }, [_c('li', [_c('strong', [_vm._v("Forms")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/navs"
    }
  }, [_c('li', [_c('strong', [_vm._v("Navs")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/indicators"
    }
  }, [_c('li', [_c('strong', [_vm._v("Indicators")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/progress-bars"
    }
  }, [_c('li', [_c('strong', [_vm._v("Progress Bars")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/containers"
    }
  }, [_c('li', [_c('strong', [_vm._v("Containers")])])]), _vm._v(" "), _c('router-link', {
    attrs: {
      "to": "/dialogs"
    }
  }, [_c('li', [_c('strong', [_vm._v("Dialogs")])])])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "brand"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Material Boorstrap")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-a1d33fb4", module.exports)
  }
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Indicators")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "bs-docs-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h2', [_vm._v("Alerts")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "alert alert-dismissible alert-warning"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('h4', [_vm._v("Warning!")]), _vm._v(" "), _c('p', [_vm._v("Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, "), _c('a', {
    staticClass: "alert-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("vel scelerisque nisl consectetur et")]), _vm._v(".")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "alert alert-dismissible alert-danger"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('strong', [_vm._v("Oh snap!")]), _vm._v(" "), _c('a', {
    staticClass: "alert-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Change a few things up")]), _vm._v(" and try submitting again.\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "alert alert-dismissible alert-success"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('strong', [_vm._v("Well done!")]), _vm._v(" You successfully read "), _c('a', {
    staticClass: "alert-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("this important alert message")]), _vm._v(".\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "alert alert-dismissible alert-info"
  }, [_c('button', {
    staticClass: "close",
    attrs: {
      "type": "button",
      "data-dismiss": "alert"
    }
  }, [_vm._v("×")]), _vm._v(" "), _c('strong', [_vm._v("Heads up!")]), _vm._v(" This "), _c('a', {
    staticClass: "alert-link",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("alert needs your attention")]), _vm._v(", but it's not super important.\n                        ")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-4"
  }, [_c('h2', [_vm._v("Labels")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component",
    staticStyle: {
      "margin-bottom": "40px"
    }
  }, [_c('span', {
    staticClass: "label label-default"
  }, [_vm._v("Default")]), _vm._v(" "), _c('span', {
    staticClass: "label label-primary"
  }, [_vm._v("Primary")]), _vm._v(" "), _c('span', {
    staticClass: "label label-success"
  }, [_vm._v("Success")]), _vm._v(" "), _c('span', {
    staticClass: "label label-warning"
  }, [_vm._v("Warning")]), _vm._v(" "), _c('span', {
    staticClass: "label label-danger"
  }, [_vm._v("Danger")]), _vm._v(" "), _c('span', {
    staticClass: "label label-info"
  }, [_vm._v("Info")])])]), _vm._v(" "), _c('div', {
    staticClass: "col-lg-4"
  }, [_c('h2', [_vm._v("Badges")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('ul', {
    staticClass: "nav nav-pills"
  }, [_c('li', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Home "), _c('span', {
    staticClass: "badge"
  }, [_vm._v("42")])])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Profile "), _c('span', {
    staticClass: "badge"
  })])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("Messages "), _c('span', {
    staticClass: "badge"
  }, [_vm._v("3")])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-da11399c", module.exports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Progress Bars")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "bs-docs-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('h3', {
    attrs: {
      "id": "progress-basic"
    }
  }, [_vm._v("Basic")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "60%"
    }
  })])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "progress-alternatives"
    }
  }, [_vm._v("Contextual alternatives")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-info",
    staticStyle: {
      "width": "20%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-success",
    staticStyle: {
      "width": "40%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-warning",
    staticStyle: {
      "width": "60%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-danger",
    staticStyle: {
      "width": "80%"
    }
  })])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "progress-striped"
    }
  }, [_vm._v("Striped")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "progress progress-striped"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-info",
    staticStyle: {
      "width": "20%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-striped"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-success",
    staticStyle: {
      "width": "40%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-striped"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-warning",
    staticStyle: {
      "width": "60%"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "progress progress-striped"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-danger",
    staticStyle: {
      "width": "80%"
    }
  })])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "progress-animated"
    }
  }, [_vm._v("Animated")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "progress progress-striped active"
  }, [_c('div', {
    staticClass: "progress-bar",
    staticStyle: {
      "width": "45%"
    }
  })])]), _vm._v(" "), _c('h3', {
    attrs: {
      "id": "progress-stacked"
    }
  }, [_vm._v("Stacked")]), _vm._v(" "), _c('div', {
    staticClass: "bs-component"
  }, [_c('div', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "progress-bar progress-bar-success",
    staticStyle: {
      "width": "35%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "progress-bar progress-bar-warning",
    staticStyle: {
      "width": "20%"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "progress-bar progress-bar-danger",
    staticStyle: {
      "width": "10%"
    }
  })])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fc9b990a", module.exports)
  }
}

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h1', [_vm._v("Tables")]), _vm._v(" "), _c('div', {
    staticClass: "well"
  }, [_c('div', {
    staticClass: "bs-docs-section"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-lg-12"
  }, [_c('div', {
    staticClass: "bs-component"
  }, [_c('table', {
    staticClass: "table table-striped table-hover "
  }, [_c('thead', [_c('tr', [_c('th', [_vm._v("#")]), _vm._v(" "), _c('th', [_vm._v("Column heading")]), _vm._v(" "), _c('th', [_vm._v("Column heading")]), _vm._v(" "), _c('th', [_vm._v("Column heading")])])]), _vm._v(" "), _c('tbody', [_c('tr', [_c('td', [_vm._v("1")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")])]), _vm._v(" "), _c('tr', [_c('td', [_vm._v("2")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")])]), _vm._v(" "), _c('tr', {
    staticClass: "info"
  }, [_c('td', [_vm._v("3")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")])]), _vm._v(" "), _c('tr', {
    staticClass: "success"
  }, [_c('td', [_vm._v("4")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")])]), _vm._v(" "), _c('tr', {
    staticClass: "danger"
  }, [_c('td', [_vm._v("5")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")])]), _vm._v(" "), _c('tr', {
    staticClass: "warning"
  }, [_c('td', [_vm._v("6")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")])]), _vm._v(" "), _c('tr', {
    staticClass: "active"
  }, [_c('td', [_vm._v("7")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")]), _vm._v(" "), _c('td', [_vm._v("Column content")])])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-fec9805a", module.exports)
  }
}

/***/ }),
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);