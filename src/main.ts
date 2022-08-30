import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'

import './assets/main.css'

//  创建根组件
const app = createApp(App)
// 应用主题
// app.use(naive)

// app.use(router)
app.mount('#app')
