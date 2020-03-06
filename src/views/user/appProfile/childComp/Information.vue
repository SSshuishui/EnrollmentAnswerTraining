<template>
  <div class="info">
    <table>
      <td></td>
    </table>

    <el-button type="text" @click="operationVisible = true">点击打开</el-button>
    <el-dialog
            title="提示"
            :visible.sync="operationVisible"
            width="30%"
            :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="operationVisible = false">取 消</el-button>
    <el-button type="primary" @click="operationVisible = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Information",
    data() {
      return {
        operationVisible: false
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style scoped>

</style>