import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Front-end-Web-Development-HomeWork/",
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        comics: resolve(__dirname, 'comics.html'),
        home: resolve(__dirname, 'home.html'),
        skills: resolve(__dirname, 'skills.html'),
        projects: resolve(__dirname, 'projects.html')
      }
    }
  },
})
