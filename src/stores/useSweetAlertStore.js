import { defineStore } from 'pinia'
import Swal from 'sweetalert2'
const sweetAlertStore = defineStore('sweetAlertStore', {
  state: () => {
    return {}
  },

  actions: {
    swalToastTopEnd (message) {
      return new Swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        icon: 'success',
        title: message
      })
    },
    swalError (message) {
      return new Swal({
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'OK',
        toast: true,
        icon: 'error',
        title: message,
        text: '請重新操作，若再次出現請通知管理者，謝謝'
      })
    }
  },
  getters: {}
})
export default sweetAlertStore
