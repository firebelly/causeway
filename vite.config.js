import { fileURLToPath, URL } from 'node:url'
import { viteStaticCopy } from 'vite-plugin-static-copy'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/fonts/',
          dest: 'assets'
        },
        {
          src: 'src/assets/images/',
          dest: 'assets'
        },
        {
          src: 'src/assets/videos/',
          dest: 'assets'
        },
        {
          src: 'src/assets/svgs/',
          dest: 'assets'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
