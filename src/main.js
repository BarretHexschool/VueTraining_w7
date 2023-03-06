import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import moment from 'moment'

import './assets/all.scss'

const app = createApp(App)
app.config.globalProperties.$moment = moment
app.use(VueAxios, axios)
app.use(moment)
app.use(router)
app.mount('#app')
