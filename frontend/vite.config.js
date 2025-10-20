import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    host: true,
    strictPort: false,
    open: false,
    cors: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  }
})
