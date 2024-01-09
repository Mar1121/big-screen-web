
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())

// 全局的路由前置钩子
router.beforeEach((to, from) => {
    console.log(to, 'to', from, 'from');
    // 判断sessionStorage有没有token
    // return { path: '/login' }
})
app.use(router)

app.mount('#app')
