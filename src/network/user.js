

// 导出用户类
export class User {
  constructor(user) {
    this.name = user.name
    this.phone = user.phone
    this.password = user.password
    this.school = user.school
  }
}

// 异步删除数据库中用户信息
export async function deleteUser(id) {
  // sql操作数据库语句
}

//异步向数据库添加题目
export async function addQuestion(question) {

}