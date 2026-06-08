import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Raise chunk warning limit — React + Framer Motion legitimately exceed 500 KB
    chunkSizeWarningLimit: 650,
    rollupOptions: {
      output: {
        /**
         * Split vendor code into stable named chunks.
         * Each chunk gets a content-hash filename, so if your app code changes
         * but React/router/motion haven't changed, returning visitors only
         * re-download the small app chunk — not the whole bundle.
         */
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons':  ['lucide-react'],
        },
      },
    },
  },
})
