<template>
  <div>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.school || data.id)"
            style="width: 100%"
            border
            height="500px">
      <el-table-column
              label="工号"
              prop="id">
      </el-table-column>
      <el-table-column
              label="姓名"
              prop="name">
      </el-table-column>
      <el-table-column
              label="学院"
              prop="school">
      </el-table-column>
      <el-table-column
              label="手机号码"
              prop="phone">
      </el-table-column>
      <el-table-column
              label="上次登录时间"
              prop="lastTime">
      </el-table-column>
      <el-table-column
              align="center">
        <template slot="header" slot-scope="scope">
          <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="modifyUserInfo(scope.row)">修改
          </el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="deleteUser(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <modify-user v-show="isBoxShow" :user-info="userInfo" @cancelClick="cancelClick"/>
  </div>
</template>

<script>
  import ModifyUser from "components/content/modifyUser/ModifyUser";

  export default {
    name: "UserInfo",
    components: {
      ModifyUser
    },
    data() {
      return {
        tableData: [
          {
            id: '2016303128',
            name: '张三',
            school: '软件学院',
            phone: '17629063945',
            lastTime: '2020-05-01'
          },
          {
            id: '2016303129',
            name: '李四',
            school: '软件学院',
            phone: '17629063945',
            lastTime: '2020-05-01'
          },
          {
            id: '2016303130',
            name: '王五',
            school: '软件学院',
            phone: '17629063945',
            lastTime: '2020-05-01'
          },
          {
            id: '2016303131',
            name: '赵六',
            school: '软件学院',
            phone: '17629063945',
            lastTime: '2020-05-01'
          }],
        search: '',
        userInfo: {
          id: '',
          name: '',
          school: '',
          phone: ''
        },
        isBoxShow: false
      }
    },
    methods: {
      // 修改用户信息
      modifyUserInfo(info) {
        this.userInfo.id = info.id
        this.userInfo.name = info.name
        this.userInfo.school = info.school
        this.userInfo.phone = info.phone
        this.isBoxShow = true
      },
      cancelClick() {
        this.isBoxShow = false
      },

      // 删除用户
      deleteUser(id) {
        this.$alert('确定要删除该用户吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.deleteUserInfo(id).then(res => {
            this.$toast.show(res)
          })
        })
      }
    },
  }
</script>

<style scoped>

</style>