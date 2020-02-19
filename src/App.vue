<template>
  <div id="app">
    <p>双向动态绑定</p>
    <p>{{name}}</p>
    <custom-v-model v-model="name"></custom-v-model>

  </div>
</template>

<script>
import customVModel from "@/components/custom-v-model"
export default {
  name: 'app',
  data () {
    return {
      name: '陌上青夏',
      message: ''
    }
  },
  beforeDestroy() {
  },
  components: {
    customVModel
  }
}
</script>

<style>

</style>
