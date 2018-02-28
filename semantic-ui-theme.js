(function(e, a) {
  for (var i in a) e[i] = a[i];
})(
  exports,
  /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function

    /******/ /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId])
        /******/ return installedModules[moduleId].exports; // Create a new module (and put it into the cache)

      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ exports: {},
        /******/ id: moduleId,
        /******/ loaded: false
        /******/
      }); // Execute the module function

      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded

      /******/ /******/ module.loaded = true; // Return the exports of the module

      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)

    /******/ /******/ __webpack_require__.m = modules; // expose the module cache

    /******/ /******/ __webpack_require__.c = installedModules; // __webpack_public_path__

    /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports

    /******/ /******/ return __webpack_require__(0);
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.Input = exports.ButtonLoader = exports.TokenBridge = exports.DestroyAccountButton = exports.UpdatePasswordForm = exports.OAuthSignInButton = exports.RequestPasswordResetForm = exports.SignOutButton = exports.EmailSignUpForm = exports.EmailSignInForm = exports.AuthGlobals = undefined;

        var _AuthGlobals2 = __webpack_require__(156);

        var _AuthGlobals3 = _interopRequireDefault(_AuthGlobals2);

        var _EmailSignInForm2 = __webpack_require__(179);

        var _EmailSignInForm3 = _interopRequireDefault(_EmailSignInForm2);

        var _EmailSignUpForm2 = __webpack_require__(428);

        var _EmailSignUpForm3 = _interopRequireDefault(_EmailSignUpForm2);

        var _SignOutButton2 = __webpack_require__(430);

        var _SignOutButton3 = _interopRequireDefault(_SignOutButton2);

        var _RequestPasswordResetForm2 = __webpack_require__(431);

        var _RequestPasswordResetForm3 = _interopRequireDefault(
          _RequestPasswordResetForm2
        );

        var _OAuthSignInButton2 = __webpack_require__(432);

        var _OAuthSignInButton3 = _interopRequireDefault(_OAuthSignInButton2);

        var _UpdatePasswordForm2 = __webpack_require__(433);

        var _UpdatePasswordForm3 = _interopRequireDefault(_UpdatePasswordForm2);

        var _DestroyAccountButton2 = __webpack_require__(434);

        var _DestroyAccountButton3 = _interopRequireDefault(
          _DestroyAccountButton2
        );

        var _TokenBridge2 = __webpack_require__(34);

        var _TokenBridge3 = _interopRequireDefault(_TokenBridge2);

        var _ButtonLoader2 = __webpack_require__(177);

        var _ButtonLoader3 = _interopRequireDefault(_ButtonLoader2);

        var _Input2 = __webpack_require__(178);

        var _Input3 = _interopRequireDefault(_Input2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.AuthGlobals = _AuthGlobals3.default;
        exports.EmailSignInForm = _EmailSignInForm3.default;
        exports.EmailSignUpForm = _EmailSignUpForm3.default;
        exports.SignOutButton = _SignOutButton3.default;
        exports.RequestPasswordResetForm = _RequestPasswordResetForm3.default;
        exports.OAuthSignInButton = _OAuthSignInButton3.default;
        exports.UpdatePasswordForm = _UpdatePasswordForm3.default;
        exports.DestroyAccountButton = _DestroyAccountButton3.default;
        exports.TokenBridge = _TokenBridge3.default;
        exports.ButtonLoader = _ButtonLoader3.default;
        exports.Input = _Input3.default;

        /***/
      },
      ,
      /* 1 */ /* 2 */
      /***/ function(module, exports) {
        module.exports = require("react");

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        if (false) {
          var REACT_ELEMENT_TYPE =
            (typeof Symbol === "function" &&
              Symbol.for &&
              Symbol.for("react.element")) ||
            0xeac7;

          var isValidElement = function(object) {
            return (
              typeof object === "object" &&
              object !== null &&
              object.$$typeof === REACT_ELEMENT_TYPE
            );
          };

          // By explicitly using `prop-types` you are opting into new development behavior.
          // http://fb.me/prop-types-in-prod
          var throwOnDirectAccess = true;
          module.exports = require("./factoryWithTypeCheckers")(
            isValidElement,
            throwOnDirectAccess
          );
        } else {
          // By explicitly using `prop-types` you are opting into new production behavior.
          // http://fb.me/prop-types-in-prod
          module.exports = __webpack_require__(4)();
        }

        /***/
      },
      /* 4 */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        "use strict";

        var emptyFunction = __webpack_require__(5);
        var invariant = __webpack_require__(6);
        var ReactPropTypesSecret = __webpack_require__(7);

        module.exports = function() {
          function shim(
            props,
            propName,
            componentName,
            location,
            propFullName,
            secret
          ) {
            if (secret === ReactPropTypesSecret) {
              // It is still safe when called from React.
              return;
            }
            invariant(
              false,
              "Calling PropTypes validators directly is not supported by the `prop-types` package. " +
                "Use PropTypes.checkPropTypes() to call them. " +
                "Read more at http://fb.me/use-check-prop-types"
            );
          }
          shim.isRequired = shim;
          function getShim() {
            return shim;
          }
          // Important!
          // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
          var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,

            any: shim,
            arrayOf: getShim,
            element: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim,
            exact: getShim
          };

          ReactPropTypes.checkPropTypes = emptyFunction;
          ReactPropTypes.PropTypes = ReactPropTypes;

          return ReactPropTypes;
        };

        /***/
      },
      /* 5 */
      /***/ function(module, exports) {
        "use strict";

        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         *
         */

        function makeEmptyFunction(arg) {
          return function() {
            return arg;
          };
        }

        /**
         * This function accepts and discards inputs; it has no side effects. This is
         * primarily useful idiomatically for overridable function endpoints which
         * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
         */
        var emptyFunction = function emptyFunction() {};

        emptyFunction.thatReturns = makeEmptyFunction;
        emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
        emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
        emptyFunction.thatReturnsNull = makeEmptyFunction(null);
        emptyFunction.thatReturnsThis = function() {
          return this;
        };
        emptyFunction.thatReturnsArgument = function(arg) {
          return arg;
        };

        module.exports = emptyFunction;

        /***/
      },
      /* 6 */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         *
         */

        "use strict";

        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var validateFormat = function validateFormat(format) {};

        if (false) {
          validateFormat = function validateFormat(format) {
            if (format === undefined) {
              throw new Error("invariant requires an error message argument");
            }
          };
        }

        function invariant(condition, format, a, b, c, d, e, f) {
          validateFormat(format);

          if (!condition) {
            var error;
            if (format === undefined) {
              error = new Error(
                "Minified exception occurred; use the non-minified dev environment " +
                  "for the full error message and additional helpful warnings."
              );
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                })
              );
              error.name = "Invariant Violation";
            }

            error.framesToPop = 1; // we don't care about invariant's own frame
            throw error;
          }
        }

        module.exports = invariant;

        /***/
      },
      /* 7 */
      /***/ function(module, exports) {
        /**
         * Copyright (c) 2013-present, Facebook, Inc.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        "use strict";

        var ReactPropTypesSecret =
          "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";

        module.exports = ReactPropTypesSecret;

        /***/
      },
      ,
      /* 8 */ /* 9 */
      /***/ function(module, exports) {
        module.exports = require("react-redux");

        /***/
      },
      /* 10 */
      /***/ function(module, exports) {
        module.exports = require("redux-auth");

        /***/
      },
      ,
      ,
      ,
      /* 11 */ /* 12 */ /* 13 */ /* 14 */
      /***/ function(module, exports) {
        module.exports = require("immutable");

        /***/
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      /* 15 */ /* 16 */ /* 17 */ /* 18 */ /* 19 */ /* 20 */ /* 21 */ /* 22 */ /* 23 */ /* 24 */ /* 25 */ /* 26 */ /* 27 */ /* 28 */ /* 29 */ /* 30 */ /* 31 */ /* 32 */
      /***/ function(module, exports) {
        module.exports = require("react-loader");

        /***/
      },
      ,
      /* 33 */ /* 34 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(9);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var TokenBridge = (function(_React$Component) {
          _inherits(TokenBridge, _React$Component);

          function TokenBridge() {
            _classCallCheck(this, TokenBridge);

            return _possibleConstructorReturn(
              this,
              (
                TokenBridge.__proto__ || Object.getPrototypeOf(TokenBridge)
              ).apply(this, arguments)
            );
          }

          _createClass(TokenBridge, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement("script", {
                  id: "token-bridge",
                  type: "application/json",
                  dangerouslySetInnerHTML: {
                    __html: this.props.initialCredentials
                  }
                });
              }
            }
          ]);

          return TokenBridge;
        })(_react2.default.Component);

        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;

          var headers = auth.getIn(["server", "headers"]);

          return {
            initialCredentials:
              headers &&
              JSON.stringify({
                user: auth.getIn(["server", "user"]),
                mustResetPassword: auth.getIn(["server", "mustResetPassword"]),
                firstTimeLogin: auth.getIn(["server", "firstTimeLogin"]),
                currentEndpointKey: auth.getIn([
                  "configure",
                  "currentEndpointKey"
                ]),
                defaultEndpointKey: auth.getIn([
                  "configure",
                  "defaultEndpointKey"
                ]),
                headers: headers
              })
          };
        })(TokenBridge);

        /***/
      },
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      ,
      /* 35 */ /* 36 */ /* 37 */ /* 38 */ /* 39 */ /* 40 */ /* 41 */ /* 42 */ /* 43 */ /* 44 */ /* 45 */ /* 46 */ /* 47 */ /* 48 */ /* 49 */ /* 50 */ /* 51 */ /* 52 */ /* 53 */ /* 54 */ /* 55 */ /* 56 */ /* 57 */ /* 58 */ /* 59 */ /* 60 */ /* 61 */ /* 62 */ /* 63 */ /* 64 */ /* 65 */ /* 66 */ /* 67 */ /* 68 */ /* 69 */ /* 70 */ /* 71 */ /* 72 */ /* 73 */ /* 74 */ /* 75 */ /* 76 */ /* 77 */ /* 78 */ /* 79 */ /* 80 */ /* 81 */ /* 82 */ /* 83 */ /* 84 */ /* 85 */ /* 86 */ /* 87 */ /* 88 */ /* 89 */ /* 90 */ /* 91 */ /* 92 */ /* 93 */ /* 94 */ /* 95 */ /* 96 */ /* 97 */ /* 98 */ /* 99 */ /* 100 */ /* 101 */ /* 102 */ /* 103 */ /* 104 */ /* 105 */ /* 106 */ /* 107 */ /* 108 */ /* 109 */ /* 110 */ /* 111 */ /* 112 */ /* 113 */ /* 114 */ /* 115 */ /* 116 */ /* 117 */ /* 118 */ /* 119 */ /* 120 */ /* 121 */ /* 122 */ /* 123 */ /* 124 */ /* 125 */ /* 126 */ /* 127 */ /* 128 */ /* 129 */ /* 130 */ /* 131 */ /* 132 */ /* 133 */ /* 134 */ /* 135 */ /* 136 */ /* 137 */ /* 138 */ /* 139 */ /* 140 */ /* 141 */ /* 142 */ /* 143 */ /* 144 */ /* 145 */ /* 146 */ /* 147 */ /* 148 */ /* 149 */ /* 150 */ /* 151 */ /* 152 */ /* 153 */ /* 154 */ /* 155 */ /* 156 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _EmailSignInSuccessModal = __webpack_require__(157);

        var _EmailSignInSuccessModal2 = _interopRequireDefault(
          _EmailSignInSuccessModal
        );

        var _EmailSignInErrorModal = __webpack_require__(161);

        var _EmailSignInErrorModal2 = _interopRequireDefault(
          _EmailSignInErrorModal
        );

        var _OAuthSignInSuccessModal = __webpack_require__(162);

        var _OAuthSignInSuccessModal2 = _interopRequireDefault(
          _OAuthSignInSuccessModal
        );

        var _OAuthSignInErrorModal = __webpack_require__(163);

        var _OAuthSignInErrorModal2 = _interopRequireDefault(
          _OAuthSignInErrorModal
        );

        var _EmailSignUpSuccessModal = __webpack_require__(164);

        var _EmailSignUpSuccessModal2 = _interopRequireDefault(
          _EmailSignUpSuccessModal
        );

        var _EmailSignUpErrorModal = __webpack_require__(165);

        var _EmailSignUpErrorModal2 = _interopRequireDefault(
          _EmailSignUpErrorModal
        );

        var _SignOutSuccessModal = __webpack_require__(166);

        var _SignOutSuccessModal2 = _interopRequireDefault(
          _SignOutSuccessModal
        );

        var _SignOutErrorModal = __webpack_require__(167);

        var _SignOutErrorModal2 = _interopRequireDefault(_SignOutErrorModal);

        var _FirstTimeLoginSuccessModal = __webpack_require__(168);

        var _FirstTimeLoginSuccessModal2 = _interopRequireDefault(
          _FirstTimeLoginSuccessModal
        );

        var _FirstTimeLoginErrorModal = __webpack_require__(169);

        var _FirstTimeLoginErrorModal2 = _interopRequireDefault(
          _FirstTimeLoginErrorModal
        );

        var _RequestPasswordResetErrorModal = __webpack_require__(170);

        var _RequestPasswordResetErrorModal2 = _interopRequireDefault(
          _RequestPasswordResetErrorModal
        );

        var _RequestPasswordResetSuccessModal = __webpack_require__(171);

        var _RequestPasswordResetSuccessModal2 = _interopRequireDefault(
          _RequestPasswordResetSuccessModal
        );

        var _UpdatePasswordErrorModal = __webpack_require__(172);

        var _UpdatePasswordErrorModal2 = _interopRequireDefault(
          _UpdatePasswordErrorModal
        );

        var _UpdatePasswordSuccessModal = __webpack_require__(173);

        var _UpdatePasswordSuccessModal2 = _interopRequireDefault(
          _UpdatePasswordSuccessModal
        );

        var _DestroyAccountErrorModal = __webpack_require__(174);

        var _DestroyAccountErrorModal2 = _interopRequireDefault(
          _DestroyAccountErrorModal
        );

        var _DestroyAccountSuccessModal = __webpack_require__(175);

        var _DestroyAccountSuccessModal2 = _interopRequireDefault(
          _DestroyAccountSuccessModal
        );

        var _PasswordResetSuccessModal = __webpack_require__(176);

        var _PasswordResetSuccessModal2 = _interopRequireDefault(
          _PasswordResetSuccessModal
        );

        var _TokenBridge = __webpack_require__(34);

        var _TokenBridge2 = _interopRequireDefault(_TokenBridge);

        var _reactRedux = __webpack_require__(9);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var AuthGlobals = (function(_React$Component) {
          _inherits(AuthGlobals, _React$Component);

          function AuthGlobals() {
            _classCallCheck(this, AuthGlobals);

            return _possibleConstructorReturn(
              this,
              (
                AuthGlobals.__proto__ || Object.getPrototypeOf(AuthGlobals)
              ).apply(this, arguments)
            );
          }

          _createClass(AuthGlobals, [
            {
              key: "render",
              value: function render() {
                var showEmailSignInSuccess =
                  this.props.emailSignInSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "emailSignInSuccessModalVisible"
                  ]);

                var showEmailSignInError =
                  this.props.emailSignInErrorEnabled &&
                  this.props.auth.getIn(["ui", "emailSignInErrorModalVisible"]);

                var showEmailSignUpSuccess =
                  this.props.emailSignUpSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "emailSignUpSuccessModalVisible"
                  ]);

                var showEmailSignUpError =
                  this.props.emailSignUpErrorEnabled &&
                  this.props.auth.getIn(["ui", "emailSignUpErrorModalVisible"]);

                var showSignOutSuccess =
                  this.props.signOutSuccessEnabled &&
                  this.props.auth.getIn(["ui", "signOutSuccessModalVisible"]);

                var showSignOutError =
                  this.props.signOutErrorEnabled &&
                  this.props.auth.getIn(["ui", "signOutErrorModalVisible"]);

                var showFirstTimeLoginSuccess =
                  this.props.firstTimeLoginSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "firstTimeLoginSuccessModalVisible"
                  ]);

                var showFirstTimeLoginError =
                  this.props.firstTimeLoginErrorEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "firstTimeLoginErrorModalVisible"
                  ]);

                var showRequestPasswordResetError =
                  this.props.requestPasswordResetErrorEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "requestPasswordResetErrorModalVisible"
                  ]);

                var showRequestPasswordResetSuccess =
                  this.props.requestPasswordResetSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "requestPasswordResetSuccessModalVisible"
                  ]);

                var showOAuthSignInSuccess =
                  this.props.oAuthSignInSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "oAuthSignInSuccessModalVisible"
                  ]);

                var showOAuthSignInError =
                  this.props.oAuthSignInErrorEnabled &&
                  this.props.auth.getIn(["ui", "oAuthSignInErrorModalVisible"]);

                var updatePasswordSuccess =
                  this.props.updatePasswordSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "updatePasswordSuccessModalVisible"
                  ]);

                var updatePasswordError =
                  this.props.updatePasswordErrorEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "updatePasswordErrorModalVisible"
                  ]);

                var destroyAccountSuccess =
                  this.props.destroyAccountSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "destroyAccountSuccessModalVisible"
                  ]);

                var destroyAccountError =
                  this.props.destroyAccountErrorEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "destroyAccountErrorModalVisible"
                  ]);

                var passwordResetSuccess =
                  this.props.passwordResetSuccessEnabled &&
                  this.props.auth.getIn([
                    "ui",
                    "passwordResetSuccessModalVisible"
                  ]);

                //let passwordResetError = (
                //this.props.passwordResetErrorEnabled &&
                //this.props.auth.getIn(["ui", "passwordResetErrorModalVisible"])
                //);

                return _react2.default.createElement(
                  "div",
                  { id: "auth-modals" },
                  _react2.default.createElement(
                    _EmailSignInSuccessModal2.default,
                    { show: showEmailSignInSuccess }
                  ),
                  _react2.default.createElement(
                    _EmailSignInErrorModal2.default,
                    { show: showEmailSignInError }
                  ),
                  _react2.default.createElement(
                    _OAuthSignInSuccessModal2.default,
                    { show: showOAuthSignInSuccess }
                  ),
                  _react2.default.createElement(
                    _OAuthSignInErrorModal2.default,
                    { show: showOAuthSignInError }
                  ),
                  _react2.default.createElement(
                    _EmailSignUpSuccessModal2.default,
                    { show: showEmailSignUpSuccess }
                  ),
                  _react2.default.createElement(
                    _EmailSignUpErrorModal2.default,
                    { show: showEmailSignUpError }
                  ),
                  _react2.default.createElement(_SignOutSuccessModal2.default, {
                    show: showSignOutSuccess
                  }),
                  _react2.default.createElement(_SignOutErrorModal2.default, {
                    show: showSignOutError
                  }),
                  _react2.default.createElement(
                    _FirstTimeLoginSuccessModal2.default,
                    { show: showFirstTimeLoginSuccess }
                  ),
                  _react2.default.createElement(
                    _FirstTimeLoginErrorModal2.default,
                    { show: showFirstTimeLoginError }
                  ),
                  _react2.default.createElement(
                    _RequestPasswordResetErrorModal2.default,
                    { show: showRequestPasswordResetError }
                  ),
                  _react2.default.createElement(
                    _RequestPasswordResetSuccessModal2.default,
                    {
                      show: showRequestPasswordResetSuccess
                    }
                  ),
                  _react2.default.createElement(
                    _UpdatePasswordErrorModal2.default,
                    { show: updatePasswordError }
                  ),
                  _react2.default.createElement(
                    _UpdatePasswordSuccessModal2.default,
                    { show: updatePasswordSuccess }
                  ),
                  _react2.default.createElement(
                    _DestroyAccountErrorModal2.default,
                    { show: destroyAccountError }
                  ),
                  _react2.default.createElement(
                    _DestroyAccountSuccessModal2.default,
                    { show: destroyAccountSuccess }
                  ),
                  _react2.default.createElement(
                    _PasswordResetSuccessModal2.default,
                    { show: passwordResetSuccess }
                  ),
                  _react2.default.createElement(_TokenBridge2.default, null)
                );
              }
            }
          ]);

          return AuthGlobals;
        })(_react2.default.Component);

        AuthGlobals.propTypes = {
          signOutSuccessEnabled: _propTypes2.default.bool,
          signOutErrorEnabled: _propTypes2.default.bool,
          emailSignInSuccessEnabled: _propTypes2.default.bool,
          emailSignInErrorEnabled: _propTypes2.default.bool,
          oAuthSignInSuccessEnabled: _propTypes2.default.bool,
          oAuthSignInErrorEnabled: _propTypes2.default.bool,
          emailSignUpSuccessEnabled: _propTypes2.default.bool,
          emailSignUpErrorEnabled: _propTypes2.default.bool,
          firstTimeLoginSuccessEnabled: _propTypes2.default.bool,
          firstTimeLoginErrorEnabled: _propTypes2.default.bool,
          requestPasswordResetErrorEnabled: _propTypes2.default.bool,
          requestPasswordResetSuccessEnabled: _propTypes2.default.bool,
          updatePasswordErrorEnabled: _propTypes2.default.bool,
          updatePasswordSuccessEnabled: _propTypes2.default.bool,
          destroyAccountErrorEnabled: _propTypes2.default.bool,
          destroyAccountSuccessEnabled: _propTypes2.default.bool,
          passwordResetSuccessEnabled: _propTypes2.default.bool,
          passwordResetErrorEnabled: _propTypes2.default.bool
        };
        AuthGlobals.defaultProps = {
          signOutSuccessEnabled: true,
          signOutErrorEnabled: true,
          emailSignInSuccessEnabled: true,
          emailSignInErrorEnabled: true,
          oAuthSignInSuccessEnabled: true,
          oAuthSignInErrorEnabled: true,
          emailSignUpSuccessEnabled: true,
          emailSignUpErrorEnabled: true,
          firstTimeLoginSuccessEnabled: true,
          firstTimeLoginErrorEnabled: true,
          requestPasswordResetErrorEnabled: true,
          requestPasswordResetSuccessEnabled: true,
          updatePasswordErrorEnabled: true,
          updatePasswordSuccessEnabled: true,
          destroyAccountErrorEnabled: true,
          destroyAccountSuccessEnabled: true,
          passwordResetSuccessEnabled: true,
          passwordResetErrorEnabled: true
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(AuthGlobals);

        /***/
      },
      /* 157 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(9);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var EmailSignInSuccessModal = (function(_React$Component) {
          _inherits(EmailSignInSuccessModal, _React$Component);

          function EmailSignInSuccessModal() {
            _classCallCheck(this, EmailSignInSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                EmailSignInSuccessModal.__proto__ ||
                Object.getPrototypeOf(EmailSignInSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(EmailSignInSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "email-sign-in-success-modal",
                    closeAction: _ui.hideEmailSignInSuccessModal,
                    closeBtnLabel: "Close",
                    title: "Welcome Back"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "You are now signed in as",
                    " ",
                    this.props.auth.getIn(["user", "attributes", "email"]),
                    "."
                  )
                );
              }
            }
          ]);

          return EmailSignInSuccessModal;
        })(_react2.default.Component);

        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(EmailSignInSuccessModal);

        /***/
      },
      /* 158 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        var _ErrorList = __webpack_require__(160);

        var _ErrorList2 = _interopRequireDefault(_ErrorList);

        var _reactRedux = __webpack_require__(9);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function _toArray(arr) {
          return Array.isArray(arr) ? arr : Array.from(arr);
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var BaseModal = (function(_React$Component) {
          _inherits(BaseModal, _React$Component);

          function BaseModal() {
            _classCallCheck(this, BaseModal);

            return _possibleConstructorReturn(
              this,
              (BaseModal.__proto__ || Object.getPrototypeOf(BaseModal)).apply(
                this,
                arguments
              )
            );
          }

          _createClass(BaseModal, [
            {
              key: "close",
              value: function close() {
                this.props.dispatch(this.props.closeAction());
              }
            },
            {
              key: "getEndpoint",
              value: function getEndpoint() {
                return (
                  this.props.endpoint ||
                  this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
                  this.props.auth.getIn(["configure", "defaultEndpointKey"])
                );
              }
            },
            {
              key: "getErrorList",
              value: function getErrorList() {
                var _props$errorAddr = _toArray(this.props.errorAddr),
                  base = _props$errorAddr[0],
                  rest = _props$errorAddr.slice(1);

                return _react2.default.createElement(_ErrorList2.default, {
                  errors: this.props.auth.getIn(
                    [base, this.getEndpoint()].concat(_toConsumableArray(rest))
                  )
                });
              }
            },
            {
              key: "render",
              value: function render() {
                var body = this.props.errorAddr
                  ? this.getErrorList()
                  : this.props.children;

                return _react2.default.createElement(
                  _semanticUiReact.Modal,
                  {
                    open: this.props.show,
                    className: "redux-auth-modal " + this.props.containerClass,
                    onClose: this.close.bind(this),
                    closeIcon: "close"
                  },
                  _react2.default.createElement(_semanticUiReact.Modal.Header, {
                    content: this.props.title
                  }),
                  _react2.default.createElement(
                    _semanticUiReact.Modal.Content,
                    null,
                    body
                  ),
                  _react2.default.createElement(
                    _semanticUiReact.Modal.Actions,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Button,
                      {
                        onClick: this.close.bind(this),
                        className: this.props.containerClass + "-close"
                      },
                      this.props.closeBtnLabel
                    )
                  )
                );
              }
            }
          ]);

          return BaseModal;
        })(_react2.default.Component);

        BaseModal.propTypes = {
          show: _propTypes2.default.bool,
          errorAddr: _propTypes2.default.array,
          closeBtnLabel: _propTypes2.default.string
        };
        BaseModal.defaultProps = {
          show: false,
          errorAddr: null,
          closeBtnLabel: "Ok"
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(BaseModal);

        /***/
      },
      /* 159 */
      /***/ function(module, exports) {
        module.exports = require("semantic-ui-react");

        /***/
      },
      /* 160 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        var _immutable = __webpack_require__(14);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var ErrorList = (function(_React$Component) {
          _inherits(ErrorList, _React$Component);

          function ErrorList() {
            _classCallCheck(this, ErrorList);

            return _possibleConstructorReturn(
              this,
              (ErrorList.__proto__ || Object.getPrototypeOf(ErrorList)).apply(
                this,
                arguments
              )
            );
          }

          _createClass(ErrorList, [
            {
              key: "renderErrorList",
              value: function renderErrorList() {
                var errorCount = (
                  this.props.errors || _immutable2.default.fromJS([])
                ).size;

                if (errorCount > 0) {
                  // pluralize message
                  var errorWord = "error";
                  errorWord += errorCount === 1 ? "" : "s";

                  return _react2.default.createElement(
                    "div",
                    { className: "has-error" },
                    _react2.default.createElement(
                      "p",
                      null,
                      "Please correct the following ",
                      errorWord,
                      ":"
                    ),
                    this.props.errors.map(function(err, i) {
                      return _react2.default.createElement(
                        "p",
                        {
                          key: i,
                          className: "control-label modal-error-item",
                          style: { paddingLeft: "20px", position: "relative" }
                        },
                        _react2.default.createElement(_semanticUiReact.Icon, {
                          name: "attention",
                          style: { position: "absolute", left: 0, top: 2 }
                        }),
                        " ",
                        err
                      );
                    })
                  );
                } else {
                  return _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(_semanticUiReact.Icon, {
                      name: "attention"
                    }),
                    " There was an error processing this form. Please check each field and try again."
                  );
                }
              }
            },
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  "div",
                  { className: "auth-error-message" },
                  this.renderErrorList()
                );
              }
            }
          ]);

          return ErrorList;
        })(_react2.default.Component);

        ErrorList.propTypes = {
          errors: _propTypes2.default.object
        };
        ErrorList.defaultProps = {
          errors: _immutable2.default.fromJS([])
        };
        exports.default = ErrorList;

        /***/
      },
      /* 161 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var EmailSignInErrorModal = (function(_React$Component) {
          _inherits(EmailSignInErrorModal, _React$Component);

          function EmailSignInErrorModal() {
            _classCallCheck(this, EmailSignInErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                EmailSignInErrorModal.__proto__ ||
                Object.getPrototypeOf(EmailSignInErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(EmailSignInErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(_Modal2.default, {
                  show: this.props.show,
                  containerClass: "email-sign-in-error-modal",
                  closeAction: _ui.hideEmailSignInErrorModal,
                  title: "Sign In Error",
                  errorAddr: ["emailSignIn", "errors"]
                });
              }
            }
          ]);

          return EmailSignInErrorModal;
        })(_react2.default.Component);

        exports.default = EmailSignInErrorModal;

        /***/
      },
      /* 162 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _reactRedux = __webpack_require__(9);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var OAuthSignInSuccessModal = (function(_React$Component) {
          _inherits(OAuthSignInSuccessModal, _React$Component);

          function OAuthSignInSuccessModal() {
            _classCallCheck(this, OAuthSignInSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                OAuthSignInSuccessModal.__proto__ ||
                Object.getPrototypeOf(OAuthSignInSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(OAuthSignInSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "oauth-sign-in-success-modal",
                    closeAction: _ui.hideOAuthSignInSuccessModal,
                    title: "Welcome"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "You are now signed in via",
                    " ",
                    this.props.auth.getIn(["user", "attributes", "provider"]),
                    "."
                  )
                );
              }
            }
          ]);

          return OAuthSignInSuccessModal;
        })(_react2.default.Component);

        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(OAuthSignInSuccessModal);

        /***/
      },
      /* 163 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _semanticUiReact = __webpack_require__(159);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        var _ui = __webpack_require__(10);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var OAuthSignInErrorModal = (function(_React$Component) {
          _inherits(OAuthSignInErrorModal, _React$Component);

          function OAuthSignInErrorModal() {
            _classCallCheck(this, OAuthSignInErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                OAuthSignInErrorModal.__proto__ ||
                Object.getPrototypeOf(OAuthSignInErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(OAuthSignInErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "oauth-sign-in-error-modal",
                    closeAction: _ui.hideOAuthSignInErrorModal,
                    title: "OAuth Sign In Error"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    _react2.default.createElement(_semanticUiReact.Icon, {
                      name: "attention"
                    }),
                    " There was an error authenticating your account. Please try again."
                  )
                );
              }
            }
          ]);

          return OAuthSignInErrorModal;
        })(_react2.default.Component);

        exports.default = OAuthSignInErrorModal;

        /***/
      },
      /* 164 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _reactRedux = __webpack_require__(9);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var EmailSignUpSuccessModal = (function(_React$Component) {
          _inherits(EmailSignUpSuccessModal, _React$Component);

          function EmailSignUpSuccessModal() {
            _classCallCheck(this, EmailSignUpSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                EmailSignUpSuccessModal.__proto__ ||
                Object.getPrototypeOf(EmailSignUpSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(EmailSignUpSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    containerClass: "email-sign-up-success-modal",
                    show: this.props.show,
                    closeAction: _ui.hideEmailSignUpSuccessModal,
                    title: "Sign Up Success"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "Welcome to TopicDNA"
                  )
                );
              }
            }
          ]);

          return EmailSignUpSuccessModal;
        })(_react2.default.Component);

        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(EmailSignUpSuccessModal);

        /***/
      },
      /* 165 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var EmailSignUpErrorModal = (function(_React$Component) {
          _inherits(EmailSignUpErrorModal, _React$Component);

          function EmailSignUpErrorModal() {
            _classCallCheck(this, EmailSignUpErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                EmailSignUpErrorModal.__proto__ ||
                Object.getPrototypeOf(EmailSignUpErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(EmailSignUpErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(_Modal2.default, {
                  show: this.props.show,
                  containerClass: "email-sign-up-error-modal",
                  title: "Sign Up Error",
                  errorAddr: ["emailSignUp", "errors", "full_messages"],
                  closeAction: _ui.hideEmailSignUpErrorModal
                });
              }
            }
          ]);

          return EmailSignUpErrorModal;
        })(_react2.default.Component);

        exports.default = EmailSignUpErrorModal;

        /***/
      },
      /* 166 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var SignOutSuccessModal = (function(_React$Component) {
          _inherits(SignOutSuccessModal, _React$Component);

          function SignOutSuccessModal() {
            _classCallCheck(this, SignOutSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                SignOutSuccessModal.__proto__ ||
                Object.getPrototypeOf(SignOutSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(SignOutSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "sign-out-success-modal",
                    title: "Goodbye!",
                    closeAction: _ui.hideSignOutSuccessModal
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "You have been successfully signed out."
                  )
                );
              }
            }
          ]);

          return SignOutSuccessModal;
        })(_react2.default.Component);

        exports.default = SignOutSuccessModal;

        /***/
      },
      /* 167 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var SignOutErrorModal = (function(_React$Component) {
          _inherits(SignOutErrorModal, _React$Component);

          function SignOutErrorModal() {
            _classCallCheck(this, SignOutErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                SignOutErrorModal.__proto__ ||
                Object.getPrototypeOf(SignOutErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(SignOutErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "sign-out-error-modal",
                    closeAction: _ui.hideSignOutErrorModal,
                    title: "Sign Out Error"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "The server encountered an error while trying to sign you out. Your account information has been wiped from this browser, but you may want to sign in and then sign back out again to resolve any issues."
                  )
                );
              }
            }
          ]);

          return SignOutErrorModal;
        })(_react2.default.Component);

        exports.default = SignOutErrorModal;

        /***/
      },
      /* 168 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        var _reactRedux = __webpack_require__(9);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var FirstTimeLoginSuccessModal = (function(_React$Component) {
          _inherits(FirstTimeLoginSuccessModal, _React$Component);

          function FirstTimeLoginSuccessModal() {
            _classCallCheck(this, FirstTimeLoginSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                FirstTimeLoginSuccessModal.__proto__ ||
                Object.getPrototypeOf(FirstTimeLoginSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(FirstTimeLoginSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "first-time-login-success-modal",
                    title:
                      "Welcome " +
                      this.props.auth.getIn(["user", "attributes", "email"]) +
                      "!",
                    closeBtnLabel: "Close",
                    closeAction: _ui.hideFirstTimeLoginSuccessModal
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "Your account has been confirmed."
                  )
                );
              }
            }
          ]);

          return FirstTimeLoginSuccessModal;
        })(_react2.default.Component);

        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(FirstTimeLoginSuccessModal);

        /***/
      },
      /* 169 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var FirstTimeLoginErrorModal = (function(_React$Component) {
          _inherits(FirstTimeLoginErrorModal, _React$Component);

          function FirstTimeLoginErrorModal() {
            _classCallCheck(this, FirstTimeLoginErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                FirstTimeLoginErrorModal.__proto__ ||
                Object.getPrototypeOf(FirstTimeLoginErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(FirstTimeLoginErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "first-time-login-error-modal",
                    closeAction: _ui.hideFirstTimeLoginErrorModal,
                    title: "Confirmation Error"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "There was a problem confirming your account. Please try again."
                  )
                );
              }
            }
          ]);

          return FirstTimeLoginErrorModal;
        })(_react2.default.Component);

        exports.default = FirstTimeLoginErrorModal;

        /***/
      },
      /* 170 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var RequestPasswordResetErrorModal = (function(_React$Component) {
          _inherits(RequestPasswordResetErrorModal, _React$Component);

          function RequestPasswordResetErrorModal() {
            _classCallCheck(this, RequestPasswordResetErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                RequestPasswordResetErrorModal.__proto__ ||
                Object.getPrototypeOf(RequestPasswordResetErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(RequestPasswordResetErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(_Modal2.default, {
                  show: this.props.show,
                  containerClass: "request-password-reset-error-modal",
                  closeAction: _ui.hidePasswordResetRequestErrorModal,
                  title: "Error",
                  errorAddr: ["requestPasswordReset", "errors"]
                });
              }
            }
          ]);

          return RequestPasswordResetErrorModal;
        })(_react2.default.Component);

        exports.default = RequestPasswordResetErrorModal;

        /***/
      },
      /* 171 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(9);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var RequestPasswordResetSuccessModal = (function(_React$Component) {
          _inherits(RequestPasswordResetSuccessModal, _React$Component);

          function RequestPasswordResetSuccessModal() {
            _classCallCheck(this, RequestPasswordResetSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                RequestPasswordResetSuccessModal.__proto__ ||
                Object.getPrototypeOf(RequestPasswordResetSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(RequestPasswordResetSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "request-password-reset-success-modal",
                    title: "Password Reset Request Success",
                    closeAction: _ui.hidePasswordResetRequestSuccessModal
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    this.props.auth.getIn([
                      "ui",
                      "requestPasswordResetSuccessMessage"
                    ])
                  )
                );
              }
            }
          ]);

          return RequestPasswordResetSuccessModal;
        })(_react2.default.Component);

        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(RequestPasswordResetSuccessModal);

        /***/
      },
      /* 172 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var UpdatePasswordErrorModal = (function(_React$Component) {
          _inherits(UpdatePasswordErrorModal, _React$Component);

          function UpdatePasswordErrorModal() {
            _classCallCheck(this, UpdatePasswordErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                UpdatePasswordErrorModal.__proto__ ||
                Object.getPrototypeOf(UpdatePasswordErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(UpdatePasswordErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(_Modal2.default, {
                  show: this.props.show,
                  containerClass: "update-password-error-modal",
                  title: "Error",
                  closeAction: _ui.hideUpdatePasswordErrorModal,
                  errorAddr: ["updatePassword", "errors", "full_messages"]
                });
              }
            }
          ]);

          return UpdatePasswordErrorModal;
        })(_react2.default.Component);

        exports.default = UpdatePasswordErrorModal;

        /***/
      },
      /* 173 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var UpdatePasswordSuccessModal = (function(_React$Component) {
          _inherits(UpdatePasswordSuccessModal, _React$Component);

          function UpdatePasswordSuccessModal() {
            _classCallCheck(this, UpdatePasswordSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                UpdatePasswordSuccessModal.__proto__ ||
                Object.getPrototypeOf(UpdatePasswordSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(UpdatePasswordSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "update-password-success-modal",
                    closeAction: _ui.hideUpdatePasswordSuccessModal,
                    title: "Success"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    "Your password has been successfully changed."
                  )
                );
              }
            }
          ]);

          return UpdatePasswordSuccessModal;
        })(_react2.default.Component);

        exports.default = UpdatePasswordSuccessModal;

        /***/
      },
      /* 174 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var DestroyAccountErrorModal = (function(_React$Component) {
          _inherits(DestroyAccountErrorModal, _React$Component);

          function DestroyAccountErrorModal() {
            _classCallCheck(this, DestroyAccountErrorModal);

            return _possibleConstructorReturn(
              this,
              (
                DestroyAccountErrorModal.__proto__ ||
                Object.getPrototypeOf(DestroyAccountErrorModal)
              ).apply(this, arguments)
            );
          }

          _createClass(DestroyAccountErrorModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(_Modal2.default, {
                  containerClass: "destroy-account-error-modal",
                  show: this.props.show,
                  closeAction: _ui.hideDestroyAccountErrorModal,
                  title: "Error",
                  errorAddr: ["destroyAccount", "errors"]
                });
              }
            }
          ]);

          return DestroyAccountErrorModal;
        })(_react2.default.Component);

        exports.default = DestroyAccountErrorModal;

        /***/
      },
      /* 175 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(9);

        var _ui = __webpack_require__(10);

        var _Modal = __webpack_require__(158);

        var _Modal2 = _interopRequireDefault(_Modal);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var DestroyAccountSuccessModal = (function(_React$Component) {
          _inherits(DestroyAccountSuccessModal, _React$Component);

          function DestroyAccountSuccessModal() {
            _classCallCheck(this, DestroyAccountSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                DestroyAccountSuccessModal.__proto__ ||
                Object.getPrototypeOf(DestroyAccountSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(DestroyAccountSuccessModal, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _Modal2.default,
                  {
                    show: this.props.show,
                    containerClass: "destroy-account-success-modal",
                    closeAction: _ui.hideDestroyAccountSuccessModal,
                    title: "Destroy Account Success"
                  },
                  _react2.default.createElement(
                    "p",
                    null,
                    this.props.auth.getIn(["ui", "destroyAccountMessage"])
                  )
                );
              }
            }
          ]);

          return DestroyAccountSuccessModal;
        })(_react2.default.Component);

        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(DestroyAccountSuccessModal);

        /***/
      },
      /* 176 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        var _ButtonLoader = __webpack_require__(177);

        var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

        var _Input = __webpack_require__(178);

        var _Input2 = _interopRequireDefault(_Input);

        var _reactRedux = __webpack_require__(9);

        var _ui = __webpack_require__(10);

        var _updatePasswordModal = __webpack_require__(10);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var PasswordResetSuccessModal = (function(_React$Component) {
          _inherits(PasswordResetSuccessModal, _React$Component);

          function PasswordResetSuccessModal() {
            _classCallCheck(this, PasswordResetSuccessModal);

            return _possibleConstructorReturn(
              this,
              (
                PasswordResetSuccessModal.__proto__ ||
                Object.getPrototypeOf(PasswordResetSuccessModal)
              ).apply(this, arguments)
            );
          }

          _createClass(PasswordResetSuccessModal, [
            {
              key: "getEndpoint",
              value: function getEndpoint() {
                return (
                  this.props.endpoint ||
                  this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
                  this.props.auth.getIn(["configure", "defaultEndpointKey"])
                );
              }
            },
            {
              key: "handleInput",
              value: function handleInput(key, val) {
                this.props.dispatch(
                  (0, _updatePasswordModal.updatePasswordModalFormUpdate)(
                    this.getEndpoint(),
                    key,
                    val
                  )
                );
              }
            },
            {
              key: "handleSubmit",
              value: function handleSubmit() {
                var formData = this.props.auth
                  .getIn(["updatePasswordModal", this.getEndpoint(), "form"])
                  .toJS();
                this.props.dispatch(
                  (0, _updatePasswordModal.updatePasswordModal)(
                    formData,
                    this.getEndpoint()
                  )
                );
              }
            },
            {
              key: "close",
              value: function close() {
                this.props.dispatch(
                  (0, _ui.hidePasswordResetSuccessModal)(this.getEndpoint())
                );
              }
            },
            {
              key: "render",
              value: function render() {
                var loading = this.props.auth.getIn([
                    "updatePasswordModal",
                    this.getEndpoint(),
                    "loading"
                  ]),
                  endpoint = this.getEndpoint();

                return _react2.default.createElement(
                  _semanticUiReact.Modal,
                  {
                    open: this.props.show,
                    className: "password-reset-success-modal",
                    onHide: this.close.bind(this),
                    closeIcon: "close"
                  },
                  _react2.default.createElement(_semanticUiReact.Modal.Header, {
                    content: "Reset Your Password"
                  }),
                  _react2.default.createElement(
                    "form",
                    { className: "ui form" },
                    _react2.default.createElement(
                      _semanticUiReact.Modal.Content,
                      null,
                      _react2.default.createElement(
                        _Input2.default,
                        _extends(
                          {
                            type: "password",
                            label: "Password",
                            placeholder: "Password",
                            disabled: loading,
                            groupClassName:
                              "password-reset-success-modal-password",
                            value: this.props.auth.getIn([
                              "updatePasswordModal",
                              endpoint,
                              "form",
                              "password"
                            ]),
                            errors: this.props.auth.getIn([
                              "updatePasswordModal",
                              endpoint,
                              "errors",
                              "password"
                            ]),
                            onChange: this.handleInput.bind(this, "password")
                          },
                          this.props.inputProps.password
                        )
                      ),
                      _react2.default.createElement(
                        _Input2.default,
                        _extends(
                          {
                            type: "password",
                            label: "Password Confirmation",
                            placeholder: "Password Confirmation",
                            disabled: loading,
                            groupClassName:
                              "password-reset-success-modal-password-confirmation",
                            value: this.props.auth.getIn([
                              "updatePasswordModal",
                              endpoint,
                              "form",
                              "password_confirmation"
                            ]),
                            errors: this.props.auth.getIn([
                              "updatePasswordModal",
                              endpoint,
                              "errors",
                              "password_confirmation"
                            ]),
                            onChange: this.handleInput.bind(
                              this,
                              "password_confirmation"
                            )
                          },
                          this.props.inputProps.passwordConfirmation
                        )
                      )
                    ),
                    _react2.default.createElement(
                      _semanticUiReact.Modal.Actions,
                      null,
                      _react2.default.createElement(
                        _semanticUiReact.Button,
                        _extends(
                          {
                            className: "password-reset-success-modal-close",
                            onClick: this.close.bind(this)
                          },
                          this.props.inputProps.cancel
                        ),
                        "Cancel"
                      ),
                      _react2.default.createElement(
                        _ButtonLoader2.default,
                        _extends(
                          {},
                          this.props,
                          {
                            loading: loading,
                            type: "submit",
                            className: "password-reset-success-modal-submit",
                            icon: _react2.default.createElement(
                              _semanticUiReact.Icon,
                              { name: "lock" }
                            ),
                            onClick: this.handleSubmit.bind(this)
                          },
                          this.props.inputProps.submit
                        )
                      )
                    )
                  )
                );
              }
            }
          ]);

          return PasswordResetSuccessModal;
        })(_react2.default.Component);

        PasswordResetSuccessModal.propTypes = {
          show: _propTypes2.default.bool,
          inputProps: _propTypes2.default.object
        };
        PasswordResetSuccessModal.defaultProps = {
          show: false,
          inputProps: {}
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(PasswordResetSuccessModal);

        /***/
      },
      /* 177 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        var _reactLoader = __webpack_require__(32);

        var _reactLoader2 = _interopRequireDefault(_reactLoader);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var ButtonLoader = (function(_React$Component) {
          _inherits(ButtonLoader, _React$Component);

          function ButtonLoader() {
            _classCallCheck(this, ButtonLoader);

            return _possibleConstructorReturn(
              this,
              (
                ButtonLoader.__proto__ || Object.getPrototypeOf(ButtonLoader)
              ).apply(this, arguments)
            );
          }

          _createClass(ButtonLoader, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(_semanticUiReact.Button, {
                  circular: this.props.circular,
                  color: this.props.color,
                  icon: this.props.icon,
                  loading: this.props.loading,
                  onClick: this.props.onClick,
                  disabled: this.props.disabled || this.props.loading,
                  className: this.props.className,
                  style: this.props.style,
                  type: this.props.type,
                  size: this.props.size,
                  content: this.props.content
                });
              }
            }
          ]);

          return ButtonLoader;
        })(_react2.default.Component);

        ButtonLoader.propTypes = {
          icon: _propTypes2.default.any,
          loading: _propTypes2.default.bool,
          spinConfig: _propTypes2.default.object,
          spinColorDark: _propTypes2.default.string,
          spinColorLight: _propTypes2.default.string,
          children: _propTypes2.default.node,
          onClick: _propTypes2.default.func.isRequired,
          style: _propTypes2.default.object
        };
        ButtonLoader.defaultProps = {
          loading: false,
          spinConfig: {
            lines: 10,
            length: 4,
            width: 2,
            radius: 3
          },
          spinColorDark: "#444",
          spinColorLight: "#fff",
          style: {}
        };
        exports.default = ButtonLoader;

        /***/
      },
      /* 178 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        var _immutable = __webpack_require__(14);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var AuthInput = (function(_React$Component) {
          _inherits(AuthInput, _React$Component);

          function AuthInput() {
            _classCallCheck(this, AuthInput);

            return _possibleConstructorReturn(
              this,
              (AuthInput.__proto__ || Object.getPrototypeOf(AuthInput)).apply(
                this,
                arguments
              )
            );
          }

          _createClass(AuthInput, [
            {
              key: "handleInput",
              value: function handleInput(ev) {
                this.props.onChange(ev.target.value);
              }
            },
            {
              key: "renderErrorList",
              value: function renderErrorList() {
                var _this2 = this;

                if (this.props.errors.size) {
                  return _react2.default.createElement(
                    "div",
                    { className: "auth-error-message has-error" },
                    this.props.errors.map(function(err, i) {
                      return _react2.default.createElement(
                        "p",
                        {
                          className: "control-label inline-error-item",
                          style: {
                            paddingLeft: "20px",
                            position: "relative",
                            marginBottom: "5px"
                          },
                          key: i
                        },
                        _react2.default.createElement(_semanticUiReact.Icon, {
                          name: "attention",
                          style: {
                            position: "absolute",
                            left: 0,
                            top: 2
                          }
                        }),
                        _this2.props.label,
                        " ",
                        err
                      );
                    })
                  );
                }

                return _react2.default.createElement("span", null);
              }
            },
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  _semanticUiReact.Form.Field,
                  { error: this.props.errors.size ? "error" : null },
                  _react2.default.createElement(
                    "label",
                    null,
                    this.props.label
                  ),
                  _react2.default.createElement(
                    "input",
                    _extends({}, this.props, {
                      onChange: this.handleInput.bind(this)
                    })
                  ),
                  this.renderErrorList()
                );
              }
            }
          ]);

          return AuthInput;
        })(_react2.default.Component);

        AuthInput.propTypes = {
          label: _propTypes2.default.string,
          value: _propTypes2.default.string,
          errors: _propTypes2.default.object
        };
        AuthInput.defaultProps = {
          label: "",
          value: null,
          errors: _immutable2.default.fromJS([])
        };
        exports.default = AuthInput;

        /***/
      },
      /* 179 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(9);

        var _immutable = __webpack_require__(180);

        var _emailSignIn = __webpack_require__(10);

        var _EmailSignInFormView = __webpack_require__(424);

        var _EmailSignInFormView2 = _interopRequireDefault(
          _EmailSignInFormView
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function mapStateToProps(_ref, ownProps) {
          var auth = _ref.auth;

          var endpoint =
            ownProps.endpoint ||
            auth.getIn(["configure", "currentEndpointKey"]) ||
            auth.getIn(["configure", "defaultEndpointKey"]);

          return {
            endpoint: endpoint,
            form: "auth-emailSignIn-" + endpoint.toString(),
            isSignedIn: auth.getIn(["user", "isSignedIn"])
          };
        }

        var handleFormErrors = function handleFormErrors(err) {
          if (err && err.errors) {
            var errorStr =
              typeof err.errors === "Array" ? err.errors.join(" ") : err.errors;
            throw new _immutable.SubmissionError({ _error: errorStr });
          } else {
            throw new _immutable.SubmissionError({
              _error: "Something went wrong. Please try again"
            });
          }
        };

        function mergeProps(stateProps, dispatchProps, ownProps) {
          return Object.assign({}, ownProps, stateProps, dispatchProps, {
            onSubmit: function onSubmit(formData) {
              return dispatchProps
                .emailSignIn(formData.toJS(), stateProps.endpoint)
                .then(ownProps.next)
                .catch(handleFormErrors);
            }
          });
        }

        exports.default = (0, _reactRedux.connect)(
          mapStateToProps,
          { emailSignIn: _emailSignIn.emailSignIn },
          mergeProps
        )((0, _immutable.reduxForm)({})(_EmailSignInFormView2.default));

        /***/
      },
      /* 180 */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(181);

        /***/
      },
      /* 181 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.untouch = exports.unregisterField = exports.touch = exports.submit = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.setSubmitSucceeded = exports.setSubmitFailed = exports.reset = exports.registerField = exports.initialize = exports.focus = exports.destroy = exports.clearSubmitErrors = exports.change = exports.blur = exports.autofill = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = exports.actions = exports.actionTypes = exports.values = exports.reducer = exports.reduxForm = exports.hasSubmitFailed = exports.hasSubmitSucceeded = exports.isSubmitting = exports.isValid = exports.isPristine = exports.isInvalid = exports.isDirty = exports.getFormSubmitErrors = exports.getFormSyncWarnings = exports.getFormAsyncErrors = exports.getFormMeta = exports.getFormSyncErrors = exports.getFormInitialValues = exports.getFormValues = exports.getFormNames = exports.formValues = exports.formValueSelector = exports.FieldArray = exports.Fields = exports.Field = exports.formPropTypes = exports.fieldPropTypes = exports.fieldMetaPropTypes = exports.fieldInputPropTypes = exports.propTypes = exports.SubmissionError = exports.FormSection = exports.Form = exports.defaultShouldValidate = exports.defaultShouldAsyncValidate = undefined;

        var _defaultShouldAsyncValidate = __webpack_require__(182);

        Object.defineProperty(exports, "defaultShouldAsyncValidate", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_defaultShouldAsyncValidate).default;
          }
        });

        var _defaultShouldValidate = __webpack_require__(183);

        Object.defineProperty(exports, "defaultShouldValidate", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_defaultShouldValidate).default;
          }
        });

        var _Form = __webpack_require__(184);

        Object.defineProperty(exports, "Form", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_Form).default;
          }
        });

        var _FormSection = __webpack_require__(185);

        Object.defineProperty(exports, "FormSection", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_FormSection).default;
          }
        });

        var _SubmissionError = __webpack_require__(187);

        Object.defineProperty(exports, "SubmissionError", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_SubmissionError).default;
          }
        });

        var _propTypes = __webpack_require__(189);

        Object.defineProperty(exports, "propTypes", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_propTypes).default;
          }
        });
        Object.defineProperty(exports, "fieldInputPropTypes", {
          enumerable: true,
          get: function get() {
            return _propTypes.fieldInputPropTypes;
          }
        });
        Object.defineProperty(exports, "fieldMetaPropTypes", {
          enumerable: true,
          get: function get() {
            return _propTypes.fieldMetaPropTypes;
          }
        });
        Object.defineProperty(exports, "fieldPropTypes", {
          enumerable: true,
          get: function get() {
            return _propTypes.fieldPropTypes;
          }
        });
        Object.defineProperty(exports, "formPropTypes", {
          enumerable: true,
          get: function get() {
            return _propTypes.formPropTypes;
          }
        });

        var _Field = __webpack_require__(190);

        Object.defineProperty(exports, "Field", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_Field).default;
          }
        });

        var _Fields = __webpack_require__(313);

        Object.defineProperty(exports, "Fields", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_Fields).default;
          }
        });

        var _FieldArray = __webpack_require__(316);

        Object.defineProperty(exports, "FieldArray", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_FieldArray).default;
          }
        });

        var _formValueSelector = __webpack_require__(345);

        Object.defineProperty(exports, "formValueSelector", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_formValueSelector).default;
          }
        });

        var _formValues = __webpack_require__(347);

        Object.defineProperty(exports, "formValues", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_formValues).default;
          }
        });

        var _getFormNames = __webpack_require__(349);

        Object.defineProperty(exports, "getFormNames", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormNames).default;
          }
        });

        var _getFormValues = __webpack_require__(351);

        Object.defineProperty(exports, "getFormValues", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormValues).default;
          }
        });

        var _getFormInitialValues = __webpack_require__(353);

        Object.defineProperty(exports, "getFormInitialValues", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormInitialValues).default;
          }
        });

        var _getFormSyncErrors = __webpack_require__(355);

        Object.defineProperty(exports, "getFormSyncErrors", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormSyncErrors).default;
          }
        });

        var _getFormMeta = __webpack_require__(357);

        Object.defineProperty(exports, "getFormMeta", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormMeta).default;
          }
        });

        var _getFormAsyncErrors = __webpack_require__(359);

        Object.defineProperty(exports, "getFormAsyncErrors", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormAsyncErrors).default;
          }
        });

        var _getFormSyncWarnings = __webpack_require__(361);

        Object.defineProperty(exports, "getFormSyncWarnings", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormSyncWarnings).default;
          }
        });

        var _getFormSubmitErrors = __webpack_require__(363);

        Object.defineProperty(exports, "getFormSubmitErrors", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_getFormSubmitErrors).default;
          }
        });

        var _isDirty = __webpack_require__(365);

        Object.defineProperty(exports, "isDirty", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_isDirty).default;
          }
        });

        var _isInvalid = __webpack_require__(368);

        Object.defineProperty(exports, "isInvalid", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_isInvalid).default;
          }
        });

        var _isPristine = __webpack_require__(372);

        Object.defineProperty(exports, "isPristine", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_isPristine).default;
          }
        });

        var _isValid = __webpack_require__(373);

        Object.defineProperty(exports, "isValid", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_isValid).default;
          }
        });

        var _isSubmitting = __webpack_require__(374);

        Object.defineProperty(exports, "isSubmitting", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_isSubmitting).default;
          }
        });

        var _hasSubmitSucceeded = __webpack_require__(376);

        Object.defineProperty(exports, "hasSubmitSucceeded", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_hasSubmitSucceeded).default;
          }
        });

        var _hasSubmitFailed = __webpack_require__(378);

        Object.defineProperty(exports, "hasSubmitFailed", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_hasSubmitFailed).default;
          }
        });

        var _reduxForm = __webpack_require__(380);

        Object.defineProperty(exports, "reduxForm", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_reduxForm).default;
          }
        });

        var _reducer = __webpack_require__(419);

        Object.defineProperty(exports, "reducer", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_reducer).default;
          }
        });

        var _values = __webpack_require__(422);

        Object.defineProperty(exports, "values", {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_values).default;
          }
        });

        var _actions2 = __webpack_require__(411);

        var _actions = _interopRequireWildcard(_actions2);

        var _actionTypes2 = __webpack_require__(412);

        var _actionTypes = _interopRequireWildcard(_actionTypes2);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var actionTypes = (exports.actionTypes = _actionTypes);
        var actions = (exports.actions = _actions);
        var arrayInsert = _actions.arrayInsert,
          arrayMove = _actions.arrayMove,
          arrayPop = _actions.arrayPop,
          arrayPush = _actions.arrayPush,
          arrayRemove = _actions.arrayRemove,
          arrayRemoveAll = _actions.arrayRemoveAll,
          arrayShift = _actions.arrayShift,
          arraySplice = _actions.arraySplice,
          arraySwap = _actions.arraySwap,
          arrayUnshift = _actions.arrayUnshift,
          autofill = _actions.autofill,
          blur = _actions.blur,
          change = _actions.change,
          clearSubmitErrors = _actions.clearSubmitErrors,
          destroy = _actions.destroy,
          focus = _actions.focus,
          initialize = _actions.initialize,
          registerField = _actions.registerField,
          reset = _actions.reset,
          setSubmitFailed = _actions.setSubmitFailed,
          setSubmitSucceeded = _actions.setSubmitSucceeded,
          startAsyncValidation = _actions.startAsyncValidation,
          startSubmit = _actions.startSubmit,
          stopAsyncValidation = _actions.stopAsyncValidation,
          stopSubmit = _actions.stopSubmit,
          submit = _actions.submit,
          touch = _actions.touch,
          unregisterField = _actions.unregisterField,
          untouch = _actions.untouch;
        exports.arrayInsert = arrayInsert;
        exports.arrayMove = arrayMove;
        exports.arrayPop = arrayPop;
        exports.arrayPush = arrayPush;
        exports.arrayRemove = arrayRemove;
        exports.arrayRemoveAll = arrayRemoveAll;
        exports.arrayShift = arrayShift;
        exports.arraySplice = arraySplice;
        exports.arraySwap = arraySwap;
        exports.arrayUnshift = arrayUnshift;
        exports.autofill = autofill;
        exports.blur = blur;
        exports.change = change;
        exports.clearSubmitErrors = clearSubmitErrors;
        exports.destroy = destroy;
        exports.focus = focus;
        exports.initialize = initialize;
        exports.registerField = registerField;
        exports.reset = reset;
        exports.setSubmitFailed = setSubmitFailed;
        exports.setSubmitSucceeded = setSubmitSucceeded;
        exports.startAsyncValidation = startAsyncValidation;
        exports.startSubmit = startSubmit;
        exports.stopAsyncValidation = stopAsyncValidation;
        exports.stopSubmit = stopSubmit;
        exports.submit = submit;
        exports.touch = touch;
        exports.unregisterField = unregisterField;
        exports.untouch = untouch;

        /***/
      },
      /* 182 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var defaultShouldAsyncValidate = function defaultShouldAsyncValidate(
          _ref
        ) {
          var initialized = _ref.initialized,
            trigger = _ref.trigger,
            pristine = _ref.pristine,
            syncValidationPasses = _ref.syncValidationPasses;

          if (!syncValidationPasses) {
            return false;
          }
          switch (trigger) {
            case "blur":
              // blurring
              return true;
            case "submit":
              // submitting, so only async validate if form is dirty or was never initialized
              // conversely, DON'T async validate if the form is pristine just as it was initialized
              return !pristine || !initialized;
            default:
              return false;
          }
        };

        exports.default = defaultShouldAsyncValidate;

        /***/
      },
      /* 183 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var defaultShouldValidate = function defaultShouldValidate(_ref) {
          var values = _ref.values,
            nextProps = _ref.nextProps,
            initialRender = _ref.initialRender,
            lastFieldValidatorKeys = _ref.lastFieldValidatorKeys,
            fieldValidatorKeys = _ref.fieldValidatorKeys,
            structure = _ref.structure;

          if (initialRender) {
            return true;
          }
          return (
            !structure.deepEqual(values, nextProps.values) ||
            !structure.deepEqual(lastFieldValidatorKeys, fieldValidatorKeys)
          );
        };

        exports.default = defaultShouldValidate;

        /***/
      },
      /* 184 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var Form = (function(_Component) {
          _inherits(Form, _Component);

          function Form(props, context) {
            _classCallCheck(this, Form);

            var _this = _possibleConstructorReturn(
              this,
              (Form.__proto__ || Object.getPrototypeOf(Form)).call(
                this,
                props,
                context
              )
            );

            if (!context._reduxForm) {
              throw new Error(
                "Form must be inside a component decorated with reduxForm()"
              );
            }
            return _this;
          }

          _createClass(Form, [
            {
              key: "componentWillMount",
              value: function componentWillMount() {
                this.context._reduxForm.registerInnerOnSubmit(
                  this.props.onSubmit
                );
              }
            },
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement("form", this.props);
              }
            }
          ]);

          return Form;
        })(_react.Component);

        Form.propTypes = {
          onSubmit: _propTypes2.default.func.isRequired
        };
        Form.contextTypes = {
          _reduxForm: _propTypes2.default.object
        };

        exports.default = Form;

        /***/
      },
      /* 185 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _prefixName = __webpack_require__(186);

        var _prefixName2 = _interopRequireDefault(_prefixName);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var FormSection = (function(_Component) {
          _inherits(FormSection, _Component);

          function FormSection(props, context) {
            _classCallCheck(this, FormSection);

            var _this = _possibleConstructorReturn(
              this,
              (
                FormSection.__proto__ || Object.getPrototypeOf(FormSection)
              ).call(this, props, context)
            );

            if (!context._reduxForm) {
              throw new Error(
                "FormSection must be inside a component decorated with reduxForm()"
              );
            }
            return _this;
          }

          _createClass(FormSection, [
            {
              key: "getChildContext",
              value: function getChildContext() {
                var context = this.context,
                  name = this.props.name;

                return {
                  _reduxForm: _extends({}, context._reduxForm, {
                    sectionPrefix: (0, _prefixName2.default)(context, name)
                  })
                };
              }
            },
            {
              key: "render",
              value: function render() {
                var _props = this.props,
                  children = _props.children,
                  name = _props.name,
                  component = _props.component,
                  rest = _objectWithoutProperties(_props, [
                    "children",
                    "name",
                    "component"
                  ]);

                if (_react2.default.isValidElement(children)) {
                  return children;
                }

                return (0, _react.createElement)(
                  component,
                  _extends({}, rest, {
                    children: children
                  })
                );
              }
            }
          ]);

          return FormSection;
        })(_react.Component);

        FormSection.propTypes = {
          name: _propTypes2.default.string.isRequired,
          component: _propTypes2.default.oneOfType([
            _propTypes2.default.func,
            _propTypes2.default.string
          ])
        };

        FormSection.defaultProps = {
          component: "div"
        };

        FormSection.childContextTypes = {
          _reduxForm: _propTypes2.default.object.isRequired
        };

        FormSection.contextTypes = {
          _reduxForm: _propTypes2.default.object
        };

        exports.default = FormSection;

        /***/
      },
      /* 186 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.default = formatName;
        function formatName(context, name) {
          var sectionPrefix = context._reduxForm.sectionPrefix;

          return !sectionPrefix ? name : sectionPrefix + "." + name;
        }

        /***/
      },
      /* 187 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _es6Error = __webpack_require__(188);

        var _es6Error2 = _interopRequireDefault(_es6Error);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var SubmissionError = (function(_ExtendableError) {
          _inherits(SubmissionError, _ExtendableError);

          function SubmissionError(errors) {
            _classCallCheck(this, SubmissionError);

            var _this = _possibleConstructorReturn(
              this,
              (
                SubmissionError.__proto__ ||
                Object.getPrototypeOf(SubmissionError)
              ).call(this, "Submit Validation Failed")
            );

            _this.errors = errors;
            return _this;
          }

          return SubmissionError;
        })(_es6Error2.default);

        exports.default = SubmissionError;

        /***/
      },
      /* 188 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        function _extendableBuiltin(cls) {
          function ExtendableBuiltin() {
            cls.apply(this, arguments);
          }

          ExtendableBuiltin.prototype = Object.create(cls.prototype, {
            constructor: {
              value: cls,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });

          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(ExtendableBuiltin, cls);
          } else {
            ExtendableBuiltin.__proto__ = cls;
          }

          return ExtendableBuiltin;
        }

        var ExtendableError = (function(_extendableBuiltin2) {
          _inherits(ExtendableError, _extendableBuiltin2);

          function ExtendableError() {
            var message =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : "";

            _classCallCheck(this, ExtendableError);

            // extending Error is weird and does not propagate `message`
            var _this = _possibleConstructorReturn(
              this,
              (
                ExtendableError.__proto__ ||
                Object.getPrototypeOf(ExtendableError)
              ).call(this, message)
            );

            Object.defineProperty(_this, "message", {
              configurable: true,
              enumerable: false,
              value: message,
              writable: true
            });

            Object.defineProperty(_this, "name", {
              configurable: true,
              enumerable: false,
              value: _this.constructor.name,
              writable: true
            });

            if (Error.hasOwnProperty("captureStackTrace")) {
              Error.captureStackTrace(_this, _this.constructor);
              return _possibleConstructorReturn(_this);
            }

            Object.defineProperty(_this, "stack", {
              configurable: true,
              enumerable: false,
              value: new Error(message).stack,
              writable: true
            });
            return _this;
          }

          return ExtendableError;
        })(_extendableBuiltin(Error));

        exports.default = ExtendableError;
        module.exports = exports["default"];

        /***/
      },
      /* 189 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.fieldPropTypes = exports.fieldMetaPropTypes = exports.fieldInputPropTypes = exports.formPropTypes = undefined;

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var any = _propTypes2.default.any,
          bool = _propTypes2.default.bool,
          func = _propTypes2.default.func,
          shape = _propTypes2.default.shape,
          string = _propTypes2.default.string,
          oneOfType = _propTypes2.default.oneOfType,
          object = _propTypes2.default.object;
        var formPropTypes = (exports.formPropTypes = {
          // State:
          anyTouched: bool.isRequired, // true if any of the fields have been marked as touched
          asyncValidating: oneOfType([bool, string]).isRequired, // true if async validation is running, a string if a field triggered async validation
          dirty: bool.isRequired, // true if any values are different from initialValues
          error: any, // form-wide error from '_error' key in validation result
          form: string.isRequired, // the name of the form
          invalid: bool.isRequired, // true if there are any validation errors
          initialized: bool.isRequired, // true if the form has been initialized
          initialValues: object, // the initialValues object passed to reduxForm
          pristine: bool.isRequired, // true if the values are the same as initialValues
          pure: bool.isRequired, // if true, implements shouldComponentUpdate
          submitting: bool.isRequired, // true if the form is in the process of being submitted
          submitFailed: bool.isRequired, // true if the form was submitted and failed for any reason
          submitSucceeded: bool.isRequired, // true if the form was successfully submitted
          valid: bool.isRequired, // true if there are no validation errors
          warning: any, // form-wide warning from '_warning' key in validation result
          // Actions:
          array: shape({
            insert: func.isRequired, // function to insert a value into an array field
            move: func.isRequired, // function to move a value within an array field
            pop: func.isRequired, // function to pop a value off of an array field
            push: func.isRequired, // function to push a value onto an array field
            remove: func.isRequired, // function to remove a value from an array field
            removeAll: func.isRequired, // function to remove all the values from an array field
            shift: func.isRequired, // function to shift a value out of an array field
            splice: func.isRequired, // function to splice a value into an array field
            swap: func.isRequired, // function to swap values in an array field
            unshift: func.isRequired // function to unshift a value into an array field
          }),
          asyncValidate: func.isRequired, // function to trigger async validation
          autofill: func.isRequired, // action to set a value of a field and mark it as autofilled
          blur: func.isRequired, // action to mark a field as blurred
          change: func.isRequired, // action to change the value of a field
          clearAsyncError: func.isRequired, // action to clear the async error of a field
          destroy: func.isRequired, // action to destroy the form's data in Redux
          dispatch: func.isRequired, // the Redux dispatch action
          handleSubmit: func.isRequired, // function to submit the form
          initialize: func.isRequired, // action to initialize form data
          reset: func.isRequired, // action to reset the form data to previously initialized values
          touch: func.isRequired, // action to mark fields as touched
          submit: func.isRequired, // action to trigger a submission of the specified form
          untouch: func.isRequired, // action to mark fields as untouched

          // triggerSubmit
          triggerSubmit: bool, // if true, submits the form on componentWillReceiveProps
          clearSubmit: func.isRequired // called before a triggered submit, by default clears triggerSubmit
        });

        var fieldInputPropTypes = (exports.fieldInputPropTypes = {
          checked: bool,
          name: string.isRequired,
          onBlur: func.isRequired,
          onChange: func.isRequired,
          onDragStart: func.isRequired,
          onDrop: func.isRequired,
          onFocus: func.isRequired,
          value: any
        });

        var fieldMetaPropTypes = (exports.fieldMetaPropTypes = {
          active: bool.isRequired,
          asyncValidating: bool.isRequired,
          autofilled: bool.isRequired,
          dirty: bool.isRequired,
          dispatch: func.isRequired,
          error: string,
          form: string.isRequired,
          invalid: bool.isRequired,
          pristine: bool.isRequired,
          submitting: bool.isRequired,
          submitFailed: bool.isRequired,
          touched: bool.isRequired,
          valid: bool.isRequired,
          visited: bool.isRequired,
          warning: string
        });

        var fieldPropTypes = (exports.fieldPropTypes = {
          input: shape(fieldInputPropTypes).isRequired,
          meta: shape(fieldMetaPropTypes).isRequired,
          custom: object.isRequired
        });

        exports.default = formPropTypes;

        /***/
      },
      /* 190 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createField = __webpack_require__(191);

        var _createField2 = _interopRequireDefault(_createField);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createField2.default)(_immutable2.default);

        /***/
      },
      /* 191 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _invariant = __webpack_require__(192);

        var _invariant2 = _interopRequireDefault(_invariant);

        var _ConnectedField = __webpack_require__(193);

        var _ConnectedField2 = _interopRequireDefault(_ConnectedField);

        var _shallowCompare = __webpack_require__(307);

        var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

        var _prefixName = __webpack_require__(186);

        var _prefixName2 = _interopRequireDefault(_prefixName);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var createField = function createField(_ref) {
          var deepEqual = _ref.deepEqual,
            getIn = _ref.getIn,
            setIn = _ref.setIn,
            toJS = _ref.toJS;

          var ConnectedField = (0, _ConnectedField2.default)({
            deepEqual: deepEqual,
            getIn: getIn,
            toJS: toJS
          });

          var Field = (function(_Component) {
            _inherits(Field, _Component);

            function Field(props, context) {
              _classCallCheck(this, Field);

              var _this = _possibleConstructorReturn(
                this,
                (Field.__proto__ || Object.getPrototypeOf(Field)).call(
                  this,
                  props,
                  context
                )
              );

              if (!context._reduxForm) {
                throw new Error(
                  "Field must be inside a component decorated with reduxForm()"
                );
              }

              _this.normalize = _this.normalize.bind(_this);
              return _this;
            }

            _createClass(Field, [
              {
                key: "shouldComponentUpdate",
                value: function shouldComponentUpdate(nextProps, nextState) {
                  return (0, _shallowCompare2.default)(
                    this,
                    nextProps,
                    nextState
                  );
                }
              },
              {
                key: "componentWillMount",
                value: function componentWillMount() {
                  var _this2 = this;

                  this.context._reduxForm.register(
                    this.name,
                    "Field",
                    function() {
                      return _this2.props.validate;
                    },
                    function() {
                      return _this2.props.warn;
                    }
                  );
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps) {
                  if (this.props.name !== nextProps.name) {
                    // unregister old name
                    this.context._reduxForm.unregister(
                      this.name
                      // register new name
                    );
                    this.context._reduxForm.register(
                      (0, _prefixName2.default)(this.context, nextProps.name),
                      "Field"
                    );
                  }
                }
              },
              {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                  this.context._reduxForm.unregister(this.name);
                }
              },
              {
                key: "getRenderedComponent",
                value: function getRenderedComponent() {
                  (0, _invariant2.default)(
                    this.props.withRef,
                    "If you want to access getRenderedComponent(), " +
                      "you must specify a withRef prop to Field"
                  );
                  return this.refs.connected
                    .getWrappedInstance()
                    .getRenderedComponent();
                }
              },
              {
                key: "normalize",
                value: function normalize(name, value) {
                  var normalize = this.props.normalize;

                  if (!normalize) {
                    return value;
                  }
                  var previousValues = this.context._reduxForm.getValues();
                  var previousValue = this.value;
                  var nextValues = setIn(previousValues, name, value);
                  return normalize(
                    value,
                    previousValue,
                    nextValues,
                    previousValues
                  );
                }
              },
              {
                key: "render",
                value: function render() {
                  return (0, _react.createElement)(
                    ConnectedField,
                    _extends({}, this.props, {
                      name: this.name,
                      normalize: this.normalize,
                      _reduxForm: this.context._reduxForm,
                      ref: "connected"
                    })
                  );
                }
              },
              {
                key: "name",
                get: function get() {
                  return (0, _prefixName2.default)(
                    this.context,
                    this.props.name
                  );
                }
              },
              {
                key: "dirty",
                get: function get() {
                  return !this.pristine;
                }
              },
              {
                key: "pristine",
                get: function get() {
                  return this.refs.connected.getWrappedInstance().isPristine();
                }
              },
              {
                key: "value",
                get: function get() {
                  return (
                    this.refs.connected &&
                    this.refs.connected.getWrappedInstance().getValue()
                  );
                }
              }
            ]);

            return Field;
          })(_react.Component);

          Field.propTypes = {
            name: _propTypes2.default.string.isRequired,
            component: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.string
            ]).isRequired,
            format: _propTypes2.default.func,
            normalize: _propTypes2.default.func,
            onBlur: _propTypes2.default.func,
            onChange: _propTypes2.default.func,
            onFocus: _propTypes2.default.func,
            onDragStart: _propTypes2.default.func,
            onDrop: _propTypes2.default.func,
            parse: _propTypes2.default.func,
            props: _propTypes2.default.object,
            validate: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.arrayOf(_propTypes2.default.func)
            ]),
            warn: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.arrayOf(_propTypes2.default.func)
            ]),
            withRef: _propTypes2.default.bool
          };
          Field.contextTypes = {
            _reduxForm: _propTypes2.default.object
          };

          return Field;
        };

        exports.default = createField;

        /***/
      },
      /* 192 */
      /***/ function(module, exports, __webpack_require__) {
        /**
         * Copyright 2013-2015, Facebook, Inc.
         * All rights reserved.
         *
         * This source code is licensed under the BSD-style license found in the
         * LICENSE file in the root directory of this source tree. An additional grant
         * of patent rights can be found in the PATENTS file in the same directory.
         */

        "use strict";

        /**
         * Use invariant() to assert state which your program assumes to be true.
         *
         * Provide sprintf-style format (only %s is supported) and arguments
         * to provide information about what broke and what you were
         * expecting.
         *
         * The invariant message will be stripped in production, but the invariant
         * will remain to ensure logic does not differ in production.
         */

        var invariant = function(condition, format, a, b, c, d, e, f) {
          if (false) {
            if (format === undefined) {
              throw new Error("invariant requires an error message argument");
            }
          }

          if (!condition) {
            var error;
            if (format === undefined) {
              error = new Error(
                "Minified exception occurred; use the non-minified dev environment " +
                  "for the full error message and additional helpful warnings."
              );
            } else {
              var args = [a, b, c, d, e, f];
              var argIndex = 0;
              error = new Error(
                format.replace(/%s/g, function() {
                  return args[argIndex++];
                })
              );
              error.name = "Invariant Violation";
            }

            error.framesToPop = 1; // we don't care about invariant's own frame
            throw error;
          }
        };

        module.exports = invariant;

        /***/
      },
      /* 193 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _typeof =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

        var _react = __webpack_require__(2);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _reactRedux = __webpack_require__(9);

        var _createFieldProps2 = __webpack_require__(194);

        var _createFieldProps3 = _interopRequireDefault(_createFieldProps2);

        var _onChangeValue = __webpack_require__(195);

        var _onChangeValue2 = _interopRequireDefault(_onChangeValue);

        var _eventConsts = __webpack_require__(199);

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var propsToNotUpdateFor = ["_reduxForm"];

        var isObject = function isObject(entity) {
          return (
            entity &&
            (typeof entity === "undefined" ? "undefined" : _typeof(entity)) ===
              "object"
          );
        };

        var isFunction = function isFunction(entity) {
          return entity && typeof entity === "function";
        };

        var eventPreventDefault = function eventPreventDefault(event) {
          if (isObject(event) && isFunction(event.preventDefault)) {
            event.preventDefault();
          }
        };

        var eventDataTransferGetData = function eventDataTransferGetData(
          event,
          key
        ) {
          if (
            isObject(event) &&
            isObject(event.dataTransfer) &&
            isFunction(event.dataTransfer.getData)
          ) {
            return event.dataTransfer.getData(key);
          }
        };

        var eventDataTransferSetData = function eventDataTransferSetData(
          event,
          key,
          value
        ) {
          if (
            isObject(event) &&
            isObject(event.dataTransfer) &&
            isFunction(event.dataTransfer.setData)
          ) {
            event.dataTransfer.setData(key, value);
          }
        };

        var createConnectedField = function createConnectedField(_ref) {
          var deepEqual = _ref.deepEqual,
            getIn = _ref.getIn,
            toJS = _ref.toJS;

          var getSyncError = function getSyncError(syncErrors, name) {
            var error = _plain2.default.getIn(
              syncErrors,
              name
              // Because the error for this field might not be at a level in the error structure where
              // it can be set directly, it might need to be unwrapped from the _error property
            );
            return error && error._error ? error._error : error;
          };

          var getSyncWarning = function getSyncWarning(syncWarnings, name) {
            var warning = getIn(
              syncWarnings,
              name
              // Because the warning for this field might not be at a level in the warning structure where
              // it can be set directly, it might need to be unwrapped from the _warning property
            );
            return warning && warning._warning ? warning._warning : warning;
          };

          var ConnectedField = (function(_Component) {
            _inherits(ConnectedField, _Component);

            function ConnectedField(props) {
              _classCallCheck(this, ConnectedField);

              var _this = _possibleConstructorReturn(
                this,
                (
                  ConnectedField.__proto__ ||
                  Object.getPrototypeOf(ConnectedField)
                ).call(this, props)
              );

              _this.handleChange = _this.handleChange.bind(_this);
              _this.handleFocus = _this.handleFocus.bind(_this);
              _this.handleBlur = _this.handleBlur.bind(_this);
              _this.handleDragStart = _this.handleDragStart.bind(_this);
              _this.handleDrop = _this.handleDrop.bind(_this);
              return _this;
            }

            _createClass(ConnectedField, [
              {
                key: "shouldComponentUpdate",
                value: function shouldComponentUpdate(nextProps) {
                  var _this2 = this;

                  var nextPropsKeys = Object.keys(nextProps);
                  var thisPropsKeys = Object.keys(this.props);
                  return (
                    nextPropsKeys.length !== thisPropsKeys.length ||
                    nextPropsKeys.some(function(prop) {
                      return (
                        !~propsToNotUpdateFor.indexOf(prop) &&
                        !deepEqual(_this2.props[prop], nextProps[prop])
                      );
                    })
                  );
                }
              },
              {
                key: "isPristine",
                value: function isPristine() {
                  return this.props.pristine;
                }
              },
              {
                key: "getValue",
                value: function getValue() {
                  return this.props.value;
                }
              },
              {
                key: "getRenderedComponent",
                value: function getRenderedComponent() {
                  return this.refs.renderedComponent;
                }
              },
              {
                key: "handleChange",
                value: function handleChange(event) {
                  var _props = this.props,
                    name = _props.name,
                    dispatch = _props.dispatch,
                    parse = _props.parse,
                    normalize = _props.normalize,
                    onChange = _props.onChange,
                    _reduxForm = _props._reduxForm,
                    previousValue = _props.value;

                  var newValue = (0, _onChangeValue2.default)(event, {
                    name: name,
                    parse: parse,
                    normalize: normalize
                  });

                  var defaultPrevented = false;
                  if (onChange) {
                    onChange(
                      _extends({}, event, {
                        preventDefault: function preventDefault() {
                          defaultPrevented = true;
                          return eventPreventDefault(event);
                        }
                      }),
                      newValue,
                      previousValue
                    );
                  }
                  if (!defaultPrevented) {
                    // dispatch change action
                    dispatch(_reduxForm.change(name, newValue));
                  }
                }
              },
              {
                key: "handleFocus",
                value: function handleFocus(event) {
                  var _props2 = this.props,
                    name = _props2.name,
                    dispatch = _props2.dispatch,
                    onFocus = _props2.onFocus,
                    _reduxForm = _props2._reduxForm;

                  var defaultPrevented = false;
                  if (onFocus) {
                    onFocus(
                      _extends({}, event, {
                        preventDefault: function preventDefault() {
                          defaultPrevented = true;
                          return eventPreventDefault(event);
                        }
                      })
                    );
                  }

                  if (!defaultPrevented) {
                    dispatch(_reduxForm.focus(name));
                  }
                }
              },
              {
                key: "handleBlur",
                value: function handleBlur(event) {
                  var _props3 = this.props,
                    name = _props3.name,
                    dispatch = _props3.dispatch,
                    parse = _props3.parse,
                    normalize = _props3.normalize,
                    onBlur = _props3.onBlur,
                    _reduxForm = _props3._reduxForm,
                    _value = _props3._value,
                    previousValue = _props3.value;

                  var newValue = (0, _onChangeValue2.default)(
                    event,
                    { name: name, parse: parse, normalize: normalize }

                    // for checkbox and radio, if the value property of checkbox or radio equals
                    // the value passed by blur event, then fire blur action with previousValue.
                  );
                  if (newValue === _value && _value !== undefined) {
                    newValue = previousValue;
                  }

                  var defaultPrevented = false;
                  if (onBlur) {
                    onBlur(
                      _extends({}, event, {
                        preventDefault: function preventDefault() {
                          defaultPrevented = true;
                          return eventPreventDefault(event);
                        }
                      }),
                      newValue,
                      previousValue
                    );
                  }

                  if (!defaultPrevented) {
                    // dispatch blur action
                    dispatch(
                      _reduxForm.blur(name, newValue)

                      // call post-blur callback
                    );
                    if (_reduxForm.asyncValidate) {
                      _reduxForm.asyncValidate(name, newValue);
                    }
                  }
                }
              },
              {
                key: "handleDragStart",
                value: function handleDragStart(event) {
                  var _props4 = this.props,
                    onDragStart = _props4.onDragStart,
                    value = _props4.value;

                  eventDataTransferSetData(
                    event,
                    _eventConsts.dataKey,
                    value == null ? "" : value
                  );

                  if (onDragStart) {
                    onDragStart(event);
                  }
                }
              },
              {
                key: "handleDrop",
                value: function handleDrop(event) {
                  var _props5 = this.props,
                    name = _props5.name,
                    dispatch = _props5.dispatch,
                    onDrop = _props5.onDrop,
                    _reduxForm = _props5._reduxForm,
                    previousValue = _props5.value;

                  var newValue = eventDataTransferGetData(
                    event,
                    _eventConsts.dataKey
                  );

                  var defaultPrevented = false;
                  if (onDrop) {
                    onDrop(
                      _extends({}, event, {
                        preventDefault: function preventDefault() {
                          defaultPrevented = true;
                          return eventPreventDefault(event);
                        }
                      }),
                      newValue,
                      previousValue
                    );
                  }

                  if (!defaultPrevented) {
                    // dispatch change action
                    dispatch(_reduxForm.change(name, newValue));
                    eventPreventDefault(event);
                  }
                }
              },
              {
                key: "render",
                value: function render() {
                  var _props6 = this.props,
                    component = _props6.component,
                    withRef = _props6.withRef,
                    name = _props6.name,
                    _reduxForm = _props6._reduxForm,
                    normalize = _props6.normalize,
                    onBlur = _props6.onBlur,
                    onChange = _props6.onChange,
                    onFocus = _props6.onFocus,
                    onDragStart = _props6.onDragStart,
                    onDrop = _props6.onDrop,
                    rest = _objectWithoutProperties(_props6, [
                      "component",
                      "withRef",
                      "name",
                      "_reduxForm",
                      "normalize",
                      "onBlur",
                      "onChange",
                      "onFocus",
                      "onDragStart",
                      "onDrop"
                    ]);

                  var _createFieldProps = (0, _createFieldProps3.default)(
                      { getIn: getIn, toJS: toJS },
                      name,
                      _extends({}, rest, {
                        form: _reduxForm.form,
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        onDrop: this.handleDrop,
                        onDragStart: this.handleDragStart,
                        onFocus: this.handleFocus
                      })
                    ),
                    custom = _createFieldProps.custom,
                    props = _objectWithoutProperties(_createFieldProps, [
                      "custom"
                    ]);

                  if (withRef) {
                    custom.ref = "renderedComponent";
                  }
                  if (typeof component === "string") {
                    var input = props.input,
                      meta = props.meta; // eslint-disable-line no-unused-vars
                    // flatten input into other props

                    return (0, _react.createElement)(
                      component,
                      _extends({}, input, custom)
                    );
                  } else {
                    return (0, _react.createElement)(
                      component,
                      _extends({}, props, custom)
                    );
                  }
                }
              }
            ]);

            return ConnectedField;
          })(_react.Component);

          ConnectedField.propTypes = {
            component: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.string
            ]).isRequired,
            props: _propTypes2.default.object
          };

          var connector = (0, _reactRedux.connect)(
            function(state, ownProps) {
              var name = ownProps.name,
                _ownProps$_reduxForm = ownProps._reduxForm,
                initialValues = _ownProps$_reduxForm.initialValues,
                getFormState = _ownProps$_reduxForm.getFormState;

              var formState = getFormState(state);
              var initialState = getIn(formState, "initial." + name);
              var initial =
                initialState !== undefined
                  ? initialState
                  : initialValues && getIn(initialValues, name);
              var value = getIn(formState, "values." + name);
              var submitting = getIn(formState, "submitting");
              var syncError = getSyncError(
                getIn(formState, "syncErrors"),
                name
              );
              var syncWarning = getSyncWarning(
                getIn(formState, "syncWarnings"),
                name
              );
              var pristine = deepEqual(value, initial);
              return {
                asyncError: getIn(formState, "asyncErrors." + name),
                asyncValidating: getIn(formState, "asyncValidating") === name,
                dirty: !pristine,
                pristine: pristine,
                state: getIn(formState, "fields." + name),
                submitError: getIn(formState, "submitErrors." + name),
                submitFailed: getIn(formState, "submitFailed"),
                submitting: submitting,
                syncError: syncError,
                syncWarning: syncWarning,
                initial: initial,
                value: value,
                _value: ownProps.value // save value passed in (for checkboxes)
              };
            },
            undefined,
            undefined,
            { withRef: true }
          );
          return connector(ConnectedField);
        };

        exports.default = createConnectedField;

        /***/
      },
      /* 194 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        var processProps = function processProps(type, props, _value) {
          var value = props.value;

          if (type === "checkbox") {
            return _extends({}, props, {
              checked: !!value
            });
          }
          if (type === "radio") {
            return _extends({}, props, {
              checked: value === _value,
              value: _value
            });
          }
          if (type === "select-multiple") {
            return _extends({}, props, {
              value: value || []
            });
          }
          if (type === "file") {
            return _extends({}, props, {
              value: value || undefined
            });
          }
          return props;
        };

        var createFieldProps = function createFieldProps(_ref2, name, _ref) {
          var getIn = _ref2.getIn,
            toJS = _ref2.toJS;

          var asyncError = _ref.asyncError,
            asyncValidating = _ref.asyncValidating,
            onBlur = _ref.onBlur,
            onChange = _ref.onChange,
            onDrop = _ref.onDrop,
            onDragStart = _ref.onDragStart,
            dirty = _ref.dirty,
            dispatch = _ref.dispatch,
            onFocus = _ref.onFocus,
            form = _ref.form,
            format = _ref.format,
            initial = _ref.initial,
            parse = _ref.parse,
            pristine = _ref.pristine,
            props = _ref.props,
            state = _ref.state,
            submitError = _ref.submitError,
            submitFailed = _ref.submitFailed,
            submitting = _ref.submitting,
            syncError = _ref.syncError,
            syncWarning = _ref.syncWarning,
            validate = _ref.validate,
            value = _ref.value,
            _value = _ref._value,
            warn = _ref.warn,
            custom = _objectWithoutProperties(_ref, [
              "asyncError",
              "asyncValidating",
              "onBlur",
              "onChange",
              "onDrop",
              "onDragStart",
              "dirty",
              "dispatch",
              "onFocus",
              "form",
              "format",
              "initial",
              "parse",
              "pristine",
              "props",
              "state",
              "submitError",
              "submitFailed",
              "submitting",
              "syncError",
              "syncWarning",
              "validate",
              "value",
              "_value",
              "warn"
            ]);

          var error = syncError || asyncError || submitError;
          var warning = syncWarning;

          var formatFieldValue = function formatFieldValue(value, format) {
            if (format === null) {
              return value;
            }
            var defaultFormattedValue = value == null ? "" : value;
            return format ? format(value, name) : defaultFormattedValue;
          };

          var formattedFieldValue = formatFieldValue(value, format);

          return {
            input: processProps(
              custom.type,
              {
                name: name,
                onBlur: onBlur,
                onChange: onChange,
                onDragStart: onDragStart,
                onDrop: onDrop,
                onFocus: onFocus,
                value: formattedFieldValue
              },
              _value
            ),
            meta: _extends({}, toJS(state), {
              active: !!(state && getIn(state, "active")),
              asyncValidating: asyncValidating,
              autofilled: !!(state && getIn(state, "autofilled")),
              dirty: dirty,
              dispatch: dispatch,
              error: error,
              form: form,
              initial: initial,
              warning: warning,
              invalid: !!error,
              pristine: pristine,
              submitting: !!submitting,
              submitFailed: !!submitFailed,
              touched: !!(state && getIn(state, "touched")),
              valid: !error,
              visited: !!(state && getIn(state, "visited"))
            }),
            custom: _extends({}, custom, props)
          };
        };

        exports.default = createFieldProps;

        /***/
      },
      /* 195 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getValue = __webpack_require__(196);

        var _getValue2 = _interopRequireDefault(_getValue);

        var _isReactNative = __webpack_require__(198);

        var _isReactNative2 = _interopRequireDefault(_isReactNative);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var onChangeValue = function onChangeValue(event, _ref) {
          var name = _ref.name,
            parse = _ref.parse,
            normalize = _ref.normalize;

          // read value from input
          var value = (0, _getValue2.default)(
            event,
            _isReactNative2.default

            // parse value if we have a parser
          );
          if (parse) {
            value = parse(value, name);
          }

          // normalize value
          if (normalize) {
            value = normalize(name, value);
          }

          return value;
        };

        exports.default = onChangeValue;

        /***/
      },
      /* 196 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isEvent = __webpack_require__(197);

        var _isEvent2 = _interopRequireDefault(_isEvent);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var getSelectedValues = function getSelectedValues(options) {
          var result = [];
          if (options) {
            for (var index = 0; index < options.length; index++) {
              var option = options[index];
              if (option.selected) {
                result.push(option.value);
              }
            }
          }
          return result;
        };

        var getValue = function getValue(event, isReactNative) {
          if ((0, _isEvent2.default)(event)) {
            if (
              !isReactNative &&
              event.nativeEvent &&
              event.nativeEvent.text !== undefined
            ) {
              return event.nativeEvent.text;
            }
            if (isReactNative && event.nativeEvent !== undefined) {
              return event.nativeEvent.text;
            }
            var _event$target = event.target,
              type = _event$target.type,
              value = _event$target.value,
              checked = _event$target.checked,
              files = _event$target.files,
              dataTransfer = event.dataTransfer;

            if (type === "checkbox") {
              return checked || "";
            }
            if (type === "file") {
              return files || (dataTransfer && dataTransfer.files);
            }
            if (type === "select-multiple") {
              return getSelectedValues(event.target.options);
            }
            return value;
          }
          return event;
        };

        exports.default = getValue;

        /***/
      },
      /* 197 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var isEvent = function isEvent(candidate) {
          return !!(
            candidate &&
            candidate.stopPropagation &&
            candidate.preventDefault
          );
        };

        exports.default = isEvent;

        /***/
      },
      /* 198 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var isReactNative =
          typeof window !== "undefined" &&
          window.navigator &&
          window.navigator.product &&
          window.navigator.product === "ReactNative";

        exports.default = isReactNative;

        /***/
      },
      /* 199 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var dataKey = (exports.dataKey = "text");

        /***/
      },
      /* 200 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _splice = __webpack_require__(201);

        var _splice2 = _interopRequireDefault(_splice);

        var _getIn = __webpack_require__(202);

        var _getIn2 = _interopRequireDefault(_getIn);

        var _setIn = __webpack_require__(253);

        var _setIn2 = _interopRequireDefault(_setIn);

        var _deepEqual = __webpack_require__(254);

        var _deepEqual2 = _interopRequireDefault(_deepEqual);

        var _deleteIn = __webpack_require__(305);

        var _deleteIn2 = _interopRequireDefault(_deleteIn);

        var _keys = __webpack_require__(306);

        var _keys2 = _interopRequireDefault(_keys);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var structure = {
          allowsArrayErrors: true,
          empty: {},
          emptyList: [],
          getIn: _getIn2.default,
          setIn: _setIn2.default,
          deepEqual: _deepEqual2.default,
          deleteIn: _deleteIn2.default,
          fromJS: function fromJS(value) {
            return value;
          },
          keys: _keys2.default,
          size: function size(array) {
            return array ? array.length : 0;
          },
          splice: _splice2.default,
          toJS: function toJS(value) {
            return value;
          }
        };

        exports.default = structure;

        /***/
      },
      /* 201 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        var splice = function splice(array, index, removeNum, value) {
          array = array || [];

          if (index < array.length) {
            if (value === undefined && !removeNum) {
              // inserting undefined
              var _copy2 = [].concat(_toConsumableArray(array));
              _copy2.splice(index, 0, null);
              _copy2[index] = undefined;
              return _copy2;
            }
            if (value != null) {
              var _copy3 = [].concat(_toConsumableArray(array));
              _copy3.splice(
                index,
                removeNum,
                value // removing and adding
              );
              return _copy3;
            }
            var _copy = [].concat(_toConsumableArray(array));
            _copy.splice(
              index,
              removeNum // removing
            );
            return _copy;
          }
          if (removeNum) {
            // trying to remove non-existant item: return original array
            return array;
          }
          // trying to add outside of range: just set value
          var copy = [].concat(_toConsumableArray(array));
          copy[index] = value;
          return copy;
        };

        exports.default = splice;

        /***/
      },
      /* 202 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _toPath2 = __webpack_require__(203);

        var _toPath3 = _interopRequireDefault(_toPath2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var getIn = function getIn(state, field) {
          if (!state) {
            return state;
          }

          var path = (0, _toPath3.default)(field);
          var length = path.length;
          if (!length) {
            return undefined;
          }

          var result = state;
          for (var i = 0; i < length && !!result; ++i) {
            result = result[path[i]];
          }

          return result;
        };

        exports.default = getIn;

        /***/
      },
      /* 203 */
      /***/ function(module, exports, __webpack_require__) {
        var arrayMap = __webpack_require__(204),
          copyArray = __webpack_require__(205),
          isArray = __webpack_require__(206),
          isSymbol = __webpack_require__(207),
          stringToPath = __webpack_require__(215),
          toKey = __webpack_require__(250),
          toString = __webpack_require__(251);

        /**
         * Converts `value` to a property path array.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Util
         * @param {*} value The value to convert.
         * @returns {Array} Returns the new property path array.
         * @example
         *
         * _.toPath('a.b.c');
         * // => ['a', 'b', 'c']
         *
         * _.toPath('a[0].b.c');
         * // => ['a', '0', 'b', 'c']
         */
        function toPath(value) {
          if (isArray(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value)
            ? [value]
            : copyArray(stringToPath(toString(value)));
        }

        module.exports = toPath;

        /***/
      },
      /* 204 */
      /***/ function(module, exports) {
        /**
         * A specialized version of `_.map` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the new mapped array.
         */
        function arrayMap(array, iteratee) {
          var index = -1,
            length = array == null ? 0 : array.length,
            result = Array(length);

          while (++index < length) {
            result[index] = iteratee(array[index], index, array);
          }
          return result;
        }

        module.exports = arrayMap;

        /***/
      },
      /* 205 */
      /***/ function(module, exports) {
        /**
         * Copies the values of `source` to `array`.
         *
         * @private
         * @param {Array} source The array to copy values from.
         * @param {Array} [array=[]] The array to copy values to.
         * @returns {Array} Returns `array`.
         */
        function copyArray(source, array) {
          var index = -1,
            length = source.length;

          array || (array = Array(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }

        module.exports = copyArray;

        /***/
      },
      /* 206 */
      /***/ function(module, exports) {
        /**
         * Checks if `value` is classified as an `Array` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array, else `false`.
         * @example
         *
         * _.isArray([1, 2, 3]);
         * // => true
         *
         * _.isArray(document.body.children);
         * // => false
         *
         * _.isArray('abc');
         * // => false
         *
         * _.isArray(_.noop);
         * // => false
         */
        var isArray = Array.isArray;

        module.exports = isArray;

        /***/
      },
      /* 207 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGetTag = __webpack_require__(208),
          isObjectLike = __webpack_require__(214);

        /** `Object#toString` result references. */
        var symbolTag = "[object Symbol]";

        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        function isSymbol(value) {
          return (
            typeof value == "symbol" ||
            (isObjectLike(value) && baseGetTag(value) == symbolTag)
          );
        }

        module.exports = isSymbol;

        /***/
      },
      /* 208 */
      /***/ function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(209),
          getRawTag = __webpack_require__(212),
          objectToString = __webpack_require__(213);

        /** `Object#toString` result references. */
        var nullTag = "[object Null]",
          undefinedTag = "[object Undefined]";

        /** Built-in value references. */
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        /**
         * The base implementation of `getTag` without fallbacks for buggy environments.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object(value)
            ? getRawTag(value)
            : objectToString(value);
        }

        module.exports = baseGetTag;

        /***/
      },
      /* 209 */
      /***/ function(module, exports, __webpack_require__) {
        var root = __webpack_require__(210);

        /** Built-in value references. */
        var Symbol = root.Symbol;

        module.exports = Symbol;

        /***/
      },
      /* 210 */
      /***/ function(module, exports, __webpack_require__) {
        var freeGlobal = __webpack_require__(211);

        /** Detect free variable `self`. */
        var freeSelf =
          typeof self == "object" && self && self.Object === Object && self;

        /** Used as a reference to the global object. */
        var root = freeGlobal || freeSelf || Function("return this")();

        module.exports = root;

        /***/
      },
      /* 211 */
      /***/ function(module, exports) {
        /* WEBPACK VAR INJECTION */ (function(global) {
          /** Detect free variable `global` from Node.js. */
          var freeGlobal =
            typeof global == "object" &&
            global &&
            global.Object === Object &&
            global;

          module.exports = freeGlobal;

          /* WEBPACK VAR INJECTION */
        }.call(
          exports,
          (function() {
            return this;
          })()
        ));

        /***/
      },
      /* 212 */
      /***/ function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(209);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /** Built-in value references. */
        var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

        /**
         * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the raw `toStringTag`.
         */
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag),
            tag = value[symToStringTag];

          try {
            value[symToStringTag] = undefined;
            var unmasked = true;
          } catch (e) {}

          var result = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result;
        }

        module.exports = getRawTag;

        /***/
      },
      /* 213 */
      /***/ function(module, exports) {
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Used to resolve the
         * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
         * of values.
         */
        var nativeObjectToString = objectProto.toString;

        /**
         * Converts `value` to a string using `Object.prototype.toString`.
         *
         * @private
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         */
        function objectToString(value) {
          return nativeObjectToString.call(value);
        }

        module.exports = objectToString;

        /***/
      },
      /* 214 */
      /***/ function(module, exports) {
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }

        module.exports = isObjectLike;

        /***/
      },
      /* 215 */
      /***/ function(module, exports, __webpack_require__) {
        var memoizeCapped = __webpack_require__(216);

        /** Used to match property names within property paths. */
        var reLeadingDot = /^\./,
          rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

        /** Used to match backslashes in property paths. */
        var reEscapeChar = /\\(\\)?/g;

        /**
         * Converts `string` to a property path array.
         *
         * @private
         * @param {string} string The string to convert.
         * @returns {Array} Returns the property path array.
         */
        var stringToPath = memoizeCapped(function(string) {
          var result = [];
          if (reLeadingDot.test(string)) {
            result.push("");
          }
          string.replace(rePropName, function(match, number, quote, string) {
            result.push(
              quote ? string.replace(reEscapeChar, "$1") : number || match
            );
          });
          return result;
        });

        module.exports = stringToPath;

        /***/
      },
      /* 216 */
      /***/ function(module, exports, __webpack_require__) {
        var memoize = __webpack_require__(217);

        /** Used as the maximum memoize cache size. */
        var MAX_MEMOIZE_SIZE = 500;

        /**
         * A specialized version of `_.memoize` which clears the memoized function's
         * cache when it exceeds `MAX_MEMOIZE_SIZE`.
         *
         * @private
         * @param {Function} func The function to have its output memoized.
         * @returns {Function} Returns the new memoized function.
         */
        function memoizeCapped(func) {
          var result = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });

          var cache = result.cache;
          return result;
        }

        module.exports = memoizeCapped;

        /***/
      },
      /* 217 */
      /***/ function(module, exports, __webpack_require__) {
        var MapCache = __webpack_require__(218);

        /** Error message constants. */
        var FUNC_ERROR_TEXT = "Expected a function";

        /**
         * Creates a function that memoizes the result of `func`. If `resolver` is
         * provided, it determines the cache key for storing the result based on the
         * arguments provided to the memoized function. By default, the first argument
         * provided to the memoized function is used as the map cache key. The `func`
         * is invoked with the `this` binding of the memoized function.
         *
         * **Note:** The cache is exposed as the `cache` property on the memoized
         * function. Its creation may be customized by replacing the `_.memoize.Cache`
         * constructor with one whose instances implement the
         * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
         * method interface of `clear`, `delete`, `get`, `has`, and `set`.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Function
         * @param {Function} func The function to have its output memoized.
         * @param {Function} [resolver] The function to resolve the cache key.
         * @returns {Function} Returns the new memoized function.
         * @example
         *
         * var object = { 'a': 1, 'b': 2 };
         * var other = { 'c': 3, 'd': 4 };
         *
         * var values = _.memoize(_.values);
         * values(object);
         * // => [1, 2]
         *
         * values(other);
         * // => [3, 4]
         *
         * object.a = 2;
         * values(object);
         * // => [1, 2]
         *
         * // Modify the result cache.
         * values.cache.set(object, ['a', 'b']);
         * values(object);
         * // => ['a', 'b']
         *
         * // Replace `_.memoize.Cache`.
         * _.memoize.Cache = WeakMap;
         */
        function memoize(func, resolver) {
          if (
            typeof func != "function" ||
            (resolver != null && typeof resolver != "function")
          ) {
            throw new TypeError(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments,
              key = resolver ? resolver.apply(this, args) : args[0],
              cache = memoized.cache;

            if (cache.has(key)) {
              return cache.get(key);
            }
            var result = func.apply(this, args);
            memoized.cache = cache.set(key, result) || cache;
            return result;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }

        // Expose `MapCache`.
        memoize.Cache = MapCache;

        module.exports = memoize;

        /***/
      },
      /* 218 */
      /***/ function(module, exports, __webpack_require__) {
        var mapCacheClear = __webpack_require__(219),
          mapCacheDelete = __webpack_require__(244),
          mapCacheGet = __webpack_require__(247),
          mapCacheHas = __webpack_require__(248),
          mapCacheSet = __webpack_require__(249);

        /**
         * Creates a map cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function MapCache(entries) {
          var index = -1,
            length = entries == null ? 0 : entries.length;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `MapCache`.
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;

        module.exports = MapCache;

        /***/
      },
      /* 219 */
      /***/ function(module, exports, __webpack_require__) {
        var Hash = __webpack_require__(220),
          ListCache = __webpack_require__(235),
          Map = __webpack_require__(243);

        /**
         * Removes all key-value entries from the map.
         *
         * @private
         * @name clear
         * @memberOf MapCache
         */
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            hash: new Hash(),
            map: new (Map || ListCache)(),
            string: new Hash()
          };
        }

        module.exports = mapCacheClear;

        /***/
      },
      /* 220 */
      /***/ function(module, exports, __webpack_require__) {
        var hashClear = __webpack_require__(221),
          hashDelete = __webpack_require__(231),
          hashGet = __webpack_require__(232),
          hashHas = __webpack_require__(233),
          hashSet = __webpack_require__(234);

        /**
         * Creates a hash object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Hash(entries) {
          var index = -1,
            length = entries == null ? 0 : entries.length;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `Hash`.
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;

        module.exports = Hash;

        /***/
      },
      /* 221 */
      /***/ function(module, exports, __webpack_require__) {
        var nativeCreate = __webpack_require__(222);

        /**
         * Removes all key-value entries from the hash.
         *
         * @private
         * @name clear
         * @memberOf Hash
         */
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }

        module.exports = hashClear;

        /***/
      },
      /* 222 */
      /***/ function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(223);

        /* Built-in method references that are verified to be native. */
        var nativeCreate = getNative(Object, "create");

        module.exports = nativeCreate;

        /***/
      },
      /* 223 */
      /***/ function(module, exports, __webpack_require__) {
        var baseIsNative = __webpack_require__(224),
          getValue = __webpack_require__(230);

        /**
         * Gets the native function at `key` of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {string} key The key of the method to get.
         * @returns {*} Returns the function if it's native, else `undefined`.
         */
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined;
        }

        module.exports = getNative;

        /***/
      },
      /* 224 */
      /***/ function(module, exports, __webpack_require__) {
        var isFunction = __webpack_require__(225),
          isMasked = __webpack_require__(227),
          isObject = __webpack_require__(226),
          toSource = __webpack_require__(229);

        /**
         * Used to match `RegExp`
         * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
         */
        var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

        /** Used to detect host constructors (Safari). */
        var reIsHostCtor = /^\[object .+?Constructor\]$/;

        /** Used for built-in method references. */
        var funcProto = Function.prototype,
          objectProto = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to detect if a method is native. */
        var reIsNative = RegExp(
          "^" +
            funcToString
              .call(hasOwnProperty)
              .replace(reRegExpChar, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );

        /**
         * The base implementation of `_.isNative` without bad shim checks.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a native function,
         *  else `false`.
         */
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }

        module.exports = baseIsNative;

        /***/
      },
      /* 225 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGetTag = __webpack_require__(208),
          isObject = __webpack_require__(226);

        /** `Object#toString` result references. */
        var asyncTag = "[object AsyncFunction]",
          funcTag = "[object Function]",
          genTag = "[object GeneratorFunction]",
          proxyTag = "[object Proxy]";

        /**
         * Checks if `value` is classified as a `Function` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a function, else `false`.
         * @example
         *
         * _.isFunction(_);
         * // => true
         *
         * _.isFunction(/abc/);
         * // => false
         */
        function isFunction(value) {
          if (!isObject(value)) {
            return false;
          }
          // The use of `Object#toString` avoids issues with the `typeof` operator
          // in Safari 9 which returns 'object' for typed arrays and other constructors.
          var tag = baseGetTag(value);
          return (
            tag == funcTag ||
            tag == genTag ||
            tag == asyncTag ||
            tag == proxyTag
          );
        }

        module.exports = isFunction;

        /***/
      },
      /* 226 */
      /***/ function(module, exports) {
        /**
         * Checks if `value` is the
         * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
         * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an object, else `false`.
         * @example
         *
         * _.isObject({});
         * // => true
         *
         * _.isObject([1, 2, 3]);
         * // => true
         *
         * _.isObject(_.noop);
         * // => true
         *
         * _.isObject(null);
         * // => false
         */
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }

        module.exports = isObject;

        /***/
      },
      /* 227 */
      /***/ function(module, exports, __webpack_require__) {
        var coreJsData = __webpack_require__(228);

        /** Used to detect methods masquerading as native. */
        var maskSrcKey = (function() {
          var uid = /[^.]+$/.exec(
            (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ""
          );
          return uid ? "Symbol(src)_1." + uid : "";
        })();

        /**
         * Checks if `func` has its source masked.
         *
         * @private
         * @param {Function} func The function to check.
         * @returns {boolean} Returns `true` if `func` is masked, else `false`.
         */
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }

        module.exports = isMasked;

        /***/
      },
      /* 228 */
      /***/ function(module, exports, __webpack_require__) {
        var root = __webpack_require__(210);

        /** Used to detect overreaching core-js shims. */
        var coreJsData = root["__core-js_shared__"];

        module.exports = coreJsData;

        /***/
      },
      /* 229 */
      /***/ function(module, exports) {
        /** Used for built-in method references. */
        var funcProto = Function.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /**
         * Converts `func` to its source code.
         *
         * @private
         * @param {Function} func The function to convert.
         * @returns {string} Returns the source code.
         */
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {}
            try {
              return func + "";
            } catch (e) {}
          }
          return "";
        }

        module.exports = toSource;

        /***/
      },
      /* 230 */
      /***/ function(module, exports) {
        /**
         * Gets the value at `key` of `object`.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {string} key The key of the property to get.
         * @returns {*} Returns the property value.
         */
        function getValue(object, key) {
          return object == null ? undefined : object[key];
        }

        module.exports = getValue;

        /***/
      },
      /* 231 */
      /***/ function(module, exports) {
        /**
         * Removes `key` and its value from the hash.
         *
         * @private
         * @name delete
         * @memberOf Hash
         * @param {Object} hash The hash to modify.
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function hashDelete(key) {
          var result = this.has(key) && delete this.__data__[key];
          this.size -= result ? 1 : 0;
          return result;
        }

        module.exports = hashDelete;

        /***/
      },
      /* 232 */
      /***/ function(module, exports, __webpack_require__) {
        var nativeCreate = __webpack_require__(222);

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = "__lodash_hash_undefined__";

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Gets the hash value for `key`.
         *
         * @private
         * @name get
         * @memberOf Hash
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined;
        }

        module.exports = hashGet;

        /***/
      },
      /* 233 */
      /***/ function(module, exports, __webpack_require__) {
        var nativeCreate = __webpack_require__(222);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Checks if a hash value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Hash
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate
            ? data[key] !== undefined
            : hasOwnProperty.call(data, key);
        }

        module.exports = hashHas;

        /***/
      },
      /* 234 */
      /***/ function(module, exports, __webpack_require__) {
        var nativeCreate = __webpack_require__(222);

        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = "__lodash_hash_undefined__";

        /**
         * Sets the hash `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Hash
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the hash instance.
         */
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] =
            nativeCreate && value === undefined ? HASH_UNDEFINED : value;
          return this;
        }

        module.exports = hashSet;

        /***/
      },
      /* 235 */
      /***/ function(module, exports, __webpack_require__) {
        var listCacheClear = __webpack_require__(236),
          listCacheDelete = __webpack_require__(237),
          listCacheGet = __webpack_require__(240),
          listCacheHas = __webpack_require__(241),
          listCacheSet = __webpack_require__(242);

        /**
         * Creates an list cache object.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function ListCache(entries) {
          var index = -1,
            length = entries == null ? 0 : entries.length;

          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }

        // Add methods to `ListCache`.
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;

        module.exports = ListCache;

        /***/
      },
      /* 236 */
      /***/ function(module, exports) {
        /**
         * Removes all key-value entries from the list cache.
         *
         * @private
         * @name clear
         * @memberOf ListCache
         */
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }

        module.exports = listCacheClear;

        /***/
      },
      /* 237 */
      /***/ function(module, exports, __webpack_require__) {
        var assocIndexOf = __webpack_require__(238);

        /** Used for built-in method references. */
        var arrayProto = Array.prototype;

        /** Built-in value references. */
        var splice = arrayProto.splice;

        /**
         * Removes `key` and its value from the list cache.
         *
         * @private
         * @name delete
         * @memberOf ListCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function listCacheDelete(key) {
          var data = this.__data__,
            index = assocIndexOf(data, key);

          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }

        module.exports = listCacheDelete;

        /***/
      },
      /* 238 */
      /***/ function(module, exports, __webpack_require__) {
        var eq = __webpack_require__(239);

        /**
         * Gets the index at which the `key` is found in `array` of key-value pairs.
         *
         * @private
         * @param {Array} array The array to inspect.
         * @param {*} key The key to search for.
         * @returns {number} Returns the index of the matched value, else `-1`.
         */
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }

        module.exports = assocIndexOf;

        /***/
      },
      /* 239 */
      /***/ function(module, exports) {
        /**
         * Performs a
         * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'a': 1 };
         * var other = { 'a': 1 };
         *
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        function eq(value, other) {
          return value === other || (value !== value && other !== other);
        }

        module.exports = eq;

        /***/
      },
      /* 240 */
      /***/ function(module, exports, __webpack_require__) {
        var assocIndexOf = __webpack_require__(238);

        /**
         * Gets the list cache value for `key`.
         *
         * @private
         * @name get
         * @memberOf ListCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function listCacheGet(key) {
          var data = this.__data__,
            index = assocIndexOf(data, key);

          return index < 0 ? undefined : data[index][1];
        }

        module.exports = listCacheGet;

        /***/
      },
      /* 241 */
      /***/ function(module, exports, __webpack_require__) {
        var assocIndexOf = __webpack_require__(238);

        /**
         * Checks if a list cache value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf ListCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }

        module.exports = listCacheHas;

        /***/
      },
      /* 242 */
      /***/ function(module, exports, __webpack_require__) {
        var assocIndexOf = __webpack_require__(238);

        /**
         * Sets the list cache `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf ListCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the list cache instance.
         */
        function listCacheSet(key, value) {
          var data = this.__data__,
            index = assocIndexOf(data, key);

          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }

        module.exports = listCacheSet;

        /***/
      },
      /* 243 */
      /***/ function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(223),
          root = __webpack_require__(210);

        /* Built-in method references that are verified to be native. */
        var Map = getNative(root, "Map");

        module.exports = Map;

        /***/
      },
      /* 244 */
      /***/ function(module, exports, __webpack_require__) {
        var getMapData = __webpack_require__(245);

        /**
         * Removes `key` and its value from the map.
         *
         * @private
         * @name delete
         * @memberOf MapCache
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function mapCacheDelete(key) {
          var result = getMapData(this, key)["delete"](key);
          this.size -= result ? 1 : 0;
          return result;
        }

        module.exports = mapCacheDelete;

        /***/
      },
      /* 245 */
      /***/ function(module, exports, __webpack_require__) {
        var isKeyable = __webpack_require__(246);

        /**
         * Gets the data for `map`.
         *
         * @private
         * @param {Object} map The map to query.
         * @param {string} key The reference key.
         * @returns {*} Returns the map data.
         */
        function getMapData(map, key) {
          var data = map.__data__;
          return isKeyable(key)
            ? data[typeof key == "string" ? "string" : "hash"]
            : data.map;
        }

        module.exports = getMapData;

        /***/
      },
      /* 246 */
      /***/ function(module, exports) {
        /**
         * Checks if `value` is suitable for use as unique object key.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
         */
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" ||
            type == "number" ||
            type == "symbol" ||
            type == "boolean"
            ? value !== "__proto__"
            : value === null;
        }

        module.exports = isKeyable;

        /***/
      },
      /* 247 */
      /***/ function(module, exports, __webpack_require__) {
        var getMapData = __webpack_require__(245);

        /**
         * Gets the map value for `key`.
         *
         * @private
         * @name get
         * @memberOf MapCache
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }

        module.exports = mapCacheGet;

        /***/
      },
      /* 248 */
      /***/ function(module, exports, __webpack_require__) {
        var getMapData = __webpack_require__(245);

        /**
         * Checks if a map value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf MapCache
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }

        module.exports = mapCacheHas;

        /***/
      },
      /* 249 */
      /***/ function(module, exports, __webpack_require__) {
        var getMapData = __webpack_require__(245);

        /**
         * Sets the map `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf MapCache
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the map cache instance.
         */
        function mapCacheSet(key, value) {
          var data = getMapData(this, key),
            size = data.size;

          data.set(key, value);
          this.size += data.size == size ? 0 : 1;
          return this;
        }

        module.exports = mapCacheSet;

        /***/
      },
      /* 250 */
      /***/ function(module, exports, __webpack_require__) {
        var isSymbol = __webpack_require__(207);

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /**
         * Converts `value` to a string key if it's not a string or symbol.
         *
         * @private
         * @param {*} value The value to inspect.
         * @returns {string|symbol} Returns the key.
         */
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }

        module.exports = toKey;

        /***/
      },
      /* 251 */
      /***/ function(module, exports, __webpack_require__) {
        var baseToString = __webpack_require__(252);

        /**
         * Converts `value` to a string. An empty string is returned for `null`
         * and `undefined` values. The sign of `-0` is preserved.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {string} Returns the converted string.
         * @example
         *
         * _.toString(null);
         * // => ''
         *
         * _.toString(-0);
         * // => '-0'
         *
         * _.toString([1, 2, 3]);
         * // => '1,2,3'
         */
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }

        module.exports = toString;

        /***/
      },
      /* 252 */
      /***/ function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(209),
          arrayMap = __webpack_require__(204),
          isArray = __webpack_require__(206),
          isSymbol = __webpack_require__(207);

        /** Used as references for various `Number` constants. */
        var INFINITY = 1 / 0;

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolToString = symbolProto ? symbolProto.toString : undefined;

        /**
         * The base implementation of `_.toString` which doesn't convert nullish
         * values to empty strings.
         *
         * @private
         * @param {*} value The value to process.
         * @returns {string} Returns the string.
         */
        function baseToString(value) {
          // Exit early for strings to avoid a performance hit in some environments.
          if (typeof value == "string") {
            return value;
          }
          if (isArray(value)) {
            // Recursively convert values (susceptible to call stack limits).
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result = value + "";
          return result == "0" && 1 / value == -INFINITY ? "-0" : result;
        }

        module.exports = baseToString;

        /***/
      },
      /* 253 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _toPath2 = __webpack_require__(203);

        var _toPath3 = _interopRequireDefault(_toPath2);

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var setInWithPath = function setInWithPath(
          state,
          value,
          path,
          pathIndex
        ) {
          if (pathIndex >= path.length) {
            return value;
          }

          var first = path[pathIndex];
          var next = setInWithPath(
            state && state[first],
            value,
            path,
            pathIndex + 1
          );

          if (!state) {
            var initialized = isNaN(first) ? {} : [];
            initialized[first] = next;
            return initialized;
          }

          if (Array.isArray(state)) {
            var copy = [].concat(state);
            copy[first] = next;
            return copy;
          }

          return _extends({}, state, _defineProperty({}, first, next));
        };

        var setIn = function setIn(state, field, value) {
          return setInWithPath(state, value, (0, _toPath3.default)(field), 0);
        };

        exports.default = setIn;

        /***/
      },
      /* 254 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isEqualWith2 = __webpack_require__(255);

        var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var customizer = function customizer(obj, other) {
          if (obj === other) return true;
          if (
            (obj == null || obj === "" || obj === false) &&
            (other == null || other === "" || other === false)
          )
            return true;

          if (obj && other && obj._error !== other._error) return false;
          if (obj && other && obj._warning !== other._warning) return false;
        };

        var deepEqual = function deepEqual(a, b) {
          return (0, _isEqualWith3.default)(a, b, customizer);
        };

        exports.default = deepEqual;

        /***/
      },
      /* 255 */
      /***/ function(module, exports, __webpack_require__) {
        var baseIsEqual = __webpack_require__(256);

        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined`, comparisons
         * are handled by the method instead. The `customizer` is invoked with up to
         * six arguments: (objValue, othValue [, index|key, object, other, stack]).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         *     return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined;
          var result = customizer ? customizer(value, other) : undefined;
          return result === undefined
            ? baseIsEqual(value, other, undefined, customizer)
            : !!result;
        }

        module.exports = isEqualWith;

        /***/
      },
      /* 256 */
      /***/ function(module, exports, __webpack_require__) {
        var baseIsEqualDeep = __webpack_require__(257),
          isObjectLike = __webpack_require__(214);

        /**
         * The base implementation of `_.isEqual` which supports partial comparisons
         * and tracks traversed objects.
         *
         * @private
         * @param {*} value The value to compare.
         * @param {*} other The other value to compare.
         * @param {boolean} bitmask The bitmask flags.
         *  1 - Unordered comparison
         *  2 - Partial comparison
         * @param {Function} [customizer] The function to customize comparisons.
         * @param {Object} [stack] Tracks traversed `value` and `other` objects.
         * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
         */
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (
            value == null ||
            other == null ||
            (!isObjectLike(value) && !isObjectLike(other))
          ) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(
            value,
            other,
            bitmask,
            customizer,
            baseIsEqual,
            stack
          );
        }

        module.exports = baseIsEqual;

        /***/
      },
      /* 257 */
      /***/ function(module, exports, __webpack_require__) {
        var Stack = __webpack_require__(258),
          equalArrays = __webpack_require__(264),
          equalByTag = __webpack_require__(270),
          equalObjects = __webpack_require__(274),
          getTag = __webpack_require__(300),
          isArray = __webpack_require__(206),
          isBuffer = __webpack_require__(286),
          isTypedArray = __webpack_require__(290);

        /** Used to compose bitmasks for value comparisons. */
        var COMPARE_PARTIAL_FLAG = 1;

        /** `Object#toString` result references. */
        var argsTag = "[object Arguments]",
          arrayTag = "[object Array]",
          objectTag = "[object Object]";

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * A specialized version of `baseIsEqual` for arrays and objects which performs
         * deep comparisons and tracks traversed objects enabling objects with circular
         * references to be compared.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} [stack] Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function baseIsEqualDeep(
          object,
          other,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          var objIsArr = isArray(object),
            othIsArr = isArray(other),
            objTag = objIsArr ? arrayTag : getTag(object),
            othTag = othIsArr ? arrayTag : getTag(other);

          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;

          var objIsObj = objTag == objectTag,
            othIsObj = othTag == objectTag,
            isSameTag = objTag == othTag;

          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object)
              ? equalArrays(
                  object,
                  other,
                  bitmask,
                  customizer,
                  equalFunc,
                  stack
                )
              : equalByTag(
                  object,
                  other,
                  objTag,
                  bitmask,
                  customizer,
                  equalFunc,
                  stack
                );
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped =
                objIsObj && hasOwnProperty.call(object, "__wrapped__"),
              othIsWrapped =
                othIsObj && hasOwnProperty.call(other, "__wrapped__");

            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object,
                othUnwrapped = othIsWrapped ? other.value() : other;

              stack || (stack = new Stack());
              return equalFunc(
                objUnwrapped,
                othUnwrapped,
                bitmask,
                customizer,
                stack
              );
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(
            object,
            other,
            bitmask,
            customizer,
            equalFunc,
            stack
          );
        }

        module.exports = baseIsEqualDeep;

        /***/
      },
      /* 258 */
      /***/ function(module, exports, __webpack_require__) {
        var ListCache = __webpack_require__(235),
          stackClear = __webpack_require__(259),
          stackDelete = __webpack_require__(260),
          stackGet = __webpack_require__(261),
          stackHas = __webpack_require__(262),
          stackSet = __webpack_require__(263);

        /**
         * Creates a stack cache object to store key-value pairs.
         *
         * @private
         * @constructor
         * @param {Array} [entries] The key-value pairs to cache.
         */
        function Stack(entries) {
          var data = (this.__data__ = new ListCache(entries));
          this.size = data.size;
        }

        // Add methods to `Stack`.
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;

        module.exports = Stack;

        /***/
      },
      /* 259 */
      /***/ function(module, exports, __webpack_require__) {
        var ListCache = __webpack_require__(235);

        /**
         * Removes all key-value entries from the stack.
         *
         * @private
         * @name clear
         * @memberOf Stack
         */
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }

        module.exports = stackClear;

        /***/
      },
      /* 260 */
      /***/ function(module, exports) {
        /**
         * Removes `key` and its value from the stack.
         *
         * @private
         * @name delete
         * @memberOf Stack
         * @param {string} key The key of the value to remove.
         * @returns {boolean} Returns `true` if the entry was removed, else `false`.
         */
        function stackDelete(key) {
          var data = this.__data__,
            result = data["delete"](key);

          this.size = data.size;
          return result;
        }

        module.exports = stackDelete;

        /***/
      },
      /* 261 */
      /***/ function(module, exports) {
        /**
         * Gets the stack value for `key`.
         *
         * @private
         * @name get
         * @memberOf Stack
         * @param {string} key The key of the value to get.
         * @returns {*} Returns the entry value.
         */
        function stackGet(key) {
          return this.__data__.get(key);
        }

        module.exports = stackGet;

        /***/
      },
      /* 262 */
      /***/ function(module, exports) {
        /**
         * Checks if a stack value for `key` exists.
         *
         * @private
         * @name has
         * @memberOf Stack
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function stackHas(key) {
          return this.__data__.has(key);
        }

        module.exports = stackHas;

        /***/
      },
      /* 263 */
      /***/ function(module, exports, __webpack_require__) {
        var ListCache = __webpack_require__(235),
          Map = __webpack_require__(243),
          MapCache = __webpack_require__(218);

        /** Used as the size to enable large array optimizations. */
        var LARGE_ARRAY_SIZE = 200;

        /**
         * Sets the stack `key` to `value`.
         *
         * @private
         * @name set
         * @memberOf Stack
         * @param {string} key The key of the value to set.
         * @param {*} value The value to set.
         * @returns {Object} Returns the stack cache instance.
         */
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }

        module.exports = stackSet;

        /***/
      },
      /* 264 */
      /***/ function(module, exports, __webpack_require__) {
        var SetCache = __webpack_require__(265),
          arraySome = __webpack_require__(268),
          cacheHas = __webpack_require__(269);

        /** Used to compose bitmasks for value comparisons. */
        var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;

        /**
         * A specialized version of `baseIsEqualDeep` for arrays with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Array} array The array to compare.
         * @param {Array} other The other array to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `array` and `other` objects.
         * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
         */
        function equalArrays(
          array,
          other,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
            arrLength = array.length,
            othLength = other.length;

          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(array);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var index = -1,
            result = true,
            seen =
              bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

          stack.set(array, other);
          stack.set(other, array);

          // Ignore non-index properties.
          while (++index < arrLength) {
            var arrValue = array[index],
              othValue = other[index];

            if (customizer) {
              var compared = isPartial
                ? customizer(othValue, arrValue, index, other, array, stack)
                : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined) {
              if (compared) {
                continue;
              }
              result = false;
              break;
            }
            // Recursively compare arrays (susceptible to call stack limits).
            if (seen) {
              if (
                !arraySome(other, function(othValue, othIndex) {
                  if (
                    !cacheHas(seen, othIndex) &&
                    (arrValue === othValue ||
                      equalFunc(arrValue, othValue, bitmask, customizer, stack))
                  ) {
                    return seen.push(othIndex);
                  }
                })
              ) {
                result = false;
                break;
              }
            } else if (
              !(
                arrValue === othValue ||
                equalFunc(arrValue, othValue, bitmask, customizer, stack)
              )
            ) {
              result = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result;
        }

        module.exports = equalArrays;

        /***/
      },
      /* 265 */
      /***/ function(module, exports, __webpack_require__) {
        var MapCache = __webpack_require__(218),
          setCacheAdd = __webpack_require__(266),
          setCacheHas = __webpack_require__(267);

        /**
         *
         * Creates an array cache object to store unique values.
         *
         * @private
         * @constructor
         * @param {Array} [values] The values to cache.
         */
        function SetCache(values) {
          var index = -1,
            length = values == null ? 0 : values.length;

          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values[index]);
          }
        }

        // Add methods to `SetCache`.
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;

        module.exports = SetCache;

        /***/
      },
      /* 266 */
      /***/ function(module, exports) {
        /** Used to stand-in for `undefined` hash values. */
        var HASH_UNDEFINED = "__lodash_hash_undefined__";

        /**
         * Adds `value` to the array cache.
         *
         * @private
         * @name add
         * @memberOf SetCache
         * @alias push
         * @param {*} value The value to cache.
         * @returns {Object} Returns the cache instance.
         */
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }

        module.exports = setCacheAdd;

        /***/
      },
      /* 267 */
      /***/ function(module, exports) {
        /**
         * Checks if `value` is in the array cache.
         *
         * @private
         * @name has
         * @memberOf SetCache
         * @param {*} value The value to search for.
         * @returns {number} Returns `true` if `value` is found, else `false`.
         */
        function setCacheHas(value) {
          return this.__data__.has(value);
        }

        module.exports = setCacheHas;

        /***/
      },
      /* 268 */
      /***/ function(module, exports) {
        /**
         * A specialized version of `_.some` for arrays without support for iteratee
         * shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {boolean} Returns `true` if any element passes the predicate check,
         *  else `false`.
         */
        function arraySome(array, predicate) {
          var index = -1,
            length = array == null ? 0 : array.length;

          while (++index < length) {
            if (predicate(array[index], index, array)) {
              return true;
            }
          }
          return false;
        }

        module.exports = arraySome;

        /***/
      },
      /* 269 */
      /***/ function(module, exports) {
        /**
         * Checks if a `cache` value for `key` exists.
         *
         * @private
         * @param {Object} cache The cache to query.
         * @param {string} key The key of the entry to check.
         * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
         */
        function cacheHas(cache, key) {
          return cache.has(key);
        }

        module.exports = cacheHas;

        /***/
      },
      /* 270 */
      /***/ function(module, exports, __webpack_require__) {
        var Symbol = __webpack_require__(209),
          Uint8Array = __webpack_require__(271),
          eq = __webpack_require__(239),
          equalArrays = __webpack_require__(264),
          mapToArray = __webpack_require__(272),
          setToArray = __webpack_require__(273);

        /** Used to compose bitmasks for value comparisons. */
        var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;

        /** `Object#toString` result references. */
        var boolTag = "[object Boolean]",
          dateTag = "[object Date]",
          errorTag = "[object Error]",
          mapTag = "[object Map]",
          numberTag = "[object Number]",
          regexpTag = "[object RegExp]",
          setTag = "[object Set]",
          stringTag = "[object String]",
          symbolTag = "[object Symbol]";

        var arrayBufferTag = "[object ArrayBuffer]",
          dataViewTag = "[object DataView]";

        /** Used to convert symbols to primitives and strings. */
        var symbolProto = Symbol ? Symbol.prototype : undefined,
          symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

        /**
         * A specialized version of `baseIsEqualDeep` for comparing objects of
         * the same `toStringTag`.
         *
         * **Note:** This function only supports comparing values with tags of
         * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {string} tag The `toStringTag` of the objects to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalByTag(
          object,
          other,
          tag,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          switch (tag) {
            case dataViewTag:
              if (
                object.byteLength != other.byteLength ||
                object.byteOffset != other.byteOffset
              ) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;

            case arrayBufferTag:
              if (
                object.byteLength != other.byteLength ||
                !equalFunc(new Uint8Array(object), new Uint8Array(other))
              ) {
                return false;
              }
              return true;

            case boolTag:
            case dateTag:
            case numberTag:
              // Coerce booleans to `1` or `0` and dates to milliseconds.
              // Invalid dates are coerced to `NaN`.
              return eq(+object, +other);

            case errorTag:
              return (
                object.name == other.name && object.message == other.message
              );

            case regexpTag:
            case stringTag:
              // Coerce regexes to strings and treat strings, primitives and objects,
              // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
              // for more details.
              return object == other + "";

            case mapTag:
              var convert = mapToArray;

            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);

              if (object.size != other.size && !isPartial) {
                return false;
              }
              // Assume cyclic values are equal.
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;

              // Recursively compare objects (susceptible to call stack limits).
              stack.set(object, other);
              var result = equalArrays(
                convert(object),
                convert(other),
                bitmask,
                customizer,
                equalFunc,
                stack
              );
              stack["delete"](object);
              return result;

            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }

        module.exports = equalByTag;

        /***/
      },
      /* 271 */
      /***/ function(module, exports, __webpack_require__) {
        var root = __webpack_require__(210);

        /** Built-in value references. */
        var Uint8Array = root.Uint8Array;

        module.exports = Uint8Array;

        /***/
      },
      /* 272 */
      /***/ function(module, exports) {
        /**
         * Converts `map` to its key-value pairs.
         *
         * @private
         * @param {Object} map The map to convert.
         * @returns {Array} Returns the key-value pairs.
         */
        function mapToArray(map) {
          var index = -1,
            result = Array(map.size);

          map.forEach(function(value, key) {
            result[++index] = [key, value];
          });
          return result;
        }

        module.exports = mapToArray;

        /***/
      },
      /* 273 */
      /***/ function(module, exports) {
        /**
         * Converts `set` to an array of its values.
         *
         * @private
         * @param {Object} set The set to convert.
         * @returns {Array} Returns the values.
         */
        function setToArray(set) {
          var index = -1,
            result = Array(set.size);

          set.forEach(function(value) {
            result[++index] = value;
          });
          return result;
        }

        module.exports = setToArray;

        /***/
      },
      /* 274 */
      /***/ function(module, exports, __webpack_require__) {
        var getAllKeys = __webpack_require__(275);

        /** Used to compose bitmasks for value comparisons. */
        var COMPARE_PARTIAL_FLAG = 1;

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * A specialized version of `baseIsEqualDeep` for objects with support for
         * partial deep comparisons.
         *
         * @private
         * @param {Object} object The object to compare.
         * @param {Object} other The other object to compare.
         * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
         * @param {Function} customizer The function to customize comparisons.
         * @param {Function} equalFunc The function to determine equivalents of values.
         * @param {Object} stack Tracks traversed `object` and `other` objects.
         * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
         */
        function equalObjects(
          object,
          other,
          bitmask,
          customizer,
          equalFunc,
          stack
        ) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
            objProps = getAllKeys(object),
            objLength = objProps.length,
            othProps = getAllKeys(other),
            othLength = othProps.length;

          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          // Assume cyclic values are equal.
          var stacked = stack.get(object);
          if (stacked && stack.get(other)) {
            return stacked == other;
          }
          var result = true;
          stack.set(object, other);
          stack.set(other, object);

          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key],
              othValue = other[key];

            if (customizer) {
              var compared = isPartial
                ? customizer(othValue, objValue, key, other, object, stack)
                : customizer(objValue, othValue, key, object, other, stack);
            }
            // Recursively compare objects (susceptible to call stack limits).
            if (
              !(compared === undefined
                ? objValue === othValue ||
                  equalFunc(objValue, othValue, bitmask, customizer, stack)
                : compared)
            ) {
              result = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result && !skipCtor) {
            var objCtor = object.constructor,
              othCtor = other.constructor;

            // Non `Object` object instances with different constructors are not equal.
            if (
              objCtor != othCtor &&
              ("constructor" in object && "constructor" in other) &&
              !(
                typeof objCtor == "function" &&
                objCtor instanceof objCtor &&
                typeof othCtor == "function" &&
                othCtor instanceof othCtor
              )
            ) {
              result = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result;
        }

        module.exports = equalObjects;

        /***/
      },
      /* 275 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGetAllKeys = __webpack_require__(276),
          getSymbols = __webpack_require__(278),
          keys = __webpack_require__(281);

        /**
         * Creates an array of own enumerable property names and symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names and symbols.
         */
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }

        module.exports = getAllKeys;

        /***/
      },
      /* 276 */
      /***/ function(module, exports, __webpack_require__) {
        var arrayPush = __webpack_require__(277),
          isArray = __webpack_require__(206);

        /**
         * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
         * `keysFunc` and `symbolsFunc` to get the enumerable property names and
         * symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @param {Function} symbolsFunc The function to get the symbols of `object`.
         * @returns {Array} Returns the array of property names and symbols.
         */
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result = keysFunc(object);
          return isArray(object)
            ? result
            : arrayPush(result, symbolsFunc(object));
        }

        module.exports = baseGetAllKeys;

        /***/
      },
      /* 277 */
      /***/ function(module, exports) {
        /**
         * Appends the elements of `values` to `array`.
         *
         * @private
         * @param {Array} array The array to modify.
         * @param {Array} values The values to append.
         * @returns {Array} Returns `array`.
         */
        function arrayPush(array, values) {
          var index = -1,
            length = values.length,
            offset = array.length;

          while (++index < length) {
            array[offset + index] = values[index];
          }
          return array;
        }

        module.exports = arrayPush;

        /***/
      },
      /* 278 */
      /***/ function(module, exports, __webpack_require__) {
        var arrayFilter = __webpack_require__(279),
          stubArray = __webpack_require__(280);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Built-in value references. */
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeGetSymbols = Object.getOwnPropertySymbols;

        /**
         * Creates an array of the own enumerable symbols of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of symbols.
         */
        var getSymbols = !nativeGetSymbols
          ? stubArray
          : function(object) {
              if (object == null) {
                return [];
              }
              object = Object(object);
              return arrayFilter(nativeGetSymbols(object), function(symbol) {
                return propertyIsEnumerable.call(object, symbol);
              });
            };

        module.exports = getSymbols;

        /***/
      },
      /* 279 */
      /***/ function(module, exports) {
        /**
         * A specialized version of `_.filter` for arrays without support for
         * iteratee shorthands.
         *
         * @private
         * @param {Array} [array] The array to iterate over.
         * @param {Function} predicate The function invoked per iteration.
         * @returns {Array} Returns the new filtered array.
         */
        function arrayFilter(array, predicate) {
          var index = -1,
            length = array == null ? 0 : array.length,
            resIndex = 0,
            result = [];

          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result[resIndex++] = value;
            }
          }
          return result;
        }

        module.exports = arrayFilter;

        /***/
      },
      /* 280 */
      /***/ function(module, exports) {
        /**
         * This method returns a new empty array.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {Array} Returns the new empty array.
         * @example
         *
         * var arrays = _.times(2, _.stubArray);
         *
         * console.log(arrays);
         * // => [[], []]
         *
         * console.log(arrays[0] === arrays[1]);
         * // => false
         */
        function stubArray() {
          return [];
        }

        module.exports = stubArray;

        /***/
      },
      /* 281 */
      /***/ function(module, exports, __webpack_require__) {
        var arrayLikeKeys = __webpack_require__(282),
          baseKeys = __webpack_require__(295),
          isArrayLike = __webpack_require__(299);

        /**
         * Creates an array of the own enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects. See the
         * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * for more details.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keys(new Foo);
         * // => ['a', 'b'] (iteration order is not guaranteed)
         *
         * _.keys('hi');
         * // => ['0', '1']
         */
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }

        module.exports = keys;

        /***/
      },
      /* 282 */
      /***/ function(module, exports, __webpack_require__) {
        var baseTimes = __webpack_require__(283),
          isArguments = __webpack_require__(284),
          isArray = __webpack_require__(206),
          isBuffer = __webpack_require__(286),
          isIndex = __webpack_require__(289),
          isTypedArray = __webpack_require__(290);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Creates an array of the enumerable property names of the array-like `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @param {boolean} inherited Specify returning inherited property names.
         * @returns {Array} Returns the array of property names.
         */
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray(value),
            isArg = !isArr && isArguments(value),
            isBuff = !isArr && !isArg && isBuffer(value),
            isType = !isArr && !isArg && !isBuff && isTypedArray(value),
            skipIndexes = isArr || isArg || isBuff || isType,
            result = skipIndexes ? baseTimes(value.length, String) : [],
            length = result.length;

          for (var key in value) {
            if (
              (inherited || hasOwnProperty.call(value, key)) &&
              !(
                skipIndexes &&
                // Safari 9 has enumerable `arguments.length` in strict mode.
                (key == "length" ||
                  // Node.js 0.10 has enumerable non-index properties on buffers.
                  (isBuff && (key == "offset" || key == "parent")) ||
                  // PhantomJS 2 has enumerable non-index properties on typed arrays.
                  (isType &&
                    (key == "buffer" ||
                      key == "byteLength" ||
                      key == "byteOffset")) ||
                  // Skip index properties.
                  isIndex(key, length))
              )
            ) {
              result.push(key);
            }
          }
          return result;
        }

        module.exports = arrayLikeKeys;

        /***/
      },
      /* 283 */
      /***/ function(module, exports) {
        /**
         * The base implementation of `_.times` without support for iteratee shorthands
         * or max array length checks.
         *
         * @private
         * @param {number} n The number of times to invoke `iteratee`.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Array} Returns the array of results.
         */
        function baseTimes(n, iteratee) {
          var index = -1,
            result = Array(n);

          while (++index < n) {
            result[index] = iteratee(index);
          }
          return result;
        }

        module.exports = baseTimes;

        /***/
      },
      /* 284 */
      /***/ function(module, exports, __webpack_require__) {
        var baseIsArguments = __webpack_require__(285),
          isObjectLike = __webpack_require__(214);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Built-in value references. */
        var propertyIsEnumerable = objectProto.propertyIsEnumerable;

        /**
         * Checks if `value` is likely an `arguments` object.
         *
         * @static
         * @memberOf _
         * @since 0.1.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         *  else `false`.
         * @example
         *
         * _.isArguments(function() { return arguments; }());
         * // => true
         *
         * _.isArguments([1, 2, 3]);
         * // => false
         */
        var isArguments = baseIsArguments(
          (function() {
            return arguments;
          })()
        )
          ? baseIsArguments
          : function(value) {
              return (
                isObjectLike(value) &&
                hasOwnProperty.call(value, "callee") &&
                !propertyIsEnumerable.call(value, "callee")
              );
            };

        module.exports = isArguments;

        /***/
      },
      /* 285 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGetTag = __webpack_require__(208),
          isObjectLike = __webpack_require__(214);

        /** `Object#toString` result references. */
        var argsTag = "[object Arguments]";

        /**
         * The base implementation of `_.isArguments`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an `arguments` object,
         */
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }

        module.exports = baseIsArguments;

        /***/
      },
      /* 286 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(module) {
          var root = __webpack_require__(210),
            stubFalse = __webpack_require__(288);

          /** Detect free variable `exports`. */
          var freeExports =
            typeof exports == "object" &&
            exports &&
            !exports.nodeType &&
            exports;

          /** Detect free variable `module`. */
          var freeModule =
            freeExports &&
            typeof module == "object" &&
            module &&
            !module.nodeType &&
            module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Built-in value references. */
          var Buffer = moduleExports ? root.Buffer : undefined;

          /* Built-in method references for those with the same name as other `lodash` methods. */
          var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

          /**
           * Checks if `value` is a buffer.
           *
           * @static
           * @memberOf _
           * @since 4.3.0
           * @category Lang
           * @param {*} value The value to check.
           * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
           * @example
           *
           * _.isBuffer(new Buffer(2));
           * // => true
           *
           * _.isBuffer(new Uint8Array(2));
           * // => false
           */
          var isBuffer = nativeIsBuffer || stubFalse;

          module.exports = isBuffer;

          /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(287)(module)));

        /***/
      },
      /* 287 */
      /***/ function(module, exports) {
        module.exports = function(module) {
          if (!module.webpackPolyfill) {
            module.deprecate = function() {};
            module.paths = [];
            // module.parent = undefined by default
            module.children = [];
            module.webpackPolyfill = 1;
          }
          return module;
        };

        /***/
      },
      /* 288 */
      /***/ function(module, exports) {
        /**
         * This method returns `false`.
         *
         * @static
         * @memberOf _
         * @since 4.13.0
         * @category Util
         * @returns {boolean} Returns `false`.
         * @example
         *
         * _.times(2, _.stubFalse);
         * // => [false, false]
         */
        function stubFalse() {
          return false;
        }

        module.exports = stubFalse;

        /***/
      },
      /* 289 */
      /***/ function(module, exports) {
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /** Used to detect unsigned integer values. */
        var reIsUint = /^(?:0|[1-9]\d*)$/;

        /**
         * Checks if `value` is a valid array-like index.
         *
         * @private
         * @param {*} value The value to check.
         * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
         * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
         */
        function isIndex(value, length) {
          length = length == null ? MAX_SAFE_INTEGER : length;
          return (
            !!length &&
            (typeof value == "number" || reIsUint.test(value)) &&
            (value > -1 && value % 1 == 0 && value < length)
          );
        }

        module.exports = isIndex;

        /***/
      },
      /* 290 */
      /***/ function(module, exports, __webpack_require__) {
        var baseIsTypedArray = __webpack_require__(291),
          baseUnary = __webpack_require__(293),
          nodeUtil = __webpack_require__(294);

        /* Node.js helper references. */
        var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

        /**
         * Checks if `value` is classified as a typed array.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         * @example
         *
         * _.isTypedArray(new Uint8Array);
         * // => true
         *
         * _.isTypedArray([]);
         * // => false
         */
        var isTypedArray = nodeIsTypedArray
          ? baseUnary(nodeIsTypedArray)
          : baseIsTypedArray;

        module.exports = isTypedArray;

        /***/
      },
      /* 291 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGetTag = __webpack_require__(208),
          isLength = __webpack_require__(292),
          isObjectLike = __webpack_require__(214);

        /** `Object#toString` result references. */
        var argsTag = "[object Arguments]",
          arrayTag = "[object Array]",
          boolTag = "[object Boolean]",
          dateTag = "[object Date]",
          errorTag = "[object Error]",
          funcTag = "[object Function]",
          mapTag = "[object Map]",
          numberTag = "[object Number]",
          objectTag = "[object Object]",
          regexpTag = "[object RegExp]",
          setTag = "[object Set]",
          stringTag = "[object String]",
          weakMapTag = "[object WeakMap]";

        var arrayBufferTag = "[object ArrayBuffer]",
          dataViewTag = "[object DataView]",
          float32Tag = "[object Float32Array]",
          float64Tag = "[object Float64Array]",
          int8Tag = "[object Int8Array]",
          int16Tag = "[object Int16Array]",
          int32Tag = "[object Int32Array]",
          uint8Tag = "[object Uint8Array]",
          uint8ClampedTag = "[object Uint8ClampedArray]",
          uint16Tag = "[object Uint16Array]",
          uint32Tag = "[object Uint32Array]";

        /** Used to identify `toStringTag` values of typed arrays. */
        var typedArrayTags = {};
        typedArrayTags[float32Tag] = typedArrayTags[
          float64Tag
        ] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[
          int32Tag
        ] = typedArrayTags[uint8Tag] = typedArrayTags[
          uint8ClampedTag
        ] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
        typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[
          arrayBufferTag
        ] = typedArrayTags[boolTag] = typedArrayTags[
          dataViewTag
        ] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[
          funcTag
        ] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[
          objectTag
        ] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[
          stringTag
        ] = typedArrayTags[weakMapTag] = false;

        /**
         * The base implementation of `_.isTypedArray` without Node.js optimizations.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
         */
        function baseIsTypedArray(value) {
          return (
            isObjectLike(value) &&
            isLength(value.length) &&
            !!typedArrayTags[baseGetTag(value)]
          );
        }

        module.exports = baseIsTypedArray;

        /***/
      },
      /* 292 */
      /***/ function(module, exports) {
        /** Used as references for various `Number` constants. */
        var MAX_SAFE_INTEGER = 9007199254740991;

        /**
         * Checks if `value` is a valid array-like length.
         *
         * **Note:** This method is loosely based on
         * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
         * @example
         *
         * _.isLength(3);
         * // => true
         *
         * _.isLength(Number.MIN_VALUE);
         * // => false
         *
         * _.isLength(Infinity);
         * // => false
         *
         * _.isLength('3');
         * // => false
         */
        function isLength(value) {
          return (
            typeof value == "number" &&
            value > -1 &&
            value % 1 == 0 &&
            value <= MAX_SAFE_INTEGER
          );
        }

        module.exports = isLength;

        /***/
      },
      /* 293 */
      /***/ function(module, exports) {
        /**
         * The base implementation of `_.unary` without support for storing metadata.
         *
         * @private
         * @param {Function} func The function to cap arguments for.
         * @returns {Function} Returns the new capped function.
         */
        function baseUnary(func) {
          return function(value) {
            return func(value);
          };
        }

        module.exports = baseUnary;

        /***/
      },
      /* 294 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(module) {
          var freeGlobal = __webpack_require__(211);

          /** Detect free variable `exports`. */
          var freeExports =
            typeof exports == "object" &&
            exports &&
            !exports.nodeType &&
            exports;

          /** Detect free variable `module`. */
          var freeModule =
            freeExports &&
            typeof module == "object" &&
            module &&
            !module.nodeType &&
            module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Detect free variable `process` from Node.js. */
          var freeProcess = moduleExports && freeGlobal.process;

          /** Used to access faster Node.js helpers. */
          var nodeUtil = (function() {
            try {
              return (
                freeProcess &&
                freeProcess.binding &&
                freeProcess.binding("util")
              );
            } catch (e) {}
          })();

          module.exports = nodeUtil;

          /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(287)(module)));

        /***/
      },
      /* 295 */
      /***/ function(module, exports, __webpack_require__) {
        var isPrototype = __webpack_require__(296),
          nativeKeys = __webpack_require__(297);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result = [];
          for (var key in Object(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result.push(key);
            }
          }
          return result;
        }

        module.exports = baseKeys;

        /***/
      },
      /* 296 */
      /***/ function(module, exports) {
        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /**
         * Checks if `value` is likely a prototype object.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
         */
        function isPrototype(value) {
          var Ctor = value && value.constructor,
            proto =
              (typeof Ctor == "function" && Ctor.prototype) || objectProto;

          return value === proto;
        }

        module.exports = isPrototype;

        /***/
      },
      /* 297 */
      /***/ function(module, exports, __webpack_require__) {
        var overArg = __webpack_require__(298);

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeKeys = overArg(Object.keys, Object);

        module.exports = nativeKeys;

        /***/
      },
      /* 298 */
      /***/ function(module, exports) {
        /**
         * Creates a unary function that invokes `func` with its argument transformed.
         *
         * @private
         * @param {Function} func The function to wrap.
         * @param {Function} transform The argument transform.
         * @returns {Function} Returns the new function.
         */
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }

        module.exports = overArg;

        /***/
      },
      /* 299 */
      /***/ function(module, exports, __webpack_require__) {
        var isFunction = __webpack_require__(225),
          isLength = __webpack_require__(292);

        /**
         * Checks if `value` is array-like. A value is considered array-like if it's
         * not a function and has a `value.length` that's an integer greater than or
         * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
         * @example
         *
         * _.isArrayLike([1, 2, 3]);
         * // => true
         *
         * _.isArrayLike(document.body.children);
         * // => true
         *
         * _.isArrayLike('abc');
         * // => true
         *
         * _.isArrayLike(_.noop);
         * // => false
         */
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction(value);
        }

        module.exports = isArrayLike;

        /***/
      },
      /* 300 */
      /***/ function(module, exports, __webpack_require__) {
        var DataView = __webpack_require__(301),
          Map = __webpack_require__(243),
          Promise = __webpack_require__(302),
          Set = __webpack_require__(303),
          WeakMap = __webpack_require__(304),
          baseGetTag = __webpack_require__(208),
          toSource = __webpack_require__(229);

        /** `Object#toString` result references. */
        var mapTag = "[object Map]",
          objectTag = "[object Object]",
          promiseTag = "[object Promise]",
          setTag = "[object Set]",
          weakMapTag = "[object WeakMap]";

        var dataViewTag = "[object DataView]";

        /** Used to detect maps, sets, and weakmaps. */
        var dataViewCtorString = toSource(DataView),
          mapCtorString = toSource(Map),
          promiseCtorString = toSource(Promise),
          setCtorString = toSource(Set),
          weakMapCtorString = toSource(WeakMap);

        /**
         * Gets the `toStringTag` of `value`.
         *
         * @private
         * @param {*} value The value to query.
         * @returns {string} Returns the `toStringTag`.
         */
        var getTag = baseGetTag;

        // Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
        if (
          (DataView &&
            getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
          (Map && getTag(new Map()) != mapTag) ||
          (Promise && getTag(Promise.resolve()) != promiseTag) ||
          (Set && getTag(new Set()) != setTag) ||
          (WeakMap && getTag(new WeakMap()) != weakMapTag)
        ) {
          getTag = function(value) {
            var result = baseGetTag(value),
              Ctor = result == objectTag ? value.constructor : undefined,
              ctorString = Ctor ? toSource(Ctor) : "";

            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result;
          };
        }

        module.exports = getTag;

        /***/
      },
      /* 301 */
      /***/ function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(223),
          root = __webpack_require__(210);

        /* Built-in method references that are verified to be native. */
        var DataView = getNative(root, "DataView");

        module.exports = DataView;

        /***/
      },
      /* 302 */
      /***/ function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(223),
          root = __webpack_require__(210);

        /* Built-in method references that are verified to be native. */
        var Promise = getNative(root, "Promise");

        module.exports = Promise;

        /***/
      },
      /* 303 */
      /***/ function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(223),
          root = __webpack_require__(210);

        /* Built-in method references that are verified to be native. */
        var Set = getNative(root, "Set");

        module.exports = Set;

        /***/
      },
      /* 304 */
      /***/ function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(223),
          root = __webpack_require__(210);

        /* Built-in method references that are verified to be native. */
        var WeakMap = getNative(root, "WeakMap");

        module.exports = WeakMap;

        /***/
      },
      /* 305 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _toPath2 = __webpack_require__(203);

        var _toPath3 = _interopRequireDefault(_toPath2);

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        var deleteInWithPath = function deleteInWithPath(state, first) {
          for (
            var _len = arguments.length,
              rest = Array(_len > 2 ? _len - 2 : 0),
              _key = 2;
            _key < _len;
            _key++
          ) {
            rest[_key - 2] = arguments[_key];
          }

          if (state === undefined || first === undefined) {
            return state;
          }
          if (rest.length) {
            if (Array.isArray(state)) {
              if (first < state.length) {
                var result = deleteInWithPath.apply(
                  undefined,
                  [state && state[first]].concat(rest)
                );
                if (result !== state[first]) {
                  var copy = [].concat(_toConsumableArray(state));
                  copy[first] = result;
                  return copy;
                }
              }
              return state;
            }
            if (first in state) {
              var _result = deleteInWithPath.apply(
                undefined,
                [state && state[first]].concat(rest)
              );
              return state[first] === _result
                ? state
                : _extends({}, state, _defineProperty({}, first, _result));
            }
            return state;
          }
          if (Array.isArray(state)) {
            if (isNaN(first)) {
              throw new Error(
                "Cannot delete non-numerical index from an array"
              );
            }
            if (first < state.length) {
              var _copy = [].concat(_toConsumableArray(state));
              _copy.splice(first, 1);
              return _copy;
            }
            return state;
          }
          if (first in state) {
            var _copy2 = _extends({}, state);
            delete _copy2[first];
            return _copy2;
          }
          return state;
        };

        var deleteIn = function deleteIn(state, field) {
          return deleteInWithPath.apply(
            undefined,
            [state].concat(_toConsumableArray((0, _toPath3.default)(field)))
          );
        };

        exports.default = deleteIn;

        /***/
      },
      /* 306 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var keys = function keys(value) {
          if (!value) {
            return [];
          }

          if (Array.isArray(value)) {
            return value.map(function(i) {
              return i.name;
            });
          }

          return Object.keys(value);
        };

        exports.default = keys;

        /***/
      },
      /* 307 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isEqualWith2 = __webpack_require__(255);

        var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var customizer = function customizer(
          objectValue,
          otherValue,
          indexOrkey,
          object,
          other,
          stack
        ) {
          // https://lodash.com/docs/4.17.4#isEqualWith
          if (stack) {
            // Shallow compares
            // For 1st level, stack === undefined.
            //   -> Do nothing (and implicitly return undefined so that it goes to compare 2nd level)
            // For 2nd level and up, stack !== undefined.
            //   -> Compare by === operator
            return objectValue === otherValue;
          }
        };

        var shallowCompare = function shallowCompare(
          instance,
          nextProps,
          nextState
        ) {
          return (
            !(0, _isEqualWith3.default)(
              instance.props,
              nextProps,
              customizer
            ) ||
            !(0, _isEqualWith3.default)(instance.state, nextState, customizer)
          );
        };

        exports.default = shallowCompare;

        /***/
      },
      /* 308 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _toPath2 = __webpack_require__(203);

        var _toPath3 = _interopRequireDefault(_toPath2);

        var _immutable = __webpack_require__(14);

        var _deepEqual = __webpack_require__(309);

        var _deepEqual2 = _interopRequireDefault(_deepEqual);

        var _keys = __webpack_require__(310);

        var _keys2 = _interopRequireDefault(_keys);

        var _setIn = __webpack_require__(311);

        var _setIn2 = _interopRequireDefault(_setIn);

        var _splice = __webpack_require__(312);

        var _splice2 = _interopRequireDefault(_splice);

        var _getIn = __webpack_require__(202);

        var _getIn2 = _interopRequireDefault(_getIn);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var emptyList = (0, _immutable.List)();

        var structure = {
          allowsArrayErrors: false,
          empty: (0, _immutable.Map)(),
          emptyList: emptyList,
          getIn: function getIn(state, field) {
            return _immutable.Iterable.isIterable(state)
              ? state.getIn((0, _toPath3.default)(field))
              : (0, _getIn2.default)(state, field);
          },
          setIn: _setIn2.default,
          deepEqual: _deepEqual2.default,
          deleteIn: function deleteIn(state, field) {
            return state.deleteIn((0, _toPath3.default)(field));
          },
          fromJS: function fromJS(jsValue) {
            return (0, _immutable.fromJS)(jsValue, function(key, value) {
              return _immutable.Iterable.isIndexed(value)
                ? value.toList()
                : value.toMap();
            });
          },
          keys: _keys2.default,
          size: function size(list) {
            return list ? list.size : 0;
          },
          splice: _splice2.default,
          toJS: function toJS(value) {
            return _immutable.Iterable.isIterable(value) ? value.toJS() : value;
          }
        };

        exports.default = structure;

        /***/
      },
      /* 309 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isEqualWith2 = __webpack_require__(255);

        var _isEqualWith3 = _interopRequireDefault(_isEqualWith2);

        var _immutable = __webpack_require__(14);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var customizer = function customizer(obj, other) {
          if (obj == other) return true; // eslint-disable-line eqeqeq
          if (
            (obj == null || obj === "" || obj === false) &&
            (other == null || other === "" || other === false)
          )
            return true;

          if (
            _immutable.Iterable.isIterable(obj) &&
            _immutable.Iterable.isIterable(other)
          ) {
            return (
              obj.count() === other.count() &&
              obj.every(function(value, key) {
                return (
                  other.has(key) &&
                  (0, _isEqualWith3.default)(value, other.get(key), customizer)
                );
              })
            );
          }

          return void 0;
        };

        var deepEqual = function deepEqual(a, b) {
          return (0, _isEqualWith3.default)(a, b, customizer);
        };

        exports.default = deepEqual;

        /***/
      },
      /* 310 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _immutable = __webpack_require__(14);

        var _keys = __webpack_require__(306);

        var _keys2 = _interopRequireDefault(_keys);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var empty = (0, _immutable.List)();

        var keys = function keys(value) {
          if (_immutable.List.isList(value)) {
            return value.map(function(i) {
              return i.name;
            });
          }

          if (_immutable.Iterable.isIterable(value)) {
            return value.keySeq();
          }

          return value
            ? (0, _immutable.List)((0, _keys2.default)(value))
            : empty;
        };

        exports.default = keys;

        /***/
      },
      /* 311 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _toPath2 = __webpack_require__(203);

        var _toPath3 = _interopRequireDefault(_toPath2);

        exports.default = setIn;

        var _immutable = __webpack_require__(14);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var arrayPattern = /\[(\d+)\]/;

        var undefinedArrayMerge = function undefinedArrayMerge(previous, next) {
          return next !== undefined ? next : previous;
        };

        var mergeLists = function mergeLists(original, value) {
          return original && _immutable.List.isList(original)
            ? original.mergeDeepWith(undefinedArrayMerge, value)
            : value;
        };

        /*
	 * ImmutableJS' setIn function doesn't support array (List) creation
	 * so we must pre-insert all arrays in the path ahead of time.
	 * 
	 * Additionally we must also pre-set a dummy Map at the location
	 * of an array index if there's parts that come afterwards because 
	 * the setIn function uses `{}` to mark an unset value instead of 
	 * undefined (which is the case for list / arrays).
	 */
        function setIn(state, field, value) {
          var path = (0, _toPath3.default)(field);
          if (
            !field ||
            typeof field !== "string" ||
            !arrayPattern.test(field)
          ) {
            return state.setIn(path, value);
          }

          return state.withMutations(function(mutable) {
            var _loop = function _loop(pathIndex) {
              var nextPart = path[pathIndex + 1];
              if (isNaN(nextPart)) {
                return "continue";
              }

              var arr = [];
              arr[nextPart] = new _immutable.Map();
              mutable = mutable.updateIn(path.slice(0, pathIndex + 1), function(
                value
              ) {
                return mergeLists(value, new _immutable.List(arr));
              });
            };

            for (var pathIndex = 0; pathIndex < path.length - 1; ++pathIndex) {
              var _ret = _loop(pathIndex);

              if (_ret === "continue") continue;
            }

            return mutable.setIn(path, value);
          });
        }

        /***/
      },
      /* 312 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _immutable = __webpack_require__(14);

        exports.default = function(list, index, removeNum, value) {
          list = _immutable.List.isList(list) ? list : (0, _immutable.List)();

          if (index < list.count()) {
            if (value === undefined && !removeNum) {
              // inserting undefined
              // first insert null and then re-set it to undefined
              return list.splice(index, 0, null).set(index, undefined);
            }
            if (value != null) {
              return list.splice(
                index,
                removeNum,
                value // removing and adding
              );
            } else {
              return list.splice(
                index,
                removeNum // removing
              );
            }
          }
          if (removeNum) {
            // trying to remove non-existant item: return original array
            return list;
          }
          // trying to add outside of range: just set value
          return list.set(index, value);
        };

        /***/
      },
      /* 313 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createFields = __webpack_require__(314);

        var _createFields2 = _interopRequireDefault(_createFields);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createFields2.default)(_immutable2.default);

        /***/
      },
      /* 314 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _invariant = __webpack_require__(192);

        var _invariant2 = _interopRequireDefault(_invariant);

        var _ConnectedFields = __webpack_require__(315);

        var _ConnectedFields2 = _interopRequireDefault(_ConnectedFields);

        var _shallowCompare = __webpack_require__(307);

        var _shallowCompare2 = _interopRequireDefault(_shallowCompare);

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        var _prefixName = __webpack_require__(186);

        var _prefixName2 = _interopRequireDefault(_prefixName);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var validateNameProp = function validateNameProp(prop) {
          if (!prop) {
            return new Error('No "names" prop was specified <Fields/>');
          }
          if (!Array.isArray(prop) && !prop._isFieldArray) {
            return new Error(
              'Invalid prop "names" supplied to <Fields/>. Must be either an array of strings or the fields array generated by FieldArray.'
            );
          }
        };

        var createFields = function createFields(_ref) {
          var deepEqual = _ref.deepEqual,
            getIn = _ref.getIn,
            toJS = _ref.toJS,
            size = _ref.size;

          var ConnectedFields = (0, _ConnectedFields2.default)({
            deepEqual: deepEqual,
            getIn: getIn,
            toJS: toJS,
            size: size
          });

          var Fields = (function(_Component) {
            _inherits(Fields, _Component);

            function Fields(props, context) {
              _classCallCheck(this, Fields);

              var _this = _possibleConstructorReturn(
                this,
                (Fields.__proto__ || Object.getPrototypeOf(Fields)).call(
                  this,
                  props,
                  context
                )
              );

              if (!context._reduxForm) {
                throw new Error(
                  "Fields must be inside a component decorated with reduxForm()"
                );
              }
              return _this;
            }

            _createClass(Fields, [
              {
                key: "shouldComponentUpdate",
                value: function shouldComponentUpdate(nextProps, nextState) {
                  return (0, _shallowCompare2.default)(
                    this,
                    nextProps,
                    nextState
                  );
                }
              },
              {
                key: "componentWillMount",
                value: function componentWillMount() {
                  var error = validateNameProp(this.props.names);
                  if (error) {
                    throw error;
                  }
                  var context = this.context;
                  var register = context._reduxForm.register;

                  this.names.forEach(function(name) {
                    return register(name, "Field");
                  });
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps) {
                  if (
                    !_plain2.default.deepEqual(
                      this.props.names,
                      nextProps.names
                    )
                  ) {
                    var context = this.context;
                    var _context$_reduxForm = context._reduxForm,
                      register = _context$_reduxForm.register,
                      unregister = _context$_reduxForm.unregister;
                    // unregister old name

                    this.props.names.forEach(
                      function(name) {
                        return unregister(
                          (0, _prefixName2.default)(context, name)
                        );
                      }
                      // register new name
                    );
                    nextProps.names.forEach(function(name) {
                      return register(
                        (0, _prefixName2.default)(context, name),
                        "Field"
                      );
                    });
                  }
                }
              },
              {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                  var context = this.context;
                  var unregister = context._reduxForm.unregister;

                  this.props.names.forEach(function(name) {
                    return unregister((0, _prefixName2.default)(context, name));
                  });
                }
              },
              {
                key: "getRenderedComponent",
                value: function getRenderedComponent() {
                  (0, _invariant2.default)(
                    this.props.withRef,
                    "If you want to access getRenderedComponent(), " +
                      "you must specify a withRef prop to Fields"
                  );
                  return this.refs.connected
                    .getWrappedInstance()
                    .getRenderedComponent();
                }
              },
              {
                key: "render",
                value: function render() {
                  var context = this.context;

                  return (0, _react.createElement)(
                    ConnectedFields,
                    _extends({}, this.props, {
                      names: this.props.names.map(function(name) {
                        return (0, _prefixName2.default)(context, name);
                      }),
                      _reduxForm: this.context._reduxForm,
                      ref: "connected"
                    })
                  );
                }
              },
              {
                key: "names",
                get: function get() {
                  var context = this.context;

                  return this.props.names.map(function(name) {
                    return (0, _prefixName2.default)(context, name);
                  });
                }
              },
              {
                key: "dirty",
                get: function get() {
                  return this.refs.connected.getWrappedInstance().isDirty();
                }
              },
              {
                key: "pristine",
                get: function get() {
                  return !this.dirty;
                }
              },
              {
                key: "values",
                get: function get() {
                  return (
                    this.refs.connected &&
                    this.refs.connected.getWrappedInstance().getValues()
                  );
                }
              }
            ]);

            return Fields;
          })(_react.Component);

          Fields.propTypes = {
            names: function names(props, propName) {
              return validateNameProp(props[propName]);
            },
            component: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.string
            ]).isRequired,
            format: _propTypes2.default.func,
            parse: _propTypes2.default.func,
            props: _propTypes2.default.object,
            withRef: _propTypes2.default.bool
          };
          Fields.contextTypes = {
            _reduxForm: _propTypes2.default.object
          };

          return Fields;
        };

        exports.default = createFields;

        /***/
      },
      /* 315 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _reactRedux = __webpack_require__(9);

        var _createFieldProps2 = __webpack_require__(194);

        var _createFieldProps3 = _interopRequireDefault(_createFieldProps2);

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        var _onChangeValue = __webpack_require__(195);

        var _onChangeValue2 = _interopRequireDefault(_onChangeValue);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var propsToNotUpdateFor = ["_reduxForm"];

        var createConnectedFields = function createConnectedFields(_ref) {
          var deepEqual = _ref.deepEqual,
            getIn = _ref.getIn,
            toJS = _ref.toJS,
            size = _ref.size;

          var getSyncError = function getSyncError(syncErrors, name) {
            // Because the error for this field might not be at a level in the error structure where
            // it can be set directly, it might need to be unwrapped from the _error property
            return (
              _plain2.default.getIn(syncErrors, name + "._error") ||
              _plain2.default.getIn(syncErrors, name)
            );
          };

          var getSyncWarning = function getSyncWarning(syncWarnings, name) {
            var warning = getIn(
              syncWarnings,
              name
              // Because the warning for this field might not be at a level in the warning structure where
              // it can be set directly, it might need to be unwrapped from the _warning property
            );
            return warning && warning._warning ? warning._warning : warning;
          };

          var ConnectedFields = (function(_Component) {
            _inherits(ConnectedFields, _Component);

            function ConnectedFields(props) {
              _classCallCheck(this, ConnectedFields);

              var _this = _possibleConstructorReturn(
                this,
                (
                  ConnectedFields.__proto__ ||
                  Object.getPrototypeOf(ConnectedFields)
                ).call(this, props)
              );

              _this.handleChange = _this.handleChange.bind(_this);
              _this.handleFocus = _this.handleFocus.bind(_this);
              _this.handleBlur = _this.handleBlur.bind(_this);

              _this.onChangeFns = props.names.reduce(function(acc, name) {
                acc[name] = function(event) {
                  return _this.handleChange(name, event);
                };
                return acc;
              }, {});

              _this.onFocusFns = props.names.reduce(function(acc, name) {
                acc[name] = function() {
                  return _this.handleFocus(name);
                };
                return acc;
              }, {});

              _this.onBlurFns = props.names.reduce(function(acc, name) {
                acc[name] = function(event) {
                  return _this.handleBlur(name, event);
                };
                return acc;
              }, {});
              return _this;
            }

            _createClass(ConnectedFields, [
              {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps) {
                  var _this2 = this;

                  if (
                    this.props.names !== nextProps.names &&
                    (size(this.props.names) !== size(nextProps.names) ||
                      nextProps.names.some(function(nextName) {
                        return !_this2.props._fields[nextName];
                      }))
                  ) {
                    // names is changed. The cached event handlers need to be updated
                    this.onChangeFns = nextProps.names.reduce(function(
                      acc,
                      name
                    ) {
                      acc[name] = function(event) {
                        return _this2.handleChange(name, event);
                      };
                      return acc;
                    },
                    {});

                    this.onFocusFns = nextProps.names.reduce(function(
                      acc,
                      name
                    ) {
                      acc[name] = function() {
                        return _this2.handleFocus(name);
                      };
                      return acc;
                    },
                    {});

                    this.onBlurFns = nextProps.names.reduce(function(
                      acc,
                      name
                    ) {
                      acc[name] = function(event) {
                        return _this2.handleBlur(name, event);
                      };
                      return acc;
                    },
                    {});
                  }
                }
              },
              {
                key: "shouldComponentUpdate",
                value: function shouldComponentUpdate(nextProps) {
                  var _this3 = this;

                  var nextPropsKeys = Object.keys(nextProps);
                  var thisPropsKeys = Object.keys(this.props);
                  return (
                    nextPropsKeys.length !== thisPropsKeys.length ||
                    nextPropsKeys.some(function(prop) {
                      return (
                        !~propsToNotUpdateFor.indexOf(prop) &&
                        !deepEqual(_this3.props[prop], nextProps[prop])
                      );
                    })
                  );
                }
              },
              {
                key: "isDirty",
                value: function isDirty() {
                  var _fields = this.props._fields;

                  return Object.keys(_fields).some(function(name) {
                    return _fields[name].dirty;
                  });
                }
              },
              {
                key: "getValues",
                value: function getValues() {
                  var _fields = this.props._fields;

                  return Object.keys(_fields).reduce(function(
                    accumulator,
                    name
                  ) {
                    return _plain2.default.setIn(
                      accumulator,
                      name,
                      _fields[name].value
                    );
                  },
                  {});
                }
              },
              {
                key: "getRenderedComponent",
                value: function getRenderedComponent() {
                  return this.refs.renderedComponent;
                }
              },
              {
                key: "handleChange",
                value: function handleChange(name, event) {
                  var _props = this.props,
                    dispatch = _props.dispatch,
                    parse = _props.parse,
                    normalize = _props.normalize,
                    _reduxForm = _props._reduxForm;

                  var value = (0, _onChangeValue2.default)(event, {
                    name: name,
                    parse: parse,
                    normalize: normalize
                  });

                  dispatch(_reduxForm.change(name, value));
                }
              },
              {
                key: "handleFocus",
                value: function handleFocus(name) {
                  var _props2 = this.props,
                    dispatch = _props2.dispatch,
                    _reduxForm = _props2._reduxForm;

                  dispatch(_reduxForm.focus(name));
                }
              },
              {
                key: "handleBlur",
                value: function handleBlur(name, event) {
                  var _props3 = this.props,
                    dispatch = _props3.dispatch,
                    parse = _props3.parse,
                    normalize = _props3.normalize,
                    _reduxForm = _props3._reduxForm;

                  var value = (0, _onChangeValue2.default)(
                    event,
                    { name: name, parse: parse, normalize: normalize }

                    // dispatch blur action
                  );
                  dispatch(
                    _reduxForm.blur(name, value)

                    // call post-blur callback
                  );
                  if (_reduxForm.asyncValidate) {
                    _reduxForm.asyncValidate(name, value);
                  }
                }
              },
              {
                key: "render",
                value: function render() {
                  var _this4 = this;

                  var _props4 = this.props,
                    component = _props4.component,
                    withRef = _props4.withRef,
                    _fields = _props4._fields,
                    _reduxForm = _props4._reduxForm,
                    rest = _objectWithoutProperties(_props4, [
                      "component",
                      "withRef",
                      "_fields",
                      "_reduxForm"
                    ]);

                  var sectionPrefix = _reduxForm.sectionPrefix,
                    form = _reduxForm.form;

                  var _Object$keys$reduce = Object.keys(_fields).reduce(
                      function(accumulator, name) {
                        var connectedProps = _fields[name];

                        var _createFieldProps = (0, _createFieldProps3.default)(
                            { getIn: getIn, toJS: toJS },
                            name,
                            _extends({}, connectedProps, rest, {
                              form: form,
                              onBlur: _this4.onBlurFns[name],
                              onChange: _this4.onChangeFns[name],
                              onFocus: _this4.onFocusFns[name]
                            })
                          ),
                          custom = _createFieldProps.custom,
                          fieldProps = _objectWithoutProperties(
                            _createFieldProps,
                            ["custom"]
                          );

                        accumulator.custom = custom;
                        var fieldName = sectionPrefix
                          ? name.replace(sectionPrefix + ".", "")
                          : name;
                        return _plain2.default.setIn(
                          accumulator,
                          fieldName,
                          fieldProps
                        );
                      },
                      {}
                    ),
                    custom = _Object$keys$reduce.custom,
                    props = _objectWithoutProperties(_Object$keys$reduce, [
                      "custom"
                    ]);

                  if (withRef) {
                    props.ref = "renderedComponent";
                  }

                  return (0, _react.createElement)(
                    component,
                    _extends({}, props, custom)
                  );
                }
              }
            ]);

            return ConnectedFields;
          })(_react.Component);

          ConnectedFields.propTypes = {
            component: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.string
            ]).isRequired,
            _fields: _propTypes2.default.object.isRequired,
            props: _propTypes2.default.object
          };

          var connector = (0, _reactRedux.connect)(
            function(state, ownProps) {
              var names = ownProps.names,
                _ownProps$_reduxForm = ownProps._reduxForm,
                initialValues = _ownProps$_reduxForm.initialValues,
                getFormState = _ownProps$_reduxForm.getFormState;

              var formState = getFormState(state);
              return {
                _fields: names.reduce(function(accumulator, name) {
                  var initialState = getIn(formState, "initial." + name);
                  var initial =
                    initialState !== undefined
                      ? initialState
                      : initialValues && getIn(initialValues, name);
                  var value = getIn(formState, "values." + name);
                  var syncError = getSyncError(
                    getIn(formState, "syncErrors"),
                    name
                  );
                  var syncWarning = getSyncWarning(
                    getIn(formState, "syncWarnings"),
                    name
                  );
                  var submitting = getIn(formState, "submitting");
                  var pristine = value === initial;
                  accumulator[name] = {
                    asyncError: getIn(formState, "asyncErrors." + name),
                    asyncValidating:
                      getIn(formState, "asyncValidating") === name,
                    dirty: !pristine,
                    pristine: pristine,
                    state: getIn(formState, "fields." + name),
                    submitError: getIn(formState, "submitErrors." + name),
                    submitFailed: getIn(formState, "submitFailed"),
                    submitting: submitting,
                    syncError: syncError,
                    syncWarning: syncWarning,
                    value: value,
                    _value: ownProps.value // save value passed in (for checkboxes)
                  };
                  return accumulator;
                }, {})
              };
            },
            undefined,
            undefined,
            { withRef: true }
          );
          return connector(ConnectedFields);
        };

        exports.default = createConnectedFields;

        /***/
      },
      /* 316 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createFieldArray = __webpack_require__(317);

        var _createFieldArray2 = _interopRequireDefault(_createFieldArray);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createFieldArray2.default)(_immutable2.default);

        /***/
      },
      /* 317 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _invariant = __webpack_require__(192);

        var _invariant2 = _interopRequireDefault(_invariant);

        var _ConnectedFieldArray = __webpack_require__(318);

        var _ConnectedFieldArray2 = _interopRequireDefault(
          _ConnectedFieldArray
        );

        var _prefixName = __webpack_require__(186);

        var _prefixName2 = _interopRequireDefault(_prefixName);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var toArray = function toArray(value) {
          return Array.isArray(value) ? value : [value];
        };

        var wrapError = function wrapError(fn, key) {
          return (
            fn &&
            function() {
              var validators = toArray(fn);
              for (var i = 0; i < validators.length; i++) {
                var result = validators[i].apply(validators, arguments);
                if (result) {
                  return _defineProperty({}, key, result);
                }
              }
            }
          );
        };

        var createFieldArray = function createFieldArray(_ref2) {
          var deepEqual = _ref2.deepEqual,
            getIn = _ref2.getIn,
            size = _ref2.size;

          var ConnectedFieldArray = (0, _ConnectedFieldArray2.default)({
            deepEqual: deepEqual,
            getIn: getIn,
            size: size
          });

          var FieldArray = (function(_Component) {
            _inherits(FieldArray, _Component);

            function FieldArray(props, context) {
              _classCallCheck(this, FieldArray);

              var _this = _possibleConstructorReturn(
                this,
                (
                  FieldArray.__proto__ || Object.getPrototypeOf(FieldArray)
                ).call(this, props, context)
              );

              if (!context._reduxForm) {
                throw new Error(
                  "FieldArray must be inside a component decorated with reduxForm()"
                );
              }
              return _this;
            }

            _createClass(FieldArray, [
              {
                key: "componentWillMount",
                value: function componentWillMount() {
                  var _this2 = this;

                  this.context._reduxForm.register(
                    this.name,
                    "FieldArray",
                    function() {
                      return wrapError(_this2.props.validate, "_error");
                    },
                    function() {
                      return wrapError(_this2.props.warn, "_warning");
                    }
                  );
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function componentWillReceiveProps(nextProps) {
                  if (this.props.name !== nextProps.name) {
                    // unregister old name
                    this.context._reduxForm.unregister(
                      this.name
                      // register new name
                    );
                    this.context._reduxForm.register(
                      (0, _prefixName2.default)(this.context, nextProps.name),
                      "FieldArray"
                    );
                  }
                }
              },
              {
                key: "componentWillUnmount",
                value: function componentWillUnmount() {
                  this.context._reduxForm.unregister(this.name);
                }
              },
              {
                key: "getRenderedComponent",
                value: function getRenderedComponent() {
                  (0, _invariant2.default)(
                    this.props.withRef,
                    "If you want to access getRenderedComponent(), " +
                      "you must specify a withRef prop to FieldArray"
                  );
                  return this.refs.connected
                    .getWrappedInstance()
                    .getRenderedComponent();
                }
              },
              {
                key: "render",
                value: function render() {
                  return (0, _react.createElement)(
                    ConnectedFieldArray,
                    _extends({}, this.props, {
                      name: this.name,
                      syncError: this.syncError,
                      syncWarning: this.syncWarning,
                      _reduxForm: this.context._reduxForm,
                      ref: "connected"
                    })
                  );
                }
              },
              {
                key: "name",
                get: function get() {
                  return (0, _prefixName2.default)(
                    this.context,
                    this.props.name
                  );
                }
              },
              {
                key: "dirty",
                get: function get() {
                  return this.refs.connected.getWrappedInstance().dirty;
                }
              },
              {
                key: "pristine",
                get: function get() {
                  return this.refs.connected.getWrappedInstance().pristine;
                }
              },
              {
                key: "value",
                get: function get() {
                  return this.refs.connected.getWrappedInstance().value;
                }
              }
            ]);

            return FieldArray;
          })(_react.Component);

          FieldArray.propTypes = {
            name: _propTypes2.default.string.isRequired,
            component: _propTypes2.default.func.isRequired,
            props: _propTypes2.default.object,
            validate: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.arrayOf(_propTypes2.default.func)
            ]),
            warn: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.arrayOf(_propTypes2.default.func)
            ]),
            withRef: _propTypes2.default.bool
          };
          FieldArray.contextTypes = {
            _reduxForm: _propTypes2.default.object
          };

          return FieldArray;
        };

        exports.default = createFieldArray;

        /***/
      },
      /* 318 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _mapValues2 = __webpack_require__(319);

        var _mapValues3 = _interopRequireDefault(_mapValues2);

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _reactRedux = __webpack_require__(9);

        var _redux = __webpack_require__(343);

        var _createFieldArrayProps = __webpack_require__(344);

        var _createFieldArrayProps2 = _interopRequireDefault(
          _createFieldArrayProps
        );

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var propsToNotUpdateFor = ["_reduxForm", "value"];

        var createConnectedFieldArray = function createConnectedFieldArray(
          _ref
        ) {
          var deepEqual = _ref.deepEqual,
            getIn = _ref.getIn,
            size = _ref.size;

          var getSyncError = function getSyncError(syncErrors, name) {
            // For an array, the error can _ONLY_ be under _error.
            // This is why this getSyncError is not the same as the
            // one in Field.
            return _plain2.default.getIn(syncErrors, name + "._error");
          };

          var getSyncWarning = function getSyncWarning(syncWarnings, name) {
            // For an array, the warning can _ONLY_ be under _warning.
            // This is why this getSyncError is not the same as the
            // one in Field.
            return getIn(syncWarnings, name + "._warning");
          };

          var ConnectedFieldArray = (function(_Component) {
            _inherits(ConnectedFieldArray, _Component);

            function ConnectedFieldArray() {
              _classCallCheck(this, ConnectedFieldArray);

              var _this = _possibleConstructorReturn(
                this,
                (
                  ConnectedFieldArray.__proto__ ||
                  Object.getPrototypeOf(ConnectedFieldArray)
                ).call(this)
              );

              _this.getValue = _this.getValue.bind(_this);
              return _this;
            }

            _createClass(ConnectedFieldArray, [
              {
                key: "shouldComponentUpdate",
                value: function shouldComponentUpdate(nextProps) {
                  var _this2 = this;

                  // Update if the elements of the value array was updated.
                  var thisValue = this.props.value;
                  var nextValue = nextProps.value;

                  if (thisValue && nextValue) {
                    if (
                      thisValue.length !== nextValue.length ||
                      (nextProps.rerenderOnEveryChange &&
                        thisValue.some(function(val) {
                          return nextValue.every(function(next) {
                            return !deepEqual(val, next);
                          });
                        }))
                    ) {
                      return true;
                    }
                  }

                  var nextPropsKeys = Object.keys(nextProps);
                  var thisPropsKeys = Object.keys(this.props);
                  return (
                    nextPropsKeys.length !== thisPropsKeys.length ||
                    nextPropsKeys.some(function(prop) {
                      // useful to debug rerenders
                      // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
                      //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
                      // }
                      return (
                        !~propsToNotUpdateFor.indexOf(prop) &&
                        !deepEqual(_this2.props[prop], nextProps[prop])
                      );
                    })
                  );
                }
              },
              {
                key: "getRenderedComponent",
                value: function getRenderedComponent() {
                  return this.refs.renderedComponent;
                }
              },
              {
                key: "getValue",
                value: function getValue(index) {
                  return this.props.value && getIn(this.props.value, index);
                }
              },
              {
                key: "render",
                value: function render() {
                  var _props = this.props,
                    component = _props.component,
                    withRef = _props.withRef,
                    name = _props.name,
                    _reduxForm = _props._reduxForm,
                    validate = _props.validate,
                    warn = _props.warn,
                    rerenderOnEveryChange = _props.rerenderOnEveryChange,
                    rest = _objectWithoutProperties(_props, [
                      "component",
                      "withRef",
                      "name",
                      "_reduxForm",
                      "validate",
                      "warn",
                      "rerenderOnEveryChange"
                    ]);

                  var props = (0, _createFieldArrayProps2.default)(
                    getIn,
                    name,
                    _reduxForm.form,
                    _reduxForm.sectionPrefix,
                    this.getValue,
                    rest
                  );
                  if (withRef) {
                    props.ref = "renderedComponent";
                  }
                  return (0, _react.createElement)(component, props);
                }
              },
              {
                key: "dirty",
                get: function get() {
                  return this.props.dirty;
                }
              },
              {
                key: "pristine",
                get: function get() {
                  return this.props.pristine;
                }
              },
              {
                key: "value",
                get: function get() {
                  return this.props.value;
                }
              }
            ]);

            return ConnectedFieldArray;
          })(_react.Component);

          ConnectedFieldArray.propTypes = {
            component: _propTypes2.default.oneOfType([
              _propTypes2.default.func,
              _propTypes2.default.string
            ]).isRequired,
            props: _propTypes2.default.object,
            rerenderOnEveryChange: _propTypes2.default.bool
          };

          ConnectedFieldArray.defaultProps = {
            rerenderOnEveryChange: false
          };

          ConnectedFieldArray.contextTypes = {
            _reduxForm: _propTypes2.default.object
          };

          var connector = (0, _reactRedux.connect)(
            function(state, ownProps) {
              var name = ownProps.name,
                _ownProps$_reduxForm = ownProps._reduxForm,
                initialValues = _ownProps$_reduxForm.initialValues,
                getFormState = _ownProps$_reduxForm.getFormState;

              var formState = getFormState(state);
              var initial =
                getIn(formState, "initial." + name) ||
                (initialValues && getIn(initialValues, name));
              var value = getIn(formState, "values." + name);
              var submitting = getIn(formState, "submitting");
              var syncError = getSyncError(
                getIn(formState, "syncErrors"),
                name
              );
              var syncWarning = getSyncWarning(
                getIn(formState, "syncWarnings"),
                name
              );
              var pristine = deepEqual(value, initial);
              return {
                asyncError: getIn(formState, "asyncErrors." + name + "._error"),
                dirty: !pristine,
                pristine: pristine,
                state: getIn(formState, "fields." + name),
                submitError: getIn(
                  formState,
                  "submitErrors." + name + "._error"
                ),
                submitFailed: getIn(formState, "submitFailed"),
                submitting: submitting,
                syncError: syncError,
                syncWarning: syncWarning,
                value: value,
                length: size(value)
              };
            },
            function(dispatch, ownProps) {
              var name = ownProps.name,
                _reduxForm = ownProps._reduxForm;
              var arrayInsert = _reduxForm.arrayInsert,
                arrayMove = _reduxForm.arrayMove,
                arrayPop = _reduxForm.arrayPop,
                arrayPush = _reduxForm.arrayPush,
                arrayRemove = _reduxForm.arrayRemove,
                arrayRemoveAll = _reduxForm.arrayRemoveAll,
                arrayShift = _reduxForm.arrayShift,
                arraySplice = _reduxForm.arraySplice,
                arraySwap = _reduxForm.arraySwap,
                arrayUnshift = _reduxForm.arrayUnshift;

              return (0, _mapValues3.default)(
                {
                  arrayInsert: arrayInsert,
                  arrayMove: arrayMove,
                  arrayPop: arrayPop,
                  arrayPush: arrayPush,
                  arrayRemove: arrayRemove,
                  arrayRemoveAll: arrayRemoveAll,
                  arrayShift: arrayShift,
                  arraySplice: arraySplice,
                  arraySwap: arraySwap,
                  arrayUnshift: arrayUnshift
                },
                function(actionCreator) {
                  return (0, _redux.bindActionCreators)(
                    actionCreator.bind(null, name),
                    dispatch
                  );
                }
              );
            },
            undefined,
            { withRef: true }
          );
          return connector(ConnectedFieldArray);
        };

        exports.default = createConnectedFieldArray;

        /***/
      },
      /* 319 */
      /***/ function(module, exports, __webpack_require__) {
        var baseAssignValue = __webpack_require__(320),
          baseForOwn = __webpack_require__(322),
          baseIteratee = __webpack_require__(325);

        /**
         * Creates an object with the same keys as `object` and values generated
         * by running each own enumerable string keyed property of `object` thru
         * `iteratee`. The iteratee is invoked with three arguments:
         * (value, key, object).
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Object
         * @param {Object} object The object to iterate over.
         * @param {Function} [iteratee=_.identity] The function invoked per iteration.
         * @returns {Object} Returns the new mapped object.
         * @see _.mapKeys
         * @example
         *
         * var users = {
         *   'fred':    { 'user': 'fred',    'age': 40 },
         *   'pebbles': { 'user': 'pebbles', 'age': 1 }
         * };
         *
         * _.mapValues(users, function(o) { return o.age; });
         * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
         *
         * // The `_.property` iteratee shorthand.
         * _.mapValues(users, 'age');
         * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
         */
        function mapValues(object, iteratee) {
          var result = {};
          iteratee = baseIteratee(iteratee, 3);

          baseForOwn(object, function(value, key, object) {
            baseAssignValue(result, key, iteratee(value, key, object));
          });
          return result;
        }

        module.exports = mapValues;

        /***/
      },
      /* 320 */
      /***/ function(module, exports, __webpack_require__) {
        var defineProperty = __webpack_require__(321);

        /**
         * The base implementation of `assignValue` and `assignMergeValue` without
         * value checks.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty) {
            defineProperty(object, key, {
              configurable: true,
              enumerable: true,
              value: value,
              writable: true
            });
          } else {
            object[key] = value;
          }
        }

        module.exports = baseAssignValue;

        /***/
      },
      /* 321 */
      /***/ function(module, exports, __webpack_require__) {
        var getNative = __webpack_require__(223);

        var defineProperty = (function() {
          try {
            var func = getNative(Object, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {}
        })();

        module.exports = defineProperty;

        /***/
      },
      /* 322 */
      /***/ function(module, exports, __webpack_require__) {
        var baseFor = __webpack_require__(323),
          keys = __webpack_require__(281);

        /**
         * The base implementation of `_.forOwn` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @returns {Object} Returns `object`.
         */
        function baseForOwn(object, iteratee) {
          return object && baseFor(object, iteratee, keys);
        }

        module.exports = baseForOwn;

        /***/
      },
      /* 323 */
      /***/ function(module, exports, __webpack_require__) {
        var createBaseFor = __webpack_require__(324);

        /**
         * The base implementation of `baseForOwn` which iterates over `object`
         * properties returned by `keysFunc` and invokes `iteratee` for each property.
         * Iteratee functions may exit iteration early by explicitly returning `false`.
         *
         * @private
         * @param {Object} object The object to iterate over.
         * @param {Function} iteratee The function invoked per iteration.
         * @param {Function} keysFunc The function to get the keys of `object`.
         * @returns {Object} Returns `object`.
         */
        var baseFor = createBaseFor();

        module.exports = baseFor;

        /***/
      },
      /* 324 */
      /***/ function(module, exports) {
        /**
         * Creates a base function for methods like `_.forIn` and `_.forOwn`.
         *
         * @private
         * @param {boolean} [fromRight] Specify iterating from right to left.
         * @returns {Function} Returns the new base function.
         */
        function createBaseFor(fromRight) {
          return function(object, iteratee, keysFunc) {
            var index = -1,
              iterable = Object(object),
              props = keysFunc(object),
              length = props.length;

            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }

        module.exports = createBaseFor;

        /***/
      },
      /* 325 */
      /***/ function(module, exports, __webpack_require__) {
        var baseMatches = __webpack_require__(326),
          baseMatchesProperty = __webpack_require__(331),
          identity = __webpack_require__(339),
          isArray = __webpack_require__(206),
          property = __webpack_require__(340);

        /**
         * The base implementation of `_.iteratee`.
         *
         * @private
         * @param {*} [value=_.identity] The value to convert to an iteratee.
         * @returns {Function} Returns the iteratee.
         */
        function baseIteratee(value) {
          // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
          // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray(value)
              ? baseMatchesProperty(value[0], value[1])
              : baseMatches(value);
          }
          return property(value);
        }

        module.exports = baseIteratee;

        /***/
      },
      /* 326 */
      /***/ function(module, exports, __webpack_require__) {
        var baseIsMatch = __webpack_require__(327),
          getMatchData = __webpack_require__(328),
          matchesStrictComparable = __webpack_require__(330);

        /**
         * The base implementation of `_.matches` which doesn't clone `source`.
         *
         * @private
         * @param {Object} source The object of property values to match.
         * @returns {Function} Returns the new spec function.
         */
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }

        module.exports = baseMatches;

        /***/
      },
      /* 327 */
      /***/ function(module, exports, __webpack_require__) {
        var Stack = __webpack_require__(258),
          baseIsEqual = __webpack_require__(256);

        /** Used to compose bitmasks for value comparisons. */
        var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;

        /**
         * The base implementation of `_.isMatch` without support for iteratee shorthands.
         *
         * @private
         * @param {Object} object The object to inspect.
         * @param {Object} source The object of property values to match.
         * @param {Array} matchData The property names, values, and compare flags to match.
         * @param {Function} [customizer] The function to customize comparisons.
         * @returns {boolean} Returns `true` if `object` is a match, else `false`.
         */
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length,
            length = index,
            noCustomizer = !customizer;

          if (object == null) {
            return !length;
          }
          object = Object(object);
          while (index--) {
            var data = matchData[index];
            if (
              noCustomizer && data[2]
                ? data[1] !== object[data[0]]
                : !(data[0] in object)
            ) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0],
              objValue = object[key],
              srcValue = data[1];

            if (noCustomizer && data[2]) {
              if (objValue === undefined && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result = customizer(
                  objValue,
                  srcValue,
                  key,
                  object,
                  source,
                  stack
                );
              }
              if (
                !(result === undefined
                  ? baseIsEqual(
                      srcValue,
                      objValue,
                      COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG,
                      customizer,
                      stack
                    )
                  : result)
              ) {
                return false;
              }
            }
          }
          return true;
        }

        module.exports = baseIsMatch;

        /***/
      },
      /* 328 */
      /***/ function(module, exports, __webpack_require__) {
        var isStrictComparable = __webpack_require__(329),
          keys = __webpack_require__(281);

        /**
         * Gets the property names, values, and compare flags of `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the match data of `object`.
         */
        function getMatchData(object) {
          var result = keys(object),
            length = result.length;

          while (length--) {
            var key = result[length],
              value = object[key];

            result[length] = [key, value, isStrictComparable(value)];
          }
          return result;
        }

        module.exports = getMatchData;

        /***/
      },
      /* 329 */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(226);

        /**
         * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` if suitable for strict
         *  equality comparisons, else `false`.
         */
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }

        module.exports = isStrictComparable;

        /***/
      },
      /* 330 */
      /***/ function(module, exports) {
        /**
         * A specialized version of `matchesProperty` for source values suitable
         * for strict equality comparisons, i.e. `===`.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new spec function.
         */
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return (
              object[key] === srcValue &&
              (srcValue !== undefined || key in Object(object))
            );
          };
        }

        module.exports = matchesStrictComparable;

        /***/
      },
      /* 331 */
      /***/ function(module, exports, __webpack_require__) {
        var baseIsEqual = __webpack_require__(256),
          get = __webpack_require__(332),
          hasIn = __webpack_require__(336),
          isKey = __webpack_require__(335),
          isStrictComparable = __webpack_require__(329),
          matchesStrictComparable = __webpack_require__(330),
          toKey = __webpack_require__(250);

        /** Used to compose bitmasks for value comparisons. */
        var COMPARE_PARTIAL_FLAG = 1,
          COMPARE_UNORDERED_FLAG = 2;

        /**
         * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
         *
         * @private
         * @param {string} path The path of the property to get.
         * @param {*} srcValue The value to match.
         * @returns {Function} Returns the new spec function.
         */
        function baseMatchesProperty(path, srcValue) {
          if (isKey(path) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path), srcValue);
          }
          return function(object) {
            var objValue = get(object, path);
            return objValue === undefined && objValue === srcValue
              ? hasIn(object, path)
              : baseIsEqual(
                  srcValue,
                  objValue,
                  COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG
                );
          };
        }

        module.exports = baseMatchesProperty;

        /***/
      },
      /* 332 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGet = __webpack_require__(333);

        /**
         * Gets the value at `path` of `object`. If the resolved value is
         * `undefined`, the `defaultValue` is returned in its place.
         *
         * @static
         * @memberOf _
         * @since 3.7.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @param {*} [defaultValue] The value returned for `undefined` resolved values.
         * @returns {*} Returns the resolved value.
         * @example
         *
         * var object = { 'a': [{ 'b': { 'c': 3 } }] };
         *
         * _.get(object, 'a[0].b.c');
         * // => 3
         *
         * _.get(object, ['a', '0', 'b', 'c']);
         * // => 3
         *
         * _.get(object, 'a.b.c', 'default');
         * // => 'default'
         */
        function get(object, path, defaultValue) {
          var result = object == null ? undefined : baseGet(object, path);
          return result === undefined ? defaultValue : result;
        }

        module.exports = get;

        /***/
      },
      /* 333 */
      /***/ function(module, exports, __webpack_require__) {
        var castPath = __webpack_require__(334),
          toKey = __webpack_require__(250);

        /**
         * The base implementation of `_.get` without support for default values.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path of the property to get.
         * @returns {*} Returns the resolved value.
         */
        function baseGet(object, path) {
          path = castPath(path, object);

          var index = 0,
            length = path.length;

          while (object != null && index < length) {
            object = object[toKey(path[index++])];
          }
          return index && index == length ? object : undefined;
        }

        module.exports = baseGet;

        /***/
      },
      /* 334 */
      /***/ function(module, exports, __webpack_require__) {
        var isArray = __webpack_require__(206),
          isKey = __webpack_require__(335),
          stringToPath = __webpack_require__(215),
          toString = __webpack_require__(251);

        /**
         * Casts `value` to a path array if it's not one.
         *
         * @private
         * @param {*} value The value to inspect.
         * @param {Object} [object] The object to query keys on.
         * @returns {Array} Returns the cast property path array.
         */
        function castPath(value, object) {
          if (isArray(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }

        module.exports = castPath;

        /***/
      },
      /* 335 */
      /***/ function(module, exports, __webpack_require__) {
        var isArray = __webpack_require__(206),
          isSymbol = __webpack_require__(207);

        /** Used to match property names within property paths. */
        var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
          reIsPlainProp = /^\w*$/;

        /**
         * Checks if `value` is a property name and not a property path.
         *
         * @private
         * @param {*} value The value to check.
         * @param {Object} [object] The object to query keys on.
         * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
         */
        function isKey(value, object) {
          if (isArray(value)) {
            return false;
          }
          var type = typeof value;
          if (
            type == "number" ||
            type == "symbol" ||
            type == "boolean" ||
            value == null ||
            isSymbol(value)
          ) {
            return true;
          }
          return (
            reIsPlainProp.test(value) ||
            !reIsDeepProp.test(value) ||
            (object != null && value in Object(object))
          );
        }

        module.exports = isKey;

        /***/
      },
      /* 336 */
      /***/ function(module, exports, __webpack_require__) {
        var baseHasIn = __webpack_require__(337),
          hasPath = __webpack_require__(338);

        /**
         * Checks if `path` is a direct or inherited property of `object`.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         * @example
         *
         * var object = _.create({ 'a': _.create({ 'b': 2 }) });
         *
         * _.hasIn(object, 'a');
         * // => true
         *
         * _.hasIn(object, 'a.b');
         * // => true
         *
         * _.hasIn(object, ['a', 'b']);
         * // => true
         *
         * _.hasIn(object, 'b');
         * // => false
         */
        function hasIn(object, path) {
          return object != null && hasPath(object, path, baseHasIn);
        }

        module.exports = hasIn;

        /***/
      },
      /* 337 */
      /***/ function(module, exports) {
        /**
         * The base implementation of `_.hasIn` without support for deep paths.
         *
         * @private
         * @param {Object} [object] The object to query.
         * @param {Array|string} key The key to check.
         * @returns {boolean} Returns `true` if `key` exists, else `false`.
         */
        function baseHasIn(object, key) {
          return object != null && key in Object(object);
        }

        module.exports = baseHasIn;

        /***/
      },
      /* 338 */
      /***/ function(module, exports, __webpack_require__) {
        var castPath = __webpack_require__(334),
          isArguments = __webpack_require__(284),
          isArray = __webpack_require__(206),
          isIndex = __webpack_require__(289),
          isLength = __webpack_require__(292),
          toKey = __webpack_require__(250);

        /**
         * Checks if `path` exists on `object`.
         *
         * @private
         * @param {Object} object The object to query.
         * @param {Array|string} path The path to check.
         * @param {Function} hasFunc The function to check properties.
         * @returns {boolean} Returns `true` if `path` exists, else `false`.
         */
        function hasPath(object, path, hasFunc) {
          path = castPath(path, object);

          var index = -1,
            length = path.length,
            result = false;

          while (++index < length) {
            var key = toKey(path[index]);
            if (!(result = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result || ++index != length) {
            return result;
          }
          length = object == null ? 0 : object.length;
          return (
            !!length &&
            isLength(length) &&
            isIndex(key, length) &&
            (isArray(object) || isArguments(object))
          );
        }

        module.exports = hasPath;

        /***/
      },
      /* 339 */
      /***/ function(module, exports) {
        /**
         * This method returns the first argument it receives.
         *
         * @static
         * @since 0.1.0
         * @memberOf _
         * @category Util
         * @param {*} value Any value.
         * @returns {*} Returns `value`.
         * @example
         *
         * var object = { 'a': 1 };
         *
         * console.log(_.identity(object) === object);
         * // => true
         */
        function identity(value) {
          return value;
        }

        module.exports = identity;

        /***/
      },
      /* 340 */
      /***/ function(module, exports, __webpack_require__) {
        var baseProperty = __webpack_require__(341),
          basePropertyDeep = __webpack_require__(342),
          isKey = __webpack_require__(335),
          toKey = __webpack_require__(250);

        /**
         * Creates a function that returns the value at `path` of a given object.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new accessor function.
         * @example
         *
         * var objects = [
         *   { 'a': { 'b': 2 } },
         *   { 'a': { 'b': 1 } }
         * ];
         *
         * _.map(objects, _.property('a.b'));
         * // => [2, 1]
         *
         * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
         * // => [1, 2]
         */
        function property(path) {
          return isKey(path)
            ? baseProperty(toKey(path))
            : basePropertyDeep(path);
        }

        module.exports = property;

        /***/
      },
      /* 341 */
      /***/ function(module, exports) {
        /**
         * The base implementation of `_.property` without support for deep paths.
         *
         * @private
         * @param {string} key The key of the property to get.
         * @returns {Function} Returns the new accessor function.
         */
        function baseProperty(key) {
          return function(object) {
            return object == null ? undefined : object[key];
          };
        }

        module.exports = baseProperty;

        /***/
      },
      /* 342 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGet = __webpack_require__(333);

        /**
         * A specialized version of `baseProperty` which supports deep paths.
         *
         * @private
         * @param {Array|string} path The path of the property to get.
         * @returns {Function} Returns the new accessor function.
         */
        function basePropertyDeep(path) {
          return function(object) {
            return baseGet(object, path);
          };
        }

        module.exports = basePropertyDeep;

        /***/
      },
      /* 343 */
      /***/ function(module, exports) {
        module.exports = require("redux");

        /***/
      },
      /* 344 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        var createFieldArrayProps = function createFieldArrayProps(
          getIn,
          name,
          form,
          sectionPrefix,
          getValue,
          _ref
        ) {
          var arrayInsert = _ref.arrayInsert,
            arrayMove = _ref.arrayMove,
            arrayPop = _ref.arrayPop,
            arrayPush = _ref.arrayPush,
            arrayRemove = _ref.arrayRemove,
            arrayRemoveAll = _ref.arrayRemoveAll,
            arrayShift = _ref.arrayShift,
            arraySplice = _ref.arraySplice,
            arraySwap = _ref.arraySwap,
            arrayUnshift = _ref.arrayUnshift,
            asyncError = _ref.asyncError,
            dirty = _ref.dirty,
            length = _ref.length,
            pristine = _ref.pristine,
            submitError = _ref.submitError,
            state = _ref.state,
            submitFailed = _ref.submitFailed,
            submitting = _ref.submitting,
            syncError = _ref.syncError,
            syncWarning = _ref.syncWarning,
            value = _ref.value,
            props = _ref.props,
            rest = _objectWithoutProperties(_ref, [
              "arrayInsert",
              "arrayMove",
              "arrayPop",
              "arrayPush",
              "arrayRemove",
              "arrayRemoveAll",
              "arrayShift",
              "arraySplice",
              "arraySwap",
              "arrayUnshift",
              "asyncError",
              "dirty",
              "length",
              "pristine",
              "submitError",
              "state",
              "submitFailed",
              "submitting",
              "syncError",
              "syncWarning",
              "value",
              "props"
            ]);

          var error = syncError || asyncError || submitError;
          var warning = syncWarning;
          var fieldName = sectionPrefix
            ? name.replace(sectionPrefix + ".", "")
            : name;
          var finalProps = _extends(
            {
              fields: {
                _isFieldArray: true,
                forEach: function forEach(callback) {
                  return (value || []).forEach(function(item, index) {
                    return callback(
                      fieldName + "[" + index + "]",
                      index,
                      finalProps.fields
                    );
                  });
                },
                get: getValue,
                getAll: function getAll() {
                  return value;
                },
                insert: arrayInsert,
                length: length,
                map: function map(callback) {
                  return (value || []).map(function(item, index) {
                    return callback(
                      fieldName + "[" + index + "]",
                      index,
                      finalProps.fields
                    );
                  });
                },
                move: arrayMove,
                name: name,
                pop: function pop() {
                  arrayPop();
                  return getIn(value, length - 1);
                },
                push: arrayPush,
                reduce: function reduce(callback, initial) {
                  return (value || []).reduce(function(
                    accumulator,
                    item,
                    index
                  ) {
                    return callback(
                      accumulator,
                      fieldName + "[" + index + "]",
                      index,
                      finalProps.fields
                    );
                  },
                  initial);
                },
                remove: arrayRemove,
                removeAll: arrayRemoveAll,
                shift: function shift() {
                  arrayShift();
                  return getIn(value, 0);
                },
                swap: arraySwap,
                unshift: arrayUnshift
              },
              meta: {
                dirty: dirty,
                error: error,
                form: form,
                warning: warning,
                invalid: !!error,
                pristine: pristine,
                submitting: submitting,
                submitFailed: submitFailed,
                valid: !error
              }
            },
            props,
            rest
          );
          return finalProps;
        };

        exports.default = createFieldArrayProps;

        /***/
      },
      /* 345 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createFormValueSelector = __webpack_require__(346);

        var _createFormValueSelector2 = _interopRequireDefault(
          _createFormValueSelector
        );

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createFormValueSelector2.default)(
          _immutable2.default
        );

        /***/
      },
      /* 346 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _invariant = __webpack_require__(192);

        var _invariant2 = _interopRequireDefault(_invariant);

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var createFormValueSelector = function createFormValueSelector(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };

            (0, _invariant2.default)(form, "Form value must be specified");
            return function(state) {
              for (
                var _len = arguments.length,
                  fields = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1;
                _key < _len;
                _key++
              ) {
                fields[_key - 1] = arguments[_key];
              }

              (0, _invariant2.default)(fields.length, "No fields specified");
              return fields.length === 1 // only selecting one field, so return its value
                ? getIn(getFormState(state), form + ".values." + fields[0]) // selecting many fields, so return an object of field values
                : fields.reduce(function(accumulator, field) {
                    var value = getIn(
                      getFormState(state),
                      form + ".values." + field
                    );
                    return value === undefined
                      ? accumulator
                      : _plain2.default.setIn(accumulator, field, value);
                  }, {});
            };
          };
        };

        exports.default = createFormValueSelector;

        /***/
      },
      /* 347 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createFormValues = __webpack_require__(348);

        var _createFormValues2 = _interopRequireDefault(_createFormValues);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createFormValues2.default)(_immutable2.default);

        /***/
      },
      /* 348 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _reactRedux = __webpack_require__(9);

        var _prefixName = __webpack_require__(186);

        var _prefixName2 = _interopRequireDefault(_prefixName);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var createValues = function createValues(_ref) {
          var getIn = _ref.getIn;
          return function() {
            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            var valuesMap = void 0;

            if (typeof args[0] === "string") {
              valuesMap = args.map(function(k) {
                return { prop: k, path: k };
              });
            } else {
              var config = args[0];
              valuesMap = Object.keys(config).map(function(k) {
                return {
                  prop: k,
                  path: config[k]
                };
              });
            }
            if (!valuesMap.length) {
              throw new Error(
                "formValues(): You must specify values to get as formValues(name1, name2, ...) or formValues({propName1: propPath1, ...})"
              );
            }

            // create a class that reads current form name and creates a selector
            // return
            return function(Component) {
              var FormValues = (function(_React$Component) {
                _inherits(FormValues, _React$Component);

                function FormValues(props, context) {
                  _classCallCheck(this, FormValues);

                  var _this = _possibleConstructorReturn(
                    this,
                    (
                      FormValues.__proto__ || Object.getPrototypeOf(FormValues)
                    ).call(this, props, context)
                  );

                  if (!context._reduxForm) {
                    throw new Error(
                      "formValues() must be used inside a React tree decorated with reduxForm()"
                    );
                  }
                  var getValues = context._reduxForm.getValues;

                  var formValuesSelector = function formValuesSelector(_) {
                    // Yes, we're only using connect() for listening to updates
                    var props = {};
                    var values = getValues();
                    valuesMap.forEach(function(_ref2) {
                      var prop = _ref2.prop,
                        path = _ref2.path;
                      return (props[prop] = getIn(
                        values,
                        (0, _prefixName2.default)(context, path)
                      ));
                    });
                    return props;
                  };
                  _this.Component = (0, _reactRedux.connect)(
                    formValuesSelector,
                    function() {
                      return {};
                    } // ignore dispatch
                  )(Component);
                  return _this;
                }

                _createClass(FormValues, [
                  {
                    key: "render",
                    value: function render() {
                      return _react2.default.createElement(
                        this.Component,
                        this.props
                      );
                    }
                  }
                ]);

                return FormValues;
              })(_react2.default.Component);

              FormValues.contextTypes = {
                _reduxForm: _propTypes2.default.object
              };
              return FormValues;
            };
          };
        };

        exports.default = createValues;

        /***/
      },
      /* 349 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormNames = __webpack_require__(350);

        var _getFormNames2 = _interopRequireDefault(_getFormNames);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormNames2.default)(_immutable2.default);

        /***/
      },
      /* 350 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormNames = function createGetFormNames(_ref) {
          var getIn = _ref.getIn,
            keys = _ref.keys;
          return function() {
            var getFormState =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return keys(getFormState(state));
            };
          };
        };

        exports.default = createGetFormNames;

        /***/
      },
      /* 351 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormValues = __webpack_require__(352);

        var _getFormValues2 = _interopRequireDefault(_getFormValues);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormValues2.default)(_immutable2.default);

        /***/
      },
      /* 352 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormValues = function createGetFormValues(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return getIn(getFormState(state), form + ".values");
            };
          };
        };

        exports.default = createGetFormValues;

        /***/
      },
      /* 353 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormInitialValues = __webpack_require__(354);

        var _getFormInitialValues2 = _interopRequireDefault(
          _getFormInitialValues
        );

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormInitialValues2.default)(
          _immutable2.default
        );

        /***/
      },
      /* 354 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormInitialValues = function createGetFormInitialValues(
          _ref
        ) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return getIn(getFormState(state), form + ".initial");
            };
          };
        };

        exports.default = createGetFormInitialValues;

        /***/
      },
      /* 355 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormSyncErrors = __webpack_require__(356);

        var _getFormSyncErrors2 = _interopRequireDefault(_getFormSyncErrors);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormSyncErrors2.default)(_immutable2.default);

        /***/
      },
      /* 356 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormSyncErrors = function createGetFormSyncErrors(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return getIn(getFormState(state), form + ".syncErrors");
            };
          };
        };

        exports.default = createGetFormSyncErrors;

        /***/
      },
      /* 357 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormMeta = __webpack_require__(358);

        var _getFormMeta2 = _interopRequireDefault(_getFormMeta);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormMeta2.default)(_immutable2.default);

        /***/
      },
      /* 358 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormMeta = function createGetFormMeta(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return getIn(getFormState(state), form + ".fields");
            };
          };
        };

        exports.default = createGetFormMeta;

        /***/
      },
      /* 359 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormAsyncErrors = __webpack_require__(360);

        var _getFormAsyncErrors2 = _interopRequireDefault(_getFormAsyncErrors);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormAsyncErrors2.default)(
          _immutable2.default
        );

        /***/
      },
      /* 360 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormAsyncErrors = function createGetFormAsyncErrors(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return getIn(getFormState(state), form + ".asyncErrors");
            };
          };
        };

        exports.default = createGetFormAsyncErrors;

        /***/
      },
      /* 361 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormSyncWarnings = __webpack_require__(362);

        var _getFormSyncWarnings2 = _interopRequireDefault(
          _getFormSyncWarnings
        );

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormSyncWarnings2.default)(
          _immutable2.default
        );

        /***/
      },
      /* 362 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormSyncWarnings = function createGetFormSyncWarnings(
          _ref
        ) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return getIn(getFormState(state), form + ".syncWarnings");
            };
          };
        };

        exports.default = createGetFormSyncWarnings;

        /***/
      },
      /* 363 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _getFormSubmitErrors = __webpack_require__(364);

        var _getFormSubmitErrors2 = _interopRequireDefault(
          _getFormSubmitErrors
        );

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _getFormSubmitErrors2.default)(
          _immutable2.default
        );

        /***/
      },
      /* 364 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createGetFormSubmitErrors = function createGetFormSubmitErrors(
          _ref
        ) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              return getIn(getFormState(state), form + ".submitErrors");
            };
          };
        };

        exports.default = createGetFormSubmitErrors;

        /***/
      },
      /* 365 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isDirty = __webpack_require__(366);

        var _isDirty2 = _interopRequireDefault(_isDirty);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _isDirty2.default)(_immutable2.default);

        /***/
      },
      /* 366 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isPristine = __webpack_require__(367);

        var _isPristine2 = _interopRequireDefault(_isPristine);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var createIsDirty = function createIsDirty(structure) {
          return function(form, getFormState) {
            var isPristine = (0, _isPristine2.default)(structure)(
              form,
              getFormState
            );
            return function(state) {
              return !isPristine(state);
            };
          };
        };

        exports.default = createIsDirty;

        /***/
      },
      /* 367 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createIsPristine = function createIsPristine(_ref) {
          var deepEqual = _ref.deepEqual,
            empty = _ref.empty,
            getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              var formState = getFormState(state);
              var initial = getIn(formState, form + ".initial") || empty;
              var values = getIn(formState, form + ".values") || initial;
              return deepEqual(initial, values);
            };
          };
        };

        exports.default = createIsPristine;

        /***/
      },
      /* 368 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isInvalid = __webpack_require__(369);

        var _isInvalid2 = _interopRequireDefault(_isInvalid);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _isInvalid2.default)(_immutable2.default);

        /***/
      },
      /* 369 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isValid = __webpack_require__(370);

        var _isValid2 = _interopRequireDefault(_isValid);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var createIsInvalid = function createIsInvalid(structure) {
          return function(form, getFormState) {
            var isValid = (0, _isValid2.default)(structure)(form, getFormState);
            return function(state) {
              return !isValid(state);
            };
          };
        };

        exports.default = createIsInvalid;

        /***/
      },
      /* 370 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _hasError = __webpack_require__(371);

        var _hasError2 = _interopRequireDefault(_hasError);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var createIsValid = function createIsValid(structure) {
          var getIn = structure.getIn,
            keys = structure.keys;

          var hasError = (0, _hasError2.default)(structure);
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            var ignoreSubmitErrors =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : false;
            return function(state) {
              var formState = getFormState(state);
              var syncError = getIn(formState, form + ".syncError");
              if (syncError) {
                return false;
              }
              if (!ignoreSubmitErrors) {
                var error = getIn(formState, form + ".error");
                if (error) {
                  return false;
                }
              }
              var syncErrors = getIn(formState, form + ".syncErrors");
              var asyncErrors = getIn(formState, form + ".asyncErrors");
              var submitErrors = ignoreSubmitErrors
                ? undefined
                : getIn(formState, form + ".submitErrors");
              if (!syncErrors && !asyncErrors && !submitErrors) {
                return true;
              }

              var registeredFields = getIn(
                formState,
                form + ".registeredFields"
              );
              if (!registeredFields) {
                return true;
              }

              return !keys(registeredFields)
                .filter(function(name) {
                  return getIn(registeredFields, "['" + name + "'].count") > 0;
                })
                .some(function(name) {
                  return hasError(
                    getIn(registeredFields, "['" + name + "']"),
                    syncErrors,
                    asyncErrors,
                    submitErrors
                  );
                });
            };
          };
        };

        exports.default = createIsValid;

        /***/
      },
      /* 371 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var getErrorKeys = function getErrorKeys(name, type) {
          switch (type) {
            case "Field":
              return [name, name + "._error"];
            case "FieldArray":
              return [name + "._error"];
            default:
              throw new Error("Unknown field type");
          }
        };

        var createHasError = function createHasError(_ref) {
          var getIn = _ref.getIn;

          var hasError = function hasError(
            field,
            syncErrors,
            asyncErrors,
            submitErrors
          ) {
            if (!syncErrors && !asyncErrors && !submitErrors) {
              return false;
            }

            var name = getIn(field, "name");
            var type = getIn(field, "type");
            return getErrorKeys(name, type).some(function(key) {
              return (
                getIn(syncErrors, key) ||
                getIn(asyncErrors, key) ||
                getIn(submitErrors, key)
              );
            });
          };
          return hasError;
        };

        exports.default = createHasError;

        /***/
      },
      /* 372 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isPristine = __webpack_require__(367);

        var _isPristine2 = _interopRequireDefault(_isPristine);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _isPristine2.default)(_immutable2.default);

        /***/
      },
      /* 373 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isValid = __webpack_require__(370);

        var _isValid2 = _interopRequireDefault(_isValid);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _isValid2.default)(_immutable2.default);

        /***/
      },
      /* 374 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isSubmitting = __webpack_require__(375);

        var _isSubmitting2 = _interopRequireDefault(_isSubmitting);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _isSubmitting2.default)(_immutable2.default);

        /***/
      },
      /* 375 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createIsSubmitting = function createIsSubmitting(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              var formState = getFormState(state);
              return getIn(formState, form + ".submitting") || false;
            };
          };
        };

        exports.default = createIsSubmitting;

        /***/
      },
      /* 376 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _hasSubmitSucceeded = __webpack_require__(377);

        var _hasSubmitSucceeded2 = _interopRequireDefault(_hasSubmitSucceeded);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _hasSubmitSucceeded2.default)(
          _immutable2.default
        );

        /***/
      },
      /* 377 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createHasSubmitSucceeded = function createHasSubmitSucceeded(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              var formState = getFormState(state);
              return getIn(formState, form + ".submitSucceeded") || false;
            };
          };
        };

        exports.default = createHasSubmitSucceeded;

        /***/
      },
      /* 378 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _hasSubmitFailed = __webpack_require__(379);

        var _hasSubmitFailed2 = _interopRequireDefault(_hasSubmitFailed);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _hasSubmitFailed2.default)(_immutable2.default);

        /***/
      },
      /* 379 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var createHasSubmitFailed = function createHasSubmitFailed(_ref) {
          var getIn = _ref.getIn;
          return function(form) {
            var getFormState =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : function(state) {
                    return getIn(state, "form");
                  };
            return function(state) {
              var formState = getFormState(state);
              return getIn(formState, form + ".submitFailed") || false;
            };
          };
        };

        exports.default = createHasSubmitFailed;

        /***/
      },
      /* 380 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createReduxForm = __webpack_require__(381);

        var _createReduxForm2 = _interopRequireDefault(_createReduxForm);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createReduxForm2.default)(_immutable2.default);

        /***/
      },
      /* 381 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _merge4 = __webpack_require__(382);

        var _merge5 = _interopRequireDefault(_merge4);

        var _mapValues2 = __webpack_require__(319);

        var _mapValues3 = _interopRequireDefault(_mapValues2);

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _typeof =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

        var _hoistNonReactStatics = __webpack_require__(409);

        var _hoistNonReactStatics2 = _interopRequireDefault(
          _hoistNonReactStatics
        );

        var _isPromise = __webpack_require__(410);

        var _isPromise2 = _interopRequireDefault(_isPromise);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _react = __webpack_require__(2);

        var _reactRedux = __webpack_require__(9);

        var _redux = __webpack_require__(343);

        var _actions = __webpack_require__(411);

        var importedActions = _interopRequireWildcard(_actions);

        var _asyncValidation = __webpack_require__(413);

        var _asyncValidation2 = _interopRequireDefault(_asyncValidation);

        var _defaultShouldAsyncValidate = __webpack_require__(182);

        var _defaultShouldAsyncValidate2 = _interopRequireDefault(
          _defaultShouldAsyncValidate
        );

        var _defaultShouldValidate = __webpack_require__(183);

        var _defaultShouldValidate2 = _interopRequireDefault(
          _defaultShouldValidate
        );

        var _silenceEvent = __webpack_require__(414);

        var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

        var _silenceEvents = __webpack_require__(415);

        var _silenceEvents2 = _interopRequireDefault(_silenceEvents);

        var _generateValidator2 = __webpack_require__(416);

        var _generateValidator3 = _interopRequireDefault(_generateValidator2);

        var _handleSubmit = __webpack_require__(417);

        var _handleSubmit2 = _interopRequireDefault(_handleSubmit);

        var _isValid = __webpack_require__(370);

        var _isValid2 = _interopRequireDefault(_isValid);

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        var _getDisplayName = __webpack_require__(418);

        var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj.default = obj;
            return newObj;
          }
        }

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        var isClassComponent = function isClassComponent(Component) {
          return Boolean(
            Component &&
              Component.prototype &&
              _typeof(Component.prototype.isReactComponent) === "object"

            // extract field-specific actions
          );
        };
        var arrayInsert = importedActions.arrayInsert,
          arrayMove = importedActions.arrayMove,
          arrayPop = importedActions.arrayPop,
          arrayPush = importedActions.arrayPush,
          arrayRemove = importedActions.arrayRemove,
          arrayRemoveAll = importedActions.arrayRemoveAll,
          arrayShift = importedActions.arrayShift,
          arraySplice = importedActions.arraySplice,
          arraySwap = importedActions.arraySwap,
          arrayUnshift = importedActions.arrayUnshift,
          blur = importedActions.blur,
          change = importedActions.change,
          focus = importedActions.focus,
          formActions = _objectWithoutProperties(importedActions, [
            "arrayInsert",
            "arrayMove",
            "arrayPop",
            "arrayPush",
            "arrayRemove",
            "arrayRemoveAll",
            "arrayShift",
            "arraySplice",
            "arraySwap",
            "arrayUnshift",
            "blur",
            "change",
            "focus"
          ]);

        var arrayActions = {
          arrayInsert: arrayInsert,
          arrayMove: arrayMove,
          arrayPop: arrayPop,
          arrayPush: arrayPush,
          arrayRemove: arrayRemove,
          arrayRemoveAll: arrayRemoveAll,
          arrayShift: arrayShift,
          arraySplice: arraySplice,
          arraySwap: arraySwap,
          arrayUnshift: arrayUnshift
        };

        var propsToNotUpdateFor = [].concat(
          _toConsumableArray(Object.keys(importedActions)),
          [
            "array",
            "asyncErrors",
            "initialValues",
            "syncErrors",
            "syncWarnings",
            "values",
            "registeredFields"
          ]
        );

        var checkSubmit = function checkSubmit(submit) {
          if (!submit || typeof submit !== "function") {
            throw new Error(
              "You must either pass handleSubmit() an onSubmit function or pass onSubmit as a prop"
            );
          }
          return submit;
        };

        /**
         * The decorator that is the main API to redux-form
         */
        var createReduxForm = function createReduxForm(structure) {
          var deepEqual = structure.deepEqual,
            empty = structure.empty,
            getIn = structure.getIn,
            setIn = structure.setIn,
            keys = structure.keys,
            fromJS = structure.fromJS;

          var isValid = (0, _isValid2.default)(structure);
          return function(initialConfig) {
            var config = _extends(
              {
                touchOnBlur: true,
                touchOnChange: false,
                persistentSubmitErrors: false,
                destroyOnUnmount: true,
                shouldAsyncValidate: _defaultShouldAsyncValidate2.default,
                shouldValidate: _defaultShouldValidate2.default,
                enableReinitialize: false,
                keepDirtyOnReinitialize: false,
                getFormState: function getFormState(state) {
                  return getIn(state, "form");
                },
                pure: true,
                forceUnregisterOnUnmount: false
              },
              initialConfig
            );

            return function(WrappedComponent) {
              var Form = (function(_Component) {
                _inherits(Form, _Component);

                function Form(props) {
                  _classCallCheck(this, Form);

                  var _this = _possibleConstructorReturn(
                    this,
                    (Form.__proto__ || Object.getPrototypeOf(Form)).call(
                      this,
                      props
                    )
                  );

                  _this.submit = _this.submit.bind(_this);
                  _this.reset = _this.reset.bind(_this);
                  _this.asyncValidate = _this.asyncValidate.bind(_this);
                  _this.getValues = _this.getValues.bind(_this);
                  _this.register = _this.register.bind(_this);
                  _this.unregister = _this.unregister.bind(_this);
                  _this.submitCompleted = _this.submitCompleted.bind(_this);
                  _this.submitFailed = _this.submitFailed.bind(_this);
                  _this.fieldValidators = {};
                  _this.lastFieldValidatorKeys = [];
                  _this.fieldWarners = {};
                  _this.lastFieldWarnerKeys = [];
                  return _this;
                }

                _createClass(Form, [
                  {
                    key: "getChildContext",
                    value: function getChildContext() {
                      var _this2 = this;

                      return {
                        _reduxForm: _extends({}, this.props, {
                          getFormState: function getFormState(state) {
                            return getIn(
                              _this2.props.getFormState(state),
                              _this2.props.form
                            );
                          },
                          asyncValidate: this.asyncValidate,
                          getValues: this.getValues,
                          sectionPrefix: undefined,
                          register: this.register,
                          unregister: this.unregister,
                          registerInnerOnSubmit: function registerInnerOnSubmit(
                            innerOnSubmit
                          ) {
                            return (_this2.innerOnSubmit = innerOnSubmit);
                          }
                        })
                      };
                    }
                  },
                  {
                    key: "initIfNeeded",
                    value: function initIfNeeded(nextProps) {
                      var enableReinitialize = this.props.enableReinitialize;

                      if (nextProps) {
                        if (
                          (enableReinitialize || !nextProps.initialized) &&
                          !deepEqual(
                            this.props.initialValues,
                            nextProps.initialValues
                          )
                        ) {
                          var keepDirty =
                            nextProps.initialized &&
                            this.props.keepDirtyOnReinitialize;
                          this.props.initialize(
                            nextProps.initialValues,
                            keepDirty,
                            {
                              lastInitialValues: this.props.initialValues
                            }
                          );
                        }
                      } else if (
                        this.props.initialValues &&
                        (!this.props.initialized || enableReinitialize)
                      ) {
                        this.props.initialize(
                          this.props.initialValues,
                          this.props.keepDirtyOnReinitialize
                        );
                      }
                    }
                  },
                  {
                    key: "updateSyncErrorsIfNeeded",
                    value: function updateSyncErrorsIfNeeded(
                      nextSyncErrors,
                      nextError,
                      lastSyncErrors
                    ) {
                      var _props = this.props,
                        error = _props.error,
                        updateSyncErrors = _props.updateSyncErrors;

                      var noErrors =
                        (!lastSyncErrors ||
                          !Object.keys(lastSyncErrors).length) &&
                        !error;
                      var nextNoErrors =
                        (!nextSyncErrors ||
                          !Object.keys(nextSyncErrors).length) &&
                        !nextError;
                      if (
                        !(noErrors && nextNoErrors) &&
                        (!_plain2.default.deepEqual(
                          lastSyncErrors,
                          nextSyncErrors
                        ) ||
                          !_plain2.default.deepEqual(error, nextError))
                      ) {
                        updateSyncErrors(nextSyncErrors, nextError);
                      }
                    }
                  },
                  {
                    key: "clearSubmitPromiseIfNeeded",
                    value: function clearSubmitPromiseIfNeeded(nextProps) {
                      var submitting = this.props.submitting;

                      if (
                        this.submitPromise &&
                        submitting &&
                        !nextProps.submitting
                      ) {
                        delete this.submitPromise;
                      }
                    }
                  },
                  {
                    key: "submitIfNeeded",
                    value: function submitIfNeeded(nextProps) {
                      var _props2 = this.props,
                        clearSubmit = _props2.clearSubmit,
                        triggerSubmit = _props2.triggerSubmit;

                      if (!triggerSubmit && nextProps.triggerSubmit) {
                        clearSubmit();
                        this.submit();
                      }
                    }
                  },
                  {
                    key: "validateIfNeeded",
                    value: function validateIfNeeded(nextProps) {
                      var _props3 = this.props,
                        shouldValidate = _props3.shouldValidate,
                        validate = _props3.validate,
                        values = _props3.values;

                      var fieldLevelValidate = this.generateValidator();
                      if (validate || fieldLevelValidate) {
                        var initialRender = nextProps === undefined;
                        var fieldValidatorKeys = Object.keys(
                          this.getValidators()
                        );
                        var shouldValidateResult = shouldValidate({
                          values: values,
                          nextProps: nextProps,
                          props: this.props,
                          initialRender: initialRender,
                          lastFieldValidatorKeys: this.lastFieldValidatorKeys,
                          fieldValidatorKeys: fieldValidatorKeys,
                          structure: structure
                        });

                        if (shouldValidateResult) {
                          var propsToValidate = initialRender
                            ? this.props
                            : nextProps;

                          var _merge2 = (0, _merge5.default)(
                              validate
                                ? validate(
                                    propsToValidate.values,
                                    propsToValidate
                                  ) || {}
                                : {},
                              fieldLevelValidate
                                ? fieldLevelValidate(
                                    propsToValidate.values,
                                    propsToValidate
                                  ) || {}
                                : {}
                            ),
                            _error = _merge2._error,
                            nextSyncErrors = _objectWithoutProperties(_merge2, [
                              "_error"
                            ]);

                          this.lastFieldValidatorKeys = fieldValidatorKeys;
                          this.updateSyncErrorsIfNeeded(
                            nextSyncErrors,
                            _error,
                            propsToValidate.syncErrors
                          );
                        }
                      }
                    }
                  },
                  {
                    key: "updateSyncWarningsIfNeeded",
                    value: function updateSyncWarningsIfNeeded(
                      nextSyncWarnings,
                      nextWarning,
                      lastSyncWarnings
                    ) {
                      var _props4 = this.props,
                        warning = _props4.warning,
                        syncWarnings = _props4.syncWarnings,
                        updateSyncWarnings = _props4.updateSyncWarnings;

                      var noWarnings =
                        (!syncWarnings || !Object.keys(syncWarnings).length) &&
                        !warning;
                      var nextNoWarnings =
                        (!nextSyncWarnings ||
                          !Object.keys(nextSyncWarnings).length) &&
                        !nextWarning;
                      if (
                        !(noWarnings && nextNoWarnings) &&
                        (!_plain2.default.deepEqual(
                          lastSyncWarnings,
                          nextSyncWarnings
                        ) ||
                          !_plain2.default.deepEqual(warning, nextWarning))
                      ) {
                        updateSyncWarnings(nextSyncWarnings, nextWarning);
                      }
                    }
                  },
                  {
                    key: "warnIfNeeded",
                    value: function warnIfNeeded(nextProps) {
                      var _props5 = this.props,
                        shouldValidate = _props5.shouldValidate,
                        warn = _props5.warn,
                        values = _props5.values;

                      var fieldLevelWarn = this.generateWarner();
                      if (warn || fieldLevelWarn) {
                        var initialRender = nextProps === undefined;
                        var fieldWarnerKeys = Object.keys(this.getWarners());
                        var shouldWarnResult = shouldValidate({
                          values: values,
                          nextProps: nextProps,
                          props: this.props,
                          initialRender: initialRender,
                          lastFieldValidatorKeys: this.lastFieldWarnerKeys,
                          fieldValidatorKeys: fieldWarnerKeys,
                          structure: structure
                        });

                        if (shouldWarnResult) {
                          var propsToWarn = initialRender
                            ? this.props
                            : nextProps;

                          var _merge3 = (0, _merge5.default)(
                              warn ? warn(propsToWarn.values, propsToWarn) : {},
                              fieldLevelWarn
                                ? fieldLevelWarn(
                                    propsToWarn.values,
                                    propsToWarn
                                  )
                                : {}
                            ),
                            _warning = _merge3._warning,
                            nextSyncWarnings = _objectWithoutProperties(
                              _merge3,
                              ["_warning"]
                            );

                          this.lastFieldWarnerKeys = fieldWarnerKeys;
                          this.updateSyncWarningsIfNeeded(
                            nextSyncWarnings,
                            _warning,
                            propsToWarn.syncWarnings
                          );
                        }
                      }
                    }
                  },
                  {
                    key: "componentWillMount",
                    value: function componentWillMount() {
                      this.initIfNeeded();
                      this.validateIfNeeded();
                      this.warnIfNeeded();
                    }
                  },
                  {
                    key: "componentWillReceiveProps",
                    value: function componentWillReceiveProps(nextProps) {
                      this.initIfNeeded(nextProps);
                      this.validateIfNeeded(nextProps);
                      this.warnIfNeeded(nextProps);
                      this.clearSubmitPromiseIfNeeded(nextProps);
                      this.submitIfNeeded(nextProps);
                      if (nextProps.onChange) {
                        if (!deepEqual(nextProps.values, this.props.values)) {
                          nextProps.onChange(
                            nextProps.values,
                            nextProps.dispatch,
                            nextProps
                          );
                        }
                      }
                    }
                  },
                  {
                    key: "shouldComponentUpdate",
                    value: function shouldComponentUpdate(nextProps) {
                      var _this3 = this;

                      if (!this.props.pure) return true;
                      var _initialConfig$immuta = initialConfig.immutableProps,
                        immutableProps =
                          _initialConfig$immuta === undefined
                            ? []
                            : _initialConfig$immuta;

                      return Object.keys(nextProps).some(function(prop) {
                        // useful to debug rerenders
                        // if (!plain.deepEqual(this.props[ prop ], nextProps[ prop ])) {
                        //   console.info(prop, 'changed', this.props[ prop ], '==>', nextProps[ prop ])
                        // }
                        if (~immutableProps.indexOf(prop)) {
                          return _this3.props[prop] !== nextProps[prop];
                        }
                        return (
                          !~propsToNotUpdateFor.indexOf(prop) &&
                          !deepEqual(_this3.props[prop], nextProps[prop])
                        );
                      });
                    }
                  },
                  {
                    key: "componentWillUnmount",
                    value: function componentWillUnmount() {
                      var _props6 = this.props,
                        destroyOnUnmount = _props6.destroyOnUnmount,
                        destroy = _props6.destroy;

                      if (destroyOnUnmount) {
                        this.destroyed = true;
                        destroy();
                      }
                    }
                  },
                  {
                    key: "getValues",
                    value: function getValues() {
                      return this.props.values;
                    }
                  },
                  {
                    key: "isValid",
                    value: function isValid() {
                      return this.props.valid;
                    }
                  },
                  {
                    key: "isPristine",
                    value: function isPristine() {
                      return this.props.pristine;
                    }
                  },
                  {
                    key: "register",
                    value: function register(
                      name,
                      type,
                      getValidator,
                      getWarner
                    ) {
                      this.props.registerField(name, type);
                      if (getValidator) {
                        this.fieldValidators[name] = getValidator;
                      }
                      if (getWarner) {
                        this.fieldWarners[name] = getWarner;
                      }
                    }
                  },
                  {
                    key: "unregister",
                    value: function unregister(name) {
                      if (!this.destroyed) {
                        if (
                          this.props.destroyOnUnmount ||
                          this.props.forceUnregisterOnUnmount
                        ) {
                          this.props.unregisterField(name);
                          delete this.fieldValidators[name];
                          delete this.fieldWarners[name];
                        } else {
                          this.props.unregisterField(name, false);
                        }
                      }
                    }
                  },
                  {
                    key: "getFieldList",
                    value: function getFieldList(options) {
                      var registeredFields = this.props.registeredFields;
                      var list = [];
                      if (!registeredFields) {
                        return list;
                      }
                      var keySeq = keys(registeredFields);
                      if (options && options.excludeFieldArray) {
                        keySeq = keySeq.filter(function(name) {
                          return (
                            getIn(registeredFields, "['" + name + "'].type") !==
                            "FieldArray"
                          );
                        });
                      }
                      return fromJS(
                        keySeq.reduce(function(acc, key) {
                          acc.push(key);
                          return acc;
                        }, list)
                      );
                    }
                  },
                  {
                    key: "getValidators",
                    value: function getValidators() {
                      var _this4 = this;

                      var validators = {};
                      Object.keys(this.fieldValidators).forEach(function(name) {
                        var validator = _this4.fieldValidators[name]();
                        if (validator) {
                          validators[name] = validator;
                        }
                      });
                      return validators;
                    }
                  },
                  {
                    key: "generateValidator",
                    value: function generateValidator() {
                      var validators = this.getValidators();
                      return Object.keys(validators).length
                        ? (0, _generateValidator3.default)(
                            validators,
                            structure
                          )
                        : undefined;
                    }
                  },
                  {
                    key: "getWarners",
                    value: function getWarners() {
                      var _this5 = this;

                      var warners = {};
                      Object.keys(this.fieldWarners).forEach(function(name) {
                        var warner = _this5.fieldWarners[name]();
                        if (warner) {
                          warners[name] = warner;
                        }
                      });
                      return warners;
                    }
                  },
                  {
                    key: "generateWarner",
                    value: function generateWarner() {
                      var warners = this.getWarners();
                      return Object.keys(warners).length
                        ? (0, _generateValidator3.default)(warners, structure)
                        : undefined;
                    }
                  },
                  {
                    key: "asyncValidate",
                    value: function asyncValidate(name, value) {
                      var _this6 = this;

                      var _props7 = this.props,
                        asyncBlurFields = _props7.asyncBlurFields,
                        asyncErrors = _props7.asyncErrors,
                        asyncValidate = _props7.asyncValidate,
                        dispatch = _props7.dispatch,
                        initialized = _props7.initialized,
                        pristine = _props7.pristine,
                        shouldAsyncValidate = _props7.shouldAsyncValidate,
                        startAsyncValidation = _props7.startAsyncValidation,
                        stopAsyncValidation = _props7.stopAsyncValidation,
                        syncErrors = _props7.syncErrors,
                        values = _props7.values;

                      var submitting = !name;
                      if (asyncValidate) {
                        var valuesToValidate = submitting
                          ? values
                          : setIn(values, name, value);
                        var syncValidationPasses =
                          submitting || !getIn(syncErrors, name);
                        var isBlurredField =
                          !submitting &&
                          (!asyncBlurFields ||
                            ~asyncBlurFields.indexOf(
                              name.replace(/\[[0-9]+\]/g, "[]")
                            ));
                        if (
                          (isBlurredField || submitting) &&
                          shouldAsyncValidate({
                            asyncErrors: asyncErrors,
                            initialized: initialized,
                            trigger: submitting ? "submit" : "blur",
                            blurredField: name,
                            pristine: pristine,
                            syncValidationPasses: syncValidationPasses
                          })
                        ) {
                          return (0, _asyncValidation2.default)(
                            function() {
                              return asyncValidate(
                                valuesToValidate,
                                dispatch,
                                _this6.props,
                                name
                              );
                            },
                            startAsyncValidation,
                            stopAsyncValidation,
                            name
                          );
                        }
                      }
                    }
                  },
                  {
                    key: "submitCompleted",
                    value: function submitCompleted(result) {
                      delete this.submitPromise;
                      return result;
                    }
                  },
                  {
                    key: "submitFailed",
                    value: function submitFailed(error) {
                      delete this.submitPromise;
                      throw error;
                    }
                  },
                  {
                    key: "listenToSubmit",
                    value: function listenToSubmit(promise) {
                      if (!(0, _isPromise2.default)(promise)) {
                        return promise;
                      }
                      this.submitPromise = promise;
                      return promise.then(
                        this.submitCompleted,
                        this.submitFailed
                      );
                    }
                  },
                  {
                    key: "submit",
                    value: function submit(submitOrEvent) {
                      var _this7 = this;

                      var _props8 = this.props,
                        onSubmit = _props8.onSubmit,
                        blur = _props8.blur,
                        change = _props8.change,
                        dispatch = _props8.dispatch;

                      if (
                        !submitOrEvent ||
                        (0, _silenceEvent2.default)(submitOrEvent)
                      ) {
                        // submitOrEvent is an event: fire submit if not already submitting
                        if (!this.submitPromise) {
                          // avoid recursive stack trace if use Form with onSubmit as handleSubmit
                          if (
                            this.innerOnSubmit &&
                            this.innerOnSubmit !== this.submit
                          ) {
                            // will call "submitOrEvent is the submit function" block below
                            return this.innerOnSubmit();
                          } else {
                            return this.listenToSubmit(
                              (0, _handleSubmit2.default)(
                                checkSubmit(onSubmit),
                                _extends(
                                  {},
                                  this.props,
                                  (0, _redux.bindActionCreators)(
                                    { blur: blur, change: change },
                                    dispatch
                                  )
                                ),
                                this.props.validExceptSubmit,
                                this.asyncValidate,
                                this.getFieldList({ excludeFieldArray: true })
                              )
                            );
                          }
                        }
                      } else {
                        // submitOrEvent is the submit function: return deferred submit thunk
                        return (0, _silenceEvents2.default)(function() {
                          return (
                            !_this7.submitPromise &&
                            _this7.listenToSubmit(
                              (0, _handleSubmit2.default)(
                                checkSubmit(submitOrEvent),
                                _extends(
                                  {},
                                  _this7.props,
                                  (0, _redux.bindActionCreators)(
                                    { blur: blur, change: change },
                                    dispatch
                                  )
                                ),
                                _this7.props.validExceptSubmit,
                                _this7.asyncValidate,
                                _this7.getFieldList({ excludeFieldArray: true })
                              )
                            )
                          );
                        });
                      }
                    }
                  },
                  {
                    key: "reset",
                    value: function reset() {
                      this.props.reset();
                    }
                  },
                  {
                    key: "render",
                    value: function render() {
                      // remove some redux-form config-only props
                      /* eslint-disable no-unused-vars */
                      var _props9 = this.props,
                        anyTouched = _props9.anyTouched,
                        arrayInsert = _props9.arrayInsert,
                        arrayMove = _props9.arrayMove,
                        arrayPop = _props9.arrayPop,
                        arrayPush = _props9.arrayPush,
                        arrayRemove = _props9.arrayRemove,
                        arrayRemoveAll = _props9.arrayRemoveAll,
                        arrayShift = _props9.arrayShift,
                        arraySplice = _props9.arraySplice,
                        arraySwap = _props9.arraySwap,
                        arrayUnshift = _props9.arrayUnshift,
                        asyncErrors = _props9.asyncErrors,
                        asyncValidate = _props9.asyncValidate,
                        asyncValidating = _props9.asyncValidating,
                        blur = _props9.blur,
                        change = _props9.change,
                        destroy = _props9.destroy,
                        destroyOnUnmount = _props9.destroyOnUnmount,
                        forceUnregisterOnUnmount =
                          _props9.forceUnregisterOnUnmount,
                        dirty = _props9.dirty,
                        dispatch = _props9.dispatch,
                        enableReinitialize = _props9.enableReinitialize,
                        error = _props9.error,
                        focus = _props9.focus,
                        form = _props9.form,
                        getFormState = _props9.getFormState,
                        initialize = _props9.initialize,
                        initialized = _props9.initialized,
                        initialValues = _props9.initialValues,
                        invalid = _props9.invalid,
                        keepDirtyOnReinitialize =
                          _props9.keepDirtyOnReinitialize,
                        pristine = _props9.pristine,
                        propNamespace = _props9.propNamespace,
                        registeredFields = _props9.registeredFields,
                        registerField = _props9.registerField,
                        reset = _props9.reset,
                        setSubmitFailed = _props9.setSubmitFailed,
                        setSubmitSucceeded = _props9.setSubmitSucceeded,
                        shouldAsyncValidate = _props9.shouldAsyncValidate,
                        shouldValidate = _props9.shouldValidate,
                        startAsyncValidation = _props9.startAsyncValidation,
                        startSubmit = _props9.startSubmit,
                        stopAsyncValidation = _props9.stopAsyncValidation,
                        stopSubmit = _props9.stopSubmit,
                        submitting = _props9.submitting,
                        submitFailed = _props9.submitFailed,
                        submitSucceeded = _props9.submitSucceeded,
                        touch = _props9.touch,
                        touchOnBlur = _props9.touchOnBlur,
                        touchOnChange = _props9.touchOnChange,
                        persistentSubmitErrors = _props9.persistentSubmitErrors,
                        syncErrors = _props9.syncErrors,
                        syncWarnings = _props9.syncWarnings,
                        unregisterField = _props9.unregisterField,
                        untouch = _props9.untouch,
                        updateSyncErrors = _props9.updateSyncErrors,
                        updateSyncWarnings = _props9.updateSyncWarnings,
                        valid = _props9.valid,
                        validExceptSubmit = _props9.validExceptSubmit,
                        values = _props9.values,
                        warning = _props9.warning,
                        rest = _objectWithoutProperties(_props9, [
                          "anyTouched",
                          "arrayInsert",
                          "arrayMove",
                          "arrayPop",
                          "arrayPush",
                          "arrayRemove",
                          "arrayRemoveAll",
                          "arrayShift",
                          "arraySplice",
                          "arraySwap",
                          "arrayUnshift",
                          "asyncErrors",
                          "asyncValidate",
                          "asyncValidating",
                          "blur",
                          "change",
                          "destroy",
                          "destroyOnUnmount",
                          "forceUnregisterOnUnmount",
                          "dirty",
                          "dispatch",
                          "enableReinitialize",
                          "error",
                          "focus",
                          "form",
                          "getFormState",
                          "initialize",
                          "initialized",
                          "initialValues",
                          "invalid",
                          "keepDirtyOnReinitialize",
                          "pristine",
                          "propNamespace",
                          "registeredFields",
                          "registerField",
                          "reset",
                          "setSubmitFailed",
                          "setSubmitSucceeded",
                          "shouldAsyncValidate",
                          "shouldValidate",
                          "startAsyncValidation",
                          "startSubmit",
                          "stopAsyncValidation",
                          "stopSubmit",
                          "submitting",
                          "submitFailed",
                          "submitSucceeded",
                          "touch",
                          "touchOnBlur",
                          "touchOnChange",
                          "persistentSubmitErrors",
                          "syncErrors",
                          "syncWarnings",
                          "unregisterField",
                          "untouch",
                          "updateSyncErrors",
                          "updateSyncWarnings",
                          "valid",
                          "validExceptSubmit",
                          "values",
                          "warning"
                        ]);
                      /* eslint-enable no-unused-vars */

                      var reduxFormProps = _extends(
                        {
                          anyTouched: anyTouched,
                          asyncValidate: this.asyncValidate,
                          asyncValidating: asyncValidating
                        },
                        (0, _redux.bindActionCreators)(
                          { blur: blur, change: change },
                          dispatch
                        ),
                        {
                          destroy: destroy,
                          dirty: dirty,
                          dispatch: dispatch,
                          error: error,
                          form: form,
                          handleSubmit: this.submit,
                          initialize: initialize,
                          initialized: initialized,
                          initialValues: initialValues,
                          invalid: invalid,
                          pristine: pristine,
                          reset: reset,
                          submitting: submitting,
                          submitFailed: submitFailed,
                          submitSucceeded: submitSucceeded,
                          touch: touch,
                          untouch: untouch,
                          valid: valid,
                          warning: warning
                        }
                      );
                      var propsToPass = _extends(
                        {},
                        propNamespace
                          ? _defineProperty({}, propNamespace, reduxFormProps)
                          : reduxFormProps,
                        rest
                      );
                      if (isClassComponent(WrappedComponent)) {
                        propsToPass.ref = "wrapped";
                      }
                      return (0, _react.createElement)(
                        WrappedComponent,
                        propsToPass
                      );
                    }
                  }
                ]);

                return Form;
              })(_react.Component);

              Form.displayName =
                "Form(" + (0, _getDisplayName2.default)(WrappedComponent) + ")";
              Form.WrappedComponent = WrappedComponent;
              Form.childContextTypes = {
                _reduxForm: _propTypes2.default.object.isRequired
              };
              Form.propTypes = {
                destroyOnUnmount: _propTypes2.default.bool,
                forceUnregisterOnUnmount: _propTypes2.default.bool,
                form: _propTypes2.default.string.isRequired,
                initialValues: _propTypes2.default.oneOfType([
                  _propTypes2.default.array,
                  _propTypes2.default.object
                ]),
                getFormState: _propTypes2.default.func,
                onSubmitFail: _propTypes2.default.func,
                onSubmitSuccess: _propTypes2.default.func,
                propNameSpace: _propTypes2.default.string,
                validate: _propTypes2.default.func,
                warn: _propTypes2.default.func,
                touchOnBlur: _propTypes2.default.bool,
                touchOnChange: _propTypes2.default.bool,
                triggerSubmit: _propTypes2.default.bool,
                persistentSubmitErrors: _propTypes2.default.bool,
                registeredFields: _propTypes2.default.any
              };

              var connector = (0, _reactRedux.connect)(
                function(state, props) {
                  var form = props.form,
                    getFormState = props.getFormState,
                    initialValues = props.initialValues,
                    enableReinitialize = props.enableReinitialize,
                    keepDirtyOnReinitialize = props.keepDirtyOnReinitialize;

                  var formState =
                    getIn(getFormState(state) || empty, form) || empty;
                  var stateInitial = getIn(formState, "initial");
                  var initialized = !!stateInitial;

                  var shouldUpdateInitialValues =
                    enableReinitialize &&
                    initialized &&
                    !deepEqual(initialValues, stateInitial);
                  var shouldResetValues =
                    shouldUpdateInitialValues && !keepDirtyOnReinitialize;

                  var initial = initialValues || stateInitial || empty;

                  if (shouldUpdateInitialValues) {
                    initial = stateInitial || empty;
                  }

                  var values = getIn(formState, "values") || initial;

                  if (shouldResetValues) {
                    values = initial;
                  }

                  var pristine =
                    shouldResetValues || deepEqual(initial, values);
                  var asyncErrors = getIn(formState, "asyncErrors");
                  var syncErrors = getIn(formState, "syncErrors") || {};
                  var syncWarnings = getIn(formState, "syncWarnings") || {};
                  var registeredFields = getIn(formState, "registeredFields");
                  var valid = isValid(form, getFormState, false)(state);
                  var validExceptSubmit = isValid(form, getFormState, true)(
                    state
                  );
                  var anyTouched = !!getIn(formState, "anyTouched");
                  var submitting = !!getIn(formState, "submitting");
                  var submitFailed = !!getIn(formState, "submitFailed");
                  var submitSucceeded = !!getIn(formState, "submitSucceeded");
                  var error = getIn(formState, "error");
                  var warning = getIn(formState, "warning");
                  var triggerSubmit = getIn(formState, "triggerSubmit");
                  return {
                    anyTouched: anyTouched,
                    asyncErrors: asyncErrors,
                    asyncValidating:
                      getIn(formState, "asyncValidating") || false,
                    dirty: !pristine,
                    error: error,
                    initialized: initialized,
                    invalid: !valid,
                    pristine: pristine,
                    registeredFields: registeredFields,
                    submitting: submitting,
                    submitFailed: submitFailed,
                    submitSucceeded: submitSucceeded,
                    syncErrors: syncErrors,
                    syncWarnings: syncWarnings,
                    triggerSubmit: triggerSubmit,
                    values: values,
                    valid: valid,
                    validExceptSubmit: validExceptSubmit,
                    warning: warning
                  };
                },
                function(dispatch, initialProps) {
                  var bindForm = function bindForm(actionCreator) {
                    return actionCreator.bind(
                      null,
                      initialProps.form

                      // Bind the first parameter on `props.form`
                    );
                  };
                  var boundFormACs = (0, _mapValues3.default)(
                    formActions,
                    bindForm
                  );
                  var boundArrayACs = (0, _mapValues3.default)(
                    arrayActions,
                    bindForm
                  );
                  var boundBlur = function boundBlur(field, value) {
                    return blur(
                      initialProps.form,
                      field,
                      value,
                      !!initialProps.touchOnBlur
                    );
                  };
                  var boundChange = function boundChange(field, value) {
                    return change(
                      initialProps.form,
                      field,
                      value,
                      !!initialProps.touchOnChange,
                      !!initialProps.persistentSubmitErrors
                    );
                  };
                  var boundFocus = bindForm(
                    focus

                    // Wrap action creators with `dispatch`
                  );
                  var connectedFormACs = (0, _redux.bindActionCreators)(
                    boundFormACs,
                    dispatch
                  );
                  var connectedArrayACs = {
                    insert: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayInsert,
                      dispatch
                    ),
                    move: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayMove,
                      dispatch
                    ),
                    pop: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayPop,
                      dispatch
                    ),
                    push: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayPush,
                      dispatch
                    ),
                    remove: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayRemove,
                      dispatch
                    ),
                    removeAll: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayRemoveAll,
                      dispatch
                    ),
                    shift: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayShift,
                      dispatch
                    ),
                    splice: (0, _redux.bindActionCreators)(
                      boundArrayACs.arraySplice,
                      dispatch
                    ),
                    swap: (0, _redux.bindActionCreators)(
                      boundArrayACs.arraySwap,
                      dispatch
                    ),
                    unshift: (0, _redux.bindActionCreators)(
                      boundArrayACs.arrayUnshift,
                      dispatch
                    )
                  };

                  var computedActions = _extends(
                    {},
                    connectedFormACs,
                    boundArrayACs,
                    {
                      blur: boundBlur,
                      change: boundChange,
                      array: connectedArrayACs,
                      focus: boundFocus,
                      dispatch: dispatch
                    }
                  );

                  return function() {
                    return computedActions;
                  };
                },
                undefined,
                { withRef: true }
              );
              var ConnectedForm = (0, _hoistNonReactStatics2.default)(
                connector(Form),
                WrappedComponent
              );
              ConnectedForm.defaultProps = config;

              // build outer component to expose instance api
              return (function(_Component2) {
                _inherits(ReduxForm, _Component2);

                function ReduxForm() {
                  _classCallCheck(this, ReduxForm);

                  return _possibleConstructorReturn(
                    this,
                    (
                      ReduxForm.__proto__ || Object.getPrototypeOf(ReduxForm)
                    ).apply(this, arguments)
                  );
                }

                _createClass(ReduxForm, [
                  {
                    key: "submit",
                    value: function submit() {
                      return this.refs.wrapped.getWrappedInstance().submit();
                    }
                  },
                  {
                    key: "reset",
                    value: function reset() {
                      return this.refs.wrapped.getWrappedInstance().reset();
                    }
                  },
                  {
                    key: "render",
                    value: function render() {
                      var _props10 = this.props,
                        initialValues = _props10.initialValues,
                        rest = _objectWithoutProperties(_props10, [
                          "initialValues"
                        ]);

                      return (0, _react.createElement)(
                        ConnectedForm,
                        _extends({}, rest, {
                          ref: "wrapped",
                          // convert initialValues if need to
                          initialValues: fromJS(initialValues)
                        })
                      );
                    }
                  },
                  {
                    key: "valid",
                    get: function get() {
                      return this.refs.wrapped.getWrappedInstance().isValid();
                    }
                  },
                  {
                    key: "invalid",
                    get: function get() {
                      return !this.valid;
                    }
                  },
                  {
                    key: "pristine",
                    get: function get() {
                      return this.refs.wrapped
                        .getWrappedInstance()
                        .isPristine();
                    }
                  },
                  {
                    key: "dirty",
                    get: function get() {
                      return !this.pristine;
                    }
                  },
                  {
                    key: "values",
                    get: function get() {
                      return this.refs.wrapped.getWrappedInstance().getValues();
                    }
                  },
                  {
                    key: "fieldList",
                    get: function get() {
                      // mainly provided for testing
                      return this.refs.wrapped
                        .getWrappedInstance()
                        .getFieldList();
                    }
                  },
                  {
                    key: "wrappedInstance",
                    get: function get() {
                      // for testing
                      return this.refs.wrapped.getWrappedInstance().refs
                        .wrapped;
                    }
                  }
                ]);

                return ReduxForm;
              })(_react.Component);
            };
          };
        };

        exports.default = createReduxForm;

        /***/
      },
      /* 382 */
      /***/ function(module, exports, __webpack_require__) {
        var baseMerge = __webpack_require__(383),
          createAssigner = __webpack_require__(400);

        /**
         * This method is like `_.assign` except that it recursively merges own and
         * inherited enumerable string keyed properties of source objects into the
         * destination object. Source properties that resolve to `undefined` are
         * skipped if a destination value exists. Array and plain object properties
         * are merged recursively. Other objects and value types are overridden by
         * assignment. Source objects are applied from left to right. Subsequent
         * sources overwrite property assignments of previous sources.
         *
         * **Note:** This method mutates `object`.
         *
         * @static
         * @memberOf _
         * @since 0.5.0
         * @category Object
         * @param {Object} object The destination object.
         * @param {...Object} [sources] The source objects.
         * @returns {Object} Returns `object`.
         * @example
         *
         * var object = {
         *   'a': [{ 'b': 2 }, { 'd': 4 }]
         * };
         *
         * var other = {
         *   'a': [{ 'c': 3 }, { 'e': 5 }]
         * };
         *
         * _.merge(object, other);
         * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
         */
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });

        module.exports = merge;

        /***/
      },
      /* 383 */
      /***/ function(module, exports, __webpack_require__) {
        var Stack = __webpack_require__(258),
          assignMergeValue = __webpack_require__(384),
          baseFor = __webpack_require__(323),
          baseMergeDeep = __webpack_require__(385),
          isObject = __webpack_require__(226),
          keysIn = __webpack_require__(397);

        /**
         * The base implementation of `_.merge` without support for multiple sources.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {number} srcIndex The index of `source`.
         * @param {Function} [customizer] The function to customize merged values.
         * @param {Object} [stack] Tracks traversed source values and their merged
         *  counterparts.
         */
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(
            source,
            function(srcValue, key) {
              if (isObject(srcValue)) {
                stack || (stack = new Stack());
                baseMergeDeep(
                  object,
                  source,
                  key,
                  srcIndex,
                  baseMerge,
                  customizer,
                  stack
                );
              } else {
                var newValue = customizer
                  ? customizer(
                      object[key],
                      srcValue,
                      key + "",
                      object,
                      source,
                      stack
                    )
                  : undefined;

                if (newValue === undefined) {
                  newValue = srcValue;
                }
                assignMergeValue(object, key, newValue);
              }
            },
            keysIn
          );
        }

        module.exports = baseMerge;

        /***/
      },
      /* 384 */
      /***/ function(module, exports, __webpack_require__) {
        var baseAssignValue = __webpack_require__(320),
          eq = __webpack_require__(239);

        /**
         * This function is like `assignValue` except that it doesn't assign
         * `undefined` values.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignMergeValue(object, key, value) {
          if (
            (value !== undefined && !eq(object[key], value)) ||
            (value === undefined && !(key in object))
          ) {
            baseAssignValue(object, key, value);
          }
        }

        module.exports = assignMergeValue;

        /***/
      },
      /* 385 */
      /***/ function(module, exports, __webpack_require__) {
        var assignMergeValue = __webpack_require__(384),
          cloneBuffer = __webpack_require__(386),
          cloneTypedArray = __webpack_require__(387),
          copyArray = __webpack_require__(205),
          initCloneObject = __webpack_require__(389),
          isArguments = __webpack_require__(284),
          isArray = __webpack_require__(206),
          isArrayLikeObject = __webpack_require__(392),
          isBuffer = __webpack_require__(286),
          isFunction = __webpack_require__(225),
          isObject = __webpack_require__(226),
          isPlainObject = __webpack_require__(393),
          isTypedArray = __webpack_require__(290),
          toPlainObject = __webpack_require__(394);

        /**
         * A specialized version of `baseMerge` for arrays and objects which performs
         * deep merges and tracks traversed objects enabling objects with circular
         * references to be merged.
         *
         * @private
         * @param {Object} object The destination object.
         * @param {Object} source The source object.
         * @param {string} key The key of the value to merge.
         * @param {number} srcIndex The index of `source`.
         * @param {Function} mergeFunc The function to merge values.
         * @param {Function} [customizer] The function to customize assigned values.
         * @param {Object} [stack] Tracks traversed source values and their merged
         *  counterparts.
         */
        function baseMergeDeep(
          object,
          source,
          key,
          srcIndex,
          mergeFunc,
          customizer,
          stack
        ) {
          var objValue = object[key],
            srcValue = source[key],
            stacked = stack.get(srcValue);

          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer
            ? customizer(objValue, srcValue, key + "", object, source, stack)
            : undefined;

          var isCommon = newValue === undefined;

          if (isCommon) {
            var isArr = isArray(srcValue),
              isBuff = !isArr && isBuffer(srcValue),
              isTyped = !isArr && !isBuff && isTypedArray(srcValue);

            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (
                !isObject(objValue) ||
                (srcIndex && isFunction(objValue))
              ) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            // Recursively merge objects and arrays (susceptible to call stack limits).
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }

        module.exports = baseMergeDeep;

        /***/
      },
      /* 386 */
      /***/ function(module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function(module) {
          var root = __webpack_require__(210);

          /** Detect free variable `exports`. */
          var freeExports =
            typeof exports == "object" &&
            exports &&
            !exports.nodeType &&
            exports;

          /** Detect free variable `module`. */
          var freeModule =
            freeExports &&
            typeof module == "object" &&
            module &&
            !module.nodeType &&
            module;

          /** Detect the popular CommonJS extension `module.exports`. */
          var moduleExports = freeModule && freeModule.exports === freeExports;

          /** Built-in value references. */
          var Buffer = moduleExports ? root.Buffer : undefined,
            allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

          /**
           * Creates a clone of  `buffer`.
           *
           * @private
           * @param {Buffer} buffer The buffer to clone.
           * @param {boolean} [isDeep] Specify a deep clone.
           * @returns {Buffer} Returns the cloned buffer.
           */
          function cloneBuffer(buffer, isDeep) {
            if (isDeep) {
              return buffer.slice();
            }
            var length = buffer.length,
              result = allocUnsafe
                ? allocUnsafe(length)
                : new buffer.constructor(length);

            buffer.copy(result);
            return result;
          }

          module.exports = cloneBuffer;

          /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__(287)(module)));

        /***/
      },
      /* 387 */
      /***/ function(module, exports, __webpack_require__) {
        var cloneArrayBuffer = __webpack_require__(388);

        /**
         * Creates a clone of `typedArray`.
         *
         * @private
         * @param {Object} typedArray The typed array to clone.
         * @param {boolean} [isDeep] Specify a deep clone.
         * @returns {Object} Returns the cloned typed array.
         */
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep
            ? cloneArrayBuffer(typedArray.buffer)
            : typedArray.buffer;
          return new typedArray.constructor(
            buffer,
            typedArray.byteOffset,
            typedArray.length
          );
        }

        module.exports = cloneTypedArray;

        /***/
      },
      /* 388 */
      /***/ function(module, exports, __webpack_require__) {
        var Uint8Array = __webpack_require__(271);

        /**
         * Creates a clone of `arrayBuffer`.
         *
         * @private
         * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
         * @returns {ArrayBuffer} Returns the cloned array buffer.
         */
        function cloneArrayBuffer(arrayBuffer) {
          var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array(result).set(new Uint8Array(arrayBuffer));
          return result;
        }

        module.exports = cloneArrayBuffer;

        /***/
      },
      /* 389 */
      /***/ function(module, exports, __webpack_require__) {
        var baseCreate = __webpack_require__(390),
          getPrototype = __webpack_require__(391),
          isPrototype = __webpack_require__(296);

        /**
         * Initializes an object clone.
         *
         * @private
         * @param {Object} object The object to clone.
         * @returns {Object} Returns the initialized clone.
         */
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object)
            ? baseCreate(getPrototype(object))
            : {};
        }

        module.exports = initCloneObject;

        /***/
      },
      /* 390 */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(226);

        /** Built-in value references. */
        var objectCreate = Object.create;

        /**
         * The base implementation of `_.create` without support for assigning
         * properties to the created object.
         *
         * @private
         * @param {Object} proto The object to inherit from.
         * @returns {Object} Returns the new object.
         */
        var baseCreate = (function() {
          function object() {}
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result = new object();
            object.prototype = undefined;
            return result;
          };
        })();

        module.exports = baseCreate;

        /***/
      },
      /* 391 */
      /***/ function(module, exports, __webpack_require__) {
        var overArg = __webpack_require__(298);

        /** Built-in value references. */
        var getPrototype = overArg(Object.getPrototypeOf, Object);

        module.exports = getPrototype;

        /***/
      },
      /* 392 */
      /***/ function(module, exports, __webpack_require__) {
        var isArrayLike = __webpack_require__(299),
          isObjectLike = __webpack_require__(214);

        /**
         * This method is like `_.isArrayLike` except that it also checks if `value`
         * is an object.
         *
         * @static
         * @memberOf _
         * @since 4.0.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is an array-like object,
         *  else `false`.
         * @example
         *
         * _.isArrayLikeObject([1, 2, 3]);
         * // => true
         *
         * _.isArrayLikeObject(document.body.children);
         * // => true
         *
         * _.isArrayLikeObject('abc');
         * // => false
         *
         * _.isArrayLikeObject(_.noop);
         * // => false
         */
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }

        module.exports = isArrayLikeObject;

        /***/
      },
      /* 393 */
      /***/ function(module, exports, __webpack_require__) {
        var baseGetTag = __webpack_require__(208),
          getPrototype = __webpack_require__(391),
          isObjectLike = __webpack_require__(214);

        /** `Object#toString` result references. */
        var objectTag = "[object Object]";

        /** Used for built-in method references. */
        var funcProto = Function.prototype,
          objectProto = Object.prototype;

        /** Used to resolve the decompiled source of functions. */
        var funcToString = funcProto.toString;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /** Used to infer the `Object` constructor. */
        var objectCtorString = funcToString.call(Object);

        /**
         * Checks if `value` is a plain object, that is, an object created by the
         * `Object` constructor or one with a `[[Prototype]]` of `null`.
         *
         * @static
         * @memberOf _
         * @since 0.8.0
         * @category Lang
         * @param {*} value The value to check.
         * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         * }
         *
         * _.isPlainObject(new Foo);
         * // => false
         *
         * _.isPlainObject([1, 2, 3]);
         * // => false
         *
         * _.isPlainObject({ 'x': 0, 'y': 0 });
         * // => true
         *
         * _.isPlainObject(Object.create(null));
         * // => true
         */
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor =
            hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return (
            typeof Ctor == "function" &&
            Ctor instanceof Ctor &&
            funcToString.call(Ctor) == objectCtorString
          );
        }

        module.exports = isPlainObject;

        /***/
      },
      /* 394 */
      /***/ function(module, exports, __webpack_require__) {
        var copyObject = __webpack_require__(395),
          keysIn = __webpack_require__(397);

        /**
         * Converts `value` to a plain object flattening inherited enumerable string
         * keyed properties of `value` to own properties of the plain object.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Lang
         * @param {*} value The value to convert.
         * @returns {Object} Returns the converted plain object.
         * @example
         *
         * function Foo() {
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.assign({ 'a': 1 }, new Foo);
         * // => { 'a': 1, 'b': 2 }
         *
         * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
         * // => { 'a': 1, 'b': 2, 'c': 3 }
         */
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }

        module.exports = toPlainObject;

        /***/
      },
      /* 395 */
      /***/ function(module, exports, __webpack_require__) {
        var assignValue = __webpack_require__(396),
          baseAssignValue = __webpack_require__(320);

        /**
         * Copies properties of `source` to `object`.
         *
         * @private
         * @param {Object} source The object to copy properties from.
         * @param {Array} props The property identifiers to copy.
         * @param {Object} [object={}] The object to copy properties to.
         * @param {Function} [customizer] The function to customize copied values.
         * @returns {Object} Returns `object`.
         */
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});

          var index = -1,
            length = props.length;

          while (++index < length) {
            var key = props[index];

            var newValue = customizer
              ? customizer(object[key], source[key], key, object, source)
              : undefined;

            if (newValue === undefined) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }

        module.exports = copyObject;

        /***/
      },
      /* 396 */
      /***/ function(module, exports, __webpack_require__) {
        var baseAssignValue = __webpack_require__(320),
          eq = __webpack_require__(239);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * Assigns `value` to `key` of `object` if the existing value is not equivalent
         * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
         * for equality comparisons.
         *
         * @private
         * @param {Object} object The object to modify.
         * @param {string} key The key of the property to assign.
         * @param {*} value The value to assign.
         */
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (
            !(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
            (value === undefined && !(key in object))
          ) {
            baseAssignValue(object, key, value);
          }
        }

        module.exports = assignValue;

        /***/
      },
      /* 397 */
      /***/ function(module, exports, __webpack_require__) {
        var arrayLikeKeys = __webpack_require__(282),
          baseKeysIn = __webpack_require__(398),
          isArrayLike = __webpack_require__(299);

        /**
         * Creates an array of the own and inherited enumerable property names of `object`.
         *
         * **Note:** Non-object values are coerced to objects.
         *
         * @static
         * @memberOf _
         * @since 3.0.0
         * @category Object
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         * @example
         *
         * function Foo() {
         *   this.a = 1;
         *   this.b = 2;
         * }
         *
         * Foo.prototype.c = 3;
         *
         * _.keysIn(new Foo);
         * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
         */
        function keysIn(object) {
          return isArrayLike(object)
            ? arrayLikeKeys(object, true)
            : baseKeysIn(object);
        }

        module.exports = keysIn;

        /***/
      },
      /* 398 */
      /***/ function(module, exports, __webpack_require__) {
        var isObject = __webpack_require__(226),
          isPrototype = __webpack_require__(296),
          nativeKeysIn = __webpack_require__(399);

        /** Used for built-in method references. */
        var objectProto = Object.prototype;

        /** Used to check objects for own properties. */
        var hasOwnProperty = objectProto.hasOwnProperty;

        /**
         * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object),
            result = [];

          for (var key in object) {
            if (
              !(
                key == "constructor" &&
                (isProto || !hasOwnProperty.call(object, key))
              )
            ) {
              result.push(key);
            }
          }
          return result;
        }

        module.exports = baseKeysIn;

        /***/
      },
      /* 399 */
      /***/ function(module, exports) {
        /**
         * This function is like
         * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
         * except that it includes inherited enumerable properties.
         *
         * @private
         * @param {Object} object The object to query.
         * @returns {Array} Returns the array of property names.
         */
        function nativeKeysIn(object) {
          var result = [];
          if (object != null) {
            for (var key in Object(object)) {
              result.push(key);
            }
          }
          return result;
        }

        module.exports = nativeKeysIn;

        /***/
      },
      /* 400 */
      /***/ function(module, exports, __webpack_require__) {
        var baseRest = __webpack_require__(401),
          isIterateeCall = __webpack_require__(408);

        /**
         * Creates a function like `_.assign`.
         *
         * @private
         * @param {Function} assigner The function to assign values.
         * @returns {Function} Returns the new assigner function.
         */
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1,
              length = sources.length,
              customizer = length > 1 ? sources[length - 1] : undefined,
              guard = length > 2 ? sources[2] : undefined;

            customizer =
              assigner.length > 3 && typeof customizer == "function"
                ? (length--, customizer)
                : undefined;

            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined : customizer;
              length = 1;
            }
            object = Object(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }

        module.exports = createAssigner;

        /***/
      },
      /* 401 */
      /***/ function(module, exports, __webpack_require__) {
        var identity = __webpack_require__(339),
          overRest = __webpack_require__(402),
          setToString = __webpack_require__(404);

        /**
         * The base implementation of `_.rest` which doesn't validate or coerce arguments.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @returns {Function} Returns the new function.
         */
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }

        module.exports = baseRest;

        /***/
      },
      /* 402 */
      /***/ function(module, exports, __webpack_require__) {
        var apply = __webpack_require__(403);

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeMax = Math.max;

        /**
         * A specialized version of `baseRest` which transforms the rest array.
         *
         * @private
         * @param {Function} func The function to apply a rest parameter to.
         * @param {number} [start=func.length-1] The start position of the rest parameter.
         * @param {Function} transform The rest array transform.
         * @returns {Function} Returns the new function.
         */
        function overRest(func, start, transform) {
          start = nativeMax(start === undefined ? func.length - 1 : start, 0);
          return function() {
            var args = arguments,
              index = -1,
              length = nativeMax(args.length - start, 0),
              array = Array(length);

            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform(array);
            return apply(func, this, otherArgs);
          };
        }

        module.exports = overRest;

        /***/
      },
      /* 403 */
      /***/ function(module, exports) {
        /**
         * A faster alternative to `Function#apply`, this function invokes `func`
         * with the `this` binding of `thisArg` and the arguments of `args`.
         *
         * @private
         * @param {Function} func The function to invoke.
         * @param {*} thisArg The `this` binding of `func`.
         * @param {Array} args The arguments to invoke `func` with.
         * @returns {*} Returns the result of `func`.
         */
        function apply(func, thisArg, args) {
          switch (args.length) {
            case 0:
              return func.call(thisArg);
            case 1:
              return func.call(thisArg, args[0]);
            case 2:
              return func.call(thisArg, args[0], args[1]);
            case 3:
              return func.call(thisArg, args[0], args[1], args[2]);
          }
          return func.apply(thisArg, args);
        }

        module.exports = apply;

        /***/
      },
      /* 404 */
      /***/ function(module, exports, __webpack_require__) {
        var baseSetToString = __webpack_require__(405),
          shortOut = __webpack_require__(407);

        /**
         * Sets the `toString` method of `func` to return `string`.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var setToString = shortOut(baseSetToString);

        module.exports = setToString;

        /***/
      },
      /* 405 */
      /***/ function(module, exports, __webpack_require__) {
        var constant = __webpack_require__(406),
          defineProperty = __webpack_require__(321),
          identity = __webpack_require__(339);

        /**
         * The base implementation of `setToString` without support for hot loop shorting.
         *
         * @private
         * @param {Function} func The function to modify.
         * @param {Function} string The `toString` result.
         * @returns {Function} Returns `func`.
         */
        var baseSetToString = !defineProperty
          ? identity
          : function(func, string) {
              return defineProperty(func, "toString", {
                configurable: true,
                enumerable: false,
                value: constant(string),
                writable: true
              });
            };

        module.exports = baseSetToString;

        /***/
      },
      /* 406 */
      /***/ function(module, exports) {
        /**
         * Creates a function that returns `value`.
         *
         * @static
         * @memberOf _
         * @since 2.4.0
         * @category Util
         * @param {*} value The value to return from the new function.
         * @returns {Function} Returns the new constant function.
         * @example
         *
         * var objects = _.times(2, _.constant({ 'a': 1 }));
         *
         * console.log(objects);
         * // => [{ 'a': 1 }, { 'a': 1 }]
         *
         * console.log(objects[0] === objects[1]);
         * // => true
         */
        function constant(value) {
          return function() {
            return value;
          };
        }

        module.exports = constant;

        /***/
      },
      /* 407 */
      /***/ function(module, exports) {
        /** Used to detect hot functions by number of calls within a span of milliseconds. */
        var HOT_COUNT = 800,
          HOT_SPAN = 16;

        /* Built-in method references for those with the same name as other `lodash` methods. */
        var nativeNow = Date.now;

        /**
         * Creates a function that'll short out and invoke `identity` instead
         * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
         * milliseconds.
         *
         * @private
         * @param {Function} func The function to restrict.
         * @returns {Function} Returns the new shortable function.
         */
        function shortOut(func) {
          var count = 0,
            lastCalled = 0;

          return function() {
            var stamp = nativeNow(),
              remaining = HOT_SPAN - (stamp - lastCalled);

            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined, arguments);
          };
        }

        module.exports = shortOut;

        /***/
      },
      /* 408 */
      /***/ function(module, exports, __webpack_require__) {
        var eq = __webpack_require__(239),
          isArrayLike = __webpack_require__(299),
          isIndex = __webpack_require__(289),
          isObject = __webpack_require__(226);

        /**
         * Checks if the given arguments are from an iteratee call.
         *
         * @private
         * @param {*} value The potential iteratee value argument.
         * @param {*} index The potential iteratee index or key argument.
         * @param {*} object The potential iteratee object argument.
         * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
         *  else `false`.
         */
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (
            type == "number"
              ? isArrayLike(object) && isIndex(index, object.length)
              : type == "string" && index in object
          ) {
            return eq(object[index], value);
          }
          return false;
        }

        module.exports = isIterateeCall;

        /***/
      },
      /* 409 */
      /***/ function(module, exports) {
        /**
         * Copyright 2015, Yahoo! Inc.
         * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
         */
        "use strict";

        var REACT_STATICS = {
          childContextTypes: true,
          contextTypes: true,
          defaultProps: true,
          displayName: true,
          getDefaultProps: true,
          mixins: true,
          propTypes: true,
          type: true
        };

        var KNOWN_STATICS = {
          name: true,
          length: true,
          prototype: true,
          caller: true,
          arguments: true,
          arity: true
        };

        var isGetOwnPropertySymbolsAvailable =
          typeof Object.getOwnPropertySymbols === "function";

        module.exports = function hoistNonReactStatics(
          targetComponent,
          sourceComponent,
          customStatics
        ) {
          if (typeof sourceComponent !== "string") {
            // don't hoist over string (html) components
            var keys = Object.getOwnPropertyNames(sourceComponent);

            /* istanbul ignore else */
            if (isGetOwnPropertySymbolsAvailable) {
              keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
            }

            for (var i = 0; i < keys.length; ++i) {
              if (
                !REACT_STATICS[keys[i]] &&
                !KNOWN_STATICS[keys[i]] &&
                (!customStatics || !customStatics[keys[i]])
              ) {
                try {
                  targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
              }
            }
          }

          return targetComponent;
        };

        /***/
      },
      /* 410 */
      /***/ function(module, exports) {
        module.exports = isPromise;

        function isPromise(obj) {
          return (
            !!obj &&
            (typeof obj === "object" || typeof obj === "function") &&
            typeof obj.then === "function"
          );
        }

        /***/
      },
      /* 411 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        exports.updateSyncWarnings = exports.updateSyncErrors = exports.untouch = exports.unregisterField = exports.touch = exports.setSubmitSucceeded = exports.setSubmitFailed = exports.submit = exports.stopSubmit = exports.stopAsyncValidation = exports.startSubmit = exports.startAsyncValidation = exports.reset = exports.registerField = exports.initialize = exports.focus = exports.destroy = exports.clearAsyncError = exports.clearSubmitErrors = exports.clearSubmit = exports.change = exports.blur = exports.autofill = exports.arrayUnshift = exports.arraySwap = exports.arraySplice = exports.arrayShift = exports.arrayRemoveAll = exports.arrayRemove = exports.arrayPush = exports.arrayPop = exports.arrayMove = exports.arrayInsert = undefined;

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _actionTypes = __webpack_require__(412);

        var arrayInsert = (exports.arrayInsert = function arrayInsert(
          form,
          field,
          index,
          value
        ) {
          return {
            type: _actionTypes.ARRAY_INSERT,
            meta: { form: form, field: field, index: index },
            payload: value
          };
        });

        var arrayMove = (exports.arrayMove = function arrayMove(
          form,
          field,
          from,
          to
        ) {
          return {
            type: _actionTypes.ARRAY_MOVE,
            meta: { form: form, field: field, from: from, to: to }
          };
        });

        var arrayPop = (exports.arrayPop = function arrayPop(form, field) {
          return {
            type: _actionTypes.ARRAY_POP,
            meta: { form: form, field: field }
          };
        });

        var arrayPush = (exports.arrayPush = function arrayPush(
          form,
          field,
          value
        ) {
          return {
            type: _actionTypes.ARRAY_PUSH,
            meta: { form: form, field: field },
            payload: value
          };
        });

        var arrayRemove = (exports.arrayRemove = function arrayRemove(
          form,
          field,
          index
        ) {
          return {
            type: _actionTypes.ARRAY_REMOVE,
            meta: { form: form, field: field, index: index }
          };
        });

        var arrayRemoveAll = (exports.arrayRemoveAll = function arrayRemoveAll(
          form,
          field
        ) {
          return {
            type: _actionTypes.ARRAY_REMOVE_ALL,
            meta: { form: form, field: field }
          };
        });

        var arrayShift = (exports.arrayShift = function arrayShift(
          form,
          field
        ) {
          return {
            type: _actionTypes.ARRAY_SHIFT,
            meta: { form: form, field: field }
          };
        });

        var arraySplice = (exports.arraySplice = function arraySplice(
          form,
          field,
          index,
          removeNum,
          value
        ) {
          var action = {
            type: _actionTypes.ARRAY_SPLICE,
            meta: {
              form: form,
              field: field,
              index: index,
              removeNum: removeNum
            }
          };
          if (value !== undefined) {
            action.payload = value;
          }
          return action;
        });

        var arraySwap = (exports.arraySwap = function arraySwap(
          form,
          field,
          indexA,
          indexB
        ) {
          if (indexA === indexB) {
            throw new Error("Swap indices cannot be equal");
          }
          if (indexA < 0 || indexB < 0) {
            throw new Error("Swap indices cannot be negative");
          }
          return {
            type: _actionTypes.ARRAY_SWAP,
            meta: { form: form, field: field, indexA: indexA, indexB: indexB }
          };
        });

        var arrayUnshift = (exports.arrayUnshift = function arrayUnshift(
          form,
          field,
          value
        ) {
          return {
            type: _actionTypes.ARRAY_UNSHIFT,
            meta: { form: form, field: field },
            payload: value
          };
        });

        var autofill = (exports.autofill = function autofill(
          form,
          field,
          value
        ) {
          return {
            type: _actionTypes.AUTOFILL,
            meta: { form: form, field: field },
            payload: value
          };
        });

        var blur = (exports.blur = function blur(form, field, value, touch) {
          return {
            type: _actionTypes.BLUR,
            meta: { form: form, field: field, touch: touch },
            payload: value
          };
        });

        var change = (exports.change = function change(
          form,
          field,
          value,
          touch,
          persistentSubmitErrors
        ) {
          return {
            type: _actionTypes.CHANGE,
            meta: {
              form: form,
              field: field,
              touch: touch,
              persistentSubmitErrors: persistentSubmitErrors
            },
            payload: value
          };
        });

        var clearSubmit = (exports.clearSubmit = function clearSubmit(form) {
          return { type: _actionTypes.CLEAR_SUBMIT, meta: { form: form } };
        });

        var clearSubmitErrors = (exports.clearSubmitErrors = function clearSubmitErrors(
          form
        ) {
          return {
            type: _actionTypes.CLEAR_SUBMIT_ERRORS,
            meta: { form: form }
          };
        });

        var clearAsyncError = (exports.clearAsyncError = function clearAsyncError(
          form,
          field
        ) {
          return {
            type: _actionTypes.CLEAR_ASYNC_ERROR,
            meta: { form: form, field: field }
          };
        });

        var destroy = (exports.destroy = function destroy() {
          for (
            var _len = arguments.length, form = Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            form[_key] = arguments[_key];
          }

          return { type: _actionTypes.DESTROY, meta: { form: form } };
        });

        var focus = (exports.focus = function focus(form, field) {
          return {
            type: _actionTypes.FOCUS,
            meta: { form: form, field: field }
          };
        });

        var initialize = (exports.initialize = function initialize(
          form,
          values,
          keepDirty
        ) {
          var otherMeta =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : {};

          if (keepDirty instanceof Object) {
            otherMeta = keepDirty;
            keepDirty = false;
          }
          return {
            type: _actionTypes.INITIALIZE,
            meta: _extends({ form: form, keepDirty: keepDirty }, otherMeta),
            payload: values
          };
        });

        var registerField = (exports.registerField = function registerField(
          form,
          name,
          type
        ) {
          return {
            type: _actionTypes.REGISTER_FIELD,
            meta: { form: form },
            payload: { name: name, type: type }
          };
        });

        var reset = (exports.reset = function reset(form) {
          return { type: _actionTypes.RESET, meta: { form: form } };
        });

        var startAsyncValidation = (exports.startAsyncValidation = function startAsyncValidation(
          form,
          field
        ) {
          return {
            type: _actionTypes.START_ASYNC_VALIDATION,
            meta: { form: form, field: field }
          };
        });

        var startSubmit = (exports.startSubmit = function startSubmit(form) {
          return { type: _actionTypes.START_SUBMIT, meta: { form: form } };
        });

        var stopAsyncValidation = (exports.stopAsyncValidation = function stopAsyncValidation(
          form,
          errors
        ) {
          var action = {
            type: _actionTypes.STOP_ASYNC_VALIDATION,
            meta: { form: form },
            payload: errors
          };
          if (errors && Object.keys(errors).length) {
            action.error = true;
          }
          return action;
        });

        var stopSubmit = (exports.stopSubmit = function stopSubmit(
          form,
          errors
        ) {
          var action = {
            type: _actionTypes.STOP_SUBMIT,
            meta: { form: form },
            payload: errors
          };
          if (errors && Object.keys(errors).length) {
            action.error = true;
          }
          return action;
        });

        var submit = (exports.submit = function submit(form) {
          return { type: _actionTypes.SUBMIT, meta: { form: form } };
        });

        var setSubmitFailed = (exports.setSubmitFailed = function setSubmitFailed(
          form
        ) {
          for (
            var _len2 = arguments.length,
              fields = Array(_len2 > 1 ? _len2 - 1 : 0),
              _key2 = 1;
            _key2 < _len2;
            _key2++
          ) {
            fields[_key2 - 1] = arguments[_key2];
          }

          return {
            type: _actionTypes.SET_SUBMIT_FAILED,
            meta: { form: form, fields: fields },
            error: true
          };
        });

        var setSubmitSucceeded = (exports.setSubmitSucceeded = function setSubmitSucceeded(
          form
        ) {
          for (
            var _len3 = arguments.length,
              fields = Array(_len3 > 1 ? _len3 - 1 : 0),
              _key3 = 1;
            _key3 < _len3;
            _key3++
          ) {
            fields[_key3 - 1] = arguments[_key3];
          }

          return {
            type: _actionTypes.SET_SUBMIT_SUCCEEDED,
            meta: { form: form, fields: fields },
            error: false
          };
        });

        var touch = (exports.touch = function touch(form) {
          for (
            var _len4 = arguments.length,
              fields = Array(_len4 > 1 ? _len4 - 1 : 0),
              _key4 = 1;
            _key4 < _len4;
            _key4++
          ) {
            fields[_key4 - 1] = arguments[_key4];
          }

          return {
            type: _actionTypes.TOUCH,
            meta: { form: form, fields: fields }
          };
        });

        var unregisterField = (exports.unregisterField = function unregisterField(
          form,
          name
        ) {
          var destroyOnUnmount =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : true;
          return {
            type: _actionTypes.UNREGISTER_FIELD,
            meta: { form: form },
            payload: { name: name, destroyOnUnmount: destroyOnUnmount }
          };
        });

        var untouch = (exports.untouch = function untouch(form) {
          for (
            var _len5 = arguments.length,
              fields = Array(_len5 > 1 ? _len5 - 1 : 0),
              _key5 = 1;
            _key5 < _len5;
            _key5++
          ) {
            fields[_key5 - 1] = arguments[_key5];
          }

          return {
            type: _actionTypes.UNTOUCH,
            meta: { form: form, fields: fields }
          };
        });

        var updateSyncErrors = (exports.updateSyncErrors = function updateSyncErrors(
          form
        ) {
          var syncErrors =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var error = arguments[2];
          return {
            type: _actionTypes.UPDATE_SYNC_ERRORS,
            meta: { form: form },
            payload: { syncErrors: syncErrors, error: error }
          };
        });

        var updateSyncWarnings = (exports.updateSyncWarnings = function updateSyncWarnings(
          form
        ) {
          var syncWarnings =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};
          var warning = arguments[2];
          return {
            type: _actionTypes.UPDATE_SYNC_WARNINGS,
            meta: { form: form },
            payload: { syncWarnings: syncWarnings, warning: warning }
          };
        });

        /***/
      },
      /* 412 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var prefix = (exports.prefix = "@@redux-form/");

        var ARRAY_INSERT = (exports.ARRAY_INSERT = prefix + "ARRAY_INSERT");
        var ARRAY_MOVE = (exports.ARRAY_MOVE = prefix + "ARRAY_MOVE");
        var ARRAY_POP = (exports.ARRAY_POP = prefix + "ARRAY_POP");
        var ARRAY_PUSH = (exports.ARRAY_PUSH = prefix + "ARRAY_PUSH");
        var ARRAY_REMOVE = (exports.ARRAY_REMOVE = prefix + "ARRAY_REMOVE");
        var ARRAY_REMOVE_ALL = (exports.ARRAY_REMOVE_ALL =
          prefix + "ARRAY_REMOVE_ALL");
        var ARRAY_SHIFT = (exports.ARRAY_SHIFT = prefix + "ARRAY_SHIFT");
        var ARRAY_SPLICE = (exports.ARRAY_SPLICE = prefix + "ARRAY_SPLICE");
        var ARRAY_UNSHIFT = (exports.ARRAY_UNSHIFT = prefix + "ARRAY_UNSHIFT");
        var ARRAY_SWAP = (exports.ARRAY_SWAP = prefix + "ARRAY_SWAP");
        var AUTOFILL = (exports.AUTOFILL = prefix + "AUTOFILL");
        var BLUR = (exports.BLUR = prefix + "BLUR");
        var CHANGE = (exports.CHANGE = prefix + "CHANGE");
        var CLEAR_SUBMIT = (exports.CLEAR_SUBMIT = prefix + "CLEAR_SUBMIT");
        var CLEAR_SUBMIT_ERRORS = (exports.CLEAR_SUBMIT_ERRORS =
          prefix + "CLEAR_SUBMIT_ERRORS");
        var CLEAR_ASYNC_ERROR = (exports.CLEAR_ASYNC_ERROR =
          prefix + "CLEAR_ASYNC_ERROR");
        var DESTROY = (exports.DESTROY = prefix + "DESTROY");
        var FOCUS = (exports.FOCUS = prefix + "FOCUS");
        var INITIALIZE = (exports.INITIALIZE = prefix + "INITIALIZE");
        var REGISTER_FIELD = (exports.REGISTER_FIELD =
          prefix + "REGISTER_FIELD");
        var RESET = (exports.RESET = prefix + "RESET");
        var SET_SUBMIT_FAILED = (exports.SET_SUBMIT_FAILED =
          prefix + "SET_SUBMIT_FAILED");
        var SET_SUBMIT_SUCCEEDED = (exports.SET_SUBMIT_SUCCEEDED =
          prefix + "SET_SUBMIT_SUCCEEDED");
        var START_ASYNC_VALIDATION = (exports.START_ASYNC_VALIDATION =
          prefix + "START_ASYNC_VALIDATION");
        var START_SUBMIT = (exports.START_SUBMIT = prefix + "START_SUBMIT");
        var STOP_ASYNC_VALIDATION = (exports.STOP_ASYNC_VALIDATION =
          prefix + "STOP_ASYNC_VALIDATION");
        var STOP_SUBMIT = (exports.STOP_SUBMIT = prefix + "STOP_SUBMIT");
        var SUBMIT = (exports.SUBMIT = prefix + "SUBMIT");
        var TOUCH = (exports.TOUCH = prefix + "TOUCH");
        var UNREGISTER_FIELD = (exports.UNREGISTER_FIELD =
          prefix + "UNREGISTER_FIELD");
        var UNTOUCH = (exports.UNTOUCH = prefix + "UNTOUCH");
        var UPDATE_SYNC_ERRORS = (exports.UPDATE_SYNC_ERRORS =
          prefix + "UPDATE_SYNC_ERRORS");
        var UPDATE_SYNC_WARNINGS = (exports.UPDATE_SYNC_WARNINGS =
          prefix + "UPDATE_SYNC_WARNINGS");

        /***/
      },
      /* 413 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isPromise = __webpack_require__(410);

        var _isPromise2 = _interopRequireDefault(_isPromise);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var asyncValidation = function asyncValidation(fn, start, stop, field) {
          start(field);
          var promise = fn();
          if (!(0, _isPromise2.default)(promise)) {
            throw new Error(
              "asyncValidate function passed to reduxForm must return a promise"
            );
          }
          var handleErrors = function handleErrors(rejected) {
            return function(errors) {
              if (errors && Object.keys(errors).length) {
                stop(errors);
                return errors;
              } else if (rejected) {
                stop();
                throw new Error(
                  "Asynchronous validation promise was rejected without errors."
                );
              }
              stop();
              return Promise.resolve();
            };
          };
          return promise.then(handleErrors(false), handleErrors(true));
        };

        exports.default = asyncValidation;

        /***/
      },
      /* 414 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isEvent = __webpack_require__(197);

        var _isEvent2 = _interopRequireDefault(_isEvent);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var silenceEvent = function silenceEvent(event) {
          var is = (0, _isEvent2.default)(event);
          if (is) {
            event.preventDefault();
          }
          return is;
        };

        exports.default = silenceEvent;

        /***/
      },
      /* 415 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _silenceEvent = __webpack_require__(414);

        var _silenceEvent2 = _interopRequireDefault(_silenceEvent);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var silenceEvents = function silenceEvents(fn) {
          return function(event) {
            for (
              var _len = arguments.length,
                args = Array(_len > 1 ? _len - 1 : 0),
                _key = 1;
              _key < _len;
              _key++
            ) {
              args[_key - 1] = arguments[_key];
            }

            return (0, _silenceEvent2.default)(event)
              ? fn.apply(undefined, args)
              : fn.apply(undefined, [event].concat(args));
          };
        };

        exports.default = silenceEvents;

        /***/
      },
      /* 416 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var toArray = function toArray(value) {
          return Array.isArray(value) ? value : [value];
        };

        var getError = function getError(value, values, props, validators) {
          var array = toArray(validators);
          for (var i = 0; i < array.length; i++) {
            var error = array[i](value, values, props);
            if (error) {
              return error;
            }
          }
        };

        var generateValidator = function generateValidator(validators, _ref) {
          var getIn = _ref.getIn;
          return function(values, props) {
            var errors = {};
            Object.keys(validators).forEach(function(name) {
              var value = getIn(values, name);
              var error = getError(value, values, props, validators[name]);
              if (error) {
                errors = _plain2.default.setIn(errors, name, error);
              }
            });
            return errors;
          };
        };

        exports.default = generateValidator;

        /***/
      },
      /* 417 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _isPromise = __webpack_require__(410);

        var _isPromise2 = _interopRequireDefault(_isPromise);

        var _SubmissionError = __webpack_require__(187);

        var _SubmissionError2 = _interopRequireDefault(_SubmissionError);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }

        var handleSubmit = function handleSubmit(
          submit,
          props,
          valid,
          asyncValidate,
          fields
        ) {
          var dispatch = props.dispatch,
            onSubmitFail = props.onSubmitFail,
            onSubmitSuccess = props.onSubmitSuccess,
            startSubmit = props.startSubmit,
            stopSubmit = props.stopSubmit,
            setSubmitFailed = props.setSubmitFailed,
            setSubmitSucceeded = props.setSubmitSucceeded,
            syncErrors = props.syncErrors,
            touch = props.touch,
            values = props.values,
            persistentSubmitErrors = props.persistentSubmitErrors;

          touch.apply(undefined, _toConsumableArray(fields)); // mark all fields as touched

          if (valid || persistentSubmitErrors) {
            var doSubmit = function doSubmit() {
              var result = void 0;
              try {
                result = submit(values, dispatch, props);
              } catch (submitError) {
                var error =
                  submitError instanceof _SubmissionError2.default
                    ? submitError.errors
                    : undefined;
                stopSubmit(error);
                setSubmitFailed.apply(undefined, _toConsumableArray(fields));
                if (onSubmitFail) {
                  onSubmitFail(error, dispatch, submitError, props);
                }
                if (error || onSubmitFail) {
                  // if you've provided an onSubmitFail callback, don't re-throw the error
                  return error;
                } else {
                  throw submitError;
                }
              }
              if ((0, _isPromise2.default)(result)) {
                startSubmit();
                return result.then(
                  function(submitResult) {
                    stopSubmit();
                    setSubmitSucceeded();
                    if (onSubmitSuccess) {
                      onSubmitSuccess(submitResult, dispatch, props);
                    }
                    return submitResult;
                  },
                  function(submitError) {
                    var error =
                      submitError instanceof _SubmissionError2.default
                        ? submitError.errors
                        : undefined;
                    stopSubmit(error);
                    setSubmitFailed.apply(
                      undefined,
                      _toConsumableArray(fields)
                    );
                    if (onSubmitFail) {
                      onSubmitFail(error, dispatch, submitError, props);
                    }
                    if (error || onSubmitFail) {
                      // if you've provided an onSubmitFail callback, don't re-throw the error
                      return error;
                    } else {
                      throw submitError;
                    }
                  }
                );
              } else {
                setSubmitSucceeded();
                if (onSubmitSuccess) {
                  onSubmitSuccess(result, dispatch, props);
                }
              }
              return result;
            };

            var asyncValidateResult = asyncValidate && asyncValidate();
            if (asyncValidateResult) {
              return asyncValidateResult
                .then(function(asyncErrors) {
                  if (asyncErrors) {
                    throw asyncErrors;
                  }
                  return doSubmit();
                })
                .catch(function(asyncErrors) {
                  setSubmitFailed.apply(undefined, _toConsumableArray(fields));
                  if (onSubmitFail) {
                    onSubmitFail(asyncErrors, dispatch, null, props);
                  }
                  return Promise.reject(asyncErrors);
                });
            } else {
              return doSubmit();
            }
          } else {
            setSubmitFailed.apply(undefined, _toConsumableArray(fields));
            if (onSubmitFail) {
              onSubmitFail(syncErrors, dispatch, null, props);
            }
            return syncErrors;
          }
        };

        exports.default = handleSubmit;

        /***/
      },
      /* 418 */
      /***/ function(module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });
        var getDisplayName = function getDisplayName(Comp) {
          return Comp.displayName || Comp.name || "Component";
        };

        exports.default = getDisplayName;

        /***/
      },
      /* 419 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createReducer = __webpack_require__(420);

        var _createReducer2 = _interopRequireDefault(_createReducer);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createReducer2.default)(_immutable2.default);

        /***/
      },
      /* 420 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _actionTypes = __webpack_require__(412);

        var _deleteInWithCleanUp = __webpack_require__(421);

        var _deleteInWithCleanUp2 = _interopRequireDefault(
          _deleteInWithCleanUp
        );

        var _plain = __webpack_require__(200);

        var _plain2 = _interopRequireDefault(_plain);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        var isReduxFormAction = function isReduxFormAction(action) {
          return (
            action &&
            action.type &&
            action.type.length > _actionTypes.prefix.length &&
            action.type.substring(0, _actionTypes.prefix.length) ===
              _actionTypes.prefix
          );
        };

        var createReducer = function createReducer(structure) {
          var _behaviors;

          var deepEqual = structure.deepEqual,
            empty = structure.empty,
            getIn = structure.getIn,
            setIn = structure.setIn,
            deleteIn = structure.deleteIn,
            fromJS = structure.fromJS,
            keys = structure.keys,
            size = structure.size,
            splice = structure.splice;

          var deleteInWithCleanUp = (0, _deleteInWithCleanUp2.default)(
            structure
          );
          var doSplice = function doSplice(
            state,
            key,
            field,
            index,
            removeNum,
            value,
            force
          ) {
            var existing = getIn(state, key + "." + field);
            return existing || force
              ? setIn(
                  state,
                  key + "." + field,
                  splice(existing, index, removeNum, value)
                )
              : state;
          };
          var doPlainSplice = function doPlainSplice(
            state,
            key,
            field,
            index,
            removeNum,
            value,
            force
          ) {
            var slice = getIn(state, key);
            var existing = _plain2.default.getIn(slice, field);
            return existing || force
              ? setIn(
                  state,
                  key,
                  _plain2.default.setIn(
                    slice,
                    field,
                    _plain2.default.splice(existing, index, removeNum, value)
                  )
                )
              : state;
          };
          var rootKeys = ["values", "fields", "submitErrors", "asyncErrors"];
          var arraySplice = function arraySplice(
            state,
            field,
            index,
            removeNum,
            value
          ) {
            var result = state;
            var nonValuesValue = value != null ? empty : undefined;
            result = doSplice(
              result,
              "values",
              field,
              index,
              removeNum,
              value,
              true
            );
            result = doSplice(
              result,
              "fields",
              field,
              index,
              removeNum,
              nonValuesValue
            );
            result = doPlainSplice(
              result,
              "syncErrors",
              field,
              index,
              removeNum,
              undefined
            );
            result = doPlainSplice(
              result,
              "syncWarnings",
              field,
              index,
              removeNum,
              undefined
            );
            result = doSplice(
              result,
              "submitErrors",
              field,
              index,
              removeNum,
              undefined
            );
            result = doSplice(
              result,
              "asyncErrors",
              field,
              index,
              removeNum,
              undefined
            );
            return result;
          };

          var behaviors = ((_behaviors = {}),
          _defineProperty(_behaviors, _actionTypes.ARRAY_INSERT, function(
            state,
            _ref
          ) {
            var _ref$meta = _ref.meta,
              field = _ref$meta.field,
              index = _ref$meta.index,
              payload = _ref.payload;

            return arraySplice(state, field, index, 0, payload);
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_MOVE, function(
            state,
            _ref2
          ) {
            var _ref2$meta = _ref2.meta,
              field = _ref2$meta.field,
              from = _ref2$meta.from,
              to = _ref2$meta.to;

            var array = getIn(state, "values." + field);
            var length = array ? size(array) : 0;
            var result = state;
            if (length) {
              rootKeys.forEach(function(key) {
                var path = key + "." + field;
                if (getIn(result, path)) {
                  var value = getIn(result, path + "[" + from + "]");
                  result = setIn(
                    result,
                    path,
                    splice(getIn(result, path), from, 1) // remove
                  );
                  result = setIn(
                    result,
                    path,
                    splice(getIn(result, path), to, 0, value) // insert
                  );
                }
              });
            }
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_POP, function(
            state,
            _ref3
          ) {
            var field = _ref3.meta.field;

            var array = getIn(state, "values." + field);
            var length = array ? size(array) : 0;
            return length ? arraySplice(state, field, length - 1, 1) : state;
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_PUSH, function(
            state,
            _ref4
          ) {
            var field = _ref4.meta.field,
              payload = _ref4.payload;

            var array = getIn(state, "values." + field);
            var length = array ? size(array) : 0;
            return arraySplice(state, field, length, 0, payload);
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE, function(
            state,
            _ref5
          ) {
            var _ref5$meta = _ref5.meta,
              field = _ref5$meta.field,
              index = _ref5$meta.index;

            return arraySplice(state, field, index, 1);
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_REMOVE_ALL, function(
            state,
            _ref6
          ) {
            var field = _ref6.meta.field;

            var array = getIn(state, "values." + field);
            var length = array ? size(array) : 0;
            return length ? arraySplice(state, field, 0, length) : state;
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_SHIFT, function(
            state,
            _ref7
          ) {
            var field = _ref7.meta.field;

            return arraySplice(state, field, 0, 1);
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_SPLICE, function(
            state,
            _ref8
          ) {
            var _ref8$meta = _ref8.meta,
              field = _ref8$meta.field,
              index = _ref8$meta.index,
              removeNum = _ref8$meta.removeNum,
              payload = _ref8.payload;

            return arraySplice(state, field, index, removeNum, payload);
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_SWAP, function(
            state,
            _ref9
          ) {
            var _ref9$meta = _ref9.meta,
              field = _ref9$meta.field,
              indexA = _ref9$meta.indexA,
              indexB = _ref9$meta.indexB;

            var result = state;
            rootKeys.forEach(function(key) {
              var valueA = getIn(
                result,
                key + "." + field + "[" + indexA + "]"
              );
              var valueB = getIn(
                result,
                key + "." + field + "[" + indexB + "]"
              );
              if (valueA !== undefined || valueB !== undefined) {
                result = setIn(
                  result,
                  key + "." + field + "[" + indexA + "]",
                  valueB
                );
                result = setIn(
                  result,
                  key + "." + field + "[" + indexB + "]",
                  valueA
                );
              }
            });
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.ARRAY_UNSHIFT, function(
            state,
            _ref10
          ) {
            var field = _ref10.meta.field,
              payload = _ref10.payload;

            return arraySplice(state, field, 0, 0, payload);
          }),
          _defineProperty(_behaviors, _actionTypes.AUTOFILL, function(
            state,
            _ref11
          ) {
            var field = _ref11.meta.field,
              payload = _ref11.payload;

            var result = state;
            result = deleteInWithCleanUp(result, "asyncErrors." + field);
            result = deleteInWithCleanUp(result, "submitErrors." + field);
            result = setIn(result, "fields." + field + ".autofilled", true);
            result = setIn(result, "values." + field, payload);
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.BLUR, function(
            state,
            _ref12
          ) {
            var _ref12$meta = _ref12.meta,
              field = _ref12$meta.field,
              touch = _ref12$meta.touch,
              payload = _ref12.payload;

            var result = state;
            var initial = getIn(result, "initial." + field);
            if (initial === undefined && payload === "") {
              result = deleteInWithCleanUp(result, "values." + field);
            } else if (payload !== undefined) {
              result = setIn(result, "values." + field, payload);
            }
            if (field === getIn(result, "active")) {
              result = deleteIn(result, "active");
            }
            result = deleteIn(result, "fields." + field + ".active");
            if (touch) {
              result = setIn(result, "fields." + field + ".touched", true);
              result = setIn(result, "anyTouched", true);
            }
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.CHANGE, function(
            state,
            _ref13
          ) {
            var _ref13$meta = _ref13.meta,
              field = _ref13$meta.field,
              touch = _ref13$meta.touch,
              persistentSubmitErrors = _ref13$meta.persistentSubmitErrors,
              payload = _ref13.payload;

            var result = state;
            var initial = getIn(result, "initial." + field);
            if (initial === undefined && payload === "") {
              result = deleteInWithCleanUp(result, "values." + field);
            } else if (payload !== undefined) {
              result = setIn(result, "values." + field, payload);
            }
            result = deleteInWithCleanUp(result, "asyncErrors." + field);
            if (!persistentSubmitErrors) {
              result = deleteInWithCleanUp(result, "submitErrors." + field);
            }
            result = deleteInWithCleanUp(
              result,
              "fields." + field + ".autofilled"
            );
            if (touch) {
              result = setIn(result, "fields." + field + ".touched", true);
              result = setIn(result, "anyTouched", true);
            }
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.CLEAR_SUBMIT, function(
            state
          ) {
            return deleteIn(state, "triggerSubmit");
          }),
          _defineProperty(
            _behaviors,
            _actionTypes.CLEAR_SUBMIT_ERRORS,
            function(state) {
              return deleteInWithCleanUp(state, "submitErrors");
            }
          ),
          _defineProperty(_behaviors, _actionTypes.CLEAR_ASYNC_ERROR, function(
            state,
            _ref14
          ) {
            var field = _ref14.meta.field;

            return deleteIn(state, "asyncErrors." + field);
          }),
          _defineProperty(_behaviors, _actionTypes.FOCUS, function(
            state,
            _ref15
          ) {
            var field = _ref15.meta.field;

            var result = state;
            var previouslyActive = getIn(state, "active");
            result = deleteIn(result, "fields." + previouslyActive + ".active");
            result = setIn(result, "fields." + field + ".visited", true);
            result = setIn(result, "fields." + field + ".active", true);
            result = setIn(result, "active", field);
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.INITIALIZE, function(
            state,
            _ref16
          ) {
            var payload = _ref16.payload,
              _ref16$meta = _ref16.meta,
              keepDirty = _ref16$meta.keepDirty,
              keepSubmitSucceeded = _ref16$meta.keepSubmitSucceeded;

            var mapData = fromJS(payload);
            var result = empty; // clean all field state

            // persist old warnings, they will get recalculated if the new form values are different from the old values
            var warning = getIn(state, "warning");
            if (warning) {
              result = setIn(result, "warning", warning);
            }
            var syncWarnings = getIn(state, "syncWarnings");
            if (syncWarnings) {
              result = setIn(result, "syncWarnings", syncWarnings);
            }

            // persist old errors, they will get recalculated if the new form values are different from the old values
            var error = getIn(state, "error");
            if (error) {
              result = setIn(result, "error", error);
            }
            var syncErrors = getIn(state, "syncErrors");
            if (syncErrors) {
              result = setIn(result, "syncErrors", syncErrors);
            }

            var registeredFields = getIn(state, "registeredFields");
            if (registeredFields) {
              result = setIn(result, "registeredFields", registeredFields);
            }

            var previousValues = getIn(state, "values");
            var previousInitialValues = getIn(state, "initial");
            var newInitialValues = mapData;

            var newValues = previousValues;

            if (keepDirty && registeredFields) {
              if (!deepEqual(newInitialValues, previousInitialValues)) {
                //
                // Keep the value of dirty fields while updating the value of
                // pristine fields. This way, apps can reinitialize forms while
                // avoiding stomping on user edits.
                //
                // Note 1: The initialize action replaces all initial values
                // regardless of keepDirty.
                //
                // Note 2: When a field is dirty, keepDirty is enabled, and the field
                // value is the same as the new initial value for the field, the
                // initialize action causes the field to become pristine. That effect
                // is what we want.
                //
                keys(registeredFields).forEach(function(name) {
                  var previousInitialValue = getIn(previousInitialValues, name);
                  var previousValue = getIn(previousValues, name);

                  if (deepEqual(previousValue, previousInitialValue)) {
                    // Overwrite the old pristine value with the new pristine value
                    var newInitialValue = getIn(newInitialValues, name);
                    newValues = setIn(newValues, name, newInitialValue);
                  }
                });

                keys(newInitialValues).forEach(function(name) {
                  var previousInitialValue = getIn(previousInitialValues, name);
                  if (typeof previousInitialValue === "undefined") {
                    // Add new values at the root level.
                    var newInitialValue = getIn(newInitialValues, name);
                    newValues = setIn(newValues, name, newInitialValue);
                  }
                });
              }
            } else {
              newValues = newInitialValues;
            }

            if (keepSubmitSucceeded && getIn(state, "submitSucceeded")) {
              result = setIn(result, "submitSucceeded", true);
            }
            result = setIn(result, "values", newValues);
            result = setIn(result, "initial", newInitialValues);
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.REGISTER_FIELD, function(
            state,
            _ref17
          ) {
            var _ref17$payload = _ref17.payload,
              name = _ref17$payload.name,
              type = _ref17$payload.type;

            var key = "registeredFields['" + name + "']";
            var field = getIn(state, key);
            if (field) {
              var count = getIn(field, "count") + 1;
              field = setIn(field, "count", count);
            } else {
              field = fromJS({ name: name, type: type, count: 1 });
            }
            return setIn(state, key, field);
          }),
          _defineProperty(_behaviors, _actionTypes.RESET, function(state) {
            var result = empty;
            var registeredFields = getIn(state, "registeredFields");
            if (registeredFields) {
              result = setIn(result, "registeredFields", registeredFields);
            }
            var values = getIn(state, "initial");
            if (values) {
              result = setIn(result, "values", values);
              result = setIn(result, "initial", values);
            }
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.SUBMIT, function(state) {
            return setIn(state, "triggerSubmit", true);
          }),
          _defineProperty(
            _behaviors,
            _actionTypes.START_ASYNC_VALIDATION,
            function(state, _ref18) {
              var field = _ref18.meta.field;

              return setIn(state, "asyncValidating", field || true);
            }
          ),
          _defineProperty(_behaviors, _actionTypes.START_SUBMIT, function(
            state
          ) {
            return setIn(state, "submitting", true);
          }),
          _defineProperty(
            _behaviors,
            _actionTypes.STOP_ASYNC_VALIDATION,
            function(state, _ref19) {
              var payload = _ref19.payload;

              var result = state;
              result = deleteIn(result, "asyncValidating");
              if (payload && Object.keys(payload).length) {
                var _error = payload._error,
                  fieldErrors = _objectWithoutProperties(payload, ["_error"]);

                if (_error) {
                  result = setIn(result, "error", _error);
                }
                if (Object.keys(fieldErrors).length) {
                  result = setIn(result, "asyncErrors", fromJS(fieldErrors));
                } else {
                  result = deleteIn(result, "asyncErrors");
                }
              } else {
                result = deleteIn(result, "error");
                result = deleteIn(result, "asyncErrors");
              }
              return result;
            }
          ),
          _defineProperty(_behaviors, _actionTypes.STOP_SUBMIT, function(
            state,
            _ref20
          ) {
            var payload = _ref20.payload;

            var result = state;
            result = deleteIn(result, "submitting");
            result = deleteIn(result, "submitFailed");
            result = deleteIn(result, "submitSucceeded");
            if (payload && Object.keys(payload).length) {
              var _error = payload._error,
                fieldErrors = _objectWithoutProperties(payload, ["_error"]);

              if (_error) {
                result = setIn(result, "error", _error);
              } else {
                result = deleteIn(result, "error");
              }
              if (Object.keys(fieldErrors).length) {
                result = setIn(result, "submitErrors", fromJS(fieldErrors));
              } else {
                result = deleteIn(result, "submitErrors");
              }
              result = setIn(result, "submitFailed", true);
            } else {
              result = setIn(result, "submitSucceeded", true);
              result = deleteIn(result, "error");
              result = deleteIn(result, "submitErrors");
            }
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.SET_SUBMIT_FAILED, function(
            state,
            _ref21
          ) {
            var fields = _ref21.meta.fields;

            var result = state;
            result = setIn(result, "submitFailed", true);
            result = deleteIn(result, "submitSucceeded");
            result = deleteIn(result, "submitting");
            fields.forEach(function(field) {
              return (result = setIn(
                result,
                "fields." + field + ".touched",
                true
              ));
            });
            if (fields.length) {
              result = setIn(result, "anyTouched", true);
            }
            return result;
          }),
          _defineProperty(
            _behaviors,
            _actionTypes.SET_SUBMIT_SUCCEEDED,
            function(state) {
              var result = state;
              result = deleteIn(result, "submitFailed");
              result = setIn(result, "submitSucceeded", true);
              return result;
            }
          ),
          _defineProperty(_behaviors, _actionTypes.TOUCH, function(
            state,
            _ref22
          ) {
            var fields = _ref22.meta.fields;

            var result = state;
            fields.forEach(function(field) {
              return (result = setIn(
                result,
                "fields." + field + ".touched",
                true
              ));
            });
            result = setIn(result, "anyTouched", true);
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.UNREGISTER_FIELD, function(
            state,
            _ref23
          ) {
            var _ref23$payload = _ref23.payload,
              name = _ref23$payload.name,
              destroyOnUnmount = _ref23$payload.destroyOnUnmount;

            var result = state;
            var key = "registeredFields['" + name + "']";
            var field = getIn(result, key);
            if (!field) {
              return result;
            }

            var count = getIn(field, "count") - 1;
            if (count <= 0 && destroyOnUnmount) {
              // Note: Cannot use deleteWithCleanUp here because of the flat nature of registeredFields
              result = deleteIn(result, key);
              if (deepEqual(getIn(result, "registeredFields"), empty)) {
                result = deleteIn(result, "registeredFields");
              }
            } else {
              field = setIn(field, "count", count);
              result = setIn(result, key, field);
            }
            if (destroyOnUnmount) {
              result = deleteInWithCleanUp(result, "syncErrors." + name);
              result = deleteInWithCleanUp(result, "submitErrors." + name);
              result = deleteInWithCleanUp(result, "asyncErrors." + name);
              result = deleteInWithCleanUp(result, "syncWarnings." + name);
            }
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.UNTOUCH, function(
            state,
            _ref24
          ) {
            var fields = _ref24.meta.fields;

            var result = state;
            fields.forEach(function(field) {
              return (result = deleteIn(
                result,
                "fields." + field + ".touched"
              ));
            });
            var anyTouched = keys(getIn(result, "registeredFields")).some(
              function(key) {
                return getIn(result, "fields." + key + ".touched");
              }
            );
            result = anyTouched
              ? setIn(result, "anyTouched", true)
              : deleteIn(result, "anyTouched");
            return result;
          }),
          _defineProperty(_behaviors, _actionTypes.UPDATE_SYNC_ERRORS, function(
            state,
            _ref25
          ) {
            var _ref25$payload = _ref25.payload,
              syncErrors = _ref25$payload.syncErrors,
              error = _ref25$payload.error;

            var result = state;
            if (error) {
              result = setIn(result, "error", error);
              result = setIn(result, "syncError", true);
            } else {
              result = deleteIn(result, "error");
              result = deleteIn(result, "syncError");
            }
            if (Object.keys(syncErrors).length) {
              result = setIn(result, "syncErrors", syncErrors);
            } else {
              result = deleteIn(result, "syncErrors");
            }
            return result;
          }),
          _defineProperty(
            _behaviors,
            _actionTypes.UPDATE_SYNC_WARNINGS,
            function(state, _ref26) {
              var _ref26$payload = _ref26.payload,
                syncWarnings = _ref26$payload.syncWarnings,
                warning = _ref26$payload.warning;

              var result = state;
              if (warning) {
                result = setIn(result, "warning", warning);
              } else {
                result = deleteIn(result, "warning");
              }
              if (Object.keys(syncWarnings).length) {
                result = setIn(result, "syncWarnings", syncWarnings);
              } else {
                result = deleteIn(result, "syncWarnings");
              }
              return result;
            }
          ),
          _behaviors);

          var reducer = function reducer() {
            var state =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : empty;
            var action = arguments[1];

            var behavior = behaviors[action.type];
            return behavior ? behavior(state, action) : state;
          };

          var byForm = function byForm(reducer) {
            return function() {
              var state =
                arguments.length > 0 && arguments[0] !== undefined
                  ? arguments[0]
                  : empty;
              var action =
                arguments.length > 1 && arguments[1] !== undefined
                  ? arguments[1]
                  : {};

              var form = action && action.meta && action.meta.form;
              if (!form || !isReduxFormAction(action)) {
                return state;
              }
              if (action.type === _actionTypes.DESTROY) {
                return action.meta.form.reduce(function(result, form) {
                  return deleteInWithCleanUp(result, form);
                }, state);
              }
              var formState = getIn(state, form);
              var result = reducer(formState, action);
              return result === formState ? state : setIn(state, form, result);
            };
          };

          /**
           * Adds additional functionality to the reducer
           */
          function decorate(target) {
            target.plugin = function plugin(reducers) {
              var _this = this;

              // use 'function' keyword to enable 'this'
              return decorate(function() {
                var state =
                  arguments.length > 0 && arguments[0] !== undefined
                    ? arguments[0]
                    : empty;
                var action =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};
                return Object.keys(reducers).reduce(function(accumulator, key) {
                  var previousState = getIn(accumulator, key);
                  var nextState = reducers[key](
                    previousState,
                    action,
                    getIn(state, key)
                  );
                  return nextState === previousState
                    ? accumulator
                    : setIn(accumulator, key, nextState);
                }, _this(state, action));
              });
            };

            return target;
          }

          return decorate(byForm(reducer));
        };

        exports.default = createReducer;

        /***/
      },
      /* 421 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _toPath2 = __webpack_require__(203);

        var _toPath3 = _interopRequireDefault(_toPath2);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        var createDeleteInWithCleanUp = function createDeleteInWithCleanUp(
          _ref
        ) {
          var deepEqual = _ref.deepEqual,
            empty = _ref.empty,
            getIn = _ref.getIn,
            deleteIn = _ref.deleteIn,
            setIn = _ref.setIn;

          var deleteInWithCleanUp = function deleteInWithCleanUp(state, path) {
            if (path[path.length - 1] === "]") {
              // array path
              var pathTokens = (0, _toPath3.default)(path);
              pathTokens.pop();
              var parent = getIn(state, pathTokens.join("."));
              return parent ? setIn(state, path, undefined) : state;
            }

            var result = state;
            if (getIn(state, path) !== undefined) {
              result = deleteIn(state, path);
            }

            var dotIndex = path.lastIndexOf(".");
            if (dotIndex > 0) {
              var parentPath = path.substring(0, dotIndex);
              if (parentPath[parentPath.length - 1] !== "]") {
                var _parent = getIn(result, parentPath);
                if (deepEqual(_parent, empty)) {
                  return deleteInWithCleanUp(result, parentPath);
                }
              }
            }
            return result;
          };

          return deleteInWithCleanUp;
        };

        exports.default = createDeleteInWithCleanUp;

        /***/
      },
      /* 422 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createValues = __webpack_require__(423);

        var _createValues2 = _interopRequireDefault(_createValues);

        var _immutable = __webpack_require__(308);

        var _immutable2 = _interopRequireDefault(_immutable);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        exports.default = (0, _createValues2.default)(_immutable2.default);

        /***/
      },
      /* 423 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _reactRedux = __webpack_require__(9);

        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }

        var createValues = function createValues(_ref) {
          var getIn = _ref.getIn;
          return function(config) {
            var _prop$getFormState$co = _extends(
                {
                  prop: "values",
                  getFormState: function getFormState(state) {
                    return getIn(state, "form");
                  }
                },
                config
              ),
              form = _prop$getFormState$co.form,
              prop = _prop$getFormState$co.prop,
              getFormState = _prop$getFormState$co.getFormState;

            return (0, _reactRedux.connect)(
              function(state) {
                return _defineProperty(
                  {},
                  prop,
                  getIn(getFormState(state), form + ".values")
                );
              },
              function() {
                return {};
              } // ignore dispatch
            );
          };
        };

        exports.default = createValues;

        /***/
      },
      /* 424 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _immutable = __webpack_require__(180);

        var _semanticUiReact = __webpack_require__(159);

        var _Input = __webpack_require__(425);

        var _Input2 = _interopRequireDefault(_Input);

        var _FormError = __webpack_require__(427);

        var _FormError2 = _interopRequireDefault(_FormError);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var EmailSignInForm = (function(_React$Component) {
          _inherits(EmailSignInForm, _React$Component);

          function EmailSignInForm() {
            _classCallCheck(this, EmailSignInForm);

            return _possibleConstructorReturn(
              this,
              (
                EmailSignInForm.__proto__ ||
                Object.getPrototypeOf(EmailSignInForm)
              ).apply(this, arguments)
            );
          }

          _createClass(EmailSignInForm, [
            {
              key: "renderFormError",
              value: function renderFormError(error) {
                return _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { key: "errors", width: 16 },
                  _react2.default.createElement(_FormError2.default, {
                    error: error
                  })
                );
              }
            },
            {
              key: "render",
              value: function render() {
                var _props = this.props,
                  handleSubmit = _props.handleSubmit,
                  error = _props.error,
                  submitting = _props.submitting,
                  dirty = _props.dirty,
                  valid = _props.valid,
                  isSignedIn = _props.isSignedIn,
                  inputProps = _props.inputProps,
                  submitComponent = _props.submitComponent;

                var disabled = !valid || submitting || isSignedIn;
                var SubmitButton = submitComponent;

                return _react2.default.createElement(
                  _semanticUiReact.Form,
                  {
                    className: "redux-auth email-sign-in-form clearfix",
                    onSubmit: handleSubmit
                  },
                  _react2.default.createElement(
                    _semanticUiReact.Container,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Segment,
                      { basic: true },
                      _react2.default.createElement(
                        _semanticUiReact.Grid,
                        { padded: true },
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { width: 16 },
                          _react2.default.createElement("h2", null, "Sign In")
                        )
                      ),
                      _react2.default.createElement(
                        _semanticUiReact.Grid,
                        { padded: true, className: "input-fields" },
                        error && dirty && this.renderFormError(error),
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { key: "email", width: 16 },
                          _react2.default.createElement(
                            _immutable.Field,
                            _extends(
                              {
                                component: _Input2.default,
                                fluid: Boolean(true),
                                name: "email",
                                label: "Email",
                                type: "email"
                              },
                              inputProps.email
                            )
                          )
                        ),
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { key: "password", width: 16 },
                          _react2.default.createElement(
                            _immutable.Field,
                            _extends(
                              {
                                component: _Input2.default,
                                fluid: Boolean(true),
                                name: "password",
                                label: "Password",
                                type: "password"
                              },
                              inputProps.password
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(_semanticUiReact.Divider, {
                    fitted: true
                  }),
                  _react2.default.createElement(
                    _semanticUiReact.Container,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Segment,
                      { basic: true },
                      _react2.default.createElement(
                        _semanticUiReact.Grid,
                        { middle: "true", aligned: "true", padded: true },
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { width: 8, verticalAlign: "middle" },
                          this.props.callToAction
                        ),
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { width: 8, verticalAlign: "middle" },
                          _react2.default.createElement(
                            SubmitButton,
                            _extends(
                              {
                                className: "email-sign-up-submit",
                                disabled: disabled,
                                floated: "right",
                                loading: submitting,
                                type: "submit"
                              },
                              this.props.inputProps.submit
                            ),
                            "Sign In"
                          )
                        )
                      )
                    )
                  )
                );
              }
            }
          ]);

          return EmailSignInForm;
        })(_react2.default.Component);

        EmailSignInForm.propTypes = {
          endpoint: _propTypes2.default.string,
          inputProps: _propTypes2.default.shape({
            email: _propTypes2.default.object,
            password: _propTypes2.default.object,
            submit: _propTypes2.default.object
          }),
          next: _propTypes2.default.func,
          submitComponent: _propTypes2.default.func
        };
        EmailSignInForm.defaultProps = {
          inputProps: {
            email: {},
            password: {},
            submit: {}
          },
          next: function next() {},
          submitComponent: _semanticUiReact.Button
        };
        exports.default = EmailSignInForm;

        /***/
      },
      /* 425 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        var _InputError = __webpack_require__(426);

        var _InputError2 = _interopRequireDefault(_InputError);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var Input = (function(_React$Component) {
          _inherits(Input, _React$Component);

          function Input() {
            _classCallCheck(this, Input);

            return _possibleConstructorReturn(
              this,
              (Input.__proto__ || Object.getPrototypeOf(Input)).apply(
                this,
                arguments
              )
            );
          }

          _createClass(Input, [
            {
              key: "render",
              value: function render() {
                var _props = this.props,
                  meta = _props.meta,
                  inputProps = _objectWithoutProperties(_props, ["meta"]);

                var hasError = meta && meta.error && meta.touched;

                return _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    _semanticUiReact.Form.Input,
                    inputProps
                  ),
                  hasError &&
                    _react2.default.createElement(_InputError2.default, {
                      error: meta.error
                    })
                );
              }
            }
          ]);

          return Input;
        })(_react2.default.Component);

        Input.propTypes = {
          input: _propTypes2.default.shape({
            name: _propTypes2.default.string.isRequired
          }),
          meta: _propTypes2.default.shape({
            touched: _propTypes2.default.bool.isRequired,
            error: _propTypes2.default.string
          }).isRequired
        };
        exports.default = Input;

        /***/
      },
      /* 426 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var InputError = (function(_React$Component) {
          _inherits(InputError, _React$Component);

          function InputError() {
            _classCallCheck(this, InputError);

            return _possibleConstructorReturn(
              this,
              (InputError.__proto__ || Object.getPrototypeOf(InputError)).apply(
                this,
                arguments
              )
            );
          }

          _createClass(InputError, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  "div",
                  { className: "auth-error-message error" },
                  _react2.default.createElement(
                    "p",
                    {
                      className: "control-label inline-error-item",
                      style: {
                        color: "#d00003",
                        marginTop: "-5px",
                        marginBottom: "0px"
                      }
                    },
                    _react2.default.createElement(_semanticUiReact.Icon, {
                      name: "attention"
                    }),
                    this.props.error
                  )
                );
              }
            }
          ]);

          return InputError;
        })(_react2.default.Component);

        InputError.propTypes = {
          error: _propTypes2.default.string.isRequired
        };
        exports.default = InputError;

        /***/
      },
      /* 427 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _semanticUiReact = __webpack_require__(159);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var FormError = (function(_React$Component) {
          _inherits(FormError, _React$Component);

          function FormError() {
            _classCallCheck(this, FormError);

            return _possibleConstructorReturn(
              this,
              (FormError.__proto__ || Object.getPrototypeOf(FormError)).apply(
                this,
                arguments
              )
            );
          }

          _createClass(FormError, [
            {
              key: "render",
              value: function render() {
                return _react2.default.createElement(
                  "div",
                  { style: { marginBottom: "5px", color: "#d00003" } },
                  _react2.default.createElement(_semanticUiReact.Icon, {
                    name: "attention"
                  }),
                  this.props.error
                );
              }
            }
          ]);

          return FormError;
        })(_react2.default.Component);

        FormError.propTypes = {
          error: _propTypes2.default.string.isRequired
        };
        exports.default = FormError;

        /***/
      },
      /* 428 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _typeof =
          typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  typeof Symbol === "function" &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? "symbol"
                  : typeof obj;
              };

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _reactRedux = __webpack_require__(9);

        var _immutable = __webpack_require__(180);

        var _emailSignUp = __webpack_require__(10);

        var _EmailSignUpFormView = __webpack_require__(429);

        var _EmailSignUpFormView2 = _interopRequireDefault(
          _EmailSignUpFormView
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function mapStateToProps(_ref, ownProps) {
          var auth = _ref.auth;

          var endpoint =
            ownProps.endpoint ||
            auth.getIn(["configure", "currentEndpointKey"]) ||
            auth.getIn(["configure", "defaultEndpointKey"]);

          return {
            endpoint: endpoint,
            form: "auth-emailSignUp-" + endpoint.toString(),
            isSignedIn: auth.getIn(["user", "isSignedIn"])
          };
        }

        var handleFormErrors = function handleFormErrors(err) {
          if (
            (typeof err === "undefined" ? "undefined" : _typeof(err)) ===
            "object"
          ) {
            throw new _immutable.SubmissionError(err);
          } else {
            throw new _immutable.SubmissionError({
              _error: "Something went wrong. Please try again"
            });
          }
        };

        function mergeProps(stateProps, dispatchProps, ownProps) {
          return Object.assign({}, ownProps, stateProps, dispatchProps, {
            onSubmit: function onSubmit(formData) {
              return dispatchProps
                .emailSignUp(formData.toJS(), stateProps.endpoint)
                .then(ownProps.next)
                .catch(handleFormErrors);
            }
          });
        }

        exports.default = (0, _reactRedux.connect)(
          mapStateToProps,
          { emailSignUp: _emailSignUp.emailSignUp },
          mergeProps
        )((0, _immutable.reduxForm)({})(_EmailSignUpFormView2.default));

        /***/
      },
      /* 429 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _immutable = __webpack_require__(180);

        var _semanticUiReact = __webpack_require__(159);

        var _Input = __webpack_require__(425);

        var _Input2 = _interopRequireDefault(_Input);

        var _FormError = __webpack_require__(427);

        var _FormError2 = _interopRequireDefault(_FormError);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _objectWithoutProperties(obj, keys) {
          var target = {};
          for (var i in obj) {
            if (keys.indexOf(i) >= 0) continue;
            if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
            target[i] = obj[i];
          }
          return target;
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var defaultInputProps = {
          email: {
            label: "Email",
            type: "email"
          },
          password: {
            label: "Password",
            type: "password"
          },
          passwordConfirmation: {
            label: "Password Confirmation",
            type: "password"
          },
          submit: {}
        };

        var EmailSignUpFormView = (function(_React$Component) {
          _inherits(EmailSignUpFormView, _React$Component);

          function EmailSignUpFormView() {
            _classCallCheck(this, EmailSignUpFormView);

            return _possibleConstructorReturn(
              this,
              (
                EmailSignUpFormView.__proto__ ||
                Object.getPrototypeOf(EmailSignUpFormView)
              ).apply(this, arguments)
            );
          }

          _createClass(EmailSignUpFormView, [
            {
              key: "renderInputFields",
              value: function renderInputFields(inputFieldsMap, disabled) {
                var _this2 = this;

                return Object.keys(inputFieldsMap).map(function(inputKey) {
                  var input = inputFieldsMap[inputKey];
                  return _this2.renderInput(input, disabled);
                });
              }
            },
            {
              key: "renderInput",
              value: function renderInput(inputDetails, disabled) {
                var defaultColumnWidth = 16;
                var key = inputDetails.key,
                  propsKey = inputDetails.propsKey;

                var inputPropKey = propsKey || key;
                var defaultProps = defaultInputProps[inputPropKey] || {};
                var instanceProps = this.props.inputProps[inputPropKey] || {};

                var _Object$assign = Object.assign(defaultProps, instanceProps),
                  width = _Object$assign.width,
                  inputProps = _objectWithoutProperties(_Object$assign, [
                    "width"
                  ]);

                return _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { key: key, width: width || defaultColumnWidth },
                  _react2.default.createElement(
                    _immutable.Field,
                    _extends(
                      {
                        fluid: Boolean(true),
                        name: key,
                        component: _Input2.default
                      },
                      inputProps
                    )
                  )
                );
              }
            },
            {
              key: "renderFormError",
              value: function renderFormError(error) {
                return _react2.default.createElement(
                  _semanticUiReact.Grid.Column,
                  { key: "errors", width: 16 },
                  _react2.default.createElement(_FormError2.default, {
                    error: error
                  })
                );
              }
            },
            {
              key: "render",
              value: function render() {
                var _props = this.props,
                  handleSubmit = _props.handleSubmit,
                  error = _props.error,
                  submitting = _props.submitting,
                  dirty = _props.dirty,
                  valid = _props.valid,
                  isSignedIn = _props.isSignedIn;

                var disabled = !valid || submitting || isSignedIn;
                var SubmitButton = this.props.submitComponent;

                return _react2.default.createElement(
                  _semanticUiReact.Form,
                  {
                    className: "redux-auth email-sign-up-form clearfix",
                    onSubmit: handleSubmit
                  },
                  _react2.default.createElement(
                    _semanticUiReact.Container,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Segment,
                      { basic: true },
                      _react2.default.createElement(
                        _semanticUiReact.Grid,
                        { padded: true },
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { width: 16 },
                          _react2.default.createElement("h2", null, "Sign Up")
                        )
                      ),
                      _react2.default.createElement(
                        _semanticUiReact.Grid,
                        { padded: true, className: "input-fields" },
                        error && dirty && this.renderFormError(error),
                        this.renderInputFields(
                          this.props.additionalInputs,
                          disabled
                        ),
                        this.renderInput({ key: "email" }, disabled),
                        this.renderInput({ key: "password" }, disabled),
                        this.renderInput(
                          {
                            key: "password_confirmation",
                            propsKey: "passwordConfirmation"
                          },
                          disabled
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(_semanticUiReact.Divider, {
                    fitted: true
                  }),
                  _react2.default.createElement(
                    _semanticUiReact.Container,
                    null,
                    _react2.default.createElement(
                      _semanticUiReact.Segment,
                      { basic: true },
                      _react2.default.createElement(
                        _semanticUiReact.Grid,
                        { middle: "true", aligned: "true", padded: true },
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { width: 8, verticalAlign: "middle" },
                          this.props.callToAction
                        ),
                        _react2.default.createElement(
                          _semanticUiReact.Grid.Column,
                          { width: 8, verticalAlign: "middle" },
                          _react2.default.createElement(
                            SubmitButton,
                            _extends(
                              {
                                type: "submit",
                                floated: "right",
                                disabled: disabled,
                                className: "email-sign-up-submit",
                                loading: submitting
                              },
                              this.props.inputProps.submit
                            ),
                            "Create Account"
                          )
                        )
                      )
                    )
                  )
                );
              }
            }
          ]);

          return EmailSignUpFormView;
        })(_react2.default.Component);

        EmailSignUpFormView.propTypes = {
          additionalInputs: _propTypes2.default.object,
          callToAction: _propTypes2.default.node,
          dirty: _propTypes2.default.bool,
          error: _propTypes2.default.string,
          handleSubmit: _propTypes2.default.func,
          inputProps: _propTypes2.default.shape({
            email: _propTypes2.default.object,
            password: _propTypes2.default.object,
            passwordConfirmation: _propTypes2.default.object,
            submit: _propTypes2.default.object
          }),
          isSignedIn: _propTypes2.default.bool,
          next: _propTypes2.default.func,
          submitComponent: _propTypes2.default.func,
          submitting: _propTypes2.default.bool,
          valid: _propTypes2.default.bool
        };
        EmailSignUpFormView.defaultProps = {
          additionalInputs: {},
          inputProps: defaultInputProps,
          next: function next() {},
          submitComponent: _semanticUiReact.Button
        };
        exports.default = EmailSignUpFormView;

        /***/
      },
      /* 430 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _ButtonLoader = __webpack_require__(177);

        var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

        var _semanticUiReact = __webpack_require__(159);

        var _reactRedux = __webpack_require__(9);

        var _signOut = __webpack_require__(10);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var SignOutButton = (function(_React$Component) {
          _inherits(SignOutButton, _React$Component);

          function SignOutButton() {
            _classCallCheck(this, SignOutButton);

            return _possibleConstructorReturn(
              this,
              (
                SignOutButton.__proto__ || Object.getPrototypeOf(SignOutButton)
              ).apply(this, arguments)
            );
          }

          _createClass(SignOutButton, [
            {
              key: "getEndpoint",
              value: function getEndpoint() {
                return (
                  this.props.endpoint ||
                  this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
                  this.props.auth.getIn(["configure", "defaultEndpointKey"])
                );
              }
            },
            {
              key: "handleClick",
              value: function handleClick() {
                this.props
                  .dispatch((0, _signOut.signOut)(this.getEndpoint()))
                  .then(this.props.next)
                  .catch(function() {});
              }
            },
            {
              key: "render",
              value: function render() {
                var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
                return _react2.default.createElement(
                  _ButtonLoader2.default,
                  _extends(
                    {
                      loading: this.props.auth.getIn([
                        "signOut",
                        this.getEndpoint(),
                        "loading"
                      ]),
                      icon: this.props.icon,
                      disabled: disabled,
                      className: "sign-out-submit",
                      onClick: this.handleClick.bind(this)
                    },
                    this.props
                  )
                );
              }
            }
          ]);

          return SignOutButton;
        })(_react2.default.Component);

        SignOutButton.propTypes = {
          next: _propTypes2.default.func,
          children: _propTypes2.default.node,
          icon: _propTypes2.default.node
        };
        SignOutButton.defaultProps = {
          next: function next() {},
          children: _react2.default.createElement("span", null, "Sign Out"),
          icon: _react2.default.createElement(_semanticUiReact.Icon, {
            name: "sign out"
          })
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(SignOutButton);

        /***/
      },
      /* 431 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _Input = __webpack_require__(178);

        var _Input2 = _interopRequireDefault(_Input);

        var _ButtonLoader = __webpack_require__(177);

        var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

        var _semanticUiReact = __webpack_require__(159);

        var _reactRedux = __webpack_require__(9);

        var _requestPasswordReset = __webpack_require__(10);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var RequestPasswordResetForm = (function(_React$Component) {
          _inherits(RequestPasswordResetForm, _React$Component);

          function RequestPasswordResetForm() {
            _classCallCheck(this, RequestPasswordResetForm);

            return _possibleConstructorReturn(
              this,
              (
                RequestPasswordResetForm.__proto__ ||
                Object.getPrototypeOf(RequestPasswordResetForm)
              ).apply(this, arguments)
            );
          }

          _createClass(RequestPasswordResetForm, [
            {
              key: "getEndpoint",
              value: function getEndpoint() {
                return (
                  this.props.endpoint ||
                  this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
                  this.props.auth.getIn(["configure", "defaultEndpointKey"])
                );
              }
            },
            {
              key: "handleInput",
              value: function handleInput(key, val) {
                this.props.dispatch(
                  (0, _requestPasswordReset.requestPasswordResetFormUpdate)(
                    this.getEndpoint(),
                    key,
                    val
                  )
                );
              }
            },
            {
              key: "handleSubmit",
              value: function handleSubmit(event) {
                event.preventDefault();
                var formData = this.props.auth
                  .getIn(["requestPasswordReset", this.getEndpoint(), "form"])
                  .toJS();
                this.props.dispatch(
                  (0, _requestPasswordReset.requestPasswordReset)(
                    formData,
                    this.getEndpoint()
                  )
                );
              }
            },
            {
              key: "render",
              value: function render() {
                var loading = this.props.auth.getIn([
                  "requestPasswordReset",
                  this.getEndpoint(),
                  "loading"
                ]);
                var inputDisabled = this.props.auth.getIn([
                  "user",
                  "isSignedIn"
                ]);
                var submitDisabled = !this.props.auth.getIn([
                  "requestPasswordReset",
                  this.getEndpoint(),
                  "form",
                  "email"
                ]);

                return _react2.default.createElement(
                  "form",
                  {
                    className:
                      "redux-auth request-password-reset-form clearfix",
                    onSubmit: this.handleSubmit.bind(this)
                  },
                  _react2.default.createElement(
                    _Input2.default,
                    _extends(
                      {
                        type: "text",
                        label: "Email Address",
                        groupClassName: "request-password-reset-email",
                        placeholder: "Email Address",
                        disabled: loading || inputDisabled,
                        value: this.props.auth.getIn([
                          "requestPasswordReset",
                          this.getEndpoint(),
                          "form",
                          "email"
                        ]),
                        errors: this.props.auth.getIn([
                          "requestPasswordReset",
                          this.getEndpoint(),
                          "errors",
                          "email"
                        ]),
                        onChange: this.handleInput.bind(this, "email")
                      },
                      this.props.inputProps.email
                    )
                  ),
                  _react2.default.createElement(
                    _ButtonLoader2.default,
                    _extends(
                      {
                        loading: loading,
                        type: "submit",
                        icon: _react2.default.createElement(
                          _semanticUiReact.Icon,
                          { name: "send" }
                        ),
                        className: "pull-right request-password-reset-submit",
                        disabled: inputDisabled || submitDisabled,
                        onClick: this.handleSubmit.bind(this)
                      },
                      this.props.inputProps.submit
                    ),
                    "Request Password Reset"
                  )
                );
              }
            }
          ]);

          return RequestPasswordResetForm;
        })(_react2.default.Component);

        RequestPasswordResetForm.propTypes = {
          endpoint: _propTypes2.default.string,
          inputProps: _propTypes2.default.shape({
            email: _propTypes2.default.object,
            submit: _propTypes2.default.object
          })
        };
        RequestPasswordResetForm.defaultProps = {
          inputProps: {
            email: {},
            submit: {}
          }
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(RequestPasswordResetForm);

        /***/
      },
      /* 432 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _reactRedux = __webpack_require__(9);

        var _ButtonLoader = __webpack_require__(177);

        var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

        var _semanticUiReact = __webpack_require__(159);

        var _oauthSignIn = __webpack_require__(10);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        // hook for rewire
        var oAuthSignIn = _oauthSignIn.oAuthSignIn;

        var OAuthSignInButton = (function(_React$Component) {
          _inherits(OAuthSignInButton, _React$Component);

          function OAuthSignInButton() {
            _classCallCheck(this, OAuthSignInButton);

            return _possibleConstructorReturn(
              this,
              (
                OAuthSignInButton.__proto__ ||
                Object.getPrototypeOf(OAuthSignInButton)
              ).apply(this, arguments)
            );
          }

          _createClass(OAuthSignInButton, [
            {
              key: "getEndpoint",
              value: function getEndpoint() {
                return (
                  this.props.endpoint ||
                  this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
                  this.props.auth.getIn(["configure", "defaultEndpointKey"])
                );
              }
            },
            {
              key: "handleClick",
              value: function handleClick() {
                this.props
                  .dispatch(
                    oAuthSignIn({
                      provider: this.props.provider,
                      params: this.props.signInParams,
                      endpointKey: this.getEndpoint()
                    })
                  )
                  .then(this.props.next)
                  .catch(function() {});
              }
            },
            {
              key: "render",
              value: function render() {
                var disabled =
                  this.props.disabled ||
                  this.props.auth.getIn(["user", "isSignedIn"]);
                var loading =
                  this.props.auth.getIn([
                    "ui",
                    "oAuthSignInLoadingProvider"
                  ]) === this.props.provider &&
                  this.props.auth.getIn([
                    "oAuthSignIn",
                    this.getEndpoint(),
                    "loading"
                  ]);

                return _react2.default.createElement(
                  _ButtonLoader2.default,
                  _extends(
                    {
                      loading: this.props.loading || loading,
                      className: this.props.className + " oauth-sign-in-submit",
                      disabled: disabled,
                      onClick: this.handleClick.bind(this)
                    },
                    this.props
                  )
                );
              }
            }
          ]);

          return OAuthSignInButton;
        })(_react2.default.Component);

        OAuthSignInButton.propTypes = {
          provider: _propTypes2.default.string.isRequired,
          label: _propTypes2.default.string,
          disabled: _propTypes2.default.bool,
          signInParams: _propTypes2.default.object,
          content: _propTypes2.default.node,
          icon: _propTypes2.default.node,
          next: _propTypes2.default.func
        };
        OAuthSignInButton.defaultProps = {
          signInParams: {},
          next: function next() {}
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(OAuthSignInButton);

        /***/
      },
      /* 433 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _Input = __webpack_require__(178);

        var _Input2 = _interopRequireDefault(_Input);

        var _ButtonLoader = __webpack_require__(177);

        var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

        var _semanticUiReact = __webpack_require__(159);

        var _updatePassword = __webpack_require__(10);

        var _reactRedux = __webpack_require__(9);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var UpdatePasswordForm = (function(_React$Component) {
          _inherits(UpdatePasswordForm, _React$Component);

          function UpdatePasswordForm() {
            _classCallCheck(this, UpdatePasswordForm);

            return _possibleConstructorReturn(
              this,
              (
                UpdatePasswordForm.__proto__ ||
                Object.getPrototypeOf(UpdatePasswordForm)
              ).apply(this, arguments)
            );
          }

          _createClass(UpdatePasswordForm, [
            {
              key: "getEndpoint",
              value: function getEndpoint() {
                return (
                  this.props.endpoint ||
                  this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
                  this.props.auth.getIn(["configure", "defaultEndpointKey"])
                );
              }
            },
            {
              key: "handleInput",
              value: function handleInput(key, val) {
                this.props.dispatch(
                  (0, _updatePassword.updatePasswordFormUpdate)(
                    this.getEndpoint(),
                    key,
                    val
                  )
                );
              }
            },
            {
              key: "handleSubmit",
              value: function handleSubmit(event) {
                event.preventDefault();
                var formData = this.props.auth
                  .getIn(["updatePassword", this.getEndpoint(), "form"])
                  .toJS();
                this.props.dispatch(
                  (0, _updatePassword.updatePassword)(
                    formData,
                    this.getEndpoint()
                  )
                );
              }
            },
            {
              key: "render",
              value: function render() {
                var endpoint = this.getEndpoint();
                var loading = this.props.auth.getIn([
                  "updatePassword",
                  endpoint,
                  "loading"
                ]);
                var disabled =
                  !this.props.auth.getIn(["user", "isSignedIn"]) ||
                  loading ||
                  this.props.auth.getIn(["user", "attributes", "provider"]) !==
                    "email";

                return _react2.default.createElement(
                  "form",
                  {
                    className: "redux-auth update-password-form clearfix",
                    onSubmit: this.handleSubmit.bind(this)
                  },
                  _react2.default.createElement(
                    _Input2.default,
                    _extends(
                      {
                        type: "password",
                        label: "Password",
                        placeholder: "Password",
                        disabled: disabled,
                        groupClassName: "update-password-password",
                        value: this.props.auth.getIn([
                          "updatePassword",
                          endpoint,
                          "form",
                          "password"
                        ]),
                        errors: this.props.auth.getIn([
                          "updatePassword",
                          endpoint,
                          "errors",
                          "password"
                        ]),
                        onChange: this.handleInput.bind(this, "password")
                      },
                      this.props.inputProps.password
                    )
                  ),
                  _react2.default.createElement(
                    _Input2.default,
                    _extends(
                      {
                        type: "password",
                        label: "Password Confirmation",
                        placeholder: "Password Confirmation",
                        disabled: disabled,
                        groupClassName: "update-password-password-confirmation",
                        value: this.props.auth.getIn([
                          "updatePassword",
                          endpoint,
                          "form",
                          "password_confirmation"
                        ]),
                        errors: this.props.auth.getIn([
                          "updatePassword",
                          endpoint,
                          "errors",
                          "password_confirmation"
                        ]),
                        onChange: this.handleInput.bind(
                          this,
                          "password_confirmation"
                        )
                      },
                      this.props.inputProps.passwordConfirmation
                    )
                  ),
                  _react2.default.createElement(
                    _ButtonLoader2.default,
                    _extends(
                      {
                        loading: loading,
                        type: "submit",
                        disabled: disabled,
                        className: "pull-right update-password-submit",
                        icon:
                          this.props.icon ||
                          _react2.default.createElement(_semanticUiReact.Icon, {
                            name: "lock"
                          }),
                        onClick: this.handleSubmit.bind(this)
                      },
                      this.props.inputProps.submit
                    ),
                    "Update Password"
                  )
                );
              }
            }
          ]);

          return UpdatePasswordForm;
        })(_react2.default.Component);

        UpdatePasswordForm.propTypes = {
          endpoint: _propTypes2.default.string,
          inputProps: _propTypes2.default.shape({
            password: _propTypes2.default.object,
            passwordConfirmation: _propTypes2.default.object
          })
        };
        UpdatePasswordForm.defaultProps = {
          inputProps: {
            password: {},
            passwordConfirmation: {}
          }
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(UpdatePasswordForm);

        /***/
      },
      /* 434 */
      /***/ function(module, exports, __webpack_require__) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true
        });

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };

        var _createClass = (function() {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          return function(Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
          };
        })();

        var _react = __webpack_require__(2);

        var _react2 = _interopRequireDefault(_react);

        var _propTypes = __webpack_require__(3);

        var _propTypes2 = _interopRequireDefault(_propTypes);

        var _ButtonLoader = __webpack_require__(177);

        var _ButtonLoader2 = _interopRequireDefault(_ButtonLoader);

        var _destroyAccount = __webpack_require__(10);

        var _reactRedux = __webpack_require__(9);

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          }
          return call &&
            (typeof call === "object" || typeof call === "function")
            ? call
            : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError(
              "Super expression must either be null or a function, not " +
                typeof superClass
            );
          }
          subClass.prototype = Object.create(
            superClass && superClass.prototype,
            {
              constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
              }
            }
          );
          if (superClass)
            Object.setPrototypeOf
              ? Object.setPrototypeOf(subClass, superClass)
              : (subClass.__proto__ = superClass);
        }

        var DestroyAccountButton = (function(_React$Component) {
          _inherits(DestroyAccountButton, _React$Component);

          function DestroyAccountButton() {
            _classCallCheck(this, DestroyAccountButton);

            return _possibleConstructorReturn(
              this,
              (
                DestroyAccountButton.__proto__ ||
                Object.getPrototypeOf(DestroyAccountButton)
              ).apply(this, arguments)
            );
          }

          _createClass(DestroyAccountButton, [
            {
              key: "getEndpoint",
              value: function getEndpoint() {
                return (
                  this.props.endpoint ||
                  this.props.auth.getIn(["configure", "currentEndpointKey"]) ||
                  this.props.auth.getIn(["configure", "defaultEndpointKey"])
                );
              }
            },
            {
              key: "handleClick",
              value: function handleClick() {
                this.props.dispatch(
                  (0, _destroyAccount.destroyAccount)(this.getEndpoint())
                );
              }
            },
            {
              key: "render",
              value: function render() {
                var disabled = !this.props.auth.getIn(["user", "isSignedIn"]);
                return _react2.default.createElement(
                  _ButtonLoader2.default,
                  _extends(
                    {
                      loading: this.props.auth.getIn([
                        "destroyAccount",
                        this.getEndpoint(),
                        "loading"
                      ]),
                      icon: this.props.icon,
                      disabled: disabled,
                      className: "destroy-account-submit",
                      onClick: this.handleClick.bind(this)
                    },
                    this.props
                  )
                );
              }
            }
          ]);

          return DestroyAccountButton;
        })(_react2.default.Component);

        DestroyAccountButton.propTypes = {
          endpoint: _propTypes2.default.string,
          children: _propTypes2.default.node,
          icon: _propTypes2.default.node
        };
        DestroyAccountButton.defaultProps = {
          children: _react2.default.createElement(
            "span",
            null,
            "Destroy Account"
          ),
          icon: "remove circle outline"
        };
        exports.default = (0, _reactRedux.connect)(function(_ref) {
          var auth = _ref.auth;
          return { auth: auth };
        })(DestroyAccountButton);

        /***/
      }
      /******/
    ]
  )
);
