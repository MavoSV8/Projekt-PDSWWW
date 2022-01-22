<template>
  <div class="row mx-5">
    <div class="mt-5">Odpowiedz {{ number }}</div>
    <input type="text" class="form-control " placeholder="Wpisz odpowiedź..."
           v-model="msg">
    <div class="form-check d-flex flex-row">
      <input class="form-check-input" type="checkbox" value="" id="correctAnswer" v-model="correct">
      <label class="form-check-label text-left" for="correctAnswer">
        Prawidłowa
      </label>
    </div>
    <div class="align-items-center">
      <button class="btn btn-primary btn-sm col-2  " v-on:click="removeAnswer(number)">Usuń odpowiedź</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Answer",
  props: [ 'number'],
  data() {
    return {
      msg : "",
      correct : false
    }
  },
  methods : {
    removeAnswer(id) {
        this.$root.$emit('deleteAnswer', id);
    }
  }
}
</script>

<style scoped>

</style>