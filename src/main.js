import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {getCategory} from '@/api/testapi'
getCategory().then(res=>{
    console.log(res.data)
})
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
