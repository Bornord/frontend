<template>
  <div id="app" class="wrapper">


    <nav>
      <div>
        Test
      </div>
      <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/comm">Requête simple</router-link> |
      <router-link to="/testSQL">Test avec SQL</router-link> |
      <router-link to="/ajoutPersonne">Ajout de personne</router-link> | 
      <router-link to="/ajoutAdresse">Ajout d'une adresse</router-link> | 
      <router-link to="/associer">Associer</router-link> |
      <router-link to="/affichage">Affichage</router-link>
      </div> 
    </nav>
    <router-view/>
    <!--
    <HomeView/>
    -->
  </div>
</template>

<script>
/*
import HomeView from "./views/HomeView.vue";
  export default {
    name: "App",
    data: () => ({
        msg: "Home",
        component: HomeView,
    }),
    components: { HomeView }
}
*/

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.one {
  grid-column: 1;
  grid-row: 1;
}
.two {
  grid-column: 1;
  grid-row: 1;
}

</style>

