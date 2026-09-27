import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Week13で学んだ設定。GitHub Pagesはルート('/')ではなく
  // リポジトリのサブパスで公開されるため、相対パスにしないとCSS/JSが読み込めない
  base: './',
  plugins: [react()],
})
