<template>
  <div class="user-info">
    <el-table
            :data="allUserData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.school || data.id)"
            style="width: 100%"
            border
            height="500px">
      <el-table-column
              label="ID"
              prop="id">
      </el-table-column>
      <el-table-column
              label="姓名"
              prop="name">
      </el-table-column>
      <el-table-column
              label="密码"
              prop="password">
      </el-table-column>
      <el-table-column
              label="工号"
              prop="work_id">
      </el-table-column>
      <el-table-column
              label="手机号码"
              prop="phone">
      </el-table-column>
      <el-table-column
              label="最高得分"
              prop="score">
      </el-table-column>
      <el-table-column
              label="学院"
              prop="school">
      </el-table-column>
      <el-table-column
              label="上次登录时间"
              prop="login_time">
      </el-table-column>
      <el-table-column
              label="注册时间"
              prop="register_time">
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

    <!--   分页     -->
    <el-pagination
            class="pagination"
            background
            layout="total, sizes, prev, pager, next, jumper"
            @size-change="handleSizeChange"
            @current-change="handleCurrentPageChange"
            :current-page="currentPage"
            :page-sizes="[5, 8, 10, 15]"
            :page-size="pageSize"
            :total="totalCount">
    </el-pagination>

    <!--  修改用户信息  -->
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
        currentPage: 1,
        totalCount: 10,
        tableData: [],
        pageSize: 5,
        allUserData: [
          {
            id: '202000001',
            name: '张三',
            password: '12345678',
            work_id: '2016303128',
            phone: '17629063945',
            score: '0',
            school: '软件学院',
            login_time: '2020-05-01',
            register_time: '2019-12-30'
          },
          {
            id: '2016303129',
            name: '李四',
            school: '软件学院',
            phone: '17629063945',
            lastLoginTime: '2020-05-01'
          },
          {
            id: '2016303130',
            name: '王五',
            school: '软件学院',
            phone: '17629063945',
            lastLoginTime: '2020-05-01'
          },
          {
            id: '2016303131',
            name: '赵六',
            school: '软件学院',
            phone: '17629063945',
            lastLoginTime: '2020-05-01'
          }],
        search: '',
        userInfo: {
          id: '',
          name: '',
          password: '',
          work_id: '',
          school: '',
          score: '',
          phone: '',
          login_time: '',
          register_time: ''
        },
        isBoxShow: false
      }
    },
    mounted() {
      this.tableData = this.allUserData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      this.totalCount = this.allUserData.length
    },
    methods: {
      // 页面展示条目数量改变
      handleSizeChange(val) {
        this.pageSize = val
        this.tableData = this.allUserData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allUserData.length
      },

      // 当前页面展示信息改变
      handleCurrentPageChange(val) {
        this.currentPage = val
        this.tableData = this.allUserData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allUserData.length
      },

      // 修改用户信息
      modifyUserInfo(info) {
        this.userInfo.id = info.id
        this.userInfo.name = info.name
        this.userInfo.password = info.password
        this.userInfo.work_id = info.work_id
        this.userInfo.school = info.school
        this.userInfo.phone = info.phone
        this.userInfo.score = info.score
        this.userInfo.login_time = info.login_time
        this.userInfo.register_time = info.register_time
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
  .pagination {
    position: fixed;
    bottom: 30px;
    left: 25%;
  }
</style>