<template>
  <div class="main-body">
    <div class="register">
      <div class="header">
        <h2>招生培训系统账号注册</h2>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-position="left" label-width="100px" class="demo-ruleForm">
        <el-form-item label="手机号码" prop="phone">
          <el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="vCode">
          <el-input v-model.number="ruleForm.vCode" placehoder="请输入验证码"></el-input>
          <validate-code @getCode="getCode"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-link style="margin-left: 6px" type="success" href="/login">已有帐号？返回登录页</el-link>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { FormValidate } from 'common/mixin'
  import { mapActions } from 'vuex'

  export default {
    name: "Register",
    mixins: [FormValidate],
    data() {
      // 再次确认密码
      let validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        user: {},
        ruleForm: {
          checkPass: '',
        },
        rules: {
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      ...mapActions(['userRegister']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.userRegister(this.user).then(res => {
              this.$toast.show(res)
            })
            setTimeout(() => {
              this.$router.replace('/login')
            }, 1500)
          } else {
            this.userRegister().then(() => {
              this.$toast.show('注册失败！请稍后再试')
            })
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .register {
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
    margin-left: 36px;
  }
</style>