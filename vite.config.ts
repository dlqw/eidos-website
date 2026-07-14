import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const base = process.env.VITE_BASE_PATH ?? "/";
const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base,
  plugins: [react()],
  build: {
    target: "es2022",
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        chinese: resolve(root, "zh-CN/index.html"),
        notFound: resolve(root, "404.html")
      }
    }
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    css: true,
    coverage: {
      reporter: ["text", "html"]
    }
  }
});
