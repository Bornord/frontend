<template>
  <div>
    <input
      type = "button"
      id = "1"
      value = "Envoyer un ping"
      @click = "ping"
    />
    <br/>
    <p v-if = "message !=''"> {{ message }}</p>
    <p v-if = "erreur !=''"> {{ erreur }}</p>
    <input 
      type = "button"
      value = "afficher la base de données"
      id = "2"
      @click = "afficher"
    />
    <h3 class = "gauche" v-if = "listP !=[]"> Résultat dans la base de données:
    <ul>
      <li v-for = "personne in listP" :key="personne.id">
          {{personne.prenom}} {{personne.nom}}
      </li>
    </ul>
    </h3>
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
    }
  }
}
</script>

<style lang="scss">
    .gauche {
        text-align: left;
        color: blue,
    } 
</style>
