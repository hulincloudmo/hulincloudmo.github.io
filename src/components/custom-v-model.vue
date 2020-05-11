<template>
  <div>
    <label>
      <input type="text" :value="text" @input="$emit('change',$event.target.value)">
    </label>
  </div>
</template>

<script>
  export default {
    name: 'custom-v-model',
    model: {
      prop: 'text',
      event: 'change'
    },
    props: {
      text: String,
      default() {
        return ''
      }
    }
  }
</script>

<style scoped>

</style>
