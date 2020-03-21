import contexts from "less/lib/less/contexts";
import {User} from "network/user";

export default {
  modifyInfo(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.根据传过来的id找到用户

      // 2.操作成功显示信息
      // 提交新的修改
      resolve('手机号码修改成功!')
    })
  },

  userLogin(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.根据传过来的id找到用户

      // 2.进行信息比对
      resolve('用户登录成功！')
    })
  },

  userRegister(user, payload) {
    return new Promise((resolve, reject) => {
      // 1.创建一个用户信息


      // 2.向数据库添加
      resolve('用户注册成功！')
    })
  }
}