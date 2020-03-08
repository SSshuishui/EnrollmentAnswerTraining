<template>
  <div>
    <el-form>
      <el-input type="text" :value="quesData.stem"></el-input>
      <el-radio-group>
        <div v-if="quesData.type === 'single'" v-for="option in quesData.options">
          <label>
            <el-input type="radio text" :value="option"/>
          </label>
        </div>
      </el-radio-group>

      <div v-if="quesData.type === 'multiple'">
        <el-checkbox-group>
          <el-checkbox-button style="display: block" v-for="city in quesData.options" :label="city" :key="city">{{city}}</el-checkbox-button>
        </el-checkbox-group>
      </div>
    </el-form>


  </div>
</template>

<script>
  import QuesItem from "./QuesItem";

  export default {
    name: "QuesItemView",
    data () {
      return {

      };
    },
    props: {
      quesData: {
        type: Object,
        default() {
          return []
        }
      },
    },
    components: {
      QuesItem
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>