import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../pages/Home/index.vue'
import Upload from '../pages/upload/uploadImg.vue'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/upload',
      component: Upload
    }
  ]
})

export default router
