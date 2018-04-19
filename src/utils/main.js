/*!
 * 
 * author : 7548764@qq.com
 * github : https://github.com/hatedMe/wechat-request
 * version : 1.3.2
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

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

            // console.log( config ,'config');

            // dosoming 
            // config.baseUrl 


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

['delete', 'get', 'head', 'options'].forEach(function (e) {
    Request.prototype[e] = function (url, config) {
        return this.request(util.merge(config || {}, {
            method: e,
            url: url
        }));
    };
});

['post', 'put', 'patch'].forEach(function (e) {
    Request.prototype[e] = function (config) {
        return this.request(config);
    };
});

// ["options", "get", "head", "post", "put", "delete", "trace", "connect"].forEach(e => {
//     Request.prototype[e] = function ( config ) {
//         return this.request( config )
//     }
// });


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

["delete", "get", "head"].forEach(function (e) {
    defaults.headers[e] = {};
});

['post', 'put', 'patch'].map(function (e) {
    defaults.headers = util.merge(defaults.headers, DEFAULT_CONTENT_TYPE);
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

    return new Promise(function (resolve, reject) {
        wx.request({
            url: config.url,
            data: config.data || {},
            header: config.header,
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
    });
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _request = __webpack_require__(/*! ./request */ "./src/request.js");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _request2.default;

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