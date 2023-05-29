<template>
  <main class="w-100 position-relative z-2">
    <section class="common-hero container">
      <FrontCartBar :currentState="'付款方式'" />
    </section>
    <section class="container pt-2" v-if="order.user">
      <div class="row flex-column-reverse flex-lg-row">
        <div class="col col-12 col-lg-8">
          <h4 class="ls-2 text-sm-start text-center mb-3 fw-bold text-center text-lg-start">請選擇付款方式</h4>
          <div class="row mb-2 row-cols-1 row-cols-md-2 g-2">
            <div class="col" style="height: 60px;">
            <button type="button" class="btn btn-third w-100 h-100 fs-5 fw-bold d-flex align-items-center justify-content-center ls-15" @click="goMoneyPay()"><span class="material-symbols-rounded me-1">payments</span
                >現場現金支付</button>
                </div>
                <div class="col" style="height: 60px;">
                  <button type="button" class="btn btn-third w-100 h-100 fw-bold d-flex align-items-center justify-content-center" @click="goLinePay()">
                    <img  class="m-1 h-75" src="/src/assets/images/linepay.png" alt="LinePay" srcset="">
                  </button>
                </div>
          </div>
          <ul class="list-unstyled fs-5 mb-3">
            <li class="mb-1">桌號：#{{ order.user.address }}</li>
            <li class="mb-1">
              訂單日期：{{
                $moment(new Date(order.create_at * 1000)).format(
                  'YYYY-MM-DD HH:mm'
                )
              }}
            </li>
            <li class="mb-1">訂單編號：{{ order.id.substr(-4, 4) }}</li>
            <li class="mb-1">訂購人：{{ order.user.name }}</li>
            <li class="mb-1">付款狀態：{{ order.is_paid? "已付款":"等待付款" }}</li>
          </ul>
        </div>
        <div class="col col-12 col-lg-4">
          <div class="pb-3">
            <h4 class="text-center text-lg-start fw-bold mb-1">訂購商品清單</h4>
            <table class="table align-middle w-100 border-secondary">
              <thead>
                <tr class="w-100">
                  <th>品名</th>
                  <th class="text-nowrap text-center">單價</th>
                  <th class="text-nowrap text-center">數量</th>
                  <th class="text-nowrap text-center">小計</th>
                </tr>
              </thead>
              <tbody class="w-100">
                <template v-if="order.products">
                  <tr v-for="product in order.products" :key="product.id">
                    <td>
                      {{ product.product.title }}
                    </td>
                    <td class="text-center">
                      {{ product.product.price }}
                    </td>
                    <td class="text-center">
                      {{ product.qty }}
                    </td>
                    <td class="text-center">
                      {{ product.total }}
                    </td>
                  </tr>
                </template>
              </tbody>
              <tfoot>
                <tr class="mb-2">
                  <td colspan="3" class="text-end border-0">總計</td>
                  <td class="text-end border-0">{{ order.total }}</td>
                </tr>
                <tr>
                  <td colspan="4" class="border-0">
                    訂單備註：{{ order.message }}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { useProductStore } from '@/stores/useFrontProducts'
import FrontCartBar from '@/components/FrontCartBar.vue'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      order: {},
      totalPrice: null,
      id: this.$route.params.id
    }
  },
  methods: {
    getOrderData () {
      this.loadingStatue(true)
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${this.id}`)
        .then((res) => {
          this.order = res.data.order
          this.totalPrice = res.data.order.total
          this.loadingStatue(false)
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    goMoneyPay () {
      const str = `此訂單於現場\r\n取貨付款$ ${this.totalPrice}元`
      this.$swal(str)
      this.$router.push(`/cartfinal/${this.id}`)
    },
    goLinePay () {
      const str = `此訂單已使用 LinePay 付款 $ ${this.totalPrice}元`
      this.$http
        .post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/pay/${this.id}`)
        .then((res) => {
          this.$swal(str)
          this.$router.push(`/cartfinal/${this.id}`)
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd', 'swalSuccess']),
    ...mapActions(useProductStore, ['loadingStatue'])
  },
  computed: {
    ...mapState(useProductStore, ['isLoading'])
  },
  components: {
    FrontCartBar
  },
  mounted () {
    this.getOrderData()
    document.title = '付款方式 | 鮮堡漢堡 文化店'
  }
}
</script>
