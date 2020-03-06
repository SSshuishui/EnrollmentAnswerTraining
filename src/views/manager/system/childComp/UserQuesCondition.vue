<template>
  <el-table
          :data="tableData"
          border
          show-summary
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
  </el-table>
</template>

<script>
  export default {
    name: "UserQuesCondition",
    data() {
      return {
        tableData: [{
          id: '12987122',
          name: '王小虎',
          score: '234'
        }, {
          id: '12987123',
          name: '王小虎',
          score: '165'
        }, {
          id: '12987124',
          name: '王小虎',
          score: '324'
        }, {
          id: '12987125',
          name: '王小虎',
          score: '621'
        }, {
          id: '12987126',
          name: '王小虎',
          score: '539'
        }]
      };
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>