import { defineConfig } from "vite";
import path from "path";
import AppPackage from "./package.json";

// =========  https://vitejs.dev/config/  =========
const pathSrc = path.resolve(__dirname, "src");
export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    // ...
  ],
  build: {
    target: "chrome75",
  },
  define: {
    ViteConst: JSON.stringify({
      AppVersion: AppPackage.version,
      AppName: AppPackage.name,
    }),
  },
  server: {
    host: true,
    port: 9000,
    strictPort: true, // 端口已被占用则会直接退出
    proxy: {},
  },
});
