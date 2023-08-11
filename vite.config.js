import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/style/common.scss";`
      }
    }
  },
  resolve: {
    alias: [
        { find: '@', replacement: resolve(__dirname, 'src') },
        { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
        { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
        { find: '@assets', replacement: resolve(__dirname, 'src/assets') },
    ]
  }
})
