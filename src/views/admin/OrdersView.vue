<template>
  <div class="container py-3">
    <h3 class="ls-2">訂單管理</h3>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">訂單ID</th>
        <th scope="col">訂單時間</th>
        <th scope="col">訂購人</th>
        <th scope="col">訂單總額</th>
        <th scope="col">付款狀態</th>
        <th scope="col">產品製作進度</th>
        <th scope="col">功能</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <th>{{ order.id.substr(-4, 4) }}</th>
        <th>
          {{
            $moment(new Date(order.create_at * 1000)).format('YYYY-MM-DD HH:mm')
          }}
        </th>
        <th>{{ order.user.name }} {{}}</th>
        <td>{{ order.total }}</td>
        <td>{{ order.is_paid }}</td>
        <td>{{ order.buyerMessage }}</td>
        <td>
          <button
            type="button"
            class="btn btn-primary"
            @click="openOrderModal(order)"
          >
            查看訂單
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="d-flex justify-content-center">
          <AdminPagination :page-data="pageData" :get-datas="getOrders"></AdminPagination>
        </div>
</div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="orderModal"
    ref="orderModal"
    tabindex="-1"
    aria-labelledby="orderModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="orderModalLabel">
            訂單編號#{{ tempOrder.num }} ({{ tempOrder.id }})
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h3>訂單狀態：{{  !tempOrder.orderStatues ? '接收訂單' : tempOrder.orderStatues}}</h3>
          <h2> {{!tempOrder.address ? '外帶' :  `內用：${tempOrder.address}`}}</h2>
          <div class="row row-cols-3">
            <div class="cols">
              訂單日期：{{
                $moment(new Date(tempOrder.create_at * 1000)).format(
                  'YYYY-MM-DD HH:mm'
                )
              }}
            </div>
            <div class="cols">訂購姓名：{{!tempOrder.user ? '' :  tempOrder.user.name}}</div>
            <div class="cols">連絡電話：{{!tempOrder.user ? '' :  tempOrder.user.tel}}</div>
            <div class="cols">客戶備註：{{ tempOrder.message}}</div>
          </div>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">品名</th>
                <th scope="col">單價</th>
                <th scope="col">數量</th>
                <th scope="col">總價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in tempOrder.products" :key="item.id">
                <td>{{ item.product.title }}</td>
                <td>{{ item.product.price }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.total }}</td>
                {{
                  product
                }}
              </tr>
            </tbody>
          </table>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal.js'
import AdminPagination from '../../components/AdminPagination.vue'
import sweetAlertStore from '@/stores/useSweetAlertStore'
import { mapActions } from 'pinia'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
let orderModalElement = ''
export default {
  data () {
    return {
      orders: [],
      tempOrder: {},
      pageData: {}
    }
  },
  methods: {
    getOrders (page = 1) {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders
          this.pageData = res.data.pagination
        })
        .catch((err) => {
          this.loginCheckError(err.response.data.message)
        })
    },
    updateOrder (order) {
      order.status = 2
      order.buyerMessage = '強制塞入'
      this.$http
        .put(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/order/${order.id}`,
          { order }
        )
        .then((res) => {
          this.swalError(res)
        })
        .catch((err) => {
          this.swalToastTopEnd(err.response.data.message)
        })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      orderModalElement.show()
    },
    ...mapActions(sweetAlertStore, ['swalError', 'swalToastTopEnd', 'loginCheckError'])
  },
  components: {
    AdminPagination
  },
  mounted () {
    this.getOrders()
    orderModalElement = new Modal(document.querySelector('#orderModal'), {
      keyboard: false
    })
    document.title = '訂單管理 | 鮮堡漢堡'
  }
}
</script>
