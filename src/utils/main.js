/*!
 * 
 * author : 7548764@qq.com
 * github : https://github.com/hatedMe/wechat-request
 * version : 1.5.0
 * 		
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(/*! ./src/request */ "./src/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _request2.default;

/***/ }),

/***/ "./src/InterceptorManager.js":
/*!***********************************!*\
  !*** ./src/InterceptorManager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var InterceptorManager = function () {
    function InterceptorManager() {
        _classCallCheck(this, InterceptorManager);

        this.handlers = [];
    }

    _createClass(InterceptorManager, [{
        key: "use",
        value: function use(fulfilled, rejected) {
            this.handlers.push({
                fulfilled: fulfilled,
                rejected: rejected
            });
            return this.handlers.length - 1;
        }
    }, {
        key: "eject",
        value: function eject(id) {
            if (this.handlers[id]) {
                this.handlers[id] = null;
            }
        }
    }, {
        key: "forEach",
        value: function forEach(fn) {
            this.handlers.forEach(function (e) {
                if (e !== null) {
                    e = [e];
                    fn(e);
                }
            });
        }
    }]);

    return InterceptorManager;
}();

exports.default = InterceptorManager;

/***/ }),

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var util = _interopRequireWildcard(_util);

var _defaults = __webpack_require__(/*! ./defaults */ "./src/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

var _InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./src/InterceptorManager.js");

var _InterceptorManager2 = _interopRequireDefault(_InterceptorManager);

var _dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./src/dispatchRequest.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Request = function () {
    function Request(config) {
        _classCallCheck(this, Request);

        this.defaults = config;
        this.interceptors = {
            request: new _InterceptorManager2.default(),
            response: new _InterceptorManager2.default()
        };
    }

    _createClass(Request, [{
        key: 'request',
        value: function request(config) {
            if (typeof config === 'string') {
                config = util.merge({ url: arguments[0] }, arguments[1]);
            }
            config = util.merge(_defaults2.default, this.defaults, { method: 'GET' }, config);
            config.method = config.method.toLowerCase();

            var chain = [_dispatchRequest.dispatchRequest, undefined];
            var promise = Promise.resolve(config);

            this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
                chain.unshift(interceptor.fulfilled, interceptor.rejected);
            });

            this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
                chain.push(interceptor.fulfilled, interceptor.rejected);
            });
            // wxRequest.abort()

            while (chain.length) {
                promise = promise.then(chain.shift(), chain.shift());
            }

            // if( config.timeout && typeof config.timeout === 'number' ){

            // }
            // console.log( promise );

            return promise;
        }
    }, {
        key: 'all',
        value: function all(promises) {
            return Promise.all(promises);
        }
    }, {
        key: 'uploadFile',
        value: function uploadFile() {
            // 上传图片
            var config = util.merge({ url: arguments[0] }, arguments[1]);
            var formData = void 0;
            if (config.formData && _typeof(config.formData) === 'object') {
                formData = new FormData();
                for (var attr in config.formData) {
                    formData.append(attr, config.formData[attr]);
                }
                config.formData = formData;
            }
            return new Promise(function (resolve, reject) {
                wx.uploadFile({
                    url: config.url,
                    filePath: config.filePath,
                    name: config.name,
                    formData: config.formData,
                    success: function success(res) {
                        resolve({
                            data: res.data,
                            headers: res.header,
                            status: res.statusCode,
                            statusText: 'ok'
                        });
                    },
                    fail: function fail(err) {
                        reject(err);
                    },
                    complete: function complete() {}
                });
            });
        }
    }]);

    return Request;
}();

['delete', 'get', 'head', 'options', 'post', 'put', 'patch'].forEach(function (e) {
    Request.prototype[e] = function (url, config) {
        return this.request(util.merge(config || {}, {
            method: e,
            url: url
        }));
    };
});

exports.default = Request;

/***/ }),

