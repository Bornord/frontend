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
                :name="1"
                :value="personne.prenom+' '+personne.nom"
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
                    :name="2"
                    :value="adresse.rue"

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
    <p> {{message}} </p>
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
        HTTP.post('/api/associer',{
            token: this.$store.state.token, 
        })
            .then(response => {
                const fichierAdresse = response.data.adresses;
                const fichierPersonne = response.data.personnes;
                const fichierP = JSON.parse(fichierPersonne);
                const fichierA = JSON.parse(fichierAdresse);
                //console.log(fichierA);
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
            const choixP = document.querySelector('input[name="1"]:checked').value;
            const choixA = document.querySelector('input[name="2"]:checked').value;
            HTTP.post('/api/validerChoix',{
            personne: choixP, 
            adresse: choixA,
            token: this.$store.state.token, 
            })   
                .then(() => {
                    // TODO : refresh : erreur. ça empêche l'identification du token
                    //window.location.reload();

                    // Pour éviter le refresh, on met à jour la liste dans le dataSet. 
                    const indice = this.listeA.indexOf(choixA);
                    this.listeA.splice(indice, 1);

                })
                .catch(e => {
                    this.errors = e
                })}
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