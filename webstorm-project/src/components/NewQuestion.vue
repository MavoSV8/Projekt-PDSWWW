<template>
  <div>
    <div id="question" class="text-dark">
      <div class="question1 question-box box bg-white">
        <div class="row">
          <div class="hl-heading text-dark mt-5 mx-5">
            <p class="d-flex align-items-center bg-light">Pytanie {{ questionNum +1 }}:</p>
          </div>
          <div class="align-items-center">
          <button class="btn btn-primary btn-sm col-2  " v-on:click="removeQuestion()">Usuń pytanie</button>
          </div>
        </div>
        <div>Treść pytania</div>
        <div class="row mx-5">
          <input type="text" class="form-control" placeholder="Wpisz pytanie..."
                 v-model="message">
        </div>
        <component
            v-for="(component, index) in answers"
            :key="index"
            :is="component" :number="index + 1"
            ref="answers"/>
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
  props: ['questionNum'],
  data() {
    return {
      message: "",
      answers: [Answer]
    }
  },
  methods: {
    addAnswer() {
      this.answers.push(Answer)
    },
    removeQuestion() {
      this.$root.$emit('deleteQuestion', this.questionNum);
    },
  },
  mounted() {
    this.$root.$on('deleteAnswer', (msg) => {
      console.log("NewQuestion: 'deleteAnswer' event received, " + msg);
      if (this.answers.length > 1) {
        this.answers.splice(msg - 1, 1);
      }
    })
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