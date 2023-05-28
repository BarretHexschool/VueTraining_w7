<template>
  <LoadingDesign :is-Loading="isLoading" />
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
            class="d-flex flex-column justify-content-center bg-third rounded rounded-4 rounded-lg-5 p-4 p-md-6"
          >
            <h5>有特別想要的餐點類別嗎？（預設全選）</h5>
            <div class="form-group mb-2">
              <div class="form-check">
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
    <p class="mt-5 fs-5" v-if="winner">
      <span class="text-danger">
        *會自動幫您放入購物車*
      </span><br/>
      您覺得今天吃 『 {{ winner.title }} 』 好嗎？
    </p>
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
            </tfoot>
          </table>
          <div class="d-flex justify-content-between mb-4">
            <button class="btn btn-danger" type="button" @click="swalClearAllCart">
              清空商品
            </button>
            <RouterLink class="btn btn-secondary" type="button" to="/products"
              >想點更多</RouterLink
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { useProductStore } from '@/stores/useFrontProducts'
import LoadingDesign from '@/components/LoadingDesign.vue'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      isLoading: true,
      categorys: [
        '精選套餐',
        '現烤總匯',
        '漢堡',
        '現烤吐司',
        '蛋餅、河粉蛋餅',
        '中西式點心'
      ],
      selectedCategorys: [],
      selectdeProducts: [],
      winner: null,
      loadingItem: ''
    }
  },
  methods: {
    filterProduct () {
      return this.products.filter(product =>
        this.selectedCategorys.findIndex(e => e === product.category) !== -1
      )
    },
    startLottery () {
      if (this.selectedCategorys.length !== 0) {
        this.selectdeProducts = this.filterProduct()
      } else {
        this.selectdeProducts = this.products
      }
      let lotterySpeed = 20 // 毫秒
      const maxLotterySpeed = 2000 // 毫秒
      const lotterySpeedUpInterval = 20 // 毫秒
      const maxLotterySpeedUpTimes = 100
      let lotterySpeedUpTimes = 0

      const timer = setInterval(() => {
        const index = Math.floor(Math.random() * this.selectdeProducts.length)
        const candidate = this.selectdeProducts[index]
        this.winner = candidate
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
      this.selectedCategorys = []
    },
    addToCart (id, qty = 1) {
      this.selectdeProducts = []
      const data = {
        product_id: id,
        qty,
        message: '簡單點自動加入'
      }
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          this.getCartData()
          this.swalToastTopEnd('已幫您自動加入購物車')
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    ...mapActions(cartStore, ['getCartData', 'deleteOneCart', 'swalClearAllCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  computed: {
    ...mapState(useProductStore, ['products']),
    ...mapState(cartStore, ['finalTotal', 'carts'])
  },
  components: {
    LoadingDesign
  },
  mounted () {
    this.getCartData()
    document.title = '鮮堡漢堡 文化店 | 早餐轉轉轉'
    if (document.readyState === 'complete') {
      this.isLoading = false
    }
  }
}
</script>
