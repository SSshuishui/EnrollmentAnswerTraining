<template>
  <div class="home">
    <h2>欢迎来到答题培训系统</h2>
    <ques-item-view/>
  </div>
</template>

<script>
  import QuesItemView from "../question/childComp/QuesItemView";
  export default {
    name: "Home",
    components: {
      QuesItemView

    }
  }
</script>

<style scoped>

</style>