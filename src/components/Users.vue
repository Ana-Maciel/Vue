<template>
  <div class="card">
    <header class="card-header">
      <h1 class="title is-2 card-header-title">Criar User</h1>
    </header>
    <div class="field card-content">
      <label class="label">Username</label>
      <div class="control">
        <input class="input" type="text" v-model="newUser.username">
      </div>
    </div>
    <div class="field card-content">
      <label class="label">Password</label>
      <div class="control">
        <input class="input" type="text" v-model="newUser.password">
      </div>
    </div>
    <div class="field is-grouped card-content">
      <p class="control">
        <a v-on:click="guardar" class="button is-link">Guardar</a>
      </p>
      <p class="control">
        <a href="#/listar" class="button is-light">Cancelar</a>
      </p>
    </div>
  </div>
</template>

<script>
import { jService } from "../services/jogos-service";

export default {
  name: "Users",
  data: function() {
    return { newUser: {} };
  },
  methods:{
    guardar:function() {
    jService.guardar(this.newUser).then(()=>{
      this.newUser = {};
      this.$router.push({ path: "/listar" });
    })
    }
  }
};
</script>

<style>
</style>