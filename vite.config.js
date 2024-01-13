import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
//自动导入插件
import autoImport from 'unplugin-auto-import/vite'
// 自动导入组件
import autoComponents from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  // loadEnv获取环境
  // 
  let env = loadEnv(config.mode, process.cwd(), '')
  // console.log(env.VITE_APP_BASEURL);
  return {
    base: './',
    build: {
      outDir: './dist-' + config.mode,
      rollupOptions: {
        output: {
          chunkFileNames: `assets/js/[name]-${env.VITE_APP_VERSION}-[hash]${+new Date()}.js`, // 引入文件名的名称
          assetFileNames: `assets/[ext]/[name]-${env.VITE_APP_VERSION}-[hash]-${+new Date()}.[ext]`,  // 包的入口文件名称
          entryFileNames: `assets/js/[name]-${env.VITE_APP_VERSION}-[hash]-${+new Date()}.js`,  // 资源文件像 字体，css 图片等
        }
      },
    },
    esbuild: {
      drop: ['console', 'debugger']
    },
    plugins: [
      vue(),
      // 自动导入插件
      autoImport({
        imports: ['pinia', 'vue', 'vue-router'],
        defaultExportByFilename: true,
        // 自动按需导入
        resolvers: [ElementPlusResolver()],
      }),
      autoComponents({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        'components': fileURLToPath(new URL('./src/components', import.meta.url)),
        'pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        'assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        'utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        'layout': fileURLToPath(new URL('./src/layout', import.meta.url)),
      }
    },
    server: {
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: env.VITE_APP_BASEURL,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }

  }
})
