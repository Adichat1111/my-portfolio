import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// 'serve' = local dev (base = /), 'build' = production (base = /my-portfolio/)
export default defineConfig(({ command }) => ({
  base: command === "build" ? "/my-portfolio/" : "/",
  plugins: [react()],
}));
