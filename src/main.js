/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import App from './App.vue'
import router from './router'

import moment from 'moment'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import 'vue-progressive-image/dist/style.css'
// import VueProgressiveImage from 'vue-progressive-image'
import ProgressiveImage from 'vue-progressive-image'

import './assets/css/all.scss'
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.config.globalProperties.$moment = moment
app.use(createPinia())

app.use(VueAxios, axios)

app.use(VueSweetalert2)

app.use(moment)
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.component('Loading', Loading)
app.use(ProgressiveImage)
app.use(router)
app.mount('#app')