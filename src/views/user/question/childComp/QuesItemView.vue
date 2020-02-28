<template>
  <div>
    <ques-item v-for="item in itemdata">
      <p>{{item}}</p>
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
    },
    created() {
      console.log(this.itemdata);
    }
  }
</script>

<style scoped>

</style>