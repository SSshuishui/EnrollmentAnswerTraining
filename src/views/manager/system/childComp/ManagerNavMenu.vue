<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="quesCondition" @click="userScoreClick">分数情况</el-menu-item>
    <el-menu-item index="userInfo" @click="userInfoClick">用户信息</el-menu-item>
    <el-menu-item index="sysCondition" @click="systemClick">系统信息</el-menu-item>
    <el-menu-item index="quesBank" @click="quesBankClick">题库操作</el-menu-item>
    <el-menu-item>
      <i class="el-icon-switch-button"></i>
      <span slot="title">
          退出登录
        </span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  export default {
    name: "ManagerNavMenu",
    data() {
      return {
        activeIndex: 'quesCondition',
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
      },
      quesBankClick() {
        this.$emit('quesBankShowChange', this.isShower)
      }
    }
  }
</script>

<style scoped>

</style>