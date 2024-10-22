function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resume-generator-resume-generator-module"], {
  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.model.ts":
  /*!***********************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.model.ts ***!
    \***********************************************************************************************************/

  /*! exports provided: ResumeEditAboutMeFormProperties, RESUME_EDIT_ABOUT_ME_FORM_GROUP */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditAboutMeResumeEditAboutMeComponentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    var _RESUME_EDIT_ABOUT_ME;

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditAboutMeFormProperties", function () {
      return ResumeEditAboutMeFormProperties;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RESUME_EDIT_ABOUT_ME_FORM_GROUP", function () {
      return RESUME_EDIT_ABOUT_ME_FORM_GROUP;
    });

    var ResumeEditAboutMeFormProperties;

    (function (ResumeEditAboutMeFormProperties) {
      ResumeEditAboutMeFormProperties["JobTitle"] = "jobTitle";
      ResumeEditAboutMeFormProperties["ChineseName"] = "chineseName";
      ResumeEditAboutMeFormProperties["EnglishName"] = "englishName";
      ResumeEditAboutMeFormProperties["Age"] = "age";
      ResumeEditAboutMeFormProperties["Photo"] = "photo";
      ResumeEditAboutMeFormProperties["Blog"] = "blog";
      ResumeEditAboutMeFormProperties["Email"] = "email";
      ResumeEditAboutMeFormProperties["Phone"] = "phone";
      ResumeEditAboutMeFormProperties["Github"] = "github";
      ResumeEditAboutMeFormProperties["CodePen"] = "codePen";
    })(ResumeEditAboutMeFormProperties || (ResumeEditAboutMeFormProperties = {}));

    var RESUME_EDIT_ABOUT_ME_FORM_GROUP = (_RESUME_EDIT_ABOUT_ME = {}, _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.JobTitle, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.ChineseName, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.EnglishName, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Photo, [{
      value: '',
      disabled: true
    }]), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Age, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Blog, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Email, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Phone, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Github, ''), _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.CodePen, ''), _RESUME_EDIT_ABOUT_ME);
    /***/
  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: ResumeEditAboutMeComponent */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditAboutMeResumeEditAboutMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditAboutMeComponent", function () {
      return ResumeEditAboutMeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resume-edit-about-me.component.model */
    "./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.model.ts");
    /* harmony import */


    var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/base/cva.base */
    "./src/app/shared/base/cva.base.ts");
    /* harmony import */


    var _shared_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/input/upload-image/upload-image.component */
    "./src/app/shared/input/upload-image/upload-image.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a0) {
      return {
        defaultText: a0,
        aspectRatio: 1
      };
    };

    var ResumeEditAboutMeComponent =
    /*#__PURE__*/
    function (_shared_base_cva_base) {
      _inherits(ResumeEditAboutMeComponent, _shared_base_cva_base);

      var _super = _createSuper(ResumeEditAboutMeComponent);

      function ResumeEditAboutMeComponent(fb) {
        var _this;

        _classCallCheck(this, ResumeEditAboutMeComponent);

        _this = _super.call(this);
        _this.fb = fb;
        _this.formProp = _resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__["ResumeEditAboutMeFormProperties"];
        return _this;
      }

      _createClass(ResumeEditAboutMeComponent, [{
        key: "onSrcChange",
        value: function onSrcChange(src) {
          this.form.patchValue(_defineProperty({}, _resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__["ResumeEditAboutMeFormProperties"].Photo, src));
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group(_resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__["RESUME_EDIT_ABOUT_ME_FORM_GROUP"]);
        }
      }]);

      return ResumeEditAboutMeComponent;
    }(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__["CvaBase"]);

    ResumeEditAboutMeComponent.ɵfac = function ResumeEditAboutMeComponent_Factory(t) {
      return new (t || ResumeEditAboutMeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ResumeEditAboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeEditAboutMeComponent,
      selectors: [["yur-resume-edit-about-me"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__["createValueAccessor"])(ResumeEditAboutMeComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 81,
      vars: 72,
      consts: [[1, "about-me", 3, "formGroup"], [1, "about-me-person-info"], [1, "about-me-person-info-photo"], [1, "caret-white", 3, "formControlName"], [3, "src", "options", "srcChange"], [1, "about-me-person-info-description", "ml-12"], ["appearance", "outline"], ["matInput", "", 1, "caret-white", 3, "formControlName"], ["appearance", "outline", 1, "mt-8"], [1, "about-me-person-link", "mt-8"]],
      template: function ResumeEditAboutMeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "yur-upload-image", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("srcChange", function ResumeEditAboutMeComponent_Template_yur_upload_image_srcChange_7_listener($event) {
            return ctx.onSrcChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](73, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_4_0 = null;
          var currVal_4 = (tmp_4_0 = ctx.form.get(ctx.formProp.Photo)) == null ? null : tmp_4_0.value;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 34, "General.Field.AboutMe"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.Phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", currVal_4)("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 36, "General.Field.UploadPhoto")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 38, "General.Field.JobTitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.JobTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 40, "Editing.Message.WriteYourJobTitle"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 42, "Editing.Field.ChineseName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.ChineseName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 44, "Editing.Message.WriteYourChineseName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 46, "Editing.Field.EnglishName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.EnglishName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 48, "Editing.Message.WriteYourEnglishName"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 50, "Editing.Field.Age"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.Age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 52, "Editing.Field.WriteYourAge"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 54, "General.Field.Blog"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.Blog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 56, "Editing.Message.WriteYourBlogLink"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](54, 58, "General.Field.Phone"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.Phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 60, "Editing.Message.WriteYourPhoneNumber"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](62, 62, "General.Field.Email"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.Email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Editing.Message.WriteYourEmail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](69, 64, "General.Field.GitHub"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.Github);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](73, 66, "Editing.Message.WriteYourGitHub"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 68, "General.Field.CodePen"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.CodePen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]("Editing.Message.WriteYourCodePen");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__["UploadImageComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatHint"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: [".about-me-person-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-description[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-description[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-photo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-photo[_ngcontent-%COMP%]   yur-upload-image[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.about-me-person-link[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 1fr 1fr/1fr 1fr;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n  row-gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtYWJvdXQtbWUvcmVzdW1lLWVkaXQtYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtYWJvdXQtbWUvcmVzdW1lLWVkaXQtYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7QURDRTtFQUNFLE9BQUE7QUNDSjtBRENJO0VBQ0UsY0FBQTtBQ0NOO0FER0U7RUFDRSxPQUFBO0FDREo7QURHSTtFQUNFLFlBQUE7QUNETjtBRE1BO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLFlBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtYWJvdXQtbWUvcmVzdW1lLWVkaXQtYWJvdXQtbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWJvdXQtbWUtcGVyc29uLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5hYm91dC1tZS1wZXJzb24taW5mby1kZXNjcmlwdGlvbiB7XG4gICAgZmxleDogMTtcblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgfVxuXG4gIC5hYm91dC1tZS1wZXJzb24taW5mby1waG90byB7XG4gICAgZmxleDogMTtcblxuICAgIHl1ci11cGxvYWQtaW1hZ2Uge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG4uYWJvdXQtbWUtcGVyc29uLWxpbmsge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTJweDtcbiAgcm93LWdhcDogOHB4O1xufVxuIiwiLmFib3V0LW1lLXBlcnNvbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hYm91dC1tZS1wZXJzb24taW5mbyAuYWJvdXQtbWUtcGVyc29uLWluZm8tZGVzY3JpcHRpb24ge1xuICBmbGV4OiAxO1xufVxuLmFib3V0LW1lLXBlcnNvbi1pbmZvIC5hYm91dC1tZS1wZXJzb24taW5mby1kZXNjcmlwdGlvbiBtYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmFib3V0LW1lLXBlcnNvbi1pbmZvIC5hYm91dC1tZS1wZXJzb24taW5mby1waG90byB7XG4gIGZsZXg6IDE7XG59XG4uYWJvdXQtbWUtcGVyc29uLWluZm8gLmFib3V0LW1lLXBlcnNvbi1pbmZvLXBob3RvIHl1ci11cGxvYWQtaW1hZ2Uge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hYm91dC1tZS1wZXJzb24tbGluayB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIvMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTJweDtcbiAgcm93LWdhcDogOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeEditAboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-edit-about-me',
          templateUrl: './resume-edit-about-me.component.html',
          styleUrls: ['./resume-edit-about-me.component.scss'],
          providers: [Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__["createValueAccessor"])(ResumeEditAboutMeComponent)]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.model.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.model.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: ResumeEditEducationFormProperties, ResumeEditEducationFormArrayProperties */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditEducationResumeEditEducationComponentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditEducationFormProperties", function () {
      return ResumeEditEducationFormProperties;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditEducationFormArrayProperties", function () {
      return ResumeEditEducationFormArrayProperties;
    });

    var ResumeEditEducationFormProperties;

    (function (ResumeEditEducationFormProperties) {
      ResumeEditEducationFormProperties["Education"] = "education";
    })(ResumeEditEducationFormProperties || (ResumeEditEducationFormProperties = {}));

    var ResumeEditEducationFormArrayProperties;

    (function (ResumeEditEducationFormArrayProperties) {
      ResumeEditEducationFormArrayProperties["School"] = "school";
      ResumeEditEducationFormArrayProperties["Department"] = "department";
      ResumeEditEducationFormArrayProperties["Period"] = "period";
    })(ResumeEditEducationFormArrayProperties || (ResumeEditEducationFormArrayProperties = {}));
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ResumeEditEducationComponent */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditEducationResumeEditEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditEducationComponent", function () {
      return ResumeEditEducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/base/cva.base */
    "./src/app/shared/base/cva.base.ts");
    /* harmony import */


    var _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume-edit-education.component.model */
    "./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.model.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ResumeEditEducationComponent_mat_card_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeEditEducationComponent_mat_card_8_Template_mat_icon_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var groupIndex_r74 = ctx.index;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.onRemoveEducation(groupIndex_r74);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r73 = ctx.$implicit;
        var groupIndex_r74 = ctx.index;

        var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formArrayName", ctx_r72.formProp.Education);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", item_r73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", groupIndex_r74 + 1, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 13, "Editing.Field.RemoveField"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 15, "General.Field.School"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r72.formArrayProp.School);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "Editing.Message.WriteYourSchool"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 19, "General.Field.Department"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r72.formArrayProp.Department);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 21, "Editing.Message.WriteYourDepartmentOfSchool"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 23, "General.Field.Period"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r72.formArrayProp.Period);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 25, "Editing.Message.WriteYourPeriodFromEnrolledToGraduation"));
      }
    }

    var ResumeEditEducationComponent =
    /*#__PURE__*/
    function (_shared_base_cva_base2) {
      _inherits(ResumeEditEducationComponent, _shared_base_cva_base2);

      var _super2 = _createSuper(ResumeEditEducationComponent);

      function ResumeEditEducationComponent(fb) {
        var _this2;

        _classCallCheck(this, ResumeEditEducationComponent);

        _this2 = _super2.call(this);
        _this2.fb = fb;
        _this2.formProp = _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormProperties"];
        _this2.formArrayProp = _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormArrayProperties"];
        return _this2;
      }

      _createClass(ResumeEditEducationComponent, [{
        key: "writeValue",
        value: function writeValue(val) {
          var _this3 = this;

          if (!val) {
            return;
          }

          var formArrayLength = this.form.get(_resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormProperties"].Education).length;
          var parentFormArrayLength = val.education.length;

          if (formArrayLength !== parentFormArrayLength) {
            this.form.setControl(_resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormProperties"].Education, this.fb.array(val.education.map(function () {
              return _this3.educationFormArrayItem;
            })));
            this.form.setValue(val, {
              emitEvent: true
            });
            return;
          }

          this.form.setValue(val, {
            emitEvent: false
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group(_defineProperty({}, _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormProperties"].Education, this.fb.array([this.educationFormArrayItem, this.educationFormArrayItem])));
        }
      }, {
        key: "onAddEducation",
        value: function onAddEducation() {
          this.form.get(_resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormProperties"].Education).insert(0, this.educationFormArrayItem);
        }
      }, {
        key: "onRemoveEducation",
        value: function onRemoveEducation(index) {
          this.form.get(_resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormProperties"].Education).removeAt(index);
        }
      }, {
        key: "educationFormArrayItem",
        get: function get() {
          var _this$fb$group2;

          return this.fb.group((_this$fb$group2 = {}, _defineProperty(_this$fb$group2, _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormArrayProperties"].School, ''), _defineProperty(_this$fb$group2, _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormArrayProperties"].Department, ''), _defineProperty(_this$fb$group2, _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditEducationFormArrayProperties"].Period, ''), _this$fb$group2));
        }
      }]);

      return ResumeEditEducationComponent;
    }(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["CvaBase"]);

    ResumeEditEducationComponent.ɵfac = function ResumeEditEducationComponent_Factory(t) {
      return new (t || ResumeEditEducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ResumeEditEducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeEditEducationComponent,
      selectors: [["yur-resume-edit-education"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditEducationComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 8,
      consts: [[1, "education-title"], ["mat-icon-button", "", 3, "matTooltip"], ["fontSet", "fas", "fontIcon", "fa-plus", 3, "click"], [1, "education", 3, "formGroup"], [3, "formArrayName", 4, "ngFor", "ngForOf"], [3, "formArrayName"], [3, "formGroup"], [1, "education-group-title"], ["fontSet", "fas", "fontIcon", "fa-trash", 3, "click"], ["appearance", "outline"], ["matInput", "", 1, "caret-white", 3, "formControlName"], ["appearance", "outline", 1, "mt-8"]],
      template: function ResumeEditEducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeEditEducationComponent_Template_mat_icon_click_6_listener() {
            return ctx.onAddEducation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResumeEditEducationComponent_mat_card_8_Template, 32, 27, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "General.Field.Education"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "Editing.Field.AddField"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get(ctx.formProp.Education)["controls"]);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: [".education-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.education[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n  row-gap: 8px;\n}\n\n.education[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.education[_ngcontent-%COMP%]   .education-group-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtZWR1Y2F0aW9uL3Jlc3VtZS1lZGl0LWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZWRpdC9yZXN1bWUtZWRpdC1lZHVjYXRpb24vcmVzdW1lLWVkaXQtZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZWRpdC9yZXN1bWUtZWRpdC1lZHVjYXRpb24vcmVzdW1lLWVkaXQtZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkdWNhdGlvbi10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmVkdWNhdGlvbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTJweDtcbiAgcm93LWdhcDogOHB4O1xuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5lZHVjYXRpb24tZ3JvdXAtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiIsIi5lZHVjYXRpb24tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lZHVjYXRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG4gIHJvdy1nYXA6IDhweDtcbn1cbi5lZHVjYXRpb24gbWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5lZHVjYXRpb24gLmVkdWNhdGlvbi1ncm91cC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeEditEducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-edit-education',
          templateUrl: './resume-edit-education.component.html',
          styleUrls: ['./resume-edit-education.component.scss'],
          providers: [Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditEducationComponent)]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.model.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.model.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: ResumeEditExperienceFormProperties, ResumeEditExperienceFormArrayProperties */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditExperienceResumeEditExperienceComponentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditExperienceFormProperties", function () {
      return ResumeEditExperienceFormProperties;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditExperienceFormArrayProperties", function () {
      return ResumeEditExperienceFormArrayProperties;
    });

    var ResumeEditExperienceFormProperties;

    (function (ResumeEditExperienceFormProperties) {
      ResumeEditExperienceFormProperties["Experience"] = "experience";
    })(ResumeEditExperienceFormProperties || (ResumeEditExperienceFormProperties = {}));

    var ResumeEditExperienceFormArrayProperties;

    (function (ResumeEditExperienceFormArrayProperties) {
      ResumeEditExperienceFormArrayProperties["Period"] = "period";
      ResumeEditExperienceFormArrayProperties["Company"] = "company";
      ResumeEditExperienceFormArrayProperties["JobTitle"] = "jobTitle";
      ResumeEditExperienceFormArrayProperties["SkillTags"] = "skillTags";
      ResumeEditExperienceFormArrayProperties["JobDescription"] = "jobDescription";
      ResumeEditExperienceFormArrayProperties["WorkPlace"] = "workPlace";
    })(ResumeEditExperienceFormArrayProperties || (ResumeEditExperienceFormArrayProperties = {}));
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ResumeEditExperienceComponent */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditExperienceResumeEditExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditExperienceComponent", function () {
      return ResumeEditExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/base/cva.base */
    "./src/app/shared/base/cva.base.ts");
    /* harmony import */


    var _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume-edit-experience.component.model */
    "./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.model.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ResumeEditExperienceComponent_mat_card_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeEditExperienceComponent_mat_card_8_Template_mat_icon_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r81);

          var groupIndex_r79 = ctx.index;

          var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r80.onRemoveExperience(groupIndex_r79);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](43, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "textarea", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "        ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](53, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "textarea", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r78 = ctx.$implicit;
        var groupIndex_r79 = ctx.index;

        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formArrayName", ctx_r77.formProp.Experience);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", item_r78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", groupIndex_r79 + 1, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 23, "Editing.Field.RemoveField"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 25, "General.Field.JobPeriod"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r77.formArrayProp.Period);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 27, "Editing.Message.WriteYourJobPeriod"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 29, "General.Field.WorkPlace"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r77.formArrayProp.WorkPlace);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 31, "Editing.Message.WriteYourWorkPlace"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 33, "General.Field.Company"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r77.formArrayProp.Company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 35, "Editing.Message.WriteYourCompany"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 37, "General.Field.JobTitle"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r77.formArrayProp.JobTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 39, "Editing.Message.WriteYourJobTitleInCompany"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](43, 41, "General.Field.JobSkill"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r77.formArrayProp.SkillTags)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](45, 43, "Editing.Message.SeparateSkillNameByComma"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 45, "Editing.Message.WriteYourJobSkillInCompany"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](53, 47, "General.Field.JobDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r77.formArrayProp.JobDescription);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 49, "Editing.Message.WriteYourJobDescription"));
      }
    }

    var ResumeEditExperienceComponent =
    /*#__PURE__*/
    function (_shared_base_cva_base3) {
      _inherits(ResumeEditExperienceComponent, _shared_base_cva_base3);

      var _super3 = _createSuper(ResumeEditExperienceComponent);

      function ResumeEditExperienceComponent(fb) {
        var _this4;

        _classCallCheck(this, ResumeEditExperienceComponent);

        _this4 = _super3.call(this);
        _this4.fb = fb;
        _this4.formProp = _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormProperties"];
        _this4.formArrayProp = _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormArrayProperties"];
        return _this4;
      }

      _createClass(ResumeEditExperienceComponent, [{
        key: "writeValue",
        value: function writeValue(val) {
          var _this5 = this;

          if (!val) {
            return;
          }

          var formArrayLength = this.form.get(_resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormProperties"].Experience).length;
          var parentFormArrayLength = val.experience.length;

          if (formArrayLength !== parentFormArrayLength) {
            this.form.setControl(_resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormProperties"].Experience, this.fb.array(val.experience.map(function () {
              return _this5.experienceFormArrayItem;
            })));
            this.form.setValue(val, {
              emitEvent: true
            });
            return;
          }

          this.form.setValue(val, {
            emitEvent: false
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group(_defineProperty({}, _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormProperties"].Experience, this.fb.array([this.experienceFormArrayItem, this.experienceFormArrayItem])));
        }
      }, {
        key: "onAddExperience",
        value: function onAddExperience() {
          this.form.get(_resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormProperties"].Experience).insert(0, this.experienceFormArrayItem);
        }
      }, {
        key: "onRemoveExperience",
        value: function onRemoveExperience(index) {
          this.form.get(_resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormProperties"].Experience).removeAt(index);
        }
      }, {
        key: "experienceFormArrayItem",
        get: function get() {
          var _this$fb$group4;

          return this.fb.group((_this$fb$group4 = {}, _defineProperty(_this$fb$group4, _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormArrayProperties"].Period, ''), _defineProperty(_this$fb$group4, _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormArrayProperties"].Company, ''), _defineProperty(_this$fb$group4, _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormArrayProperties"].JobTitle, ''), _defineProperty(_this$fb$group4, _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormArrayProperties"].SkillTags, ''), _defineProperty(_this$fb$group4, _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormArrayProperties"].JobDescription, ''), _defineProperty(_this$fb$group4, _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditExperienceFormArrayProperties"].WorkPlace, ''), _this$fb$group4));
        }
      }]);

      return ResumeEditExperienceComponent;
    }(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["CvaBase"]);

    ResumeEditExperienceComponent.ɵfac = function ResumeEditExperienceComponent_Factory(t) {
      return new (t || ResumeEditExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ResumeEditExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeEditExperienceComponent,
      selectors: [["yur-resume-edit-experience"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditExperienceComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 8,
      consts: [[1, "experience-title"], ["mat-icon-button", "", 3, "matTooltip"], ["fontSet", "fas", "fontIcon", "fa-plus", 3, "click"], [1, "experience", 3, "formGroup"], [3, "formArrayName", 4, "ngFor", "ngForOf"], [3, "formArrayName"], [3, "formGroup"], [1, "experience-group-title"], ["fontSet", "fas", "fontIcon", "fa-trash", 3, "click"], ["appearance", "outline"], ["matInput", "", 1, "caret-white", 3, "formControlName"], ["appearance", "outline", 1, "mt-8"], ["rows", "5", "matInput", "", 1, "caret-white", 3, "formControlName", "placeholder"], ["rows", "10", "matInput", "", 1, "caret-white", 3, "formControlName"]],
      template: function ResumeEditExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeEditExperienceComponent_Template_mat_icon_click_6_listener() {
            return ctx.onAddExperience();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResumeEditExperienceComponent_mat_card_8_Template, 59, 51, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "General.Field.WorkExperience"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "Editing.Field.AddField"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get(ctx.formProp.Experience)["controls"]);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: [".experience-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.experience[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n  row-gap: 8px;\n}\n\n.experience[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-group-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtZXhwZXJpZW5jZS9yZXN1bWUtZWRpdC1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LWV4cGVyaWVuY2UvcmVzdW1lLWVkaXQtZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtZXhwZXJpZW5jZS9yZXN1bWUtZWRpdC1leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGVyaWVuY2UtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leHBlcmllbmNlIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAxMnB4O1xuICByb3ctZ2FwOiA4cHg7XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmV4cGVyaWVuY2UtZ3JvdXAtdGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbiIsIi5leHBlcmllbmNlLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXhwZXJpZW5jZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTJweDtcbiAgcm93LWdhcDogOHB4O1xufVxuLmV4cGVyaWVuY2UgbWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWdyb3VwLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeEditExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-edit-experience',
          templateUrl: './resume-edit-experience.component.html',
          styleUrls: ['./resume-edit-experience.component.scss'],
          providers: [Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditExperienceComponent)]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-portfolio/resume-edit-portfolio.component.model.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-portfolio/resume-edit-portfolio.component.model.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: ResumeEditPortfolioFormProperties, ResumeEditPortfolioFormArrayProperties */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditPortfolioResumeEditPortfolioComponentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditPortfolioFormProperties", function () {
      return ResumeEditPortfolioFormProperties;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditPortfolioFormArrayProperties", function () {
      return ResumeEditPortfolioFormArrayProperties;
    });

    var ResumeEditPortfolioFormProperties;

    (function (ResumeEditPortfolioFormProperties) {
      ResumeEditPortfolioFormProperties["Portfolio"] = "portfolio";
    })(ResumeEditPortfolioFormProperties || (ResumeEditPortfolioFormProperties = {}));

    var ResumeEditPortfolioFormArrayProperties;

    (function (ResumeEditPortfolioFormArrayProperties) {
      ResumeEditPortfolioFormArrayProperties["PhotoCount"] = "photoCount";
      ResumeEditPortfolioFormArrayProperties["Photos"] = "photos";
      ResumeEditPortfolioFormArrayProperties["Title"] = "title";
      ResumeEditPortfolioFormArrayProperties["SkillTags"] = "skillTags";
      ResumeEditPortfolioFormArrayProperties["Description"] = "description";
    })(ResumeEditPortfolioFormArrayProperties || (ResumeEditPortfolioFormArrayProperties = {}));
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-portfolio/resume-edit-portfolio.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-portfolio/resume-edit-portfolio.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: ResumeEditPortfolioComponent */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditPortfolioResumeEditPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditPortfolioComponent", function () {
      return ResumeEditPortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/base/cva.base */
    "./src/app/shared/base/cva.base.ts");
    /* harmony import */


    var _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume-edit-portfolio.component.model */
    "./src/app/resume-generator/resume-edit/resume-edit-portfolio/resume-edit-portfolio.component.model.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _shared_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/input/upload-image/upload-image.component */
    "./src/app/shared/input/upload-image/upload-image.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a0) {
      return {
        defaultText: a0,
        aspectRatio: "auto"
      };
    };

    function ResumeEditPortfolioComponent_mat_card_8_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "yur-upload-image", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("srcChange", function ResumeEditPortfolioComponent_mat_card_8_div_18_Template_yur_upload_image_srcChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90);

          var photoIndex_r87 = ctx.index;

          var item_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r88.onSrcChange(item_r83, $event, photoIndex_r87);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r86 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r86)("options", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "General.Field.UploadPhoto")));
      }
    }

    function ResumeEditPortfolioComponent_mat_card_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeEditPortfolioComponent_mat_card_8_Template_mat_icon_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var groupIndex_r84 = ctx.index;

          var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r91.onRemovePortfolio(groupIndex_r84);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-group", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ResumeEditPortfolioComponent_mat_card_8_Template_mat_radio_group_change_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r92);

          var item_r83 = ctx.$implicit;

          var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r93.onPhotoCountChange(item_r83, $event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-radio-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ResumeEditPortfolioComponent_mat_card_8_div_18_Template, 3, 6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "textarea", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](33, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "          ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](41, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "textarea", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r83 = ctx.$implicit;
        var groupIndex_r84 = ctx.index;

        var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formArrayName", ctx_r82.formProp.Portfolio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", item_r83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", groupIndex_r84 + 1, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 19, "Editing.Field.RemoveField"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 21, "Editing.Message.SelectUploadPhotoCount"), ":");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r82.formArrayProp.PhotoCount);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r83.get(ctx_r82.formArrayProp.Photos).value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 23, "General.Field.Title"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r82.formArrayProp.Title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 25, "Editing.Message.WriteYourTitle"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](31, 27, "General.Field.JobSkill"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r82.formArrayProp.SkillTags)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](33, 29, "Editing.Message.SeparateSkillNameByComma"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 31, "Editing.Message.WriteYourJobSkillInPortfolio"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](41, 33, "General.Field.PortfolioDescription"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r82.formArrayProp.Description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 35, "Editing.Message.WriteYourPortfolioDescription"));
      }
    }

    var ResumeEditPortfolioComponent =
    /*#__PURE__*/
    function (_shared_base_cva_base4) {
      _inherits(ResumeEditPortfolioComponent, _shared_base_cva_base4);

      var _super4 = _createSuper(ResumeEditPortfolioComponent);

      function ResumeEditPortfolioComponent(fb) {
        var _this6;

        _classCallCheck(this, ResumeEditPortfolioComponent);

        _this6 = _super4.call(this);
        _this6.fb = fb;
        _this6.formProp = _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormProperties"];
        _this6.formArrayProp = _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"];
        return _this6;
      }

      _createClass(ResumeEditPortfolioComponent, [{
        key: "onPhotoCountChange",
        value: function onPhotoCountChange(form, event) {
          var sources = form.get(_resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].Photos).value;

          for (var i = 0; i < event.value; i++) {
            if (sources.length < i + 1) {
              sources.push(null);
            }
          }

          sources = sources.slice(0, event.value);
          form.patchValue(_defineProperty({}, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].Photos, sources));
        }
      }, {
        key: "onSrcChange",
        value: function onSrcChange(form, src, index) {
          // avoid first and second photo have the same src in first change.
          var sources = form.get(_resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].Photos).value.map(function (val, pos) {
            return index === pos ? src : val || '';
          });
          form.patchValue(_defineProperty({}, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].Photos, sources));
        }
      }, {
        key: "getAspectRatio",
        value: function getAspectRatio(photoCount) {
          if (photoCount === 1) {
            return 4 / 3;
          } else {
            return 3 / 4;
          }
        }
      }, {
        key: "writeValue",
        value: function writeValue(val) {
          var _this7 = this;

          if (!val) {
            return;
          }

          var formArrayLength = this.form.get(_resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormProperties"].Portfolio).length;
          var parentFormArrayLength = val.portfolio.length;

          if (formArrayLength !== parentFormArrayLength) {
            this.form.setControl(_resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormProperties"].Portfolio, this.fb.array(val.portfolio.map(function () {
              return _this7.portfolioFormArrayItem;
            })));
            this.form.setValue(val, {
              emitEvent: true
            });
            return;
          }

          this.form.setValue(val, {
            emitEvent: false
          });
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group(_defineProperty({}, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormProperties"].Portfolio, this.fb.array([this.portfolioFormArrayItem, this.portfolioFormArrayItem])));
        }
      }, {
        key: "onAddPortfolio",
        value: function onAddPortfolio() {
          this.form.get(_resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormProperties"].Portfolio).push(this.portfolioFormArrayItem);
        }
      }, {
        key: "onRemovePortfolio",
        value: function onRemovePortfolio(index) {
          this.form.get(_resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormProperties"].Portfolio).removeAt(index);
        }
      }, {
        key: "portfolioFormArrayItem",
        get: function get() {
          var _this$fb$group6;

          return this.fb.group((_this$fb$group6 = {}, _defineProperty(_this$fb$group6, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].PhotoCount, 1), _defineProperty(_this$fb$group6, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].Photos, [[null]]), _defineProperty(_this$fb$group6, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].Title, ''), _defineProperty(_this$fb$group6, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].SkillTags, ''), _defineProperty(_this$fb$group6, _resume_edit_portfolio_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditPortfolioFormArrayProperties"].Description, ''), _this$fb$group6));
        }
      }]);

      return ResumeEditPortfolioComponent;
    }(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["CvaBase"]);

    ResumeEditPortfolioComponent.ɵfac = function ResumeEditPortfolioComponent_Factory(t) {
      return new (t || ResumeEditPortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ResumeEditPortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeEditPortfolioComponent,
      selectors: [["yur-resume-edit-portfolio"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditPortfolioComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 8,
      consts: [[1, "portfolio-title"], ["mat-icon-button", "", 3, "matTooltip"], ["fontSet", "fas", "fontIcon", "fa-plus", 3, "click"], [1, "portfolio", 3, "formGroup"], [3, "formArrayName", 4, "ngFor", "ngForOf"], [3, "formArrayName"], [3, "formGroup"], [1, "portfolio-group-title"], ["fontSet", "fas", "fontIcon", "fa-trash", 3, "click"], [1, "portfolio-photo-count"], [3, "formControlName", "change"], [1, "ml-8", 3, "value"], [1, "portfolio-photo", "mt-8"], ["class", "portfolio-photo-item", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "mt-8"], ["matInput", "", 1, "caret-white", 3, "formControlName"], ["rows", "5", "matInput", "", 1, "caret-white", 3, "formControlName", "placeholder"], ["rows", "10", "matInput", "", 1, "caret-white", 3, "formControlName"], [1, "portfolio-photo-item"], [3, "src", "options", "srcChange"]],
      template: function ResumeEditPortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeEditPortfolioComponent_Template_mat_icon_click_6_listener() {
            return ctx.onAddPortfolio();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResumeEditPortfolioComponent_mat_card_8_Template, 47, 37, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "General.Field.Portfolio"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 6, "Editing.Field.AddField"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.form.get(ctx.formProp.Portfolio)["controls"]);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_9__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatHint"], _shared_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_12__["UploadImageComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
      styles: [".portfolio-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.portfolio[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  row-gap: 8px;\n}\n\n.portfolio[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.portfolio[_ngcontent-%COMP%]   .portfolio-group-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.portfolio[_ngcontent-%COMP%]   .portfolio-photo-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.portfolio[_ngcontent-%COMP%]   .portfolio-photo[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.portfolio[_ngcontent-%COMP%]   .portfolio-photo[_ngcontent-%COMP%]   .portfolio-photo-item[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 250px;\n}\n\n.portfolio[_ngcontent-%COMP%]   .portfolio-photo[_ngcontent-%COMP%]   .portfolio-photo-item[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.portfolio[_ngcontent-%COMP%]   .portfolio-photo[_ngcontent-%COMP%]   .portfolio-photo-item[_ngcontent-%COMP%]   yur-upload-image[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtcG9ydGZvbGlvL3Jlc3VtZS1lZGl0LXBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZWRpdC9yZXN1bWUtZWRpdC1wb3J0Zm9saW8vcmVzdW1lLWVkaXQtcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FER0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7QUNGSjs7QURJSTtFQUNFLE9BQUE7RUFDQSxhQUFBO0FDRk47O0FESU07RUFDRSxnQkFBQTtBQ0ZSOztBREtNO0VBQ0UsWUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZWRpdC9yZXN1bWUtZWRpdC1wb3J0Zm9saW8vcmVzdW1lLWVkaXQtcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRmb2xpby10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvcnRmb2xpbyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICByb3ctZ2FwOiA4cHg7XG5cbiAgbWF0LWZvcm0tZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnBvcnRmb2xpby1ncm91cC10aXRsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0Zm9saW8tcGhvdG8tY291bnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5wb3J0Zm9saW8tcGhvdG8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAucG9ydGZvbGlvLXBob3RvLWl0ZW0ge1xuICAgICAgZmxleDogMTtcbiAgICAgIGhlaWdodDogMjUwcHg7XG5cbiAgICAgICYgKyAqIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cblxuICAgICAgeXVyLXVwbG9hZC1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi5wb3J0Zm9saW8tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wb3J0Zm9saW8ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgcm93LWdhcDogOHB4O1xufVxuLnBvcnRmb2xpbyBtYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWdyb3VwLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLXBob3RvLWNvdW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1waG90byB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8tcGhvdG8gLnBvcnRmb2xpby1waG90by1pdGVtIHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1waG90byAucG9ydGZvbGlvLXBob3RvLWl0ZW0gKyAqIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1waG90byAucG9ydGZvbGlvLXBob3RvLWl0ZW0geXVyLXVwbG9hZC1pbWFnZSB7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeEditPortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-edit-portfolio',
          templateUrl: './resume-edit-portfolio.component.html',
          styleUrls: ['./resume-edit-portfolio.component.scss'],
          providers: [Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditPortfolioComponent)]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.model.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.model.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: ResumeEditProfileFormProperties, RESUME_EDIT_PROFILE_FORM_GROUP */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditProfileResumeEditProfileComponentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditProfileFormProperties", function () {
      return ResumeEditProfileFormProperties;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RESUME_EDIT_PROFILE_FORM_GROUP", function () {
      return RESUME_EDIT_PROFILE_FORM_GROUP;
    });

    var ResumeEditProfileFormProperties;

    (function (ResumeEditProfileFormProperties) {
      ResumeEditProfileFormProperties["Profile"] = "profile";
    })(ResumeEditProfileFormProperties || (ResumeEditProfileFormProperties = {}));

    var RESUME_EDIT_PROFILE_FORM_GROUP = _defineProperty({}, ResumeEditProfileFormProperties.Profile, '');
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: ResumeEditProfileComponent */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditProfileResumeEditProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditProfileComponent", function () {
      return ResumeEditProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @shared/base/cva.base */
    "./src/app/shared/base/cva.base.ts");
    /* harmony import */


    var _resume_edit_profile_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume-edit-profile.component.model */
    "./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.model.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var ResumeEditProfileComponent =
    /*#__PURE__*/
    function (_shared_base_cva_base5) {
      _inherits(ResumeEditProfileComponent, _shared_base_cva_base5);

      var _super5 = _createSuper(ResumeEditProfileComponent);

      function ResumeEditProfileComponent(fb) {
        var _this8;

        _classCallCheck(this, ResumeEditProfileComponent);

        _this8 = _super5.call(this);
        _this8.fb = fb;
        _this8.formProp = _resume_edit_profile_component_model__WEBPACK_IMPORTED_MODULE_3__["ResumeEditProfileFormProperties"];
        return _this8;
      }

      _createClass(ResumeEditProfileComponent, [{
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group(_resume_edit_profile_component_model__WEBPACK_IMPORTED_MODULE_3__["RESUME_EDIT_PROFILE_FORM_GROUP"]);
        }
      }]);

      return ResumeEditProfileComponent;
    }(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["CvaBase"]);

    ResumeEditProfileComponent.ɵfac = function ResumeEditProfileComponent_Factory(t) {
      return new (t || ResumeEditProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    ResumeEditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeEditProfileComponent,
      selectors: [["yur-resume-edit-profile"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditProfileComponent)]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 12,
      vars: 11,
      consts: [[1, "profile", 3, "formGroup"], ["appearance", "outline"], ["rows", "10", "matInput", "", 1, "caret-white", 3, "formControlName"]],
      template: function ResumeEditProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "textarea", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "General.Field.Profile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "General.Field.Profile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx.formProp.Profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 9, "Editing.Message.WriteYourProfile"));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatHint"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtcHJvZmlsZS9yZXN1bWUtZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LXByb2ZpbGUvcmVzdW1lLWVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtcHJvZmlsZS9yZXN1bWUtZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiIsIm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeEditProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-edit-profile',
          templateUrl: './resume-edit-profile.component.html',
          styleUrls: ['./resume-edit-profile.component.scss'],
          providers: [Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__["createValueAccessor"])(ResumeEditProfileComponent)]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-edit/resume-edit.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit.component.ts ***!
    \***********************************************************************/

  /*! exports provided: ResumeEditComponent */

  /***/
  function srcAppResumeGeneratorResumeEditResumeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeEditComponent", function () {
      return ResumeEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./resume-edit-about-me/resume-edit-about-me.component */
    "./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts");
    /* harmony import */


    var _resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./resume-edit-profile/resume-edit-profile.component */
    "./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts");
    /* harmony import */


    var _resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./resume-edit-education/resume-edit-education.component */
    "./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts");
    /* harmony import */


    var _resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./resume-edit-experience/resume-edit-experience.component */
    "./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts");
    /* harmony import */


    var _resume_edit_portfolio_resume_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./resume-edit-portfolio/resume-edit-portfolio.component */
    "./src/app/resume-generator/resume-edit/resume-edit-portfolio/resume-edit-portfolio.component.ts");

    var _c0 = ["downloadRef"];

    var ResumeEditComponent =
    /*#__PURE__*/
    function () {
      function ResumeEditComponent(fb, route, http, translateService) {
        _classCallCheck(this, ResumeEditComponent);

        this.fb = fb;
        this.route = route;
        this.http = http;
        this.translateService = translateService;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ResumeEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
          this.initForm();
          this.subscribeFilePathFromUrl();
          this.subscription.add(this.form.valueChanges.subscribe(function (val) {
            _this9.valueChange.emit(val);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.form = this.fb.group({
            aboutMe: this.fb.control(''),
            profile: this.fb.control(''),
            education: this.fb.control(''),
            experience: this.fb.control(''),
            portfolio: this.fb.control('')
          });
        }
      }, {
        key: "onDownloadFile",
        value: function onDownloadFile() {
          if (!this.downloadRef) {
            return;
          }

          var file = new Blob([JSON.stringify(this.form.getRawValue())], {
            type: 'text/plain'
          });
          var fileName = 'resume-edit-form';
          var url = window.URL.createObjectURL(file);
          this.downloadRef.nativeElement.setAttribute('href', url);
          this.downloadRef.nativeElement.setAttribute('download', fileName);
          this.downloadRef.nativeElement.click();
        }
      }, {
        key: "onUploadFile",
        value: function onUploadFile(event) {
          var _this10 = this;

          var file = event.target.files[0];

          if (!file) {
            return;
          }

          var reader = new FileReader();

          reader.onload = function (e) {
            try {
              _this10.updateJsonToForm(e.target.result.toString());
            } catch (error) {
              alert(_this10.translateService.instant('General.Message.ContentFormatIncorrect'));
            }
          };

          reader.readAsText(file);
        }
      }, {
        key: "subscribeFilePathFromUrl",
        value: function subscribeFilePathFromUrl() {
          var _this11 = this;

          var filePath = this.route.snapshot.queryParams.path;

          if (!filePath) {
            return;
          }

          this.subscription.add(this.http.get("assets/resume-edit/".concat(filePath)).subscribe(function (data) {
            try {
              _this11.updateJsonToForm(JSON.stringify(data));
            } catch (error) {
              console.log('error', error);
              alert(_this11.translateService.instant('General.Message.ContentFormatIncorrect'));
            }
          }));
        }
      }, {
        key: "updateJsonToForm",
        value: function updateJsonToForm(text) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;

          var jsonData = JSON.parse(text);
          jsonData = {
            aboutMe: {
              jobTitle: ((_b = (_a = jsonData) === null || _a === void 0 ? void 0 : _a.aboutMe) === null || _b === void 0 ? void 0 : _b.jobTitle) || '',
              chineseName: ((_d = (_c = jsonData) === null || _c === void 0 ? void 0 : _c.aboutMe) === null || _d === void 0 ? void 0 : _d.chineseName) || '',
              englishName: ((_f = (_e = jsonData) === null || _e === void 0 ? void 0 : _e.aboutMe) === null || _f === void 0 ? void 0 : _f.englishName) || '',
              photo: ((_h = (_g = jsonData) === null || _g === void 0 ? void 0 : _g.aboutMe) === null || _h === void 0 ? void 0 : _h.photo) || '',
              age: ((_k = (_j = jsonData) === null || _j === void 0 ? void 0 : _j.aboutMe) === null || _k === void 0 ? void 0 : _k.age) || '',
              blog: ((_m = (_l = jsonData) === null || _l === void 0 ? void 0 : _l.aboutMe) === null || _m === void 0 ? void 0 : _m.blog) || '',
              email: ((_p = (_o = jsonData) === null || _o === void 0 ? void 0 : _o.aboutMe) === null || _p === void 0 ? void 0 : _p.email) || '',
              phone: ((_r = (_q = jsonData) === null || _q === void 0 ? void 0 : _q.aboutMe) === null || _r === void 0 ? void 0 : _r.phone) || '',
              github: ((_t = (_s = jsonData) === null || _s === void 0 ? void 0 : _s.aboutMe) === null || _t === void 0 ? void 0 : _t.github) || '',
              codePen: ((_v = (_u = jsonData) === null || _u === void 0 ? void 0 : _u.aboutMe) === null || _v === void 0 ? void 0 : _v.codePen) || ''
            },
            education: {
              education: (((_x = (_w = jsonData) === null || _w === void 0 ? void 0 : _w.education) === null || _x === void 0 ? void 0 : _x.education) || []).map(function (item) {
                var _a, _b, _c;

                return {
                  school: ((_a = item) === null || _a === void 0 ? void 0 : _a.school) || '',
                  department: ((_b = item) === null || _b === void 0 ? void 0 : _b.department) || '',
                  period: ((_c = item) === null || _c === void 0 ? void 0 : _c.period) || ''
                };
              })
            },
            profile: {
              profile: ((_z = (_y = jsonData) === null || _y === void 0 ? void 0 : _y.profile) === null || _z === void 0 ? void 0 : _z.profile) || ''
            },
            experience: {
              experience: (((_1 = (_0 = jsonData) === null || _0 === void 0 ? void 0 : _0.experience) === null || _1 === void 0 ? void 0 : _1.experience) || []).map(function (item) {
                var _a, _b, _c, _d, _e, _f;

                return {
                  period: ((_a = item) === null || _a === void 0 ? void 0 : _a.period) || '',
                  company: ((_b = item) === null || _b === void 0 ? void 0 : _b.company) || '',
                  jobTitle: ((_c = item) === null || _c === void 0 ? void 0 : _c.jobTitle) || '',
                  skillTags: ((_d = item) === null || _d === void 0 ? void 0 : _d.skillTags) || '',
                  jobDescription: ((_e = item) === null || _e === void 0 ? void 0 : _e.jobDescription) || '',
                  workPlace: ((_f = item) === null || _f === void 0 ? void 0 : _f.workPlace) || ''
                };
              })
            },
            portfolio: {
              portfolio: (((_3 = (_2 = jsonData) === null || _2 === void 0 ? void 0 : _2.portfolio) === null || _3 === void 0 ? void 0 : _3.portfolio) || []).map(function (item) {
                var _a, _b, _c, _d, _e;

                return {
                  photoCount: ((_a = item) === null || _a === void 0 ? void 0 : _a.photoCount) || 1,
                  photos: ((_b = item) === null || _b === void 0 ? void 0 : _b.photos) || [],
                  description: ((_c = item) === null || _c === void 0 ? void 0 : _c.description) || '',
                  title: ((_d = item) === null || _d === void 0 ? void 0 : _d.title) || '',
                  skillTags: ((_e = item) === null || _e === void 0 ? void 0 : _e.skillTags) || ''
                };
              })
            }
          };
          console.log('jsonData', jsonData);
          this.form.setValue(jsonData);
        }
      }]);

      return ResumeEditComponent;
    }();

    ResumeEditComponent.ɵfac = function ResumeEditComponent_Factory(t) {
      return new (t || ResumeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]));
    };

    ResumeEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeEditComponent,
      selectors: [["yur-resume-edit"]],
      viewQuery: function ResumeEditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.downloadRef = _t.first);
        }
      },
      outputs: {
        valueChange: "valueChange"
      },
      decls: 16,
      vars: 9,
      consts: [[1, "resume-edit-tool"], ["mat-icon-button", "", 1, "resume-edit-tool-upload-btn", 3, "matTooltip"], ["fontSet", "fas", "fontIcon", "fa-file-upload"], ["type", "file", "accept", ".txt,.json", 1, "caret-white", 3, "change"], ["mat-icon-button", "", 3, "matTooltip", "click"], ["fontSet", "fas", "fontIcon", "fa-file-download"], ["downloadRef", ""], [3, "formGroup"], ["formControlName", "aboutMe"], ["formControlName", "profile", 1, "mt-8"], ["formControlName", "education", 1, "mt-8"], ["formControlName", "experience", 1, "mt-8"], ["formControlName", "portfolio", 1, "mt-8"]],
      template: function ResumeEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-icon", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ResumeEditComponent_Template_input_change_4_listener($event) {
            return ctx.onUploadFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResumeEditComponent_Template_button_click_5_listener() {
            return ctx.onDownloadFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "yur-resume-edit-about-me", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "yur-resume-edit-profile", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "yur-resume-edit-education", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "yur-resume-edit-experience", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "yur-resume-edit-portfolio", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "General.Field.UploadFile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "General.Field.DownloadFile"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", "none");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_9__["ResumeEditAboutMeComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_10__["ResumeEditProfileComponent"], _resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_11__["ResumeEditEducationComponent"], _resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_12__["ResumeEditExperienceComponent"], _resume_edit_portfolio_resume_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_13__["ResumeEditPortfolioComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["[_nghost-%COMP%] {\n  background: var(--resume-edit-bg);\n  color: var(--resume-edit-color);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n}\n\n.resume-edit-tool[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.resume-edit-tool[_ngcontent-%COMP%]   .resume-edit-tool-upload-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.resume-edit-tool[_ngcontent-%COMP%]   .resume-edit-tool-upload-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0FDQ0o7O0FEQ0k7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZWRpdC9yZXN1bWUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVzdW1lLWVkaXQtYmcpO1xuICBjb2xvcjogdmFyKC0tcmVzdW1lLWVkaXQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yZXN1bWUtZWRpdC10b29sIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgLnJlc3VtZS1lZGl0LXRvb2wtdXBsb2FkLWJ0biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW5wdXQge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVzdW1lLWVkaXQtYmcpO1xuICBjb2xvcjogdmFyKC0tcmVzdW1lLWVkaXQtY29sb3IpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5yZXN1bWUtZWRpdC10b29sIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucmVzdW1lLWVkaXQtdG9vbCAucmVzdW1lLWVkaXQtdG9vbC11cGxvYWQtYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlc3VtZS1lZGl0LXRvb2wgLnJlc3VtZS1lZGl0LXRvb2wtdXBsb2FkLWJ0biBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-edit',
          templateUrl: './resume-edit.component.html',
          styleUrls: ['./resume-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }];
      }, {
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        downloadRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['downloadRef']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-generator-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/resume-generator/resume-generator-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: ResumeGeneratorRoutingModule */

  /***/
  function srcAppResumeGeneratorResumeGeneratorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeGeneratorRoutingModule", function () {
      return ResumeGeneratorRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _resume_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./resume-generator.component */
    "./src/app/resume-generator/resume-generator.component.ts");
    /* harmony import */


    var _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resume-edit/resume-edit.component */
    "./src/app/resume-generator/resume-edit/resume-edit.component.ts");
    /* harmony import */


    var _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resume-preview/resume-preview.component */
    "./src/app/resume-generator/resume-preview/resume-preview.component.ts");

    var routes = [{
      path: 'generator',
      component: _resume_generator_component__WEBPACK_IMPORTED_MODULE_3__["ResumeGeneratorComponent"]
    }, {
      path: 'edit',
      component: _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_4__["ResumeEditComponent"]
    }, {
      path: 'preview',
      component: _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewComponent"]
    }, {
      path: '**',
      redirectTo: 'generator'
    }];

    var ResumeGeneratorRoutingModule = function ResumeGeneratorRoutingModule() {
      _classCallCheck(this, ResumeGeneratorRoutingModule);
    };

    ResumeGeneratorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResumeGeneratorRoutingModule
    });
    ResumeGeneratorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResumeGeneratorRoutingModule_Factory(t) {
        return new (t || ResumeGeneratorRoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeGeneratorRoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeGeneratorRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-generator.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/resume-generator/resume-generator.component.ts ***!
    \****************************************************************/

  /*! exports provided: ResumeGeneratorComponent */

  /***/
  function srcAppResumeGeneratorResumeGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeGeneratorComponent", function () {
      return ResumeGeneratorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./resume-edit/resume-edit.component */
    "./src/app/resume-generator/resume-edit/resume-edit.component.ts");
    /* harmony import */


    var _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resume-preview/resume-preview.component */
    "./src/app/resume-generator/resume-preview/resume-preview.component.ts");

    var ResumeGeneratorComponent =
    /*#__PURE__*/
    function () {
      function ResumeGeneratorComponent() {
        _classCallCheck(this, ResumeGeneratorComponent);
      }

      _createClass(ResumeGeneratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onValueChange",
        value: function onValueChange(data) {
          console.log('data', data);
          this.previewData = {
            /* about me */
            jobTitle: data.aboutMe.jobTitle,
            chineseName: data.aboutMe.chineseName,
            englishName: data.aboutMe.englishName,
            age: data.aboutMe.age,
            photo: data.aboutMe.photo,
            blog: data.aboutMe.blog,
            email: data.aboutMe.email,
            phone: data.aboutMe.phone,
            github: data.aboutMe.github,
            codePen: data.aboutMe.codePen,

            /* profile */
            profile: data.profile.profile,

            /* education */
            education: data.education.education || [],

            /* experience */
            experience: (data.experience.experience || []).map(function (item) {
              return Object.assign(Object.assign({}, item), {
                skillTags: item.skillTags ? item.skillTags.split(',').map(function (tag) {
                  return tag.trim();
                }) : []
              });
            }),

            /* portfolio */
            portfolio: (data.portfolio.portfolio || []).map(function (item) {
              return Object.assign(Object.assign({}, item), {
                skillTags: item.skillTags ? item.skillTags.split(',').map(function (tag) {
                  return tag.trim();
                }) : []
              });
            }) || []
          };
          console.log('this.previewData', this.previewData);
        }
      }]);

      return ResumeGeneratorComponent;
    }();

    ResumeGeneratorComponent.ɵfac = function ResumeGeneratorComponent_Factory(t) {
      return new (t || ResumeGeneratorComponent)();
    };

    ResumeGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumeGeneratorComponent,
      selectors: [["yur-resume-generator"]],
      decls: 3,
      vars: 1,
      consts: [[3, "valueChange"], [1, "separate-line", "mr-8"], [3, "data"]],
      template: function ResumeGeneratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "yur-resume-edit", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ResumeGeneratorComponent_Template_yur_resume_edit_valueChange_0_listener($event) {
            return ctx.onValueChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "yur-resume-preview", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.previewData);
        }
      },
      directives: [_resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_1__["ResumeEditComponent"], _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_2__["ResumePreviewComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\nyur-resume-edit[_ngcontent-%COMP%] {\n  min-width: 540px;\n  max-width: 40vw;\n  max-height: 100vh;\n  overflow: auto;\n}\n\nyur-resume-preview[_ngcontent-%COMP%] {\n  width: 210mm;\n  margin: auto;\n  max-height: 100vh;\n  overflow: auto;\n}\n\n.separate-line[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  flex-basis: 8px;\n  box-shadow: 4px 0 4px #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG55dXItcmVzdW1lLWVkaXQge1xuICBtaW4td2lkdGg6IDU0MHB4O1xuICBtYXgtd2lkdGg6IDQwdnc7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxueXVyLXJlc3VtZS1wcmV2aWV3IHtcbiAgd2lkdGg6IDIxMG1tO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNlcGFyYXRlLWxpbmUge1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogOHB4O1xuICBib3gtc2hhZG93OiA0cHggMCA0cHggI2RkZDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG55dXItcmVzdW1lLWVkaXQge1xuICBtaW4td2lkdGg6IDU0MHB4O1xuICBtYXgtd2lkdGg6IDQwdnc7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxueXVyLXJlc3VtZS1wcmV2aWV3IHtcbiAgd2lkdGg6IDIxMG1tO1xuICBtYXJnaW46IGF1dG87XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnNlcGFyYXRlLWxpbmUge1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogOHB4O1xuICBib3gtc2hhZG93OiA0cHggMCA0cHggI2RkZDtcbn0iXX0= */", "@media print {\n  yur-resume-edit[_ngcontent-%COMP%], div.separate-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  yur-resume-preview[_ngcontent-%COMP%] {\n    max-height: inherit !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWdlbmVyYXRvci5jb21wb25lbnQucHJpbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZ2VuZXJhdG9yLmNvbXBvbmVudC5wcmludC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7O0lBRUUsYUFBQTtFQ0NGOztFREVBO0lBQ0UsOEJBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZ2VuZXJhdG9yLmNvbXBvbmVudC5wcmludC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcbiAgeXVyLXJlc3VtZS1lZGl0LFxuICBkaXYuc2VwYXJhdGUtbGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHl1ci1yZXN1bWUtcHJldmlldyB7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB9XG59XG4iLCJAbWVkaWEgcHJpbnQge1xuICB5dXItcmVzdW1lLWVkaXQsXG5kaXYuc2VwYXJhdGUtbGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHl1ci1yZXN1bWUtcHJldmlldyB7XG4gICAgbWF4LWhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-generator',
          templateUrl: './resume-generator.component.html',
          styleUrls: ['./resume-generator.component.scss', './resume-generator.component.print.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-generator.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/resume-generator/resume-generator.module.ts ***!
    \*************************************************************/

  /*! exports provided: ResumeGeneratorModule */

  /***/
  function srcAppResumeGeneratorResumeGeneratorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumeGeneratorModule", function () {
      return ResumeGeneratorModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _resume_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./resume-generator.component */
    "./src/app/resume-generator/resume-generator.component.ts");
    /* harmony import */


    var _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resume-preview/resume-preview.component */
    "./src/app/resume-generator/resume-preview/resume-preview.component.ts");
    /* harmony import */


    var _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./resume-edit/resume-edit.component */
    "./src/app/resume-generator/resume-edit/resume-edit.component.ts");
    /* harmony import */


    var _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./resume-generator-routing.module */
    "./src/app/resume-generator/resume-generator-routing.module.ts");
    /* harmony import */


    var _resume_edit_resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./resume-edit/resume-edit-about-me/resume-edit-about-me.component */
    "./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts");
    /* harmony import */


    var _resume_edit_resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./resume-edit/resume-edit-profile/resume-edit-profile.component */
    "./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts");
    /* harmony import */


    var _resume_edit_resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./resume-edit/resume-edit-education/resume-edit-education.component */
    "./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts");
    /* harmony import */


    var _resume_edit_resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./resume-edit/resume-edit-experience/resume-edit-experience.component */
    "./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts");
    /* harmony import */


    var _resume_preview_resume_preview_layout1_resume_preview_layout1_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./resume-preview/resume-preview-layout1/resume-preview-layout1.component */
    "./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts");
    /* harmony import */


    var _resume_preview_resume_preview_layout1_resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component */
    "./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts");
    /* harmony import */


    var _resume_edit_resume_edit_portfolio_resume_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./resume-edit/resume-edit-portfolio/resume-edit-portfolio.component */
    "./src/app/resume-generator/resume-edit/resume-edit-portfolio/resume-edit-portfolio.component.ts");
    /* harmony import */


    var _resume_preview_resume_preview_layout2_resume_preview_layout2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./resume-preview/resume-preview-layout2/resume-preview-layout2.component */
    "./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2.component.ts");
    /* harmony import */


    var _resume_preview_resume_preview_layout2_resume_preview_layout2_title_resume_preview_layout2_title_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./resume-preview/resume-preview-layout2/resume-preview-layout2-title/resume-preview-layout2-title.component */
    "./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2-title/resume-preview-layout2-title.component.ts");

    var ResumeGeneratorModule = function ResumeGeneratorModule() {
      _classCallCheck(this, ResumeGeneratorModule);
    };

    ResumeGeneratorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResumeGeneratorModule
    });
    ResumeGeneratorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResumeGeneratorModule_Factory(t) {
        return new (t || ResumeGeneratorModule)();
      },
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_7__["ResumeGeneratorRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResumeGeneratorModule, {
        declarations: [_resume_generator_component__WEBPACK_IMPORTED_MODULE_4__["ResumeGeneratorComponent"], _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewComponent"], _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_6__["ResumeEditComponent"], _resume_edit_resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_8__["ResumeEditAboutMeComponent"], _resume_edit_resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["ResumeEditProfileComponent"], _resume_edit_resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_10__["ResumeEditEducationComponent"], _resume_edit_resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_11__["ResumeEditExperienceComponent"], _resume_edit_resume_edit_portfolio_resume_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["ResumeEditPortfolioComponent"], _resume_preview_resume_preview_layout1_resume_preview_layout1_component__WEBPACK_IMPORTED_MODULE_12__["ResumePreviewLayout1Component"], _resume_preview_resume_preview_layout1_resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_13__["ResumePreviewLayout1TitleComponent"], _resume_preview_resume_preview_layout2_resume_preview_layout2_component__WEBPACK_IMPORTED_MODULE_15__["ResumePreviewLayout2Component"], _resume_preview_resume_preview_layout2_resume_preview_layout2_title_resume_preview_layout2_title_component__WEBPACK_IMPORTED_MODULE_16__["ResumePreviewLayout2TitleComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_7__["ResumeGeneratorRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeGeneratorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_7__["ResumeGeneratorRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"]],
          declarations: [_resume_generator_component__WEBPACK_IMPORTED_MODULE_4__["ResumeGeneratorComponent"], _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewComponent"], _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_6__["ResumeEditComponent"], _resume_edit_resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_8__["ResumeEditAboutMeComponent"], _resume_edit_resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__["ResumeEditProfileComponent"], _resume_edit_resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_10__["ResumeEditEducationComponent"], _resume_edit_resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_11__["ResumeEditExperienceComponent"], _resume_edit_resume_edit_portfolio_resume_edit_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["ResumeEditPortfolioComponent"], _resume_preview_resume_preview_layout1_resume_preview_layout1_component__WEBPACK_IMPORTED_MODULE_12__["ResumePreviewLayout1Component"], _resume_preview_resume_preview_layout1_resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_13__["ResumePreviewLayout1TitleComponent"], _resume_preview_resume_preview_layout2_resume_preview_layout2_component__WEBPACK_IMPORTED_MODULE_15__["ResumePreviewLayout2Component"], _resume_preview_resume_preview_layout2_resume_preview_layout2_title_resume_preview_layout2_title_component__WEBPACK_IMPORTED_MODULE_16__["ResumePreviewLayout2TitleComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts":
  /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: ResumePreviewLayout1TitleComponent */

  /***/
  function srcAppResumeGeneratorResumePreviewResumePreviewLayout1ResumePreviewLayout1TitleResumePreviewLayout1TitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePreviewLayout1TitleComponent", function () {
      return ResumePreviewLayout1TitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ResumePreviewLayout1TitleComponent =
    /*#__PURE__*/
    function () {
      function ResumePreviewLayout1TitleComponent() {
        _classCallCheck(this, ResumePreviewLayout1TitleComponent);
      }

      _createClass(ResumePreviewLayout1TitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumePreviewLayout1TitleComponent;
    }();

    ResumePreviewLayout1TitleComponent.ɵfac = function ResumePreviewLayout1TitleComponent_Factory(t) {
      return new (t || ResumePreviewLayout1TitleComponent)();
    };

    ResumePreviewLayout1TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumePreviewLayout1TitleComponent,
      selectors: [["yur-resume-preview-layout1-title"]],
      inputs: {
        icon: "icon",
        title: "title"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "title-info", "pl-16"], [3, "fontSet", "fontIcon"], [1, "title", "ml-16"], [1, "divider", "mt-8", "mb-16"]],
      template: function ResumePreviewLayout1TitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontSet", ctx.icon == null ? null : ctx.icon.fontSet)("fontIcon", ctx.icon == null ? null : ctx.icon.fontIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.icon == null ? null : ctx.icon.fontSet) ? "" : ctx.icon == null ? null : ctx.icon.fontIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".title-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.title-info[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: var(--resume-preview-theme-color);\n}\n.title-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n.divider[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 5px;\n  background: var(--resume-preview-theme-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0MS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLXRpdGxlL3Jlc3VtZS1wcmV2aWV3LWxheW91dDEtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0MS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLXRpdGxlL3Jlc3VtZS1wcmV2aWV3LWxheW91dDEtdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUNDSjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQUo7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0MS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLXRpdGxlL3Jlc3VtZS1wcmV2aWV3LWxheW91dDEtdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5kaXZpZGVyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG59XG4iLCIudGl0bGUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi50aXRsZS1pbmZvIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbn1cbi50aXRsZS1pbmZvIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumePreviewLayout1TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-preview-layout1-title',
          templateUrl: './resume-preview-layout1-title.component.html',
          styleUrls: ['./resume-preview-layout1-title.component.scss']
        }]
      }], function () {
        return [];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: ResumePreviewLayout1Component */

  /***/
  function srcAppResumeGeneratorResumePreviewResumePreviewLayout1ResumePreviewLayout1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePreviewLayout1Component", function () {
      return ResumePreviewLayout1Component;
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


    var _resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resume-preview-layout1-title/resume-preview-layout1-title.component */
    "./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return {
        fontSet: "fab",
        fontIcon: "fa-css3-alt"
      };
    };

    function ResumePreviewLayout1Component_yur_resume_preview_layout1_title_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yur-resume-preview-layout1-title", 14);
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r21.data.jobTitle)("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function ResumePreviewLayout1Component_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.data.chineseName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.data.englishName);
      }
    }

    function ResumePreviewLayout1Component_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r23.data.photo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.data.age);
      }
    }

    function ResumePreviewLayout1Component_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r24.data.blog, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.data.blog);
      }
    }

    function ResumePreviewLayout1Component_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r25.data.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.data.email);
      }
    }

    function ResumePreviewLayout1Component_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.data.phone);
      }
    }

    function ResumePreviewLayout1Component_li_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r27.data.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.data.github);
      }
    }

    function ResumePreviewLayout1Component_li_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r28.data.codePen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.data.codePen);
      }
    }

    var _c1 = function _c1() {
      return {
        fontSet: "fas",
        fontIcon: "fa-file-contract"
      };
    };

    function ResumePreviewLayout1Component_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "yur-resume-preview-layout1-title", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "General.Field.Profile"))("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r29.data.profile, " ");
      }
    }

    function ResumePreviewLayout1Component_div_15_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r34 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.school);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.period);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r34.department);
      }
    }

    var _c2 = function _c2() {
      return {
        fontSet: "fas",
        fontIcon: "fa-graduation-cap"
      };
    };

    function ResumePreviewLayout1Component_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "yur-resume-preview-layout1-title", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout1Component_div_15_li_4_Template, 9, 3, "li", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "General.Field.Education"))("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r30.data == null ? null : ctx_r30.data.education);
      }
    }

    function ResumePreviewLayout1Component_div_16_li_4_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r38 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r38, " ");
      }
    }

    function ResumePreviewLayout1Component_div_16_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResumePreviewLayout1Component_div_16_li_4_span_16_Template, 2, 1, "span", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r36 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.period);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.workPlace);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r36.jobTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r36.skillTags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r36.jobDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var _c3 = function _c3() {
      return {
        fontSet: "fas",
        fontIcon: "fa-street-view"
      };
    };

    function ResumePreviewLayout1Component_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "yur-resume-preview-layout1-title", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout1Component_div_16_li_4_Template, 19, 6, "li", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "General.Field.WorkExperience"))("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r31.data == null ? null : ctx_r31.data.experience);
      }
    }

    function ResumePreviewLayout1Component_div_17_li_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r43 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r43, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function ResumePreviewLayout1Component_div_17_li_4_small_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r44 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r44, " ");
      }
    }

    function ResumePreviewLayout1Component_div_17_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResumePreviewLayout1Component_div_17_li_4_div_3_Template, 2, 1, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumePreviewLayout1Component_div_17_li_4_small_9_Template, 2, 1, "small", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r40.photos);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r40.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r40.skillTags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r40.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var _c4 = function _c4() {
      return {
        fontSet: "fas",
        fontIcon: "fa-pencil-ruler"
      };
    };

    function ResumePreviewLayout1Component_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "yur-resume-preview-layout1-title", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout1Component_div_17_li_4_Template, 11, 4, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "General.Field.Portfolio"))("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r32.data == null ? null : ctx_r32.data.portfolio);
      }
    }

    var ResumePreviewLayout1Component = function ResumePreviewLayout1Component() {
      _classCallCheck(this, ResumePreviewLayout1Component);
    };

    ResumePreviewLayout1Component.ɵfac = function ResumePreviewLayout1Component_Factory(t) {
      return new (t || ResumePreviewLayout1Component)();
    };

    ResumePreviewLayout1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumePreviewLayout1Component,
      selectors: [["yur-resume-preview-layout1"]],
      inputs: {
        data: "data"
      },
      decls: 18,
      vars: 12,
      consts: [[1, "resume-preview"], [1, "about-me", "block"], [1, "job-info"], [3, "title", "icon", 4, "ngIf"], ["class", "pl-36", 4, "ngIf"], ["class", "photo-info", 4, "ngIf"], [1, "link-info", "ml-28"], ["class", "link-item", 4, "ngIf"], [1, "resume-preview-content", "pl-32", "pr-32"], [1, "personal-profile", "mt-32"], ["class", "profile", 4, "ngIf"], ["class", "education", 4, "ngIf"], ["class", "experience block", 4, "ngIf"], ["class", "portfolio mt-32", 4, "ngIf"], [3, "title", "icon"], [1, "pl-36"], [1, "chinese-name"], [1, "english-name", "ml-8"], [1, "photo-info"], [1, "img"], ["alt", "photo", 3, "src"], [1, "age"], [1, "link-item"], ["fontSet", "fas", "fontIcon", "fa-home"], [1, "link", 3, "href"], ["fontSet", "fas", "fontIcon", "fa-envelope-square"], ["fontSet", "fas", "fontIcon", "fa-phone-square-alt"], [1, "link"], ["fontSet", "fab", "fontIcon", "fa-github"], ["fontSet", "fab", "fontIcon", "fa-codepen"], [1, "profile"], [1, "profile-content", "pl-36"], [1, "education"], [1, "education-list", "pl-36"], ["class", "education-item", 4, "ngFor", "ngForOf"], [1, "education-item"], ["fontSet", "fas", "fontIcon", "fa-school"], [1, "education-item-content"], [1, "school"], [1, "period"], [1, "department"], [1, "experience", "block"], [1, "experience-list", "ml-20", "pt-16"], ["class", "experience-item ml-16", 4, "ngFor", "ngForOf"], [1, "experience-item", "ml-16"], [1, "experience-item-content"], [1, "company", "mb-4"], [1, "skill-list", "mb-8"], ["class", "skill-item mt-4 mb-4", 4, "ngFor", "ngForOf"], [1, "job-description"], [3, "innerHTML"], [1, "skill-item", "mt-4", "mb-4"], [1, "portfolio", "mt-32"], [1, "portfolio-list", "pl-36"], ["class", "portfolio-item", 4, "ngFor", "ngForOf"], [1, "portfolio-item"], [1, "portfolio-item-content"], [1, "portfolio-item-photos"], ["class", "portfolio-item-photo", 4, "ngFor", "ngForOf"], [1, "portfolio-description", "ml-32"], [1, "mb-4"], [1, "portfolio-item-photo"], ["alt", "portfolio photo", 3, "src"]],
      template: function ResumePreviewLayout1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResumePreviewLayout1Component_yur_resume_preview_layout1_title_3_Template, 1, 3, "yur-resume-preview-layout1-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout1Component_div_4_Template, 5, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ResumePreviewLayout1Component_div_5_Template, 5, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResumePreviewLayout1Component_li_7_Template, 4, 2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResumePreviewLayout1Component_li_8_Template, 4, 2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumePreviewLayout1Component_li_9_Template, 4, 1, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResumePreviewLayout1Component_li_10_Template, 4, 2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResumePreviewLayout1Component_li_11_Template, 4, 2, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResumePreviewLayout1Component_div_14_Template, 5, 6, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResumePreviewLayout1Component_div_15_Template, 5, 6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResumePreviewLayout1Component_div_16_Template, 5, 6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ResumePreviewLayout1Component_div_17_Template, 5, 6, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.jobTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.chineseName || ctx.data.englishName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.photo);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.blog);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.github);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.codePen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.profile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.education.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.experience.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.portfolio.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_2__["ResumePreviewLayout1TitleComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n.about-me[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ebebeb;\n  height: 200px;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 0 16px;\n}\n.about-me[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50px);\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  border-bottom: 4px solid var(--resume-preview-theme-color);\n  position: relative;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 66%;\n  height: 3px;\n  bottom: -12px;\n  background: var(--resume-preview-theme-color);\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  bottom: 8px;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.about-me[_ngcontent-%COMP%]   .link-info[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--resume-preview-theme-color);\n  text-align: center;\n  margin-right: 4px;\n}\n.about-me[_ngcontent-%COMP%]   .link-info[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.personal-profile[_ngcontent-%COMP%] {\n  display: flex;\n}\n.personal-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.personal-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]    + .education[_ngcontent-%COMP%] {\n  margin-left: 24px;\n}\n.personal-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]    + .education-item[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%] {\n  position: relative;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 2px;\n  background: #333232;\n  top: 0;\n  left: 0;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]:after {\n  content: \"\u25B4\";\n  position: absolute;\n  top: 0;\n  left: 1px;\n  font-size: 24px;\n  height: 0;\n  width: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #333232;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]    + .experience-item[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--resume-preview-theme-color);\n  left: 1px;\n  transform: translate(-50%, 50%);\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--resume-preview-theme-color);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%] {\n  border: 1px solid #333232;\n  border-radius: 20px;\n  color: #333232;\n  margin-right: 4px;\n  padding: 0 8px;\n  font-size: 12px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  display: flex;\n  height: 250px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]    + .portfolio-item[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%] {\n  border: 1px solid #333232;\n  border-radius: 20px;\n  color: #333232;\n  margin-right: 4px;\n  padding: 0 8px;\n  font-size: 11px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%]   .portfolio-item-photo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%]   .portfolio-item-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\n  flex: 2;\n  max-width: 65%;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtcHJldmlldy9yZXN1bWUtcHJldmlldy1sYXlvdXQxL3Jlc3VtZS1wcmV2aWV3LWxheW91dDEuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaHViZXJ0L3NlbGYvY29kaW5nL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDEvcmVzdW1lLXByZXZpZXctbGF5b3V0MS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUxnQjtFQU1oQix1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBREFGO0FDRUU7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0FEQUo7QUNHRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwREFBQTtFQUNBLGtCQUFBO0FEREo7QUNHSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FERE47QUNJSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURGTjtBQ0lNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBREZSO0FDTUk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBREpOO0FDVU07RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURSUjtBQ1dNO0VBQ0UsWUFBQTtBRFRSO0FDZUE7RUFDRSxhQUFBO0FEWkY7QUNjRTtFQUNFLE9BQUE7QURaSjtBQ2NJO0VBQ0UsaUJBQUE7QURaTjtBQ2VJO0VBQ0UscUJBQUE7QURiTjtBQ2lCRTtFQUNFLE9BQUE7QURmSjtBQ2lCSTtFQUNFLGFBQUE7QURmTjtBQ2lCTTtFQUNFLGdCQUFBO0FEZlI7QUNrQk07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QURoQlI7QUN1QkU7RUFDRSxrQkFBQTtBRHBCSjtBQ3VCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBUFc7RUFRWCxNQUFBO0VBQ0EsT0FBQTtBRHJCTjtBQ3dCSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQXZCVztBRENqQjtBQzBCTTtFQUNFLGdCQUFBO0FEeEJSO0FDNkJNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsU0FBQTtFQUNBLCtCQUFBO0FEM0JSO0FDOEJNO0VBQ0UsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FENUJSO0FDK0JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUQ3QlI7QUNnQ007RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRDlCUjtBQ2dDUTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWpFTztFQWtFUCxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEOUJWO0FDa0NNO0VBQ0UscUJBQUE7QURoQ1I7QUN1Q0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBRHBDSjtBQ3NDSTtFQUNFLGdCQUFBO0FEcENOO0FDdUNJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRHJDTjtBQ3dDSTtFQUVFLGFBQUE7RUFDQSxlQUFBO0FEdkNOO0FDeUNNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBUFc7RUFRWCxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEdkNSO0FDNENFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUQxQ0o7QUM0Q0k7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBRDFDTjtBQzRDTTtFQUNFLGdCQUFBO0FEMUNSO0FDNkNNO0VBQ0UsT0FBQTtBRDNDUjtBQzZDUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBRDNDVjtBQ2dESTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUQ5Q04iLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDEvcmVzdW1lLXByZXZpZXctbGF5b3V0MS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5hYm91dC1tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbi5hYm91dC1tZSAuam9iLWluZm8ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcbn1cbi5hYm91dC1tZSAucGhvdG8taW5mbyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQtbWUgLnBob3RvLWluZm86YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjYlO1xuICBoZWlnaHQ6IDNweDtcbiAgYm90dG9tOiAtMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xufVxuLmFib3V0LW1lIC5waG90by1pbmZvIC5pbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYm91dC1tZSAucGhvdG8taW5mbyAuaW1nIC5hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjhweDtcbiAgYm90dG9tOiA4cHg7XG59XG4uYWJvdXQtbWUgLnBob3RvLWluZm8gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5hYm91dC1tZSAubGluay1pbmZvIC5saW5rLWl0ZW0gLm1hdC1pY29uIHtcbiAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5hYm91dC1tZSAubGluay1pbmZvIC5saW5rLWl0ZW0gYSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnBlcnNvbmFsLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnBlcnNvbmFsLXByb2ZpbGUgLnByb2ZpbGUge1xuICBmbGV4OiAzO1xufVxuLnBlcnNvbmFsLXByb2ZpbGUgLnByb2ZpbGUgKyAuZWR1Y2F0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAucHJvZmlsZSAucHJvZmlsZS1jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuLnBlcnNvbmFsLXByb2ZpbGUgLmVkdWNhdGlvbiB7XG4gIGZsZXg6IDI7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAuZWR1Y2F0aW9uIC5lZHVjYXRpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAuZWR1Y2F0aW9uIC5lZHVjYXRpb24taXRlbSArIC5lZHVjYXRpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAuZWR1Y2F0aW9uIC5lZHVjYXRpb24taXRlbSAubWF0LWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZDogIzMzMzIzMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4pa0XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgaGVpZ2h0OiAwO1xuICB3aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzMjMyO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtICsgLmV4cGVyaWVuY2UtaXRlbSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0tY29udGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xuICBsZWZ0OiAxcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDUwJSk7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0tY29udGVudCAucGVyaW9kIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5jb21wYW55IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQgLnNraWxsLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0tY29udGVudCAuc2tpbGwtbGlzdCAuc2tpbGwtaXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMzMyMzI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiAjMzMzMjMyO1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgcGFkZGluZzogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5qb2ItZGVzY3JpcHRpb24ge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtICsgLnBvcnRmb2xpby1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtIC5za2lsbC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLnNraWxsLWxpc3QgLnNraWxsLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMjMyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogIzMzMzIzMjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtLWNvbnRlbnQgLnBvcnRmb2xpby1pdGVtLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbS1jb250ZW50IC5wb3J0Zm9saW8taXRlbS1waG90b3MgPiAqICsgKiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbS1jb250ZW50IC5wb3J0Zm9saW8taXRlbS1waG90b3MgLnBvcnRmb2xpby1pdGVtLXBob3RvIHtcbiAgZmxleDogMTtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtLWNvbnRlbnQgLnBvcnRmb2xpby1pdGVtLXBob3RvcyAucG9ydGZvbGlvLWl0ZW0tcGhvdG8gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0tY29udGVudCAucG9ydGZvbGlvLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMjtcbiAgbWF4LXdpZHRoOiA2NSU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn0iLCIkYWJvdXQtbWUtaGVpZ2h0OiAyMDBweDtcblxuLmFib3V0LW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgaGVpZ2h0OiAkYWJvdXQtbWUtaGVpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgLmpvYi1pbmZvIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtI3skYWJvdXQtbWUtaGVpZ2h0IC8gNH0pO1xuICB9XG5cbiAgLnBob3RvLWluZm8ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDY2JTtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuaW1nIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMjhweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5saW5rLWluZm8ge1xuICAgIC5saW5rLWl0ZW0ge1xuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBlcnNvbmFsLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5wcm9maWxlIHtcbiAgICBmbGV4OiAzO1xuXG4gICAgKyAuZWR1Y2F0aW9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIH1cblxuICAgIC5wcm9maWxlLWNvbnRlbnQge1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgIH1cbiAgfVxuXG4gIC5lZHVjYXRpb24ge1xuICAgIGZsZXg6IDI7XG5cbiAgICAuZWR1Y2F0aW9uLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgJiArIC5lZHVjYXRpb24taXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5leHBlcmllbmNlIHtcbiAgLmV4cGVyaWVuY2UtbGlzdCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICRsaW5lLWNvbG9yOiByZ2IoNTEsIDUwLCA1MCk7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAkbGluZS1jb2xvcjtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAn4pa0JztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDFweDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGhlaWdodDogMDtcbiAgICAgIHdpZHRoOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiAkbGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgICAgICYgKyAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQge1xuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xuICAgICAgfVxuXG4gICAgICAucGVyaW9kIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cblxuICAgICAgLmNvbXBhbnkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICB9XG5cbiAgICAgIC5za2lsbC1saXN0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIC5za2lsbC1pdGVtIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGluZS1jb2xvcjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgIGNvbG9yOiAkbGluZS1jb2xvcjtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmpvYi1kZXNjcmlwdGlvbiB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBvcnRmb2xpbyB7XG4gIC5wb3J0Zm9saW8taXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuXG4gICAgJiArIC5wb3J0Zm9saW8taXRlbSB7XG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIH1cblxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2tpbGwtbGlzdCB7XG4gICAgICAkbGluZS1jb2xvcjogcmdiKDUxLCA1MCwgNTApO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgLnNraWxsLWl0ZW0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGluZS1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgY29sb3I6ICRsaW5lLWNvbG9yO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucG9ydGZvbGlvLWl0ZW0tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnBvcnRmb2xpby1pdGVtLXBob3RvcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcblxuICAgICAgPiAqICsgKiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0Zm9saW8taXRlbS1waG90byB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24ge1xuICAgICAgZmxleDogMjtcbiAgICAgIG1heC13aWR0aDogNjUlO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIH1cbiAgfVxufVxuIl19 */", "@media print {\n  .portfolio-item[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0MS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLmNvbXBvbmVudC5wcmludC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDEvcmVzdW1lLXByZXZpZXctbGF5b3V0MS5jb21wb25lbnQucHJpbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0Usd0JBQUE7RUNDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtcHJldmlldy9yZXN1bWUtcHJldmlldy1sYXlvdXQxL3Jlc3VtZS1wcmV2aWV3LWxheW91dDEuY29tcG9uZW50LnByaW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgcHJpbnQge1xuICAucG9ydGZvbGlvLWl0ZW0ge1xuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbiAgfVxufVxuIiwiQG1lZGlhIHByaW50IHtcbiAgLnBvcnRmb2xpby1pdGVtIHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumePreviewLayout1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-preview-layout1',
          templateUrl: './resume-preview-layout1.component.html',
          styleUrls: ['./resume-preview-layout1.component.scss', './resume-preview-layout1.component.print.scss']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2-title/resume-preview-layout2-title.component.ts":
  /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2-title/resume-preview-layout2-title.component.ts ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: ResumePreviewLayout2TitleComponent */

  /***/
  function srcAppResumeGeneratorResumePreviewResumePreviewLayout2ResumePreviewLayout2TitleResumePreviewLayout2TitleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePreviewLayout2TitleComponent", function () {
      return ResumePreviewLayout2TitleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ResumePreviewLayout2TitleComponent =
    /*#__PURE__*/
    function () {
      function ResumePreviewLayout2TitleComponent() {
        _classCallCheck(this, ResumePreviewLayout2TitleComponent);
      }

      _createClass(ResumePreviewLayout2TitleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumePreviewLayout2TitleComponent;
    }();

    ResumePreviewLayout2TitleComponent.ɵfac = function ResumePreviewLayout2TitleComponent_Factory(t) {
      return new (t || ResumePreviewLayout2TitleComponent)();
    };

    ResumePreviewLayout2TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumePreviewLayout2TitleComponent,
      selectors: [["yur-resume-preview-layout2-title"]],
      inputs: {
        icon: "icon",
        title: "title"
      },
      decls: 6,
      vars: 4,
      consts: [[1, "title-info", "pl-16"], [3, "fontSet", "fontIcon"], [1, "title", "ml-16"], [1, "divider", "mt-8", "mb-16"]],
      template: function ResumePreviewLayout2TitleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fontSet", ctx.icon == null ? null : ctx.icon.fontSet)("fontIcon", ctx.icon == null ? null : ctx.icon.fontIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.icon == null ? null : ctx.icon.fontSet) ? "" : ctx.icon == null ? null : ctx.icon.fontIcon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]],
      styles: [".title-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.title-info[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: var(--resume-preview-theme-color);\n}\n.title-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n.divider[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 5px;\n  background: var(--resume-preview-theme-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi9yZXN1bWUtcHJldmlldy1sYXlvdXQyLXRpdGxlL3Jlc3VtZS1wcmV2aWV3LWxheW91dDItdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi9yZXN1bWUtcHJldmlldy1sYXlvdXQyLXRpdGxlL3Jlc3VtZS1wcmV2aWV3LWxheW91dDItdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNDRjtBRENFO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7QUNDSjtBREVFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQUo7QURJQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi9yZXN1bWUtcHJldmlldy1sYXlvdXQyLXRpdGxlL3Jlc3VtZS1wcmV2aWV3LWxheW91dDItdGl0bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblxuICAubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5kaXZpZGVyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG59XG4iLCIudGl0bGUtaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi50aXRsZS1pbmZvIC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbn1cbi50aXRsZS1pbmZvIC50aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5kaXZpZGVyIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumePreviewLayout2TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-preview-layout2-title',
          templateUrl: './resume-preview-layout2-title.component.html',
          styleUrls: ['./resume-preview-layout2-title.component.scss']
        }]
      }], function () {
        return [];
      }, {
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2.component.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2.component.ts ***!
    \************************************************************************************************************/

  /*! exports provided: ResumePreviewLayout2Component */

  /***/
  function srcAppResumeGeneratorResumePreviewResumePreviewLayout2ResumePreviewLayout2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePreviewLayout2Component", function () {
      return ResumePreviewLayout2Component;
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


    var _resume_preview_layout2_title_resume_preview_layout2_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./resume-preview-layout2-title/resume-preview-layout2-title.component */
    "./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2-title/resume-preview-layout2-title.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0() {
      return {
        fontSet: "fab",
        fontIcon: "fa-css3-alt"
      };
    };

    function ResumePreviewLayout2Component_yur_resume_preview_layout2_title_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "yur-resume-preview-layout2-title", 12);
      }

      if (rf & 2) {
        var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r45.data.jobTitle)("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
      }
    }

    function ResumePreviewLayout2Component_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "b", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.data.chineseName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r46.data.englishName);
      }
    }

    function ResumePreviewLayout2Component_li_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r47.data.github, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r47.data.github);
      }
    }

    function ResumePreviewLayout2Component_li_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r48.data.codePen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r48.data.codePen);
      }
    }

    function ResumePreviewLayout2Component_li_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r49.data.email, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r49.data.email);
      }
    }

    function ResumePreviewLayout2Component_li_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r50.data.phone);
      }
    }

    function ResumePreviewLayout2Component_div_11_li_4_span_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r57 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r57, " ");
      }
    }

    function ResumePreviewLayout2Component_div_11_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResumePreviewLayout2Component_div_11_li_4_span_15_Template, 2, 1, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r55 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r55.company);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r55.jobTitle);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r55.workPlace, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r55.period, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r55.skillTags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r55.jobDescription, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var _c1 = function _c1() {
      return {
        fontSet: "fas",
        fontIcon: "fa-street-view"
      };
    };

    function ResumePreviewLayout2Component_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "yur-resume-preview-layout2-title", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout2Component_div_11_li_4_Template, 18, 6, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "General.Field.WorkExperience"))("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r51.data == null ? null : ctx_r51.data.experience);
      }
    }

    function ResumePreviewLayout2Component_div_12_li_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var photo_r62 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r62, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "General.Field.PortfolioPhoto"));
      }
    }

    function ResumePreviewLayout2Component_div_12_li_4_small_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r63 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", skill_r63, " ");
      }
    }

    function ResumePreviewLayout2Component_div_12_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResumePreviewLayout2Component_div_12_li_4_div_3_Template, 3, 4, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumePreviewLayout2Component_div_12_li_4_small_9_Template, 2, 1, "small", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r59 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r59.photos);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r59.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r59.skillTags);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r59.description, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var _c2 = function _c2() {
      return {
        fontSet: "fas",
        fontIcon: "fa-pencil-ruler"
      };
    };

    function ResumePreviewLayout2Component_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "yur-resume-preview-layout2-title", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout2Component_div_12_li_4_Template, 11, 4, "li", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "General.Field.SideProject"))("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r52.data == null ? null : ctx_r52.data.portfolio);
      }
    }

    function ResumePreviewLayout2Component_div_14_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r65 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r65.school);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r65.period);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r65.department);
      }
    }

    var _c3 = function _c3() {
      return {
        fontSet: "fas",
        fontIcon: "fa-graduation-cap"
      };
    };

    function ResumePreviewLayout2Component_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "yur-resume-preview-layout2-title", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout2Component_div_14_li_4_Template, 10, 3, "li", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "General.Field.Education"))("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r53.data == null ? null : ctx_r53.data.education);
      }
    }

    var ResumePreviewLayout2Component =
    /*#__PURE__*/
    function () {
      function ResumePreviewLayout2Component() {
        _classCallCheck(this, ResumePreviewLayout2Component);
      }

      _createClass(ResumePreviewLayout2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResumePreviewLayout2Component;
    }();

    ResumePreviewLayout2Component.ɵfac = function ResumePreviewLayout2Component_Factory(t) {
      return new (t || ResumePreviewLayout2Component)();
    };

    ResumePreviewLayout2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResumePreviewLayout2Component,
      selectors: [["yur-resume-preview-layout2"]],
      inputs: {
        data: "data"
      },
      decls: 15,
      vars: 9,
      consts: [[1, "resume-preview"], [1, "about-me", "block"], [1, "job-info"], [3, "title", "icon", 4, "ngIf"], ["class", "pl-36 name", 4, "ngIf"], [1, "link-info", "ml-28"], ["class", "link-item", 4, "ngIf"], [1, "resume-preview-content", "pl-32", "pr-32"], ["class", "experience block mt-32", 4, "ngIf"], ["class", "portfolio mt-32", 4, "ngIf"], [1, "personal-profile", "mt-32"], ["class", "education", 4, "ngIf"], [3, "title", "icon"], [1, "pl-36", "name"], [1, "chinese-name"], [1, "english-name", "ml-8"], [1, "link-item"], ["fontSet", "fab", "fontIcon", "fa-github"], [1, "link", 3, "href"], ["fontSet", "fab", "fontIcon", "fa-codepen"], ["fontSet", "fas", "fontIcon", "fa-envelope-square"], ["fontSet", "fas", "fontIcon", "fa-phone-square-alt"], [1, "link"], [1, "experience", "block", "mt-32"], [1, "experience-list", "ml-20", "pt-16"], ["class", "experience-item ml-16", 4, "ngFor", "ngForOf"], [1, "experience-item", "ml-16"], [1, "experience-item-content"], [1, "experience-item-content-title", "mb-4"], [1, "experience-item-content-title-primary"], [1, "company"], [1, "job-title"], [1, "experience-item-content-title-secondary"], [1, "work-place"], [1, "period"], [1, "skill-list", "mb-8"], ["class", "skill-item mt-4 mb-4", 4, "ngFor", "ngForOf"], [1, "job-description"], [3, "innerHTML"], [1, "skill-item", "mt-4", "mb-4"], [1, "portfolio", "mt-32"], [1, "portfolio-list", "pl-36"], ["class", "portfolio-item", 4, "ngFor", "ngForOf"], [1, "portfolio-item"], [1, "portfolio-item-content"], [1, "portfolio-item-photos"], ["class", "portfolio-item-photo", 4, "ngFor", "ngForOf"], [1, "portfolio-description", "ml-32"], [1, "mb-4"], [1, "portfolio-item-photo"], [3, "src", "alt"], [1, "education"], [1, "education-list", "pl-36"], ["class", "education-item", 4, "ngFor", "ngForOf"], [1, "education-item"], ["fontSet", "fas", "fontIcon", "fa-school"], [1, "education-item-content"], [1, "school-period"], [1, "school"], [1, "department"]],
      template: function ResumePreviewLayout2Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResumePreviewLayout2Component_yur_resume_preview_layout2_title_3_Template, 1, 3, "yur-resume-preview-layout2-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ResumePreviewLayout2Component_div_4_Template, 5, 2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ResumePreviewLayout2Component_li_6_Template, 4, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ResumePreviewLayout2Component_li_7_Template, 4, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ResumePreviewLayout2Component_li_8_Template, 4, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResumePreviewLayout2Component_li_9_Template, 4, 1, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResumePreviewLayout2Component_div_11_Template, 5, 6, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResumePreviewLayout2Component_div_12_Template, 5, 6, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ResumePreviewLayout2Component_div_14_Template, 5, 6, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.jobTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.chineseName || ctx.data.englishName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.github);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.codePen);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.phone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.experience.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.portfolio.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.education.length !== 0);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _resume_preview_layout2_title_resume_preview_layout2_title_component__WEBPACK_IMPORTED_MODULE_2__["ResumePreviewLayout2TitleComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["@charset \"UTF-8\";\n.about-me[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ebebeb;\n  min-height: 80px;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px;\n}\n.about-me[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.about-me[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  border-bottom: 4px solid var(--resume-preview-theme-color);\n  position: relative;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 66%;\n  height: 3px;\n  bottom: -12px;\n  background: var(--resume-preview-theme-color);\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  bottom: 8px;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.about-me[_ngcontent-%COMP%]   .link-info[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--resume-preview-theme-color);\n  text-align: center;\n  margin-right: 4px;\n}\n.about-me[_ngcontent-%COMP%]   .link-info[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.personal-profile[_ngcontent-%COMP%] {\n  display: flex;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .education-item-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]    + .education-item[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .school-period[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 8px;\n  display: flex;\n  align-items: center;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%] {\n  position: relative;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 2px;\n  background: #333232;\n  top: 0;\n  left: 0;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]:after {\n  content: \"\u25B4\";\n  position: absolute;\n  top: 0;\n  left: 1px;\n  font-size: 24px;\n  height: 0;\n  width: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #333232;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]    + .experience-item[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--resume-preview-theme-color);\n  left: 1px;\n  transform: translate(-50%, 50%);\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .experience-item-content-title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .experience-item-content-title[_ngcontent-%COMP%]   .experience-item-content-title-primary[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .experience-item-content-title[_ngcontent-%COMP%]   .experience-item-content-title-secondary[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%] {\n  border: 1px solid #333232;\n  border-radius: 20px;\n  color: #333232;\n  margin-right: 8px;\n  padding: 0 8px;\n  font-size: 12px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%] {\n  display: flex;\n  height: 250px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]    + .portfolio-item[_ngcontent-%COMP%] {\n  margin-top: 32px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n}\n.portfolio[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.portfolio[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%] {\n  border: 1px solid #333232;\n  border-radius: 20px;\n  color: #333232;\n  margin-right: 4px;\n  padding: 0 8px;\n  font-size: 11px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%]   .portfolio-item-photo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-item-photos[_ngcontent-%COMP%]   .portfolio-item-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  -o-object-fit: fill;\n     object-fit: fill;\n}\n.portfolio[_ngcontent-%COMP%]   .portfolio-item-content[_ngcontent-%COMP%]   .portfolio-description[_ngcontent-%COMP%] {\n  flex: 2;\n  max-width: 65%;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtcHJldmlldy9yZXN1bWUtcHJldmlldy1sYXlvdXQyL3Jlc3VtZS1wcmV2aWV3LWxheW91dDIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvaHViZXJ0L3NlbGYvY29kaW5nL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDIvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFMZ0I7RUFNaEIsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QURBRjtBQ0VFO0VBQ0UsZUFBQTtBREFKO0FDR0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FEREo7QUNJRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwREFBQTtFQUNBLGtCQUFBO0FERko7QUNJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0FERk47QUNLSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QURITjtBQ0tNO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBREhSO0FDT0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBRExOO0FDV007RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QURUUjtBQ1lNO0VBQ0UsWUFBQTtBRFZSO0FDZ0JBO0VBQ0UsYUFBQTtBRGJGO0FDZUU7RUFDRSxXQUFBO0FEYko7QUNlSTtFQUNFLGFBQUE7QURiTjtBQ2VNO0VBQ0UsT0FBQTtBRGJSO0FDZ0JNO0VBQ0UsZ0JBQUE7QURkUjtBQ2lCTTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBRGZSO0FDa0JNO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FEaEJSO0FDdUJFO0VBQ0Usa0JBQUE7QURwQko7QUN1Qkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQVBXO0VBUVgsTUFBQTtFQUNBLE9BQUE7QURyQk47QUN3Qkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0F2Qlc7QURDakI7QUMwQk07RUFDRSxnQkFBQTtBRHhCUjtBQzZCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBRDNCUjtBQzhCTTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUQ1QlI7QUM4QlE7RUFDRSxlQUFBO0FENUJWO0FDK0JRO0VBQ0UsaUJBQUE7QUQ3QlY7QUNpQ007RUFDRSxhQUFBO0VBQ0EsZUFBQTtBRC9CUjtBQ2lDUTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQWxFTztFQW1FUCxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEL0JWO0FDbUNNO0VBQ0UscUJBQUE7QURqQ1I7QUN3Q0U7RUFDRSxhQUFBO0VBQ0EsYUFBQTtBRHJDSjtBQ3VDSTtFQUNFLGdCQUFBO0FEckNOO0FDd0NJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRHRDTjtBQzBDRTtFQUVFLGFBQUE7RUFDQSxlQUFBO0FEekNKO0FDMkNJO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBUFc7RUFRWCxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEekNOO0FDNkNFO0VBQ0UsYUFBQTtFQUNBLE9BQUE7QUQzQ0o7QUM2Q0k7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBRDNDTjtBQzZDTTtFQUNFLGdCQUFBO0FEM0NSO0FDOENNO0VBQ0UsT0FBQTtBRDVDUjtBQzhDUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7S0FBQSxnQkFBQTtBRDVDVjtBQ2lESTtFQUNFLE9BQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUQvQ04iLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDIvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5hYm91dC1tZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIG1pbi1oZWlnaHQ6IDgwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uYWJvdXQtbWUgLm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG59XG4uYWJvdXQtbWUgLmpvYi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWJvdXQtbWUgLnBob3RvLWluZm8ge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFib3V0LW1lIC5waG90by1pbmZvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDY2JTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJvdHRvbTogLTEycHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbn1cbi5hYm91dC1tZSAucGhvdG8taW5mbyAuaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYWJvdXQtbWUgLnBob3RvLWluZm8gLmltZyAuYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTI4cHg7XG4gIGJvdHRvbTogOHB4O1xufVxuLmFib3V0LW1lIC5waG90by1pbmZvIGltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXQtbWUgLmxpbmstaW5mbyAubGluay1pdGVtIC5tYXQtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG4uYWJvdXQtbWUgLmxpbmstaW5mbyAubGluay1pdGVtIGEge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5wZXJzb25hbC1wcm9maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wZXJzb25hbC1wcm9maWxlIC5lZHVjYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wZXJzb25hbC1wcm9maWxlIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wZXJzb25hbC1wcm9maWxlIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1pdGVtIC5lZHVjYXRpb24taXRlbS1jb250ZW50IHtcbiAgZmxleDogMTtcbn1cbi5wZXJzb25hbC1wcm9maWxlIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1pdGVtICsgLmVkdWNhdGlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5wZXJzb25hbC1wcm9maWxlIC5lZHVjYXRpb24gLmVkdWNhdGlvbi1pdGVtIC5zY2hvb2wtcGVyaW9kIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnBlcnNvbmFsLXByb2ZpbGUgLmVkdWNhdGlvbiAuZWR1Y2F0aW9uLWl0ZW0gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3Q6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQ6ICMzMzMyMzI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3Q6YWZ0ZXIge1xuICBjb250ZW50OiBcIuKWtFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMXB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGhlaWdodDogMDtcbiAgd2lkdGg6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogIzMzMzIzMjtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbSArIC5leHBlcmllbmNlLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgbGVmdDogMXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCA1MCUpO1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5leHBlcmllbmNlLWl0ZW0tY29udGVudC10aXRsZSAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQtdGl0bGUtcHJpbWFyeSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5leHBlcmllbmNlLWl0ZW0tY29udGVudC10aXRsZSAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQtdGl0bGUtc2Vjb25kYXJ5IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0tY29udGVudCAuc2tpbGwtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5za2lsbC1saXN0IC5za2lsbC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzIzMjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICMzMzMyMzI7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQgLmpvYi1kZXNjcmlwdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gKyAucG9ydGZvbGlvLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0gLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBvcnRmb2xpbyAuc2tpbGwtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wb3J0Zm9saW8gLnNraWxsLWxpc3QgLnNraWxsLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzMzMjMyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogIzMzMzIzMjtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtLWNvbnRlbnQgLnBvcnRmb2xpby1pdGVtLXBob3RvcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbS1jb250ZW50IC5wb3J0Zm9saW8taXRlbS1waG90b3MgPiAqICsgKiB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ucG9ydGZvbGlvIC5wb3J0Zm9saW8taXRlbS1jb250ZW50IC5wb3J0Zm9saW8taXRlbS1waG90b3MgLnBvcnRmb2xpby1pdGVtLXBob3RvIHtcbiAgZmxleDogMTtcbn1cbi5wb3J0Zm9saW8gLnBvcnRmb2xpby1pdGVtLWNvbnRlbnQgLnBvcnRmb2xpby1pdGVtLXBob3RvcyAucG9ydGZvbGlvLWl0ZW0tcGhvdG8gaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBvYmplY3QtZml0OiBmaWxsO1xufVxuLnBvcnRmb2xpbyAucG9ydGZvbGlvLWl0ZW0tY29udGVudCAucG9ydGZvbGlvLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMjtcbiAgbWF4LXdpZHRoOiA2NSU7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn0iLCIkYWJvdXQtbWUtaGVpZ2h0OiA4MHB4O1xuXG4uYWJvdXQtbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZWJlYmViO1xuICBtaW4taGVpZ2h0OiAkYWJvdXQtbWUtaGVpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAxNnB4O1xuXG4gIC5uYW1lIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cblxuICAuam9iLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnBob3RvLWluZm8ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDY2JTtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuaW1nIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMjhweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5saW5rLWluZm8ge1xuICAgIC5saW5rLWl0ZW0ge1xuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBlcnNvbmFsLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5lZHVjYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmVkdWNhdGlvbi1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5lZHVjYXRpb24taXRlbS1jb250ZW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgIH1cblxuICAgICAgJiArIC5lZHVjYXRpb24taXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIC5zY2hvb2wtcGVyaW9kIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgfVxuXG4gICAgICAubWF0LWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZXhwZXJpZW5jZSB7XG4gIC5leHBlcmllbmNlLWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAkbGluZS1jb2xvcjogcmdiKDUxLCA1MCwgNTApO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogJGxpbmUtY29sb3I7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ+KWtCc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAxcHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogJGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgICAmICsgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgIH1cblxuICAgICAgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50LXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgICAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQtdGl0bGUtcHJpbWFyeSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50LXRpdGxlLXNlY29uZGFyeSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNraWxsLWxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgLnNraWxsLWl0ZW0ge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaW5lLWNvbG9yO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgY29sb3I6ICRsaW5lLWNvbG9yO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAgOHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuam9iLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucG9ydGZvbGlvIHtcbiAgLnBvcnRmb2xpby1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMjUwcHg7XG5cbiAgICAmICsgLnBvcnRmb2xpby1pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgfVxuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgfVxuXG4gIC5za2lsbC1saXN0IHtcbiAgICAkbGluZS1jb2xvcjogcmdiKDUxLCA1MCwgNTApO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLnNraWxsLWl0ZW0ge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpbmUtY29sb3I7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgY29sb3I6ICRsaW5lLWNvbG9yO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICB9XG4gIH1cblxuICAucG9ydGZvbGlvLWl0ZW0tY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnBvcnRmb2xpby1pdGVtLXBob3RvcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleDogMTtcblxuICAgICAgPiAqICsgKiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC5wb3J0Zm9saW8taXRlbS1waG90byB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgb2JqZWN0LWZpdDogZmlsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5wb3J0Zm9saW8tZGVzY3JpcHRpb24ge1xuICAgICAgZmxleDogMjtcbiAgICAgIG1heC13aWR0aDogNjUlO1xuICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgIH1cbiAgfVxufVxuIl19 */", "@media print {\n  .portfolio-item[_ngcontent-%COMP%], .personal-profile[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi9yZXN1bWUtcHJldmlldy1sYXlvdXQyLmNvbXBvbmVudC5wcmludC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDIvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi5jb21wb25lbnQucHJpbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFOztJQUVFLHdCQUFBO0VDQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0Mi9yZXN1bWUtcHJldmlldy1sYXlvdXQyLmNvbXBvbmVudC5wcmludC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHByaW50IHtcbiAgLnBvcnRmb2xpby1pdGVtLFxuICAucGVyc29uYWwtcHJvZmlsZSB7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG59XG4iLCJAbWVkaWEgcHJpbnQge1xuICAucG9ydGZvbGlvLWl0ZW0sXG4ucGVyc29uYWwtcHJvZmlsZSB7XG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumePreviewLayout2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'yur-resume-preview-layout2',
          templateUrl: './resume-preview-layout2.component.html',
          styleUrls: ['./resume-preview-layout2.component.scss', './resume-preview-layout2.component.print.scss']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-preview/resume-preview.component.model.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview.component.model.ts ***!
    \***********************************************************************************/

  /*! exports provided: ResumePreviewTemplate */

  /***/
  function srcAppResumeGeneratorResumePreviewResumePreviewComponentModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePreviewTemplate", function () {
      return ResumePreviewTemplate;
    });

    var ResumePreviewTemplate;

    (function (ResumePreviewTemplate) {
      ResumePreviewTemplate[ResumePreviewTemplate["Layout1"] = 1] = "Layout1";
      ResumePreviewTemplate[ResumePreviewTemplate["Layout2"] = 2] = "Layout2";
    })(ResumePreviewTemplate || (ResumePreviewTemplate = {}));
    /***/

  },

  /***/
  "./src/app/resume-generator/resume-preview/resume-preview.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ResumePreviewComponent */

  /***/
  function srcAppResumeGeneratorResumePreviewResumePreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResumePreviewComponent", function () {
      return ResumePreviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./resume-preview.component.model */
    "./src/app/resume-generator/resume-preview/resume-preview.component.model.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["templateContainer"];

    function ResumePreviewComponent_mat_option_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r69 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", lang_r69.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", lang_r69.name, " ");
      }
    }

    function ResumePreviewComponent_mat_option_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var template_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", template_r70.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", template_r70.name, " ");
      }
    }

    var ResumePreviewComponent =
    /*#__PURE__*/
    function () {
      function ResumePreviewComponent(cfr, translateService) {
        _classCallCheck(this, ResumePreviewComponent);

        this.cfr = cfr;
        this.translateService = translateService;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
      }

      _createClass(ResumePreviewComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!changes.data.isFirstChange() && changes.data.currentValue) {
            this.loadComponent(this.templateCtrl.value);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.templateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_resume_preview_component_model__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewTemplate"].Layout1);
          this.langCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('zh-TW');
          this.subscription.add(this.langCtrl.valueChanges.subscribe(function (lang) {
            _this12.translateService.use(lang);
          }));
          this.initTemplateOption();
          this.initLandOption();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadComponent(this.templateCtrl.value);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onSelectionChange",
        value: function onSelectionChange(event) {
          this.loadComponent(event.value);
        }
      }, {
        key: "onPrintPdf",
        value: function onPrintPdf() {
          window.print();
        }
      }, {
        key: "loadComponent",
        value: function loadComponent(template) {
          if (!this.templateContainerRef || !this.data) {
            return;
          }

          this.templateContainerRef.clear();

          switch (template) {
            case _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewTemplate"].Layout1:
              this.loadLayout1Component();
              break;

            case _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewTemplate"].Layout2:
              this.loadLayout2Component();
              break;
          }
        }
      }, {
        key: "loadLayout1Component",
        value: function loadLayout1Component() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _yield$Promise$resolv, ResumePreviewLayout1Component, templateFactory, _this$templateContain, instance;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ./resume-preview-layout1/resume-preview-layout1.component */
                    "./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts"));

                  case 2:
                    _yield$Promise$resolv = _context.sent;
                    ResumePreviewLayout1Component = _yield$Promise$resolv.ResumePreviewLayout1Component;
                    templateFactory = this.cfr.resolveComponentFactory(ResumePreviewLayout1Component);
                    _this$templateContain = this.templateContainerRef.createComponent(templateFactory, null), instance = _this$templateContain.instance;
                    instance.data = this.data;

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "loadLayout2Component",
        value: function loadLayout2Component() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _yield$Promise$resolv2, ResumePreviewLayout2Component, templateFactory, _this$templateContain2, instance;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return Promise.resolve().then(__webpack_require__.bind(null,
                    /*! ./resume-preview-layout2/resume-preview-layout2.component */
                    "./src/app/resume-generator/resume-preview/resume-preview-layout2/resume-preview-layout2.component.ts"));

                  case 2:
                    _yield$Promise$resolv2 = _context2.sent;
                    ResumePreviewLayout2Component = _yield$Promise$resolv2.ResumePreviewLayout2Component;
                    templateFactory = this.cfr.resolveComponentFactory(ResumePreviewLayout2Component);
                    _this$templateContain2 = this.templateContainerRef.createComponent(templateFactory, null), instance = _this$templateContain2.instance;
                    instance.data = this.data;

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "initTemplateOption",
        value: function initTemplateOption() {
          this.templateOption = [{
            id: _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewTemplate"].Layout1,
            name: this.translateService.instant('General.Field.Layout1')
          }, {
            id: _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_5__["ResumePreviewTemplate"].Layout2,
            name: this.translateService.instant('General.Field.Layout2')
          }];
        }
      }, {
        key: "initLandOption",
        value: function initLandOption() {
          this.langOption = [{
            id: 'zh-TW',
            name: this.translateService.instant('General.Field.Chinese')
          }, {
            id: 'en',
            name: this.translateService.instant('General.Field.English')
          }];
        }
      }]);

      return ResumePreviewComponent;
    }();

    ResumePreviewComponent.ɵfac = function ResumePreviewComponent_Factory(t) {
      return new (t || ResumePreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    ResumePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResumePreviewComponent,
      selectors: [["yur-resume-preview"]],
      viewQuery: function ResumePreviewComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.templateContainerRef = _t.first);
        }
      },
      inputs: {
        data: "data"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 22,
      vars: 13,
      consts: [[1, "layout-toolbar"], [1, "layout-select-form-field", "icon-select-field", 3, "matTooltip"], [3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "formControl", "selectionChange"], ["mat-icon-button", "", 1, "print-btn", 3, "matTooltip", "click"], [1, "layout-preview", "mb-16"], ["templateContainer", ""], [3, "value"]],
      template: function ResumePreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "language");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ResumePreviewComponent_mat_option_7_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-form-field", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function ResumePreviewComponent_Template_mat_select_selectionChange_10_listener($event) {
            return ctx.onSelectionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-select-trigger");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "style");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ResumePreviewComponent_mat_option_14_Template, 2, 2, "mat-option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResumePreviewComponent_Template_button_click_15_listener() {
            return ctx.onPrintPdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "local_printshop");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](20, null, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, "General.Field.SelectLanguage"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.langCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.langOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, "General.Field.SelectLayout"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.templateCtrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.templateOption);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 11, "General.Field.PrintPdf"));
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.layout-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.layout-toolbar[_ngcontent-%COMP%]   .layout-select-form-field[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.layout-toolbar[_ngcontent-%COMP%]   .print-btn[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWJlcnQvc2VsZi9jb2RpbmcvcmVzdW1lLWdlbmVyYXRvci9zcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYXlvdXQtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG5cbiAgLmxheW91dC1zZWxlY3QtZm9ybS1maWVsZCB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICB9XG5cbiAgLnByaW50LWJ0biB7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxheW91dC10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cbi5sYXlvdXQtdG9vbGJhciAubGF5b3V0LXNlbGVjdC1mb3JtLWZpZWxkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbn1cbi5sYXlvdXQtdG9vbGJhciAucHJpbnQtYnRuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResumePreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'yur-resume-preview',
          templateUrl: './resume-preview.component.html',
          styleUrls: ['./resume-preview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        templateContainerRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['templateContainer', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shared/base/cva.base.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/base/cva.base.ts ***!
    \*****************************************/

  /*! exports provided: CvaBase, createValueAccessor */

  /***/
  function srcAppSharedBaseCvaBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CvaBase", function () {
      return CvaBase;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createValueAccessor", function () {
      return createValueAccessor;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CvaBase =
    /*#__PURE__*/
    function () {
      function CvaBase() {
        _classCallCheck(this, CvaBase);
      }

      _createClass(CvaBase, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
          this.initForm();
          this.subscription.add(this.form.valueChanges.subscribe(function () {
            _this13.onChange(_this13.form.getRawValue());
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "writeValue",
        value: function writeValue(obj) {
          if (!obj) {
            return;
          }

          this.form.setValue(obj, {
            emitEvent: false
          });
        }
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }]);

      return CvaBase;
    }();

    CvaBase.ɵfac = function CvaBase_Factory(t) {
      return new (t || CvaBase)();
    };

    CvaBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CvaBase
    });

    function createValueAccessor(comp) {
      return {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return comp;
        }),
        multi: true
      };
    }
    /***/

  }
}]);
//# sourceMappingURL=resume-generator-resume-generator-module-es5.js.map