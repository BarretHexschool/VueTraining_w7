<template>
    <div class="container">
      <div class="row py-3">
        <div>
          <h2>
            產品列表
            <button @click="openModal('new')" type="button" class="btn btn-primary">
              新增產品
            </button>
          </h2>
          <admin-product-list :products="products" :open-modal="openModal" :change-state="changeState"></admin-product-list>
          <div class="d-flex justify-content-center">
          <admin-pagination :page-data="pageData" :get-products="getProducts"></admin-pagination>
        </div>
        </div>
      </div>
    </div>
    <!-- 產品編輯 Modal -->
    <admin-product-modal :temp-product="tempProduct" :is-new="isNew" :update-product="updateProduct"></admin-product-modal>
    <!-- 產品刪除 Modal -->
    <admin-del-product-modal :temp-product="tempProduct" :del-product="delProduct"></admin-del-product-modal>
  </template>

<script>
import AdminProductList from '../../components/AdminProductList.vue'
import AdminProductModal from '../../components/AdminProductModal.vue'
import AdminDelProductModal from '../../components/AdminDelProductModal.vue'
import AdminPagination from '../../components/AdminPagination.vue'
import Modal from 'bootstrap/js/dist/modal.js'

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
      pageData: {}
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
          alert(err.response.data.message)
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
          alert(res.data.message)
          productModalElement.hide()
          this.getProducts()
        })
        .catch(err => {
          alert(err.response.data.message)
        })
    },
    delProduct () {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${this.tempProduct.id}`)
        .then(res => {
          alert(res.data.message)
          delProductModalElement.hide()
          this.getProducts()
        }
        )
        .catch(err => {
          alert(err.responsel.data.message)
          delProductModalElement.hide()
        })
    },
    changeState (data) {
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/product/${data.id}`, { data })
        .then(res => {
          console.log(res)
          alert(res.data.message)
          this.getProducts()
        })
        .catch(err => {
          alert(err.response.data.message)
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
    }

  },
  components: {
    AdminProductList, AdminProductModal, AdminDelProductModal, AdminPagination
  },
  mounted () {
    this.getProducts()
    // 建立model實體
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
