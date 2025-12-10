import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // outDir: "wp-content/plugins/react-form-widget/dist",
    outDir: "dist",
    emptyOutDir: true,
    // rollupOptions: {
    //   input: "./src/index.jsx",
    //   output: {
    //     entryFileNames: "widget.js",
    //     assetFileNames: (assetInfo) => {
    //       if (assetInfo.name.endsWith(".css")) {
    //         return "widget.css";
    //       }
    //       return assetInfo.name;
    //     },
    //   },
    // },
  },
});
