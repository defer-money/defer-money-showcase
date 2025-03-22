import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    commonjsOptions: {
      requireReturnsDefault: true
    }
  },
  server: {
    port: 5300,
  }
})
