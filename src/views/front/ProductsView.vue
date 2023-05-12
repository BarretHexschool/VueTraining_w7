<template>
  <LoadingDesign :is-loading="isLoading" />
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
          <RouterLink
            to="/products#selectSet"
            class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"
            >嚴選套餐</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/products#hamburger"
            class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"
            >漢堡</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/products#toast"
            class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"
            >現烤吐司</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/products#sandwich"
            class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"
            >現烤總匯</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/products#snack"
            class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"
            >中西式點心</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/products#omelet"
            class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"
            >蛋餅、河粉蛋餅</RouterLink
          >
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
        category="現烤吐司"
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
      <FrontProductModal
        :temp-product="tempProduct"
        :products="products"
        :product-modal-element="productModalElement"
      />
    </section>
  </main>
</template>
<script>
import FrontProductsList from '@/components/FrontProductsList.vue'
import FrontProductModal from '@/components/FrontProductModal.vue'
import LoadingDesign from '@/components/LoadingDesign.vue'
import { useProductStore } from '@/stores/useFrontProducts'
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import Modal from 'bootstrap/js/dist/modal.js'
import { mapActions, mapState } from 'pinia'
export default {
  data () {
    return {
      tempProduct: {},
      productModalElement: ''
    }
  },
  methods: {
    openModal (item) {
      this.tempProduct = { ...item }
      this.productModalElement.show()
    },
    ...mapActions(useProductStore, ['getProducts']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  computed: {
    ...mapState(useProductStore, ['products', 'isLoading'])
  },
  mounted () {
    document.title = '鮮堡漢堡 文化店 | 美味鮮堡'
    this.productModalElement = new Modal(
      document.querySelector('#productModal'),
      {
        keyboard: false
      }
    )
    this.productModalElement.hide()
    this.$router.push(this.$route.fullPath)
    if (document.readyState === 'complete') {
      this.$router.push(this.$route.fullPath)
    }
  },
  components: {
    LoadingDesign,
    FrontProductModal,
    FrontProductsList
  }
}
</script>
