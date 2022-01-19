<template>
  <div>
    <div class="row d-flex justify-content-center">
      <div class="title-box bg-white text-dark">{{ test.title }}</div>
      <div v-if="!submited" class="row d-flex text-dark justify-content-center">
        <div id="question" class="text-dark">
          <div class="question1 question-box box bg-white" v-for="(q, i) in test.questions" v-bind:key="i">
            <div class="row">
              <div class="hl-heading text-dark mt-5 mx-5">
                <p class="d-flex align-items-center bg-light">Pytanie {{ i + 1 }}:</p>
              </div>
              <div class="question-name d-flex align-items-center text-dark mx-5">{{ q.msg }}
              </div>
            </div>
            <div class="row" v-for="(a, j) in q.answers" v-bind:key="j">
              <div class="form-check mx-5 mt-1">
                <input class="form-check-input" type="radio"
                       v-bind:value="a"
                       v-model="testResult.answers[i]">
                <label class="form-check-label">{{ a }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col text-center">
            <button type="button" class="btn justify-content-center btn-primary btn-lg" v-on:click="submitTest()">
              Wyślij
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="submited">
      <div class="row d-flex justify-content-center">Dziękujemy za wzięcie udziału w teście!</div>
      <div class="row d-flex justify-content-center">Twój wynik to: {{ testResult.points }}/{{
          testResult.maxPoints
        }}
      </div>
    </div>
  </div>

</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: "Test",
  data() {
    return {
      title: "Test z dyn",
      submited: false,
      test: {
        id: 0,
        title: "Test z dynamicznych stron www",
        questions: [
          {
            msg: "Do czego odowłujemy się znakiem #?",
            answers: ["klasa", "identyfikator", "obiekt"],
            correct_answer: ["identyfikator"],
          },
          {
            msg: "Dasz rade odpowiedziec na pytanie 2?",
            answers: ["tak", "nie"],
            correct_answer: ["nie"],
          }
        ]
      },
      testResult: {
        testId: 0,
        answers: ["", ""],
        points: 0,
        maxPoints: 0
      }

    }
  },
  created () {
    console.log("A test should be loaded here!");
  },
  methods: {
    submitTest() {
      console.log("Test submited");
      this.testResult.maxPoints = this.test.questions.length
      for (let i = 0; i < this.test.questions.length; i++) {
        if (this.testResult.answers[i] === this.test.questions[i].correct_answer[0]) {
          this.testResult.points++;
        }
      }
      console.log(this.testResult.answers)
      this.submited = true;
      //  send to databse here
    }
  }
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