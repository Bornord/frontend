<template>
  <div>
    <input
      class = "bouton"
      type = "button"
      id = "1"
      value = "Envoyer un ping"
      @click = "ping"
    />
    <input
      type = "button"
      class = "bouton"
      id = "5"
      value = "Effacer la base de donnée"
      @click = "effacer"
    />
    <input 
      type = "button"
      class = "bouton"
      value = "afficher la base de données"
      id = "2"
      @click = "afficher"
    />
    <br/>
    <p v-if = "message !=''"> {{ message }}</p>
    <p v-if = "erreur !=''"> {{ erreur }}</p>
    <h3 class = "gauche" v-if = "listP !=[]"> Résultat dans la base de données:
    <ul>
      <li v-for = "personne in listP" :key="personne.id">
          {{personne.prenom}} {{personne.nom}}
      </li>
    </ul>
    </h3>
    <input
      type = "text"
      id = "3"
      value = "prénom"
      />
      <input
      type = "text"
      id = "4"
      value = "nom"
      />
      <input
      type = "button"
      class = "bouton"
      id = "4"
      value = "Ajouter"
      @click = "ajoutP"
      />

  </div>
</template>

<script>
import {HTTP} from '../services/api'


export default {
  name: 'HomeView',
  data () {
    return {
      message: "",
      erreur: "",
      listP: []
  }},
  methods: {
    ping () {
      HTTP.post('/api/testSQL', {
        message: "test",
      })
        .then(response => {
          // cela demande de bien comprendre la structure de données du backend
          this.message = response.data.resp
          console.log(this.message);
        })
        .catch(e => {
          this.errors = e
        })
    },
    afficher () {
      this.listP = [];
      HTTP.get('/api/afficher')
        .then( response => {
          const fichierP = response.data;
          console.log(fichierP);
          fichierP.forEach( personne => {
            console.log("personne");
            this.listP.push(personne);
          })
        })
        .catch(e => {this.error = e});
    },

    /*ajoutP () {
      const prenom = document.getElementById("3").value;
      const nom = document.getElementById("4").value;
      console.log("test");
      HTTP.post('/api/ajoutP',{
        prenom: prenom,
        nom: nom,
      })
        .then( resultat => {
          this.message = resultat.data.msg;
        })
        .catch(err => this.erreur = err);
    },
  */
  effacer () {
    HTTP.post('/api/effacer',{
      msg: "Effacer la base",
    })
      .then( resultat => {
        this.message = resultat.data.msg;
      })
      .catch(err => this.erreur = err);
  },


  }
}
</script>

<style lang="scss">
    .gauche {
        text-align: left;
        color: blue,
    } 

    .bouton {
      padding: 5px;
      margin: 10px;
    } 

</style>
