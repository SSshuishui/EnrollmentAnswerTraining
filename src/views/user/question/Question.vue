<template>
  <el-container>
    <el-header>
      <!--    提交和退出    -->
      <el-button-group class="header">
        <el-button type="submit">提交</el-button>
        <el-button class="quit">退出</el-button>
      </el-button-group>
    </el-header>

      <el-main style="height: 540px; margin-top: 3px">
    <!--   选项部分     -->
        <ques-view :ques-item="getQuesItem()" :ques-stem="getQuesStem()" :ques-type="getQuesType()" @optChoose="optChoose"></ques-view>


    <!--   分页     -->
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentPageChange"
                :current-page="pageNo"
                :page-size="1"
                :total="50"
                align="center"
                >
        </el-pagination>


      </el-main>

    </el-container>
</template>

<script>
  import QuesView from "./childComp/QuesView";

  export default {
    name: "Question",
    data() {
      return {
        pageNo: 1,
        quesData: [
          {
            type: "single",
            stem: "第一题的题干部分",
            options: ["第一题的选项A","第一题的选项B","第一题的选项C","第一题的选项D"]
          },
          {
            type: "single",
            stem: "第二题的题干部分",
            options: ["第二题的选项A","第二题的选项B"]
          },
          {
            type: "single",
            stem: "第三题的题干部分",
            options: ["第三题的选项A","第三题的选项B","第三题的选项C","第三题的选项D"]
          },{
            type: "multiple",
            stem: "第四题的题干部分",
            options: ["第四题的选项A","第四题的选项B","第四题的选项C","第四题的选项D","第四题的选项E"]
          },{
            type: "multiple",
            stem: "第五题的题干部分",
            options: ["第五题的选项A","第五题的选项B","第五题的选项C","第五题的选项D"]
          },{
            type: "multiple",
            stem: "第六题的题干部分",
            options: ["第六题的选项A","第六题的选项B","第六题的选项C","第六题的选项D","第六题的选项E"]
          },{
            type: "suggest",
            suggestions: ''
          },
        ],
        quesStem: '',
        quesItem: [],
        quesType: '',
        chooseOptions: []
      }
    },
    components: {
      QuesView
    },
    methods: {
      // 分页部分函数
      handleCurrentPageChange(selectedPageNo) {
        this.pageNo = selectedPageNo
      },

      // 获取题干内容
      getQuesStem() {
        return this.quesData[this.pageNo-1].stem
      },

      // 获取选项内容
      getQuesItem() {
        return this.quesData[this.pageNo-1].options
      },

      // 获取选项类型
      getQuesType() {
        return this.quesData[this.pageNo-1].type
      },

      // 存储所选的选项
      optChoose(index) {
        this.chooseOptions[index].push(index)
      }
    }
  }
</script>

<style scoped>
  .header{
    margin-top: 10px;
  }
</style>