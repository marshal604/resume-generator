function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'resume',
      pathMatch: 'full'
    }, {
      path: 'resume',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | resume-generator-resume-generator-module */
        "resume-generator-resume-generator-module").then(__webpack_require__.bind(null,
        /*! ./resume-generator/resume-generator.module */
        "./src/app/resume-generator/resume-generator.module.ts")).then(function (m) {
          return m.ResumeGeneratorModule;
        });
      }
    }, {
      path: '**',
      redirectTo: 'resume'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        useHash: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            useHash: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(translateService) {
        _classCallCheck(this, AppComponent);

        this.translateService = translateService;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.translateService.setDefaultLang('zh-TW');
          this.translateService.use('zh-TW');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["yur-root"]],
      decls: 2,
      vars: 0,
      consts: [[1, "router-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".router-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3V0ZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn1cbiIsIi5yb3V0ZXItY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js"); // AoT requires an exported function for factories


    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_4__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
        },
        defaultLanguage: 'zh-TW'
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
            },
            defaultLanguage: 'zh-TW'
          })],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/input/upload-image/upload-image.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shared/input/upload-image/upload-image.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UploadImageComponent */

  /***/
  function srcAppSharedInputUploadImageUploadImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function () {
      return UploadImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var cropperjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! cropperjs */
    "./node_modules/cropperjs/dist/cropper.js");
    /* harmony import */


    var cropperjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");

    var _c0 = ["previewImage"];
    var _c1 = ["previewImageContainer"];

    function UploadImageComponent_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UploadImageComponent_div_3_img_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.options == null ? null : ctx_r5.options.defaultSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function UploadImageComponent_div_3_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.options == null ? null : ctx_r6.options.defaultText);
      }
    }

    function UploadImageComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadImageComponent_div_3_img_1_Template, 1, 1, "img", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadImageComponent_div_3_div_2_Template, 2, 1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.options == null ? null : ctx_r1.options.defaultSrc);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r1.options == null ? null : ctx_r1.options.defaultSrc) && (ctx_r1.options == null ? null : ctx_r1.options.defaultText));
      }
    }

    function UploadImageComponent_div_5_mat_icon_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageComponent_div_5_mat_icon_1_Template_mat_icon_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r8.onClearImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UploadImageComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadImageComponent_div_5_mat_icon_1_Template, 1, 0, "mat-icon", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.options == null ? null : ctx_r2.options.isShowClearIconInHoverImage);
      }
    }

    function UploadImageComponent_ng_template_6_mat_button_toggle_group_2_mat_button_toggle_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageComponent_ng_template_6_mat_button_toggle_group_2_mat_button_toggle_1_Template_mat_button_toggle_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var aspectRatio_r13 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r14.onSetAspectRatio(aspectRatio_r13);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aspectRatio_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", aspectRatio_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](aspectRatio_r13);
      }
    }

    function UploadImageComponent_ng_template_6_mat_button_toggle_group_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle-group", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadImageComponent_ng_template_6_mat_button_toggle_group_2_mat_button_toggle_1_Template, 3, 2, "mat-button-toggle", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r10.aspectRatioList[0])("appearance", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.aspectRatioList);
      }
    }

    function UploadImageComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadImageComponent_ng_template_6_mat_button_toggle_group_2_Template, 2, 3, "mat-button-toggle-group", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageComponent_ng_template_6_Template_mat_icon_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r16.onZoomIn();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageComponent_ng_template_6_Template_mat_icon_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.onZoomOut();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 21, 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageComponent_ng_template_6_Template_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r19.onCancelPreview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadImageComponent_ng_template_6_Template_button_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onFinishPreview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Done");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("isIconPreview", ctx_r4.options == null ? null : ctx_r4.options.isIconPreview);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.options == null ? null : ctx_r4.options.isUseAspectRatioTool);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.previewSrc, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var UploadImageComponent =
    /*#__PURE__*/
    function () {
      function UploadImageComponent(overlay, viewContainerRef, translateService) {
        _classCallCheck(this, UploadImageComponent);

        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.translateService = translateService;
        this.srcChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // emit after src change

        this.inputId = new Date().getTime();
      }

      _createClass(UploadImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initOverlay();
          this.initAspectRatioList();
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(event) {
          var _this = this;

          var file = event.files[0];
          this.srcFile = file; // avoid doesn't fire event when choose the same file

          event.value = '';

          if (!file) {
            return;
          }

          if (this.options && this.options.limitSize && file.size > this.options.limitSize) {
            alert(this.translateService.instant('Editing.Message.UploadSizeIsLargeThan', {
              value: this.transformSize(this.options.limitSize)
            }));
            return;
          }

          var reader = new FileReader();

          reader.onload = function (e) {
            _this.previewSrc = e.target.result.toString();

            _this.openDialog(true); // next tick


            setTimeout(function () {
              var aspectRatio = _this.options ? _this.options.isIconPreview ? 1 : _this.options.aspectRatio || 4 / 3 : 4 / 3;
              _this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_3___default.a(_this.previewImage.nativeElement, {
                zoomable: true,
                scalable: true,
                background: true,
                center: true,
                checkCrossOrigin: true,
                checkOrientation: true,
                highlight: true,
                aspectRatio: aspectRatio,
                responsive: true
              });
            });
          };

          reader.readAsDataURL(file);
        }
      }, {
        key: "onClearImage",
        value: function onClearImage() {
          this.src = null;
          this.srcChange.emit(this.src);
        }
      }, {
        key: "onSetAspectRatio",
        value: function onSetAspectRatio(ratio) {
          var _ratio$split = ratio.split(':'),
              _ratio$split2 = _slicedToArray(_ratio$split, 2),
              wRatio = _ratio$split2[0],
              hRatio = _ratio$split2[1];

          this.cropper.setAspectRatio(Number(wRatio) / Number(hRatio));
        }
      }, {
        key: "onFinishPreview",
        value: function onFinishPreview() {
          this.detachDialog();
          var canvas = this.cropper.getCroppedCanvas();
          this.src = canvas.toDataURL(this.srcFile.type);
          this.srcChange.emit(this.src);
        }
      }, {
        key: "onCancelPreview",
        value: function onCancelPreview() {
          this.detachDialog();
        }
      }, {
        key: "onZoomIn",
        value: function onZoomIn() {
          this.cropper.zoom(0.1);
        }
      }, {
        key: "onZoomOut",
        value: function onZoomOut() {
          this.cropper.zoom(-0.1);
        }
      }, {
        key: "initOverlay",
        value: function initOverlay() {
          var strategy = this.overlay.position().global().centerHorizontally().centerVertically();
          this.overlayRef = this.overlay.create({
            positionStrategy: strategy,
            hasBackdrop: true
          });
        }
      }, {
        key: "attachDialog",
        value: function attachDialog() {
          this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](this.previewImageContainer, this.viewContainerRef));
        }
      }, {
        key: "detachDialog",
        value: function detachDialog() {
          if (!this.hasAttached()) {
            return;
          }

          this.overlayRef.detach();
        }
      }, {
        key: "hasAttached",
        value: function hasAttached() {
          return this.overlayRef && this.overlayRef.hasAttached();
        }
      }, {
        key: "openDialog",
        value: function openDialog(isOpen) {
          if (isOpen) {
            this.attachDialog();
          } else {
            this.detachDialog();
          }
        }
      }, {
        key: "transformSize",
        value: function transformSize(size) {
          var K = 1024;
          var M = 1024 * 1024;
          var G = 1024 * 1024 * 1024;
          var limitSizeDecimalPosition = this.options ? this.options.limitSizeDecimalPosition || 0 : 0;

          if (size < K) {
            return size.toFixed(limitSizeDecimalPosition) + 'B';
          } else if (size / K < 1000) {
            return (size / K).toFixed(limitSizeDecimalPosition) + 'KB';
          } else if (size / M < 1000) {
            return (size / M).toFixed(limitSizeDecimalPosition) + 'MB';
          } else {
            return (size / G).toFixed(limitSizeDecimalPosition) + 'GB';
          }
        }
      }, {
        key: "initAspectRatioList",
        value: function initAspectRatioList() {
          this.aspectRatioList = ['5:3', '5:2', '3:1'];
        }
      }]);

      return UploadImageComponent;
    }();

    UploadImageComponent.ɵfac = function UploadImageComponent_Factory(t) {
      return new (t || UploadImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    UploadImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UploadImageComponent,
      selectors: [["yur-upload-image"]],
      viewQuery: function UploadImageComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previewImage = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.previewImageContainer = _t.first);
        }
      },
      inputs: {
        src: "src",
        options: "options"
      },
      outputs: {
        srcChange: "srcChange"
      },
      decls: 8,
      vars: 10,
      consts: [[1, "upload-images-container"], [3, "for"], ["class", "images", "alt", "upload images", 3, "src", 4, "ngIf"], ["class", "images default-images", 4, "ngIf"], ["accept", "image/*", "type", "file", 1, "upload-images", 3, "id", "disabled", "change"], ["class", "image-tools", 4, "ngIf"], ["previewImageContainer", ""], ["alt", "upload images", 1, "images", 3, "src"], [1, "images", "default-images"], ["class", "images", "alt", "default images", 3, "src", 4, "ngIf"], [4, "ngIf"], ["alt", "default images", 1, "images", 3, "src"], [1, "image-tools"], ["fontSet", "fas", "class", "clear-icon", "fontIcon", "fa-trash", 3, "click", 4, "ngIf"], ["fontSet", "fas", "fontIcon", "fa-trash", 1, "clear-icon", 3, "click"], [1, "yur-preview-images-panel"], [1, "preview-images-tools"], ["class", "aspect-ratio-toggle-group", 3, "value", "appearance", 4, "ngIf"], ["fontSet", "fas", "fontIcon", "fa-search-plus", 3, "click"], ["fontSet", "fas", "fontIcon", "fa-search-minus", 3, "click"], [1, "preview-images-block"], ["crossorigin", "", "alt", "preview icon", 1, "preview-images", 3, "src"], ["previewImage", ""], [1, "preview-btn-panel"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "aspect-ratio-toggle-group", 3, "value", "appearance"], [3, "value", "click", 4, "ngFor", "ngForOf"], [3, "value", "click"], [1, "aspect-ratio-content"]],
      template: function UploadImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadImageComponent_img_2_Template, 1, 1, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadImageComponent_div_3_Template, 3, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadImageComponent_Template_input_change_4_listener($event) {
            return ctx.onFileChange($event.target);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UploadImageComponent_div_5_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UploadImageComponent_ng_template_6_Template, 13, 4, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.options == null ? null : ctx.options.disabled)("isIconPreview", ctx.options == null ? null : ctx.options.isIconPreview);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.inputId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.src);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.src);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("disabled", (ctx.options == null ? null : ctx.options.disabled) ? "disabled" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.src);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"]],
      styles: [".upload-images-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: inherit;\n  width: inherit;\n}\n.upload-images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  cursor: pointer;\n  box-sizing: border-box;\n  border: 2px solid var(--primary);\n}\n.upload-images-container.isIconPreview[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.upload-images-container.disabled[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.upload-images-container.disabled[_ngcontent-%COMP%]   .image-tools[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-images-container[_ngcontent-%COMP%]   .default-images[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upload-images-container[_ngcontent-%COMP%]   .upload-images[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n.upload-images-container[_ngcontent-%COMP%]   .image-tools[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20px;\n  top: 0;\n}\n.upload-images-container[_ngcontent-%COMP%]   .image-tools[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transition: opacity 0.5s;\n  opacity: 0;\n  visibility: hidden;\n  font-size: 12px;\n  width: 20px;\n}\n.upload-images-container[_ngcontent-%COMP%]:hover   .image-tools[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%] {\n  width: 800px;\n  max-height: 70vh;\n  max-width: 70vw;\n  display: flex;\n  flex-direction: column;\n  padding: 32px 32px 16px 32px;\n  position: relative;\n  overflow: auto;\n  background: white;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 32px;\n  display: flex;\n  align-items: center;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%] {\n  height: 20px;\n  line-height: 20px;\n  border-color: var(--secondary);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.05);\n  background: white;\n  color: var(--primary);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]:hover, .yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%] {\n  color: var(--primary);\n  background: var(--secondary);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]   .aspect-ratio-content[_ngcontent-%COMP%] {\n  height: 20px;\n  line-height: 20px;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-block[_ngcontent-%COMP%] {\n  flex: 1;\n  max-height: calc(100% - 32px - 16px);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-btn-panel[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-btn-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 32px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3NoYXJlZC9pbnB1dC91cGxvYWQtaW1hZ2UvdXBsb2FkLWltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvaW5wdXQvdXBsb2FkLWltYWdlL3VwbG9hZC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNDSjtBREdJO0VBQ0Usa0JBQUE7QUNETjtBRE1JO0VBQ0UsbUJBQUE7QUNKTjtBRE9JO0VBQ0UsYUFBQTtBQ0xOO0FEU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1BKO0FEVUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUNSSjtBRFdFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtBQ1RKO0FEV0k7RUFDRSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDVE47QURlTTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ2JSO0FEbUJBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNoQkY7QURrQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDaEJKO0FEa0JJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDaEJOO0FEbUJJO0VBQ0UsZ0JBQUE7QUNqQk47QURvQkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ2xCTjtBRG9CTTtFQUNFLGdIQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2xCUjtBRHFCTTs7RUFFRSxxQkFBQTtFQUNBLDRCQUFBO0FDbkJSO0FEc0JNO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDcEJSO0FEeUJFO0VBQ0UsT0FBQTtFQUNBLG9DQUFBO0FDdkJKO0FEMEJFO0VBQ0UsZUFBQTtBQ3hCSjtBRDJCRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUN6Qko7QUQyQkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUN6Qk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvaW5wdXQvdXBsb2FkLWltYWdlL3VwbG9hZC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcblxuICAuaW1hZ2VzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbiAgfVxuXG4gICYuaXNJY29uUHJldmlldyB7XG4gICAgLmltYWdlcyB7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgJi5kaXNhYmxlZCB7XG4gICAgLmltYWdlcyB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIH1cblxuICAgIC5pbWFnZS10b29scyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5kZWZhdWx0LWltYWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnVwbG9hZC1pbWFnZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgLmltYWdlLXRvb2xzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC0yMHB4O1xuICAgIHRvcDogMDtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aWR0aDogMjBweDtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuaW1hZ2UtdG9vbHMge1xuICAgICAgbWF0LWljb24ge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIHtcbiAgd2lkdGg6IDgwMHB4O1xuICBtYXgtaGVpZ2h0OiA3MHZoO1xuICBtYXgtd2lkdGg6IDcwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDMycHggMzJweCAxNnB4IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gIC5wcmV2aWV3LWltYWdlcy10b29scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNnB4O1xuICAgIHJpZ2h0OiAzMnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIG1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgID4gKiArICoge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG5cbiAgICAuYXNwZWN0LXJhdGlvLXRvZ2dsZS1ncm91cCB7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcblxuICAgICAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xuICAgICAgfVxuXG4gICAgICAuYXNwZWN0LXJhdGlvLWNvbnRlbnQge1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5wcmV2aWV3LWltYWdlcy1ibG9jayB7XG4gICAgZmxleDogMTtcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4IC0gMTZweCk7XG4gIH1cblxuICAucHJldmlldy1pbWFnZXMge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wcmV2aWV3LWJ0bi1wYW5lbCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgIH1cbiAgfVxufVxuIiwiLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHdpZHRoOiBpbmhlcml0O1xufVxuLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyIC5pbWFnZXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnkpO1xufVxuLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyLmlzSWNvblByZXZpZXcgLmltYWdlcyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lci5kaXNhYmxlZCAuaW1hZ2VzIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cbi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lci5kaXNhYmxlZCAuaW1hZ2UtdG9vbHMge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyIC5kZWZhdWx0LWltYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyIC51cGxvYWQtaW1hZ2VzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyIC5pbWFnZS10b29scyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0b3A6IDA7XG59XG4udXBsb2FkLWltYWdlcy1jb250YWluZXIgLmltYWdlLXRvb2xzIG1hdC1pY29uIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4udXBsb2FkLWltYWdlcy1jb250YWluZXI6aG92ZXIgLmltYWdlLXRvb2xzIG1hdC1pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCB7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgbWF4LXdpZHRoOiA3MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzMnB4IDMycHggMTZweCAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctaW1hZ2VzLXRvb2xzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWltYWdlcy10b29scyBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWltYWdlcy10b29scyA+ICogKyAqIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctaW1hZ2VzLXRvb2xzIC5hc3BlY3QtcmF0aW8tdG9nZ2xlLWdyb3VwIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCAucHJldmlldy1pbWFnZXMtdG9vbHMgLmFzcGVjdC1yYXRpby10b2dnbGUtZ3JvdXAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn1cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctaW1hZ2VzLXRvb2xzIC5hc3BlY3QtcmF0aW8tdG9nZ2xlLWdyb3VwOmhvdmVyLFxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCAucHJldmlldy1pbWFnZXMtdG9vbHMgLmFzcGVjdC1yYXRpby10b2dnbGUtZ3JvdXAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWltYWdlcy10b29scyAuYXNwZWN0LXJhdGlvLXRvZ2dsZS1ncm91cCAuYXNwZWN0LXJhdGlvLWNvbnRlbnQge1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCAucHJldmlldy1pbWFnZXMtYmxvY2sge1xuICBmbGV4OiAxO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSAzMnB4IC0gMTZweCk7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWltYWdlcyB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctYnRuLXBhbmVsIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctYnRuLXBhbmVsIGJ1dHRvbiB7XG4gIGhlaWdodDogMzJweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-upload-image',
          templateUrl: './upload-image.component.html',
          styleUrls: ['./upload-image.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        previewImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['previewImage']
        }],
        previewImageContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['previewImageContainer', {
            "static": true
          }]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        srcChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/material.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/material.module.ts ***!
    \*******************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js"); // import { A11yModule } from '@angular/cdk/a11y';
    // import { ClipboardModule } from '@angular/cdk/clipboard';
    // import { DragDropModule } from '@angular/cdk/drag-drop';
    // import { PortalModule } from '@angular/cdk/portal';
    // import { ScrollingModule } from '@angular/cdk/scrolling';
    // import { CdkStepperModule } from '@angular/cdk/stepper';
    // import { CdkTableModule } from '@angular/cdk/table';
    // import { CdkTreeModule } from '@angular/cdk/tree';
    // import { MatAutocompleteModule } from '@angular/material/autocomplete';
    // import { MatBadgeModule } from '@angular/material/badge';
    // import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
    // import { MatCheckboxModule } from '@angular/material/checkbox';
    // import { MatChipsModule } from '@angular/material/chips';
    // import { MatStepperModule } from '@angular/material/stepper';
    // import { MatDatepickerModule } from '@angular/material/datepicker';
    // import { MatDialogModule } from '@angular/material/dialog';
    // import { MatDividerModule } from '@angular/material/divider';
    // import { MatExpansionModule } from '@angular/material/expansion';
    // import { MatGridListModule } from '@angular/material/grid-list';
    // import { MatListModule } from '@angular/material/list';
    // import { MatMenuModule } from '@angular/material/menu';
    // import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
    // import { MatPaginatorModule } from '@angular/material/paginator';
    // import { MatProgressBarModule } from '@angular/material/progress-bar';
    // import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
    // import { MatSidenavModule } from '@angular/material/sidenav';
    // import { MatSliderModule } from '@angular/material/slider';
    // import { MatSlideToggleModule } from '@angular/material/slide-toggle';
    // import { MatSnackBarModule } from '@angular/material/snack-bar';
    // import { MatSortModule } from '@angular/material/sort';
    // import { MatTableModule } from '@angular/material/table';
    // import { MatTabsModule } from '@angular/material/tabs';
    // import { MatToolbarModule } from '@angular/material/toolbar';
    // import { MatTreeModule } from '@angular/material/tree';


    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], // A11yModule,
      // ClipboardModule,
      // CdkStepperModule,
      // CdkTableModule,
      // CdkTreeModule,
      // DragDropModule,
      // MatAutocompleteModule,
      // MatBadgeModule,
      // MatBottomSheetModule,
      _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], // MatCheckboxModule,
      // MatChipsModule,
      // MatStepperModule,
      // MatDatepickerModule,
      // MatDialogModule,
      // MatDividerModule,
      // MatExpansionModule,
      // MatGridListModule,
      _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], // MatListModule,
      // MatMenuModule,
      // MatNativeDateModule,
      // MatPaginatorModule,
      // MatProgressBarModule,
      // MatProgressSpinnerModule,
      _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], // MatRippleModule,
      _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], // MatSidenavModule,
      // MatSliderModule,
      // MatSlideToggleModule,
      // MatSnackBarModule,
      // MatSortModule,
      // MatTableModule,
      // MatTabsModule,
      // MatToolbarModule,
      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"] // MatTreeModule,
      // PortalModule,
      // ScrollingModule
      ]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        exports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], // A11yModule,
        // ClipboardModule,
        // CdkStepperModule,
        // CdkTableModule,
        // CdkTreeModule,
        // DragDropModule,
        // MatAutocompleteModule,
        // MatBadgeModule,
        // MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], // MatCheckboxModule,
        // MatChipsModule,
        // MatStepperModule,
        // MatDatepickerModule,
        // MatDialogModule,
        // MatDividerModule,
        // MatExpansionModule,
        // MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], // MatListModule,
        // MatMenuModule,
        // MatNativeDateModule,
        // MatPaginatorModule,
        // MatProgressBarModule,
        // MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], // MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], // MatSidenavModule,
        // MatSliderModule,
        // MatSlideToggleModule,
        // MatSnackBarModule,
        // MatSortModule,
        // MatTableModule,
        // MatTabsModule,
        // MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"] // MatTreeModule,
        // PortalModule,
        // ScrollingModule
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], // A11yModule,
          // ClipboardModule,
          // CdkStepperModule,
          // CdkTableModule,
          // CdkTreeModule,
          // DragDropModule,
          // MatAutocompleteModule,
          // MatBadgeModule,
          // MatBottomSheetModule,
          _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"], // MatCheckboxModule,
          // MatChipsModule,
          // MatStepperModule,
          // MatDatepickerModule,
          // MatDialogModule,
          // MatDividerModule,
          // MatExpansionModule,
          // MatGridListModule,
          _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], // MatListModule,
          // MatMenuModule,
          // MatNativeDateModule,
          // MatPaginatorModule,
          // MatProgressBarModule,
          // MatProgressSpinnerModule,
          _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"], // MatRippleModule,
          _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], // MatSidenavModule,
          // MatSliderModule,
          // MatSlideToggleModule,
          // MatSnackBarModule,
          // MatSortModule,
          // MatTableModule,
          // MatTabsModule,
          // MatToolbarModule,
          _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"] // MatTreeModule,
          // PortalModule,
          // ScrollingModule
          ]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/shared/material.module.ts");
    /* harmony import */


    var _input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./input/upload-image/upload-image.component */
    "./src/app/shared/input/upload-image/upload-image.component.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
    SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SharedModule_Factory(t) {
        return new (t || SharedModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
        declarations: [_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__["UploadImageComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__["UploadImageComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__["UploadImageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]],
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__["UploadImageComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hubert/self/coding/resume-generator/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map