<template>
  <div class="homeWrap">
    <el-container>
      <el-header><main-nav-bar/></el-header>

      <el-main style="height: 540px; margin-top: 3px">
        <el-carousel :interval="5000" arrow="always" height="530px">
          <el-carousel-item v-for="item in imageItem">
            <el-image :src="item"></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-main>

      <el-footer style="margin-bottom: 5px"><foot-bar/></el-footer>
    </el-container>
  </div>
</template>

<script>
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  export default {
    name: "Home",
    data() {
      return {
        imageItem: [
          'https://www.nwpu.edu.cn/images/fyls.png',
          'https://www.nwpu.edu.cn/images/zjky.png',
          'https://www.nwpu.edu.cn/images/ctdl.png'
        ]
      }
    },
    components: {
      MainNavBar,
      FootBar
    }
  }
</script>

<style scoped>
  .homeWrap {
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
  .el-main{
    padding: 0;
  }
</style>