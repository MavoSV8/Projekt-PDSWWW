<template>
  <div>
    <Header :title="'Nowy Test'"></Header>
    <div v-if="!submitted">
      <div class="row d-flex text-dark justify-content-center">
        <div class="col-10">
          <div class="text-start bg-white mt-3 p-2 col-12 float-sm-start float-end" style="font-size: 15px">Czas
            testu (minuty)
            <input type="number" class="ms-3 float-end" placeholder="0"
                   v-model="test.time">
          </div>
        </div>
        <div class="col-10">
          <div class="text-start bg-white mt-3 p-2 col-12 float-sm-start float-end" style="font-size: 15px">
            Wczytaj z pliku JSON
            <input type="file" class="ms-3 float-end" @change="loadJson">
          </div>
        </div>
        <div class="col-10">
          <div class="text-start bg-white mt-3 p-2  col-12 float-sm-start float-end" style="font-size: 15px">Nazwa
            testu
            <input type="text" class="ms-3 float-end" placeholder="Wpisz nazwę testu..."
                   v-model="test.title">
          </div>
        </div>

        <div class="row">
          <component
              v-for="(question, index) in test.questions"
              :key="index"
              :is="question" :questionNum="index"
              ref="questions"/>
        </div>
        <div class="col-10  float-sm-end">
          <div class=" p-2 mt-3 float-sm-start">
            <button type="button" class="btn btn-primary btn-sm" @click="addQuestion">Dodaj pytanie</button>
          </div>
          <div class=" p-2 mt-3 float-sm-start">
            <button type="button" class="btn btn-primary btn-sm" @click="submitNewTest">Zapisz</button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="submitted" class="row d-flex justify-content-center">Test zapisany!</div>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "@/components/Header";
import NewQuestion from "@/components/NewQuestion";

export default {
  name: "AddTest",
  data() {
    return {
      jsonLoaded: false,
      temp: "",
      submitted: false,
      test: { // empty test, shall be filled with v-model
        id: 0,
        title: "",
        time: 0,
        questions: [NewQuestion]
      },
    }
  },
  components: {NewQuestion, Header},
  methods: {

    loadJson(e) {
      let files = e.target.files || e.dataTransfer.files;
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        console.log(reader.result);
        this.temp = JSON.parse(reader.result);
        let size = this.temp.questions.length;
        this.test.title = this.temp.title;
        this.test.time = this.temp.time;
        this.test.id = this.temp.id;
        for (let j = 0; j < size - 1; j++) {
          this.addQuestion();
        }
        this.jsonLoaded = true;
      }, false);
      reader.readAsText(files[0]);



    },
    addQuestion() {
      console.log("AddTest: adding question")
      this.test.questions.push(NewQuestion);
    },
    generateHash() {
      return Math.floor(Math.random() * 5000);
    },
    submitNewTest() {
      console.log("AddTest: submiting new test")
      let outTest = {};
      // needs to be taken from db, first free
      if (this.test.title === "") {
        window.alert("Podaj nazwę testu!")
        return;
      }
      outTest.id = this.test.id;
      outTest.title = this.test.title;
      outTest.time = parseInt(this.test.time);
      outTest.questions = [];
      for (const question of this.$refs['questions']) {
        let outQuestion = {};
        if (question.msg.length === 0) {
          window.alert("Występują puste pytania!")
          return;
        }
        outQuestion.msg = question.msg;
        outQuestion.answers = [];
        outQuestion.correct_answer = [];
        for (const answer of question.$refs['answers']) {
          if (answer.msg.length === 0) {
            window.alert("Występują puste odpowiedzi dla któregoś z pytań!")
            return;
          }
          outQuestion.answers.push(answer.msg);
          if (answer.correct) {
            outQuestion.correct_answer.push(answer.msg);
          }
          if (outQuestion.correct_answer.length === 0) {
            window.alert("Brak poprawnych odpowiedzi dla któregoś z pytań! Jak tu zdać :)?")
            return;
          }
        }
        outTest.questions.push(outQuestion);
      }
      console.log(outTest);

      this.sendTest(outTest);
      this.submitted = true;
    },
    sendTest(testToSend){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("POST", "http://localhost:3000/tests", false);
      xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
      xmlHttp.send(JSON.stringify(testToSend));
      console.log(JSON.stringify(testToSend));

    }
  },
  mounted() {
    this.$root.$on('deleteQuestion', (index) => {
      console.log("AddTest: 'deleteQuestion' event received, " + index);
      if (this.test.questions.length > 1) {
        this.test.questions.splice(index, 1);
        // does not work correctly, I've got no idea whether is is fixable
      }
    })
  },
  updated() {
    if(this.jsonLoaded){
      let i = 0;
      for (const question of this.$refs['questions']) {
        question.msg = this.temp.questions[i].msg
        question.temp = this.temp.questions[i].answers
        i++;
      }
    }
  }
}
</script>

<style scoped>

</style>