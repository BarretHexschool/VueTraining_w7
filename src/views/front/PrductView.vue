<template>
  <LoadingDesign :is-loading="isLoading"></LoadingDesign>

  <main class="w-100 pb-3">
    <section class="common-hero container">
      <div class="row row-cols-1 row-cols-lg-2">
        <img :src="product.imageUrl" class="img-fluid" alt="" />
        <div>
          <div class="">
    <h2 class="mb-2">{{ product.mainTitle }}</h2>
    <h3>{{ product.description }}</h3>
    <p>{{ product.price }} 元</p>
  </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import LoadingDesign from '@/components/LoadingDesign.vue'
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { mapActions } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: [],
      isLoading: true,
      title: '鮮堡美食'
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product
          this.title = this.product.mainTitle
          this.isLoading = false
        })
        .catch((err) => {
          this.swalError(err.response.data.message)
        })
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  mounted () {
    this.getProduct()
    document.title = `鮮堡漢堡 文化店 | ${this.title} `
  },
  components: {
    LoadingDesign
  }
}
</script>
