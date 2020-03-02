<template>
  <el-container>
    <el-header><main-nav-bar/></el-header>
    <el-container>
    <!--侧边导航栏-->
      <el-aside width="220px">
        <nav-menu @infoShowChange="showChange($event)"/>
      </el-aside>
    <!--中间部分  -->
      <el-container>
        <el-main>
            <!--放其他组件-->
          <information v-show="infoShow"/>
        </el-main>
      </el-container>
    </el-container>
    <foot-bar/>
  </el-container>
</template>

<script>
  //公共组件
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  // 子组件
  import NavMenu from "./childComp/NavMenu";
  import Information from "./childComp/Information";

  export default {
    name: "Profile",
    data() {
      return {
        infoShow: false
      }
    },
    components: {
      Information,
      MainNavBar,
      FootBar,
      NavMenu
    },

    methods: {
      showChange(flag) {
        this.infoShow = flag
      }
    }
  }
</script>

<style scoped>

</style>