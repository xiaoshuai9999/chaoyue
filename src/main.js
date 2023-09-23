import { createApp } from 'vue'
import './style.css'

import router from './router/index.js'
import App from './App.vue'
import { createPinia } from 'pinia'

// 导入 element-plus
import ElementPlus from 'element-plus'
// 导入 element-plus 样式
import 'element-plus/dist/index.css'
// 导入 element-plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const pinia = createPinia()
// 创建 vue 实例
const app = createApp(App)

app.use(ElementPlus).use(router).use(pinia).mount('#app')

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
