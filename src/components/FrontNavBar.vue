<template>
    <nav class="navbar navbar-expand-lg fixed-top py-2 desktopPx"
    :class="{
      'bg-opacity-20': !isScrolled,
      'bg-white': isScrolled || isOpen,
      'navbar-light': isScrolled,
      'navbar-dark': !isScrolled
      }">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="https://storage.googleapis.com/vue-course-api.appspot.com/cheryl-hexschool/1678219730669.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Jr57jwJwQnJxBbVJ6Mjlt4LMI02jKzEl8QFx%2FO0af1bDHh4ohdzqQt%2Fksjh9Q3FRPpaoLlHIMbGxzDA0zictZZvbzjPLl4OASeE3CwdkWnl%2Fqw2sjFBrQJDDeNSIAdvtWjLuaJ548Da0Ro4R9p9dqUHf9EMed7PhYaH6xIyznShARf4bBAH8IOm55edM%2FFlA9BWzmLYph7AAlYQGz0rUuW%2FtdsnV2qjaQKOieegfN8%2FWz%2FuswvapCNg2usNTkvdYLLEUTtkX%2F8OfI1AL5GJ9nF1kFctRa%2By2aU7pUal%2BwjW7rpK7PNk6HHtsa6UVOsw6xmxy9uNgUbO4KWIaBrsqkg%3D%3D" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" @click="openHb">
          <i class="bi bi-list fs-1" :class="{'d-none': isOpen}"></i>
          <i class="bi bi-x fs-1" :class="{'neutral-900': isOpen, 'd-none': !isOpen}"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto pt-3 Serif-TC endHeight">
            <li class="nav-item px-3 hb">
              <router-link to="/products" class="nav-link writing-nav">
                <span class="d-block letter-spacing" :class="{'hb-navColor': isOpen}">產品介紹</span>
                <span class="d-block" :class="{'hb-navColor': isOpen}">Product</span>
              </router-link>
            </li>
            <li class="nav-item px-3 hb">
              <router-link to="/news" class="nav-link writing-nav">
                <span class="d-block letter-spacing" :class="{'hb-navColor': isOpen}">別茶消息</span>
                <span class="d-block" :class="{'hb-navColor': isOpen}">News</span>
              </router-link>
            </li>
            <li class="nav-item px-3 hb">
              <router-link to="/about" class="nav-link writing-nav">
                <span class="d-block letter-spacing" :class="{'hb-navColor': isOpen}">關於別茶</span>
                <span class="d-block" :class="{'hb-navColor': isOpen}">About</span>
              </router-link>
            </li>
            <li class="nav-item px-3 hb">
              <router-link to="/cart" class="nav-link">
                <div class="d-flex">
                  <div class="col-10 endflex">
                    <span class="position-relative">
                      <span class="position-absolute topNegative start-50 translate-middle badge rounded-pill bg-danger fs-sm">
                        99+
                      </span>
                      <span class="d-block writing-nav letter-spacing" :class="{'hb-navColor': isOpen}">
                        購物車
                      </span>
                    </span>
                    <span class="d-block writing-nav" :class="{'hb-navColor': isOpen}">Cart</span>
                  </div>
                  <div class="col-auto m-auto endNegative">
                    <span class="badge rounded bg-danger">
                      99+
                    </span>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script>
export default {
  data () {
    return {
      isScrolled: false,
      isOpen: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const ninety = (window.innerHeight) * 0.88
      if (window.pageYOffset > ninety) {
        this.isScrolled = true
      } else {
        this.isScrolled = false
      }
    },
    openHb () {
      if (this.isOpen !== true) {
        this.isOpen = true
      } else {
        this.isOpen = false
      }
    }
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

  <style>
  .topNegative{
    top: -16px;
  }
  .endNegative{
    display: none;
  }
  .endflex{
    display: flex;
  }
  @media screen and (min-width: 992px) {
    .writing-nav{
      writing-mode: vertical-lr;
    }
    .desktopPx{
      padding: 0 11rem;
    }
  }
  @media screen and (max-width: 991px) {
    .topNegative{
      display: none;
    }
    .endNegative{
      display: block;
    }
    .endHeight{
      height: 60vh;
    }
    .endflex{
      display: block;
    }
    .hb{
      padding: 1rem 0.5rem;
      border-bottom: 1px solid #A8A29E;
    }
    .hb-navColor{
      color: #292524;
    }
  }
  </style>
