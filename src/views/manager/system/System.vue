<template>
  <div class="systemWrap">
    <el-container>
      <el-header>
        <manager-nav-menu @userScoreShowChange="scoreShowChange"
                          @userInfoShowChange="infoShowChange"
                          @sysConditionShowChange="systemShowChange"
                          @quesBankShowChange="quesBankShowChange"/>
      </el-header>

      <el-main style="height: 540px">
        <!--   其他相关组件   -->
        <UserQuesCondition v-show="userScoreShow"/>
        <user-info v-show="userInfoShow" :user-info="getUserInfo"/>
        <system-condition v-show="sysConditionShow"/>
        <ques-bank v-show="quesBankShow"/>

      </el-main>
    </el-container>
  </div>
</template>

<script>
  import ManagerNavMenu from "./childComp/ManagerNavMenu";

  import UserQuesCondition from "./childComp/UserQuesCondition";
  import UserInfo from "./childComp/UserInfo";
  import SystemCondition from "./childComp/SystemCondition";
  import quesBank from "./childComp/quesBank";

  export default {
    name: "System",
    data() {
      return {
        userInfo: {},
        userScoreShow: true,
        userInfoShow: false,
        sysConditionShow: false,
        quesBankShow: false
      }
    },
    components: {
      ManagerNavMenu,
      UserQuesCondition,
      UserInfo,
      SystemCondition,
      quesBank
    },
    methods: {
      scoreShowChange(flag) {
        this.userScoreShow = flag;
        this.userInfoShow = false;
        this.sysConditionShow = false;
        this.quesBankShow = false
      },
      infoShowChange(flag) {
        this.userInfoShow = flag;
        this.userScoreShow = false;
        this.sysConditionShow = false;
        this.quesBankShow = false
      },
      systemShowChange(flag) {
        this.sysConditionShow = flag;
        this.userInfoShow = false;
        this.userScoreShow = false;
        this.quesBankShow = false
      },
      quesBankShowChange(flag) {
        this.quesBankShow = flag;
        this.sysConditionShow = false;
        this.userInfoShow = false;
        this.userScoreShow = false
      },
      getUserInfo() {

      }
    }
  }
</script>

<style scoped>
  .systemWrap {
    position: absolute;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>