<template>
  <LoadingDesign :is-Loading="isLoading"/>
  <main class="w-100 position-relative z-2">
    <section class="common-hero container">
      <!-- progress bar -->
      <FrontCartBar :currentState="'訂購資料'" />
      <div class="row row-cols-1 row-cols-lg-2 p-1 pb-6">
        <div class="col mt-2 mt-lg-5">
          <FrontCart />
        </div>
        <div class="col">
          <div
            class="row justify-content-center bg-third rounded rounded-4 rounded-lg-6 p-4 p-md-7"
          >
            <h2 class=" mb-2 mb-lg-3">請輸入訂購資料</h2>
            <VForm ref="form" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
                <label for="desk" class="form-label">桌次</label>
                <Field
                  id="desk"
                  name="desk"
                  as="select"
                  class="form-select"
                  :class="{ 'is-invalid': errors['桌號'] }"
                  v-model="form.user.address"
                >
                  <option value="take-out">外帶</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </Field>
                <ErrorMessage
                  name="桌號"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">訂購人姓名*</label>
                <Field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></Field>
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">聯絡電話*</label>
                <Field
                  id="tel"
                  name="電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  rules="required|min:8|max:10"
                  v-model="form.user.tel"
                ></Field>
                <ErrorMessage
                  name="電話"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">備註留言</label>
                <textarea
                  id="message"
                  name="message"
                  class="form-control"
                  placeholder="如果有任何餐點製作需求，您可在此留言，我們將盡量配合。"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-center w-100">
                <button type="submit" class="btn btn-danger w-100">送出訂單</button>
              </div>
            </VForm>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import cartStore from '@/stores/useCartStore'
import sweetAlert from '@/stores/useSweetAlertStore'
import FrontCart from '@/components/FrontCart.vue'
import LoadingDesign from '@/components/LoadingDesign.vue'
import FrontCartBar from '@/components/FrontCartBar.vue'
import { Field, Form, ErrorMessage } from 'vee-validate'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      isLoading: true,
      form: {
        user: {
          name: '',
          tel: '',
          address: 'take-out',
          email: 'no-email'
        },
        message: '',
        orderStatus: ''
      }
    }
  },
  methods: {
    createOrder () {
      const order = this.form
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, { data: order })
        .then((res) => {
          const { orderId } = res.data
          this.$swal(res.data.message)
          this.$refs.form.resetForm()
          this.$router.push(`/cartfinal/${orderId}`)
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    ...mapActions(cartStore, ['getCartData']),
    ...mapActions(sweetAlert, ['swalError', 'swalToastTopEnd'])
  },
  computed: {
    ...mapState(cartStore, ['carts', 'finalTotal'])
  },
  components: {
    FrontCart,
    LoadingDesign,
    FrontCartBar,
    ErrorMessage,
    VForm: Form,
    Field
  },
  mounted () {
    this.getCartData('CartView')
    this.isLoading = false
    document.title = '鮮堡漢堡 文化店 | 購物車'
  }
}
</script>
