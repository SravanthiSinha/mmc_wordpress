// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Generate the assets in a 'dist' folder
    outDir: 'dist',
    // Ensure a manifest file is generated
    manifest: true,
    // Make sure Vite handles the entry point correctly
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx'),
      },
      output: {
        // Make asset file names predictable
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  // Base path to use in production - update this to match your WordPress plugin path
  base: process.env.NODE_ENV === 'production' 
    ? '/mmc/wp-content/plugins/mmc-contact-page/dist/' 
    : '/',
});