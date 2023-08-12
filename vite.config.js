import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

import { resolve } from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import babel from 'vite-plugin-babel'

export default defineConfig({
  plugins: [
    babel(),
    vue(),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts'
    }),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
    })
  ],
  build: {
    target: 'es2015'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/common.scss";'
      }
    }
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
      { find: '@pages', replacement: resolve(__dirname, 'src/pages') },
      { find: '@assets', replacement: resolve(__dirname, 'src/assets') }
    ]
  }
})
