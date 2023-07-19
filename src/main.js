import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
//引入element-plus相关样式
import 'element-plus/dist/index.css'

createApp(App).use(ElementPlus).mount('#app')
