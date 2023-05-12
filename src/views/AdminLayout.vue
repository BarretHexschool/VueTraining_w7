<template>
  <header
    class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow"
  >
    <RouterLink
      to="/admin"
      class="navbar-brand col-md-3 col-lg-2 me-0 px-3 py-2 fs-6"
    >
      <img src="/src/assets/images/logo.png" alt="Logo" height="35" />
    </RouterLink>

    <button
      class="navbar-toggler position-absolute d-md-none collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link px-3" href="#" @click.prevent="logout">登出 </a>
      </div>
    </div>
  </header>
  <div class="container-fluid">
    <div class="row admin-min-h">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3 sidebar-sticky">
          <ul class="nav flex-column">
            <li>
              <RouterLink to="/" class=" nav-item nav-link active d-flex align-items-center" aria-current="page">
                <span class="material-symbols-rounded me-1"> home </span>
                返回前台
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/admin/orders" class=" nav-item nav-link active d-flex align-items-center" aria-current="page">
                <span class="material-symbols-rounded me-1"> receipt_long </span>
                訂單列表
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/admin/products" class=" nav-item nav-link active d-flex align-items-center" aria-current="page">
                <span class="material-symbols-rounded me-1"> fastfood </span>
                產品列表
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/admin/news" class=" nav-item nav-link active d-flex align-items-center" aria-current="page">
                <span class="material-symbols-rounded me-1"> list_alt </span>
                最新消息
              </RouterLink>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <router-view v-if="isChecked"></router-view>
      </main>
    </div>
  </div>

  <footer
    class="py-3 bg-primary d-flex align-items-center justify-content-center"
    style="height: 82px"
  >
    <p class="mb-0 fs-7 ls-15">© 2023 鮮堡漢堡 板橋文化店 版權所有</p>
  </footer>
</template>
<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  data () {
    return {
      isChecked: false
    }
  },
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
      this.$http
        .post(`${VITE_APP_URL}/v2/api/user/check`)
        .then((res) => {
          if (!res.data.success) {
            this.isChecked = false
            this.$router.push('/login')
          } else {
            this.isChecked = true
          }
        })
        .catch(() => {
          this.isChecked = false
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}
</script>
