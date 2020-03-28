<template>
  <div>
    <div v-if="loterie===0">
      <p>
        Laissez-moi vous parler d{{prenomElid}}.
        <br />
        {{pronomMaj}} a toujours de bonnes idées (même si parfois, c'est pour faire des bétises).
        Ses ami&#183;e&#183;s et {{pronom}} aiment faire toutes sortes d'expériences rigolotes. Ce qui ne plait pas toujours à leurs parents.
        <br />
        Mais tant qu{{pronomElid}} ne fait de mal à personne, dans le fond, {{prenomMaj}} sait que sa vie doit avant tout lui plaire à {{pronomTon}}-même.
        <br />
        {{pronomMaj}} ne laissera personne lui dicter ses choix.
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
        Parfois, ces humains étaient à des kilomètres d{{prenomElid}}.
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
        {{prenomMaj}} aime beaucoup faire des farces.
        Et comme son oncle a une machine à voyager dans le temps,
        {{pronom}} se dit que ce serait vachement drôle de l’utiliser pour faire une blague à ses camarades.
        <br />
        Nuitamment, {{pronom}} se glisse dans la machine, sans voir qu’une guêpe en a profité pour rentrer derrière {{pronomTon}}.
        Juste comme {{pronom}} tape les données spatio-temporelles, la guêpe décide de l’attaquer. Dans la panique, {{prenomMaj}} tape un peu partout, y compris sur quelques boutons auxquels il ne fallait pas toucher.
        Et dans un grand fracas, la machine se met en route alors qu{{pronomElid}} n’a pas du tout terminé la programmation.
        Quand la machine semble s’être calmée, {{prenomMaj}} en sort prudemment et regarde tout autour d{{pronomTonElid}}.
        <br />
        C’est un désert. A quelques pas, cependant, une forme étrange attire son attention. {{pronomMaj}} s’approche pour regarder et reconnait un nid de vélociraptor. Avec des oeufs dedans !
        (Vous l’ai-je dit ? {{prenomMaj}} est très nerd et s’intéresse énormément à la paléontologie).
        Mais personne n’est là pour les couver ! C’est sûr, ces oeufs ont besoin d{{pronomTonElid}} pour survivre.
        (C'est du moins ce que pense {{prenomMaj}}). {{pronomMaj}} les glisse dans la poche ventrale de son pull et se hâte de retourner à la machine à voyager dans le temps.
        <br />
        Après 3h de lecture du manuel, {{pronom}} trouve comment la reprogrammer pour rentrer à son époque.
        {{pronomMaj}} se faufille jusqu’au poulailler famillial et installe les oeufs sous les plus grosses poules qu{{pronomElid}} trouve.
        <br />
        Avec un peu de chance, dans quelques mois, {{pronom}} pourra vraiment épater tout le monde avec 3 véritables vélociraptors approvoisés.
      </p>
    </div>

    <div v-if="loterie===3">
      <p>
        {{prenomMaj}} aimait beaucoup voyager et {{pronom}} avait décidé de partir en voyage très loin de chez {{pronomTon}}.
        {{prenomMaj}} réserva un ticket de train sur son téléphone.
        {{pronomMaj}} voulait aller explorer le monde pour découvrir toutes sortes d’animaux et de plantes.
        {{prenomMaj}} dessinait très bien et {{pronom}} avait hâte de pouvoir illustrer toutes les péripéties de son voyage. {{pronomMaj}} fit donc sa valise, prit ses livres, ses couleurs et ses pinceaux, et partit à l’aventure.
      </p>
    </div>

    <div v-if="loterie===4">
      <p>
        {{prenomMaj}} est astronaute, en mission sur la base intergalactique URH74 depuis 3 mois déjà. 
        Avec {{pronomTon}} à toute heure du jour, K-9, un chien-robot programmé pour l’aider dans sa mission. 
        <br/> Aujourd’hui, {{prenomMaj}} et K-9 doivent prélever des échantillon sur le satellite naturel HE-532, 
        juste en-dessous de leur base. {{pronomMaj}} passe sa combinaison d’exploration et sort du sas avec K-9. 
        Juste à ce moment-là, une comète inattendue vient percuter son flanc gauche et perturbe gravement sa trajectoire.
        {{pronomMaj}} tourneboule dans tous les sens sans plus savoir où {{pronom}} va. 
        K-9, n’écoutant que son intelligence artificielle de qualité supérieure, tire comme un fou sur sa laisse, qu{{prenomElid}} n'a heureusement pas lâchée dans la panique. 
        Il réussit à ramener {{prenomMaj}} près de la base. 
        <br/> Ensemble, les 2 compères parviennent jusqu’à HE-532 et prélèvent leurs échantillons. Ils seront envoyés sur Terre pour analyse avec la prochaine navette interstellaire.

      </p>
    </div>

    <div v-if="loterie===5">
      <p>
        Je vous présente {{prenomMaj}}. {{pronomMaj}} aime la musique, jouer sur son portable,
        bavarder avec ses potes (parfois même en cours), et des tas d'autres choses encore.
        <br/> Parfois, {{prenomMaj}} s'ennuie. Alors, {{pronom}} invente des histoires dans sa tête. Comme Steven Moffat, un scénariste de génie. 
        Un jour peut-être, c'est {{pronomTon}} qu'on engagera pour écrire des scénarios de séries ou de films. {{pronomMaj}} voit déjà le début du générique afficher : 
        <br/> "D'après une idée originale d{{prenomElid}}..."
        <br/> Maintenant qu{{pronomElid}} y pense, en voilà une bonne histoire ! La sienne, du moment où {{pronom}} rêvasse dans sa chambre,
        jusqu'au moment où le monde entier rêve avec {{pronomTon}} à travers ses récits. 
      </p>
    </div>
    <div v-if="loterie>-1" :key="loterie" class="flex space-between">
      <b-button class="jaune" @click="onRetour()">Retour</b-button>
      <b-button class="bleu" @click="onBis()">Une Autre !</b-button>
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
    this.loterie = Math.floor(Math.random() * 6);
    console.log(this.loterie);
  },
  computed: {
    prenomMaj: function() {
      return this.majusculiser(this.prenom);
    },
    prenomElid: function() {
      console.log(this.elision(this.prenomMaj));
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
    onRetour() {
      this.$emit("retour");
    },
    onBis() {
      let bis = Math.floor(Math.random() * 6);
      bis === this.loterie ? this.onBis() : (this.loterie = bis);
    },
    majusculiser(mot) {
      return mot[0].toUpperCase() + mot.slice(-(mot.length - 1));
    },
    elision(mot) {
      let voyelles = [
        "a",
        "e",
        "i",
        "o",
        "u",
        "y",
        "A",
        "E",
        "I",
        "O",
        "U",
        "Y",
        "é",
        "è",
        "É",
        "È",
        "h",
        "H"
      ];

      if (voyelles.includes(mot[0])) {
        return "'" + mot;
      } else {
        return "e " + mot;
      }
    }
  }
};
</script>

<style scoped>
p {
  margin-top: 1.5em;
}
button {
  margin: 2px;
}
.jaune {
  background: #fff810;
  border: #ffe710;
  color: black;
}
button.jaune:hover {
  background: #ffdb10;
}
.bleu {
  background: #22b0e7;
  border: #177ca3;
}
button.bleu:hover {
  background: #1985af;
}
.flex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
</style>