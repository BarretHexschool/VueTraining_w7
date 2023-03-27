<template>
  <header
    class="navbar navbar-dark sticky-top bg-primary flex-md-nowrap p-0 shadow"
  >
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 py-2 fs-6" href="#"
      ><img src="/src/assets/images/logo.png" alt="Logo" height="35"
    /></a>
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
    <div class="container-fluid min-h">
    <div class="row vh-100">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div class="position-sticky pt-3 sidebar-sticky">
          <ul class="nav flex-column">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-home align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                  ></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                返回前台
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-file align-text-bottom"
                  aria-hidden="true"
                >
                  <path
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
                  ></path>
                  <polyline points="13 2 13 9 20 9"></polyline>
                </svg>
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-cart align-text-bottom"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path
                    d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                  ></path>
                </svg>
                產品列表
              </router-link>
            </li>
          </ul>
        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <router-view></router-view>

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
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}
</script>
