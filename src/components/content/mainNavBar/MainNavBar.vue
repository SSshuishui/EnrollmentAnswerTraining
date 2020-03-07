<template>
  <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :router="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
    <el-menu-item index="/home">首页</el-menu-item>
    <el-menu-item index="/answer">答题</el-menu-item>
    <el-menu-item index="/profile">个人中心</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "MainNavBar",
    methods: {}
  }
</script>

<style scoped>

</style>
