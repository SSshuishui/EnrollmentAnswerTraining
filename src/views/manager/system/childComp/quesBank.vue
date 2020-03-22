<template>
  <div class="quesBank">
    <el-table
            :data="tableData"
            style="width: 100%"
            border
            height="500px">
      <el-table-column
              label="id"
              prop="id">
      </el-table-column>
      <el-table-column
              label="题干信息"
              prop="stem">
      </el-table-column>
      <el-table-column
              label="上次修改时间"
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
                  @click="modifyQuestion(scope.row)">修改
          </el-button>
          <el-button
                  size="mini"
                  type="danger"
                  @click="deleteQuestion(scope.row.id)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "quesBank",
    data() {
      return {
        tableData: [
          {
            id: 20200001,
            stem: '第1题的题干信息'
          },
          {
            id: 20200002,
            stem: '第2题的题干信息'
          },
          {
            id: 20200003,
            stem: '第3题的题干信息'
          },
          {
            id: 20200004,
            stem: '第4题的题干信息'
          },
          {
            id: 20200005,
            stem: '第5题的题干信息'
          },
          {
            id: 20200006,
            stem: '第6题的题干信息'
          },
          {
            id: 20200007,
            stem: '第7题的题干信息'
          },
          {
            id: 20200008,
            stem: '第8题的题干信息'
          },
          {
            id: 20200009,
            stem: '第9题的题干信息'
          },
          {
            id: 20200010,
            stem: '第10题的题干信息'
          }
        ],
        search: ''
      }
    },
    methods: {
      // 修改题目
      modifyQuestion(quesInfo) {

      },

      // 删除题目
      deleteQuestion(quesID){
        this.$alert('确定要删除这道题吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(() => {
          this.deleteQuestionInfo(quesID).then(res => {
            this.$toast.show(res)
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>