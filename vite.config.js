import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import compression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    compression({
      algorithm: 'brotliCompress',
      include: [/\.(js|mjs|json|css|html)$/],
      disable: false,
      threshold: 10240,
    }),
    compression({
      algorithm: 'gzip',
      include: [/\.(js|mjs|json|css|html)$/],
      disable: false,
      threshold: 10240,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
