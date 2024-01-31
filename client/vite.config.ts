import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PROXY = {
  target: "http://127.0.0.1:8000"
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  server: {
    proxy: {
      "/accounts/login": PROXY,
      "/accounts/register": PROXY, 
      "/tasks/getAll": PROXY,
      "/tasks/create": PROXY, 
      "/tasks/edit": PROXY,
      "/tasks/remove": PROXY,
      "/accounts/changePassword": PROXY,
      "/accounts/delete": PROXY
      
    }
  }
})
