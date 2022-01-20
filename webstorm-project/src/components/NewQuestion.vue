<template>
  <div>
    <div id="question" class="text-dark">
      <div class="question1 question-box box bg-white">
        <div class="row">
          <div class="hl-heading text-dark mt-5 mx-5">
            <p class="d-flex align-items-center bg-light">Pytanie {{ questionNum }}:</p>
          </div>
        </div>
        <div>Treść</div>
        <div class="row mx-5">
          <input type="text" name="username" class="form-control" placeholder=""
                 v-bind:value="message">
        </div>
          <component
            v-for="(component, index) in answers"
            :key="index"
            :is="component" :number="index + 1"/>
          <button class="btn btn-sm" v-on:click.stop="addAnswer()">Dodaj odpowiedź</button>
      </div>
    </div>
  </div>
</template>

<script>
import Answer from "@/components/Answer";
export default {
  name: "NewQuestions",
  components: {Answer},
  props : [ 'questionNum'],
  data() {
    return {
      message: "Wpisz pytanie...",
      answers: [Answer]
    }
  },
  methods: {
    addAnswer () {
      this.answers.push(Answer)
    }
  }
}
</script>

<style scoped>
#question {
  font-size: 16px;
  color: black;
  text-align: left;

}

.question-box {
  margin: 25px;
  height: auto;
  width: 90%;
  /*font-size: 2.5em;*/
  /*font-weight: bold;*/
  text-align: center;
}


</style>