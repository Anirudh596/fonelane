import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // define: {
  //   // Define environment variables
  //   'import.meta.env.CMS_RENDER_BACKEND_URL': JSON.stringify(import.meta.env.CMS_RENDER_BACKEND_URL),
  // },
})



