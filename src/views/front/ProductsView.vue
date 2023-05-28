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
        <li v-for="(item, index) in categorys" :key="index">
          <RouterLink
            :to="`/products#${item.english}`"
            class="btn btn-secondary rounded-4 px-md-4 p-2 me-2 text-nowrap ls-15"
            >{{ item.chinese }}</RouterLink
          >
        </li>
      </ul>
      <template v-for="(item, index) in categorys" :key="index">
        <h2
          class="ls-2 mb-1 text-sm-start text-center"
          data-aos="fade-up"
          data-aos-easing="liner"
          data-aos-delay="30"
          :id = item.english
        >
          {{item.chinese}}
        </h2>
        <FrontProductsList
          :open-modal="openModal"
          :products="products"
          :category=item.chinese
        ></FrontProductsList>
      </template>
      <FrontProductModal
        :temp-product="tempProduct"
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
      productModalElement: '',
      categorys: [{
        english: 'selectSet',
        chinese: '精選套餐'
      }, {
        english: 'hamburger',
        chinese: '漢堡'
      }, {
        english: 'toast',
        chinese: '現烤吐司'
      }, {
        english: 'sandwich',
        chinese: '現烤總匯'
      }, {
        english: 'snack',
        chinese: '中西式點心'
      }, {
        english: 'omelet',
        chinese: '蛋餅、河粉蛋餅'
      }]
    }
  },
  methods: {
    openModal (item) {
      this.tempProduct = { ...item }
      this.productModalElement.show()
    },
    ...mapActions(useProductStore, ['loadingStatue']),
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  computed: {
    ...mapState(useProductStore, ['products', 'groupProducts', 'isLoading'])
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
    this.loadingStatue(false)
  },
  components: {
    LoadingDesign,
    FrontProductModal,
    FrontProductsList
  }
}
</script>