/***/ "./src/defaults.js":
/*!*************************!*\
  !*** ./src/defaults.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

var defaults = {
    method: 'get', // default
    // baseURL: '',
    dataType: 'json',
    responseType: 'text',
    // timeout: 0,
    headers: {}
};

['delete', 'get', 'head', 'post', 'put', 'patch'].map(function (e) {
    defaults.headers[e] = util.merge(defaults.headers, DEFAULT_CONTENT_TYPE);
});

exports.default = defaults;

/***/ }),

/***/ "./src/dispatchRequest.js":
/*!********************************!*\
  !*** ./src/dispatchRequest.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dispatchRequest = undefined;

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var dispatchRequest = exports.dispatchRequest = function dispatchRequest(config) {

    if (config.baseURL && !util.isAbsoluteURL(config.url)) {
        config.url = util.combineURLs(config.baseURL, config.url);
    }

    config.headers = util.merge(config.headers.common || {}, config.headers || {}, config.headers[config.method] || {});

    var methods = ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'];
    methods.forEach(function (method) {
        delete config.headers[method];
    });

    var promise = Promise.resolve(config);
    promise = promise.then(function (config) {
        return new Promise(function (resolve, reject) {
            var requestTask = wx.request({
                url: config.url,
                data: config.data || {},
                header: config.headers,
                method: config.method,
                dataType: config.dataType,
                success: function success(res) {
                    resolve({
                        data: res.data,
                        headers: res.header,
                        status: res.statusCode,
                        statusText: 'ok'
                    });
                },
                fail: function fail(err) {
                    reject(err);
                },
                complete: function complete() {
                    config.complete && config.complete();
                }
            });

            if (config.timeout && typeof config.timeout === 'number' && config.timeout > 1000) {
                setTimeout(function () {
                    requestTask.abort();
                    resolve({
                        status: 'canceled'
                    });
                }, config.timeout);
            }
        });
    });

    return promise;
};

/***/ }),

/***/ "./src/request.js":
/*!************************!*\
  !*** ./src/request.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _class = __webpack_require__(/*! ./class */ "./src/class.js");

var _class2 = _interopRequireDefault(_class);

var _util = __webpack_require__(/*! ./util */ "./src/util.js");

var util = _interopRequireWildcard(_util);

var _defaults = __webpack_require__(/*! ./defaults */ "./src/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createInstance(config) {
    var context = new _class2.default(config);
    var instance = util.bind(_class2.default.prototype.request, context);
    util.extend(instance, _class2.default.prototype, context);
    util.extend(instance, context);
    return instance;
}

var request = createInstance(_defaults2.default);

exports.default = request;

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var bind = exports.bind = function bind(fn, thisArg) {
    return function warp() {
        return fn.apply(thisArg, Array.from(arguments));
    };
};

var extend = exports.extend = function extend(a, b, thisArg) {
    var o = Object.getOwnPropertyNames(b);
    o.forEach(function (attr) {
        if (thisArg && typeof b[attr] === "function") {
            a[attr] = bind(b[attr], thisArg);
        } else {
            a[attr] = b[attr];
        }
    });
    return a;
};

var copyobj = exports.copyobj = function copyobj(a, b) {
    return Object.assign({}, a, b);
};

var merge = exports.merge = function merge() {
    var result = {};
    Array.from(arguments).forEach(function (e) {
        for (var key in e) {
            if (_typeof(e[key]) === 'object' && !isEmptyObject(e[key])) {
                merge(result[key], e[key]);
            }
            result[key] = e[key];
        }
    });

    return result;
};

var isEmptyObject = exports.isEmptyObject = function isEmptyObject(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
};

var combineURLs = exports.combineURLs = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

// /**
//  * Transform the data for a request or a response
//  *
//  * @param {Object|String} data The data to be transformed
//  * @param {Array} headers The headers for the request or response
//  * @param {Array|Function} fns A single function or Array of functions
//  * @returns {*} The resulting transformed data
//  */
// export const transformData = function(data, headers, fns) {
//     // utils.forEach(fns, function transform(fn) {
//     //   data = fn(data, headers);
//     // });

