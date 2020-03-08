<template>
  <div>
    <el-table
            :data="tableData"
            height="250"
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
              label="分数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "AnswerRecord",
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          score: '30'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          score: '40'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          score: '50'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          score: '60'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          score: '70'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          score: '80'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          score: '90'
        }]
      }
    }
  }
</script>

<style scoped>

</style>