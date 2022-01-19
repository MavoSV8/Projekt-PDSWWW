<template>
  <div> Left Menu
    <button v-on:click="submitView('Test')" >Test</button>
    <button v-on:click="submitView('AddTest')" >AddTest</button>
  </div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

export default {
  name: "LeftMenu",
  emits: ["changeView"],
  methods: {
    submitView(view) {
      this.$root.$emit('changeView', view)
    }
  }
}
</script>


<!--<style scoped>-->

<!--</style>-->