<template>
  <ul class="list-unstyled mb-1 row row-cols-1 row-cols-md-2">
    <li
      class="col mb-2"
      data-aos="fade-up"
      data-aos-easing="liner"
      data-aos-delay="30"
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <div
        class="position-relative bg-secondary rounded rounded-3 p-2 porductList"
      >
        <button
          type="button"
          class="btn position-absolute z-2 btn-porduct-add"
          @click="openModal(product)"
        ></button>
        <div class="d-flex flex-column justify-content-between h-100">
        <div class="d-flex align-items-start align-items-lg-center h-100">
          <div class="box-img me-2 ratio ratio-1x1 product-img">
            <ProgressiveImage
            v-if="product.imageUrl"
              :src="`${product.imageUrl}?width=200`"
              class="img-fluid object-top"
              :alt="  product.mainTitle "
            />
          </div>
          <div
            class="box-word w-100 d-flex flex-column justify-content-between"
          >
            <div class="product-word ls-15">
                <h3>{{ product.mainTitle }}</h3>
                <p class="fs-6 ms-lg-2">{{ product.description }}</p>
            </div>
            <div
              class="d-flex justify-content-between align-items-start flex-column flex-lg-row align-content-end align-items-end"
            >
              <div class="product-price text-end mb-1 mb-lg-0">
                <div class="fs-5" v-if="product.price == product.origin_price">
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
              <div class="py-1 px-2 bg-third rounded-5 fs-6 d-none d-lg-flex">
                <span class="material-symbols-rounded me-1">add_box</span
                >加入購物車
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex justify-content-center py-1 px-2 mt-2 bg-third rounded-5 fs-6 d-lg-none"
        >
          <span class="material-symbols-rounded me-1">add_box</span>加入購物車
        </div>
        </div>

      </div>
    </li>
  </ul>
</template>
<script>
import cartStore from '@/stores/useCartStore'
import { mapActions } from 'pinia'
export default {
  name: 'FrontProductsList',
  props: ['openModal', 'products', 'category'],
  computed: {
    filteredProducts () {
      return this.filterProducts(this.products)
    }
  },
  methods: {
    filterProducts (products) {
      if (this.category === '精選套餐') {
        const setProducts = products.filter(product => product.category === this.category)
        return this.gropuSetProducts(setProducts)
      } else {
        return products.filter(product => product.category === this.category)
      }
    },
    gropuSetProducts (setProducts) {
      const setGroup = {}
      setProducts.forEach((item) => {
        const { mainTitle, select1, select2 } = item
        if (setGroup[mainTitle] === undefined) {
          setGroup[mainTitle] = {
            ...item
          }
        } else {
          if (select1 !== undefined) {
            if (typeof (setGroup[mainTitle].select1) === 'string') {
              if (setGroup[mainTitle].select1 !== select1) {
                setGroup[mainTitle].select1 = [setGroup[mainTitle].select1, select1]
              }
            } else {
              if (!this.checkHas(setGroup[mainTitle].select1, select1)) {
                setGroup[mainTitle].select1 = [...setGroup[mainTitle].select1, select1]
              }
            }
          }

          if (typeof (setGroup[mainTitle].select2) === 'string') {
            if (setGroup[mainTitle].select2 !== select2) {
              setGroup[mainTitle].select2 = [setGroup[mainTitle].select2, select2]
            }
          } else {
            if (!this.checkHas(setGroup[mainTitle].select2, select2)) {
              setGroup[mainTitle].select2 = [...setGroup[mainTitle].select2, select2]
            }
          }
        }
      })
      return (setGroup)
    },
    checkHas (arr, find) {
      return arr.includes(find)
    },

    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>
