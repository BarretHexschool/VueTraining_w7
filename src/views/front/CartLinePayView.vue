<template>
  <main class="w-100 position-relative z-2">
    <section class="common-hero container">
      <FrontCartBar :currentState="'餐點準備中'" />
    </section>
    <button @click="sendRequest">按我執行line pay</button>
  </main>
</template>
<script>
import { createLinePayClient } from 'line-pay-merchant'

import sweetAlertStore from '@/stores/useSweetAlertStore'
import { useProductStore } from '@/stores/useFrontProducts'
import FrontCartBar from '@/components/FrontCartBar.vue'
import { mapActions, mapState } from 'pinia'

const linePayClient = createLinePayClient({
  channelId: '1559748862', // channel ID
  channelSecretKey: '2833ce3359ab0ae6aa5320923feca1d8', // channel secret key
  env: 'development' // env can be 'development' or 'production'
})

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      order: {}
    }
  },
  methods: {
    async  sendRequest () {
      try {
        const res = await linePayClient.request.send({
          body: {
            amount: 1000,
            currency: 'TWD',
            orderId: '20211216003',
            packages: [
              {
                id: 'c99abc79-3b29-4f40-8851-bc618ca57856',
                amount: 1000,
                products: [
                  {
                    name: 'Product Name',
                    quantity: 2,
                    price: 500
                  }
                ]
              }
            ],
            redirectUrls: {
              confirmUrl: 'https://battet.tw/success',
              cancelUrl: 'https://battet.tw/cancelUrl'
            }
          }
        })

        console.log(res)
      } catch (e) {
        console.log('error', e)
      }
    },
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
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd']),
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
