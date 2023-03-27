import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'
import VueAxios from 'vue-axios'

// 引入 VeeValidate 元件跟功能
import {
  Field, Form, ErrorMessage, defineRule, configure
} from 'vee-validate'
  // 引入 VeeValidate 的驗證規則
import AllRules from '@vee-validate/rules'
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n'
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 引入 Sweetalert
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import App from './App.vue'
import router from './router'

import moment from 'moment'

import './assets/all.scss'
// 使用 Object.keys 將 AllRules 轉為陣列並使用 forEach 迴圈將驗證規則加入 VeeValidate
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})

// 將當前 VeeValidate 的語系設定為繁體中文
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

// 掛載 Global 的 Momvnt元件
app.use(moment)
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field)
app.component('VForm', Form)
app.component('ErrorMessage', ErrorMessage)

app.use(router)
app.mount('#app')
