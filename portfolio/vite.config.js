import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Default `/` for Vercel and `npm run build`. GitHub Pages subpath: `npm run build:gh-pages`.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
