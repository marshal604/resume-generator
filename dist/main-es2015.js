(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['main'],
  {
    /***/ './$$_lazy_route_resource lazy recursive':
      /*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        function webpackEmptyAsyncContext(req) {
          // Here Promise.resolve().then() is used instead of new Promise() to prevent
          // uncaught exception popping up in devtools
          return Promise.resolve().then(function() {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }
        webpackEmptyAsyncContext.keys = function() {
          return [];
        };
        webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
        module.exports = webpackEmptyAsyncContext;
        webpackEmptyAsyncContext.id = './$$_lazy_route_resource lazy recursive';

        /***/
      },

    /***/ './src/app/app-routing.module.ts':
      /*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
      /*! exports provided: AppRoutingModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppRoutingModule', function() {
          return AppRoutingModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        const routes = [
          { path: '', redirectTo: 'resume', pathMatch: 'full' },
          {
            path: 'resume',
            loadChildren: () =>
              __webpack_require__
                .e(/*! import() | resume-generator-resume-generator-module */ 'resume-generator-resume-generator-module')
                .then(
                  __webpack_require__.bind(
                    null,
                    /*! ./resume-generator/resume-generator.module */ './src/app/resume-generator/resume-generator.module.ts'
                  )
                )
                .then(m => m.ResumeGeneratorModule)
          },
          { path: '**', redirectTo: 'resume' }
        ];
        class AppRoutingModule {}
        AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: AppRoutingModule });
        AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function AppRoutingModule_Factory(t) {
            return new (t || AppRoutingModule)();
          },
          imports: [
            [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes)],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](AppRoutingModule, {
              imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ './src/app/app.component.ts':
      /*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
      /*! exports provided: AppComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppComponent', function() {
          return AppComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */ './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );

        class AppComponent {}
        AppComponent.ɵfac = function AppComponent_Factory(t) {
          return new (t || AppComponent)();
        };
        AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: AppComponent,
          selectors: [['yur-root']],
          decls: 2,
          vars: 0,
          consts: [[1, 'router-container']],
          template: function AppComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'router-outlet');
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterOutlet']],
          styles: [
            '.router-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91dGVyLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iLCIucm91dGVyLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            AppComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.scss']
                  }
                ]
              }
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ './src/app/app.module.ts':
      /*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
      /*! exports provided: AppModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'AppModule', function() {
          return AppModule;
        });
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app.component */ './src/app/app.component.ts'
        );
        /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./app-routing.module */ './src/app/app-routing.module.ts'
        );
        /* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @shared/shared.module */ './src/app/shared/shared.module.ts'
        );
        /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/platform-browser/animations */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js'
        );

        class AppModule {}
        AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineNgModule']({
          type: AppModule,
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__['AppComponent']]
        });
        AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineInjector']({
          factory: function AppModule_Factory(t) {
            return new (t || AppModule)();
          },
          providers: [],
          imports: [
            [
              _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
              _app_routing_module__WEBPACK_IMPORTED_MODULE_3__['AppRoutingModule'],
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__['SharedModule'],
              _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__['BrowserAnimationsModule']
            ]
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵsetNgModuleScope'](AppModule, {
              declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__['AppComponent']],
              imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__['AppRoutingModule'],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__['SharedModule'],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__['BrowserAnimationsModule']
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            AppModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['NgModule'],
                args: [
                  {
                    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__['AppComponent']],
                    imports: [
                      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__['BrowserModule'],
                      _app_routing_module__WEBPACK_IMPORTED_MODULE_3__['AppRoutingModule'],
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__['SharedModule'],
                      _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__['BrowserAnimationsModule']
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__['AppComponent']]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/input/upload-image/upload-image.component.ts':
      /*!*********************************************************************!*\
  !*** ./src/app/shared/input/upload-image/upload-image.component.ts ***!
  \*********************************************************************/
      /*! exports provided: UploadImageComponent */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'UploadImageComponent', function() {
          return UploadImageComponent;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/portal */ './node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js'
        );
        /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/cdk/overlay */ './node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js'
        );
        /* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! cropperjs */ './node_modules/cropperjs/dist/cropper.js'
        );
        /* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          cropperjs__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/icon */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/button */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js'
        );
        /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/button-toggle */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js'
        );

        const _c0 = ['previewImage'];
        const _c1 = ['previewImageContainer'];
        function UploadImageComponent_img_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 7);
          }
          if (rf & 2) {
            const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'src',
              ctx_r0.src,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );
          }
        }
        function UploadImageComponent_div_3_img_1_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](0, 'img', 11);
          }
          if (rf & 2) {
            const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'src',
              ctx_r5.options == null ? null : ctx_r5.options.defaultSrc,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );
          }
        }
        function UploadImageComponent_div_3_div_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx_r6.options == null ? null : ctx_r6.options.defaultText);
          }
        }
        function UploadImageComponent_div_3_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](1, UploadImageComponent_div_3_img_1_Template, 1, 1, 'img', 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](2, UploadImageComponent_div_3_div_2_Template, 2, 1, 'div', 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx_r1.options == null ? null : ctx_r1.options.defaultSrc);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              !(ctx_r1.options == null ? null : ctx_r1.options.defaultSrc) && (ctx_r1.options == null ? null : ctx_r1.options.defaultText)
            );
          }
        }
        function UploadImageComponent_div_5_mat_icon_1_Template(rf, ctx) {
          if (rf & 1) {
            const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'mat-icon', 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function UploadImageComponent_div_5_mat_icon_1_Template_mat_icon_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r9);
                const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
                return ctx_r8.onClearImage();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
        }
        function UploadImageComponent_div_5_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              UploadImageComponent_div_5_mat_icon_1_Template,
              1,
              0,
              'mat-icon',
              13
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r2.options == null ? null : ctx_r2.options.isShowClearIconInHoverImage
            );
          }
        }
        function UploadImageComponent_ng_template_6_mat_button_toggle_group_2_mat_button_toggle_1_Template(rf, ctx) {
          if (rf & 1) {
            const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'mat-button-toggle', 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function UploadImageComponent_ng_template_6_mat_button_toggle_group_2_mat_button_toggle_1_Template_mat_button_toggle_click_0_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r15);
                const aspectRatio_r13 = ctx.$implicit;
                const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](3);
                return ctx_r14.onSetAspectRatio(aspectRatio_r13);
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const aspectRatio_r13 = ctx.$implicit;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('value', aspectRatio_r13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](aspectRatio_r13);
          }
        }
        function UploadImageComponent_ng_template_6_mat_button_toggle_group_2_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'mat-button-toggle-group', 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              1,
              UploadImageComponent_ng_template_6_mat_button_toggle_group_2_mat_button_toggle_1_Template,
              3,
              2,
              'mat-button-toggle',
              27
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('value', ctx_r10.aspectRatioList[0])('appearance', false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx_r10.aspectRatioList);
          }
        }
        function UploadImageComponent_ng_template_6_Template(rf, ctx) {
          if (rf & 1) {
            const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              2,
              UploadImageComponent_ng_template_6_mat_button_toggle_group_2_Template,
              2,
              3,
              'mat-button-toggle-group',
              17
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'mat-icon', 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function UploadImageComponent_ng_template_6_Template_mat_icon_click_3_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r17);
                const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r16.onZoomIn();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'mat-icon', 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function UploadImageComponent_ng_template_6_Template_mat_icon_click_4_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r17);
                const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r18.onZoomOut();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'img', 21, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'button', 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function UploadImageComponent_ng_template_6_Template_button_click_9_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r17);
                const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r19.onCancelPreview();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, 'Cancel');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'button', 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function UploadImageComponent_ng_template_6_Template_button_click_11_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r17);
                const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
                return ctx_r20.onFinishPreview();
              }
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, 'Done');
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }
          if (rf & 2) {
            const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp'](
              'isIconPreview',
              ctx_r4.options == null ? null : ctx_r4.options.isIconPreview
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'ngIf',
              ctx_r4.options == null ? null : ctx_r4.options.isUseAspectRatioTool
            );
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
              'src',
              ctx_r4.previewSrc,
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
            );
          }
        }
        class UploadImageComponent {
          constructor(overlay, viewContainerRef) {
            this.overlay = overlay;
            this.viewContainerRef = viewContainerRef;
            this.srcChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter'](); // emit after src change
            this.inputId = new Date().getTime();
          }
          ngOnInit() {
            this.initOverlay();
            this.initAspectRatioList();
          }
          onFileChange(event) {
            const file = event.files[0];
            this.srcFile = file;
            // avoid doesn't fire event when choose the same file
            event.value = '';
            if (!file) {
              return;
            }
            if (this.options && this.options.limitSize && file.size > this.options.limitSize) {
              alert(`upload size is large than ${this.transformSize(this.options.limitSize)}`);
              return;
            }
            const reader = new FileReader();
            reader.onload = e => {
              this.previewSrc = e.target.result.toString();
              this.openDialog(true);
              // next tick
              setTimeout(() => {
                const aspectRatio = this.options ? (this.options.isIconPreview ? 1 : this.options.aspectRatio || 4 / 3) : 4 / 3;
                this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_3___default.a(this.previewImage.nativeElement, {
                  zoomable: true,
                  scalable: true,
                  background: true,
                  center: true,
                  checkCrossOrigin: true,
                  checkOrientation: true,
                  highlight: true,
                  aspectRatio,
                  responsive: true
                });
              });
            };
            reader.readAsDataURL(file);
          }
          onClearImage() {
            this.src = null;
            this.srcChange.emit(this.src);
          }
          onSetAspectRatio(ratio) {
            const [wRatio, hRatio] = ratio.split(':');
            this.cropper.setAspectRatio(Number(wRatio) / Number(hRatio));
          }
          onFinishPreview() {
            this.detachDialog();
            const canvas = this.cropper.getCroppedCanvas();
            this.src = canvas.toDataURL(this.srcFile.type);
            this.srcChange.emit(this.src);
          }
          onCancelPreview() {
            this.detachDialog();
          }
          onZoomIn() {
            this.cropper.zoom(0.1);
          }
          onZoomOut() {
            this.cropper.zoom(-0.1);
          }
          initOverlay() {
            const strategy = this.overlay
              .position()
              .global()
              .centerHorizontally()
              .centerVertically();
            this.overlayRef = this.overlay.create({
              positionStrategy: strategy,
              hasBackdrop: true
            });
          }
          attachDialog() {
            this.overlayRef.attach(
              new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__['TemplatePortal'](this.previewImageContainer, this.viewContainerRef)
            );
          }
          detachDialog() {
            if (!this.hasAttached()) {
              return;
            }
            this.overlayRef.detach();
          }
          hasAttached() {
            return this.overlayRef && this.overlayRef.hasAttached();
          }
          openDialog(isOpen) {
            if (isOpen) {
              this.attachDialog();
            } else {
              this.detachDialog();
            }
          }
          transformSize(size) {
            const K = 1024;
            const M = 1024 * 1024;
            const G = 1024 * 1024 * 1024;
            const limitSizeDecimalPosition = this.options ? this.options.limitSizeDecimalPosition || 0 : 0;
            if (size < K) {
              return size.toFixed(limitSizeDecimalPosition);
            } else if (size / K < 1000) {
              return (size / K).toFixed(limitSizeDecimalPosition) + 'KB';
            } else if (size / M < 1000) {
              return (size / M).toFixed(limitSizeDecimalPosition) + 'MB';
            } else {
              return (size / G).toFixed(limitSizeDecimalPosition) + 'GB';
            }
          }
          initAspectRatioList() {
            this.aspectRatioList = ['5:3', '5:2', '3:1'];
          }
        }
        UploadImageComponent.ɵfac = function UploadImageComponent_Factory(t) {
          return new (t || UploadImageComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__['Overlay']),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewContainerRef'])
          );
        };
        UploadImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: UploadImageComponent,
          selectors: [['yur-upload-image']],
          viewQuery: function UploadImageComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](_c0, true);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstaticViewQuery'](_c1, true);
            }
            if (rf & 2) {
              var _t;
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵloadQuery']())
              ) && (ctx.previewImage = _t.first);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵloadQuery']())
              ) && (ctx.previewImageContainer = _t.first);
            }
          },
          inputs: { src: 'src', options: 'options' },
          outputs: { srcChange: 'srcChange' },
          decls: 8,
          vars: 10,
          consts: [
            [1, 'upload-images-container'],
            [3, 'for'],
            ['class', 'images', 'alt', 'upload images', 3, 'src', 4, 'ngIf'],
            ['class', 'images default-images', 4, 'ngIf'],
            ['accept', 'image/*', 'type', 'file', 1, 'upload-images', 3, 'id', 'disabled', 'change'],
            ['class', 'image-tools', 4, 'ngIf'],
            ['previewImageContainer', ''],
            ['alt', 'upload images', 1, 'images', 3, 'src'],
            [1, 'images', 'default-images'],
            ['class', 'images', 'alt', 'default images', 3, 'src', 4, 'ngIf'],
            [4, 'ngIf'],
            ['alt', 'default images', 1, 'images', 3, 'src'],
            [1, 'image-tools'],
            ['fontSet', 'fas', 'class', 'clear-icon', 'fontIcon', 'fa-trash', 3, 'click', 4, 'ngIf'],
            ['fontSet', 'fas', 'fontIcon', 'fa-trash', 1, 'clear-icon', 3, 'click'],
            [1, 'yur-preview-images-panel'],
            [1, 'preview-images-tools'],
            ['class', 'aspect-ratio-toggle-group', 3, 'value', 'appearance', 4, 'ngIf'],
            ['fontSet', 'fas', 'fontIcon', 'fa-search-plus', 3, 'click'],
            ['fontSet', 'fas', 'fontIcon', 'fa-search-minus', 3, 'click'],
            [1, 'preview-images-block'],
            ['crossorigin', '', 'alt', 'preview icon', 1, 'preview-images', 3, 'src'],
            ['previewImage', ''],
            [1, 'preview-btn-panel'],
            ['mat-raised-button', '', 'color', 'accent', 3, 'click'],
            ['mat-raised-button', '', 'color', 'primary', 3, 'click'],
            [1, 'aspect-ratio-toggle-group', 3, 'value', 'appearance'],
            [3, 'value', 'click', 4, 'ngFor', 'ngForOf'],
            [3, 'value', 'click'],
            [1, 'aspect-ratio-content']
          ],
          template: function UploadImageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'label', 1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](2, UploadImageComponent_img_2_Template, 1, 1, 'img', 2);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](3, UploadImageComponent_div_3_Template, 3, 2, 'div', 3);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'input', 4);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'change',
                function UploadImageComponent_Template_input_change_4_listener($event) {
                  return ctx.onFileChange($event.target);
                }
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](5, UploadImageComponent_div_5_Template, 2, 1, 'div', 5);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                UploadImageComponent_ng_template_6_Template,
                13,
                4,
                'ng-template',
                null,
                6,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplateRefExtractor']
              );
            }
            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵclassProp']('disabled', ctx.options == null ? null : ctx.options.disabled)(
                'isIconPreview',
                ctx.options == null ? null : ctx.options.isIconPreview
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('for', ctx.inputId);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.src);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', !ctx.src);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('id', ctx.inputId)(
                'disabled',
                (ctx.options == null ? null : ctx.options.disabled) ? 'disabled' : null
              );
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngIf', ctx.src);
            }
          },
          directives: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgIf'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__['MatIcon'],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__['MatButton'],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__['MatButtonToggleGroup'],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__['NgForOf'],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__['MatButtonToggle']
          ],
          styles: [
            '.upload-images-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: inherit;\n  width: inherit;\n}\n.upload-images-container[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  cursor: pointer;\n  box-sizing: border-box;\n  border: 2px solid var(--primary);\n}\n.upload-images-container.isIconPreview[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  border-radius: 50%;\n}\n.upload-images-container.disabled[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.upload-images-container.disabled[_ngcontent-%COMP%]   .image-tools[_ngcontent-%COMP%] {\n  display: none;\n}\n.upload-images-container[_ngcontent-%COMP%]   .default-images[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.upload-images-container[_ngcontent-%COMP%]   .upload-images[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n.upload-images-container[_ngcontent-%COMP%]   .image-tools[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -20px;\n  top: 0;\n}\n.upload-images-container[_ngcontent-%COMP%]   .image-tools[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transition: opacity 0.5s;\n  opacity: 0;\n  visibility: hidden;\n  font-size: 12px;\n  width: 20px;\n}\n.upload-images-container[_ngcontent-%COMP%]:hover   .image-tools[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%] {\n  width: 800px;\n  max-height: 70vh;\n  max-width: 70vw;\n  display: flex;\n  flex-direction: column;\n  padding: 32px 32px 16px 32px;\n  position: relative;\n  overflow: auto;\n  background: white;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 6px;\n  right: 32px;\n  display: flex;\n  align-items: center;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%] {\n  height: 20px;\n  line-height: 20px;\n  border-color: var(--secondary);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.05), 0 1px 1px 0 rgba(0, 0, 0, 0.05);\n  background: white;\n  color: var(--primary);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]:hover, .yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%] {\n  color: var(--primary);\n  background: var(--secondary);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-tools[_ngcontent-%COMP%]   .aspect-ratio-toggle-group[_ngcontent-%COMP%]   .aspect-ratio-content[_ngcontent-%COMP%] {\n  height: 20px;\n  line-height: 20px;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images-block[_ngcontent-%COMP%] {\n  flex: 1;\n  max-height: calc(100% - 32px - 16px);\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-images[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-btn-panel[_ngcontent-%COMP%] {\n  height: 40px;\n  margin-top: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.yur-preview-images-panel[_ngcontent-%COMP%]   .preview-btn-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 32px;\n  line-height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9zaGFyZWQvaW5wdXQvdXBsb2FkLWltYWdlL3VwbG9hZC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2lucHV0L3VwbG9hZC1pbWFnZS91cGxvYWQtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDQ0o7QURHSTtFQUNFLGtCQUFBO0FDRE47QURNSTtFQUNFLG1CQUFBO0FDSk47QURPSTtFQUNFLGFBQUE7QUNMTjtBRFNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNQSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FDUko7QURXRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUNUSjtBRFdJO0VBQ0Usd0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1ROO0FEZU07RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNiUjtBRG1CQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDaEJGO0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ2hCSjtBRGtCSTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ2hCTjtBRG1CSTtFQUNFLGdCQUFBO0FDakJOO0FEb0JJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUNsQk47QURvQk07RUFDRSxnSEFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNsQlI7QURxQk07O0VBRUUscUJBQUE7RUFDQSw0QkFBQTtBQ25CUjtBRHNCTTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ3BCUjtBRHlCRTtFQUNFLE9BQUE7RUFDQSxvQ0FBQTtBQ3ZCSjtBRDBCRTtFQUNFLGVBQUE7QUN4Qko7QUQyQkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDekJKO0FEMkJJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDekJOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2lucHV0L3VwbG9hZC1pbWFnZS91cGxvYWQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBsb2FkLWltYWdlcy1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogaW5oZXJpdDtcbiAgd2lkdGg6IGluaGVyaXQ7XG5cbiAgLmltYWdlcyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcHJpbWFyeSk7XG4gIH1cblxuICAmLmlzSWNvblByZXZpZXcge1xuICAgIC5pbWFnZXMge1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgfVxuXG4gICYuZGlzYWJsZWQge1xuICAgIC5pbWFnZXMge1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG5cbiAgICAuaW1hZ2UtdG9vbHMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAuZGVmYXVsdC1pbWFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4gIC51cGxvYWQtaW1hZ2VzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIC5pbWFnZS10b29scyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICB0b3A6IDA7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgd2lkdGg6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgLmltYWdlLXRvb2xzIHtcbiAgICAgIG1hdC1pY29uIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCB7XG4gIHdpZHRoOiA4MDBweDtcbiAgbWF4LWhlaWdodDogNzB2aDtcbiAgbWF4LXdpZHRoOiA3MHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzMnB4IDMycHggMTZweCAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAucHJldmlldy1pbWFnZXMtdG9vbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDZweDtcbiAgICByaWdodDogMzJweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBtYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG5cbiAgICA+ICogKyAqIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuXG4gICAgLmFzcGVjdC1yYXRpby10b2dnbGUtZ3JvdXAge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XG5cbiAgICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIsXG4gICAgICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcbiAgICAgIH1cblxuICAgICAgLmFzcGVjdC1yYXRpby1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJldmlldy1pbWFnZXMtYmxvY2sge1xuICAgIGZsZXg6IDE7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzJweCAtIDE2cHgpO1xuICB9XG5cbiAgLnByZXZpZXctaW1hZ2VzIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cblxuICAucHJldmlldy1idG4tcGFuZWwge1xuICAgIGhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICB9XG4gIH1cbn1cbiIsIi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICB3aWR0aDogaW5oZXJpdDtcbn1cbi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lciAuaW1hZ2VzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wcmltYXJ5KTtcbn1cbi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lci5pc0ljb25QcmV2aWV3IC5pbWFnZXMge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXBsb2FkLWltYWdlcy1jb250YWluZXIuZGlzYWJsZWQgLmltYWdlcyB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4udXBsb2FkLWltYWdlcy1jb250YWluZXIuZGlzYWJsZWQgLmltYWdlLXRvb2xzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lciAuZGVmYXVsdC1pbWFnZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lciAudXBsb2FkLWltYWdlcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cbi51cGxvYWQtaW1hZ2VzLWNvbnRhaW5lciAuaW1hZ2UtdG9vbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdG9wOiAwO1xufVxuLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyIC5pbWFnZS10b29scyBtYXQtaWNvbiB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuLnVwbG9hZC1pbWFnZXMtY29udGFpbmVyOmhvdmVyIC5pbWFnZS10b29scyBtYXQtaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwge1xuICB3aWR0aDogODAwcHg7XG4gIG1heC1oZWlnaHQ6IDcwdmg7XG4gIG1heC13aWR0aDogNzB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMzJweCAzMnB4IDE2cHggMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWltYWdlcy10b29scyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIHJpZ2h0OiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCAucHJldmlldy1pbWFnZXMtdG9vbHMgbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCAucHJldmlldy1pbWFnZXMtdG9vbHMgPiAqICsgKiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWltYWdlcy10b29scyAuYXNwZWN0LXJhdGlvLXRvZ2dsZS1ncm91cCB7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcbn1cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctaW1hZ2VzLXRvb2xzIC5hc3BlY3QtcmF0aW8tdG9nZ2xlLWdyb3VwIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWltYWdlcy10b29scyAuYXNwZWN0LXJhdGlvLXRvZ2dsZS1ncm91cDpob3Zlcixcbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctaW1hZ2VzLXRvb2xzIC5hc3BlY3QtcmF0aW8tdG9nZ2xlLWdyb3VwIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xufVxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCAucHJldmlldy1pbWFnZXMtdG9vbHMgLmFzcGVjdC1yYXRpby10b2dnbGUtZ3JvdXAgLmFzcGVjdC1yYXRpby1jb250ZW50IHtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbi55dXItcHJldmlldy1pbWFnZXMtcGFuZWwgLnByZXZpZXctaW1hZ2VzLWJsb2NrIHtcbiAgZmxleDogMTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gMzJweCAtIDE2cHgpO1xufVxuLnl1ci1wcmV2aWV3LWltYWdlcy1wYW5lbCAucHJldmlldy1pbWFnZXMge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWJ0bi1wYW5lbCB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ueXVyLXByZXZpZXctaW1hZ2VzLXBhbmVsIC5wcmV2aWV3LWJ0bi1wYW5lbCBidXR0b24ge1xuICBoZWlnaHQ6IDMycHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            UploadImageComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-upload-image',
                    templateUrl: './upload-image.component.html',
                    styleUrls: ['./upload-image.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__['Overlay'] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewContainerRef'] }
              ];
            },
            {
              previewImage: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['previewImage']
                }
              ],
              previewImageContainer: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['previewImageContainer', { static: true }]
                }
              ],
              src: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              options: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              srcChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ]
            }
          );
        })();

        /***/
      },

    /***/ './src/app/shared/material.module.ts':
      /*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
      /*! exports provided: MaterialModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'MaterialModule', function() {
          return MaterialModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/cdk/overlay */ './node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js'
        );
        /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/button */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js'
        );
        /* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/material/button-toggle */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js'
        );
        /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/card */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js'
        );
        /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/icon */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );
        /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/input */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js'
        );
        /* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/select */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js'
        );
        /* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/tooltip */ './node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js'
        );

        // import { A11yModule } from '@angular/cdk/a11y';
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
        // import { MatRadioModule } from '@angular/material/radio';

        // import { MatSidenavModule } from '@angular/material/sidenav';
        // import { MatSliderModule } from '@angular/material/slider';
        // import { MatSlideToggleModule } from '@angular/material/slide-toggle';
        // import { MatSnackBarModule } from '@angular/material/snack-bar';
        // import { MatSortModule } from '@angular/material/sort';
        // import { MatTableModule } from '@angular/material/table';
        // import { MatTabsModule } from '@angular/material/tabs';
        // import { MatToolbarModule } from '@angular/material/toolbar';

        // import { MatTreeModule } from '@angular/material/tree';
        class MaterialModule {}
        MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: MaterialModule });
        MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function MaterialModule_Factory(t) {
            return new (t || MaterialModule)();
          },
          imports: [
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__['OverlayModule'],
            // A11yModule,
            // ClipboardModule,
            // CdkStepperModule,
            // CdkTableModule,
            // CdkTreeModule,
            // DragDropModule,
            // MatAutocompleteModule,
            // MatBadgeModule,
            // MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__['MatButtonModule'],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__['MatButtonToggleModule'],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__['MatCardModule'],
            // MatCheckboxModule,
            // MatChipsModule,
            // MatStepperModule,
            // MatDatepickerModule,
            // MatDialogModule,
            // MatDividerModule,
            // MatExpansionModule,
            // MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__['MatIconModule'],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__['MatInputModule'],
            // MatListModule,
            // MatMenuModule,
            // MatNativeDateModule,
            // MatPaginatorModule,
            // MatProgressBarModule,
            // MatProgressSpinnerModule,
            // MatRadioModule,
            // MatRippleModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_7__['MatSelectModule'],
            // MatSidenavModule,
            // MatSliderModule,
            // MatSlideToggleModule,
            // MatSnackBarModule,
            // MatSortModule,
            // MatTableModule,
            // MatTabsModule,
            // MatToolbarModule,
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__['MatTooltipModule']
            // MatTreeModule,
            // PortalModule,
            // ScrollingModule
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](MaterialModule, {
              exports: [
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__['OverlayModule'],
                // A11yModule,
                // ClipboardModule,
                // CdkStepperModule,
                // CdkTableModule,
                // CdkTreeModule,
                // DragDropModule,
                // MatAutocompleteModule,
                // MatBadgeModule,
                // MatBottomSheetModule,
                _angular_material_button__WEBPACK_IMPORTED_MODULE_2__['MatButtonModule'],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__['MatButtonToggleModule'],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__['MatCardModule'],
                // MatCheckboxModule,
                // MatChipsModule,
                // MatStepperModule,
                // MatDatepickerModule,
                // MatDialogModule,
                // MatDividerModule,
                // MatExpansionModule,
                // MatGridListModule,
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__['MatIconModule'],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__['MatInputModule'],
                // MatListModule,
                // MatMenuModule,
                // MatNativeDateModule,
                // MatPaginatorModule,
                // MatProgressBarModule,
                // MatProgressSpinnerModule,
                // MatRadioModule,
                // MatRippleModule,
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__['MatSelectModule'],
                // MatSidenavModule,
                // MatSliderModule,
                // MatSlideToggleModule,
                // MatSnackBarModule,
                // MatSortModule,
                // MatTableModule,
                // MatTabsModule,
                // MatToolbarModule,
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__['MatTooltipModule']
                // MatTreeModule,
                // PortalModule,
                // ScrollingModule
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            MaterialModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    exports: [
                      _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__['OverlayModule'],
                      // A11yModule,
                      // ClipboardModule,
                      // CdkStepperModule,
                      // CdkTableModule,
                      // CdkTreeModule,
                      // DragDropModule,
                      // MatAutocompleteModule,
                      // MatBadgeModule,
                      // MatBottomSheetModule,
                      _angular_material_button__WEBPACK_IMPORTED_MODULE_2__['MatButtonModule'],
                      _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_3__['MatButtonToggleModule'],
                      _angular_material_card__WEBPACK_IMPORTED_MODULE_4__['MatCardModule'],
                      // MatCheckboxModule,
                      // MatChipsModule,
                      // MatStepperModule,
                      // MatDatepickerModule,
                      // MatDialogModule,
                      // MatDividerModule,
                      // MatExpansionModule,
                      // MatGridListModule,
                      _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__['MatIconModule'],
                      _angular_material_input__WEBPACK_IMPORTED_MODULE_6__['MatInputModule'],
                      // MatListModule,
                      // MatMenuModule,
                      // MatNativeDateModule,
                      // MatPaginatorModule,
                      // MatProgressBarModule,
                      // MatProgressSpinnerModule,
                      // MatRadioModule,
                      // MatRippleModule,
                      _angular_material_select__WEBPACK_IMPORTED_MODULE_7__['MatSelectModule'],
                      // MatSidenavModule,
                      // MatSliderModule,
                      // MatSlideToggleModule,
                      // MatSnackBarModule,
                      // MatSortModule,
                      // MatTableModule,
                      // MatTabsModule,
                      // MatToolbarModule,
                      _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__['MatTooltipModule']
                      // MatTreeModule,
                      // PortalModule,
                      // ScrollingModule
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ './src/app/shared/shared.module.ts':
      /*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
      /*! exports provided: SharedModule */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'SharedModule', function() {
          return SharedModule;
        });
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common */ './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */ './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./material.module */ './src/app/shared/material.module.ts'
        );
        /* harmony import */ var _input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./input/upload-image/upload-image.component */ './src/app/shared/input/upload-image/upload-image.component.ts'
        );

        class SharedModule {}
        SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({ type: SharedModule });
        SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function SharedModule_Factory(t) {
            return new (t || SharedModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
              _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
              _material_module__WEBPACK_IMPORTED_MODULE_3__['MaterialModule']
            ],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
            _material_module__WEBPACK_IMPORTED_MODULE_3__['MaterialModule']
          ]
        });
        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](SharedModule, {
              declarations: [_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__['UploadImageComponent']],
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
                _material_module__WEBPACK_IMPORTED_MODULE_3__['MaterialModule']
              ],
              exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
                _material_module__WEBPACK_IMPORTED_MODULE_3__['MaterialModule'],
                _input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__['UploadImageComponent']
              ]
            });
        })();
        /*@__PURE__*/ (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            SharedModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    declarations: [_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__['UploadImageComponent']],
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
                      _material_module__WEBPACK_IMPORTED_MODULE_3__['MaterialModule']
                    ],
                    exports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_1__['CommonModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormsModule'],
                      _angular_forms__WEBPACK_IMPORTED_MODULE_2__['ReactiveFormsModule'],
                      _material_module__WEBPACK_IMPORTED_MODULE_3__['MaterialModule'],
                      _input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__['UploadImageComponent']
                    ]
                  }
                ]
              }
            ],
            null,
            null
          );
        })();

        /***/
      },

    /***/ './src/environments/environment.ts':
      /*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
      /*! exports provided: environment */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'environment', function() {
          return environment;
        });
        // This file can be replaced during build by using the `fileReplacements` array.
        // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
        // The list of file replacements can be found in `angular.json`.
        const environment = {
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

    /***/ './src/main.ts':
      /*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */ './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./environments/environment */ './src/environments/environment.ts'
        );
        /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./app/app.module */ './src/app/app.module.ts'
        );
        /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/platform-browser */ './node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js'
        );

        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__['environment'].production) {
          Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__['enableProdMode'])();
        }
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__['platformBrowser']()
          .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__['AppModule'])
          .catch(err => console.error(err));

        /***/
      },

    /***/ 0:
      /*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(/*! /Users/lerdor/Develop/angular/resume-generator/src/main.ts */ './src/main.ts');

        /***/
      }
  },
  [[0, 'runtime', 'vendor']]
]);
//# sourceMappingURL=main-es2015.js.map
