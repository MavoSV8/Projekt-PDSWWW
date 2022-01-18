<template>
<div id="app">
  <Navbar/>
  <div class="row border-5">
    <LeftMenu class="vh-100 col-2 bg-white"/>
    <Main class="vh-100 col-8 bg-light"/>
    <RightMenu class="vh-100 col-2 bg-white"/>
  </div>
</div>
</template>

<script>
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";

export default {
  name: 'App',
  components: {
    RightMenu,
    LeftMenu,
    Main,
    Navbar
    // Test
  //   HelloWorld
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
