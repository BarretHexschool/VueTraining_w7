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
          <VForm ref="form" @submit="addToCartBtn">
            <div v-if="product.select1" class="mb-2 radioBox">
              <p class="mb-0">主食選擇：</p>
              <ErrorMessage name="selectedOption1"
                ><p class="invalid-feedback d-block my-0">
                  *請選擇您所想要的主食
                </p></ErrorMessage
              >

              <Field
                id="selectedOption1"
                name="selectedOption1"
                as="select"
                class="form-select"
                aria-label="Default select"
                rules="required"
                v-model="selectedOption1"
              >
                <template v-for:="option in product.select1">
                  <option :value="option">{{ option }}</option>
                </template>
              </Field>
            </div>

            <div v-if="product.select2" class="mb-2 radioBox">
              <p class="mb-0">飲料選擇：</p>
              <ErrorMessage name="selectedOption2"
                ><p class="invalid-feedback d-block my-0">
                  *請問你要喝什麼？
                </p></ErrorMessage
              >
              <Field
                id="selectedOption2"
                name="selectedOption2"
                as="select"
                class="form-select"
                aria-label="Default select"
                rules="required"
                v-model="selectedOption2"
              >
                <template v-for:="option in product.select2">
                  <option :value="option">{{ option }}</option>
                </template>
              </Field>
            </div>
            <div v-if="product.iceLevel" class="mb-2 radioBox">
              <p class="mb-0">冰冷熱選擇：</p>
              <ErrorMessage name="iceLevel"
                ><p class="invalid-feedback d-block my-0">
                  *請問要冰的？還是熱的？
                </p></ErrorMessage
              >
              <Field
                id="iceLevel"
                name="iceLevel"
                as="select"
                class="form-select"
                aria-label="Default select"
                rules="required"
                v-model="iceLevel"
              >
                <template v-for="(option, index) in drinkType" :key="index">
                  <option :value="option">{{ option }}</option>
                </template>
              </Field>
            </div>
            <div class="modal-footer justify-content-between">
              <button
                type="button"
                class="btn btn-danger"
                @click="$router.back(-1)"
              >
                回上頁
              </button>
              <button type="submit" class="btn btn-secondary">
                放入購物車
              </button>
            </div>
          </VForm>
        </div>
      </div>
        <Swiper
        :breakpoints="swiperBreakpoints"
        :navigation="false"
        :loop="true"
        :autoplay="true"
        :modules="modules"
        class="mySwiper"
        style="padding-top: 120px"
        >
        <SwiperSlide
          v-for:="product in showProducts"
          class="card position-relative h-100  border-0"
        >
          <RouterLink :to="`/product/${product.id}`">
            <div class="card position-relative border border-2 border-secondary" style="margin-top: 120px">
              <img
                :src="product.imageUrl"
                class="card-img-top position-absolute top-0 start-50 translate-middle img-fluid"
                :alt="product.title"
              />

              <div class="card-body">
                <p class="text-black">{{ product.mainTitle }}</p>
                <div class="priceBox text-black">
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
              </div>
            </div>
          </RouterLink>
        </SwiperSlide>
      </Swiper>

    </section>
  </main>
</template>
<script>
import LoadingDesign from '@/components/LoadingDesign.vue'
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { Field, Form, ErrorMessage } from 'vee-validate'
import { mapActions } from 'pinia'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: [],
      products: [],
      showProducts: [],
      isLoading: true,
      title: '鮮堡美食',
      drinkType: ['冰', '冷(去冰)', '溫'],
      message: '',
      selectedOption1: '',
      selectedOption2: '',
      iceLevel: '冰',
      swiperBreakpoints: {
        0: {
          slidesPerView: 1.5,
          spaceBetween: 10
        },
        375: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        576: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50
        }
      }
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
          this.selectedOption1 = this.product.select1
          this.selectedOption2 = this.product.select2
          this.getAllProducts()
        })
        .catch((err) => {
          this.swalError(err.response.data.message)
        })
    },
    getAllProducts () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = Object.values(
            this.gropuSetProducts(res.data.products)
          )
          this.showProducts = this.randomArray()
          this.checkIsSet()
          this.isLoading = false
        })
    },
    checkIsSet () {
      if (this.product.is_select === 1) {
        this.product = this.products.find((item) => {
          return item.mainTitle === this.title
        })
      }
    },
    gropuSetProducts (setProducts) {
      const setGroup = {}
      setProducts.forEach((item) => {
        const { mainTitle, select1, select2 } = item
        if (item.is_select === 1) {
          if (setGroup[mainTitle] === undefined) {
            setGroup[mainTitle] = {
              ...item
            }
          } else {
            if (select1 !== undefined) {
              if (typeof setGroup[mainTitle].select1 === 'string') {
                if (setGroup[mainTitle].select1 !== select1) {
                  setGroup[mainTitle].select1 = [
                    setGroup[mainTitle].select1,
                    select1
                  ]
                }
              } else {
                if (!this.checkHas(setGroup[mainTitle].select1, select1)) {
                  setGroup[mainTitle].select1 = [
                    ...setGroup[mainTitle].select1,
                    select1
                  ]
                }
              }
            }

            if (typeof setGroup[mainTitle].select2 === 'string') {
              if (setGroup[mainTitle].select2 !== select2) {
                setGroup[mainTitle].select2 = [
                  setGroup[mainTitle].select2,
                  select2
                ]
              }
            } else {
              if (!this.checkHas(setGroup[mainTitle].select2, select2)) {
                setGroup[mainTitle].select2 = [
                  ...setGroup[mainTitle].select2,
                  select2
                ]
              }
            }
          }
        } else {
          setGroup[mainTitle] = {
            ...item
          }
        }
      })
      return setGroup
    },
    checkHas (arr, find) {
      return arr.includes(find)
    },
    addToCartBtn () {
      let addid = this.product.id
      if (this.product.is_select === 1) {
        addid = this.findId()
      }
      this.addToCart(addid, 1, this.message)
    },
    findId () {
      if (this.selectedOption1 === '') {
        this.selectedOption1 = undefined
      }
      if (this.selectedOption2 === '') {
        this.selectedOption2 = undefined
      }
      if (this.iceLevel === '') {
        this.iceLevel = undefined
      }
      const findProduct = this.products.find((p) => {
        return (
          p.mainTitle === this.product.mainTitle &&
          p.select1 === this.selectedOption1 &&
          p.select2 === this.selectedOption2 &&
          p.iceLevel === this.iceLevel
        )
      })
      return findProduct.id
    },
    shuffleArray (array) {
      for (let i = array.length - 1; i >= 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1))
        const itemAtIndex = array[randomIndex]
        array[randomIndex] = array[i]
        array[i] = itemAtIndex
      }
      return array
    },
    randomArray () {
      const random = this.shuffleArray(this.products)
      if (random.length <= 12) {
        return random
      }
      return random.slice(2, 12)
    },
    ...mapActions(cartStore, ['addToCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  mounted () {
    this.getProduct()
    document.title = `鮮堡漢堡 文化店 | ${this.title} `
  },
  watch: {
    title (newVal) {
      document.title = `${this.title} | 鮮堡漢堡 文化店`
    },
    $route: function () {
      this.getProduct()
    }
  },
  components: {
    LoadingDesign,
    ErrorMessage,
    VForm: Form,
    Field,
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, Navigation]
    }
  }
}
</script>
