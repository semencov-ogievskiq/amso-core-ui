import { defineConfig } from 'vite'
import dts from "vite-plugin-dts";
import react from '@vitejs/plugin-react'
import preserveDirectives from 'rollup-plugin-preserve-directives';

export default defineConfig({
  plugins: [
    react(),
    dts({ rollupTypes: true, tsconfigPath: './tsconfig.app.json' })
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
      external: ['react','react-dom',"react/jsx-runtime",],
      plugins: [preserveDirectives()],
      output: {
        preserveModules: true,
        globals: {
          'react': 'react',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        }
      }
    },
  },
  
})
