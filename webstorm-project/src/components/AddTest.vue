<template>
  <div>
    <Header :title="'Nowy Test'"></Header>
    <div class="row d-flex text-dark justify-content-center">
      <div class="col-10">
        <div class="text-start bg-white mt-3 p-2 col-12 float-sm-start float-end" style="font-size: 15px">Czas
          testu (minuty)
          <input type="number" name="username" id="test_time" class="ms-3 float-end" placeholder="0"
                 v-bind:value="test.time">
        </div>
      </div>
      <div class="col-10">
        <div class="text-start bg-white mt-3 p-2 col-12 float-sm-start float-end" style="font-size: 15px">
          Wczytaj z pliku JSON
          <input type="file" name="myfile" class="ms-3 float-end" @change="loadJson">
        </div>
      </div>
      <div class="col-10">
        <div class="text-start bg-white mt-3 p-2  col-12 float-sm-start float-end" style="font-size: 15px">Nazwa
          testu
          <input type="text" name="username" id="test_name" class="ms-3 float-end" placeholder="Nowy test"
                 v-bind:value="test.title">
        </div>
      </div>

      <div class="row">
        <component
            v-for="(question, index) in test.questions"
            :key="index"
            :is="question" :questionNum="index + 1"/>
      </div>
      <div class="col-10  float-sm-end">
        <div class=" p-2 mt-3 float-sm-start">
          <button type="button" class="btn btn-primary btn-sm" @click="addQuestion">Dodaj pytanie</button>
        </div>
        <div class=" p-2 mt-3 float-sm-start">
          <button type="button" class="btn btn-primary btn-sm">Zapisz</button>
        </div>
      </div>
    </div>
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
      title: "Test z dyn",
      test: { // empty test, shall be filled with v-model
        id: 0, // needs to be taken from db, first free
        title: "",
        time: 0,
        questions: [ NewQuestion ]
      },
    }
  },
  components: {Header},
  methods: {
    loadJson(e) {
      var files = e.target.files || e.dataTransfer.files;
      console.log("AddTest: loadJson" + files[0]);
    },
    addQuestion() {
      console.log("AddTest: adding question")
      this.test.questions.push(NewQuestion);
    }
  }
}
</script>

<style scoped>

</style>