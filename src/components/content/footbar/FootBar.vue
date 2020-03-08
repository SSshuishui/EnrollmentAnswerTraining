<template>
  <div id="foot_nav">
    <div class="foot_top">
      <el-link type="primary" disabled>友情链接：</el-link>
      <el-link type="primary" href="http://www.dangjian.cn" target="_Blank">党建网</el-link>
      <el-link type="primary" href="http://www.wenming.cn/" target="_Blank">中国文明网</el-link>
      <el-link type="primary" href="http://news.12371.cn/dzybmbdj/zzb/" target="_Blank">中央组织部</el-link>
      <el-link type="primary" href="http://www.ccps.gov.cn/" target="_Blank">中央党校</el-link>
      <el-link type="primary" href="http://www.qstheory.cn/" target="_Blank">求是理论网</el-link>
    </div>
    <div class="foot_bot text">@版权所有：西北工业大学</div>
  </div>
</template>

<script>
  export default {
    name: "FootBar"
  }
</script>

<style scoped>
  #foot_nav {
    background-color: #F2F6FC;
    margin-bottom: 4px;
  }

  .foot_top {
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 5px 3px;
  }

  .el-link {
    flex: 1;
  }

  .foot_bot{
    text-align: center;
    margin-bottom: 10px;
  }
</style>