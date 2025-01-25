import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from "vite-plugin-single-spa";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4101,
  },
  plugins: [
    react(),
    vitePluginSingleSpa({
      serverPort: 4101,
      spaEntryPoints: "src/spa.tsx",
    })
  ],
})
