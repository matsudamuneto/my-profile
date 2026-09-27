/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // 神社デザインで使う色をあらかじめ名前で登録しておく
      colors: {
        torii: '#b33a2e',
        'torii-dark': '#8c2c22',
        ink: '#2b332e',
        'ink-soft': '#5c655e',
        gold: '#bd9540',
        paper: '#fffbf1',
        'paper-edge': '#efe3c2',
        sakura: '#f3b9c6',
        'sakura-deep': '#e28fa3',
        pine: '#40564a',
      },
      fontFamily: {
        shippori: ['"Shippori Mincho"', 'serif'],
        zen: ['"Zen Kaku Gothic New"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
