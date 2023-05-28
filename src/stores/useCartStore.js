import { defineStore } from 'pinia'
import axios from 'axios'
import router from '../router'
import sweetAlertStore from './useSweetAlertStore'
import Swal from 'sweetalert2'
const sweetAlert = sweetAlertStore()
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
const cartStore = defineStore('cart', {
  state: () => {
    return {
      carts: [],
      finalTotal: null,
      cartDetailNum: null,
      actionPage: null
    }
  },

  actions: {
    getActionPage () {
      this.actionPage = router.options.history.location
    },
    getCartData (actionPage) {
      axios
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.getActionPage()
          this.carts = res.data.data.carts
          this.finalTotal = res.data.data.final_total
          if (this.actionPage === '/cart') {
            this.cartDataExist()
          }
        })
        .catch((err) => {
          sweetAlert.swalError(err)
        })
    },
    cartDataExist () {
      if (this.carts.length === 0) {
        router.push('/products')
        Swal.fire({
          icon: 'info',
          showConfirmButton: false,
          title: 'Oops! 你還沒選任何東西，來去挑想吃的吧~',
          timer: 3000
        })
      }
    },
    deleteOneCart (cartId = null) {
      axios
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cartId}`)
        .then((res) => {
          sweetAlert.swalToastTopEnd(res.data.message)
          this.getCartData()
        })
        .catch((err) => {
          sweetAlert.swalError(err)
        })
    },
    updateCart (cart) {
      const { productId, qty } = cart
      const data = {
        productId,
        qty
      }
      this.loadingItem = cart.id
      axios
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`, {
          data
        })
        .then((res) => {
          sweetAlert.swalToastTopEnd(res.data.message)
          this.loadingItem = ''
          this.getCartData()
        })
        .catch((err) => {
          sweetAlert.swalError(err)
        })
    },
    swalClearAllCart () {
      Swal.fire({
        title: '真的要清掉已選好商品嗎？',
        text: '清除後，只能重新挑選商品，無法復原唷 :(',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '堅決清空重來',
        cancelButtonText: '先不用'
      }).then((result) => {
        if (result.isConfirmed) {
          this.cleanAllCart()
        }
      })
    },
    cleanAllCart () {
      axios
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          Swal.fire('購物車已清空，重新選新的餐點吧！')
          this.getCartData()
        })
        .catch((err) => {
          sweetAlert.swalError(err)
        })
    },
    addToCart (id, qty = 1, message = '') {
      const data = {
        product_id: id,
        qty,
        message
      }
      axios
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          sweetAlert.swalToastTopEnd(res.data.message)
          this.getCartData()
        })
        .catch((err) => {
          sweetAlert.swalError(err)
        })
    }
  },
  getters: {}
})
export default cartStore
