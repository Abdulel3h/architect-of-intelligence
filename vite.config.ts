import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          if (
            id.includes("@react-three") ||
            id.includes("three") ||
            id.includes("three-stdlib") ||
            id.includes("maath")
          ) {
            return "vendor-3d";
          }

          if (id.includes("framer-motion") || id.includes("motion-dom")) {
            return "vendor-motion";
          }

          if (id.includes("react-dom") || id.includes("react")) {
            return "vendor-react";
          }

          if (id.includes("@tanstack")) {
            return "vendor-tanstack";
          }

          if (id.includes("@radix-ui")) {
            return "vendor-radix";
          }

          return "vendor";
        },
      },
    },
  },
  plugins: [
    tanstackStart({
      server: {
        entry: "server",
      },
    }),
    nitro(),
    react(),
    tsConfigPaths(),
    tailwindcss(),
  ],
});
