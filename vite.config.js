import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'



export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.PNG", "**/*.gif"],
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname,
    },
  },
})
