<template>
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">訂單ID</th>
        <th scope="col">訂單號碼</th>
        <th scope="col">訂單時間</th>
        <th scope="col">訂購人</th>
        <th scope="col">幾個產品(預設為1)</th>
        <th scope="col">金額</th>
        <th scope="col">付款狀態</th>
        <th scope="col">產品製作進度</th>
        <th scope="col">功能</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <th>{{ order.id.substr(-4, 4) }}</th>
        <th>#{{ order.num }}</th>
        <th>
          {{
            $moment(new Date(order.create_at * 1000)).format('YYYY-MM-DD HH:mm')
          }}
        </th>
        <th>{{ order.user.name }} {{}}</th>
        <th>{{ order.products.length }}</th>
        <td>{{ order.total }}</td>
        <td>{{ order.is_paid }}</td>
        <td>{{ order.buyerMessage }}</td>
        <td>
          <button
            type="button"
            class="btn btn-info"
            @click="openOrderModal(order)"
          >
            編輯訂單
          </button>
        </td>
      </tr>
    </tbody>
  </table>

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
            訂單編號#{{ tempOrder.num }} ({{ tempOrder.id}})
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <h2>訂單狀態 {{  !tempOrder.orderStatues ? '接收訂單' : tempOrder.orderStatues}}</h2>
          <h2> 內用：{{!tempOrder.desk ? '沒有桌號' :  tempOrder.desk}}</h2>
          <div class="row col-3">
            <div class="cols">訂單日期：{{$moment(new Date(tempOrder.create_at * 1000)).format('YYYY-MM-DD HH:mm')}}</div>
            <div class="cols">訂購姓名：{{ tempOrder.user.name}}</div>
            <div class="cols">連絡電話：{{ tempOrder.user.tel}}</div>
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
                <td>{{item.product.title}}</td>
                <td>{{item.product.price}}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.total }}</td>
                {{ product }}
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
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal.js'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
let orderModalElement = ''
export default {
  data () {
    return {
      orders: [],
      tempOrder: {}
    }
  },
  methods: {
    getOrders () {
      this.$http
        .get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders`)
        .then((res) => {
          this.orders = res.data.orders
          console.log(res)
        })
        .catch((err) => {
          console.dir(err)
        })
    },
    updateOrder (order) {
      console.log('改變狀態')
      order.status = 2
      order.buyerMessage = '強制塞入'
      console.log(order)
      this.$http
        .put(
          `${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/order/${order.id}`,
          { order }
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.dir(err)
        })
    },
    openOrderModal (item) {
      this.tempOrder = { ...item }
      orderModalElement.show()
    }
  },
  mounted () {
    this.getOrders()
    orderModalElement = new Modal(document.querySelector('#orderModal'), {
      keyboard: false
    })
  }
}
</script>
