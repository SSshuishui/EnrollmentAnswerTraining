<template>
  <div>
    <el-checkbox-group>
      <el-checkbox-button style="display: block" v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>

<script>
  export default {
    name: "MultipleQues",
    props: {
      multipleOptions: []
    },
    data () {
      return {
        cities: this.multipleOptions
      };
    },
  }
</script>

<style scoped>

</style>