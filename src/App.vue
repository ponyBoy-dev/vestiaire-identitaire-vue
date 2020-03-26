<template>
  <div id="app">
    <Header />
    <b-container>
      <Form 
      v-if="ready===false"
      :prenom="prenom" 
      :pronom="pronom" 
      :pronomTon="pronomTon" 
      @input="onInput"
      @ready="onReady" />
      <Story
      v-if="ready===true"
      :prenom="prenom" :pronom="pronom" :pronomTon="pronomTon"/>
    </b-container>
    
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form";
import Story from "./components/Story";

export default {
  name: "App",
  components: {
    Header,
    Form,
    Story
  },
  data() {
    return {
      prenom: "",
      pronom: "",
      pronomTon: "",
      ready : false
    };
  },
  methods: {
    onInput(string, what) {
      console.log("parent reçoit : " + string);
      if (what === "prenom") {
        this.prenom = string;
      }
      if (what === "pronom") {
        this.pronom = string.toLowerCase();
      }
      if (what === "pronomTon") {
        this.pronomTon = string.toLowerCase();
      }
    },
    onReady(){
      console.log("on est prey");
      this.ready = true;
    }
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
