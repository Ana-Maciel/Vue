import Vue from 'vue'
import './../node_modules/bulma/css/bulma.css';
import VueRouter from 'vue-router'

import App from './App.vue'

import Listar from './components/Listar.vue'
import Registar from './components/Registar.vue'
import Editar from './components/Editar.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/listar', component: Listar },
  { path: '/registar', component: Registar },
  {path: '/edit/:id',name: 'edit', component: Editar} // vamos chamar id pra ficar igual ao lado do servidor
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

