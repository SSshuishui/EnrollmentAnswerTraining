<template>
  <div class="loginBox">
    <div class="header">
      <h4>答题培训系统账号注册</h4>
    </div>

    <div class="main">
      <div class="inpBox">
        <input type="text" placeholder="手机号码" v-model="phone" />
      </div>
      <div class="inpBox">
        <input type="text" placeholder="验证码" class="short" v-model="code" />
        <img src="">
      </div>
      <div class="inpBox">
        <input type="password" placeholder="登录密码" v-model="password" />
      </div>
      <button class="submit" @click="registerHandle">立即注册</button>
      <div class="changeBtn">
        <router-link to="/login">账号已存在，去登录！</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Register",
    data() {
      return {

      }
    },
    methods: {
      // 实现注册
      registerHandle() {

      }
    }
  }
</script>

<style scoped>

</style>