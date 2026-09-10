import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative base so built asset paths work when served from
  // https://<username>.github.io/<repo-name>/ — no repo name to hardcode.
  base: './',
})
