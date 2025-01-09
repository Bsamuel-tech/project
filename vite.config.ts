import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    fs: {
      strict: true,  // Optional: Makes sure file system access is controlled
    },
    watch: {
      usePolling: true, // Optional: For environments that require polling for file changes
    },
  },
  base: '/',  // Ensures that all assets are correctly linked when deployed
});
