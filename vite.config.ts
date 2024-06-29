import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Front-end-Web-Development-HomeWork/",
  plugins: [react()],
})
