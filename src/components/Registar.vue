<template>
  <div class="card">
    <header class="card-header">
      <h1 class="title is-2 card-header-title">Registar</h1>
    </header>
    <div class="field card-content">
      <label class="label">Titulo</label>
      <div class="control">
        <input class="input" type="text" v-model="newJogo.title">
      </div>
    </div>
    <div class="field card-content">
      <label class="label">Descrição</label>
      <div class="control">
        <input class="input" type="text" v-model="newJogo.descricao">
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
  name: "Registar",
  data: function() {
    return { newJogo: {} };
  },
  methods:{
    guardar:function() {
    jService.guardar(this.newJogo).then(()=>{
      this.newJogo = {};
      this.$router.push({ path: "/listar" });
    })
    }
  }
};
</script>

<style>
  .titles{
  font-style: italic;
  font-size: 40px;
  text-align: left;
  color:rgb(4, 4, 58);
}

.text{
  margin:auto;
  font-size:20px;
}

.buto{
 font-size: 15px;
 color: black;
}
</style>