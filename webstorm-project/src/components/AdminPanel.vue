<template>
  <div>
    <Header :title="'Panel administratora'"></Header>
    <div class="row bg-white m-5">
      <div class="row d-flex  text-dark justify-content-center">
        <div class="row justify-content-center align-items-center m-2">
          <button v-for="(test, i) in tests" v-bind:key="i"
                  class="btn btn-outline-light text-dark test-button m-2 overflow-hidden border"
                  v-on:click="submitView('test-id-' + test.id)">
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
      id: 0,
      tests: [
        {
          id: 0,
          title: "Test z dynamicznych stron www",
          time: 1000,
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
        {
          id: 2,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " +
              "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat.",
          time: 1000,
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
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore " +
              "et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
              "aliquip ex ea commodo consequat.",
          time: 1000,
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
        }

      ]
    }
  },
  methods: {
    submitView(view) {
      this.$root.$emit('changeView', view)
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