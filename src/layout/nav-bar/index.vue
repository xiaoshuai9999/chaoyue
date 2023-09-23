<script setup>
import Menus from './Menus.vue'
import defaultAvatar from '@assets/img/default-avatar.png'

</script>

<template>
<div class="container">
  <div class="logo">
    <img src="../../assets/img/logo.png" alt="logo">
  </div>
  <Menus />
  <div class="person">
    <el-avatar size="small" :src="defaultAvatar"></el-avatar>
    <div>管理员</div>
  </div>
</div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background: #6CC9DB;
  // 下阴影
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  .logo {
    width: 200px;
    height: 100%;
    color: #fff;
    cursor: pointer;
    img {
      height: 100%;
    }
  }
  .person {
    width: 100px;
    height: 100%;
    display: flex;
    align-items: center;
    column-gap: 12px;
    color: #fff;
    cursor: pointer;
  }
}
</style>
