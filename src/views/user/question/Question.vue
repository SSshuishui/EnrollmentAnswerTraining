<template>
  <div class="question">
    <ques-stem/>
    <ques-item-view :itemdata="itemdata"></ques-item-view>
  </div>
</template>

<script>
  import QuesStem from "./childComp/QuesStem";
  import QuesItemView from "./childComp/QuesItemView";

  export default {
    name: "Question",
    data() {
      return {
        itemdata: ['A.这是A选项', 'B.这是B选项', 'C.这是C选项', 'D.这是D选项']
      }
    },
    components: {
      QuesItemView,
      QuesStem
    },
    methods: {
      getQuesItem() {
        this.itemdata = ['A.这是A选项', 'B.这是B选项', 'C.这是C选项', 'D.这是D选项']
      }
    }
  }
</script>

<style scoped>

</style>