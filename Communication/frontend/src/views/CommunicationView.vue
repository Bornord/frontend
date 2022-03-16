<template>
  <div class="test">
    <input
      class = "couleur"
      type = "button"
      value = "Send request"
      @click= "getGreetings"
    />
    <h1 v-if = "greetings!==''" > {{greetings}} </h1>
  </div>
</template>

<script>
//import { userService } from '@/services/api.js'
import {HTTP} from '../services/api'

export default {
  name: 'ShowGreetings',
  data () {
    return {
      greetings: '',
      errors: ''
    }
  },
  methods: {
    getGreetings () {
      HTTP.get('/greetings')
        .then(response => {
          console.log("all's fine");
          console.log(response);
          this.greetings = response.data.msg
        })
        .catch(e => {
          this.errors = e
        })
    }
  }
}

</script>

<style scoped>
  .test {
    color: red; 
  }
  .couleur {
    color: blue;
  }
</style>