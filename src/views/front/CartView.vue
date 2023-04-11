<template>
  <main class="w-100 position-relative z-2">
    <section class="common-hero container">
      <!-- progress bar -->
      <div class="position-relative m-5">
        <div class="progress bg-third" style="height: 2px">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            aria-label="Progress"
            style="width: 33.33%"
            aria-valuenow="33.33"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-danger rounded-pill text-white"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-0 translate-middle pt-6 fs-7 fw-bold"
        >
          選擇餐點
        </p>
        <button
          type="button"
          class="position-absolute top-0 start-33 translate-middle btn btn-sm btn-danger rounded-pill text-white"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-33 translate-middle pt-6 fs-7 fw-bold"
        >
          訂購資料
        </p>
        <button
          type="button"
          class="position-absolute top-0 start-66 translate-middle btn btn-sm btn-third rounded-pill text-white"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-66 translate-middle pt-6 fs-7 text-secondary"
        >
        餐點準備中
        </p>
        <button
          type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-third rounded-pill"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-100 translate-middle pt-6 fs-7 text-secondary text-nowrap"
        >
          完成取餐
        </p>
      </div>
      <div class="row row-cols-1 row-cols-lg-2 p-1 pb-6">
        <div class="col">
          <front-cart></front-cart>
        </div>
        <div class="col">
          <div
            class="row justify-content-center bg-third rounded rounded-4 rounded-lg-6 p-4 p-md-7"
          >
            <h2>請輸入訂購資料</h2>
            <v-form ref="form" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
                <label for="desk" class="form-label">桌次</label>
                <v-field
                  name="desk"
                  as="select"
                  class="form-select"
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
                </v-field>
              </div>
              <div class="mb-3">
                <label for="name" class="form-label">訂購人姓名</label>
                <v-field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></v-field>
                <error-message
                  name="姓名"
                  class="invalid-feedback"
                ></error-message>
              </div>
              <div class="mb-3">
                <label for="tel" class="form-label">聯絡電話</label>
                <v-field
                  id="tel"
                  name="電話"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['電話'] }"
                  placeholder="請輸入電話"
                  rules="required|min:8|max:10"
                  v-model="form.user.tel"
                ></v-field>
                <error-message
                  name="電話"
                  class="invalid-feedback"
                ></error-message>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">備註留言</label>
                <textarea
                  id="message"
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
            </v-form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import FrontCart from '@/components/FrontCart.vue'
import sweetAlert from '@/stores/useSweetAlertStore'
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/useCartStore'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      productID: '',
      finalTotal: '',
      form: {
        user: {
          name: '',
          tel: '',
          address: 'take-out',
          email: 'no-email'
        },
        message: '',
        orderStatus: ''
      },
      visible: false
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
    ...mapState(cartStore, ['carts'])
  },
  components: {
    FrontCart
  },
  mounted () {
    this.getCartData('CartView')
    this.visible = true
    document.title = '鮮堡漢堡 文化店 | 購物車'
  }
}
</script>
