<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/ajoutPersonne">Ajout de personne</router-link>
      <router-link to="/ajoutAdresse">Ajout d'une adresse</router-link>
      <router-link to="/affichage">Affichage</router-link>
      <router-link to="/association">Associer</router-link>

    </nav>
    <router-view/>
    Ceci est la page d':
  </div>
</template>

<script>
  import HomeView from "./components/HomeView.vue";
  export default {
	name: 'App',
  data: () => ({
    msg: "HelloWorld",
    component:
      HomeView,
  }),
}

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
</style>
