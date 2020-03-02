<template>
  <el-container>
    <el-header><main-nav-bar/></el-header>

    <el-main>
      <el-carousel :interval="5000" arrow="always" height="420px">
        <el-carousel-item v-for="item in imageItem">
          <el-image :src="item"></el-image>
        </el-carousel-item>
      </el-carousel>
    </el-main>

    <foot-bar/>

  </el-container>
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>