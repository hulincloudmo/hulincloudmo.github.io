import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
const vueRouter = new VueRouter({
  routes:[]
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
