<template>
  <div>
    <ques-item v-for="item in itemdata">
      <p class="text item">{{item}}</p>
    </ques-item>
  </div>
</template>

<script>
  import QuesItem from "./QuesItem";
  export default {
    name: "QuesItemView",
    props: {
      itemdata: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      QuesItem
    }
  }
</script>

<style scoped>

</style>