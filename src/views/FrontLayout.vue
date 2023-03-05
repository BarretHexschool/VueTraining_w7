<template>
<router-link to="/">home</router-link> |
<router-link to="/about">about</router-link> |
<router-link to="/products">產品列表</router-link> |
<router-link to="/cart">購物車</router-link> |
<router-link to="/login">登入後台</router-link>
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
