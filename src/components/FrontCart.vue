<template>
  <table class="table align-middle w-100 border-secondary p-1">
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
            {{ cart.product.title }} <span v-if ="cart.message"><br>*{{ cart.message }}</span>
            <div class="text-success" v-if="cart.coupon">已套用優惠券</div>
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
          <td class="text-end">
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
</template>

<script>
import cartStore from '@/stores/useCartStore'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { mapActions, mapState } from 'pinia'

export default {
  data () {
    return {
      loadingItem: ''
    }
  },
  computed: {
    ...mapState(cartStore, ['carts', 'finalTotal'])
  },
  methods: {
    ...mapActions(cartStore, ['getCartData', 'deleteOneCart', 'swalClearAllCart']),
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd'])
  },
  mounted () {
    this.getCartData()
  }
}
</script>
