<template>
  <LoadingDesign :is-Loading="isLoading"/>
  <main class="w-100 position-relative z-2">
    <section class="container common-hero">
      <div class="row flex-column flex-lg-row mb-sm-96 mb-4">
        <div class="col d-flex align-items-center mb-4">
          <div>
            <h2 class="ls-2 mb-0 text-sm-start text-center">關於我們</h2>
            <h2
              class="fs-1 text-secondary font-monospace text-uppercase text-sm-start text-center"
            >
              about us
            </h2>
            <ul class="list-unstyled text-start mb-0">
              <li
                class="d-flex justify-content-between align-items-center mb-5"
              >
                <span class="border-start-20 border-secondary"></span>
                <p class="fs-3 px-lg-3 px-2 mb-0 ls-2 fw-bold">
                  鮮堡漢堡 板橋文化店
                </p>
                <span class="border-end-20 border-secondary"></span>
              </li>
              <li class="d-flex align-items-center mb-2">
                <a class="text-black text-decoration-none ls-15 mb-0" href="tel:+886222590910"><span class="material-symbols-rounded me-2"> call </span>02-22590910</a>
              </li>
              <li class="d-flex align-items-center">
                <span class="material-symbols-rounded me-2"> location_on </span>
                <p class="ls-15 mb-0">新北市板橋區文化路一段270巷3弄18號1樓</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col">
          <img
            src="/src/assets/images/about.jpg"
            class="img-fluid w-100 h-100 rounded rounded-lg-8 rounded-6 object-fit-cover"
            alt=""
          />
        </div>
      </div>
      <div class="text-center">
        <h2 class="mb-1 ls-2">營業時間</h2>
        <h1
          class="text-secondary text-nowrap font-monospace text-uppercase mb-5"
        >
          Opening hours
        </h1>
        <p class="fs-3 ls-15 pb-6 mb-0">每日 06：00～14：00</p>
      </div>
    </section>
  </main>
</template>
<script>
import LoadingDesign from '@/components/LoadingDesign.vue'
export default {
  data () {
    return {
      isLoading: true
    }
  },
  components: {
    LoadingDesign
  },
  mounted () {
    document.title = '鮮堡漢堡 文化店 | 關於我們'
    if (document.readyState === 'complete') {
      this.isLoading = false
    }
  }
}
</script>
