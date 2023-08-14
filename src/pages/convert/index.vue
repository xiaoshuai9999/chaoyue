<script setup>
import http from '@utils/http.js'
const ok = async () => {
  const data = await http({
    url: '/transfer/picture'
  })
  console.log('data', data)
}
</script>

<template>
  <div class="container">
  <el-button type="primary" @click="ok">调用</el-button>
  </div>
</template>

<style scoped  lang="scss">
</style>
