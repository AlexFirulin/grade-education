import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ua from './locales/ua.json'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    ua,
  },
})

app.use(pinia)
app.use(i18n)
app.mount('#app')
