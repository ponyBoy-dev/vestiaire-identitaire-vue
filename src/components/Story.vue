<template>
  <div>
    <p>
      {{prenomMaj}} savait compter 2 par 2 et lasser ses chaussures.
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
      Je ne vous en parle pas plus longtemps, mais {{prenomMaj}} a plus d’un tour dans son sac !`
    </p>
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
    return {};
  },
  computed: {
    prenomMaj: function() {
      return this.majusculiser(this.prenom);
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
    majusculiser(mot) {
      return mot[0].toUpperCase() + mot.slice(-(mot.length - 1));
    },
    elision(mot) {
      if(mot[0]=== 'a'|| mot[0]=== 'e'|| mot[0]=== 'i'|| mot[0]=== 'o'|| mot[0]=== 'u'|| mot[0]=== 'y'){
          return "'" + mot
      }else{
          return "e " + mot
      }
    }
  }
};
</script>