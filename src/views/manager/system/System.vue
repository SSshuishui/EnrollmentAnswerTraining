<template>
  <el-container>
    <el-header>
      <manager-nav-menu/>
    </el-header>
    <el-main>
   <!--   其他相关组件   -->
    </el-main>
  </el-container>
</template>

<script>
  import ManagerNavMenu from "./childComp/ManagerNavMenu";
  export default {
    name: "System",
    components: {
      ManagerNavMenu
    }
  }
</script>

<style scoped>

</style>