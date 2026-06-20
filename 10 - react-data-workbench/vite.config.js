import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "@ant-design/plots",
      "@antv/g2",
      "@antv/g2plot",
      "@antv/component",
      "@antv/scale",
    ],
  },
  define: {
    global: "window",
  },
});