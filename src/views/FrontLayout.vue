<template>
  <div class="d-flex">
    <div class="col"> <router-link to="/">home</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link>
    </div>
    <router-link to="/admin">後台</router-link>
  </div>

  <hr>
  <router-view></router-view>
</template>
<script>
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  }
}
</script>
