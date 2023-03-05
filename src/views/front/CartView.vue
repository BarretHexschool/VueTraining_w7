<template>
              <div class="text-end">
            <button class="btn btn-outline-danger" type="button" @click="cleanAllCart">清空購物車</button>
          </div>
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 150px">數量/單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <template v-if="carts">
                <tr v-for="cart in carts" :key="cart.id">
                  <td>
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="deleteOneCart(cart.id)" :disabled="cart.id === loadingItem">
                      <i class="fas fa-spinner fa-pulse" v-if="loadingItem === cart.id"></i>
                      x
                    </button>
                  </td>
                  <td>
                    {{ cart.product.title }}
                    <div class="text-success" v-if="cart.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td>
                    <!-- {{cart.product}} -->
                    <div class="input-group input-group-sm">
                      <div class="input-group mb-3">
                        <input v-model.number="cart.qty"  @blur="updateCart(cart)"
                        :disabled="cart.id === loadingItem"
                             min="1" type="number" class="form-control">
                        <span class="input-group-text" id="basic-addon2">{{ cart.product.unit }}</span>
                      </div>
                    </div>
                  </td>
                  <td class="text-end">
                    {{ cart.product.price }}
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3" class="text-end">總計</td>
                <td class="text-end">{{ finalTotal }}</td>
              </tr>
              <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{  }}</td>
              </tr> -->
            </tfoot>
          </table>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      loadingStatus: {
        loadingItem: ''
      },
      products: [],
      productID: '',
      carts: {},
      finalTotal: '',
      loadingItem: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      visible: false
    }
  },
  methods: {
    openModal (id) {
      this.productID = id
    },
    getCartData () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.finalTotal = res.data.data.final_total
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    updateCart (cart) {
      // eslint-disable-next-line camelcase
      const { product_id, qty } = cart
      const data = {
        // eslint-disable-next-line camelcase
        product_id,
        qty
      }
      this.loadingItem = cart.id
      this.$http
        .put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cart.id}`, { data })
        .then((res) => {
          alert(res.data.message)
          this.loadingItem = ''
          this.getCartData()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    cleanAllCart () {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          alert(res.data.message)
          this.getCartData()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    // eslint-disable-next-line camelcase
    deleteOneCart (cart_id) {
      // eslint-disable-next-line camelcase
      this.loadingItem = cart_id
      this.$http
        // eslint-disable-next-line camelcase
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cart_id}`)
        .then((res) => {
          alert(res.data.message)
          this.loadingItem = ''
          this.getCartData()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    createOrder () {
      console.log('createOrder')
      const order = this.form
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order`, { data: order })
        .then(res => {
          alert(res.data.message)
          this.$refs.form.resetForm()
          this.getCart()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },

  mounted () {
    this.getCartData()
    this.visible = true
  }
}
</script>
