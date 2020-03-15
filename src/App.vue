<template>
  <div id="app">
    <Header />
    <b-container>
      <b-row>
        <b-col sm="4">
          <Form />
        </b-col>
        <b-col sm="8">
          <Explications/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form";
import Explications from "./components/Explications"

export default {
  name: "App",
  components: {
    Header,
    Form,
    Explications
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
