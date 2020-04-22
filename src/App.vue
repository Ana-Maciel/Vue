<template>
  <section class="section" id="app">
    <div class="tabs is-medium">
      <ul>
        <li><a href="#/listar">Listar</a></li>
        <li><a href="#/registar">Registar</a></li>
      </ul>
      <p class="control">
        <a href="http://localhost:8080/logout" class="button is-info">Logout</a>
      </p>
    </div>
    <div class="container">
      <router-view />
    </div>
  </section>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'
  //import Listar from './components/Listar.vue'

  export default {
    name: "App",
    components: {}
  };
</script>

<style>

</style>
