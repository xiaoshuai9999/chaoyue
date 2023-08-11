<script setup>
import Menus from './Menus.vue'

const circleUrl = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'

</script>

<template>
<div class="container">
  <div class="logo">拼命宝宝呀</div>
  <Menus />
  <div class="person">
    <el-avatar size="small" :src="circleUrl"></el-avatar>
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
  background: #545C64;
  // 下阴影
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  .logo {
    width: 100px;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: #fff;
    cursor: pointer;
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
