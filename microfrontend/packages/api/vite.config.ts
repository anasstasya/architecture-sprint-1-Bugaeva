import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: 'src/export.ts',
      name: 'api',
      fileName: 'api',
    },
  },
  plugins: [dts({ 
    rollupTypes: true,
    tsconfigPath: "./tsconfig.app.json"
   })]
})