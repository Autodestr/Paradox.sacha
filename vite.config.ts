import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import svgLoader from 'vite-svg-loader'
import Unocss from 'unocss/vite'

import { presetAttributify, presetUno } from 'unocss' // Presets

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue({
      script: {
        defineModel: true,
      },
    }),
    svgLoader(),
    Unocss({
      presets: [presetAttributify(), presetUno()], // Presets
    }),
  ],
})
