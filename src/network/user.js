import {request} from "./request";

// 根据用户id 获取单个用户的信息
export function getUser(id) {
  return request({
    url: '/users',
    params: {
      id
    }
  })
}

// 获取所有用户的信息
export function getALLUsers() {
  return request({
    url: '/users',
  })
}

/**
 *  添加 || 更新用户信息
 *  params: user对象
 */

/**
 *  删除用户信息
 *  params； id
 */

// 导出用户类
export class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.password = user.password;
    this.work_id = user.work_id;
    this.phone = user.phone;
    this.score = user.score;
    this.school = user.school;
    this.login_time = user.login_time;
    this.register_time = user.register_time
  }
}
