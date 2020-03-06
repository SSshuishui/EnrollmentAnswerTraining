<template>
  <el-container>
    <el-header>
      <manager-nav-menu @userScoreShowChange="scoreShowChange($event)"/>
    </el-header>
    <el-main>
   <!--   其他相关组件   -->
      <UserQuesCondition v-show="userScoreShow"/>
    </el-main>
  </el-container>
</template>

<script>
  import UserQuesCondition from "./childComp/UserQuesCondition";
  import ManagerNavMenu from "./childComp/ManagerNavMenu";
  export default {
    name: "System",
    data() {
      return {
        userScoreShow: false
      }
    },
    components: {
      ManagerNavMenu,
      UserQuesCondition
    },
    methods: {
      scoreShowChange(flag) {
        this.userScoreShow = flag
      }
    }
  }
</script>

<style scoped>

</style>