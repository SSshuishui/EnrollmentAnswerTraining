<template>
  <div class="answerWrap">
    <el-container>
      <el-header><main-nav-bar/></el-header>

      <el-main style="height: 540px">
        <select-comp/>
      </el-main>

      <el-footer>
        <foot-bar/>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  import SelectComp from "components/content/select/SelectComp";

  export default {
    name: "Answer",
    components: {
      SelectComp,
      MainNavBar,
      FootBar
    }
  }
</script>

<style scoped>
  .answerWrap {
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>