<template>
  <div class="bg-primary py-5 h-100">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
        <router-link class="nav-link" to="/"
          ><img
            src="/src/assets/images/logo.png"
            alt="Logo"
            width="248"
            height="56"
            class="d-lg-inline-block align-text-top d-none"
        />
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
        ><img src="/src/assets/images/icon-menu.png" class="close-icon" height="22" alt="menu-close" srcset="">
        <img src="/src/assets/images/logo-icon.png" class="open-icon" height="22" alt="menu-open" srcset="">
        </button>
        <div class="collapse navbar-collapse" id="navCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item"></li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products"
                >鮮堡美食</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">購物車</router-link>
            </li>
          </ul>
        </div>
      </nav>

      <h2 class="font-monospace">這是字型測試 This is test</h2>
      <h2>這是字型測試 This is test</h2>
      <hr />
      <router-view></router-view>
    </div>
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
