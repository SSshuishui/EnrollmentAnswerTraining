<template>
  <div class="answer">
    <main-nav-bar/>
    <foot-bar/>
    <select-comp/>
  </div>
</template>

<script>
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  import SelectComp from "components/content/select/SelectComp";

  export default {
    name: "Answer",
    components: {
      SelectComp,
      MainNavBar,
      FootBar
    }
  }
</script>

<style scoped>

</style>