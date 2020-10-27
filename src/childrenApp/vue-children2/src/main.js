import Vue from 'vue'
import App from './App.vue'
import './public-path'

// eslint-disable-next-line no-unused-vars
let instance = null

function render (props = {}) {
  const { container } = props
  instance = new Vue({
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

export async function bootstrap () {
  console.log('[vue] vue app bootstraped')
}

export async function mount (props) {
  console.log('[vue] props from main framework', props)

  render(props)
}

Vue.config.productionTip = false

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
