<template>
  <div class="profileWrap">
    <el-container>
      <el-header><main-nav-bar/></el-header>

      <el-container style="height: 540px; margin-top: 3px">
        <!--侧边导航栏-->
        <el-aside width="220px">
          <nav-menu @infoShowChange="infoShowChange"
                    @recordShowChange="recordShowChange"
                    @wrongShowChange="wrongShowChange"/>
        </el-aside>
        <!--中间部分  -->
        <el-container>
          <el-main>
            <!--放其他组件-->
            <information v-show="infoShow"/>
            <answer-record v-show="recordShow"/>
            <wrong-ques v-show="wrongShow"/>
          </el-main>
        </el-container>
      </el-container>

      <el-footer style="margin-bottom: 3px"><foot-bar/></el-footer>
    </el-container>
  </div>
</template>

<script>
  // 公共组件
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  // 子组件
  import NavMenu from "./childComp/NavMenu";
  import Information from "./childComp/Information";
  import AnswerRecord from "./childComp/AnswerRecord";
  import WrongQues from "./childComp/WrongQues";

  export default {
    name: "Profile",
    data() {
      return {
        infoShow: false,
        recordShow: false,
        wrongShow: false
      }
    },
    components: {
      Information,
      MainNavBar,
      FootBar,
      NavMenu,
      AnswerRecord,
      WrongQues
    },

    methods: {
      infoShowChange(flag) {
        this.infoShow = flag;
        this.recordShow = false;
        this.wrongShow = false
      },
      recordShowChange(flag) {
        this.recordShow = flag;
        this.infoShow = false;
        this.wrongShow = false
      },
      wrongShowChange(flag) {
        this.wrongShow = flag;
        this.recordShow = false;
        this.infoShow = false
      }
    }
  }
</script>

<style scoped>
  .profileWrap {
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .el-header {
    padding: 0;
  }
</style>