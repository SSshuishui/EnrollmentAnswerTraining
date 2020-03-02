<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">用户管理</el-menu-item>
    <el-submenu index="2">
      <template slot="title">题目管理</template>
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
    <el-menu-item index="3">系统信息</el-menu-item>
    <el-menu-item index="4" class="right">
      <i class="el-icon-switch-button"></i>
      <span slot="title">
          退出登录
<!--          <router-link to="/login"></router-link>-->
        </span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  export default {
    name: "ManagerNavMenu",
    data() {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect(key, keyPath) {

      }
    }
  }
</script>

<style scoped>
  .nav-menu {
    margin-top: 3%;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>