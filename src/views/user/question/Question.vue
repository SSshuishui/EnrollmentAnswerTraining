<template>
  <el-container>
    <el-header></el-header>

      <el-main>
    <!--   选项部分     -->
        <ques-item-view :quesData="getQuestions()"></ques-item-view>


    <!--   分页     -->
        <el-pagination
                background
                layout="prev, pager, next"
                @current-change="handleCurrentPageChange"
                :current-page="pageNo"
                :page-size="1"
                :total="50"
                >
        </el-pagination>

    <!--    提交和退出    -->
        <el-button-group>
          <el-button type="submit">提交</el-button>
          <el-button class="quit">退出</el-button>
        </el-button-group>
      </el-main>

    </el-container>
</template>

<script>
  import QuesStem from "./childComp/QuesStem";
  import QuesItemView from "./childComp/QuesItemView";

  export default {
    name: "Question",
    data() {
      return {
        pageNo: 1,
        quesData: [
          {
            type: "single",
            stem: "第一题的题干部分",
            options: ["第一题的选项A","第一题的选项B","第一题的选项C","第一题的选项D",]
          },
          {
            type: "single",
            stem: "第二题的题干部分",
            options: ["第二题的选项A","第二题的选项B","第二题的选项C","第二题的选项D",]
          },
          {
            type: "single",
            stem: "第三题的题干部分",
            options: ["第三题的选项A","第三题的选项B","第三题的选项C","第三题的选项D",]
          },{
            type: "multiple",
            stem: "第四题的题干部分",
            options: ["第四题的选项A","第四题的选项B","第四题的选项C","第四题的选项D",]
          },{
            type: "multiple",
            stem: "第五题的题干部分",
            options: ["第五题的选项A","第五题的选项B","第五题的选项C","第五题的选项D",]
          },{
            type: "multiple",
            stem: "第六题的题干部分",
            options: ["第六题的选项A","第六题的选项B","第六题的选项C","第六题的选项D",]
          },
        ]
      }
    },
    components: {
      QuesItemView
    },
    methods: {
      //分页部分函数
      handleCurrentPageChange(selectedPageNo) {
        this.pageNo = selectedPageNo
      },

      //获取选项内容
      getQuestions() {
        return this.quesData[this.pageNo-1]
      },

    }
  }
</script>

<style scoped>

</style>