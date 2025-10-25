import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/LABEXAM/'  // ✅ CORRECT - matches your repo name
})
