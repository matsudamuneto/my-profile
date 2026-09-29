import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-profile/16-my-fortunetelling/',
  plugins: [react()],
})