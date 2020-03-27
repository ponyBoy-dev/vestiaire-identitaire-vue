<template>
  <div>
    <div v-if="loterie===0">
      <p>
        Laissez-moi vous raconter l'histoire d{{prenomElid}}.
        <br />
        {{pronomMaj}} a toujours de bonnes idées (même si parfois, c'est pour faire des bétises).
        Ses ami&#183;e&#183;s et {{pronom}} aiment faire toutes sortes d'expériences rigolotes. Ce qui ne plait pas toujours à leurs parents.
        <br/>Mais tant qu{{pronomElid}} ne fait de mal à personne, dans le fond, {{prenomMaj}} sait que sa vie doit avant tout lui plaire à {{pronomTon}}-même. 
        <br/>{{pronomMaj}} ne laissera personne lui dicter ses choix.
      </p>
    </div>

    <div v-if="loterie===1">
      <p>
        "{{prenomMaj}} savait compter 2 par 2 et lasser ses chaussures.
        <br />
        {{pronomMaj}} savait aussi compter sur la technologie pour l’aider dans la vie.
        <br />
        Mais {{pronom}} avait également beaucoup d’humains sur qui compter.
        <br />
        Parfois, ces humains étaient à des kilomètres de {{prenomMaj}}.
        <br />Et c’est pour ça que la technologie était là :
        <br />
        Pour qu{{pronomElid}} puisse compter sur des humains,
        <br />
        même quand ils étaient très loin d{{pronomTonElid}}.
        <br />
        Je ne vous en parle pas plus longtemps, mais {{prenomMaj}} a plus d’un tour dans son sac !"
      </p>
    </div>

    <div v-if="loterie===2">
        <p>
            Je vous présente {{prenomMaj}}. {{pronomMaj}} aime la musique, jouer sur son portable, 
            bavarder avec ses potes (parfois même en classe), et des tas d'autres choses encore. 
        </p>
    </div>
    <div v-if="loterie>-1" :key="loterie" class="flex space-between">
        <b-button class="jaune" @click="onRetour()">
            Retour
        </b-button>
        <b-button class="bleu" @click="onBis()">
            Une Autre !
        </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prenom: String,
    pronom: String,
    pronomTon: String
  },
  data() {
    return {
      loterie: Number
    };
  },
  beforeMount() {
    this.loterie = Math.floor(Math.random() * 2);
    console.log(this.loterie);
  },
  computed: {
    prenomMaj: function() {
      return this.majusculiser(this.prenom);
    },
    prenomElid: function() {
      return this.elision(this.prenomMaj);
    },
    pronomMaj: function() {
      return this.majusculiser(this.pronom);
    },
    pronomElid: function() {
      return this.elision(this.pronom);
    },
    pronomTonElid: function() {
      return this.elision(this.pronomTon);
    }
  },
  methods: {
    onRetour(){
        this.$emit('retour')
    },
    onBis(){
        let bis = Math.floor(Math.random() * 2)
        bis === this.loterie ? this.onBis() : this.loterie = bis;
    },
    majusculiser(mot) {
      return mot[0].toUpperCase() + mot.slice(-(mot.length - 1));
    },
    elision(mot) {
      if (
        mot[0] === "a" ||
        mot[0] === "e" ||
        mot[0] === "i" ||
        mot[0] === "o" ||
        mot[0] === "u" ||
        mot[0] === "y"
      ) {
        return "'" + mot;
      } else {
        return "e " + mot;
      }
    }
  }
};
</script>

<style scoped>

p{
    margin-top : 1.5em
}
button{
    margin : 2px;
    
}
.jaune{
    background: #fff810;
    border: #ffe710;
    color: black;
}
button.jaune:hover{
    background: #ffdb10;
    
}
.bleu{
    background: #22b0e7;
    border: #177ca3;
}
button.bleu:hover{
    background: #1985af;
}
.flex{
    display: flex;
}
.space-between{
    justify-content: space-between;
}
</style>