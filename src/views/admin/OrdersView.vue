<!-- eslint-disable vue/no-deprecated-filter -->
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
      <th>{{order.id.substr(-4, 4)}}</th>
      <th>#{{order.num}}</th>
      <th>{{$moment(new Date(order.create_at*1000)).format('YYYY-MM-DD HH:mm')}}</th>
      <th>{{order.user.name}} {{  }}</th>
      <th>{{order.products.length}}</th>
      <td>{{order.total}}</td>
      <td>{{order.is_paid}}</td>
      <td>{{order.buyerMessage}}</td>
      <td><button type="button" class="btn btn-outline-danger" @click="updateOrder(order)">
                      強制修改
                    </button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button></td>
    </tr>
  </tbody>
</table>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"> 訂單編號#1313</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Samso</td>
      <td>Natto</td>
      <td>@samso</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Tinor</td>
      <td>Horton</td>
      <td>@tinor_har</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Mythor</td>
      <td>Bully</td>
      <td>@myth_tobo</td>
    </tr>
  </tbody>
</table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      orders: []
    }
  },
  methods: {
    getOrders () {
      this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/orders`)
        .then(res => {
          this.orders = res.data.orders
          console.log(res)
        })
        .catch(err => {
          console.dir(err)
        })
    },
    updateOrder (order) {
      console.log('改變狀態')
      order.status = 2
      order.buyerMessage = '強制塞入'
      console.log(order)
      this.$http.put(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/admin/order/${order.id}`, { order })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.dir(err)
        })
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>
