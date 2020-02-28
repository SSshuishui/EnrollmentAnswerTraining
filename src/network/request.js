import axios from 'axios'


export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    // baseURL: 'http://106.54.54.237:8000/api/hy',
    timeout: 4000
  })

  // 2.axios的拦截器
  //2.1请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, err => {
  });

  //2.2响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
  })

  // 3.发送真正的网络请求
  return instance(config)
}
