<template>
<div>
  <component :is="currentView" :key="update"></component>
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Test from "@/components/Test";
import AddTest from "@/components/AddTest";
import AdminPanel from "@/components/AdminPanel";
import EditTest from "@/components/EditTest";


export default {
  data() {
    return {
      update: "whatever",
      currentView : Test
    }
  },
  name: 'Main',
  components: {
    AddTest,
    Test,
    EditTest
  },
  mounted() {
    this.$root.$on('changeView', (msg) => {
      console.log("Main: 'changeview' event received, " + msg);
      switch (msg) {
        case 'AddTest':
          this.currentView = AddTest;
          break;
        case 'Test':
          this.currentView = Test;
          break;
        case 'EditTest':
          this.currentView = EditTest;
          break;
        case 'AdminPanel':
          this.currentView = AdminPanel;
      }
      this.update = "whatever";
    })
  }
}

</script>

<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
