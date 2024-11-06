import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true })
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
