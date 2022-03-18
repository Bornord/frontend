<template>
  <div>
     <ul class="list">
         <li v-for = "personne in listeP" :key = "personne.name">
            {{ personne.prenom}} {{ personne.nom }}
            <ul v-for = "adresse in personne.adresse" :key = "adresse.rue">
                <li v-if = "adresse.rue !== ''">
                    {{adresse}}
                </li>
            </ul>
         </li>
    </ul>
  </div>
</template>

<script>
import {HTTP} from '../services/api';

export default {
    name: 'AffichageVue',
    data () {
        return {
        message: '',
        listeP: [],
        errors: '',
        }
    }, 
    created () {
        this.getListeP();
    },
        methods: {
        getListeP () {
        HTTP.get('/api/listeP')
            .then(response => {
                const fichier = JSON.parse(response.data);
                //console.log("dans le frontend");
                fichier.forEach(/* Fichiers json */ element => {
                    //console.log(element.adresse);
                    this.listeP.push(element);
                });
            })
            .catch(e => {
            this.errors = e
            })
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