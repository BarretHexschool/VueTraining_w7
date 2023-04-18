<template>
<LoadingDesign :is-loading="isLoading"></LoadingDesign>

  <main class="w-100 position-relative z-2">
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
      <ul class="list-unstyled mb-0 pb-6 row row-cols-1 row-cols-md-2">
        <li class="col mb-2" data-aos="fade-up" data-aos-easing="liner"   data-aos-delay="60" v-for="product in products" :key="product.id">
          <div
            class="position-relative bg-secondary rounded rounded-3 p-2 porductList"
          >
            <button
              type="button"
              class="btn position-absolute z-2 btn-porduct-add"
              @click="addToCart(product.id, 1)"
            ></button>
            <div class="d-flex align-items-start align-items-lg-center">
              <div class="box-img me-2 ratio ratio-1x1 product-img">
                <ProgressiveImage
                  :src="`${product.imageUrl}?width=200`"
                  class="img-fluid object-top"
                  alt="{{ product.mainTitle }}"
                />
              </div>
              <div
                class="box-word w-100 d-flex flex-column justify-content-between"
              >
                <div class="product-word ls-15">
                  <div v-if="product.is_select">
                    <h3>
                      {{ product.mainTitle }}
                    </h3>
                    <p class="mb-0 fs-6 ms-lg-2">
                      搭配：{{ product.select1 }}、{{ product.select2 }} ({{
                        product.select3
                      }})
                    </p>
                  </div>
                  <div v-else>
                    <h3>{{ product.title }}</h3>
                    <p class="fs-6 ms-lg-2">{{ product.select1 }}</p>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between align-items-start flex-column flex-lg-row align-content-end align-items-end"
                >
                  <div class="product-price text-end mb-1 mb-lg-0">
                    <div
                      class="fs-5"
                      v-if="product.price == product.origin_price"
                    >
                      ${{ product.price }} 元
                    </div>
                    <div
                      class="d-flex flex-column flex-lg-row align-content-end align-items-end me-1"
                      v-else
                    >
                      <del class="fs-7 me-lg-1">
                        原價：$ {{ product.origin_price }} 元</del
                      >
                      <span class="fs-5 fw-bold"
                        >特價： $ {{ product.price }} 元</span
                      >
                    </div>
                  </div>
                  <div
                    class="py-1 px-2 bg-third rounded-5 fs-6 d-none d-lg-flex"
                  >
                    <span class="material-symbols-rounded me-1">add_box</span
                    >加入購物車
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-center py-1 px-2 mt-2 bg-third rounded-5 fs-6 d-lg-none"
            >
              <span class="material-symbols-rounded me-1">add_box</span
              >加入購物車
            </div>
          </div>
        </li>
      </ul>
      <FrontProductsModal />
    </section>
  </main>
</template>
<script>
import FrontProductsModal from '@/components/FrontProductsModal.vue'
import LoadingDesign from '@/components/LoadingDesign.vue'
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { mapActions } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      isLoading: true
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
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  mounted () {
    this.getProduct()
    document.title = '鮮堡漢堡 文化店 | 美味鮮堡'
  },
  components: {
    LoadingDesign,
    FrontProductsModal
  }
}
</script>
