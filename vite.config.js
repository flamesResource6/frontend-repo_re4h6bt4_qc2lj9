import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite dev server configuration tuned for remote sandbox environments
// - Binds to 0.0.0.0 so the reverse proxy can reach it
// - Allows modal.run and modal.host proxied hostnames
// - Sets a safe HMR clientPort for TLS-terminated proxies
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: [],
    entries: ['./src/**/*.{js,jsx,ts,tsx}'],
    holdUntilCrawlEnd: true,
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    hmr: { clientPort: 443 },
    cors: {
      origin: '*',
      credentials: true,
    },
    // Allow the sandbox proxy hostnames
    allowedHosts: [
      '.modal.run',
      '.modal.host',
      'localhost',
      '127.0.0.1',
    ],
  },
})
