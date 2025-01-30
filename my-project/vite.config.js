import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/fresh_fruits",
  optimizeDeps: {
    include: ["react-icons"],
  },
})
