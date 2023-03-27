<template>
  <!-- scroll down -->
  <!-- <section
    class="vh-100 d-none d-lg-flex justify-content-center align-items-end position-relative z-2"
  >
    <div class="d-flex justify-content-center align-items-center mb-72">
      <span class="border-start-12"></span>
      <p class="text-secondary fs-5 font-monospace text-uppercase px-3 mb-0">
        scroll down
      </p>
      <span class="border-end-12"></span>
    </div>
  </section> -->

  <section class="position-absolute z-1 w-100">
    <img
      src="/src/assets/images/banner-d.png"
      class="w-100 d-none d-lg-inline"
      alt=""
    />
    <img
      src="/src/assets/images/banner-m.png"
      class="w-100 img-fluid d-lg-none overflow-hidden"
      alt=""
    />
  </section>
  <main class="w-100 position-relative z-2">
    <div class="container hero">
      <div class="w-50">
        <img
          src="/src/assets/images/hero_word.png"
          class="mb-4 img-fluid"
          alt=""
        />
        <h2 class="ls-2 text-nowrap">活力早餐的加油站</h2>
      </div>
    </div>

    <div class="container">
      <!-- latest news -->
      <section class="row flex-sm-row flex-column mt-499 mt-sm-473">
        <div class="col-sm-5 col mb-sm-0 mb-4">
          <h2 class="ls-2 mb-sm-0 mb-1 text-sm-start text-center">最新消息</h2>
          <h2
            class="fs-1 text-secondary font-monospace text-uppercase text-sm-start text-center"
          >
            latest news
          </h2>
        </div>
        <div class="col-sm-7 col">
          <div
            class="d-flex justify-content-between align-items-center mb-sm-6 mb-3"
          >
            <span class="border-start-16"></span>
            <p class="fs-5 px-3 mb-0 ls-15">新上市！ 無糖紅茶</p>
            <span class="border-end-16 ms-auto"></span>
          </div>
          <div
            class="d-flex justify-content-between align-items-center mb-sm-6 mb-3"
          >
            <span class="border-start-16"></span>
            <p class="fs-5 px-3 mb-0 ls-15">112 年春節 初一～初六休息</p>
            <span class="border-end-16 ms-auto"></span>
          </div>
          <div
            class="d-flex justify-content-between align-items-center mb-sm-6 mb-3"
          >
            <span class="border-start-16"></span>
            <p class="fs-5 px-3 mb-0 ls-15">寒流來襲~ 來杯溫暖的玉米濃湯</p>
            <span class="border-end-16 ms-auto"></span>
          </div>
          <div
            class="d-flex justify-content-between align-items-center mb-sm-6 mb-3"
          >
            <span class="border-start-16"></span>
            <p class="fs-5 px-3 mb-0 ls-15">多種套餐優惠中</p>
            <span class="border-end-16 ms-auto"></span>
          </div>
        </div>
      </section>
      <!-- start from here -->
      <section class="mt-200 mt-sm-80">
        <div class="d-flex flex-column mb-sm-96 mb-4">
          <h2 class="ls-2 mb-0 text-sm-end text-center">
            活力早晨，從這開始！
          </h2>
          <h2
            class="fs-1 text-secondary font-monospace text-uppercase text-sm-end text-center"
          >
            start from here
          </h2>
        </div>
        <ul class="row row-cols-1 row-cols-md-2 row-cols-lg-3 list-unstyled">
          <li class="col mb-4 text-center">
            <router-link to="/products" class="btn mw-416">
              <div class="card border-0 align-items-center">
                <div class="card-header position-relative mb-3 mb-md-4 border-0 w-100">
                  <div class="border-top-104"></div>
                  <button
                    type="button"
                    class="btn btn-secondary fw-bold fs-3 text-nowrap rounded-pill position-absolute bottom-0 start-50 translate-middle-x py-2 px-7"
                  >
                    招牌漢堡
                  </button>
                </div>
                <div class="rounded rounded-7 mb-3 mb-md-4">
                  <img
                    src="/src/assets/images/product-1.jpg"
                    class="img-fluid object-top rounded-7"
                    alt="Hamburger"
                  />
                </div>
                <div class="card-body">
                  <p class="text-center px-3 mb-0">
                    最經典的美味，小時候老爸都會說，去找你阿母拿一個漢堡蛋當早餐
                  </p>
                </div>
                <div class="card-footer border-0 p-0 w-100">
                  <div class="border-bottom-104"></div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="col mb-4 text-center">
            <router-link to="/products" class="btn mw-416">
              <div class="card border-0 align-items-center">
                <div class="card-header position-relative mb-3 mb-md-4 border-0 w-100">
                  <div class="border-top-104"></div>
                  <button
                    type="button"
                    class="btn btn-secondary fw-bold fs-3 text-nowrap rounded-pill position-absolute bottom-0 start-50 translate-middle-x py-2 px-7"
                  >
                    嚴選套餐
                  </button>
                </div>
                <div class="rounded rounded-7 mb-3 mb-md-4">
                  <img
                    src="/src/assets/images/product-2.jpg"
                    class="img-fluid object-top rounded-7"
                    alt="Hamburger"
                  />
                </div>
                <div class="card-body">
                  <p class="text-center px-3 mb-0">
                    這個也想吃、那個也想吃？那就來個套餐吧！
                  </p>
                </div>
                <div class="card-footer border-0 p-0 w-100">
                  <div class="border-bottom-104"></div>
                </div>
              </div>
            </router-link>
          </li>
          <li class="col mb-4 text-center">
            <router-link to="/products" class="btn mw-416">
              <div class="card border-0 align-items-center">
                <div class="card-header position-relative mb-3 mb-md-4 border-0 w-100">
                  <div class="border-top-104"></div>
                  <button
                    type="button"
                    class="btn btn-secondary fw-bold fs-3 text-nowrap rounded-pill position-absolute bottom-0 start-50 translate-middle-x py-2 px-7"
                  >
                    滑嫩蛋餅
                  </button>
                </div>
                <div class="rounded rounded-7 mb-3 mb-md-4">
                  <img
                    src="/src/assets/images/product-3.jpg"
                    class="img-fluid object-top rounded-7"
                    alt="Hamburger"
                  />
                </div>
                <div class="card-body">
                  <p class="text-center px-3 mb-0">
                    傳統的蛋餅皮，換上Q彈滑嫩的河粉餅皮，蹦出新滋味！
                  </p>
                </div>
                <div class="card-footer border-0 p-0 w-100">
                  <div class="border-bottom-104"></div>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
    </div>
    <!-- make life smoother -->
    <section class="mt-200 position-relative mt-sm-80 w-100">
      <div class="d-flex justify-content-lg-end w-100">
        <img
          src="/src/assets/images/hero2.png"
          style="margin-right: 110.8px"
          class="d-lg-inline d-none float-end img-fluid"
          alt=""
        />
        <div class="d-lg-none w-100">
          <div class="container">
            <h2 class="ls-2 mb-0 text-sm-end text-center">
              活力早晨，從這開始！
            </h2>
            <h2
              class="fs-1 text-secondary font-monospace text-uppercase text-sm-end text-center"
            >
              start from here
            </h2>
          </div>
          <img src="/src/assets/images/hero2-m.png" class="mb-3 w-100" alt="" />
          <div class="container text-center">
            <router-link
              to="/draw"
              class="btn btn-secondary rounded-pill fs-6 ls-3 px-4 py-2 nav-item"
              role="button"
            >
              <img
                src="/src/assets/images/icon-dice.png"
                style="height: 32px"
                class="me-1 hover-hide"
                alt=""
                srcset=""
              />
              <img
                src="/src/assets/images/icon-dice-hover.png"
                style="height: 32px"
                class="me-1 hover"
                alt=""
                srcset=""
              />
              讓我幫你選早餐吧
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="w-100 h-100 position-absolute top-0 start-0 d-none d-lg-inline"
      >
        <div class="container h-100">
          <div class="row h-100 align-items-center">
            <div class="col-5">
              <h2 class="mb-1 ls-2">你的煩腦，</h2>
              <h2 class="mb-0 ls-2">我也許能幫忙！</h2>
              <h1
                class="text-secondary text-nowrap font-monospace text-uppercase mb-6"
              >
                make life smoother
              </h1>
              <p class="fs-6 ls-15 mb-6">
                每天早上都要煩惱吃什麼嗎？除了日復一日的餐點，來試試樂透的早餐吧！
              </p>
              <router-link
                to="/draw"
                class="btn btn-secondary rounded-pill fs-6 ls-3 px-4 py-2 nav-item"
                role="button"
              >
                <img
                  src="/src/assets/images/icon-dice.png"
                  style="height: 32px"
                  class="me-1 hover-hide"
                  alt=""
                  srcset=""
                />
                <img
                  src="/src/assets/images/icon-dice-hover.png"
                  style="height: 32px"
                  class="me-1 hover"
                  alt=""
                  srcset=""
                />
                讓我幫你選早餐吧
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- visit us -->
    <section class="mt-200 container mt-sm-80 w-100 mb-200 mb-sm-80">
      <div
        class="d-flex justify-content-lg-between flex-column flex-lg-row w-100"
      >
        <div
          class="w-100 w-lg-50 p-88 bg-third rounded rounded-lg-8 rounded-6 text-lg-start text-center mb-2 mb-lg-0 me-lg-3"
        >
          <h2 class="ls-2 mb-lg-0 mb-1">造訪我們</h2>
          <h1 class="text-danger font-monospace text-uppercase mb-lg-5 mb-3">
            visit us
          </h1>
          <ul class="list-unstyled text-start mb-0">
            <li class="d-flex justify-content-between align-items-center mb-5">
              <span class="border-start-20"></span>
              <p class="fs-3 px-lg-3 px-2 mb-0 ls-2 fw-bold">
                鮮堡漢堡 板橋文化店
              </p>
              <span class="border-end-20"></span>
            </li>
            <li class="d-flex align-items-center mb-2">
              <span class="material-symbols-rounded me-2"> call </span>
              <p class="ls-15 mb-0">02-22590910</p>
            </li>
            <li class="d-flex align-items-center">
              <span class="material-symbols-rounded me-2"> location_on </span>
              <p class="ls-15 mb-0">新北市板橋區文化路一段270巷3弄18號1樓</p>
            </li>
          </ul>
        </div>
        <div class="w-100 w-lg-50">
          <img
            src="/src/assets/images/map.png"
            class="d-none d-lg-inline img-fluid w-100 h-100 rounded rounded-lg-8 rounded-6 object-fit-cover"
            alt=""
          />
          <img
            src="/src/assets/images/map-m.png"
            class="d-lg-none w-100 rounded rounded-lg-8 rounded-6"
            alt=""
          />
        </div>
      </div>
    </section>
  </main>
</template>
