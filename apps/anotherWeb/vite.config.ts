import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import visualizer from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    process.env.ANALYZE === 'true' && visualizer({
      filename: 'dist/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ].filter(Boolean),
  build: {
    rollupOptions: {
      output: {
        // 청크 분할 최적화
        manualChunks: {
          // 벤더 라이브러리 분리
          vendor: ['react', 'react-dom'],
          router: ['react-routes-dom'],
          ui: ['@repo/ui'], // 공통 UI 패키지
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // console.log 제거
        drop_debugger: true,
      },
    },
    // 청크 크기 경고 임계값 설정
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3002
  }
})
