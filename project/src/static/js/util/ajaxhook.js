import axios from 'axios';

axios.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log('发出请求');
    return config;
}, (error) => {
    console.log('请求失败');
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use((response) => {
    console.log('请求成功', response);
    // Do something with response data
    return response;
}, (error) => {
    console.log('请求失败', error);
    // Do something with response error
    return Promise.reject(error);
});
