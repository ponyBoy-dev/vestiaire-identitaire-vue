<template>
  <div id="app">
    <Header />
    <b-container>
          <Form 
          :prenom="prenom"
          :pronom="pronom"
          :pronomTon="pronomTon"
          @input="onInput"/>
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
  },
  data(){
    return {
      prenom: "",
      pronom: "",
      pronomTon: ""
    }
  },
  methods:{
    onInput(string, what){
      console.log("parent reçoit : " + string);
      if (what === 'prenom'){
        this.prenom = string
      }
      if (what === 'pronom'){
        this.pronom = string
      }
      if (what === 'pronomTon'){
        this.pronomTon = string
      }
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
