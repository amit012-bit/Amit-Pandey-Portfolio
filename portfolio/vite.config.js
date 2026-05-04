import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: change base to '/your-repo-name/'
// For Vercel: base: '/' (default)
// For custom domain: base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/amit-portfolio/',
})
