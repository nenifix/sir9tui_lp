import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import hostingConfig from "./.openai/hosting.json"; // <-- Commented out
// import { sites } from "./build/sites-vite-plugin";   // <-- Commented out

export default defineConfig({
  plugins: [
    react(),
    // sites(), // <-- Commented out
  ],
  // If you had any config from hostingConfig, you might need to hardcode it here temporarily
});


