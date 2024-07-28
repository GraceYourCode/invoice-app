import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgLoader from 'vite-svg-loader'; // Import the SVG loader

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgLoader(), // Add the SVG loader
  ],
});