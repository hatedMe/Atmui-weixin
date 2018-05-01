

import wxRequest from './src/request';


const TOKEN = 'sdfhjsdghf';

// 针对post请求增加token
wxRequest.interceptors.request.use(
    config => {
        if (config.method === 'post') {
            config.headers.common['Authorization'] = TOKEN
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

export default wxRequest;



