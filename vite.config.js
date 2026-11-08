import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuration pour GitHub Pages (dépôt : Adingdev/egcp-bio-medical)
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/egcp-bio-medical/' : '/',
  plugins: [react()],
}))
