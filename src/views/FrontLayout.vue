<template>
  <div class="bg-primary w-100 min-h">
    <div class="position-absolute z-3 w-100">
      <div class="py-0 py-lg-4">
        <nav
          class="navbar navbar-expand-lg bg-body-tertiary py-lg-3 py-2 bg-primary bg-lg-transparent"
          :class="{
            'fixed-top': isScrolled || isOpen,
            'bg-primary': isScrolled || isOpen,
            'bg-lg-primary': isScrolled || isOpen,
            'shadow-nv': isScrolled || isOpen
          }"
        >
          <div class="container">
            <RouterLink @click="navClose()" class="nav-link" to="/"
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
            /></RouterLink>
            <button
              class="navbar-toggler border-0 position-relative"
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
              <span
                class="position-absolute top-25 start-75 translate-middle badge rounded-pill text-danger p-0 ps-1 close-icon"
                >{{ carts.length == 0 ? '' : carts.length }}
              </span>
            </button>
            <div
              class="collapse navbar-collapse nav-m-bg mt-128 mt-lg-0"
              id="navCollapse"
            >
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                <li class="nav-item rounded rounded-pill mb-6 mb-lg-0 mx-2">
                  <RouterLink
                    @click="navClose()"
                    class="nav-link fs-6-btn ls-3 font-black p-1 py-2 px-4"
                    to="/products"
                    >鮮堡美食</RouterLink
                  >
                </li>
                <li class="nav-item rounded rounded-pill mb-6 mb-lg-0 mx-2">
                  <RouterLink
                    @click="navClose()"
                    class="nav-link fs-6-btn ls-3 p-1 py-2 px-4"
                    to="/about"
                    >關於我們</RouterLink
                  >
                </li>
                <li
                  class="nav-item rounded rounded-pill mb-6 mb-lg-0 mx-2"
                >
                  <RouterLink
                    @click="navClose()"
                    to="/draw"
                    class="fs-6-btn btn d-flex justify-content-center align-items-center ls-3 p-1 py-2 px-4 border-0"
                  >
                    <div class="me-1 position-relative">
                      <img
                        src="/src/assets/images/icon-dice.png"
                        class="me-1 hover-hide"
                        alt=""
                        srcset=""
                      />
                      <img
                        src="/src/assets/images/icon-dice-hover.png"
                        class="me-1 hover"
                        alt=""
                        srcset=""
                      />
                    </div>
                    簡單點
                  </RouterLink>
                </li>
                <li
                  class="nav-item rounded rounded-pill position-relative nav-m-height mb-lg-0"
                >
                  <RouterLink
                    @click="navClose()"
                    to="/cart"
                    class="fs-6-btn btn d-flex justify-content-center align-items-center ls-3 p-1 py-2 px-4 bg-secondary rounded-pill border-0"
                  >
                    <div class="me-1 position-relative">
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
                      <span
                        class="position-absolute top-0 start-50 translate-middle badge rounded-pill text-danger p-0 ps-1"
                        >{{ carts.length == 0 ? '' : carts.length }}
                      </span>
                    </div>

                    購物車
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view />
    <!-- footer -->
  </div>
  <footer class="bg-primary">
    <div class="container">
      <div class="footer">
        <p class="text-center fs-7 ls-15 mb-0">
          © 2023 鮮堡漢堡 板橋文化店 版權所有
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
import { RouterView } from 'vue-router'
import Collapse from 'bootstrap/js/dist/collapse.js'
import { mapActions, mapState } from 'pinia'
import cartStore from '@/stores/useCartStore'
import { useProductStore } from '@/stores/useFrontProducts'
let navCollapse = ''
export default {
  data () {
    return {
      isScrolled: false,
      isOpen: false,
      isLoading: true
    }
  },
  methods: {
    navToggle () {
      navCollapse.toggle()
    },
    navClose () {
      navCollapse.hide()
    },
    handleScroll () {
      const ninety = window.innerHeight * 0.1
      if (window.pageYOffset > ninety) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
    ...mapActions(useProductStore, ['getProducts']),
    ...mapActions(cartStore, ['getCartData'])
  },
  components: {
    RouterView
  },
  computed: {
    ...mapState(useProductStore, ['products']),
    ...mapState(cartStore, ['carts'])
  },
  mounted () {
    navCollapse = new Collapse(document.querySelector('#navCollapse'), {
      toggle: false
    })
    window.addEventListener('scroll', this.handleScroll)
    this.getProducts()
    this.getCartData()
  }
}
</script>
