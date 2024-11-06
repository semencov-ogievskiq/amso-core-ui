import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    lib: {
      entry: './src/index.ts',
      fileName: 'amso-core-ui',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react','react-dom'],
    },
  },
  
})
