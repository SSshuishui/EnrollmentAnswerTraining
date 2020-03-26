<template>
  <div>
    <el-table
            :data="tableData"
            height="480"
            border
            style="width: 100%">
      <el-table-column
              prop="date"
              label="日期"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="姓名"
              width="180">
      </el-table-column>
      <el-table-column
              prop="score"
              sortable
              label="分数">
      </el-table-column>
      <el-table-column
              prop="accuracy"
              sortable
              label="正确率">
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
    name: "AnswerRecord",
    data() {
      return {
        currentPage: 1,
        totalCount: 10,
        tableData: [],
        pageSize: 5,
        allRecordData: [{
          date: '2020-05-02',
          name: '张三',
          score: '30',
          accuracy: '30%'
        }, {
          date: '2020-05-03',
          name: '张三',
          score: '40',
          accuracy: '40%'
        }, {
          date: '2020-05-04',
          name: '张三',
          score: '50',
          accuracy: '50%'
        }, {
          date: '2020-05-01',
          name: '张三',
          score: '60',
          accuracy: '60%'
        }, {
          date: '2020-05-08',
          name: '张三',
          score: '70',
          accuracy: '70%'
        }, {
          date: '2020-05-06',
          name: '张三',
          score: '80',
          accuracy: '80%'
        }, {
          date: '2020-05-07',
          name: '张三',
          score: '90',
          accuracy: '90%'
        }]
      }
    },
    mounted() {
      this.tableData = this.allRecordData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      this.totalCount = this.allRecordData.length
    },
    methods: {
      // 页面展示条目数量改变
      handleSizeChange(val) {
        this.pageSize = val
        this.tableData = this.allRecordData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allRecordData.length
      },

      // 当前页面展示信息改变
      handleCurrentPageChange(val) {
        this.currentPage = val
        this.tableData = this.allRecordData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allRecordData.length
      }
    }
  }
</script>

<style scoped>
  .pagination{
    position: fixed;
    bottom: 70px;
    left: 25%;
  }
</style>