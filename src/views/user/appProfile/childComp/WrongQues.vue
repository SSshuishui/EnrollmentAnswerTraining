<template>
  <div class="wrong-ques">
    <el-table
            :data="allUserData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()) || data.school || data.id)"
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
                  size="medium"
                  @click="showDetail(scope.row)">查看详情
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
            :total="totalCount"
            align="center">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "WrongQues",
    data() {
      return {
        currentPage: 1,
        totalCount: 10,
        tableData: [],
        pageSize: 5,
        allData: [
          {
            id: '12987122',
            name: '张三',
            score: '234',
            quesTime: '2020-05-01'
          }, {
            id: '12987123',
            name: '李四',
            score: '165',
            quesTime: '2020-05-02'
          }, {
            id: '12987124',
            name: '王五',
            score: '324',
            quesTime: '2020-05-03'
          }, {
            id: '12987125',
            name: '赵六',
            score: '621',
            quesTime: '2020-05-04'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }, {
            id: '12987126',
            name: '杨虎',
            score: '539',
            quesTime: '2020-05-05'
          }]
      };
    },
    mounted() {
      this.tableData = this.allData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      this.totalCount = this.allData.length
    },
    methods: {
      // 页面展示条目数量改变
      handleSizeChange(val) {
        this.pageSize = val
        this.tableData = this.allData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allData.length
      },

      // 当前页面展示信息改变
      handleCurrentPageChange(val) {
        this.currentPage = val
        this.tableData = this.allData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allData.length
      },

      // 查看题目详情
      showDetail() {

      }
    }
  }
</script>

<style scoped>
  .pagination{
    position: fixed;
    bottom: 30px;
    left: 25%;
  }
</style>