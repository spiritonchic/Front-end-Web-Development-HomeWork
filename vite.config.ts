import { defineConfig } from 'vite'
import  {resolve} from 'path'

function generateAlias(absolutePath) {
  // eslint-disable-next-line no-undef
return resolve(process.cwd(), absolutePath);
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./Front-end-Web-Development-HomeWork/",
  resolve: {
    alias: {
        '@':generateAlias('src'),
        '@utils': generateAlias('src/utils'),
        '@config': generateAlias('src/config'),
        '@pages': generateAlias('src/pages'),
        '@components': generateAlias('src/components'),
        '@assets': generateAlias('src/assets'),
        '@recoil': generateAlias('src/recoil'),
        '@shared': generateAlias('src/shared'),
        '~@': generateAlias('src'),
        '~@assets': generateAlias('src/assets'),
    }
}
})