import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@api': path.resolve(__dirname, 'src/api'),
      '@redux': path.resolve(__dirname, 'src/redux'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@type': path.resolve(__dirname, 'src/types'),
    },
  },
})
