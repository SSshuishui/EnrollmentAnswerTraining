<template>
  <div class="nav-menu">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="1" @click="informationClick">
        <i class="el-icon-user-solid"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="2" @click="recordClick">
        <i class="el-icon-time"></i>
        <span slot="title">答题记录</span>
      </el-menu-item>
      <el-menu-item index="3" @click="wrongClick">
        <i class="el-icon-chat-line-round"></i>
        <span slot="title">我的错题</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>

      <el-menu-item>
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
        isCollapse: true,
        isShower: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
      },
      handleClose(key, keyPath) {
      },
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