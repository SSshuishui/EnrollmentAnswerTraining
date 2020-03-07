<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import FootBar from "components/content/footbar/FootBar";

  export default {
    name: 'App',
    components: {
      FootBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
