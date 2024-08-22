import { PluginOption, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      template: "sunburst", // or sunburst
      open: true,
      gzipSize: true,
      brotliSize: true,
      filename: "analyse.html", // will be saved in project's root
    }) as PluginOption,
  ],
  optimizeDeps: {
    exclude: ["js-big-decimal"],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
