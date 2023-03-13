<template>
  <div class="bg-primary  position-absolute zn-0 w-100">
  <div class="position-absolute z-3 w-100">
    <div class="container py-4">
      <nav class="navbar navbar-expand-lg bg-body-tertiary py-3 bg-none">
        <router-link class="nav-link" to="/"
          ><img
            src="/src/assets/images/logo.png"
            alt="Logo"
            width="248"
            height="56"
            class="d-lg-inline-block align-text-top d-none" />
          <img
            src="/src/assets/images/logo-md.png"
            alt="Logo"
            height="22"
            class="d-inline-block align-text-top d-lg-none"
        /></router-link>
        <button
          class="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navCollapse"
          aria-controls="navCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img
            src="/src/assets/images/icon-menu.png"
            class="close-icon"
            height="22"
            alt="menu-close"
            srcset=""
          />
          <img
            src="/src/assets/images/logo-icon.png"
            class="open-icon"
            height="22"
            alt="menu-open"
            srcset=""
          />
        </button>
        <div class="collapse navbar-collapse" id="navCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li class="nav-item rounded rounded-pill">
              <router-link
                class="nav-link fs-6 fs-6-btn ls-3 font-black py-2 px-4"
                to="/products"
                >鮮堡美食</router-link
              >
            </li>
            <li class="nav-item rounded rounded-pill">
              <router-link class="nav-link fs-6 fs-6-btn ls-3 py-2 px-4" to="/about"
                >關於我們</router-link
              >
            </li>
            <li
              class="nav-item rounded rounded-pill"
            >
              <router-link
                to="/cart"
                class="btn d-flex justify-content-center align-items-center ls-3 py-2 px-4 bg-secondary rounded-pill"
              >
                <img
                  src="/src/assets/images/icon-cart.png"
                  class="me-1 hover-hide"
                  alt=""
                  srcset=""
                />
                <img
                  src="/src/assets/images/icon-cart-hover.png"
                  class="me-1 hover"
                  alt=""
                  srcset=""
                />
                購物車
              </router-link>
            </li>
          </ul>
          <!-- <img src="/src/assets/images/mobile-menu.png" height="426" alt=""> -->
        </div>
      </nav>
    </div>
  </div>
  <router-view></router-view>
  <!-- footer -->
  <footer class="mt-200 container mt-sm-80">
    <div class="footer">
      <p class="text-center fs-7 ls-15 mb-0">© 2023 鮮堡漢堡 板橋文化店 版權所有</p>
    </div>
  </footer>
</div>
</template>
<script>
import { RouterView } from 'vue-router'
import Collapse from 'bootstrap/js/dist/collapse.js'
let navCollapse = ''
export default {
  methods: {
    navToggle () {
      navCollapse.toggle()
    }
  },
  components: {
    RouterView
  },
  mounted () {
    navCollapse = new Collapse(document.querySelector('#navCollapse'), {
      toggle: false
    })
  }
}
</script>
