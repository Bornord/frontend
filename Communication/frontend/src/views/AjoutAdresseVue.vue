<template>
  <div class="ajout">
        <input
      type = "text"
      id = 1
      value = "adresse"
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
  name: 'AjoutAdresse',
  data () {
    return {
      message: '',
      errors: ''
    }
  },
  methods: {
    sendPersonne () {
      const adresse = document.getElementById(1).value;
      HTTP.post('/api/ajoutAdresse', {
          adresse: adresse,
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