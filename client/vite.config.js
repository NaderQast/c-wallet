import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Required for Chrome extensions
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: "./index.html", // Explicit entry point
      },
      output: {
        // Disable filename hashing
        entryFileNames: "[name].js",
        assetFileNames: "[name].[ext]",
      },
    },
  },
});
