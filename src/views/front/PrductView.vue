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
  <template v-if="product.is_select===1">
    <VForm ref="form" @submit="addToCartBtn">
            <div v-if="groupProduct.select1" class="mb-2 radioBox">
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
                class="form-select" aria-label="Default select"
                rules="required"
                v-model="selectedOption1"
              >
              <template v-for:="(option) in groupProduct.select1">
                <option :value="option">{{option}}</option>
              </template>
              </Field>
            </div>

            <div v-if="groupProduct.select2" class="mb-2 radioBox">
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
                class="form-select" aria-label="Default select"
                rules="required"
                v-model="selectedOption2"
              >
              <template v-for:="(option) in groupProduct.select2">
                <option :value="option">{{option}}</option>
              </template>
              </Field>
            </div>
            <div v-if="groupProduct.iceLevel" class="mb-2 radioBox">
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
                class="form-select" aria-label="Default select"
                rules="required"
                v-model="iceLevel"
              >
              <template v-for="(option, index) in drinkType" :key="index">
                <option :value="option">{{option}}</option>
              </template>
              </Field>
            </div>
            <div class="modal-footer justify-content-between">
          <button type="submit" class="btn btn-secondary">放入購物車</button>
        </div>
          </VForm>
  </template>
  <template v-if="product.is_select!==1">
    <button type="btn" class="btn btn-secondary" @click="addToCartBtn">放入購物車</button>
  </template>
        </div>
      </div>
      {{ product }}
    </section>
  </main>
</template>
<script>
import LoadingDesign from '@/components/LoadingDesign.vue'
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { Field, Form, ErrorMessage } from 'vee-validate'
import { mapActions } from 'pinia'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: [],
      products: [],
      groupProduct: {},
      isLoading: true,
      title: '鮮堡美食',
      drinkType: ['冰', '冷(去冰)', '溫'],
      message: '',
      selectedOption1: '',
      selectedOption2: '',
      iceLevel: '冰'
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
          this.isSetProdcuct()
        })
        .catch((err) => {
          this.swalError(err.response.data.message)
        })
    },
    getAllProducts () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
          this.filterSetProduct(res.data.products)
        })
    },
    isSetProdcuct () {
      if (this.product.is_select === 1) {
        this.getAllProducts()
      } else {
        this.isLoading = false
      }
    },
    filterSetProduct (products) {
      const setProducts = products.filter(product => product.mainTitle === this.product.mainTitle)
      this.groupProduct = Object.values(this.gropuSetProduct(setProducts))[0]
      this.isLoading = false
    },
    gropuSetProduct (setProducts) {
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
        return (p.mainTitle === this.product.mainTitle &&
                    p.select1 === this.selectedOption1 &&
                    p.select2 === this.selectedOption2 &&
                    p.iceLevel === this.iceLevel)
      })
      return findProduct.id
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
    }
  },
  components: {
    LoadingDesign,
    ErrorMessage,
    VForm: Form,
    Field
  }
}
</script>
