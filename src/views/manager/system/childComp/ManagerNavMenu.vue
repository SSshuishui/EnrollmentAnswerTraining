<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1" @click="userScoreClick">分数情况</el-menu-item>
    <el-menu-item index="2" @click="userInfoClick">用户信息</el-menu-item>
    <el-menu-item index="3" @click="systemClick">系统信息</el-menu-item>
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
        activeIndex: '1',
        isShower: true
      }
    },
    methods: {
      userScoreClick() {
        this.$emit("userScoreShowChange", this.isShower)
      },
      userInfoClick() {
        this.$emit("userInfoShowChange", this.isShower)
      },
      systemClick() {
        this.$emit("sysConditionShowChange", this.isShower)
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