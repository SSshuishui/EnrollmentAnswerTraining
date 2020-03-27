<template>
  <div class="modify-user">
    <h2 class="header">信息修改</h2>
    <el-form :model="userForm" status-icon :rules="rules" ref="userForm" label-position="left" label-width="100px"
             class="demo-ruleForm">
      <el-form-item label="工号" prop="work_id">
        <el-input type="text" v-model="userForm.work_id" autocomplete="off" :placeholder="this.userInfo.work_id"/>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="userForm.name" autocomplete="off" :placeholder="this.userInfo.name"/>
      </el-form-item>
      <el-form-item label="所在学院" prop="school">
        <el-input type="text" v-model="userForm.school" autocomplete="off" :placeholder="this.userInfo.school"/>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input type="text" v-model="userForm.phone" autocomplete="off" :placeholder="this.userInfo.phone"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('userForm')">提交</el-button>
        <el-button @click="resetForm('userForm')">重置</el-button>
        <el-button type="danger" @click="cancelClick">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "ModifyUser",
    props: {
      userInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      // 检查work_id
      let checkWork_Id = (rule, value, callback) => {
        setTimeout(() => {
          if (!this.idStyle.test(value)) {
            callback(new Error('工号格式不合法！'));
          } else {
            callback()
          }
        }, 1000);
      };

      // 检查姓名
      let checkName = (rule, value, callback) => {
        setTimeout(() => {
          if (!this.nameStyle.test(value)) {
            callback(new Error('姓名格式不合法！'));
          } else {
            callback()
          }
        }, 1000);
      };

      // 检查手机号码
      let checkPhone = (rule, value, callback) => {
        setTimeout(() => {
          if (!this.phoneStyle.test(value)) {
            callback(new Error('手机号码格式不合法！'));
          } else {
            callback()
          }
        }, 1000);
      };
      return {
        idStyle: /^2[0]\d{8}$/,
        nameStyle: /^[\u4E00-\u9FA5]{2,4}$/,
        phoneStyle: /^1[3456789]\d{9}$/,

        userForm: {
          work_id: '',
          name: '',
          school: '',
          phone: ''
        },
        rules: {
          work_id: [
            {validator: checkWork_Id, trigger: 'blur'}
          ],
          name: [
            {validator: checkName, trigger: 'blur'}
          ],
          school: [
            {trigger: 'blur'}
          ],
          phone: [
            {validator: checkPhone, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          // 如果
          if (valid) {
            // 封装一个user对象
            const user = {}
            // 初始化默认值为传过来的对象
            Object.assign(user, this.userInfo)

            user.work_id = this.userForm.work_id !== '' ? this.userInfo.work_id : user.work_id;
            user.name = this.userForm.name !== '' ? this.userForm.name : user.name;
            user.school = this.userForm.school !== '' ? this.userForm.school : user.school;
            user.phone = this.userForm.phone !== '' ? this.userForm.phone : user.phone;

            // console.log(user);

          } else {
            this.$alert('修改失败，请稍后再试！')
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      cancelClick() {
        this.$emit('cancelClick')
      },

    }
  }
</script>

<style scoped>
  .modify-user {
    position: fixed;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 40px 26px 10px 20px;

    z-index: 999;

    color: #1A1A1A;
    background-color: #F2F6FC;
  }

  .header {
    margin-bottom: 20px;
    text-align: center;
  }
</style>