<template>
  <div class="container" :style="`height:${availHeight}px;width:${availWidth}px`">
    <span class="title">个人服务</span>
    <view class="upload">
      <router-link to="/upload">上传图片</router-link>
    </view>
  </div>
</template>

<script>
import { ref } from 'vue'
import useFullScreen from '@/core/hooks/useFullScreen.ts'
export default {
  name: 'index',
  setup () {
    const { availHeight, availWidth } = useFullScreen()
    return {
      availHeight,
      availWidth
    }
  }
}
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}

.container {
  background-image: url("/banner.jpg");
  background-size: cover;
  background-position: center
}
.title {
  color: white;
  font-size: 35px;
  position: absolute;
  top: 35px;
  left: 20px;

}
.upload {
  position: absolute;
  top: 160px;
  left: 50px;
  padding: 35px;
  border-radius:35px  ;
  background: #67cc86;
  color: white;
  font-size: 35px;
}
</style>
