function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _createSuper(Derived) {
  return function() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (_isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}

(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  ['resume-generator-resume-generator-module'],
  {
    /***/
    './node_modules/tslib/tslib.es6.js':
      /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

      /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

      /***/
      function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__extends', function() {
          return __extends;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__assign', function() {
          return _assign;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__rest', function() {
          return __rest;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__decorate', function() {
          return __decorate;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__param', function() {
          return __param;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__metadata', function() {
          return __metadata;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__awaiter', function() {
          return __awaiter;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__generator', function() {
          return __generator;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__exportStar', function() {
          return __exportStar;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__values', function() {
          return __values;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__read', function() {
          return __read;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__spread', function() {
          return __spread;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__spreadArrays', function() {
          return __spreadArrays;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__await', function() {
          return __await;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__asyncGenerator', function() {
          return __asyncGenerator;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__asyncDelegator', function() {
          return __asyncDelegator;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__asyncValues', function() {
          return __asyncValues;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__makeTemplateObject', function() {
          return __makeTemplateObject;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__importStar', function() {
          return __importStar;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__importDefault', function() {
          return __importDefault;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__classPrivateFieldGet', function() {
          return __classPrivateFieldGet;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, '__classPrivateFieldSet', function() {
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
          _extendStatics =
            Object.setPrototypeOf ||
            ({
              __proto__: []
            } instanceof Array &&
              function(d, b) {
                d.__proto__ = b;
              }) ||
            function(d, b) {
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

          d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
        }

        var _assign = function __assign() {
          _assign =
            Object.assign ||
            function __assign(t) {
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

          if (s != null && typeof Object.getOwnPropertySymbols === 'function')
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
            }
          return t;
        }

        function __decorate(decorators, target, key, desc) {
          var c = arguments.length,
            r = c < 3 ? target : desc === null ? (desc = Object.getOwnPropertyDescriptor(target, key)) : desc,
            d;
          if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function') r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--) {
              if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
            }
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        }

        function __param(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        }

        function __metadata(metadataKey, metadataValue) {
          if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function') return Reflect.metadata(metadataKey, metadataValue);
        }

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P
              ? value
              : new P(function(resolve) {
                  resolve(value);
                });
          }

          return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator['throw'](value));
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
          return (
            (g = {
              next: verb(0),
              throw: verb(1),
              return: verb(2)
            }),
            typeof Symbol === 'function' &&
              (g[Symbol.iterator] = function() {
                return this;
              }),
            g
          );

          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }

          function step(op) {
            if (f) throw new TypeError('Generator is already executing.');

            while (_) {
              try {
                if (
                  ((f = 1),
                  y &&
                    (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) &&
                    !(t = t.call(y, op[1])).done)
                )
                  return t;
                if (((y = 0), t)) op = [op[0] & 2, t.value];

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
                    if (!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }

                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
          var s = typeof Symbol === 'function' && Symbol.iterator,
            m = s && o[s],
            i = 0;
          if (m) return m.call(o);
          if (o && typeof o.length === 'number')
            return {
              next: function next() {
                if (o && i >= o.length) o = void 0;
                return {
                  value: o && o[i++],
                  done: !o
                };
              }
            };
          throw new TypeError(s ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        }

        function __read(o, n) {
          var m = typeof Symbol === 'function' && o[Symbol.iterator];
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
              if (r && !r.done && (m = i['return'])) m.call(i);
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

        function __await(v) {
          return this instanceof __await ? ((this.v = v), this) : new __await(v);
        }

        function __asyncGenerator(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
          return (
            (i = {}),
            verb('next'),
            verb('throw'),
            verb('return'),
            (i[Symbol.asyncIterator] = function() {
              return this;
            }),
            i
          );

          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
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
            resume('next', value);
          }

          function reject(value) {
            resume('throw', value);
          }

          function settle(f, v) {
            if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
          }
        }

        function __asyncDelegator(o) {
          var i, p;
          return (
            (i = {}),
            verb('next'),
            verb('throw', function(e) {
              throw e;
            }),
            verb('return'),
            (i[Symbol.iterator] = function() {
              return this;
            }),
            i
          );

          function verb(n, f) {
            i[n] = o[n]
              ? function(v) {
                  return (p = !p)
                    ? {
                        value: __await(o[n](v)),
                        done: n === 'return'
                      }
                    : f
                    ? f(v)
                    : v;
                }
              : f;
          }
        }

        function __asyncValues(o) {
          if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
          var m = o[Symbol.asyncIterator],
            i;
          return m
            ? m.call(o)
            : ((o = typeof __values === 'function' ? __values(o) : o[Symbol.iterator]()),
              (i = {}),
              verb('next'),
              verb('throw'),
              verb('return'),
              (i[Symbol.asyncIterator] = function() {
                return this;
              }),
              i);

          function verb(n) {
            i[n] =
              o[n] &&
              function(v) {
                return new Promise(function(resolve, reject) {
                  (v = o[n](v)), settle(resolve, reject, v.done, v.value);
                });
              };
          }

          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v) {
              resolve({
                value: v,
                done: d
              });
            }, reject);
          }
        }

        function __makeTemplateObject(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, 'raw', {
              value: raw
            });
          } else {
            cooked.raw = raw;
          }

          return cooked;
        }

        function __importStar(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod) {
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
            }
          result['default'] = mod;
          return result;
        }

        function __importDefault(mod) {
          return mod && mod.__esModule
            ? mod
            : {
                default: mod
              };
        }

        function __classPrivateFieldGet(receiver, privateMap) {
          if (!privateMap.has(receiver)) {
            throw new TypeError('attempted to get private field on non-instance');
          }

          return privateMap.get(receiver);
        }

        function __classPrivateFieldSet(receiver, privateMap, value) {
          if (!privateMap.has(receiver)) {
            throw new TypeError('attempted to set private field on non-instance');
          }

          privateMap.set(receiver, value);
          return value;
        }
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.model.ts':
      /*!***********************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.model.ts ***!
    \***********************************************************************************************************/

      /*! exports provided: ResumeEditAboutMeFormProperties, RESUME_EDIT_ABOUT_ME_FORM_GROUP */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditAboutMeResumeEditAboutMeComponentModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        var _RESUME_EDIT_ABOUT_ME;

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditAboutMeFormProperties', function() {
          return ResumeEditAboutMeFormProperties;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'RESUME_EDIT_ABOUT_ME_FORM_GROUP', function() {
          return RESUME_EDIT_ABOUT_ME_FORM_GROUP;
        });

        var ResumeEditAboutMeFormProperties;

        (function(ResumeEditAboutMeFormProperties) {
          ResumeEditAboutMeFormProperties['JobTitle'] = 'jobTitle';
          ResumeEditAboutMeFormProperties['ChineseName'] = 'chineseName';
          ResumeEditAboutMeFormProperties['EnglishName'] = 'englishName';
          ResumeEditAboutMeFormProperties['Age'] = 'age';
          ResumeEditAboutMeFormProperties['Photo'] = 'photo';
          ResumeEditAboutMeFormProperties['Blog'] = 'blog';
          ResumeEditAboutMeFormProperties['Email'] = 'email';
          ResumeEditAboutMeFormProperties['Phone'] = 'phone';
          ResumeEditAboutMeFormProperties['Github'] = 'github';
          ResumeEditAboutMeFormProperties['CodePen'] = 'codePen';
        })(ResumeEditAboutMeFormProperties || (ResumeEditAboutMeFormProperties = {}));

        var RESUME_EDIT_ABOUT_ME_FORM_GROUP =
          ((_RESUME_EDIT_ABOUT_ME = {}),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.JobTitle, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.ChineseName, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.EnglishName, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Photo, [
            {
              value: '',
              disabled: true
            }
          ]),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Age, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Blog, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Email, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Phone, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.Github, ''),
          _defineProperty(_RESUME_EDIT_ABOUT_ME, ResumeEditAboutMeFormProperties.CodePen, ''),
          _RESUME_EDIT_ABOUT_ME);
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts':
      /*!*****************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts ***!
    \*****************************************************************************************************/

      /*! exports provided: ResumeEditAboutMeComponent */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditAboutMeResumeEditAboutMeComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditAboutMeComponent', function() {
          return ResumeEditAboutMeComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./resume-edit-about-me.component.model */
          './src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.model.ts'
        );
        /* harmony import */

        var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @shared/base/cva.base */
          './src/app/shared/base/cva.base.ts'
        );
        /* harmony import */

        var _shared_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../../shared/input/upload-image/upload-image.component */
          './src/app/shared/input/upload-image/upload-image.component.ts'
        );
        /* harmony import */

        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/form-field */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js'
        );
        /* harmony import */

        var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/input */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js'
        );

        var _c0 = function _c0() {
          return {
            defaultText: 'Upload Photo',
            aspectRatio: 1
          };
        };

        var ResumeEditAboutMeComponent =
          /*#__PURE__*/
          (function(_shared_base_cva_base) {
            _inherits(ResumeEditAboutMeComponent, _shared_base_cva_base);

            var _super = _createSuper(ResumeEditAboutMeComponent);

            function ResumeEditAboutMeComponent(fb) {
              var _this;

              _classCallCheck(this, ResumeEditAboutMeComponent);

              _this = _super.call(this);
              _this.fb = fb;
              _this.formProp = _resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__['ResumeEditAboutMeFormProperties'];
              return _this;
            }

            _createClass(ResumeEditAboutMeComponent, [
              {
                key: 'onSrcChange',
                value: function onSrcChange(src) {
                  this.form.patchValue(
                    _defineProperty(
                      {},
                      _resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__['ResumeEditAboutMeFormProperties'].Photo,
                      src
                    )
                  );
                }
              },
              {
                key: 'initForm',
                value: function initForm() {
                  this.form = this.fb.group(
                    _resume_edit_about_me_component_model__WEBPACK_IMPORTED_MODULE_2__['RESUME_EDIT_ABOUT_ME_FORM_GROUP']
                  );
                }
              }
            ]);

            return ResumeEditAboutMeComponent;
          })(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__['CvaBase']);

        ResumeEditAboutMeComponent.ɵfac = function ResumeEditAboutMeComponent_Factory(t) {
          return new (t || ResumeEditAboutMeComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'])
          );
        };

        ResumeEditAboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumeEditAboutMeComponent,
          selectors: [['yur-resume-edit-about-me']],
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__['createValueAccessor'])(ResumeEditAboutMeComponent)
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵInheritDefinitionFeature']
          ],
          decls: 63,
          vars: 16,
          consts: [
            [1, 'about-me', 3, 'formGroup'],
            [1, 'about-me-person-info'],
            [1, 'about-me-person-info-photo'],
            [1, 'caret-white', 3, 'formControlName'],
            [3, 'src', 'options', 'srcChange'],
            [1, 'about-me-person-info-description', 'ml-12'],
            ['appearance', 'outline'],
            ['matInput', '', 1, 'caret-white', 3, 'formControlName'],
            ['appearance', 'outline', 1, 'mt-8'],
            [1, 'about-me-person-link', 'mt-8']
          ],
          template: function ResumeEditAboutMeComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h3');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'About Me');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'input', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'yur-upload-image', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'srcChange',
                function ResumeEditAboutMeComponent_Template_yur_upload_image_srcChange_6_listener($event) {
                  return ctx.onSrcChange($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'mat-form-field', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](10, 'Job Title');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13, 'write your job title.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'mat-form-field', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](16, 'Chinese Name');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](17, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](18, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](19, 'write your chinese name.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'mat-form-field', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](22, 'English Name');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](23, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](24, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](25, 'write your english name.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'mat-form-field', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](27, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](28, 'Age');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](29, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](30, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](31, 'write your age.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](32, 'div', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](33, 'mat-form-field', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](34, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](35, 'Blog');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](36, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](37, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](38, 'write your blog link.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](39, 'mat-form-field', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](40, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](41, 'Phone');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](42, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](43, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](44, 'write your phone number.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](45, 'mat-form-field', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](46, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](47, 'Email');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](48, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](49, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](50, 'write your email.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](51, 'mat-form-field', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](52, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](53, 'GitHub');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](54, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](55, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](56, 'write your GitHub.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](57, 'mat-form-field', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](58, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](59, 'CodePen');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](60, 'input', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](61, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](62, 'write your CodePen.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              var tmp_3_0 = null;
              var currVal_3 = (tmp_3_0 = ctx.form.get(ctx.formProp.Photo)) == null ? null : tmp_3_0.value;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp']('display', 'none');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.Phone);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('src', currVal_3)(
                'options',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](15, _c0)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.JobTitle);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.ChineseName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.EnglishName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.Age);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.Blog);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.Phone);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.Email);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.Github);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.CodePen);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _shared_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_4__['UploadImageComponent'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__['MatFormField'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__['MatLabel'],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__['MatInput'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__['MatHint']
          ],
          styles: [
            '.about-me-person-info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-description[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-description[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-photo[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.about-me-person-info[_ngcontent-%COMP%]   .about-me-person-info-photo[_ngcontent-%COMP%]   yur-upload-image[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.about-me-person-link[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template: 1fr 1fr/1fr 1fr;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n  row-gap: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LWFib3V0LW1lL3Jlc3VtZS1lZGl0LWFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LWFib3V0LW1lL3Jlc3VtZS1lZGl0LWFib3V0LW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxPQUFBO0FDQ0o7QURDSTtFQUNFLGNBQUE7QUNDTjtBREdFO0VBQ0UsT0FBQTtBQ0RKO0FER0k7RUFDRSxZQUFBO0FDRE47QURNQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxZQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LWFib3V0LW1lL3Jlc3VtZS1lZGl0LWFib3V0LW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LW1lLXBlcnNvbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcblxuICAuYWJvdXQtbWUtcGVyc29uLWluZm8tZGVzY3JpcHRpb24ge1xuICAgIGZsZXg6IDE7XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICAuYWJvdXQtbWUtcGVyc29uLWluZm8tcGhvdG8ge1xuICAgIGZsZXg6IDE7XG5cbiAgICB5dXItdXBsb2FkLWltYWdlIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuLmFib3V0LW1lLXBlcnNvbi1saW5rIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG4gIHJvdy1nYXA6IDhweDtcbn1cbiIsIi5hYm91dC1tZS1wZXJzb24taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uYWJvdXQtbWUtcGVyc29uLWluZm8gLmFib3V0LW1lLXBlcnNvbi1pbmZvLWRlc2NyaXB0aW9uIHtcbiAgZmxleDogMTtcbn1cbi5hYm91dC1tZS1wZXJzb24taW5mbyAuYWJvdXQtbWUtcGVyc29uLWluZm8tZGVzY3JpcHRpb24gbWF0LWZvcm0tZmllbGQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5hYm91dC1tZS1wZXJzb24taW5mbyAuYWJvdXQtbWUtcGVyc29uLWluZm8tcGhvdG8ge1xuICBmbGV4OiAxO1xufVxuLmFib3V0LW1lLXBlcnNvbi1pbmZvIC5hYm91dC1tZS1wZXJzb24taW5mby1waG90byB5dXItdXBsb2FkLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYWJvdXQtbWUtcGVyc29uLWxpbmsge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyLzFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG4gIHJvdy1nYXA6IDhweDtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeEditAboutMeComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-edit-about-me',
                    templateUrl: './resume-edit-about-me.component.html',
                    styleUrls: ['./resume-edit-about-me.component.scss'],
                    providers: [
                      Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_3__['createValueAccessor'])(ResumeEditAboutMeComponent)
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.model.ts':
      /*!*************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.model.ts ***!
    \*************************************************************************************************************/

      /*! exports provided: ResumeEditEducationFormProperties, ResumeEditEducationFormArrayProperties */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditEducationResumeEditEducationComponentModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditEducationFormProperties', function() {
          return ResumeEditEducationFormProperties;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditEducationFormArrayProperties', function() {
          return ResumeEditEducationFormArrayProperties;
        });

        var ResumeEditEducationFormProperties;

        (function(ResumeEditEducationFormProperties) {
          ResumeEditEducationFormProperties['Education'] = 'education';
        })(ResumeEditEducationFormProperties || (ResumeEditEducationFormProperties = {}));

        var ResumeEditEducationFormArrayProperties;

        (function(ResumeEditEducationFormArrayProperties) {
          ResumeEditEducationFormArrayProperties['School'] = 'school';
          ResumeEditEducationFormArrayProperties['Department'] = 'department';
          ResumeEditEducationFormArrayProperties['Period'] = 'period';
        })(ResumeEditEducationFormArrayProperties || (ResumeEditEducationFormArrayProperties = {}));
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts':
      /*!*******************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts ***!
    \*******************************************************************************************************/

      /*! exports provided: ResumeEditEducationComponent */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditEducationResumeEditEducationComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditEducationComponent', function() {
          return ResumeEditEducationComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @shared/base/cva.base */
          './src/app/shared/base/cva.base.ts'
        );
        /* harmony import */

        var _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./resume-edit-education.component.model */
          './src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.model.ts'
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/button */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js'
        );
        /* harmony import */

        var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/tooltip */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js'
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/icon */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/card */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js'
        );
        /* harmony import */

        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/form-field */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js'
        );
        /* harmony import */

        var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/input */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js'
        );

        function ResumeEditEducationComponent_mat_card_6_Template(rf, ctx) {
          if (rf & 1) {
            var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'mat-card', 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](1, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h4', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'span');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'button', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'mat-icon', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function ResumeEditEducationComponent_mat_card_6_Template_mat_icon_click_6_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r35);

                var groupIndex_r33 = ctx.index;

                var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r34.onRemoveEducation(groupIndex_r33);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'mat-form-field', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, 'School');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'input', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, 'write your school.');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'mat-form-field', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15, 'Department');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](16, 'input', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18, 'write your department of school.');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'mat-form-field', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21, 'Period');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](22, 'input', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](23, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](24, 'write your period from enrolled to \b\bgraduation.');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r32 = ctx.$implicit;
            var groupIndex_r33 = ctx.index;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formArrayName', ctx_r31.formProp.Education);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', item_r32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', groupIndex_r33 + 1, '. ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r31.formArrayProp.School);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r31.formArrayProp.Department);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r31.formArrayProp.Period);
          }
        }

        var ResumeEditEducationComponent =
          /*#__PURE__*/
          (function(_shared_base_cva_base2) {
            _inherits(ResumeEditEducationComponent, _shared_base_cva_base2);

            var _super2 = _createSuper(ResumeEditEducationComponent);

            function ResumeEditEducationComponent(fb) {
              var _this2;

              _classCallCheck(this, ResumeEditEducationComponent);

              _this2 = _super2.call(this);
              _this2.fb = fb;
              _this2.formProp = _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormProperties'];
              _this2.formArrayProp =
                _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormArrayProperties'];
              return _this2;
            }

            _createClass(ResumeEditEducationComponent, [
              {
                key: 'writeValue',
                value: function writeValue(val) {
                  var _this3 = this;

                  if (!val) {
                    return;
                  }

                  var formArrayLength = this.form.get(
                    _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormProperties'].Education
                  ).length;
                  var parentFormArrayLength = val.education.length;

                  if (formArrayLength !== parentFormArrayLength) {
                    this.form.setControl(
                      _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormProperties'].Education,
                      this.fb.array(
                        val.education.map(function() {
                          return _this3.educationFormArrayItem;
                        })
                      )
                    );
                    this.form.setValue(val, {
                      emitEvent: true
                    });
                    return;
                  }

                  this.form.setValue(val, {
                    emitEvent: false
                  });
                }
              },
              {
                key: 'initForm',
                value: function initForm() {
                  this.form = this.fb.group(
                    _defineProperty(
                      {},
                      _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormProperties'].Education,
                      this.fb.array([this.educationFormArrayItem, this.educationFormArrayItem])
                    )
                  );
                }
              },
              {
                key: 'onAddEducation',
                value: function onAddEducation() {
                  this.form
                    .get(_resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormProperties'].Education)
                    .push(this.educationFormArrayItem);
                }
              },
              {
                key: 'onRemoveEducation',
                value: function onRemoveEducation(index) {
                  this.form
                    .get(_resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormProperties'].Education)
                    .removeAt(index);
                }
              },
              {
                key: 'educationFormArrayItem',
                get: function get() {
                  var _this$fb$group2;

                  return this.fb.group(
                    ((_this$fb$group2 = {}),
                    _defineProperty(
                      _this$fb$group2,
                      _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormArrayProperties'].School,
                      ''
                    ),
                    _defineProperty(
                      _this$fb$group2,
                      _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormArrayProperties']
                        .Department,
                      ''
                    ),
                    _defineProperty(
                      _this$fb$group2,
                      _resume_edit_education_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditEducationFormArrayProperties'].Period,
                      ''
                    ),
                    _this$fb$group2)
                  );
                }
              }
            ]);

            return ResumeEditEducationComponent;
          })(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['CvaBase']);

        ResumeEditEducationComponent.ɵfac = function ResumeEditEducationComponent_Factory(t) {
          return new (t || ResumeEditEducationComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'])
          );
        };

        ResumeEditEducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumeEditEducationComponent,
          selectors: [['yur-resume-edit-education']],
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['createValueAccessor'])(ResumeEditEducationComponent)
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵInheritDefinitionFeature']
          ],
          decls: 7,
          vars: 2,
          consts: [
            [1, 'education-title'],
            ['mat-icon-button', '', 'matTooltip', 'Add field'],
            ['fontSet', 'fas', 'fontIcon', 'fa-plus', 3, 'click'],
            [1, 'education', 3, 'formGroup'],
            [3, 'formArrayName', 4, 'ngFor', 'ngForOf'],
            [3, 'formArrayName'],
            [3, 'formGroup'],
            [1, 'education-group-title'],
            ['mat-icon-button', '', 'matTooltip', 'Remove field'],
            ['fontSet', 'fas', 'fontIcon', 'fa-trash', 3, 'click'],
            ['appearance', 'outline'],
            ['matInput', '', 1, 'caret-white', 3, 'formControlName'],
            ['appearance', 'outline', 1, 'mt-8']
          ],
          template: function ResumeEditEducationComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h3', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, ' Education ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'span');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'button', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'mat-icon', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ResumeEditEducationComponent_Template_mat_icon_click_4_listener() {
                  return ctx.onAddEducation();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                ResumeEditEducationComponent_mat_card_6_Template,
                25,
                6,
                'mat-card',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.form.get(ctx.formProp.Education)['controls']);
            }
          },
          directives: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__['MatButton'],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__['MatTooltip'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__['MatIcon'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['NgForOf'],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__['MatCard'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormArrayName'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__['MatFormField'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__['MatLabel'],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__['MatInput'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__['MatHint']
          ],
          styles: [
            '.education-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.education[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n  row-gap: 8px;\n}\n\n.education[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.education[_ngcontent-%COMP%]   .education-group-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LWVkdWNhdGlvbi9yZXN1bWUtZWRpdC1lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtZWR1Y2F0aW9uL3Jlc3VtZS1lZGl0LWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENFO0VBQ0UsY0FBQTtBQ0NKOztBREVFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQtZWR1Y2F0aW9uL3Jlc3VtZS1lZGl0LWVkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lZHVjYXRpb24tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5lZHVjYXRpb24ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG4gIHJvdy1nYXA6IDhweDtcblxuICBtYXQtZm9ybS1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuZWR1Y2F0aW9uLWdyb3VwLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4iLCIuZWR1Y2F0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZWR1Y2F0aW9uIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAxMnB4O1xuICByb3ctZ2FwOiA4cHg7XG59XG4uZWR1Y2F0aW9uIG1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZWR1Y2F0aW9uIC5lZHVjYXRpb24tZ3JvdXAtdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeEditEducationComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-edit-education',
                    templateUrl: './resume-edit-education.component.html',
                    styleUrls: ['./resume-edit-education.component.scss'],
                    providers: [
                      Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['createValueAccessor'])(ResumeEditEducationComponent)
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.model.ts':
      /*!***************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.model.ts ***!
    \***************************************************************************************************************/

      /*! exports provided: ResumeEditExperienceFormProperties, ResumeEditExperienceFormArrayProperties */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditExperienceResumeEditExperienceComponentModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditExperienceFormProperties', function() {
          return ResumeEditExperienceFormProperties;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditExperienceFormArrayProperties', function() {
          return ResumeEditExperienceFormArrayProperties;
        });

        var ResumeEditExperienceFormProperties;

        (function(ResumeEditExperienceFormProperties) {
          ResumeEditExperienceFormProperties['Experience'] = 'experience';
        })(ResumeEditExperienceFormProperties || (ResumeEditExperienceFormProperties = {}));

        var ResumeEditExperienceFormArrayProperties;

        (function(ResumeEditExperienceFormArrayProperties) {
          ResumeEditExperienceFormArrayProperties['Period'] = 'period';
          ResumeEditExperienceFormArrayProperties['Company'] = 'company';
          ResumeEditExperienceFormArrayProperties['JobTitle'] = 'jobTitle';
          ResumeEditExperienceFormArrayProperties['SkillTags'] = 'skillTags';
          ResumeEditExperienceFormArrayProperties['JobDescription'] = 'jobDescription';
        })(ResumeEditExperienceFormArrayProperties || (ResumeEditExperienceFormArrayProperties = {}));
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts':
      /*!*********************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts ***!
    \*********************************************************************************************************/

      /*! exports provided: ResumeEditExperienceComponent */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditExperienceResumeEditExperienceComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditExperienceComponent', function() {
          return ResumeEditExperienceComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @shared/base/cva.base */
          './src/app/shared/base/cva.base.ts'
        );
        /* harmony import */

        var _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./resume-edit-experience.component.model */
          './src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.model.ts'
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/button */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js'
        );
        /* harmony import */

        var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/tooltip */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js'
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/icon */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/material/card */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js'
        );
        /* harmony import */

        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/form-field */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js'
        );
        /* harmony import */

        var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/input */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js'
        );

        function ResumeEditExperienceComponent_mat_card_6_Template(rf, ctx) {
          if (rf & 1) {
            var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵgetCurrentView']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'mat-card', 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](1, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'h4', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'span');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'button', 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'mat-icon', 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
              'click',
              function ResumeEditExperienceComponent_mat_card_6_Template_mat_icon_click_6_listener() {
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵrestoreView'](_r40);

                var groupIndex_r38 = ctx.index;

                var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

                return ctx_r39.onRemoveExperience(groupIndex_r38);
              }
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'mat-form-field', 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9, 'Job Period');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'input', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](11, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](12, 'write your job period.');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](13, 'mat-form-field', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](15, 'Company');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](16, 'input', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18, 'write your company.');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'mat-form-field', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](20, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](21, 'Job Title');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](22, 'input', 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](23, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](24, 'write your job title in company.');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'mat-form-field', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](26, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](27, 'Job Skill');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](28, 'textarea', 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](29, '        ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](30, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](31, 'write your job skill in company.');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](32, 'mat-form-field', 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](33, 'mat-label');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](34, 'Job Description');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](35, 'textarea', 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](36, ' ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](37, 'mat-hint');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](38, 'write your job description');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r37 = ctx.$implicit;
            var groupIndex_r38 = ctx.index;

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵnextContext']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formArrayName', ctx_r36.formProp.Experience);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', item_r37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', groupIndex_r38 + 1, '. ');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r36.formArrayProp.Period);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r36.formArrayProp.Company);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r36.formArrayProp.JobTitle);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r36.formArrayProp.SkillTags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx_r36.formArrayProp.JobDescription);
          }
        }

        var ResumeEditExperienceComponent =
          /*#__PURE__*/
          (function(_shared_base_cva_base3) {
            _inherits(ResumeEditExperienceComponent, _shared_base_cva_base3);

            var _super3 = _createSuper(ResumeEditExperienceComponent);

            function ResumeEditExperienceComponent(fb) {
              var _this4;

              _classCallCheck(this, ResumeEditExperienceComponent);

              _this4 = _super3.call(this);
              _this4.fb = fb;
              _this4.formProp = _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormProperties'];
              _this4.formArrayProp =
                _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormArrayProperties'];
              return _this4;
            }

            _createClass(ResumeEditExperienceComponent, [
              {
                key: 'writeValue',
                value: function writeValue(val) {
                  var _this5 = this;

                  if (!val) {
                    return;
                  }

                  var formArrayLength = this.form.get(
                    _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormProperties'].Experience
                  ).length;
                  var parentFormArrayLength = val.experience.length;

                  if (formArrayLength !== parentFormArrayLength) {
                    this.form.setControl(
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormProperties'].Experience,
                      this.fb.array(
                        val.experience.map(function() {
                          return _this5.experienceFormArrayItem;
                        })
                      )
                    );
                    this.form.setValue(val, {
                      emitEvent: true
                    });
                    return;
                  }

                  this.form.setValue(val, {
                    emitEvent: false
                  });
                }
              },
              {
                key: 'initForm',
                value: function initForm() {
                  this.form = this.fb.group(
                    _defineProperty(
                      {},
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormProperties'].Experience,
                      this.fb.array([this.experienceFormArrayItem, this.experienceFormArrayItem])
                    )
                  );
                }
              },
              {
                key: 'onAddExperience',
                value: function onAddExperience() {
                  this.form
                    .get(
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormProperties'].Experience
                    )
                    .push(this.experienceFormArrayItem);
                }
              },
              {
                key: 'onRemoveExperience',
                value: function onRemoveExperience(index) {
                  this.form
                    .get(
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormProperties'].Experience
                    )
                    .removeAt(index);
                }
              },
              {
                key: 'experienceFormArrayItem',
                get: function get() {
                  var _this$fb$group4;

                  return this.fb.group(
                    ((_this$fb$group4 = {}),
                    _defineProperty(
                      _this$fb$group4,
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormArrayProperties']
                        .Period,
                      ''
                    ),
                    _defineProperty(
                      _this$fb$group4,
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormArrayProperties']
                        .Company,
                      ''
                    ),
                    _defineProperty(
                      _this$fb$group4,
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormArrayProperties']
                        .JobTitle,
                      ''
                    ),
                    _defineProperty(
                      _this$fb$group4,
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormArrayProperties']
                        .SkillTags,
                      ''
                    ),
                    _defineProperty(
                      _this$fb$group4,
                      _resume_edit_experience_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditExperienceFormArrayProperties']
                        .JobDescription,
                      ''
                    ),
                    _this$fb$group4)
                  );
                }
              }
            ]);

            return ResumeEditExperienceComponent;
          })(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['CvaBase']);

        ResumeEditExperienceComponent.ɵfac = function ResumeEditExperienceComponent_Factory(t) {
          return new (t || ResumeEditExperienceComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'])
          );
        };

        ResumeEditExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumeEditExperienceComponent,
          selectors: [['yur-resume-edit-experience']],
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['createValueAccessor'])(ResumeEditExperienceComponent)
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵInheritDefinitionFeature']
          ],
          decls: 7,
          vars: 2,
          consts: [
            [1, 'experience-title'],
            ['mat-icon-button', '', 'matTooltip', 'Add field'],
            ['fontSet', 'fas', 'fontIcon', 'fa-plus', 3, 'click'],
            [1, 'experience', 3, 'formGroup'],
            [3, 'formArrayName', 4, 'ngFor', 'ngForOf'],
            [3, 'formArrayName'],
            [3, 'formGroup'],
            [1, 'experience-group-title'],
            ['mat-icon-button', '', 'matTooltip', 'Remove field'],
            ['fontSet', 'fas', 'fontIcon', 'fa-trash', 3, 'click'],
            ['appearance', 'outline'],
            ['matInput', '', 1, 'caret-white', 3, 'formControlName'],
            ['appearance', 'outline', 1, 'mt-8'],
            [
              'rows',
              '10',
              'matInput',
              '',
              'placeholder',
              'Separate skill name by comma, e.g, Css3, Nodejs',
              1,
              'caret-white',
              3,
              'formControlName'
            ],
            ['rows', '10', 'matInput', '', 1, 'caret-white', 3, 'formControlName']
          ],
          template: function ResumeEditExperienceComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h3', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, ' Experience ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'span');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'button', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'mat-icon', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ResumeEditExperienceComponent_Template_mat_icon_click_4_listener() {
                  return ctx.onAddExperience();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
                6,
                ResumeEditExperienceComponent_mat_card_6_Template,
                39,
                8,
                'mat-card',
                4
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.form.get(ctx.formProp.Experience)['controls']);
            }
          },
          directives: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__['MatButton'],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__['MatTooltip'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__['MatIcon'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__['NgForOf'],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__['MatCard'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormArrayName'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__['MatFormField'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__['MatLabel'],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__['MatInput'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__['MatHint']
          ],
          styles: [
            '.experience-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.experience[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  -moz-column-gap: 12px;\n       column-gap: 12px;\n  row-gap: 8px;\n}\n\n.experience[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.experience[_ngcontent-%COMP%]   .experience-group-title[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LWV4cGVyaWVuY2UvcmVzdW1lLWVkaXQtZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZWRpdC9yZXN1bWUtZWRpdC1leHBlcmllbmNlL3Jlc3VtZS1lZGl0LWV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDRTtFQUNFLGNBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LWV4cGVyaWVuY2UvcmVzdW1lLWVkaXQtZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBlcmllbmNlLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZXhwZXJpZW5jZSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTJweDtcbiAgcm93LWdhcDogOHB4O1xuXG4gIG1hdC1mb3JtLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5leHBlcmllbmNlLWdyb3VwLXRpdGxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4iLCIuZXhwZXJpZW5jZS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmV4cGVyaWVuY2Uge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDEycHg7XG4gIHJvdy1nYXA6IDhweDtcbn1cbi5leHBlcmllbmNlIG1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1ncm91cC10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeEditExperienceComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-edit-experience',
                    templateUrl: './resume-edit-experience.component.html',
                    styleUrls: ['./resume-edit-experience.component.scss'],
                    providers: [
                      Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['createValueAccessor'])(ResumeEditExperienceComponent)
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.model.ts':
      /*!*********************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.model.ts ***!
    \*********************************************************************************************************/

      /*! exports provided: ResumeEditProfileFormProperties, RESUME_EDIT_PROFILE_FORM_GROUP */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditProfileResumeEditProfileComponentModelTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditProfileFormProperties', function() {
          return ResumeEditProfileFormProperties;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'RESUME_EDIT_PROFILE_FORM_GROUP', function() {
          return RESUME_EDIT_PROFILE_FORM_GROUP;
        });

        var ResumeEditProfileFormProperties;

        (function(ResumeEditProfileFormProperties) {
          ResumeEditProfileFormProperties['Profile'] = 'profile';
        })(ResumeEditProfileFormProperties || (ResumeEditProfileFormProperties = {}));

        var RESUME_EDIT_PROFILE_FORM_GROUP = _defineProperty({}, ResumeEditProfileFormProperties.Profile, '');
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts':
      /*!***************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts ***!
    \***************************************************************************************************/

      /*! exports provided: ResumeEditProfileComponent */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditProfileResumeEditProfileComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditProfileComponent', function() {
          return ResumeEditProfileComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @shared/base/cva.base */
          './src/app/shared/base/cva.base.ts'
        );
        /* harmony import */

        var _resume_edit_profile_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./resume-edit-profile.component.model */
          './src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.model.ts'
        );
        /* harmony import */

        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/form-field */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js'
        );
        /* harmony import */

        var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/input */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js'
        );

        var ResumeEditProfileComponent =
          /*#__PURE__*/
          (function(_shared_base_cva_base4) {
            _inherits(ResumeEditProfileComponent, _shared_base_cva_base4);

            var _super4 = _createSuper(ResumeEditProfileComponent);

            function ResumeEditProfileComponent(fb) {
              var _this6;

              _classCallCheck(this, ResumeEditProfileComponent);

              _this6 = _super4.call(this);
              _this6.fb = fb;
              _this6.formProp = _resume_edit_profile_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumeEditProfileFormProperties'];
              return _this6;
            }

            _createClass(ResumeEditProfileComponent, [
              {
                key: 'initForm',
                value: function initForm() {
                  this.form = this.fb.group(
                    _resume_edit_profile_component_model__WEBPACK_IMPORTED_MODULE_3__['RESUME_EDIT_PROFILE_FORM_GROUP']
                  );
                }
              }
            ]);

            return ResumeEditProfileComponent;
          })(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['CvaBase']);

        ResumeEditProfileComponent.ɵfac = function ResumeEditProfileComponent_Factory(t) {
          return new (t || ResumeEditProfileComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder'])
          );
        };

        ResumeEditProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumeEditProfileComponent,
          selectors: [['yur-resume-edit-profile']],
          features: [
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵProvidersFeature']([
              Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['createValueAccessor'])(ResumeEditProfileComponent)
            ]),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵInheritDefinitionFeature']
          ],
          decls: 9,
          vars: 2,
          consts: [
            [1, 'profile', 3, 'formGroup'],
            ['appearance', 'outline'],
            ['rows', '10', 'matInput', '', 1, 'caret-white', 3, 'formControlName']
          ],
          template: function ResumeEditProfileComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'h3');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1, 'Profile');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'mat-form-field', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'mat-label');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5, 'Profile');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'textarea', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'mat-hint');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8, 'write your profile.');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formControlName', ctx.formProp.Profile);
            }
          },
          directives: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormGroupDirective'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__['MatFormField'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__['MatLabel'],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__['MatInput'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['DefaultValueAccessor'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormControlName'],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__['MatHint']
          ],
          styles: [
            'mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LXByb2ZpbGUvcmVzdW1lLWVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtZWRpdC9yZXN1bWUtZWRpdC1wcm9maWxlL3Jlc3VtZS1lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LXByb2ZpbGUvcmVzdW1lLWVkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4iLCJtYXQtZm9ybS1maWVsZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeEditProfileComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-edit-profile',
                    templateUrl: './resume-edit-profile.component.html',
                    styleUrls: ['./resume-edit-profile.component.scss'],
                    providers: [
                      Object(_shared_base_cva_base__WEBPACK_IMPORTED_MODULE_2__['createValueAccessor'])(ResumeEditProfileComponent)
                    ]
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__['FormBuilder']
                }
              ];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-edit/resume-edit.component.ts':
      /*!***********************************************************************!*\
    !*** ./src/app/resume-generator/resume-edit/resume-edit.component.ts ***!
    \***********************************************************************/

      /*! exports provided: ResumeEditComponent */

      /***/
      function srcAppResumeGeneratorResumeEditResumeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeEditComponent', function() {
          return ResumeEditComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common/http */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! rxjs */
          './node_modules/rxjs/_esm2015/index.js'
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/button */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js'
        );
        /* harmony import */

        var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/tooltip */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js'
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/icon */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );
        /* harmony import */

        var _resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./resume-edit-about-me/resume-edit-about-me.component */
          './src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts'
        );
        /* harmony import */

        var _resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./resume-edit-profile/resume-edit-profile.component */
          './src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts'
        );
        /* harmony import */

        var _resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./resume-edit-education/resume-edit-education.component */
          './src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts'
        );
        /* harmony import */

        var _resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./resume-edit-experience/resume-edit-experience.component */
          './src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts'
        );

        var _c0 = ['downloadRef'];

        var ResumeEditComponent =
          /*#__PURE__*/
          (function() {
            function ResumeEditComponent(fb, route, http) {
              _classCallCheck(this, ResumeEditComponent);

              this.fb = fb;
              this.route = route;
              this.http = http;
              this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__['EventEmitter']();
            }

            _createClass(ResumeEditComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  var _this7 = this;

                  this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__['Subscription']();
                  this.initForm();
                  this.subscribeFilePathFromUrl();
                  this.subscription.add(
                    this.form.valueChanges.subscribe(function(val) {
                      _this7.valueChange.emit(val);
                    })
                  );
                }
              },
              {
                key: 'ngOnDestroy',
                value: function ngOnDestroy() {
                  this.subscription.unsubscribe();
                }
              },
              {
                key: 'initForm',
                value: function initForm() {
                  this.form = this.fb.group({
                    aboutMe: this.fb.control(''),
                    profile: this.fb.control(''),
                    education: this.fb.control(''),
                    experience: this.fb.control('')
                  });
                }
              },
              {
                key: 'onDownloadFile',
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
              },
              {
                key: 'onUploadFile',
                value: function onUploadFile(event) {
                  var _this8 = this;

                  var file = event.target.files[0];

                  if (!file) {
                    return;
                  }

                  var reader = new FileReader();

                  reader.onload = function(e) {
                    try {
                      _this8.updateJsonToForm(e.target.result.toString());
                    } catch (error) {
                      alert('content format incorrect.');
                    }
                  };

                  reader.readAsText(file);
                }
              },
              {
                key: 'subscribeFilePathFromUrl',
                value: function subscribeFilePathFromUrl() {
                  var _this9 = this;

                  var filePath = this.route.snapshot.queryParams.path;

                  if (!filePath) {
                    return;
                  }

                  this.subscription.add(
                    this.http.get('assets/resume-edit/'.concat(filePath)).subscribe(function(data) {
                      try {
                        _this9.updateJsonToForm(JSON.stringify(data));
                      } catch (error) {
                        alert('content format incorrect');
                      }
                    })
                  );
                }
              },
              {
                key: 'updateJsonToForm',
                value: function updateJsonToForm(text) {
                  var jsonData = JSON.parse(text);
                  jsonData = {
                    aboutMe: {
                      jobTitle: jsonData.aboutMe.jobTitle,
                      chineseName: jsonData.aboutMe.chineseName,
                      englishName: jsonData.aboutMe.englishName,
                      photo: jsonData.aboutMe.photo,
                      age: jsonData.aboutMe.age,
                      blog: jsonData.aboutMe.blog,
                      email: jsonData.aboutMe.email,
                      phone: jsonData.aboutMe.phone,
                      github: jsonData.aboutMe.github,
                      codePen: jsonData.aboutMe.codePen
                    },
                    education: {
                      education: (jsonData.education.education || []).map(function(item) {
                        return {
                          school: item.school,
                          department: item.department,
                          period: item.period
                        };
                      })
                    },
                    profile: {
                      profile: jsonData.profile.profile
                    },
                    experience: {
                      experience: (jsonData.experience.experience || []).map(function(item) {
                        return {
                          period: item.period,
                          company: item.company,
                          jobTitle: item.jobTitle,
                          skillTags: item.skillTags,
                          jobDescription: item.jobDescription
                        };
                      })
                    }
                  };
                  this.form.setValue(jsonData);
                }
              }
            ]);

            return ResumeEditComponent;
          })();

        ResumeEditComponent.ɵfac = function ResumeEditComponent_Factory(t) {
          return new (t || ResumeEditComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormBuilder']),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute']),
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdirectiveInject'](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClient'])
          );
        };

        ResumeEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumeEditComponent,
          selectors: [['yur-resume-edit']],
          viewQuery: function ResumeEditComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵviewQuery'](_c0, true);
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵloadQuery']())
              ) && (ctx.downloadRef = _t.first);
            }
          },
          outputs: {
            valueChange: 'valueChange'
          },
          decls: 13,
          vars: 3,
          consts: [
            [1, 'resume-edit-tool'],
            ['matTooltip', 'upload file', 'mat-icon-button', '', 1, 'resume-edit-tool-upload-btn'],
            ['fontSet', 'fas', 'fontIcon', 'fa-file-upload'],
            ['type', 'file', 'accept', '.txt,.json', 1, 'caret-white', 3, 'change'],
            ['matTooltip', 'download file', 'mat-icon-button', '', 3, 'click'],
            ['fontSet', 'fas', 'fontIcon', 'fa-file-download'],
            ['downloadRef', ''],
            [3, 'formGroup'],
            ['formControlName', 'aboutMe'],
            ['formControlName', 'profile', 1, 'mt-8'],
            ['formControlName', 'education', 1, 'mt-8'],
            ['formControlName', 'experience', 1, 'mt-8']
          ],
          template: function ResumeEditComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'button', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'mat-icon', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'input', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'change',
                function ResumeEditComponent_Template_input_change_3_listener($event) {
                  return ctx.onUploadFile($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'button', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'click',
                function ResumeEditComponent_Template_button_click_4_listener() {
                  return ctx.onDownloadFile();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'mat-icon', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](6, 'a', null, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerStart'](8, 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](9, 'yur-resume-edit-about-me', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](10, 'yur-resume-edit-profile', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'yur-resume-edit-education', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](12, 'yur-resume-edit-experience', 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementContainerEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵstyleProp']('display', 'none');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('formGroup', ctx.form);
            }
          },
          directives: [
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__['MatButton'],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__['MatTooltip'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__['MatIcon'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgControlStatusGroup'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormGroupDirective'],
            _resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_8__['ResumeEditAboutMeComponent'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormControlName'],
            _resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_9__['ResumeEditProfileComponent'],
            _resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_10__['ResumeEditEducationComponent'],
            _resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_11__['ResumeEditExperienceComponent']
          ],
          styles: [
            '[_nghost-%COMP%] {\n  background: var(--resume-edit-bg);\n  color: var(--resume-edit-color);\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 1rem;\n  box-sizing: border-box;\n}\n\n.resume-edit-tool[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.resume-edit-tool[_ngcontent-%COMP%]   .resume-edit-tool-upload-btn[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.resume-edit-tool[_ngcontent-%COMP%]   .resume-edit-tool-upload-btn[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1lZGl0L3Jlc3VtZS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKOztBRENJO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWVkaXQvcmVzdW1lLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1lZGl0LWJnKTtcbiAgY29sb3I6IHZhcigtLXJlc3VtZS1lZGl0LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucmVzdW1lLWVkaXQtdG9vbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuXG4gIC5yZXN1bWUtZWRpdC10b29sLXVwbG9hZC1idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGlucHV0IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1lZGl0LWJnKTtcbiAgY29sb3I6IHZhcigtLXJlc3VtZS1lZGl0LWNvbG9yKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ucmVzdW1lLWVkaXQtdG9vbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnJlc3VtZS1lZGl0LXRvb2wgLnJlc3VtZS1lZGl0LXRvb2wtdXBsb2FkLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5yZXN1bWUtZWRpdC10b29sIC5yZXN1bWUtZWRpdC10b29sLXVwbG9hZC1idG4gaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeEditComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-edit',
                    templateUrl: './resume-edit.component.html',
                    styleUrls: ['./resume-edit.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__['FormBuilder']
                },
                {
                  type: _angular_router__WEBPACK_IMPORTED_MODULE_1__['ActivatedRoute']
                },
                {
                  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__['HttpClient']
                }
              ];
            },
            {
              valueChange: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Output']
                }
              ],
              downloadRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['ViewChild'],
                  args: ['downloadRef']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-generator-routing.module.ts':
      /*!*********************************************************************!*\
    !*** ./src/app/resume-generator/resume-generator-routing.module.ts ***!
    \*********************************************************************/

      /*! exports provided: ResumeGeneratorRoutingModule */

      /***/
      function srcAppResumeGeneratorResumeGeneratorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeGeneratorRoutingModule', function() {
          return ResumeGeneratorRoutingModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/router */
          './node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _resume_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./resume-generator.component */
          './src/app/resume-generator/resume-generator.component.ts'
        );
        /* harmony import */

        var _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./resume-edit/resume-edit.component */
          './src/app/resume-generator/resume-edit/resume-edit.component.ts'
        );
        /* harmony import */

        var _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./resume-preview/resume-preview.component */
          './src/app/resume-generator/resume-preview/resume-preview.component.ts'
        );

        var routes = [
          {
            path: 'generator',
            component: _resume_generator_component__WEBPACK_IMPORTED_MODULE_3__['ResumeGeneratorComponent']
          },
          {
            path: 'edit',
            component: _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_4__['ResumeEditComponent']
          },
          {
            path: 'preview',
            component: _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_5__['ResumePreviewComponent']
          },
          {
            path: '**',
            redirectTo: 'generator'
          }
        ];

        var ResumeGeneratorRoutingModule = function ResumeGeneratorRoutingModule() {
          _classCallCheck(this, ResumeGeneratorRoutingModule);
        };

        ResumeGeneratorRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: ResumeGeneratorRoutingModule
        });
        ResumeGeneratorRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function ResumeGeneratorRoutingModule_Factory(t) {
            return new (t || ResumeGeneratorRoutingModule)();
          },
          imports: [
            [
              _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
              _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)
            ],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](ResumeGeneratorRoutingModule, {
              imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']
              ],
              exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule']]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeGeneratorRoutingModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _angular_common__WEBPACK_IMPORTED_MODULE_2__['CommonModule'],
                      _angular_router__WEBPACK_IMPORTED_MODULE_1__['RouterModule'].forChild(routes)
                    ],
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

    /***/
    './src/app/resume-generator/resume-generator.component.ts':
      /*!****************************************************************!*\
    !*** ./src/app/resume-generator/resume-generator.component.ts ***!
    \****************************************************************/

      /*! exports provided: ResumeGeneratorComponent */

      /***/
      function srcAppResumeGeneratorResumeGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeGeneratorComponent', function() {
          return ResumeGeneratorComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./resume-edit/resume-edit.component */
          './src/app/resume-generator/resume-edit/resume-edit.component.ts'
        );
        /* harmony import */

        var _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./resume-preview/resume-preview.component */
          './src/app/resume-generator/resume-preview/resume-preview.component.ts'
        );

        var ResumeGeneratorComponent =
          /*#__PURE__*/
          (function() {
            function ResumeGeneratorComponent() {
              _classCallCheck(this, ResumeGeneratorComponent);
            }

            _createClass(ResumeGeneratorComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {}
              },
              {
                key: 'onValueChange',
                value: function onValueChange(data) {
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
                    experience: (data.experience.experience || []).map(function(item) {
                      return Object.assign(Object.assign({}, item), {
                        skillTags: item.skillTags ? item.skillTags.split(',') : []
                      });
                    })
                  };
                }
              }
            ]);

            return ResumeGeneratorComponent;
          })();

        ResumeGeneratorComponent.ɵfac = function ResumeGeneratorComponent_Factory(t) {
          return new (t || ResumeGeneratorComponent)();
        };

        ResumeGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumeGeneratorComponent,
          selectors: [['yur-resume-generator']],
          decls: 3,
          vars: 1,
          consts: [
            [3, 'valueChange'],
            [1, 'separate-line', 'mr-8'],
            [3, 'data']
          ],
          template: function ResumeGeneratorComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'yur-resume-edit', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵlistener'](
                'valueChange',
                function ResumeGeneratorComponent_Template_yur_resume_edit_valueChange_0_listener($event) {
                  return ctx.onValueChange($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](2, 'yur-resume-preview', 2);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('data', ctx.previewData);
            }
          },
          directives: [
            _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_1__['ResumeEditComponent'],
            _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_2__['ResumePreviewComponent']
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\nyur-resume-edit[_ngcontent-%COMP%] {\n  min-width: 540px;\n  max-height: 100vh;\n  overflow: auto;\n}\n\nyur-resume-preview[_ngcontent-%COMP%] {\n  min-width: 595px;\n  width: 100%;\n  max-height: 100vh;\n  overflow: auto;\n}\n\n.separate-line[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  flex-basis: 8px;\n  box-shadow: 4px 0 4px #ddd;\n}\n\n@media print {\n  yur-resume-edit[_ngcontent-%COMP%], div.separate-line[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  yur-resume-preview[_ngcontent-%COMP%] {\n    max-height: inherit !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLWdlbmVyYXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDQ0Y7O0FERUE7RUFDRTs7SUFFRSxhQUFBO0VDQ0Y7O0VERUE7SUFDRSw4QkFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxueXVyLXJlc3VtZS1lZGl0IHtcbiAgbWluLXdpZHRoOiA1NDBweDtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG55dXItcmVzdW1lLXByZXZpZXcge1xuICBtaW4td2lkdGg6IDU5NXB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc2VwYXJhdGUtbGluZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDRweCAwIDRweCAjZGRkO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICB5dXItcmVzdW1lLWVkaXQsXG4gIGRpdi5zZXBhcmF0ZS1saW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgeXVyLXJlc3VtZS1wcmV2aWV3IHtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG55dXItcmVzdW1lLWVkaXQge1xuICBtaW4td2lkdGg6IDU0MHB4O1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbnl1ci1yZXN1bWUtcHJldmlldyB7XG4gIG1pbi13aWR0aDogNTk1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5zZXBhcmF0ZS1saW5lIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDhweDtcbiAgYm94LXNoYWRvdzogNHB4IDAgNHB4ICNkZGQ7XG59XG5cbkBtZWRpYSBwcmludCB7XG4gIHl1ci1yZXN1bWUtZWRpdCxcbmRpdi5zZXBhcmF0ZS1saW5lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgeXVyLXJlc3VtZS1wcmV2aWV3IHtcbiAgICBtYXgtaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeGeneratorComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-generator',
                    templateUrl: './resume-generator.component.html',
                    styleUrls: ['./resume-generator.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            null
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-generator.module.ts':
      /*!*************************************************************!*\
    !*** ./src/app/resume-generator/resume-generator.module.ts ***!
    \*************************************************************/

      /*! exports provided: ResumeGeneratorModule */

      /***/
      function srcAppResumeGeneratorResumeGeneratorModuleTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumeGeneratorModule', function() {
          return ResumeGeneratorModule;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/common/http */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js'
        );
        /* harmony import */

        var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @shared/shared.module */
          './src/app/shared/shared.module.ts'
        );
        /* harmony import */

        var _resume_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./resume-generator.component */
          './src/app/resume-generator/resume-generator.component.ts'
        );
        /* harmony import */

        var _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./resume-preview/resume-preview.component */
          './src/app/resume-generator/resume-preview/resume-preview.component.ts'
        );
        /* harmony import */

        var _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./resume-edit/resume-edit.component */
          './src/app/resume-generator/resume-edit/resume-edit.component.ts'
        );
        /* harmony import */

        var _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./resume-generator-routing.module */
          './src/app/resume-generator/resume-generator-routing.module.ts'
        );
        /* harmony import */

        var _resume_edit_resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./resume-edit/resume-edit-about-me/resume-edit-about-me.component */
          './src/app/resume-generator/resume-edit/resume-edit-about-me/resume-edit-about-me.component.ts'
        );
        /* harmony import */

        var _resume_edit_resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./resume-edit/resume-edit-profile/resume-edit-profile.component */
          './src/app/resume-generator/resume-edit/resume-edit-profile/resume-edit-profile.component.ts'
        );
        /* harmony import */

        var _resume_edit_resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! ./resume-edit/resume-edit-education/resume-edit-education.component */
          './src/app/resume-generator/resume-edit/resume-edit-education/resume-edit-education.component.ts'
        );
        /* harmony import */

        var _resume_edit_resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! ./resume-edit/resume-edit-experience/resume-edit-experience.component */
          './src/app/resume-generator/resume-edit/resume-edit-experience/resume-edit-experience.component.ts'
        );
        /* harmony import */

        var _resume_preview_resume_preview_layout1_resume_preview_layout1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          /*! ./resume-preview/resume-preview-layout1/resume-preview-layout1.component */
          './src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts'
        );
        /* harmony import */

        var _resume_preview_resume_preview_layout1_resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          /*! ./resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component */
          './src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts'
        );

        var ResumeGeneratorModule = function ResumeGeneratorModule() {
          _classCallCheck(this, ResumeGeneratorModule);
        };

        ResumeGeneratorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineNgModule']({
          type: ResumeGeneratorModule
        });
        ResumeGeneratorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineInjector']({
          factory: function ResumeGeneratorModule_Factory(t) {
            return new (t || ResumeGeneratorModule)();
          },
          imports: [
            [
              _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__['SharedModule'],
              _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_6__['ResumeGeneratorRoutingModule'],
              _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClientModule']
            ]
          ]
        });

        (function() {
          (typeof ngJitMode === 'undefined' || ngJitMode) &&
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsetNgModuleScope'](ResumeGeneratorModule, {
              declarations: [
                _resume_generator_component__WEBPACK_IMPORTED_MODULE_3__['ResumeGeneratorComponent'],
                _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_4__['ResumePreviewComponent'],
                _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_5__['ResumeEditComponent'],
                _resume_edit_resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_7__['ResumeEditAboutMeComponent'],
                _resume_edit_resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__['ResumeEditProfileComponent'],
                _resume_edit_resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_9__[
                  'ResumeEditEducationComponent'
                ],
                _resume_edit_resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_10__[
                  'ResumeEditExperienceComponent'
                ],
                _resume_preview_resume_preview_layout1_resume_preview_layout1_component__WEBPACK_IMPORTED_MODULE_11__[
                  'ResumePreviewLayout1Component'
                ],
                _resume_preview_resume_preview_layout1_resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_12__[
                  'ResumePreviewLayout1TitleComponent'
                ]
              ],
              imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__['SharedModule'],
                _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_6__['ResumeGeneratorRoutingModule'],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClientModule']
              ]
            });
        })();
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumeGeneratorModule,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['NgModule'],
                args: [
                  {
                    imports: [
                      _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__['SharedModule'],
                      _resume_generator_routing_module__WEBPACK_IMPORTED_MODULE_6__['ResumeGeneratorRoutingModule'],
                      _angular_common_http__WEBPACK_IMPORTED_MODULE_1__['HttpClientModule']
                    ],
                    declarations: [
                      _resume_generator_component__WEBPACK_IMPORTED_MODULE_3__['ResumeGeneratorComponent'],
                      _resume_preview_resume_preview_component__WEBPACK_IMPORTED_MODULE_4__['ResumePreviewComponent'],
                      _resume_edit_resume_edit_component__WEBPACK_IMPORTED_MODULE_5__['ResumeEditComponent'],
                      _resume_edit_resume_edit_about_me_resume_edit_about_me_component__WEBPACK_IMPORTED_MODULE_7__[
                        'ResumeEditAboutMeComponent'
                      ],
                      _resume_edit_resume_edit_profile_resume_edit_profile_component__WEBPACK_IMPORTED_MODULE_8__[
                        'ResumeEditProfileComponent'
                      ],
                      _resume_edit_resume_edit_education_resume_edit_education_component__WEBPACK_IMPORTED_MODULE_9__[
                        'ResumeEditEducationComponent'
                      ],
                      _resume_edit_resume_edit_experience_resume_edit_experience_component__WEBPACK_IMPORTED_MODULE_10__[
                        'ResumeEditExperienceComponent'
                      ],
                      _resume_preview_resume_preview_layout1_resume_preview_layout1_component__WEBPACK_IMPORTED_MODULE_11__[
                        'ResumePreviewLayout1Component'
                      ],
                      _resume_preview_resume_preview_layout1_resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_12__[
                        'ResumePreviewLayout1TitleComponent'
                      ]
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

    /***/
    './src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts':
      /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts ***!
    \***********************************************************************************************************************************************/

      /*! exports provided: ResumePreviewLayout1TitleComponent */

      /***/
      function srcAppResumeGeneratorResumePreviewResumePreviewLayout1ResumePreviewLayout1TitleResumePreviewLayout1TitleComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumePreviewLayout1TitleComponent', function() {
          return ResumePreviewLayout1TitleComponent;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/material/icon */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );

        var ResumePreviewLayout1TitleComponent =
          /*#__PURE__*/
          (function() {
            function ResumePreviewLayout1TitleComponent() {
              _classCallCheck(this, ResumePreviewLayout1TitleComponent);
            }

            _createClass(ResumePreviewLayout1TitleComponent, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {}
              }
            ]);

            return ResumePreviewLayout1TitleComponent;
          })();

        ResumePreviewLayout1TitleComponent.ɵfac = function ResumePreviewLayout1TitleComponent_Factory(t) {
          return new (t || ResumePreviewLayout1TitleComponent)();
        };

        ResumePreviewLayout1TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumePreviewLayout1TitleComponent,
          selectors: [['yur-resume-preview-layout1-title']],
          inputs: {
            icon: 'icon',
            title: 'title'
          },
          decls: 6,
          vars: 4,
          consts: [
            [1, 'title-info', 'pl-16'],
            [3, 'fontSet', 'fontIcon'],
            [1, 'title', 'ml-16'],
            [1, 'divider', 'mt-8', 'mb-16']
          ],
          template: function ResumePreviewLayout1TitleComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'mat-icon', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](5, 'div', 3);
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('fontSet', ctx.icon == null ? null : ctx.icon.fontSet)(
                'fontIcon',
                ctx.icon == null ? null : ctx.icon.fontIcon
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](
                (ctx.icon == null ? null : ctx.icon.fontSet) ? '' : ctx.icon == null ? null : ctx.icon.fontIcon
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.title);
            }
          },
          directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__['MatIcon']],
          styles: [
            '.title-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n.title-info[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: var(--resume-preview-theme-color);\n}\n.title-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n}\n.divider[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 5px;\n  background: var(--resume-preview-theme-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDEvcmVzdW1lLXByZXZpZXctbGF5b3V0MS10aXRsZS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDEvcmVzdW1lLXByZXZpZXctbGF5b3V0MS10aXRsZS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0FDQ0Y7QURDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FDQ0o7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQ0FKO0FESUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LWxheW91dDEvcmVzdW1lLXByZXZpZXctbGF5b3V0MS10aXRsZS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cbiAgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gIH1cblxuICAudGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uZGl2aWRlciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xufVxuIiwiLnRpdGxlLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4udGl0bGUtaW5mbyAubWF0LWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG59XG4udGl0bGUtaW5mbyAudGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZGl2aWRlciB7XG4gIHdpZHRoOiA5MHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xufSJdfQ== */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumePreviewLayout1TitleComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-preview-layout1-title',
                    templateUrl: './resume-preview-layout1-title.component.html',
                    styleUrls: ['./resume-preview-layout1-title.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            {
              icon: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ],
              title: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts':
      /*!************************************************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts ***!
    \************************************************************************************************************/

      /*! exports provided: ResumePreviewLayout1Component */

      /***/
      function srcAppResumeGeneratorResumePreviewResumePreviewLayout1ResumePreviewLayout1ComponentTs(
        module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumePreviewLayout1Component', function() {
          return ResumePreviewLayout1Component;
        });
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./resume-preview-layout1-title/resume-preview-layout1-title.component */
          './src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1-title/resume-preview-layout1-title.component.ts'
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/material/icon */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );

        function ResumePreviewLayout1Component_li_44_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](1, 'mat-icon', 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](3, 'div', 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'div', 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'div', 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r23 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r23.school);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r23.period);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r23.department);
          }
        }

        function ResumePreviewLayout1Component_li_48_span_7_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'span', 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var skill_r26 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', skill_r26, ' ');
          }
        }

        function ResumePreviewLayout1Component_li_48_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'li', 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](6, 'div', 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](
              7,
              ResumePreviewLayout1Component_li_48_span_7_Template,
              2,
              1,
              'span',
              43
            );

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](8, 'div', 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var item_r24 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r24.period);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate2']('', item_r24.company, ' - ', item_r24.jobTitle, '');

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', item_r24.skillTags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](item_r24.jobDescription);
          }
        }

        var _c0 = function _c0() {
          return {
            fontSet: 'fab',
            fontIcon: 'fa-css3-alt'
          };
        };

        var _c1 = function _c1() {
          return {
            fontSet: 'fas',
            fontIcon: 'fa-file-contract'
          };
        };

        var _c2 = function _c2() {
          return {
            fontSet: 'fas',
            fontIcon: 'fa-graduation-cap'
          };
        };

        var _c3 = function _c3() {
          return {
            fontSet: 'fas',
            fontIcon: 'fa-street-view'
          };
        };

        var ResumePreviewLayout1Component = function ResumePreviewLayout1Component() {
          _classCallCheck(this, ResumePreviewLayout1Component);
        };

        ResumePreviewLayout1Component.ɵfac = function ResumePreviewLayout1Component_Factory(t) {
          return new (t || ResumePreviewLayout1Component)();
        };

        ResumePreviewLayout1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵdefineComponent']({
          type: ResumePreviewLayout1Component,
          selectors: [['yur-resume-preview-layout1']],
          inputs: {
            data: 'data'
          },
          decls: 49,
          vars: 25,
          consts: [
            [1, 'resume-preview'],
            [1, 'about-me', 'block'],
            [1, 'job-info'],
            [3, 'title', 'icon'],
            [1, 'pl-36'],
            [1, 'chinese-name'],
            [1, 'english-name', 'ml-8'],
            [1, 'photo-info'],
            [1, 'img'],
            ['alt', 'photo', 3, 'src'],
            [1, 'age'],
            [1, 'link-info', 'ml-28'],
            [1, 'link-item'],
            ['fontSet', 'fas', 'fontIcon', 'fa-home'],
            [1, 'link', 3, 'href'],
            ['fontSet', 'fas', 'fontIcon', 'fa-envelope-square'],
            ['fontSet', 'fas', 'fontIcon', 'fa-phone-square-alt'],
            [1, 'link'],
            ['fontSet', 'fab', 'fontIcon', 'fa-github'],
            ['fontSet', 'fab', 'fontIcon', 'fa-codepen'],
            [1, 'resume-preview-content', 'pl-32', 'pr-32'],
            [1, 'personal-profile', 'mt-32'],
            [1, 'profile'],
            ['title', '\u500B\u4EBA\u7C21\u6B77', 3, 'icon'],
            [1, 'profile-content', 'pl-36'],
            [1, 'education', 'ml-24'],
            ['title', '\u5B78\u6B77', 3, 'icon'],
            [1, 'education-list', 'pl-36'],
            ['class', 'education-item', 4, 'ngFor', 'ngForOf'],
            [1, 'experience', 'block'],
            ['title', '\u5DE5\u4F5C\u7D93\u6B77', 3, 'icon'],
            [1, 'experience-list', 'ml-20', 'pt-16'],
            ['class', 'experience-item ml-16', 4, 'ngFor', 'ngForOf'],
            [1, 'education-item'],
            ['fontSet', 'fas', 'fontIcon', 'fa-school'],
            [1, 'education-item-content'],
            [1, 'school'],
            [1, 'period'],
            [1, 'department'],
            [1, 'experience-item', 'ml-16'],
            [1, 'experience-item-content'],
            [1, 'company'],
            [1, 'skill-list'],
            ['class', 'skill-item mt-8 mb-8', 4, 'ngFor', 'ngForOf'],
            [1, 'job-description'],
            [1, 'skill-item', 'mt-8', 'mb-8']
          ],
          template: function ResumePreviewLayout1Component_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](1, 'div', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](2, 'div', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](3, 'yur-resume-preview-layout1-title', 3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](4, 'div', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](5, 'b', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](7, 'b', 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](9, 'div', 7);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](10, 'div', 8);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](11, 'img', 9);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](12, 'b', 10);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](14, 'ul', 11);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](15, 'li', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](16, 'mat-icon', 13);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](17, 'a', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](19, 'li', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](20, 'mat-icon', 15);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](21, 'a', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](23, 'li', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](24, 'mat-icon', 16);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](25, 'span', 17);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](27, 'li', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](28, 'mat-icon', 18);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](29, 'a', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](31, 'li', 12);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](32, 'mat-icon', 19);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](33, 'a', 14);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](34);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](35, 'div', 20);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](36, 'div', 21);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](37, 'div', 22);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](38, 'yur-resume-preview-layout1-title', 23);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](39, 'div', 24);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtext'](40);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](41, 'div', 25);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](42, 'yur-resume-preview-layout1-title', 26);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](43, 'ul', 27);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](44, ResumePreviewLayout1Component_li_44_Template, 9, 3, 'li', 28);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](45, 'div', 29);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelement'](46, 'yur-resume-preview-layout1-title', 30);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementStart'](47, 'ul', 31);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtemplate'](48, ResumePreviewLayout1Component_li_48_Template, 10, 5, 'li', 32);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('title', ctx.data.jobTitle)(
                'icon',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](21, _c0)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.chineseName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.englishName);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'src',
                ctx.data.photo,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.age);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'href',
                ctx.data.blog,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.blog);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'href',
                ctx.data.email,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.email);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.phone);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'href',
                ctx.data.github,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.github);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](3);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'href',
                ctx.data.codePen,
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵsanitizeUrl']
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate'](ctx.data.codePen);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'icon',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](22, _c1)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵtextInterpolate1'](' ', ctx.data.profile, ' ');

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'icon',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](23, _c2)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.data == null ? null : ctx.data.education);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty'](
                'icon',
                _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵpureFunction0'](24, _c3)
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵɵproperty']('ngForOf', ctx.data == null ? null : ctx.data.experience);
            }
          },
          directives: [
            _resume_preview_layout1_title_resume_preview_layout1_title_component__WEBPACK_IMPORTED_MODULE_1__[
              'ResumePreviewLayout1TitleComponent'
            ],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__['MatIcon'],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__['NgForOf']
          ],
          styles: [
            '@charset "UTF-8";\n.about-me[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ebebeb;\n  height: 200px;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 0 16px;\n}\n.about-me[_ngcontent-%COMP%]   .job-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(-50px);\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  border-bottom: 4px solid var(--resume-preview-theme-color);\n  position: relative;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  width: 66%;\n  height: 3px;\n  bottom: -12px;\n  background: var(--resume-preview-theme-color);\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  position: relative;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   .age[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -28px;\n  bottom: 8px;\n}\n.about-me[_ngcontent-%COMP%]   .photo-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.about-me[_ngcontent-%COMP%]   .link-info[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: var(--resume-preview-theme-color);\n  text-align: center;\n  margin-right: 4px;\n}\n.about-me[_ngcontent-%COMP%]   .link-info[_ngcontent-%COMP%]   .link-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n}\n.personal-profile[_ngcontent-%COMP%] {\n  display: flex;\n}\n.personal-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%] {\n  flex: 3;\n}\n.personal-profile[_ngcontent-%COMP%]   .profile[_ngcontent-%COMP%]   .profile-content[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%] {\n  flex: 2;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%] {\n  display: flex;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]    + .education-item[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.personal-profile[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   .education-item[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: flex;\n  align-items: center;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%] {\n  position: relative;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  height: 100%;\n  width: 2px;\n  background: #333232;\n  top: 0;\n  left: 0;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]:after {\n  content: "\u25B4";\n  position: absolute;\n  top: 0;\n  left: 1px;\n  font-size: 24px;\n  height: 0;\n  width: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #333232;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item[_ngcontent-%COMP%]    + .experience-item[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: var(--resume-preview-theme-color);\n  left: 1px;\n  transform: translate(-50%, 50%);\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n  font-weight: bold;\n  color: var(--resume-preview-theme-color);\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .skill-list[_ngcontent-%COMP%]   .skill-item[_ngcontent-%COMP%] {\n  border: 1px solid #333232;\n  border-radius: 20px;\n  color: #333232;\n  margin-right: 8px;\n  padding: 0 8px;\n  font-size: 12px;\n}\n.experience[_ngcontent-%COMP%]   .experience-list[_ngcontent-%COMP%]   .experience-item-content[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtcHJldmlldy9yZXN1bWUtcHJldmlldy1sYXlvdXQxL3Jlc3VtZS1wcmV2aWV3LWxheW91dDEuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbGVyZG9yL0RldmVsb3AvYW5ndWxhci9yZXN1bWUtZ2VuZXJhdG9yL3NyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtcHJldmlldy9yZXN1bWUtcHJldmlldy1sYXlvdXQxL3Jlc3VtZS1wcmV2aWV3LWxheW91dDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFMZ0I7RUFNaEIsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURBRjtBQ0VFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBREFKO0FDR0U7RUFDRSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMERBQUE7RUFDQSxrQkFBQTtBRERKO0FDR0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtBREROO0FDSUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FERk47QUNJTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QURGUjtBQ01JO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QURKTjtBQ1VNO0VBQ0Usd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FEUlI7QUNXTTtFQUNFLFlBQUE7QURUUjtBQ2VBO0VBQ0UsYUFBQTtBRFpGO0FDY0U7RUFDRSxPQUFBO0FEWko7QUNjSTtFQUNFLHFCQUFBO0FEWk47QUNnQkU7RUFDRSxPQUFBO0FEZEo7QUNnQkk7RUFDRSxhQUFBO0FEZE47QUNnQk07RUFDRSxnQkFBQTtBRGRSO0FDaUJNO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBRGZSO0FDc0JFO0VBQ0Usa0JBQUE7QURuQko7QUNzQkk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQVBXO0VBUVgsTUFBQTtFQUNBLE9BQUE7QURwQk47QUN1Qkk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0F2Qlc7QURFakI7QUN5Qk07RUFDRSxnQkFBQTtBRHZCUjtBQzRCTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtBRDFCUjtBQzZCTTtFQUNFLGlCQUFBO0VBQ0Esd0NBQUE7QUQzQlI7QUM4Qk07RUFDRSxpQkFBQTtBRDVCUjtBQytCTTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FEN0JSO0FDK0JRO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBNURPO0VBNkRQLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUQ3QlY7QUNpQ007RUFDRSxxQkFBQTtBRC9CUiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VtZS1nZW5lcmF0b3IvcmVzdW1lLXByZXZpZXcvcmVzdW1lLXByZXZpZXctbGF5b3V0MS9yZXN1bWUtcHJldmlldy1sYXlvdXQxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmFib3V0LW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgaGVpZ2h0OiAyMDBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLmFib3V0LW1lIC5qb2ItaW5mbyB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xufVxuLmFib3V0LW1lIC5waG90by1pbmZvIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hYm91dC1tZSAucGhvdG8taW5mbzpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2NiU7XG4gIGhlaWdodDogM3B4O1xuICBib3R0b206IC0xMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG59XG4uYWJvdXQtbWUgLnBob3RvLWluZm8gLmltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmFib3V0LW1lIC5waG90by1pbmZvIC5pbWcgLmFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yOHB4O1xuICBib3R0b206IDhweDtcbn1cbi5hYm91dC1tZSAucGhvdG8taW5mbyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFib3V0LW1lIC5saW5rLWluZm8gLmxpbmstaXRlbSAubWF0LWljb24ge1xuICBjb2xvcjogdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xufVxuLmFib3V0LW1lIC5saW5rLWluZm8gLmxpbmstaXRlbSBhIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ucGVyc29uYWwtcHJvZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAucHJvZmlsZSB7XG4gIGZsZXg6IDM7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAucHJvZmlsZSAucHJvZmlsZS1jb250ZW50IHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuLnBlcnNvbmFsLXByb2ZpbGUgLmVkdWNhdGlvbiB7XG4gIGZsZXg6IDI7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAuZWR1Y2F0aW9uIC5lZHVjYXRpb24taXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAuZWR1Y2F0aW9uIC5lZHVjYXRpb24taXRlbSArIC5lZHVjYXRpb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ucGVyc29uYWwtcHJvZmlsZSAuZWR1Y2F0aW9uIC5lZHVjYXRpb24taXRlbSAubWF0LWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjMzMzMjMyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0OmFmdGVyIHtcbiAgY29udGVudDogXCLilrRcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDFweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBoZWlnaHQ6IDA7XG4gIHdpZHRoOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICMzMzMyMzI7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0gKyAuZXhwZXJpZW5jZS1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gIGxlZnQ6IDFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5wZXJpb2Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5jb21wYW55IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1saXN0IC5leHBlcmllbmNlLWl0ZW0tY29udGVudCAuc2tpbGwtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5leHBlcmllbmNlIC5leHBlcmllbmNlLWxpc3QgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IC5za2lsbC1saXN0IC5za2lsbC1pdGVtIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMzMzIzMjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6ICMzMzMyMzI7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtbGlzdCAuZXhwZXJpZW5jZS1pdGVtLWNvbnRlbnQgLmpvYi1kZXNjcmlwdGlvbiB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn0iLCIkYWJvdXQtbWUtaGVpZ2h0OiAyMDBweDtcblxuLmFib3V0LW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogI2ViZWJlYjtcbiAgaGVpZ2h0OiAkYWJvdXQtbWUtaGVpZ2h0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgLmpvYi1pbmZvIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtI3skYWJvdXQtbWUtaGVpZ2h0IC8gNH0pO1xuICB9XG5cbiAgLnBob3RvLWluZm8ge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDY2JTtcbiAgICAgIGhlaWdodDogM3B4O1xuICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgICB9XG5cbiAgICAuaW1nIHtcbiAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5hZ2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAtMjhweDtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5saW5rLWluZm8ge1xuICAgIC5saW5rLWl0ZW0ge1xuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlc3VtZS1wcmV2aWV3LXRoZW1lLWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnBlcnNvbmFsLXByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIC5wcm9maWxlIHtcbiAgICBmbGV4OiAzO1xuXG4gICAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgfVxuICB9XG5cbiAgLmVkdWNhdGlvbiB7XG4gICAgZmxleDogMjtcblxuICAgIC5lZHVjYXRpb24taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAmICsgLmVkdWNhdGlvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgIH1cblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZXhwZXJpZW5jZSB7XG4gIC5leHBlcmllbmNlLWxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAkbGluZS1jb2xvcjogcmdiKDUxLCA1MCwgNTApO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogJGxpbmUtY29sb3I7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ+KWtCc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAxcHg7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBjb2xvcjogJGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgICAmICsgLmV4cGVyaWVuY2UtaXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmV4cGVyaWVuY2UtaXRlbS1jb250ZW50IHtcbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZXN1bWUtcHJldmlldy10aGVtZS1jb2xvcik7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNTAlKTtcbiAgICAgIH1cblxuICAgICAgLnBlcmlvZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogdmFyKC0tcmVzdW1lLXByZXZpZXctdGhlbWUtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuY29tcGFueSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuXG4gICAgICAuc2tpbGwtbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAuc2tpbGwtaXRlbSB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGxpbmUtY29sb3I7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICBjb2xvcjogJGxpbmUtY29sb3I7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5qb2ItZGVzY3JpcHRpb24ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__['ɵsetClassMetadata'](
            ResumePreviewLayout1Component,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Component'],
                args: [
                  {
                    selector: 'yur-resume-preview-layout1',
                    templateUrl: './resume-preview-layout1.component.html',
                    styleUrls: ['./resume-preview-layout1.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [];
            },
            {
              data: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__['Input']
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/resume-generator/resume-preview/resume-preview.component.model.ts':
      /*!***********************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview.component.model.ts ***!
    \***********************************************************************************/

      /*! exports provided: ResumePreviewTemplate */

      /***/
      function srcAppResumeGeneratorResumePreviewResumePreviewComponentModelTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumePreviewTemplate', function() {
          return ResumePreviewTemplate;
        });

        var ResumePreviewTemplate;

        (function(ResumePreviewTemplate) {
          ResumePreviewTemplate[(ResumePreviewTemplate['Layout1'] = 1)] = 'Layout1';
        })(ResumePreviewTemplate || (ResumePreviewTemplate = {}));
        /***/
      },

    /***/
    './src/app/resume-generator/resume-preview/resume-preview.component.ts':
      /*!*****************************************************************************!*\
    !*** ./src/app/resume-generator/resume-preview/resume-preview.component.ts ***!
    \*****************************************************************************/

      /*! exports provided: ResumePreviewComponent */

      /***/
      function srcAppResumeGeneratorResumePreviewResumePreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'ResumePreviewComponent', function() {
          return ResumePreviewComponent;
        });
        /* harmony import */

        var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! tslib */
          './node_modules/tslib/tslib.es6.js'
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./resume-preview.component.model */
          './src/app/resume-generator/resume-preview/resume-preview.component.model.ts'
        );
        /* harmony import */

        var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! @angular/material/form-field */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js'
        );
        /* harmony import */

        var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! @angular/material/tooltip */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js'
        );
        /* harmony import */

        var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! @angular/material/select */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js'
        );
        /* harmony import */

        var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! @angular/material/icon */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js'
        );
        /* harmony import */

        var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! @angular/common */
          './node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js'
        );
        /* harmony import */

        var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
          /*! @angular/material/button */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js'
        );
        /* harmony import */

        var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
          /*! @angular/material/core */
          './node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js'
        );

        var _c0 = ['templateContainer'];

        function ResumePreviewComponent_mat_option_6_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'mat-option', 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
          }

          if (rf & 2) {
            var template_r29 = ctx.$implicit;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('value', template_r29.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtextInterpolate1'](' ', template_r29.name, ' ');
          }
        }

        var ResumePreviewComponent =
          /*#__PURE__*/
          (function() {
            function ResumePreviewComponent(cfr) {
              _classCallCheck(this, ResumePreviewComponent);

              this.cfr = cfr;
            }

            _createClass(ResumePreviewComponent, [
              {
                key: 'ngOnChanges',
                value: function ngOnChanges(changes) {
                  if (!changes.data.isFirstChange() && changes.data.currentValue) {
                    this.loadComponent(this.templateCtrl.value);
                  }
                }
              },
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  this.templateCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormControl'](
                    _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumePreviewTemplate'].Layout1
                  );
                  this.initTemplateOption();
                }
              },
              {
                key: 'ngAfterViewInit',
                value: function ngAfterViewInit() {
                  this.loadComponent(this.templateCtrl.value);
                }
              },
              {
                key: 'onSelectionChange',
                value: function onSelectionChange(event) {
                  this.loadComponent(event.value);
                }
              },
              {
                key: 'onPrintPdf',
                value: function onPrintPdf() {
                  window.print();
                }
              },
              {
                key: 'loadComponent',
                value: function loadComponent(template) {
                  if (!this.templateContainerRef || !this.data) {
                    return;
                  }

                  console.log('load');
                  this.templateContainerRef.clear();

                  switch (template) {
                    case _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumePreviewTemplate'].Layout1:
                      this.loadLayout1Component();
                      break;
                  }
                }
              },
              {
                key: 'loadLayout1Component',
                value: function loadLayout1Component() {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__['__awaiter'])(
                    this,
                    void 0,
                    void 0,
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee() {
                      var _yield$Promise$resolv, ResumePreviewLayout1Component, templateFactory, _this$templateContain, instance;

                      return regeneratorRuntime.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return Promise.resolve().then(
                                  __webpack_require__.bind(
                                    null,
                                    /*! ./resume-preview-layout1/resume-preview-layout1.component */
                                    './src/app/resume-generator/resume-preview/resume-preview-layout1/resume-preview-layout1.component.ts'
                                  )
                                );

                              case 2:
                                _yield$Promise$resolv = _context.sent;
                                ResumePreviewLayout1Component = _yield$Promise$resolv.ResumePreviewLayout1Component;
                                templateFactory = this.cfr.resolveComponentFactory(ResumePreviewLayout1Component);
                                (_this$templateContain = this.templateContainerRef.createComponent(templateFactory, null)),
                                  (instance = _this$templateContain.instance);
                                instance.data = this.data;

                              case 7:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    })
                  );
                }
              },
              {
                key: 'initTemplateOption',
                value: function initTemplateOption() {
                  this.templateOption = [
                    {
                      id: _resume_preview_component_model__WEBPACK_IMPORTED_MODULE_3__['ResumePreviewTemplate'].Layout1,
                      name: 'Layout 1'
                    }
                  ];
                }
              }
            ]);

            return ResumePreviewComponent;
          })();

        ResumePreviewComponent.ɵfac = function ResumePreviewComponent_Factory(t) {
          return new (t || ResumePreviewComponent)(
            _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdirectiveInject'](
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ComponentFactoryResolver']
            )
          );
        };

        ResumePreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineComponent']({
          type: ResumePreviewComponent,
          selectors: [['yur-resume-preview']],
          viewQuery: function ResumePreviewComponent_Query(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵviewQuery'](
                _c0,
                true,
                _angular_core__WEBPACK_IMPORTED_MODULE_1__['ViewContainerRef']
              );
            }

            if (rf & 2) {
              var _t;

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵqueryRefresh'](
                (_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵloadQuery']())
              ) && (ctx.templateContainerRef = _t.first);
            }
          },
          inputs: {
            data: 'data'
          },
          features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵNgOnChangesFeature']],
          decls: 13,
          vars: 2,
          consts: [
            [1, 'layout-toolbar'],
            ['matTooltip', 'select layout', 1, 'layout-select-form-field', 'icon-select-field'],
            [3, 'formControl', 'selectionChange'],
            [3, 'value', 4, 'ngFor', 'ngForOf'],
            ['matTooltip', 'print pdf', 'mat-icon-button', '', 1, 'print-btn', 3, 'click'],
            [1, 'layout-preview'],
            ['templateContainer', ''],
            [3, 'value']
          ],
          template: function ResumePreviewComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](0, 'div', 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](1, 'mat-form-field', 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](2, 'mat-select', 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
                'selectionChange',
                function ResumePreviewComponent_Template_mat_select_selectionChange_2_listener($event) {
                  return ctx.onSelectionChange($event);
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](3, 'mat-select-trigger');

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](4, 'mat-icon');

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](5, 'style');

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtemplate'](
                6,
                ResumePreviewComponent_mat_option_6_Template,
                2,
                2,
                'mat-option',
                3
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](7, 'button', 4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵlistener'](
                'click',
                function ResumePreviewComponent_Template_button_click_7_listener() {
                  return ctx.onPrintPdf();
                }
              );

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](8, 'mat-icon');

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵtext'](9, 'local_printshop');

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementStart'](10, 'div', 5);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementContainer'](11, null, 6);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵelementEnd']();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('formControl', ctx.templateCtrl);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵadvance'](4);

              _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵproperty']('ngForOf', ctx.templateOption);
            }
          },
          directives: [
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__['MatFormField'],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__['MatTooltip'],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__['MatSelect'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['NgControlStatus'],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__['FormControlDirective'],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__['MatSelectTrigger'],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__['MatIcon'],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__['NgForOf'],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_9__['MatButton'],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_10__['MatOption']
          ],
          styles: [
            '[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.layout-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-top: 1rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.layout-toolbar[_ngcontent-%COMP%]   .layout-select-form-field[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n\n.layout-toolbar[_ngcontent-%COMP%]   .print-btn[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZXJkb3IvRGV2ZWxvcC9hbmd1bGFyL3Jlc3VtZS1nZW5lcmF0b3Ivc3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bWUtZ2VuZXJhdG9yL3Jlc3VtZS1wcmV2aWV3L3Jlc3VtZS1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxxQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcmVzdW1lLWdlbmVyYXRvci9yZXN1bWUtcHJldmlldy9yZXN1bWUtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGF5b3V0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuXG4gIC5sYXlvdXQtc2VsZWN0LWZvcm0tZmllbGQge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgfVxuXG4gIC5wcmludC1idG4ge1xuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYXlvdXQtdG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG4ubGF5b3V0LXRvb2xiYXIgLmxheW91dC1zZWxlY3QtZm9ybS1maWVsZCB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG4ubGF5b3V0LXRvb2xiYXIgLnByaW50LWJ0biB7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbn0iXX0= */'
          ]
        });
        /*@__PURE__*/

        (function() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵsetClassMetadata'](
            ResumePreviewComponent,
            [
              {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Component'],
                args: [
                  {
                    selector: 'yur-resume-preview',
                    templateUrl: './resume-preview.component.html',
                    styleUrls: ['./resume-preview.component.scss']
                  }
                ]
              }
            ],
            function() {
              return [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ComponentFactoryResolver']
                }
              ];
            },
            {
              data: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['Input']
                }
              ],
              templateContainerRef: [
                {
                  type: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ViewChild'],
                  args: [
                    'templateContainer',
                    {
                      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__['ViewContainerRef']
                    }
                  ]
                }
              ]
            }
          );
        })();
        /***/
      },

    /***/
    './src/app/shared/base/cva.base.ts':
      /*!*****************************************!*\
    !*** ./src/app/shared/base/cva.base.ts ***!
    \*****************************************/

      /*! exports provided: CvaBase, createValueAccessor */

      /***/
      function srcAppSharedBaseCvaBaseTs(module, __webpack_exports__, __webpack_require__) {
        'use strict';

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'CvaBase', function() {
          return CvaBase;
        });
        /* harmony export (binding) */

        __webpack_require__.d(__webpack_exports__, 'createValueAccessor', function() {
          return createValueAccessor;
        });
        /* harmony import */

        var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @angular/forms */
          './node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js'
        );
        /* harmony import */

        var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! @angular/core */
          './node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js'
        );
        /* harmony import */

        var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! rxjs */
          './node_modules/rxjs/_esm2015/index.js'
        );

        var CvaBase =
          /*#__PURE__*/
          (function() {
            function CvaBase() {
              _classCallCheck(this, CvaBase);
            }

            _createClass(CvaBase, [
              {
                key: 'ngOnInit',
                value: function ngOnInit() {
                  var _this10 = this;

                  this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__['Subscription']();
                  this.initForm();
                  this.subscription.add(
                    this.form.valueChanges.subscribe(function() {
                      _this10.onChange(_this10.form.getRawValue());
                    })
                  );
                }
              },
              {
                key: 'ngOnDestroy',
                value: function ngOnDestroy() {
                  this.subscription.unsubscribe();
                }
              },
              {
                key: 'writeValue',
                value: function writeValue(obj) {
                  if (!obj) {
                    return;
                  }

                  this.form.setValue(obj, {
                    emitEvent: false
                  });
                }
              },
              {
                key: 'registerOnChange',
                value: function registerOnChange(fn) {
                  this.onChange = fn;
                }
              },
              {
                key: 'registerOnTouched',
                value: function registerOnTouched(fn) {
                  this.onTouched = fn;
                }
              }
            ]);

            return CvaBase;
          })();

        CvaBase.ɵfac = function CvaBase_Factory(t) {
          return new (t || CvaBase)();
        };

        CvaBase.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__['ɵɵdefineDirective']({
          type: CvaBase
        });

        function createValueAccessor(comp) {
          return {
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_0__['NG_VALUE_ACCESSOR'],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__['forwardRef'])(function() {
              return comp;
            }),
            multi: true
          };
        }
        /***/
      }
  }
]);
//# sourceMappingURL=resume-generator-resume-generator-module-es5.js.map
