<template>
  <div>
    <b-container fluid>
      <b-row class="flex jcontent-center">
        <p class="text-align-center">
          Ici, tu peux essayer différents prénoms et pronoms, pour voir si ils te conviennent.
          <br />Entre ceux que tu as envie d'essayer dans le formulaire.
          <br />Quand tu as terminé, clique sur "Valider".
        </p>
      </b-row>
      <b-row class="separator"></b-row>
      <b-row class="flex jcontent-center">
        <label for="prenom" class="label-margin">Quel prénom veux-tu essayer ?</label>
        <div>
          <b-form-input
            id="prenom"
            v-bind:value="prenom"
            @input.native="(e) => updateValue(e.target.value, 'prenom')"
            size="sm"
            type="text"
            :state="prenomState"
          />
          <b-form-invalid-feedback v-if="prenomState===false">{{champsInvalide}}</b-form-invalid-feedback>
        </div>
        
        
      </b-row>

      <b-row class="separator"></b-row>
      <b-row class="flex jcontent-center"><p>Choisis aussi :</p></b-row>

      <b-row>
        <b-col>
          <label for="pronom">
            ton
            <span class="pill yellow">pronom sujet</span>
          </label>
          <div class="flex jcontent-center">
            <b-form-input
              id="pronom"
              :value="pronom"
              @input.native="(e) =>updateValue(e.target.value, 'pronom')"
              size="sm"
              type="text"
              :state="pronomState"
            ></b-form-input>
          </div>
          <b-form-invalid-feedback v-if="pronomState===false">{{champsInvalide}}</b-form-invalid-feedback>

          <p class="margin-from-input">
            Un
            <span class="pill yellow">pronom sujet</span>, c'est ça :
            <br />
            <span class="pill yellow">Elle</span> rentre à vélo.
          </p>
        </b-col>

        <b-col>
          <label for="pronomTon">
            ton
            <span class="pill blue">pronom tonique</span>
          </label>
          <div class="flex jcontent-center">
            <b-form-input
              id="pronomTon"
              :value="pronomTon"
              @input.native="(e)=>updateValue(e.target.value, 'pronomTon')"
              size="sm"
              type="text"
              :state="pronomTonState"
            ></b-form-input>
          </div>
          <b-form-invalid-feedback v-if="pronomTonState===false">{{champsInvalide}}</b-form-invalid-feedback>

          <p class="margin-from-input">
            Un
            <span class="pill blue">pronom tonique</span>, c'est ça :
            <br />Il rentre chez 
            <span class="pill blue">lui</span>.
          </p>
        </b-col>
      </b-row>

      <b-row class="flex jcontent-center">
        <b-button variant="success" @click="onValider()">Valider</b-button>
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
    updateValue(string, what) {
      console.log("voici ce que prend updateValue : " + string);
      this.$emit("input", string, what);
    },
    onValider() {
      this.submitted = true;

      if (this.formVerif()) {
        console.log("cey bon !");
        this.$emit("ready");
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
input {
  max-width: 17em;
}
button {
  margin-top: 0.5em;
  background: #63e89e;
  border: #58cf8e;
}
button:hover {
  background: #58cf8e;
  border: #63e89e;
}
.invalid-feedback {
  display: unset;
}
.margin-from-input {
  margin-top: 0.7em;
}
.flex {
  display: flex;
}
.jcontent-center {
  justify-content: center;
}
.text-align-left {
  text-align: left;
}
.text-align-center {
  text-align: center;
}
.label-margin {
  margin-right: 1em;
}
.pill{
    padding-bottom: 3px;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 4px;
}
.yellow{
    background: #fff810;
}
.blue{
    background: #22b0e7;
}
.separator {
  height: 1em;
}
</style>