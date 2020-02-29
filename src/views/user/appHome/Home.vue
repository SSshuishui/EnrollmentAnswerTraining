<template>
  <div class="home">
    <main-nav-bar/>
    <foot-bar/>
    <h2>欢迎来到答题培训系统</h2>
  </div>
</template>

<script>
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  export default {
    name: "Home",
    components: {
      MainNavBar,
      FootBar
    }
  }
</script>

<style scoped>

</style>