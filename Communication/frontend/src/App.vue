<template>
  <div id="app">
    <div id="page">
      <main>
        <router-view/>
      </main>
      <div class="side">
        Ceci est la colonne latérale
      </div>
      <div class="nav1">
          <router-link class = link to="/">Home</router-link> |
          <router-link class = link to="/comm">Requête simple</router-link> |
          <router-link class = link to="/testSQL">Test avec SQL</router-link> |
          <router-link class = link to="/ajoutPersonne">Ajout de personne</router-link> | 
          <router-link class = link to="/ajoutAdresse">Ajout d'une adresse</router-link> | 
          <router-link class = link to="/associer">Associer</router-link> |
          <router-link class = link to="/affichage">Affichage</router-link>
      </div>
      <div class = "login" v-if= "$store.state.token==='basicDefaultToken'">
          <router-link to="/login" >
            <button role="link">S'identifier</button>
          </router-link>   
      </div>
      <div class="signup" v-if= "$store.state.token==='basicDefaultToken'">
          <router-link to="/signup" >
            <button role="link">S'inscrire</button>
          </router-link>        
      </div>
      <div v-if= "$store.state.token!=='basicDefaultToken'">
        <p> {{$store.state.prenom}}</p>
      </div>
      <div v-if= "$store.state.token!=='basicDefaultToken'">
        <p>{{$store.state.nom}}</p>
      </div>
      <div class = "deconnexion">
        <div v-if= "$store.state.token!=='basicDefaultToken'">
          <router-link to="/deconnexion" >
            <button role="link">Se déconnecter</button>
          </router-link>   
        </div>
      </div>
      <footer>
        Ceci est le pied de page
      </footer>
    <!--
    <HomeView/>
    -->
    </div>
  </div>
</template>

<script>

/*
import EspaceClient from "./components/EspaceClient.vue";
  export default {
    name: "App",
    data: () => ({
        msg: "",
        component: EspaceClient,
    }),
    components: { EspaceClient }
}
*/


</script>

<style scoped lang="scss">

#page {
  background-color: red;
  display: grid;
  width: 100%;  height: 1000px;
  grid-template-rows: 50px 50px 10fr 10fr 100px;
  grid-template-columns: 2fr 4fr 2fr 2fr 2fr;
  .link { color: white; } /* CSS link color */
  .link:hover { color: red; } /* CSS link color */
  // grid-area: main;
}

.nav1 {
  padding: 30px;
  background-color: black;
  color: white;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.login {
  padding: 30px;
  background-color: blue;
  grid-column-start: 4;
  grid-row-start: 1;
  text-align: right;
}

.signup {
  padding: 30px;
  background-color: blue;
  grid-column-start: 5;
  grid-row-start: 1;
  text-align: left;

}

.deconnexion {
  padding: 20px;
  background-color: rgb(0, 183, 255);
  grid-column: 4 / 6;
  grid-row-start: 2;
  text-align: center;
}

#page > main {
  background-color: #ffff64;
  grid-column: 2 / 6;
  grid-row: 3 / 6;
  padding: 30px ;
}

#page > footer {
  background-color: blue;
  color: white;
  grid-column: 1 / 6;
  grid-row-start: 5;
  padding: 30px;
}

#page > .side {
  background-color: green;
  grid-column: 1 / 2;
  grid-row: 3 / 5;
  padding: 30px;
}


</style>

