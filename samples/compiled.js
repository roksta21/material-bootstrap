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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
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
var routes = [{ path: '/', component: __webpack_require__(14) }];

// Components
Vue.component('side-bar', __webpack_require__(13));
Vue.component('main-nav', __webpack_require__(12));

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
//
//
//
//
//
//
//
//
//
//
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ __webpack_exports__["default"] = ({
    mounted: function mounted() {},

    data: function data() {
        return {
            data: "This is a test"
        };
    }
});

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(6),
  /* template */
  __webpack_require__(17),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/material-bootstrap/samples/components/MainNav.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MainNav.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7893f1e0", Component.options)
  } else {
    hotAPI.reload("data-v-7893f1e0", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(7),
  /* template */
  __webpack_require__(16),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/material-bootstrap/samples/components/Sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Sidebar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2dbf2f92", Component.options)
  } else {
    hotAPI.reload("data-v-2dbf2f92", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(15),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/dev/Dev/material-bootstrap/samples/components/Test.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Test.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12679968", Component.options)
  } else {
    hotAPI.reload("data-v-12679968", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h1', [_vm._v(_vm._s(_vm.data))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-12679968", module.exports)
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "side-bar",
    attrs: {
      "id": "sidebar"
    }
  }, [_c('nav', {
    staticClass: "side-nav"
  }, [_c('div', [_c('h2', {
    staticClass: "brand"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("Material Boorstrap")])])]), _vm._v(" "), _c('div', {
    staticClass: "mui-divider"
  }), _vm._v(" "), _c('ul', {
    staticClass: "parent"
  }, [_c('li', [_c('strong', {}, [_vm._v("Getting Started")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/getting-started/introduction"
    }
  }, [_vm._v("Introduction")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/getting-started/roadmap"
    }
  }, [_vm._v("Roadmap")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/getting-started/colors"
    }
  }, [_vm._v("Colors")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/getting-started/extras"
    }
  }, [_vm._v("Extras")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/getting-started/security"
    }
  }, [_vm._v("Security")])])])]), _vm._v(" "), _c('li', [_c('strong', {}, [_vm._v("Example Layouts")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/example-layouts/blog"
    }
  }, [_vm._v("Blog")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/example-layouts/landing-page"
    }
  }, [_vm._v("Landing Page")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/example-layouts/responsive-side-menu"
    }
  }, [_vm._v("Responsive Side Menu")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/example-layouts/html-email"
    }
  }, [_vm._v("HTML Email")])])])]), _vm._v(" "), _c('li', [_c('strong', [_vm._v("CSS/JS")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/boilerplate-html"
    }
  }, [_vm._v("Boilerplate HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/appbar"
    }
  }, [_vm._v("Appbar")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/buttons"
    }
  }, [_vm._v("Buttons")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/container"
    }
  }, [_vm._v("Container")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/dividers"
    }
  }, [_vm._v("Dividers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/dropdowns"
    }
  }, [_vm._v("Dropdowns")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/forms"
    }
  }, [_vm._v("Forms")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/grid"
    }
  }, [_vm._v("Grid")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/overlay"
    }
  }, [_vm._v("Overlay")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/panels"
    }
  }, [_vm._v("Panels")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/tables"
    }
  }, [_vm._v("Tables")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/tabs"
    }
  }, [_vm._v("Tabs")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/typography"
    }
  }, [_vm._v("Typography")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/semantic-html"
    }
  }, [_vm._v("Semantic HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/css-helpers"
    }
  }, [_vm._v("CSS Helpers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/css-js/customization"
    }
  }, [_vm._v("Customization")])]), _vm._v(" "), _c('li', [_c('a', {
    staticClass: "active",
    attrs: {
      "href": "/docs/v1/css-js/reference"
    }
  }, [_vm._v("Reference")])])])]), _vm._v(" "), _c('li', [_c('strong', {}, [_vm._v("React")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/introduction"
    }
  }, [_vm._v("Introduction")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/appbar"
    }
  }, [_vm._v("Appbar")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/buttons"
    }
  }, [_vm._v("Buttons")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/container"
    }
  }, [_vm._v("Container")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/dividers"
    }
  }, [_vm._v("Dividers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/dropdowns"
    }
  }, [_vm._v("Dropdowns")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/forms"
    }
  }, [_vm._v("Forms")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/grid"
    }
  }, [_vm._v("Grid")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/panels"
    }
  }, [_vm._v("Panels")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/tabs"
    }
  }, [_vm._v("Tabs")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/typography"
    }
  }, [_vm._v("Typography")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/semantic-html"
    }
  }, [_vm._v("Semantic HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/css-helpers"
    }
  }, [_vm._v("CSS Helpers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/react/reference"
    }
  }, [_vm._v("Reference")])])])]), _vm._v(" "), _c('li', [_c('strong', {}, [_vm._v("Angular")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/boilerplate-html"
    }
  }, [_vm._v("Boilerplate HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/appbar"
    }
  }, [_vm._v("Appbar")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/buttons"
    }
  }, [_vm._v("Buttons")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/container"
    }
  }, [_vm._v("Container")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/dividers"
    }
  }, [_vm._v("Dividers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/dropdowns"
    }
  }, [_vm._v("Dropdowns")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/forms"
    }
  }, [_vm._v("Forms")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/grid"
    }
  }, [_vm._v("Grid")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/panels"
    }
  }, [_vm._v("Panels")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/tabs"
    }
  }, [_vm._v("Tabs")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/typography"
    }
  }, [_vm._v("Typography")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/semantic-html"
    }
  }, [_vm._v("Semantic HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/css-helpers"
    }
  }, [_vm._v("CSS Helpers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/angular/reference"
    }
  }, [_vm._v("Reference")])])])]), _vm._v(" "), _c('li', [_c('strong', {}, [_vm._v("HTML Email")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/boilerplate-html"
    }
  }, [_vm._v("Boilerplate HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/buttons"
    }
  }, [_vm._v("Buttons")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/dividers"
    }
  }, [_vm._v("Dividers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/panel"
    }
  }, [_vm._v("Panel")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/typography"
    }
  }, [_vm._v("Typography")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/semantic-html"
    }
  }, [_vm._v("Semantic HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/css-helpers"
    }
  }, [_vm._v("CSS Helpers")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/customization"
    }
  }, [_vm._v("Customization")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/email/reference"
    }
  }, [_vm._v("Reference")])])])]), _vm._v(" "), _c('li', [_c('strong', {}, [_vm._v("WebComponents")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/webcomponents/boilerplate-html"
    }
  }, [_vm._v("Boilerplate HTML")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/webcomponents/buttons"
    }
  }, [_vm._v("Buttons")])]), _vm._v(" "), _c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/webcomponents/forms"
    }
  }, [_vm._v("Forms")])])])]), _vm._v(" "), _c('li', [_c('strong', {}, [_vm._v("Design Files")]), _vm._v(" "), _c('ul', {
    staticClass: "child"
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "/docs/v1/design-files/sketch"
    }
  }, [_vm._v("Sketch")])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2dbf2f92", module.exports)
  }
}

/***/ }),
/* 17 */
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
  }, [_vm._v("\n                     \n                ")]), _vm._v(" "), _c('ul', {
    staticClass: "nav navbar-nav navbar-right"
  }, [_c('li', {
    staticClass: "dropdown"
  }, [_c('a', {
    staticClass: "dropdown-toggle",
    attrs: {
      "href": "#",
      "data-toggle": "dropdown",
      "role": "button",
      "aria-expanded": "false"
    }
  }, [_vm._v("\n                            Name here "), _c('span', {
    staticClass: "caret"
  })]), _vm._v(" "), _c('ul', {
    staticClass: "dropdown-menu",
    attrs: {
      "role": "menu"
    }
  }, [_c('li', [_c('a', {
    attrs: {
      "href": "",
      "onclick": "event.preventDefault();\n                                                 document.getElementById('logout-form').submit();"
    }
  }, [_vm._v("\n                                    Logout\n                                ")])])])])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7893f1e0", module.exports)
  }
}

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);