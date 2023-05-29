<template>
  <main class="w-100 position-relative z-2">
    <section class="common-hero container">
      <FrontCartBar :currentState="'餐點準備中'" />
    </section>
    <section class="container" v-if="order.user">
      <h2 class="ls-2 text-sm-start text-center mb-3">
        您的訂單已送出，正在製作中！
      </h2>
      <div class="row g-1 mb-2">
        <div class="col d-none d-lg-block">
<button type="button" class="btn btn-third w-100 h-100 d-flex align-items-center justify-content-center" @click="copyLink()">複製訂單網址</button>
        </div>
        <div class="col">
          <RouterLink to="/home" class="btn btn-third w-100 h-100 d-flex align-items-center justify-content-center">繼續看更多</RouterLink>
        </div>
        <div class="col col-4 d-block d-lg-none">
<button type="button" class="btn btn-third w-100 h-100 d-flex align-items-center justify-content-center" @click="mobileShareBtn()"><span class="d-flex align-items-center justify-content-center">
  <span class="material-symbols-rounded me-1">
ios_share
</span>分享訂單
</span></button>
        </div>

         </div>
      <p class="fs-4 ls-15 mb-3">
        感謝您的選購，我們將立即為您準備餐點。<br />
        <span class=" text-danger">有任何問題請直接來電<a
          class="text-danger text-decoration-none"
          href="tel:+886222590910"
          >02-22590910</a
        ></span><br />
        同時告知您的訂單編號 {{ order.id.substr(-4, 4) }} 與訂購人大名。<br />
      </p>
      <ul class="list-unstyled fs-5 mb-3">
        <li class="mb-1">桌號：#{{ order.user.address }}</li>
        <li class="mb-1">
          訂單日期：{{
            $moment(new Date(order.create_at * 1000)).format('YYYY-MM-DD HH:mm')
          }}
        </li>
        <li class="mb-1">訂單編號：{{ order.id.substr(-4, 4) }}</li>
        <li class="mb-1">訂購人：{{ order.user.name }}</li>
        <li class="mb-1">付款狀態：{{ order.is_paid? "已付款":"等待付款" }}</li>
      </ul>
      <div class="pb-6">
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
              <td colspan="4" class="border-0">訂單備註：{{ order.message }}</td>
            </tr>
          </tfoot>
        </table>
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
      order: {}
    }
  },
  methods: {
    getOrderData () {
      this.loadingStatue(true)
      const { id } = this.$route.params
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/order/${id}`)
        .then((res) => {
          this.order = res.data.order
          this.loadingStatue(false)
        })
        .catch((err) => {
          this.swalError(err)
        })
    },
    copyLink () {
      const copyText = window.location.href
      navigator.clipboard.writeText(copyText)
      this.swalSuccess('訂單連結已複製 \r\n 可以跟大家分享囉 :)')
    },
    mobileShareBtn () {
      const orderDate = this.$moment(new Date(this.order.create_at * 1000)).format('YYYY-MM-DD HH:mm')
      const text = `這是鮮堡漢堡的訂單 \r\n訂購日期：${orderDate}\r\n 訂單連結：`
      if (navigator.share) {
        navigator.share({
          title: '鮮堡漢堡，位於新北板橋新埔的早餐店',
          text,
          url: window.location.href
        }).then(() => {
        })
          .catch(err => { this.swalError(err) })
      } else {
        this.copyLink()
      }
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
    document.title = '鮮堡漢堡 文化店 | 完成點餐'
  }
}
</script>
