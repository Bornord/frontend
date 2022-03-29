<template>
  <div class="test">
    <input
      type = "button"
      value = "Cliquer ici pour ne rien faire"
      @click= "setupCookie"
    />
    <div>
        Ceci est le cookie crée {{this.$cookies}}
    </div>
  </div>
</template>

<script>
//import { userService } from '@/services/api.js'
//import {HTTP} from '../services/api'

export default {
  name: 'CookieSetup',
  data () {
    return {
      message: '',
      erreur: ''
    }
  },
  methods: {
    setupCookie () {
       this.$cookies.set("Enguerran","gowtham","3m");
    }
  }
}

</script>

<style scoped>
</style>