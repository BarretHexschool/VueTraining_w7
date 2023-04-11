import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
import router from '../router'
const sweetAlertStore = defineStore('sweetAlertStore', {
  state: () => {
    return {}
  },

  actions: {
    swalToastTopEnd (message) {
      Swal.fire({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        title: message
      })
    },
    swalError (message) {
      Swal.fire({
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'OK',
        toast: true,
        icon: 'error',
        title: message,
        text: '請重新操作，若再次出現請通知管理者，謝謝'
      })
    },
    loginCheckError (message) {
      router.push('/login')
      Swal.fire({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2500,
        icon: 'error',
        title: '登入驗證失敗，請確認登入使用者資料'
      })
    }
  },
  getters: {}
})
export default sweetAlertStore
