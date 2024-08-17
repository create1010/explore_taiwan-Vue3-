import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import '@fortawesome/fontawesome-free/css/all.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(createPinia())
app.use(router)
app.use(vue3GoogleLogin,{clientId:'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'})
app.mount('#app')
