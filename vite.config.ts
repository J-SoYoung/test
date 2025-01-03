import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      injectRegister: "auto",
      filename: "custom-service-worker.js", // 서비스 워커 파일명 변경

      pwaAssets: {
        disabled: false,
        config: true
      },

      manifest: {
        name: "vite-project",
        short_name: "vite-project",
        description: "설치 테스트를 위한 프로젝트 example ",
        theme_color: "#ffffff",
        start_url: "/",
        scope: "/",
        display: "standalone",
        background_color: "#ffffff",
        icons: [
          {
            src: "/images/logo.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/images/logo2.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
        screenshots: [
          {
            src: "/screenshots/desktop.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide"
          },
          {
            src: "/screenshots/mobile.png",
            sizes: "360x640",
            type: "image/png",
            form_factor: "narrow"
          }
        ]
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true
      },
      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module"
      }
    })
  ],
  server: {
    port: 5174, // 기본값(5173)과 다른 포트 지정
    proxy: {
      "/search/book": {
        target: "https://openapi.naver.com/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/search\/book/, "/search/book.json")
      }
    }
  }
});
