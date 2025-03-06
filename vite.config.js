// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import svgr from '@svgr/rollup';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: '/portfolio3  ',
//   plugins: [react(), svgr()],
//   server: {
//     port: 3000,
//   }
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})