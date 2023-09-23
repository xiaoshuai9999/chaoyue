<script setup>
import router from '@/router/index.js'

const activeIndex2 = ref('0')
const menus = [
  { index: '0', routeName: 'Home', name: '首页' },
  { index: '1', routeName: 'Software', name: '软件' },
  { index: '2', routeName: 'Translate', name: '极简翻译' },
  { index: '3', routeName: 'Convert', name: '超能转换' },
  { index: '4', routeName: 'Info', name: 'Info' }
]
const handleSelect = (key) => {
  const menu = menus.find(i => i.index === key)
  router.push({ name: menu.routeName })
}
</script>

<template>
  <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#6CC9DB"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
  >
    <el-menu-item
        v-for="menu of menus"
        :index="menu.index"
        :key="menu.routeName"
    >
      {{ menu.name }}
    </el-menu-item>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu-demo {
  width: 50%;
  margin: 0 auto;
  border-bottom: 1px solid #ebeef5;
  :deep(.el-menu-item) {
    font-size: 16px;
  }
}
</style>
