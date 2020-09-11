import { ref } from 'vue'

export default () => {
  const availWidth = ref(document.documentElement.clientWidth)
  const availHeight = ref(document.documentElement.clientWidth)
  window.onresize = () => {
    availWidth.value = document.documentElement.clientWidth
    availHeight.value = document.documentElement.clientWidth
  }
  return {
    availHeight,
    availWidth
  }
}
