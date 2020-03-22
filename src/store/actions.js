import {deleteUser} from "network/user";
import {deleteQues} from "network/question";

export default {
  // 修改用户信息
  modifyInfo(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.根据传过来的id找到用户

      // 2.操作成功显示信息
      // 提交新的修改
      resolve('手机号码修改成功!')
    })
  },

  // 删除用户信息
  deleteUserInfo(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.根据传过来的id找到用户
      // 异步删除数据库用户信息
      if(deleteUser(context.id)){
        // 2.操作成功显示信息
        // 提交新的修改
        resolve('删除用户信息成功！')
      }else{
        reject('删除失败，请稍后再试！')
      }
    })
  },

  // 用户登录
  userLogin(context, payload) {
    return new Promise((resolve, reject) => {
      // 1.根据传过来的id找到用户

      // 2.进行信息比对
      if (true) {
        resolve('用户登录成功！')
      }else {
        reject('账号或密码错误，请重新输入！')
      }
    })
  },

  // 用户注册
  userRegister(user, payload) {
    return new Promise((resolve, reject) => {
      // 1.创建一个用户信息


      // 2.向数据库添加
      resolve('用户注册成功！')
    })
  },

  // 修改题目



  // 删除题目
  deleteQuestionInfo(context, payload){
    return new Promise((resolve, reject) => {
      // 1.根据传过来的id找到题目

      // 2.操作数据库
      // 若成功，返回操作成功信息
      if (deleteQues(context)){
        resolve('操作成功！')
      }else {
        reject('删除失败，请稍后再试！')
      }
    })
  }
}