<template>
      <ul class="list-unstyled mb-1 row row-cols-1 row-cols-md-2">
        <li class="col mb-2" data-aos="fade-up" data-aos-easing="liner"   data-aos-delay="30" v-for="product in filteredProducts" :key="product.id">
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
</template>
<script>

export default {
  name: 'FrontProductsList',
  props: {
    addToCart: Function,
    products: {
      type: Array,
      default: () => []
    },
    category: {
      type: String,
      default: 'all'
    }
  },
  computed: {
    filteredProducts () {
      return this.filterProducts(this.products)
    }
  },
  methods: {
    filterProducts (products) {
      if (this.category === 'all') {
        return products
      } else {
        return products.filter(product => product.category === this.category)
      }
    }
  }
}
</script>
