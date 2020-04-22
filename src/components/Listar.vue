<template>
  <div class="listar">
    <h1 class="title is-2">Jogos</h1>
    <ul>
      <table class="table is-striped is-fullwidth" id="lista">
        <thead>
          <tr>
            <th>Title</th>
            <th>Descrição</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.title }}</td>
            <td>{{ item.descricao }}</td>
            <button @click="goToedit(item.id)" class="button is-rounded is-link is-outlined">Editar</button>
          </tr>
        </tbody>
      </table>
    </ul>
  </div>
</template>


<script>
import { jService } from "../services/jogos-service";
export default {
  name: "Listar",
  data: function() {
    return { items: [] };
  },
  methods: {
    goToedit(id) {
      this.$router.push({ name: "edit", params: { id: id } });
    }
  },
  mounted() {
    jService.getAll().then(_data => {
      this.items = _data;
    });
  }
};
</script>

<style>
</style>