<template>
  <el-container>
    <el-header></el-header>
    <el-container>
      <el-main>
        <ques-stem/>
        <ques-item-view :itemdata="itemdata"></ques-item-view>
        <el-button-group>
          <el-button type="submit">提交</el-button>
          <el-button class="quit">退出</el-button>
        </el-button-group>
      </el-main>
      <el-aside></el-aside>
    </el-container>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
  import QuesStem from "./childComp/QuesStem";
  import QuesItemView from "./childComp/QuesItemView";

  export default {
    name: "Question",
    data() {
      return {
        itemdata: ['A.这是A选项', 'B.这是B选项', 'C.这是C选项', 'D.这是D选项']
      }
    },
    components: {
      QuesItemView,
      QuesStem
    },
    methods: {
      getQuesItem() {
        this.itemdata = ['A.这是A选项', 'B.这是B选项', 'C.这是C选项', 'D.这是D选项']
      }
    }
  }
</script>

<style scoped>

</style>