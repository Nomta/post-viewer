import { createApp } from 'vue'
import { VueQueryPlugin } from 'vue-query'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/styles/main.css'
import App from './App.vue'

const app = createApp(App)
  .use(VueQueryPlugin)
  .use(ElementPlus)
  .mount('#app')
