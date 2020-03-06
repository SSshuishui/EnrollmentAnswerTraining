<template>
  <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
    <el-menu-item index="1" route="/home">首页</el-menu-item>
    <el-submenu index="2">
      <template slot="title">答题</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3">个人中心</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "MainNavBar",
    methods: {

    }
  }
</script>

<style scoped>

</style>
