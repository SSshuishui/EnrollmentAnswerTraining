<template>
  <div class="modify-question">
    <h2 class="header">题目信息修改</h2>
    <el-form :model="quesForm" status-icon :rules="rules" ref="quesForm" label-position="left" label-width="60px"
             class="modify-ques-form">
      <el-form-item>
        <el-row>
          <el-col :span="8">
            <el-form-item label="类型" prop="type">
              <el-input type="text" v-model="quesForm.type" autocomplete="off" :placeholder="this.quesInfo.type"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="范围" prop="scope">
              <el-input type="text" v-model="quesForm.scope" autocomplete="off" :placeholder="this.quesInfo.scope"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="答案" prop="answer">
              <el-input type="text" v-model="quesForm.answer" autocomplete="off" :placeholder="this.quesInfo.answer"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-col :span="24">
          <el-form-item label="题干" prop="title">
            <el-input type="text" v-model="quesForm.title" autocomplete="off" :placeholder="this.quesInfo.title"/>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item label="选项A" prop="answerA">
              <el-input type="text" v-model="quesForm.answerA" autocomplete="off" :placeholder="this.quesInfo.answerA"/>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="选项B" prop="answerB">
              <el-input type="text" v-model="quesForm.answerB" autocomplete="off" :placeholder="this.quesInfo.answerB"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-col :span="12">
          <el-form-item label="选项C" prop="answerC">
            <el-input type="text" v-model="quesForm.answerC" autocomplete="off" :placeholder="this.quesInfo.answerC"/>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="选项D" prop="answerC">
            <el-input type="text" v-model="quesForm.answerD" autocomplete="off" :placeholder="this.quesInfo.answerD"/>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item align="center">
        <el-button type="primary" @click="submitForm('quesForm')">提交</el-button>
        <el-button @click="resetForm('quesForm')">重置</el-button>
        <el-button type="danger" @click="cancelClick">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: "ModifyQuestion",
    props: {
      quesInfo: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        quesForm: {
          type: '',
          scope: '',
          title: '',
          answerA: '',
          answerB: '',
          answerC: '',
          answerD: '',
          answer: '',
        },
        rules: {
          type: [
            {message: '请输入题目类型', trigger: 'blur'}
          ],
          scope: [
            {message: '请选择范围', trigger: 'change'}
          ],
          title: [
            {message: '请输入题干', trigger: 'blur'}
          ],
          answer: [
            {message: '请输入正确答案', trigger: 'blur'}
          ],
          answerA: [
            {message: '请输入选项A', trigger: 'blur'}
          ],
          answerB: [
            {message: '请输入选项B', trigger: 'blur'}
          ],
          answerC: [
            {message: '请输入选项C', trigger: 'blur'}
          ],
          answerD: [
            {message: '请输入选项D', trigger: 'blur'}
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 创建一个题目的对象
            let newQues = {}
            // 默认将传过来的值赋给这个对象
            Object.assign(newQues, this.quesInfo)

            newQues.type = this.quesForm.type !== '' ? this.quesForm.type : newQues.type;
            newQues.scope = this.quesForm.scope !== '' ? this.quesForm.scope : newQues.scope;
            newQues.title = this.quesForm.title !== '' ? this.quesForm.title : newQues.title;
            newQues.answer = this.quesForm.answer !== '' ? this.quesForm.answer : newQues.answer;
            newQues.answerA = this.quesForm.answerA !== '' ? this.quesForm.answerA : newQues.answerA;
            newQues.answerB = this.quesForm.answerB !== '' ? this.quesForm.answerB : newQues.answerB;
            newQues.answerC = this.quesForm.answerC !== '' ? this.quesForm.answerC : newQues.answerC;
            newQues.answerD = this.quesForm.answerD !== '' ? this.quesForm.answerD : newQues.answerD;

            // console.log(newQues);

          } else {
            console.log('error submit!!');
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
  .modify-question {
    position: fixed;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 50px 5px 0;

    z-index: 999;

    color: #1A1A1A;
    background-color: #F2F6FC;
  }

  .header {
    margin-top: 10px;
    margin-bottom: 15px;
    margin-left: 230px;
  }
</style>