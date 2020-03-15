<template>
  <div id="app">
    <Header />
    <b-container>
          <Form />
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form";


export default {
  name: "App",
  components: {
    Header,
    Form
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
