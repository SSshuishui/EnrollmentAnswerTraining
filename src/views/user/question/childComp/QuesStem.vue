<template>
  <div class="question-stem">
    <p v-if="type === 'single'">(单选题)</p>
    <p v-else>(多选题)</p>
    <slot>{{stemdata}}</slot>
  </div>
</template>

<script>
  export default {
    name: "QuesStem",
    props: {
      type: {
        type: String,
        default() {
          return 'single';
        }
      },
      stemdata: {
        type: String,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .question-stem {
    width: 300px;
    position: relative;
    margin-top: 30px;
    background-color: red;
  }
</style>