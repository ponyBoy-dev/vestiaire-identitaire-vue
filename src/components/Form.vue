<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="4">
          <label for="prenom">Ton prénom</label>
          <b-form-input id="prenom" v-bind:value="prenom" @input.native="(e) => updateValue(e.target.value, 'prenom')" size="sm" type="text" :state="prenomState"/>
          <b-form-invalid-feedback>{{champsInvalide}}</b-form-invalid-feedback>
        </b-col>

        <b-col sm="8">
          <p>
            Ici, tu peux essayer différents prénoms ou pronoms, pour voir si ils te conviennent.
            <br />Entre ceux que tu as envie d'essayer dans le formulaire à gauche.
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="4">
          <label for="pronom">
            Ton
            <span class="green">pronom sujet</span>
          </label>
          <b-form-input id="pronom" :value="pronom" @input.native="(e) =>updateValue(e.target.value, 'pronom')" size="sm" type="text" :state="pronomState"></b-form-input>
          <b-form-invalid-feedback>{{champsInvalide}}</b-form-invalid-feedback>
        </b-col>

        <b-col sm="8">
          <p class="text-align-left">
            Un
            <span class="green">pronom sujet</span>, c'est ça :
            <br />Captain Marvel est super forte,
            <span class="green">elle</span> a même sauvé la planète !
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="4">
          <label for="pronom">
            Ton
            <span class="blue">pronom tonique</span>
          </label>
          <b-form-input
            id="pronomTon"
            :value="pronomTon"
            @input.native="(e)=>updateValue(e.target.value, 'pronomTon')"
            size="sm"
            type="text"
            :state="pronomTonState"
          ></b-form-input>
          <b-form-invalid-feedback>{{champsInvalide}}</b-form-invalid-feedback>
        </b-col>

        <b-col sm="8">
          <p class="text-align-left">
            Un
            <span class="blue">pronom tonique</span>, c'est ça :
            <br />Legolas a un jacuzzi, allons chez
            <span class="blue">lui</span>.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="4">
          <b-button variant="success" @click="onValider()">Valider</b-button>
        </b-col>

        <b-col sm="8">
          <p>Quand tu as rempli tous les champs, appuie sur "Valider".</p>
        </b-col>
      </b-row>
    </b-container>
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
      submitted: false,
      champsInvalide: "Il faut remplir ce champs"
    };
  },
  computed: {
    prenomState: function() {
      if (this.submitted) {
        return this.prenom.length > 0 ? true : false;
      } else {
        return this.prenom.length > 0 ? true : null;
      }
    },
    pronomState: function() {
      if (this.submitted) {
        return this.pronom.length > 0 ? true : false;
      } else {
        return this.pronom.length > 0 ? true : null;
      }
    },
    pronomTonState: function() {
      if (this.submitted) {
        return this.pronomTon.length > 0 ? true : false;
      } else {
        return this.pronomTon.length > 0 ? true : null;
      }
    }
  },
  methods: {
    updateValue(string, what){
        console.log("voici ce que prend updateValue : " + string);
        this.$emit('input', string, what)
    },
    onValider() {
      this.submitted = true;

      if (this.formVerif()) {
        console.log("cey bon !");
        this.$emit('ready')
      } else {
        console.log("ratey");
      }
    },
    formVerif() {
      return this.prenomState && this.pronomState && this.pronomTonState
        ? true
        : false;
    }
  }
};
</script>

<style scoped>
button {
  margin-top: 0.5em;
}

.form-control-sm {
  margin-bottom: 0.7em;
}
.text-align-left {
  text-align: left;
}
.green {
  color: green;
}
.blue {
  color: blue;
}
</style>