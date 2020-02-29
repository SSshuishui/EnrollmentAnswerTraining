<template>
  <div id="selectComp">
    <p>请选择省份</p>
    <el-select v-model="value" filterable placeholder="请选择">
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
    </el-select>
    <el-button type="primary">确定</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '北京市'
        }, {
          value: '选项2',
          label: '上海市'
        }, {
          value: '选项3',
          label: '天津市'
        }, {
          value: '选项4',
          label: '湖北省'
        }, {
          value: '选项5',
          label: '湖南省'
        }],
        value: ''
      }
    }
  }
</script>

<style scoped>
  #selectComp {
    margin-top: 20%;
    text-align: center;
  }
</style>