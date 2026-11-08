import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Si le site est publié dans un sous-dossier (ex. GitHub Pages), changez `base`.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
