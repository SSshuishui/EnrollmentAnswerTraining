<template>
  <div id="foot_nav">
    <div class="foot_top">
      <a>友情链接：</a>
      <a href="http://www.dangjian.cn" target="_Blank">党建网</a>
      <a href="http://www.wenming.cn/" target="_Blank">中国文明网</a>
      <a href="http://news.12371.cn/dzybmbdj/zzb/" target="_Blank">中央组织部</a>
      <a href="http://www.ccps.gov.cn/" target="_Blank">中央党校</a>
      <a href="http://www.qstheory.cn/" target="_Blank">求是理论网</a>
    </div>
    <div class="foot_bot">@版权所有：西北工业大学</div>
  </div>
</template>

<script>
  export default {
    name: "FootBar"
  }
</script>

<style scoped>
  #foot_nav {
    position: fixed;
    left: 40px;
    right: 40px;
    bottom: 0;
    background-color: cornflowerblue;
  }

  .foot_top {
    display: flex;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .foot_top a {
    flex: 1;
  }
  .foot_bot{
    text-align: center;
    margin-bottom: 10px;
  }
</style>