<template>
  <div class = "list"
>
     <ul class="list">
         Listes des personnes existantes:<br/><br/>
         <li v-for = "personne in listeP" :key = "personne.prenom">
            <input 
                class="text"
                type="radio"
                id="1" 
                name= "radio1" 
            >
            <label for="1">{{personne.prenom}} {{personne.nom}}</label>
         </li>
    </ul>
    <ul class="list" >
            Liste des adresses existantes:<br/><br/>
            <li class="text" v-for = "adresse in listeA" :key = "adresse.rue">
                <input 
                    type="radio"
                    id="2"
                    name= "radio2" 
                >
                <label for="2">{{adresse.rue}}</label>
            </li>
    </ul>
    <input 
        type = "button"
        id = "3"
        value = "Envoyer"
        @click = "envoyerAssociation"
    />
  </div>
</template>

<script>
import {HTTP} from '../services/api';

export default {
    name: 'AssocierVue',
    data () {
        return {
        message: '',
        listeP: [],
        listeA: [],
        errors: '',
        }
    }, 
    created () {
        this.getListeP();
    },
        methods: {
        getListeP () {
        HTTP.get('/api/associer')
            .then(response => {
                const fichierAdresse = response.data.adresses;
                const fichierPersonne = response.data.personnes;
                const fichierP = JSON.parse(fichierPersonne);
                const fichierA = JSON.parse(fichierAdresse);
                fichierP.forEach(/* Fichiers json */ elementP => {
                this.listeP.push(elementP);
                });
                fichierA.forEach(/* Fichiers json */ elementA => {
                this.listeA.push(elementA);
                });
            })
            .catch(e => {
            this.errors = e
            })
        },
        envoyerAssociation () {
            //const personne = document.getElementById(1).value;
            console.log(document.getElementById(1));
        }
    },
}
</script>

<style lang="scss">
    .list {
        text-align: left;
        color: red,
    } 
</style>

<style lang="scss">
    .text {
        text-align: left;
        color: blue,
    } 
</style>