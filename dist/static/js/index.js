webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('发出请求');
    return config;
}, function (error) {
    console.log('请求失败');
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
_axios2.default.interceptors.response.use(function (response) {
    console.log('请求成功', response);
    // Do something with response data
    return response;
}, function (error) {
    console.log('请求失败', error);
    // Do something with response error
    return Promise.reject(error);
});

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(98);

__webpack_require__(100);

var _axios = __webpack_require__(12);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var good = document.createElement('div');
good.classList.add('btn');
good.innerHTML = 'good';
document.body.appendChild(good);
good.onclick = function () {
    _axios2.default.get('http://127.0.0.1:8080/good.ajax').then(function (res) {
        console.log('结束', res);
    });
};

var err = document.createElement('div');
err.classList.add('btn');
err.innerHTML = 'err';
document.body.appendChild(err);

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[97]);