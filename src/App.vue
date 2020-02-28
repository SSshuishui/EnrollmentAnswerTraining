<template>
  <div id="app">
    <main-nav-bar/>
    <foot-bar/>
    <router-view/>

  </div>
</template>

<script>
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  export default {
    name: 'App',
    components: {
      MainNavBar,
      FootBar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
