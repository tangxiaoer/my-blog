import axios from 'axios'
//import qs from 'qs'

axios.defaults.timeout = 50000;
axios.defaults.headers['Content-type'] = 'application/json;charset=UTF-8';
//axios.defaults.baseURL = 'http://localhost:42233/api';
axios.defaults.baseURL = 'http://175.24.9.165:8001/';


//post请求传参序列号（添加请求拦截器）
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        // config.data = qs.parse(config.data);
        //每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        // const token = store.state.token;        
        // token && (config.headers.Authorization = token); 
    }
    return config;
}, error => {
    console.log("传参错误");
    return Promise.reject(error);
})

//返回相应拦截
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, error => {
    console.log("网络异常");
    return Promise.reject(error);
})

export function fetchUpload(url, param) {
    axios({
        url: '',
        method: 'post',
        data: param,

    })
}

export function fetchAuth(url, params, auth) {
    return new Promise((resolve, reject) => {
        // axios.get(url,params,{auth:auth,withCredentials:true}).then(res=>{
        //     resolve(res);
        // }),err=>{
        //     reject(err);
        // }
        axios({
            url: url,
            method: 'get',
            auth: auth,
            withCredentials: true,
        }).then(res => {
            resolve(res);
        }), err => {
            reject(err);
        }
    })
}

//返回一个promise （发送post请求）
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
    })
}

////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })

    })
}

export default {
    fetchPost,
    fetchGet,
}