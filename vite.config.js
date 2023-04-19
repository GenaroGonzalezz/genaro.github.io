import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { config } from 'dotenv'
import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(), viteCommonjs(), tailwindcss()],
  define: {
    global: {},
    'process.env': process.env
  }
})
