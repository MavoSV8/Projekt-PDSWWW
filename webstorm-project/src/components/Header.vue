<template>
  <div class="row d-flex justify-content-center">
    <div class="title-box bg-white text-dark">{{ this.title }}</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ['title']
}
</script>

<style scoped>
.title-box {
  margin: 25px;
  min-height: 50px;
  width: 60%;
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
}
</style>