import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "stats.html",
      template: "treemap",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  server: {
    port: 3000,
    open: true,
  },

  build: {
    chunkSizeWarningLimit: 600, // <-- Add this line

    outDir: "build",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.endsWith(".css")) return;

          if (id.includes("node_modules")) {
            if (id.includes("@mui")) return "mui";

            if (
              id.includes("antd") ||
              id.includes("@ant-design") ||
              id.includes("rc-")
            )
              return "antd";

            if (id.includes("react-bootstrap") || id.includes("bootstrap"))
              return "bootstrap";

            if (id.includes("axios")) return "axios";

            if (id.includes("react-router")) return "router";

            if (id.includes("dayjs")) return "dayjs";

            if (id.includes("lodash")) return "lodash";

            if (id.includes("moment")) return "moment";

            return "vendor";
          }
        },
      },
    },
  },
});
