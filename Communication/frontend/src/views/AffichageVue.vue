<template>
  <div>
     <ul class="list">
         <li v-for = "personne in listeP" :key = "personne.info">
            {{ personne.info.prenom}} {{ personne.info.nom }}
            <ul>
                <li v-for = "adresse in personne.info.adresses" :key = "adresse.a">
                    {{adresse.a}}
                </li>
            </ul>
         </li>
    </ul>
  </div>
</template>

<script>
//import {HTTP} from '../services/api';

export default {
    name: 'AjoutPersonne',
    data () {
        return {
        message: '',
        listeP: [
            {info: {
                prenom: "Alexandre",
                nom: "Charles",
                adresses: [
                    {a: "rue de la paix",},
                    {a: "rue de la défense"},
                ],
            }},
            {info: {
                prenom: "Alexandre",
                nom: "Thomas",
                adresses: {}
            }}
        ],
        errors: '',
        }
    }, 
    methods: {
    }
        /*
        getListeP () {
        HTTP.get('/api/listeP')
            .then(response => {
            // cela demande de bien comprendre la structure de données du backend
            this.message = response.data.msg
            })
            .catch(e => {
            this.errors = e
            })
        }
    },
    beforeCreate () {
        this.getListeP ();
    },
    */
}
</script>

<style lang="scss">
    .list {
        text-align: left;
        color: red,
    } 
</style>