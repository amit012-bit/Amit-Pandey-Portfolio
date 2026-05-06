import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages uses a subpath; Vercel serves from domain root (VERCEL is set on their build runners).
const base = process.env.VERCEL ? '/' : '/amit-portfolio/'

export default defineConfig({
  plugins: [react()],
  base,
})
