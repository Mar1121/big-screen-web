import axios from "axios";

let http = axios.create({
    baseURL: import.meta.env.VITE_APP_AXIOS_BASE,
    timeout: 1000 * 15,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

// 请求拦截器
http.interceptors.request.use(config => {
    console.log(import.meta.env.VITE_APP_AXIOS_BASE), 111;
    return config
})

// 相应拦截器
http.interceptors.response.use(res => {

    return res
})

export default http