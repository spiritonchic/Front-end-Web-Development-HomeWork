import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Front-end-Web-Development-HomeWork/",
  plugins: [typescript(), /* Other plugins */],
})