export const apps = [
  {
    name: 'micro-vue3',
    activeRule: '/vue3',
    entry: `//localhost:8001`,
    container: '#app',
    $meta: { title: '首页' },
    props: {
      routerBase: '/vue3'
    }
  },
  {
    name: 'micro-vue2',
    activeRule: '/vue2',
    entry: '//localhost:8002',
    container: '#app',
    props: {
      routerBase: '/vue2'
    }
  }
]
