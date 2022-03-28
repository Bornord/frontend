<template>
  <div>
    {{message}}
    <br/>
    {{$store.state.nom}}
  </div>
</template>

<script>
//import { userService } from '@/services/api.js'

export default {
  name: 'DeconnexionVue',
  data () {
    return {
      message: 'Ceci est la pge de deco',
      erreurs: ''
    }
  },
  created () {
    this.delete();
    },

  methods: {
    delete () {
      this.$store.dispatch('DELETE_TOKEN');
    }
  }
}

</script>
