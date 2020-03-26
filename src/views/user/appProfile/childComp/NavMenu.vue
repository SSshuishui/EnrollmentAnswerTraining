<template>
  <div class="nav-menu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse" :router="true">
      <el-menu-item @click="informationClick">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item @click="recordClick">
        <i class="el-icon-time"></i>
        <span slot="title">答题记录</span>
      </el-menu-item>
      <el-menu-item @click="wrongClick">
        <i class="el-icon-chat-line-round"></i>
        <span slot="title">我的错题</span>
      </el-menu-item>

      <el-menu-item index="/login">
        <i class="el-icon-switch-button"></i>
        <span slot="title">
          退出登录
        </span>
      </el-menu-item>


    </el-menu>

  </div>
</template>

<script>
  export default {
    name: "navMenu",
    data() {
      return {
        isCollapse: false,
        isShower: true
      };
    },
    methods: {
      informationClick() {
        this.$emit("infoShowChange", this.isShower)
      },
      recordClick() {
        this.$emit("recordShowChange", this.isShower)
      },
      wrongClick() {
        this.$emit("wrongShowChange", this.isShower)
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