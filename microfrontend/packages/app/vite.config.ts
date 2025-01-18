import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginSingleSpa from 'vite-plugin-single-spa'
import externalize from "vite-plugin-externalize-dependencies";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSingleSpa({
    type: 'root',
    importMaps: {
      type: 'importmap',
      dev: 'src/importMap.json',
      build: 'src/importMap.json',
    },
    imo: false
  }),
  externalize({
      externals: [
        "mesto/signin",
        "mesto/main"
      ],
    }),
  ]
})
