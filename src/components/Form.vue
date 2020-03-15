<template>
  <div>
      <b-container fluid>
          <b-row>
                <label for="prenom">Ton prénom</label>
                <b-form-input id="prenom" v-model="prenom" size="sm" placeholder="Truc-Muche"></b-form-input>
            
                <label for="pronom">Ton <span class="green"> pronom sujet</span></label>
                <b-form-input id="pronom" v-model="pronom" size="sm"></b-form-input>

                <label for="pronom">Ton <span class="blue"> pronom tonique</span></label>
                <b-form-input id="pronomTon" v-model="pronomTon" size="sm"></b-form-input>

             

          </b-row>
      </b-container>
      <b-button variant="success">Valider</b-button>
    
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        prenom: '',
        pronom:'',
        pronomTon : ''
      }
    }
  }
</script>

<style scoped>
button{
    margin-top: 0.5em;
}

.form-control-sm{ 
    margin-bottom: 0.7em; 
}
.green{
        color: green;
    }
    .blue{
        color: blue;
    }

</style>