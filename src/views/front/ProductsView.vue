<template>
  <LoadingDesign :is-loading="isLoading"></LoadingDesign>

  <main class="w-100 position-relative pb-3">
    <section class="common-hero container">
      <div
        class="hero-banner overflow-hidden rounded rounded-6 rounded-lg-7 mb-3"
      >
        <ProgressiveImage
          src="./assets/images/product-hero.jpg"
          alt=""
          class="img-fluid object-fit-cover object-position-center"
        />
      </div>
      <ul class="list-unstyled overflow-x-auto productsCatalogNav">
        <li>
          <router-link to="/products#selectSet" class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15">嚴選套餐</router-link>
        </li>
        <li>
          <router-link to="/products#hamburger"  class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15">漢堡</router-link>
        </li>
        <li>
          <router-link to="/products#toast"  class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15">現烤吐司</router-link>
        </li>
        <li>
          <router-link to="/products#sandwich"  class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15">現烤總匯</router-link>
        </li>
        <li>
          <router-link to="/products#snack"  class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15">中西式點心</router-link>
        </li>
        <li>
          <router-link to="/products#omelet"  class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15">蛋餅、河粉蛋餅</router-link>
        </li>
      </ul>
      <h2
        class="ls-2 mb-1 text-sm-start text-center"
        data-aos="fade-up"
        data-aos-easing="liner"
        data-aos-delay="30"
        id="selectSet"
      >
        嚴選套餐
      </h2>
      <FrontProductsList
        :open-modal="openModal"
        :products="products"
        category="精選套餐"
      ></FrontProductsList>
      <h2
        class="ls-2 mb-1 text-sm-start text-center"
        data-aos="fade-up"
        data-aos-easing="liner"
        data-aos-delay="30"
        id="hamburger"
      >
        漢堡
      </h2>
      <FrontProductsList
      :open-modal="openModal"
        :products="products"
        category="漢堡"
      ></FrontProductsList>
      <h2
        class="ls-2 mb-1 text-sm-start text-center"
        data-aos="fade-up"
        data-aos-easing="liner"
        data-aos-delay="30"
        id="toast"
      >
        現烤吐司
      </h2>
      <FrontProductsList
      :open-modal="openModal"
        :products="products"
        category="現烤三明治"
      ></FrontProductsList>
      <h2
        class="ls-2 mb-1 text-sm-start text-center"
        data-aos="fade-up"
        data-aos-easing="liner"
        data-aos-delay="30"
        id="sandwich"
      >
        現烤總匯
      </h2>
      <FrontProductsList
      :open-modal="openModal"
        :products="products"
        category="現烤總匯"
      ></FrontProductsList>
      <h2
        class="ls-2 mb-1 text-sm-start text-center"
        data-aos="fade-up"
        data-aos-easing="liner"
        data-aos-delay="30"
        id="snack"
      >
        中西式點心
      </h2>
      <FrontProductsList
      :open-modal="openModal"
        :products="products"
        category="中西式點心"
      ></FrontProductsList>
      <h2
        class="ls-2 mb-1 text-sm-start text-center"
        data-aos="fade-up"
        data-aos-easing="liner"
        data-aos-delay="30"
        id="omelet"
      >
        蛋餅、河粉蛋餅
      </h2>
      <FrontProductsList
      :open-modal="openModal"
        :products="products"
        category="蛋餅、河粉蛋餅"
      ></FrontProductsList>
      <FrontProductModal :temp-product="tempProduct" :products="products" :product-modal-element="productModalElement"></FrontProductModal>
    </section>
  </main>
</template>
<script>
import FrontProductsList from '@/components/FrontProductsList.vue'
import FrontProductModal from '@/components/FrontProductModal.vue'
import LoadingDesign from '@/components/LoadingDesign.vue'
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import Modal from 'bootstrap/js/dist/modal.js'
import { mapActions } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      isLoading: true,
      tempProduct: {
      },
      productModalElement: ''
    }
  },
  methods: {
    getProduct () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.isLoading = false
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    openModal (item) {
      this.tempProduct = { ...item }
      this.productModalElement.show()
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  mounted () {
    document.title = '鮮堡漢堡 文化店 | 美味鮮堡'
    this.getProduct()
    this.productModalElement = new Modal(document.querySelector('#productModal'), {
      keyboard: false
    })
    this.productModalElement.hide()
  },
  components: {
    LoadingDesign,
    FrontProductModal,
    FrontProductsList
  }
}
</script>
