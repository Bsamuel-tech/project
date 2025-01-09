import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // Vite handles history API fallback automatically for SPAs,
    // No need for historyApiFallback like in webpack
    fs: {
      strict: true,  // Optional: Makes sure file system access is controlled
    },
    watch: {
      usePolling: true, // Optional: For environments that require polling for file changes
    }
  },
});
