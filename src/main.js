import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import Vue from 'vue'
import { registerMicroApps, start } from 'qiankun'
import { apps } from './core/microApps'

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }]
})
start()

// app.use(router)
// app.use(Antd)

new Vue({
  render: h => h(App)
}).$mount('#app')
