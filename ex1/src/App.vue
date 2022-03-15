<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logoN7En.jpeg"><br/>
    <!-- 
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    -->
    <HomeLink url = "/" text = "Accueil"/><br/>
    <HomeLink url = "/about" text = "About"/><br/>
    <HomeLink url = "/price" text = "Price"/><br/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

import HomeLink from './components/HomeLink.vue'

export default {
  name: 'App',
  components: {
    HomeLink,  
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
