(function(e){function t(t){for(var r,a,i=t[0],u=t[1],l=t[2],c=0,m=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},s=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vestiaire-identitaire-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},1198:function(e,t,n){"use strict";var r=n("c360"),o=n.n(r);o.a},2911:function(e,t,n){"use strict";var r=n("3313"),o=n.n(r);o.a},3313:function(e,t,n){},"51e2":function(e,t,n){"use strict";var r=n("5b39"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5f5b"),s=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header"),n("b-container",[!1===e.ready?n("Form",{attrs:{prenom:e.prenom,pronom:e.pronom,pronomTon:e.pronomTon},on:{input:e.onInput,ready:e.onReady}}):e._e(),!0===e.ready?n("Story",{attrs:{prenom:e.prenom,pronom:e.pronom,pronomTon:e.pronomTon},on:{retour:e.onBack}}):e._e()],1),n("Footer")],1)}),a=[],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"margin-bottom",attrs:{id:"header"}},[n("div",{staticClass:"flex-center colorful margin radius box-shadow"},[n("h1",[e._v("Vestiaire Identitaire")])]),n("h4",{staticClass:"margin"},[e._v("Relooking par le langage")])])}],l=(n("2911"),n("2877")),p={},c=Object(l["a"])(p,i,u,!1,null,"005343fe",null),m=c.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"Form"}},[n("b-container",{attrs:{fluid:""}},[n("b-row",{staticClass:"flex jcontent-center"},[n("p",{staticClass:"text-align-center"},[e._v(" Ici, tu peux essayer différents prénoms et pronoms, pour voir si ils te conviennent. "),n("br"),e._v("Entre ceux que tu as envie d'essayer dans le formulaire. "),n("br"),e._v('Quand tu as terminé, clique sur "Valider". ')])]),n("b-row",{staticClass:"separator"}),n("b-row",{staticClass:"flex jcontent-center"},[n("label",{staticClass:"label-margin",attrs:{for:"prenom"}},[e._v("Quel prénom veux-tu essayer ?")]),n("div",[n("b-form-input",{attrs:{id:"prenom",value:e.prenom,size:"sm",type:"text",state:e.prenomState},nativeOn:{input:function(t){return function(t){return e.updateValue(t.target.value,"prenom")}(t)}}}),!1===e.prenomState?n("b-form-invalid-feedback",[e._v(e._s(e.champsInvalide))]):e._e()],1)]),n("b-row",{staticClass:"separator"}),n("b-row",{staticClass:"flex jcontent-center"},[n("p",[e._v("Choisis aussi :")])]),n("b-row",[n("b-col",[n("label",{attrs:{for:"pronom"}},[e._v(" ton "),n("span",{staticClass:"pill yellow"},[e._v("pronom sujet")])]),n("div",{staticClass:"flex jcontent-center"},[n("b-form-input",{attrs:{id:"pronom",value:e.pronom,size:"sm",type:"text",state:e.pronomState},nativeOn:{input:function(t){return function(t){return e.updateValue(t.target.value,"pronom")}(t)}}})],1),!1===e.pronomState?n("b-form-invalid-feedback",[e._v(e._s(e.champsInvalide))]):e._e(),n("p",{staticClass:"margin-from-input"},[e._v(" Un "),n("span",{staticClass:"pill yellow"},[e._v("pronom sujet")]),e._v(", c'est ça : "),n("br"),n("span",{staticClass:"pill yellow"},[e._v("Elle")]),e._v(" rentre à vélo. ")])],1),n("b-col",[n("label",{attrs:{for:"pronomTon"}},[e._v(" ton "),n("span",{staticClass:"pill blue"},[e._v("pronom tonique")])]),n("div",{staticClass:"flex jcontent-center"},[n("b-form-input",{attrs:{id:"pronomTon",value:e.pronomTon,size:"sm",type:"text",state:e.pronomTonState},nativeOn:{input:function(t){return function(t){return e.updateValue(t.target.value,"pronomTon")}(t)}}})],1),!1===e.pronomTonState?n("b-form-invalid-feedback",[e._v(e._s(e.champsInvalide))]):e._e(),n("p",{staticClass:"margin-from-input"},[e._v(" Un "),n("span",{staticClass:"pill blue"},[e._v("pronom tonique")]),e._v(", c'est ça : "),n("br"),e._v("Il rentre chez "),n("span",{staticClass:"pill blue"},[e._v("lui")]),e._v(". ")])],1)],1),n("b-row",{staticClass:"flex jcontent-center"},[n("b-button",{attrs:{variant:"success"},on:{click:function(t){return e.onValider()}}},[e._v("Valider")])],1)],1)],1)},v=[],f={props:{prenom:String,pronom:String,pronomTon:String},data:function(){return{submitted:!1,champsInvalide:"Il faut remplir ce champs"}},computed:{prenomState:function(){return this.submitted?this.prenom.length>0:this.prenom.length>0||null},pronomState:function(){return this.submitted?this.pronom.length>0:this.pronom.length>0||null},pronomTonState:function(){return this.submitted?this.pronomTon.length>0:this.pronomTon.length>0||null}},methods:{updateValue:function(e,t){this.$emit("input",e,t)},onValider:function(){this.submitted=!0,this.formVerif()&&this.$emit("ready")},formVerif:function(){return!!(this.prenomState&&this.pronomState&&this.pronomTonState)}}},_=f,b=(n("51e2"),Object(l["a"])(_,d,v,!1,null,"4422dc35",null)),h=b.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.loterie?n("div",[n("p",[e._v(" Laissez-moi vous parler d"+e._s(e.prenomElid)+". "),n("br"),e._v(" "+e._s(e.pronomMaj)+" a toujours de bonnes idées (même si parfois, c'est pour faire des bétises). Ses ami·e·s et "+e._s(e.pronomTon)+" aiment faire toutes sortes d'expériences rigolotes. Ce qui ne plait pas toujours à leurs parents. "),n("br"),e._v(" Mais tant qu"+e._s(e.pronomElid)+" ne fait de mal à personne, dans le fond, "+e._s(e.prenomMaj)+" sait que sa vie doit avant tout lui plaire à "+e._s(e.pronomTon)+"-même. "),n("br"),e._v(" "+e._s(e.pronomMaj)+" ne laissera personne lui dicter ses choix. ")])]):e._e(),1===e.loterie?n("div",[n("p",[e._v(' "'+e._s(e.prenomMaj)+" savait compter 2 par 2 et lasser ses chaussures. "),n("br"),e._v(" "+e._s(e.pronomMaj)+" savait aussi compter sur la technologie pour l’aider dans la vie. "),n("br"),e._v(" Mais "+e._s(e.pronom)+" avait également beaucoup d’humains sur qui compter. "),n("br"),e._v(" Parfois, ces humains étaient à des kilomètres d"+e._s(e.prenomElid)+". "),n("br"),e._v("Et c’est pour ça que la technologie était là : "),n("br"),e._v(" Pour qu"+e._s(e.pronomElid)+" puisse compter sur des humains, "),n("br"),e._v(" même quand ils étaient très loin d"+e._s(e.pronomTonElid)+". "),n("br"),e._v(" Je ne vous en parle pas plus longtemps, mais "+e._s(e.prenomMaj)+" sait encore beaucoup d'autres choses !\" ")])]):e._e(),2===e.loterie?n("div",[n("p",[e._v(" "+e._s(e.prenomMaj)+" aime beaucoup faire des farces. Et comme son oncle a une machine à voyager dans le temps, "+e._s(e.pronom)+" se dit que ce serait vachement drôle de l’utiliser pour faire une blague à ses camarades. "),n("br"),e._v(" Nuitamment, "+e._s(e.pronom)+" se glisse dans la machine, sans voir qu’une guêpe en a profité pour entrer derrière "+e._s(e.pronomTon)+". Juste comme "+e._s(e.pronom)+" tape les données spatio-temporelles, la guêpe décide de l’attaquer. Dans la panique, "+e._s(e.prenomMaj)+" tape un peu partout, y compris sur quelques boutons auxquels il ne fallait pas toucher. Et dans un grand fracas, la machine se met en route alors qu"+e._s(e.pronomElid)+" n’a pas du tout terminé la programmation. "),n("br"),e._v("Quand la machine semble s’être calmée, "+e._s(e.prenomMaj)+" en sort prudemment et regarde tout autour d"+e._s(e.pronomTonElid)+". "),n("br"),e._v(" C’est un désert. A quelques pas, cependant, une forme étrange attire son attention. "+e._s(e.pronomMaj)+" s’approche pour regarder et reconnait un nid de vélociraptor. Avec des oeufs dedans ! (Vous l’ai-je dit ? "+e._s(e.prenomMaj)+" est très nerd et s’intéresse énormément à la paléontologie). Mais personne n’est là pour les couver ! C’est sûr, ces oeufs ont besoin d"+e._s(e.pronomTonElid)+" pour survivre. (C'est du moins ce que pense "+e._s(e.prenomMaj)+"). "+e._s(e.pronomMaj)+" les glisse dans la poche ventrale de son pull et se hâte de retourner à la machine à voyager dans le temps. "),n("br"),e._v(" Après 3h de lecture du manuel, "+e._s(e.pronom)+" trouve comment la reprogrammer pour rentrer à son époque. "+e._s(e.pronomMaj)+" se faufille jusqu’au poulailler famillial et installe les oeufs sous les plus grosses poules qu"+e._s(e.pronomElid)+" trouve. "),n("br"),e._v(" Avec un peu de chance, dans quelques mois, "+e._s(e.pronom)+" pourra vraiment épater tout le monde avec 3 véritables vélociraptors approvoisés. ")])]):e._e(),3===e.loterie?n("div",[n("p",[e._v(" "+e._s(e.prenomMaj)+" aimait beaucoup voyager et "+e._s(e.pronom)+" avait décidé de partir en voyage très loin de chez "+e._s(e.pronomTon)+". "+e._s(e.prenomMaj)+" réserva un ticket de train sur son téléphone. "+e._s(e.pronomMaj)+" voulait aller explorer le monde pour découvrir toutes sortes d’animaux et de plantes. "+e._s(e.prenomMaj)+" dessinait très bien et "+e._s(e.pronom)+" avait hâte de pouvoir illustrer toutes les péripéties de son voyage. "+e._s(e.pronomMaj)+" fit donc sa valise, prit ses livres, ses couleurs et ses pinceaux, et partit à l’aventure. ")])]):e._e(),4===e.loterie?n("div",[n("p",[e._v(" "+e._s(e.prenomMaj)+" est astronaute, en mission sur la base intergalactique URH74 depuis 3 mois déjà. Avec "+e._s(e.pronomTon)+" à toute heure du jour, K-9, un chien-robot programmé pour l’aider dans sa mission. "),n("br"),e._v(" Aujourd’hui, "+e._s(e.prenomMaj)+" et K-9 doivent prélever des échantillon sur le satellite naturel HE-532, juste en-dessous de leur base. "+e._s(e.pronomMaj)+" passe sa combinaison d’exploration et sort du sas avec K-9. Juste à ce moment-là, une comète inattendue vient percuter son flanc gauche et perturbe gravement sa trajectoire. "+e._s(e.pronomMaj)+" tourneboule dans tous les sens sans plus savoir où "+e._s(e.pronom)+" va. K-9, n’écoutant que son intelligence artificielle de qualité supérieure, tire comme un fou sur sa laisse, qu"+e._s(e.prenomElid)+" n'a heureusement pas lâchée dans la panique. Il réussit à ramener "+e._s(e.prenomMaj)+" près de la base. "),n("br"),e._v(" Ensemble, les 2 partenaires parviennent jusqu’à HE-532 et prélèvent leurs échantillons. Ils seront envoyés sur Terre pour analyse avec la prochaine navette interstellaire. ")])]):e._e(),5===e.loterie?n("div",[n("p",[e._v(" Je vous présente "+e._s(e.prenomMaj)+". "+e._s(e.pronomMaj)+" aime la musique, jouer sur son portable, bavarder avec ses potes (parfois même en cours), et des tas d'autres choses encore. "),n("br"),e._v(" Parfois, "+e._s(e.prenomMaj)+" s'ennuie. Alors, "+e._s(e.pronom)+" invente des histoires dans sa tête. Comme Steven Moffat, un scénariste de génie. Un jour peut-être, c'est "+e._s(e.pronomTon)+" qu'on engagera pour écrire des scénarios de séries ou de films. "+e._s(e.pronomMaj)+" voit déjà le début du générique afficher : "),n("br"),e._v(" \"D'après une idée originale d"+e._s(e.prenomElid)+'..." '),n("br"),e._v(" Maintenant qu"+e._s(e.pronomElid)+" y pense, en voilà une bonne histoire ! La sienne, du moment où "+e._s(e.pronom)+" rêvasse dans sa chambre, jusqu'au moment où le monde entier rêve avec "+e._s(e.pronomTon)+" à travers ses récits. ")])]):e._e(),e.loterie>-1?n("div",{key:e.loterie,staticClass:"flex space-between"},[n("b-button",{staticClass:"jaune",on:{click:function(t){return e.onRetour()}}},[e._v("Retour")]),n("b-button",{staticClass:"bleu",on:{click:function(t){return e.onBis()}}},[e._v("Une Autre !")])],1):e._e()])},j=[],y=(n("caad"),n("fb6a"),n("a9e3"),{props:{prenom:String,pronom:String,pronomTon:String},data:function(){return{loterie:Number}},beforeMount:function(){this.loterie=Math.floor(6*Math.random())},computed:{prenomMaj:function(){return this.majusculiser(this.prenom)},prenomElid:function(){return this.elision(this.prenomMaj)},pronomMaj:function(){return this.majusculiser(this.pronom)},pronomElid:function(){return this.elision(this.pronom)},pronomTonElid:function(){return this.elision(this.pronomTon)}},methods:{onRetour:function(){this.$emit("retour")},onBis:function(){var e=Math.floor(6*Math.random());e===this.loterie?this.onBis():this.loterie=e},majusculiser:function(e){return e[0].toUpperCase()+e.slice(-(e.length-1))},elision:function(e){var t=["a","e","i","o","u","y","A","E","I","O","U","Y","é","è","É","È","h","H"];return t.includes(e[0])?"'"+e:"e "+e}}}),M=y,q=(n("1198"),Object(l["a"])(M,g,j,!1,null,"2e820693",null)),x=q.exports,C=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"margin-top flex-column-end",attrs:{id:"footer"}},[n("div",{staticClass:"colorful"},[n("h6",[e._v("Développé par ponyBoy. "),n("br"),e._v("Avec la fabuleuse collaboration de Sam pour les histoires. ")])])])}],E=(n("89d3"),{}),S=Object(l["a"])(E,C,T,!1,null,"3d4bc7a8",null),w=S.exports,O={name:"App",components:{Header:m,Form:h,Story:x,Footer:w},data:function(){return{prenom:"",pronom:"",pronomTon:"",ready:!1}},methods:{onInput:function(e,t){"prenom"===t&&(this.prenom=e),"pronom"===t&&(this.pronom=e.toLowerCase()),"pronomTon"===t&&(this.pronomTon=e.toLowerCase())},onReady:function(){this.ready=!0},onBack:function(){this.ready=!1}}},k=O,I=(n("034f"),Object(l["a"])(k,s,a,!1,null,null,null)),V=I.exports;r["default"].use(o["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(V)}}).$mount("#app")},"5b39":function(e,t,n){},"85ec":function(e,t,n){},"89d3":function(e,t,n){"use strict";var r=n("d12f"),o=n.n(r);o.a},c360:function(e,t,n){},d12f:function(e,t,n){}});
//# sourceMappingURL=app.ffdc9532.js.map