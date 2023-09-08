import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from "path"
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['src/**/*']})],
  build: {
    lib: {
      entry: resolve(__dirname, 'src', 'index.ts'),
      formats: ['es', 'cjs'],
      fileName: (ext) => `index.${ext}.js`
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
// todo: modify to not include peer deps in build
// modify to preserve modules and make tree shakeable