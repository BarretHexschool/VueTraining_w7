<template>
  這是後台管理介面
    <router-link to="/">返回前台</router-link> |
    <router-link to="/admin/orders">訂單列表</router-link> |
    <router-link to="/admin/products">產品列表</router-link> |
    <a href="#" @click.prevent="logout">登出</a> |
    <hr>
    <router-view></router-view>
    </template>
<script>
import { RouterView } from 'vue-router'
export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = 'hexToken=1; expires='
    }
  }
}
</script>
