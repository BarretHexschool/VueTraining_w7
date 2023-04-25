<template>
    <div class="container">
      <div class="row py-3">
        <div>
          <div class="d-flex align-items-center justify-content-between">
            <h3 class="ls-2">產品管理</h3>
            <button @click="openModal('new')" type="button" class="btn btn-primary">
              新增產品
            </button>
          </div>
          <AdminProductList :products="products" :open-modal="openModal" :change-state="changeState"></AdminProductList>
          <div class="d-flex justify-content-center">
          <AdminPagination :page-data="pageData" :get-datas="getProducts"></AdminPagination>
        </div>
        </div>
      </div>
    </div>
    <!-- 產品編輯 Modal -->
    <AdminProductModal :temp-product="tempProduct" :is-new="isNew" :update-product="updateProduct"></AdminProductModal>
    <!-- 產品刪除 Modal -->
    <AdminDelProductModal :temp-product="tempProduct" :del-product="delProduct"></AdminDelProductModal>
  </template>

<script>
import AdminProductList from '../../components/AdminProductList.vue'
import AdminProductModal from '../../components/AdminProductModal.vue'
import AdminDelProductModal from '../../components/AdminDelProductModal.vue'
import AdminPagination from '../../components/AdminPagination.vue'
import Modal from 'bootstrap/js/dist/modal.js'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { mapActions } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

let productModalElement = ''
let delProductModalElement = ''
export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      pageData: {
      },
      page: 1
    }
  },
  methods: {
    getProducts (page = 1) {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/products?page=${page}`)
        .then(res => {
          this.products = res.data.products
          this.pageData = res.data.pagination
        })
        .catch(err => {
          this.loginCheckError(err.response.data.message)
        })
    },
    productDetail (product) {
      this.tempProduct = product
    },
    updateProduct () {
      let urlStr = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product`
      let type = 'post'

      if (!this.isNew) {
        urlStr = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`
        type = 'put'
      }
      this.$http[type](urlStr, { data: this.tempProduct })
        .then(res => {
          this.swalToastTopEnd(res.data.message)
          productModalElement.hide()
          this.getProducts()
        })
        .catch(err => {
          this.swalError(err.response.data.message)
        })
    },
    delProduct () {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then(res => {
          this.swalToastTopEnd(res.data.message)
          delProductModalElement.hide()
          this.getProducts()
        }
        )
        .catch(err => {
          this.swalError(err.response.data.message)
          delProductModalElement.hide()
        })
    },
    changeState (data) {
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${data.id}`, { data })
        .then(res => {
          this.swalToastTopEnd(res.data.message)
          this.getProducts()
        })
        .catch(err => {
          this.swalError(err.response.data.message)
        })
    },
    createImages () {
      this.tempProduct.imagesUrl = []
      this.tempProduct.imagesUrl.pus('')
    },
    openModal (modalStatus, item) {
      if (modalStatus === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        productModalElement.show()
      } else if (modalStatus === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        productModalElement.show()
      } else if (modalStatus === 'delete') {
        this.tempProduct = { ...item }
        delProductModalElement.show()
      }
    },
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd', 'loginCheckError'])

  },
  components: {
    AdminProductList, AdminProductModal, AdminDelProductModal, AdminPagination
  },
  mounted () {
    this.getProducts()
    productModalElement = new Modal(document.querySelector('#productModal'), {
      keyboard: false
    })
    delProductModalElement = new Modal(document.querySelector('#delProductModal'), {
      keyboard: false
    })
    document.title = '產品管理 | 鮮堡漢堡 文化店'
  }
}
</script>
