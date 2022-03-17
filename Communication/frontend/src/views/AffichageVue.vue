<template>
  <div>
     <ul class="list">
         <li v-for = "personne in listeP" :key = "personne.name">
            {{ personne.prenom}} {{ personne.nom }}
            <ul v-for = "adresse in personne.adresse" :key = "adresse.a">
                <li v-if = "adresse.a !== ''">
                    {{adresse.a}}
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
                fichier.forEach(/* Fichiers json */ element => {
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