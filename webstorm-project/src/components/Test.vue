<template>
  <div>
    <Header :title="test.title"></Header>
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
import Header from "@/components/Header";

export default {
  name: "Test",
  components: {Header},
  data() {
    return {
      title: "Test z dyn",
      submited: false,
      test: {
      },
      testResult: {
        id: 0,
        testId: 0,
        answers: ["", ""],
        points: 0,
        maxPoints: 0
      }
    }
  },
  created() {
    console.log("A test should be loaded here!");
    this.getTest(6);
  },
  methods: {

    getTest(testID){

      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "http://localhost:3000/tests/"+ testID,false);
      xmlHttp.send(null);
      console.log(xmlHttp.responseText)
      //var testsObject = { tests: [JSON.parse(xmlHttp.responseText)] }
      this.test = JSON.parse(xmlHttp.responseText)

    },
    submitTest() {
      console.log("Test submited");
      this.testResult.maxPoints = this.test.questions.length
      console.log("Tu 1");
      for (let i = 0; i < this.test.questions.length; i++) {
        console.log("Tu" + i);
        if (this.testResult.answers[i] === this.test.questions[i].correct_answer[0]) {
          this.testResult.points++;
        }

      }
      this.testResult.testId = this.test.id;
      //var results = [this.testResult]
      console.log(this.testResult.answers)
      this.submited = true;
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("POST", "http://localhost:3000/testResult",false);
      xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xmlHttp.send(JSON.stringify(this.testResult));
      console.log(JSON.stringify(this.testResult));
    }
  }
}
</script>

<style scoped>

</style>