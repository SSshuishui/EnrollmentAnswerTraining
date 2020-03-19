<template>
  <el-table
          :data="tableData"
          border
          style="width: 100%"
          :default-sort = "{prop: 'score', order: 'descending'}">
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
</template>

<script>
  export default {
    name: "UserQuesCondition",
    data() {
      return {
        tableData: [{
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
        }]
      };
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>