/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    reporters: ['default', 'html'],
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
})
