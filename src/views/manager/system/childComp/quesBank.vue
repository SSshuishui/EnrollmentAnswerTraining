<template>
  <div class="ques-bank">
    <el-table
            :data="tableData"
            style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="table-expand">
            <el-form-item  label="ID">
              <span>{{props.row.id}}</span>
            </el-form-item >
            <el-form-item  label="类型:">
              <span>{{props.row.type}}</span>
            </el-form-item>
            <el-form-item label="范围:">
              <span>{{props.row.scope}}</span>
            </el-form-item>
            <el-form-item label="题干信息:">
              <span>{{props.row.title}}</span>
            </el-form-item>
            <el-form-item label="选项A:">
              <span>{{props.row.answerA}}</span>
            </el-form-item>
            <el-form-item label="选项B:">
              <span>{{props.row.answerB}}</span>
            </el-form-item>
            <el-form-item label="选项C:">
              <span>{{props.row.answerC}}</span>
            </el-form-item>
            <el-form-item label="选项D:">
              <span>{{props.row.answerD}}</span>
            </el-form-item>
            <el-form-item label="正确答案:">
              <span>{{props.row.answer}}</span>
            </el-form-item>
            <el-form-item label="答题人数:">
              <span>{{props.row.number}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column
              label="ID"
              prop="id">
      </el-table-column>
      <el-table-column
              label="范围"
              prop="scope">
      </el-table-column>
      <el-table-column
              label="题干信息"
              prop="title">
      </el-table-column>
      <el-table-column
              label="正确答案"
              prop="answer">
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

<!--  修改题目的页面  -->
    <modify-question v-show="isBoxShow" :ques-info="questionDetail" @cancelClick="cancelClick"/>
  </div>
</template>

<script>
  import ModifyQuestion from "components/content/modifyQuestion/ModifyQuestion";
  export default {
    name: "quesBank",
    components: {
      ModifyQuestion
    },
    data() {
      return {
        currentPage: 1,
        totalCount: 10,
        tableData: [],
        pageSize: 5,
        allQuesData: [
          {
            id: 20200001,
            type: '单选题',
            scope: '北京市',
            title: '第1题的题干信息',
            answerA: '第一题的A',
            answerB: '第一题的B',
            answerC: '第一题的C',
            answerD: '第一题的D',
            answer: 'A',
            number: '80%'
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
        search: '',
        isBoxShow: false,
        questionDetail: {
          id: '',
          type: '',
          scope: '',
          title: '',
          answer: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: ''
        }
      }
    },
    mounted() {
      this.tableData = this.allQuesData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
      this.totalCount = this.allQuesData.length
    },
    methods: {
      // 页面展示条目数量改变
      handleSizeChange(val) {
        this.pageSize = val
        this.tableData = this.allQuesData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allQuesData.length
      },

      // 当前页面展示信息改变
      handleCurrentPageChange(val) {
        this.currentPage = val
        this.tableData = this.allQuesData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
        this.totalCount = this.allQuesData.length
      },

      // 修改题目
      modifyQuestion(quesInfo) {
        this.isBoxShow = true

        // 传递一个题目的信息到子组件
        this.questionDetail.id = quesInfo.id
        this.questionDetail.type = quesInfo.type
        this.questionDetail.scope = quesInfo.scope
        this.questionDetail.answer = quesInfo.answer
        this.questionDetail.title = quesInfo.title
        this.questionDetail.answerA = quesInfo.answerA
        this.questionDetail.answerB = quesInfo.answerB
        this.questionDetail.answerC = quesInfo.answerC
        this.questionDetail.answerD = quesInfo.answerD
      },

      // 取消修改页面显示
      cancelClick() {
        this.isBoxShow = false
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
  .pagination{
    position: fixed;
    bottom: 30px;
    left: 25%;
  }
  .table-expand {
    font-size: 0;
  }
  .table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>