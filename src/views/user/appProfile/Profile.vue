<template>
  <div class="profile">
    <h2>Profile</h2>
    <main-nav-bar/>
    <nav-menu/>
    <foot-bar/>
  </div>
</template>

<script>
  import MainNavBar from "components/content/mainNavBar/MainNavBar";
  import FootBar from "components/content/footbar/FootBar";

  import navMenu from "./childComp/navMenu";

  export default {
    name: "Profile",
    components: {
      MainNavBar,
      FootBar,
      navMenu
    }
  }
</script>

<style scoped>

</style>