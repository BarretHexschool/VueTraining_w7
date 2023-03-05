<template>
    <div>
        <table class="table align-middle">
            <thead>
              <tr>
                <th>圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td style="width: 200px">
                  <div
                    style="
                      height: 100px;
                      background-size: cover;
                      background-position: center;
                    "
                    :style="{backgroundImage: `url(${product.imageUrl})`}"
                  ></div>
                </td>
                <td>
                  <div v-if="product.is_select">
                    <div class="fw-bold">{{ product.mainTitle }}</div>
                    搭配：{{ product.select1 }}、{{ product.select2 }} ({{
                    product.select3 }})
                  </div>
                  <div v-else>{{ product.title }}</div>
                </td>
                <td>
                  <div class="h5" v-if="product.price == product.origin_price">
                    {{ product.price }} 元
                  </div>
                  <div v-else>
                    <del class="h6">原價 {{ product.origin_price }} 元</del>
                    <div class="h5">現在只要 {{ product.price }} 元</div>
                  </div>
                </td>
                <td>
                <div class="btn-group">

                    <router-link :to="`/product/${product.id}`" class="btn btn-outline-success"> 單品項介紹</router-link>
                    <button type="button" class="btn btn-outline-primary" @click="addToCart(product.id,1)">加入購物車</button>
                </div>
                </td>
              </tr>
            </tbody>
          </table>

    </div>
</template>
<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProduct () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/products`)
        .then(res => {
          this.products = res.data.products
          console.log(this.products)
        })
        .catch(err => {
          alert(err)
        })
    },
    addToCart (id, qty = 1) {
      const data = {
        product_id: id,
        qty
      }
      this.$http.post(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/cart`, { data })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          alert(err)
        })
    }
  },
  components: {
    RouterLink
  },
  mounted () {
    this.getProduct()
  }
}
</script>
