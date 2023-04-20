<template>
    <div class="container">
      <div class="row py-3">
        <div>
          <div class="d-flex align-items-center justify-content-between">
            <h3 class="ls-2">最新消息管理</h3>
            <button @click="openModal('new')" type="button" class="btn btn-primary">
              新增消息
            </button>
          </div>
          <AdminNewsList :articles="articles" :open-modal="openModal" :change-state="changeState"></AdminNewsList>
          <div class="d-flex justify-content-center">
          <AdminPagination :page-data="pageData" :get-datas="getArticles"></AdminPagination>
        </div>
        </div>
      </div>
    </div>
    <!-- 產品編輯 Modal -->
    <AdminNewsModal :temp-article="tempArticle" :is-new="isNew" :update-article="updateArticle"></AdminNewsModal>
    <!-- 產品刪除 Modal -->
    <AdminDelProductModal :temp-article="tempArticle" :del-article="delArticle"></AdminDelProductModal>
  </template>

<script>
import AdminNewsList from '../../components/AdminNewsList.vue'
import AdminNewsModal from '../../components/AdminNewsModal.vue'
import AdminDelProductModal from '../../components/AdminDelNewsModal.vue'
import AdminPagination from '../../components/AdminPagination.vue'
import Modal from 'bootstrap/js/dist/modal.js'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { mapActions } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

let articleModalElement = ''
let delArticleModalElement = ''
export default {
  data () {
    return {
      articles: [],
      tempArticle: {
      },
      isNew: false,
      pageData: {}
    }
  },
  methods: {
    getArticles (page = 1) {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/articles?page=${page}`)
        .then(res => {
          this.articles = res.data.articles
          this.pageData = res.data.pagination
        })
        .catch(err => {
          this.loginCheckError(err.response.data.message)
        })
    },
    productDetail (product) {
      this.tempAtricle = product
    },
    updateArticle () {
      let urlStr = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/article`
      let type = 'post'
      this.tempArticle.content = '首頁最新消息'
      if (this.isNew) {
        this.tempArticle.create_at = Date.now()
        this.tempArticle.author = 'Admin'
        this.tempArticle.isPublic = true
      }
      if (!this.isNew) {
        urlStr = `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`
        type = 'put'
      }
      this.$http[type](urlStr, { data: this.tempArticle })
        .then(res => {
          this.swalToastTopEnd(res.data.message)
          articleModalElement.hide()
          this.getArticles()
        })
        .catch(err => {
          this.swalError(err.response.data.message)
        })
    },
    delArticle () {
      this.$http.delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/article/${this.tempArticle.id}`)
        .then(res => {
          this.swalToastTopEnd(res.data.message)
          delArticleModalElement.hide()
          this.getArticles()
        }
        )
        .catch(err => {
          this.swalError(err.response.data.message)
          delArticleModalElement.hide()
        })
    },
    changeState (data) {
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/article/${data.id}`, { data })
        .then(res => {
          this.swalToastTopEnd(res.data.message)
          this.getArticles()
        })
        .catch(err => {
          this.swalError(err.response.data.message)
        })
    },
    createImages () {
      this.tempAtricle.imagesUrl = []
      this.tempAtricle.imagesUrl.pus('')
    },
    openModal (modalStatus, item) {
      if (modalStatus === 'new') {
        this.tempArticle = {
        }
        this.isNew = true
        articleModalElement.show()
      } else if (modalStatus === 'edit') {
        this.tempArticle = { ...item }
        this.isNew = false
        articleModalElement.show()
      } else if (modalStatus === 'delete') {
        this.tempArticle = { ...item }
        delArticleModalElement.show()
      }
    },
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd', 'loginCheckError'])

  },
  components: {
    AdminNewsList, AdminNewsModal, AdminDelProductModal, AdminPagination
  },
  mounted () {
    this.getArticles()
    articleModalElement = new Modal(document.querySelector('#productModal'), {
      keyboard: false
    })
    delArticleModalElement = new Modal(document.querySelector('#delProductModal'), {
      keyboard: false
    })
    document.title = '最新消息管理 | 鮮堡漢堡 文化店'
  }
}
</script>
