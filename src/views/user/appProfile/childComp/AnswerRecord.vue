<template>
  <div>
    <el-table
            :data="tableData"
            height="500"
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
      <el-table-column
              prop="accuracy"
              label="正确率">
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
    }
  }
</script>

<style scoped>

</style>