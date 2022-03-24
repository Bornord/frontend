<template>
    <section id="page">
        <header>En-tête</header>
        <nav>Navigation</nav>
        <main>Zone principale</main>
        <test> Zone de test</test>
        <footer>Pied de page</footer>
    </section>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped lang="scss">
#page {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas: "head head head"
                       "nav main main"
                       "nav test foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr 1fr;
}

#page > header {
  grid-area: head;
  background-color: #8ca0ff;
}

#page > nav {
  grid-area: nav;
  background-color: #ffa08c;
}

#page > main {
  grid-area: main;
  background-color: #ffff64;
}

#page > footer {
  grid-area: foot;
  background-color: #8cffa0;
}

#page > test {
  grid-area: test;
  background-color: blue;
}

</style>