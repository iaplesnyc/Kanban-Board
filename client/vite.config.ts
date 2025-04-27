import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';  // <<< you need this!

export default defineConfig({
  plugins: [react()],  // <<< use the plugin!
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
      '/auth': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist',  // <<< good practice, optional (default is dist)
  },
});
