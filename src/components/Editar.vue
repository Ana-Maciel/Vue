<template>
  <div class="card">
    <header class="card-header">
      <h1 class="title is-2 card-header-title">Editar</h1>
    </header>
    <div class="field card-content">
      <label class="label">Titulo</label>
      <div class="control">
        <input class="input" type="text" v-model="jogo.title" />
      </div>
    </div>
    <div class="field card-content">
      <label class="label">Descrição</label>
      <div class="control">
        <input class="input" type="text" v-model="jogo.descricao" />
      </div>
    </div>
    <div class="field is-grouped card-content">
      <p class="control">
        <a v-on:click="guardar" class="button is-success">Salvar</a>
      </p>
      <p class="control">
        <a v-on:click="remover" class="button is-danger">Eliminar</a>
      </p>
    </div>
  </div>
</template>

<script>
import { jService } from "../services/jogos-service";

export default {
  name: "edit",
  data() {
    return {
      jogo: {}
    };
  },
  mounted() {
    
    jService.getById(this.$route.params.id).then(_jogo => {
      this.jogo = _jogo;
    });

  },
  methods: {
    guardar:function() {
      jService.guardar(this.jogo).then(()=>{
        this.jogo = {};
        this.$router.push({ path: "/listar" });
      })
    },

    remover: function() {
      if (confirm("Tem a certeza?")) {
        jService.remover(this.jogo.id).then(() => {
          this.$router.push({ path: "/listar" });
        });
      }
    }
  }
};
</script>

<style>
</style>