<template>
  <div class="info">
    <div data-container="handlebars">
      <table class="account-table table " cellpadding="0" cellspacing="0">
        <tbody>
        <tr>
          <td class="text-r">工号：</td>
          <td>2016303128</td>
        </tr>
        <tr>
          <td class="text-r">姓名：</td>
          <td>赵祥</td>
        </tr>
        <tr>
          <td class="text-r">所在部门：</td>
          <td>软件学院</td>
        </tr>
        <tr>
          <td class="text-r">身份类别：</td>
          <td>本科生</td>
        </tr>
        <tr>
          <td class="text-r">QQ号码：</td>
          <td id="qqInfo">1580746585</td>
          <td class="text-r"><a href="#" id="updateQQ" data-component="modal" data-modal-target="#modal-container" data-callback="updateQQ" data-url="https://ecampus.nwpu.edu.cn/web/guest/usercenter?p_p_id=accountsecurity_WAR_jigsawportalusercenterportlet&amp;p_p_lifecycle=0&amp;p_p_state=exclusive&amp;p_p_mode=view&amp;p_p_col_id=column-1&amp;p_p_col_count=1&amp;_accountsecurity_WAR_jigsawportalusercenterportlet_action=updateQQ" data-title="QQ设置">修改</a></td>
        </tr>
        <tr>
          <td class="text-r">微信号码：</td>
          <td id="wxInfo">s1580746585</td>
          <td class="text-r"><a href="#" id="updateWx" data-component="modal" data-modal-target="#modal-container" data-callback="updateWx" data-url="https://ecampus.nwpu.edu.cn/web/guest/usercenter?p_p_id=accountsecurity_WAR_jigsawportalusercenterportlet&amp;p_p_lifecycle=0&amp;p_p_state=exclusive&amp;p_p_mode=view&amp;p_p_col_id=column-1&amp;p_p_col_count=1&amp;_accountsecurity_WAR_jigsawportalusercenterportlet_action=updateWx" data-title="微信设置">修改</a></td>
        </tr>
        </tbody>
      </table>
    </div>

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