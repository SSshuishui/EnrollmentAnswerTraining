<template>
  <div class="ques-view">
    <div class="view" v-if="quesType === 'single'">
      <span>(单选题)</span>
      <span>{{quesStem}}</span>
      <div class="options" v-for="(item,index) in quesItem">
        <el-button icon="el-icon-check" circle/>
        {{index}}-{{item}}
      </div>
    </div>

    <div class="view" v-if="quesType === 'multiple'">
      <span>(多选题)</span>
      <span>{{quesStem}}</span>
      <div v-for="(item,index) in quesItem">
        <el-button icon="el-icon-check" circle @click="optChoose(index)"/>
        {{index}}-{{item}}
      </div>
    </div>

    <div class="view" v-if="quesType === 'suggest'">
      <span>(建议题)</span>
      <span>如果您有更好的建议:</span>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="请告诉我们" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: "QuesView",
    data() {
      return {
        ruleForm: {
          desc: ''
        },
        rules: {
          desc: [
            { type: 'string', required: true, message: '在这里输入您的建议或意见', trigger: 'blur' }
          ]
        },
      };
    },
    props: {
      quesStem: {
        type: String,
        default: ''
      },
      quesItem: {
        type: Array,
        default() {
          return []
        }
      },
      quesType: {
        type: String,
        default: ''
      }
    },

    methods: {
      // 传递选择的选项
      optChoose(index) {
        this.$emit('optChoose', index)
      }
    }
  }
</script>

<style scoped>
  .ques-view {
    width: 70%;
    height: 90%;
  }

  .view {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .view span{
    font-size: 21px;
  }
  .view div{
    font-size: 20px;
    padding: 5px;
    margin-top: 14px;
  }
</style>