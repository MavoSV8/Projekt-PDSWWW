<template>
  <div>
    <Header :title="'Panel administratora'"></Header>
    <div class="row bg-white m-5">
      <div class="row d-flex  text-dark justify-content-center">
        <div class="row justify-content-center align-items-center m-2">
          <button v-for="(test, i) in tests" v-bind:key="i"
                  class="btn btn-outline-light text-dark test-button m-2 overflow-hidden border"
                  v-on:click="submitView(test.id)">
            {{ test.title }}
          </button>
        </div>
        <div class="row justify-content-center align-items-center m-5">
          <button type="button" class="btn btn-primary btn-sm w-25" id="add-test" v-on:click="submitView('AddTest')">
            Dodaj nowy test
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: "AdminPanel",
  components: {Header},
  data() {
    return {
      tests:[]
    };

  },
  created() {
    this.getTests();
  },
  methods: {
    getTests(){
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "http://localhost:3000/tests",false);
      xmlHttp.send(null);
      console.log(xmlHttp.responseText)
      //var testsObject = { tests: [JSON.parse(xmlHttp.responseText)] }
      this.tests = JSON.parse(xmlHttp.responseText)

    },

    submitView(view) {
      this.$root.testId = view
      this.$root.$emit('changeView', 'EditTest')
    }
  }
}
</script>

<style scoped>
.test-button {
  width: 30%;
  height: 200px;
  min-height: 10vh;
  max-height: 20vh;
}
</style>