//     if( typeof data !== 'object' ) {
//         data = [data]
//     }

//     if( Array.isArray(data) ){

//     }

//     return data;
// };


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

var isAbsoluteURL = exports.isAbsoluteURL = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return (/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
    );
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Rpc3BhdGNoUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJJbnRlcmNlcHRvck1hbmFnZXIiLCJoYW5kbGVycyIsImZ1bGZpbGxlZCIsInJlamVjdGVkIiwicHVzaCIsImxlbmd0aCIsImlkIiwiZm4iLCJmb3JFYWNoIiwiZSIsInV0aWwiLCJSZXF1ZXN0IiwiY29uZmlnIiwiZGVmYXVsdHMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJtZXJnZSIsInVybCIsImFyZ3VtZW50cyIsIm1ldGhvZCIsInRvTG93ZXJDYXNlIiwiY2hhaW4iLCJ1bmRlZmluZWQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyIsImludGVyY2VwdG9yIiwidW5zaGlmdCIsInB1c2hSZXNwb25zZUludGVyY2VwdG9ycyIsInRoZW4iLCJzaGlmdCIsInByb21pc2VzIiwiYWxsIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImF0dHIiLCJhcHBlbmQiLCJyZWplY3QiLCJ3eCIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJzdWNjZXNzIiwicmVzIiwiZGF0YSIsImhlYWRlcnMiLCJoZWFkZXIiLCJzdGF0dXMiLCJzdGF0dXNDb2RlIiwic3RhdHVzVGV4dCIsImZhaWwiLCJlcnIiLCJjb21wbGV0ZSIsInByb3RvdHlwZSIsIkRFRkFVTFRfQ09OVEVOVF9UWVBFIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJtYXAiLCJkaXNwYXRjaFJlcXVlc3QiLCJiYXNlVVJMIiwiaXNBYnNvbHV0ZVVSTCIsImNvbWJpbmVVUkxzIiwiY29tbW9uIiwibWV0aG9kcyIsInJlcXVlc3RUYXNrIiwidGltZW91dCIsInNldFRpbWVvdXQiLCJhYm9ydCIsImNyZWF0ZUluc3RhbmNlIiwiY29udGV4dCIsImluc3RhbmNlIiwiYmluZCIsImV4dGVuZCIsInRoaXNBcmciLCJ3YXJwIiwiYXBwbHkiLCJBcnJheSIsImZyb20iLCJhIiwiYiIsIm8iLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwiY29weW9iaiIsImFzc2lnbiIsInJlc3VsdCIsImtleSIsImlzRW1wdHlPYmplY3QiLCJvYmoiLCJyZWxhdGl2ZVVSTCIsInJlcGxhY2UiLCJ0ZXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDR3FCQSxrQjtBQUNq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QixRQUFRK0IsT0FBUixDQUFnQixNQUFoQixFQUF3QixFQUF4QixJQUE4QixHQUE5QixHQUFvQ0QsWUFBWUMsT0FBWixDQUFvQixNQUFwQixFQUE0QixFQUE1QixDQURqQyxHQUVIL0IsT0FGSjtBQUdILENBSk07O0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7OztBQU9PLElBQU1DLHdDQUFpQixTQUFqQkEsYUFBaUIsQ0FBVTVDLEdBQVYsRUFBZTtBQUN6QztBQUNBO0FBQ0E7QUFDQSxXQUFPLGlDQUFnQzJFLElBQWhDLENBQXFDM0UsR0FBckM7QUFBUDtBQUNILENBTE0sQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJcclxuXHJcbmltcG9ydCByZXF1ZXN0IGZyb20gJy4vc3JjL3JlcXVlc3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3Q7IiwiXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnRlcmNlcHRvck1hbmFnZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCl7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKHtcclxuICAgICAgICAgICAgZnVsZmlsbGVkLFxyXG4gICAgICAgICAgICByZWplY3RlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgZWplY3QoaWQpe1xyXG4gICAgICAgIGlmKCB0aGlzLmhhbmRsZXJzW2lkXSApe1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvckVhY2goZm4pe1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMuZm9yRWFjaChlID0+e1xyXG4gICAgICAgICAgICBpZihlICE9PSBudWxsICl7XHJcbiAgICAgICAgICAgICAgICBlID0gW2VdO1xyXG4gICAgICAgICAgICAgICAgZm4oZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIlxyXG5cclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzJztcclxuaW1wb3J0IEludGVyY2VwdG9yTWFuYWdlciBmcm9tICcuL0ludGVyY2VwdG9yTWFuYWdlcic7XHJcbmltcG9ydCB7IGRpc3BhdGNoUmVxdWVzdCB9IGZyb20gJy4vZGlzcGF0Y2hSZXF1ZXN0JztcclxuXHJcblxyXG5jbGFzcyBSZXF1ZXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKCBjb25maWcgKXtcclxuICAgICAgICB0aGlzLmRlZmF1bHRzID0gY29uZmlnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xyXG4gICAgICAgICAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXHJcbiAgICAgICAgICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdCggY29uZmlnICl7XHJcbiAgICAgICAgaWYoIHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKXtcclxuICAgICAgICAgICAgY29uZmlnID0gdXRpbC5tZXJnZSh7dXJsOiBhcmd1bWVudHNbMF19LCBhcmd1bWVudHNbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25maWcgPSB1dGlsLm1lcmdlKGRlZmF1bHRzLCB0aGlzLmRlZmF1bHRzLHsgbWV0aG9kOiAnR0VUJyB9LCBjb25maWcgKTtcclxuICAgICAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBsZXQgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xyXG4gICAgICAgIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCBjb25maWcgKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XHJcbiAgICAgICAgICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xyXG4gICAgICAgICAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHd4UmVxdWVzdC5hYm9ydCgpXHJcblxyXG4gICAgICAgIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmKCBjb25maWcudGltZW91dCAmJiB0eXBlb2YgY29uZmlnLnRpbWVvdXQgPT09ICdudW1iZXInICl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggcHJvbWlzZSApO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XHJcbiAgICB9XHJcbiAgICBhbGwgKHByb21pc2VzKXtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwbG9hZEZpbGUgKCApeyAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICAgICAgbGV0IGNvbmZpZyA9IHV0aWwubWVyZ2Uoe3VybDogYXJndW1lbnRzWzBdfSwgYXJndW1lbnRzWzFdKTtcclxuICAgICAgICBsZXQgZm9ybURhdGE7XHJcbiAgICAgICAgaWYoIGNvbmZpZy5mb3JtRGF0YSAmJiB0eXBlb2YgY29uZmlnLmZvcm1EYXRhID09PSAnb2JqZWN0JyApe1xyXG4gICAgICAgICAgICBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICBmb3IobGV0IGF0dHIgaW4gY29uZmlnLmZvcm1EYXRhKXtcclxuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCggYXR0ciAsIGNvbmZpZy5mb3JtRGF0YVthdHRyXSApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uZmlnLmZvcm1EYXRhID0gZm9ybURhdGFcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IGNvbmZpZy51cmwsIFxyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IGNvbmZpZy5maWxlUGF0aCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IGNvbmZpZy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZm9ybURhdGE6IGNvbmZpZy5mb3JtRGF0YSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiByZXMuZGF0YSAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMgOiByZXMuaGVhZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgOiByZXMuc3RhdHVzQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA6ICdvaydcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGUoKSB7fVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnLCdwb3N0JywgJ3B1dCcsICdwYXRjaCddLmZvckVhY2goZSA9PiB7XHJcbiAgICBSZXF1ZXN0LnByb3RvdHlwZVtlXSA9IGZ1bmN0aW9uICggdXJsLGNvbmZpZyApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCB1dGlsLm1lcmdlKGNvbmZpZyB8fCB7fSAse1xyXG4gICAgICAgICAgICBtZXRob2Q6IGUsXHJcbiAgICAgICAgICAgIHVybDogdXJsXHJcbiAgICAgICAgfSkgKVxyXG4gICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdDsiLCJcclxuXHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcclxuXHJcbmxldCBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG59O1xyXG5cclxudmFyIGRlZmF1bHRzID0ge1xyXG4gICAgbWV0aG9kOiAnZ2V0JywgLy8gZGVmYXVsdFxyXG4gICAgLy8gYmFzZVVSTDogJycsXHJcbiAgICBkYXRhVHlwZSA6ICdqc29uJyxcclxuICAgIHJlc3BvbnNlVHlwZSA6ICd0ZXh0JyxcclxuICAgIC8vIHRpbWVvdXQ6IDAsXHJcbiAgICBoZWFkZXJzOiB7fSxcclxufTtcclxuXHJcblsnZGVsZXRlJywnZ2V0JywgJ2hlYWQnLCdwb3N0JywgJ3B1dCcsICdwYXRjaCddLm1hcChlID0+IHtcclxuICAgIGRlZmF1bHRzLmhlYWRlcnNbZV0gPSB1dGlsLm1lcmdlKGRlZmF1bHRzLmhlYWRlcnMgLCBERUZBVUxUX0NPTlRFTlRfVFlQRSk7XHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRzOyIsIlxyXG5cclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkaXNwYXRjaFJlcXVlc3QgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcblxyXG4gICAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICF1dGlsLmlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcclxuICAgICAgICBjb25maWcudXJsID0gdXRpbC5jb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uZmlnLmhlYWRlcnMgPSB1dGlsLm1lcmdlKFxyXG4gICAgICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcclxuICAgICAgICBjb25maWcuaGVhZGVycyB8fCB7fSxcclxuICAgICAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcclxuICAgIClcclxuXHJcblxyXG4gICAgbGV0IG1ldGhvZHMgPSBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXVxyXG4gICAgbWV0aG9kcy5mb3JFYWNoKG1ldGhvZCA9PiB7XHJcbiAgICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSggY29uZmlnICk7XHJcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKCBjb25maWcgPT4ge1xyXG4gICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICBsZXQgcmVxdWVzdFRhc2sgPSAgd3gucmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmwgOiBjb25maWcudXJsICxcclxuICAgICAgICAgICAgICAgIGRhdGEgOiBjb25maWcuZGF0YSB8fCB7fSxcclxuICAgICAgICAgICAgICAgIGhlYWRlciA6IGNvbmZpZy5oZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kIDogY29uZmlnLm1ldGhvZCxcclxuICAgICAgICAgICAgICAgIGRhdGFUeXBlIDogY29uZmlnLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyA6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA6IHJlcy5kYXRhICxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVycyA6IHJlcy5oZWFkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA6IHJlcy5zdGF0dXNDb2RlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0IDogJ29rJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbCA6IGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlIDogIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWcuY29tcGxldGUgJiYgY29uZmlnLmNvbXBsZXRlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGlmKCBjb25maWcudGltZW91dCAmJiB0eXBlb2YgY29uZmlnLnRpbWVvdXQgPT09ICdudW1iZXInICYmIGNvbmZpZy50aW1lb3V0ID4gMTAwMCApe1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VGFzay5hYm9ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgOiAnY2FuY2VsZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LGNvbmZpZy50aW1lb3V0KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBwcm9taXNlO1xyXG59XHJcblxyXG4iLCJcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCAqIGFzIHV0aWwgIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBkZWZhdWx0cyBmcm9tICcuL2RlZmF1bHRzJztcclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShjb25maWcpIHtcclxuICAgIGxldCBjb250ZXh0ID0gbmV3IFJlcXVlc3QoY29uZmlnKTtcclxuICAgIGxldCBpbnN0YW5jZSA9IHV0aWwuYmluZCggUmVxdWVzdC5wcm90b3R5cGUucmVxdWVzdCAsIGNvbnRleHQgKTtcclxuICAgIHV0aWwuZXh0ZW5kKCBpbnN0YW5jZSAsIFJlcXVlc3QucHJvdG90eXBlICwgY29udGV4dCApO1xyXG4gICAgdXRpbC5leHRlbmQoIGluc3RhbmNlICwgY29udGV4dCApO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlO1xyXG59XHJcblxyXG5sZXQgcmVxdWVzdCA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXF1ZXN0OyBcclxuXHJcblxyXG4iLCJcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgYmluZCA9IGZ1bmN0aW9uKGZuLHRoaXNBcmcpe1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHdhcnAoKXtcclxuICAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnICwgQXJyYXkuZnJvbShhcmd1bWVudHMpIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4dGVuZCA9IGZ1bmN0aW9uIChhLGIsIHRoaXNBcmcpIHtcclxuICAgIGxldCBvID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoIGIgKTtcclxuICAgIG8uZm9yRWFjaChhdHRyID0+IHtcclxuICAgICAgICBpZih0aGlzQXJnICYmIHR5cGVvZiBiW2F0dHJdID09PSBcImZ1bmN0aW9uXCIgKXtcclxuICAgICAgICAgICAgYVthdHRyXSA9IGJpbmQoIGJbYXR0cl0gLCB0aGlzQXJnIClcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYVthdHRyXSA9IGJbYXR0cl07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gYTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNvcHlvYmogPSBmdW5jdGlvbiggYSwgYiApe1xyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oIHt9ICwgYSAsYiApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbWVyZ2UgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgQXJyYXkuZnJvbShhcmd1bWVudHMpLmZvckVhY2goIGUgPT57XHJcbiAgICAgICAgZm9yKGxldCBrZXkgaW4gZSl7XHJcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZVtrZXldID09PSAnb2JqZWN0JyAmJiAhaXNFbXB0eU9iamVjdChlW2tleV0pICl7XHJcbiAgICAgICAgICAgICAgICBtZXJnZSggcmVzdWx0W2tleV0gLCBlW2tleV0gKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZVtrZXldXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpc0VtcHR5T2JqZWN0ID0gZnVuY3Rpb24ob2JqKXtcclxuICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCA9PT0gMFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb21iaW5lVVJMcyA9IGZ1bmN0aW9uIChiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xyXG4gICAgcmV0dXJuIHJlbGF0aXZlVVJMXHJcbiAgICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXHJcbiAgICAgIDogYmFzZVVSTDtcclxufTtcclxuXHJcblxyXG4vLyAvKipcclxuLy8gICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxyXG4vLyAgKlxyXG4vLyAgKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcclxuLy8gICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcclxuLy8gICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xyXG4vLyAgKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXHJcbi8vICAqL1xyXG4vLyBleHBvcnQgY29uc3QgdHJhbnNmb3JtRGF0YSA9IGZ1bmN0aW9uKGRhdGEsIGhlYWRlcnMsIGZucykge1xyXG4vLyAgICAgLy8gdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xyXG4vLyAgICAgLy8gICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XHJcbi8vICAgICAvLyB9KTtcclxuICAgIFxyXG4vLyAgICAgaWYoIHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyApIHtcclxuLy8gICAgICAgICBkYXRhID0gW2RhdGFdXHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaWYoIEFycmF5LmlzQXJyYXkoZGF0YSkgKXtcclxuICAgICAgICBcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICByZXR1cm4gZGF0YTtcclxuLy8gfTtcclxuXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcclxuICovXHJcblxyXG5leHBvcnQgY29uc3QgaXNBYnNvbHV0ZVVSTCA9ICBmdW5jdGlvbiAodXJsKSB7XHJcbiAgICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXHJcbiAgICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcclxuICAgIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxyXG4gICAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=