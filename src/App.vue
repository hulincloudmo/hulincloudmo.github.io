<template>
  <div id="app">
    <p>双向动态绑定</p>
    <p>{{name}}</p>
    <custom-v-model v-model="name"></custom-v-model>
    <component :is="componentName" />
  </div>
</template>

<script>
import customVModel from "@/components/custom-v-model"

export default {
  name: 'app',
  data () {
    return {
      name: '陌上青夏',
      message: '',
      componentName: "customVModel"
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
