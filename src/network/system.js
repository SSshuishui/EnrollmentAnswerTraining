import {request} from "./request";

// 获取系统信息
export function getSystemData() {
  return request({
    // 请求数据的地址
    url: '/system'
  })
}


