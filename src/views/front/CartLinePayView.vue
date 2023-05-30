<template>
  <main class="w-100 position-relative z-2">
    <section class="common-hero container">
      <FrontCartBar :currentState="'餐點準備中'" />
    </section>
    <button @click="linePayV2">按我執行line pay</button>
  </main>
</template>
<script>
import sweetAlertStore from '@/stores/useSweetAlertStore'
import uuid from 'uuid4'
import crypto from 'crypto-js'
import { useProductStore } from '@/stores/useFrontProducts'
import FrontCartBar from '@/components/FrontCartBar.vue'
import { mapActions, mapState } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      orderstr: {}
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
    linePayV3 () {
      const key = '2833ce3359ab0ae6aa5320923feca1d8'
      const nonce = uuid()
      const uri = '/v3/payments/request'
      const body = {
        amount: 500,
        currency: 'TWD',
        orderId: 'order202sdfs10921003',
        packages: [
          {
            id: '20210921003',
            amount: 500,
            products: [
              {
                name: '買不起的iphone13pro',
                quantity: 1,
                price: 500
              }
            ]
          }
        ],
        redirectUrls: {
          confirmUrl: 'http://127.0.0.1:3000/confitmUrl',
          cancelUrl: 'http://127.0.0.1:3000/cancelUrl'
        }
      }

      const encrypt = crypto.HmacSHA256(key + uri + JSON.stringify(body) + nonce, key)
      // 這邊蠻特別的，與官方文件相反，應該是此套件的原因。
      const hmacBase64 = crypto.enc.Base64.stringify(encrypt)

      const configs = {
        headers: {
          'Content-Type': 'application/json',
          'X-LINE-ChannelId': '1559748862',
          'X-LINE-Authorization-Nonce': nonce,
          'X-LINE-Authorization': hmacBase64
        }
      }
      const corsURL = 'https://cors-anywhere.herokuapp.com/'
      const apiURL = 'https://sandbox-api-pay.line.me/v3/payments/request'
      this.$http.post(`${corsURL}${apiURL}`, body, configs).then(res => {
        console.log(res.data)
      })
    },
    linePayV2 () {
      const key = '2833ce3359ab0ae6aa5320923feca1d8'
      const body = {
        productName: 'PS8',
        amount: 16800,
        currency: 'TWD',
        confirmUrl: 'http://127.0.0.1:3000',
        orderId: 'BUY202109200102'
      }
      const configs = {
        headers: {
          'Content-Type': 'application/json',
          'X-LINE-ChannelId': '1559748862',
          'X-LINE-ChannelSecret': key
        }
      }
      // const corsURL = 'https://cors-anywhere.herokuapp.com/'
      const apiURL = 'https://sandbox-api-pay.line.me/v2/payments/request'
      this.$http.post(`${apiURL}`, body, configs).then(res => {
        console.log(res.data)
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
