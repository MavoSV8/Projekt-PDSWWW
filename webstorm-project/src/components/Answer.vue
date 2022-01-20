<template>
  <div class="row mx-5">
    <div class="mt-5">Odpowiedz {{ number }}</div>
    <input type="text" name="username" class="form-control " placeholder=""
           v-model="msg">
    <div class="form-check d-flex flex-row">
      <input class="form-check-input" type="checkbox" value="" id="correctAnswer" v-model="correct">
      <label class="form-check-label text-left" for="correctAnswer">
        Prawidłowa
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answer",
  props: [ 'number'],
  data() {
    return {
      msg : "Wpisz odpowiedź",
      correct : false
    }
  }
}
</script>

<style scoped>

</style>