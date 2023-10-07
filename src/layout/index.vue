<script setup>
import NavBar from './nav-bar/index.vue'
import DisableDevtool from 'disable-devtool'
import http from '@utils/http.js'

const blankPage = 'about:blank'
DisableDevtool({
  url: blankPage,
  timeOutUrl: blankPage,
  interval: 150,
  disableMenu: true,
  clearLog: true,
  md5: DisableDevtool.md5(import.meta.env.VITE_MD5),
  ignore: () => {
    return !import.meta.env.PROD
  }
})
http({
  url: '/store',
  method: 'GET'
}).then(res => {
  console.log(res)
})
</script>

<template>
  <div class="layout">
    <div class="layout__header">
      <NavBar />
    </div>
    <div class="layout__main">
      <router-view />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
