import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  // loadEnv获取环境
  // 
  let env = loadEnv(config.mode, process.cwd(), '')
  return {
    base: './',
    build: {
      outDir: './dist'
    },
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },

  }
})
