<script setup>
import NavBar from './nav-bar/index.vue'
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
