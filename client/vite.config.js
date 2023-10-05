import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env files
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Define environment variables for Vite
    'import.meta.env.VITE_CMS_RENDER_BACKEND_URL': JSON.stringify(process.env.VITE_CMS_RENDER_BACKEND_URL),
    'import.meta.env.VITE_RENDER_BACKEND_URL': JSON.stringify(process.env.VITE_RENDER_BACKEND_URL),
  },
});
