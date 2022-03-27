<template>
  <div class="ajout">
    <input
      type = "text"
      id = 1
      value = "Prénom"
    />
        <input
      type = "text"
      id = 2
      value = "Nom"
    />
    <input
      type = "button"
      id = 3
      value = "Envoyer"
      @click = "sendPersonne"
    />
    <p v-if = "message!==''" > {{message}} </p>
  </div>
</template>

<script>
import {HTTP} from '../services/api'

export default {
  name: 'AjoutPersonne',
  data () {
    return {
      message: '',
      errors: ''
    }
  },
  methods: {
    sendPersonne () {
      const prenom = document.getElementById(1).value;
      const nom = document.getElementById(2).value;
      HTTP.post('/api/ajoutPersonne', {
          prenom: prenom,
          nom: nom,
          token: this.$store.state.token,
      })
        .then(response => {
          // cela demande de bien comprendre la structure de données du backend
          this.message = response.data.msg
        })
        .catch(e => {
          this.errors = e
        })
    }
  }
}
</script>