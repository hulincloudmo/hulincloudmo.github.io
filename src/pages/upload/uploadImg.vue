<template>
  <a-upload
    v-model:fileList="fileList"
    name="file"
    multiple
    action="http://127.0.0.1:7002/upload/img"
    :headers="headers"
    withCredentials
    :data="upload"
    accept="image/*"
    @change="handleChange"
    :transform-file="transformFile"
  >
    <a-button> <upload-outlined /> Click to Upload </a-button>
  </a-upload>
</template>
<script>
import { UploadOutlined } from '@ant-design/icons-vue'
export default {
  components: {
    UploadOutlined
  },
  data () {
    return {
      fileList: [],
      headers: {
        ContentType: 'application/json'
      }
    }
  },
  methods: {
    handleChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
    transformFile (file) {
      return new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          const canvas = document.createElement('canvas')
          const img = document.createElement('img')
          img.src = reader.result
          img.onload = () => {
            const ctx = canvas.getContext('2d')
            ctx.drawImage(img, 0, 0)
            ctx.fillStyle = 'red'
            ctx.textBaseline = 'middle'
            ctx.fillText('Ant Design', 20, 20)
            canvas.toBlob(resolve)
          }
        }
      })
    },
    upload (file) {
      console.log(file)
    }
  }
}
</script>
