import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import alias from '@rollup/plugin-alias'
import { resolve } from 'path'

const projectRootDir = resolve(__dirname)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    alias({
      entries: [
        {
          find: '@',
          replacement: resolve(projectRootDir, 'src'),
        },
      ],
    }),
  ],
})
