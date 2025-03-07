import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
        "@/": path.resolve(__dirname, "src"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/views": path.resolve(__dirname, "src/views"),
        "@/router": path.resolve(__dirname, "src/router"),
        "@/assets": path.resolve(__dirname, "src/assets"),
        "@/store": path.resolve(__dirname, "src/store"),
        "@/utils": path.resolve(__dirname, "src/utils"),
    },
  },
})