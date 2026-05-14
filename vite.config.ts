import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          const normalizedId = id.replaceAll("\\", "/");
          if (!normalizedId.includes("/node_modules/")) return;

          if (
            normalizedId.includes("/node_modules/three/") ||
            normalizedId.includes("/node_modules/three-stdlib/") ||
            normalizedId.includes("/node_modules/fflate/")
          ) {
            return "vendor-three";
          }

          if (
            normalizedId.includes("/node_modules/@react-three/") ||
            normalizedId.includes("/node_modules/react-use-measure/") ||
            normalizedId.includes("/node_modules/suspend-react/") ||
            normalizedId.includes("/node_modules/its-fine/") ||
            normalizedId.includes("/node_modules/zustand/")
          ) {
            return "vendor-r3f";
          }

          if (
            normalizedId.includes("/node_modules/framer-motion/") ||
            normalizedId.includes("/node_modules/motion-dom/") ||
            normalizedId.includes("/node_modules/motion-utils/")
          ) {
            return "vendor-motion";
          }

          if (
            normalizedId.includes("/node_modules/react/") ||
            normalizedId.includes("/node_modules/react-dom/") ||
            normalizedId.includes("/node_modules/scheduler/") ||
            normalizedId.includes("/node_modules/use-sync-external-store/")
          ) {
            return "vendor-react";
          }

          if (normalizedId.includes("/node_modules/@tanstack/")) {
            return "vendor-tanstack";
          }

          if (normalizedId.includes("/node_modules/@radix-ui/")) {
            return "vendor-radix";
          }
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
