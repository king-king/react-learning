import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('发出请求');
    return config;
}, function (error) {
    console.log('请求失败');
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    console.log('请求成功', response);
    // Do something with response data
    return response;
}, function (error) {
    console.log('请求失败', error);
    // Do something with response error
    return Promise.reject(error);
});
