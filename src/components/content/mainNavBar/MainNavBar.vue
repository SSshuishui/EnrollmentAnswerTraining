<template>
  <nav-bar>
    <nav-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-activate" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </nav-bar-item>
    <nav-bar-item path="/answer">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-activate" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">答题</div>
    </nav-bar-item>
    <nav-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-activate" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">个人中心</div>
    </nav-bar-item>
  </nav-bar>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import NavBarItem from "components/common/navbar/NavBarItem";
  export default {
    name: "MainNavBar",
    components: {
      NavBar,
      NavBarItem
    }
  }
</script>

<style scoped>

</style>
