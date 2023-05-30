<template>
      <div class="position-relative m-5">
        <div class="progress bg-third" style="height: 2px">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            aria-label="Progress"
            :style="{width: `${progressBarValue}%`}"
            :aria-valuenow="progressBarValue"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <template v-for="step in steps" :key="step.id">
      <button
        type="button"
        :class="stepButtonClass(step)"
        :style="{left: `${step.value}%`}"
        style="width: 1rem; height: 1rem"
      ></button>
      <p :class="stepTextClass(step)" :style="{left: `${step.value}%`}">{{ step.label }}</p>
    </template>
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
    steps () {
      return [
        { id: 1, label: '選擇餐點', value: '0' },
        { id: 2, label: '訂購內容', value: '25' },
        { id: 3, label: '付款方式', value: '50' },
        { id: 4, label: '餐點準備中', value: '75' },
        { id: 5, label: '完成取餐', value: '100' }
      ]
    },
    progressBarValue () {
      const step = this.steps.find(item => item.label === this.currentState)
      return step ? parseInt(step.value) : 0
    }
  },
  methods: {
    getCurrentStepId () {
      const step = this.steps.find(item => item.label === this.currentState)
      return step ? parseInt(step.id) : 0
    },
    stepButtonClass (step) {
      const baseClass = 'position-absolute top-0 translate-middle btn btn-sm rounded-pill text-white'
      if (step.id <= this.getCurrentStepId()) {
        return `${baseClass} btn-danger`
      } else {
        return `${baseClass} btn-third `
      }
    },
    stepTextClass (step) {
      const baseClass = 'position-absolute top-0 translate-middle pt-6 fs-7 text-nowrap'
      if (step.id <= this.getCurrentStepId()) {
        return `${baseClass} fw-bold`
      } else {
        return `${baseClass} text-secondary`
      }
    }
  }
}
</script>
