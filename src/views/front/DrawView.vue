<template>
  <main class="w-100 position-relative z-2">
    <section class="common-hero container">
      <h2 class="mb-1ls-2 text-sm-start text-center">
        不知道吃什麼嗎？我也許能幫忙！
      </h2>
      <h1 class="text-secondary text-nowrap font-monospace text-uppercase mb-1">
        make life smoother
      </h1>
    </section>
    <section class="container">
      <div class="row row-cols-1 row-cols-lg-2 p-1 pb-6">
        <div class="col">
          <div
            class="row justify-content-center bg-third rounded rounded-4 rounded-lg-5 p-4 p-md-6"
          >
            <h5>有特別想要的餐點類別嗎？（預設全選）</h5>
            <div class="form-group mb-2">
              <div class="form-check">
                <!-- <input
                  class="form-check-input"
                  type="checkbox"
                  id="check-all"
                  v-model="checkAll"
                  @change="onCheckAllChange"
                /> -->
                <!-- <label class="form-check-label" for="check-all">全選</label> -->
              </div>
              <div
                class="form-check"
                v-for="category in categorys"
                :key="category"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  :id="category"
                  :value="category"
                  v-model="selectedCategorys"
                  @change="watchSelectedCategorys"
                />
                <label class="form-check-label" :for="category">{{
                  category
                }}</label>
              </div>
            </div>
            <button
      class="btn btn-primary"
      @click="startLottery"
    >按我開始，決定今天吃什麼
    </button>
    <div class="mt-5 fs-5" v-if="winner">
      您覺得今天吃 『 {{ winner.mainTitle }} 』 好嗎？
    </div>
            <!-- <v-form ref="form" v-slot="{ errors }" @submit="createOrder">
              <div class="mb-3">
                <label for="desk" class="form-label">桌次</label>
                <v-field
                  name="desk"
                  as="select"
                  class="form-select"
                  v-model="form.user.address"
                >
                  <option selected value="take-out">外帶</option>
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
                  type="text"
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
            </v-form> -->
          </div>
        </div>
        <div class="col">
          <table class="table align-middle w-100 border-secondary p-2">
            <thead>
              <tr class="w-100">
                <th>品名</th>
                <th class="text-nowrap text-center">單價</th>
                <th class="text-nowrap text-center">數量</th>
                <th class="text-nowrap text-center">小計</th>
                <th></th>
              </tr>
            </thead>
            <tbody class="w-100">
              <template v-if="carts">
                <tr v-for="cart in carts" :key="cart.id">
                  <td>
                    {{ cart.product.title }}
                    <div class="text-success" v-if="cart.coupon">
                      已套用優惠券
                    </div>
                  </td>
                  <td class="text-center">
                    {{ cart.product.price }}
                  </td>
                  <td class="text-center">
                    {{ cart.qty }}
                  </td>
                  <td class="text-center">
                    {{ cart.total }}
                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-sm"
                      @click="deleteOneCart(cart.id)"
                      :disabled="cart.id === loadingItem"
                    >
                      <i
                        class="fas fa-spinner fa-pulse"
                        v-if="loadingItem === cart.id"
                      ></i>
                      x
                    </button>
                  </td>
                </tr>
              </template>
            </tbody>
            <tfoot class="border-transparent">
              <tr>
                <td colspan="4" class="text-end border-0">總計</td>
                <td class="text-end border-0">{{ finalTotal }}</td>
              </tr>
              <!-- <tr>
                <td colspan="3" class="text-end text-success">折扣價</td>
                <td class="text-end text-success">{{  }}</td>
              </tr> -->
            </tfoot>
          </table>
          <div class="d-flex justify-content-between mb-4">
            <button class="btn btn-danger" type="button" @click="swalClearCart">
              清空商品
            </button>
            <router-link class="btn btn-secondary" type="button" to="/products"
              >想點更多</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      categorys: [
        '精選套餐',
        '現烤總匯',
        '漢堡',
        '現烤三明治',
        '蛋餅、河粉蛋餅',
        '中西式點心'
      ],
      selectedCategorys: [],
      selectdeProducts: [],
      checkAll: false,
      canStartLottery: false,
      winner: null,
      products: [],
      productID: '',
      carts: {},
      finalTotal: '',
      loadingItem: ''
    }
  },
  methods: {
    onCheckAllChange () {
      this.selectedCategorys = this.checkAll ? [...this.categorys] : []
    },
    watchSelectedCategorys () {
      if (this.selectedCategorys.length === 0 || this.selectedCategorys.length === this.categorys.length) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
    startLottery () {
      // if (this.checkAll === true) {
      //   this.selectdeProducts = this.products
      // }else{
      //   this.selectdeProducts =
      // }

      let lotterySpeed = 20 // 毫秒
      const maxLotterySpeed = 2000 // 毫秒
      const lotterySpeedUpInterval = 20 // 毫秒
      const maxLotterySpeedUpTimes = 100
      let lotterySpeedUpTimes = 0

      const timer = setInterval(() => {
        const index = Math.floor(Math.random() * this.products.length)
        const candidate = this.products[index]
        this.winner = candidate
        console.log(timer, this.winner)

        if (lotterySpeedUpTimes < maxLotterySpeedUpTimes) {
          lotterySpeed += lotterySpeedUpInterval
          lotterySpeedUpTimes++
        }

        if (lotterySpeed >= maxLotterySpeed) {
          clearInterval(timer)
          const { id } = this.winner
          this.addToCart(id)
        }
      }, lotterySpeed)
    },
    getProduct () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty,
        message: '抽抽樂抽到的'
      }
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.swalToastTopEnd('已幫您自動加入購物車')
          this.getCartData()
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    getCartData () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.carts = res.data.data.carts
          this.finalTotal = res.data.data.final_total
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    deleteOneCart (cartId = null) {
      // eslint-disable-next-line camelcase
      this.loadingItem = cartId
      this.$http
        // eslint-disable-next-line camelcase
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart/${cartId}`)
        .then((res) => {
          this.swalToastTopEnd(res.data.message)
          this.loadingItem = ''
          this.getCartData()
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    swalClearCart () {
      this.$swal({
        title: '真的要清掉已選好商品嗎？',
        text: '清除後，只能重新挑選商品，無法復原唷 :(',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '堅決清空重來',
        cancelButtonText: '先不用'
      }).then((result) => {
        if (result.isConfirmed) {
          this.cleanAllCart()
        }
      })
    },
    cleanAllCart () {
      this.$http
        .delete(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/carts`)
        .then((res) => {
          this.$swal('購物車已清空，重新選新的餐點吧！')
          this.$router.push('/products')
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    swalToastTopEnd (message) {
      this.$swal({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 30000,
        icon: 'success',
        title: message
      })
    },
    swalError (message) {
      this.$swal({
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: 'OK',
        toast: true,
        icon: 'error',
        title: message,
        text: '請重新操作，若再次出現請通知管理者，謝謝'
      })
    }
  },

  mounted () {
    this.getProduct()
    this.getCartData()
    document.title = '鮮堡漢堡 文化店 | 早餐轉轉轉'
  }
}
</script>
