import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// GitHub project site: set VITE_BASE_PATH=/your-repo-name/ in CI (see .github/workflows).
// User site (username.github.io repo): use VITE_BASE_PATH=/
export default defineConfig(({ mode }) => ({
  // Use "/" on Vercel unless you intentionally set VITE_BASE_PATH (e.g. GitHub Pages subpath)
  base: (process.env.VITE_BASE_PATH && process.env.VITE_BASE_PATH.trim()) || "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
