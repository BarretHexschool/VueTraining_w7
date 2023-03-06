<template>
  <div class="d-flex">
    <div class="col">
        這是後台管理介面
    </div>
    <router-link to="/">返回前台 </router-link> |
    <router-link to="/admin/orders">訂單列表 </router-link> |
    <router-link to="/admin/products">產品列表 </router-link> |
    <a href="#" @click.prevent="logout">登出 </a>
  </div>

    <hr>
    <router-view></router-view>
    </template>
<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {

  components: {
    RouterView
  },
  methods: {
    logout () {
      const date = new Date()
      date.setTime(date.getTime() - 10000)
      document.cookie = `hexToken=0; expires=${date.toGMTString()}`
      this.$router.push('/login')
    },
    checkLogin () {
      this.$http.post(`${VITE_APP_URL}/v2/api/user/check`)
        .then(res => {
          // this.getProducts()
          if (!res.data.success) {
            console.log(res)
            this.$router.push('/login')
            console.log(res)
          }
        })
        // eslint-disable-next-line n/handle-callback-err
        .catch((err) => {
          console.dir(err)
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
  }
}
</script>
