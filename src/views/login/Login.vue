<template>
  <div class="login">
    <div class="header">
      <h2>招生培训系统账号登录</h2>
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left" label-width="100px" class="demo-ruleForm">
      <el-form-item label="手机号码" prop="phone">
        <el-input type="text" v-model="ruleForm.phone" autocomplete="off" placehoder="请输入手机号码"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placehoder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vCode">
        <el-input v-model.number="ruleForm.vCode" placehoder="请输入验证码"></el-input>
        <validate-code @getCode="getCode"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-link type="success" href="/register">没有账号？去注册</el-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { FormValidate } from 'common/mixin'
  import { mapActions } from 'vuex'

  export default {
    name: 'Login',
    mixins: [FormValidate],
    methods: {
      ...mapActions(['userLogin']),
      // 提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.userLogin().then(res => {
              this.$toast.show(res)
            })
            // 设置定时器进行路由跳转
            setTimeout(() => {
              this.$router.replace('/home')
            }, 2000)
          } else {
            this.userLogin().then(() => {
              this.$toast.show('登录失败，请稍后再试！')
            })
            return false;
          }
        });
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
  }

</script>

<style scoped>
  .login {
    width: 350px;
    height: 60%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .header{
    padding: 6px;
    margin-bottom: 16px;
    margin-left: 20px;
  }
</style>