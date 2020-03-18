<template>
  <div>
    <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%"
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
              align="right">
        <template slot="header" slot-scope="scope">
          <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">修改
          </el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "UserInfo",
    data() {
      return {
        tableData: [{
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
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>

<style scoped>

</style>