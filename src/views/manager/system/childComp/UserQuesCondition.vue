<template>
  <div class="user-condition">
    <el-table
            :data="tableData"
            border
            style="width: 100%"
            :default-sort="{prop: 'score', order: 'descending'}">
      <el-table-column
              prop="id"
              label="ID"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名">
      </el-table-column>
      <el-table-column
              prop="score"
              sortable
              label="得分">
      </el-table-column>
      <el-table-column
              prop="quesTime"
              label="答题时间">
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
    name: "UserQuesCondition",
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