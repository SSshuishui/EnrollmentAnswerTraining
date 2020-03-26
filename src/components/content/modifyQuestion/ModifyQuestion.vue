<template>
  <div>
    <h2 class="header">信息修改</h2>
    <el-form :model="quesForm" status-icon :rules="rules" ref="quesForm" label-position="left" label-width="100px" class="demo-ruleForm">
      <el-form-item label="工号" prop="id">
        <el-input type="text" v-model="quesForm.id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input type="text" v-model="quesForm.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="所在学院" prop="school">
        <el-input type="text" v-model="quesForm.school" autocomplete="off" />
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input type="text" v-model="quesForm.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('quesForm')">提交</el-button>
        <el-button @click="resetForm('quesForm')">重置</el-button>
        <el-button type="danger" @click="cancelClick">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {Question} from "network/question";

  export default {
    name: "ModifyQuestion",
    props: {
      quesInfo: {
        type: Object,
        default: {}
      }
    },
    data() {
      return{
        quesForm: {

        },
        rules: {

        }
      }
    },
    methods:{
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      cancelClick(){
        this.$emit('cancelClick')
      },
    }
  }
</script>

<style scoped>

</style>