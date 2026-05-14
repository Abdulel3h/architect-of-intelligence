import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

const getPackageName = (id: string) => {
  const normalizedId = id.replaceAll("\\", "/");
  const parts = normalizedId.split("node_modules/");
  const packagePath = parts[parts.length - 1];
  if (!packagePath) return;

  const segments = packagePath.split("/");
  if (segments[0]?.startsWith("@")) {
    return `${segments[0]}/${segments[1]}`;
  }

  return segments[0];
};

const reactPackages = new Set(["react", "react-dom", "scheduler"]);

export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          const packageName = getPackageName(id);
          if (!packageName) return;

          if (
            packageName === "three" ||
            packageName === "three-stdlib" ||
            packageName.startsWith("@react-three/")
          ) {
            return "vendor-3d";
          }

          if (
            packageName === "framer-motion" ||
            packageName === "motion" ||
            packageName.startsWith("motion-")
          ) {
            return "vendor-motion";
          }

          if (reactPackages.has(packageName)) {
            return "vendor-react";
          }

          if (packageName.startsWith("@tanstack/")) {
            return "vendor-tanstack";
          }

          if (packageName.startsWith("@radix-ui/")) {
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
    nitro({
      preset: "vercel",
      vercel: {
        config: {
          cache: [],
        },
      },
    }),
    react(),
    tsConfigPaths(),
    tailwindcss(),
  ],
});
