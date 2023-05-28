<template>
      <div class="position-relative m-5">
        <div class="progress bg-third" style="height: 2px">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            aria-label="Progress"
            :style="{ width: progressBarWidth }"
            :aria-valuenow="progressBarValue"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button
          type="button"
          class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-danger rounded-pill text-white"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-0 translate-middle pt-6 fs-7 fw-bold"
        >
          選擇餐點
        </p>
        <button
          type="button"
          class="position-absolute top-0 start-33 translate-middle btn btn-sm btn-danger rounded-pill text-white"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-33 translate-middle pt-6 fs-7 fw-bold"
        >
          訂購資料
        </p>
        <button
          type="button"
          class="position-absolute top-0 start-66 translate-middle btn btn-sm btn-third rounded-pill text-white"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-66 translate-middle pt-6 fs-7 text-secondary"
        >
        餐點準備中
        </p>
        <button
          type="button"
          class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-third rounded-pill"
          style="width: 1rem; height: 1rem"
        ></button>
        <p
          class="position-absolute top-0 start-100 translate-middle pt-6 fs-7 text-secondary text-nowrap"
        >
          完成取餐
        </p>
      </div>
</template>

<script>
export default {
  props: {
    currentState: {
      type: String,
      required: true
    }
  },
  computed: {
    progressBarWidth () {
      if (this.currentState === '選擇餐點') {
        return '0%'
      } else if (this.currentState === '訂購資料') {
        return '33.33%'
      } else if (this.currentState === '餐點準備中') {
        return '66.66%'
      } else {
        return '0%'
      }
    },
    progressBarValue () {
      if (this.currentState === '選擇餐點') {
        return '0'
      } else if (this.currentState === '訂購資料') {
        return '33.33'
      } else if (this.currentState === '餐點準備中') {
        return '66.66'
      } else {
        return '0'
      }
    }
  }
}
</script>
