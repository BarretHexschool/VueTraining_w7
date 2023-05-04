<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-md">
      <div class="modal-content">
        <img class="productModalImg" :src="tempProduct.imageUrl" />
        <div class="modal-header d-block">
          <div class="d-flex justify-content-between flex-wrap">
            <h3>{{ tempProduct.mainTitle }}</h3>
            <p>$ {{ tempProduct.price }}</p>
          </div>
          <p class="mb-2">{{ tempProduct.description }}</p>
          <button
            type="button"
            class="btn-close position-absolute top-0 end-0 p-1 m-1 rounded-circle bg-opacity-90 bg-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <VForm ref="form" @submit="addToCartBtn">
            <div v-if="tempProduct.select1" class="mb-2 radioBox">
              <p class="mb-0">主食選擇：</p>
              <ErrorMessage name="selectedOption1"
                ><p class="invalid-feedback d-block my-0">
                  *請選擇您所想要的主食
                </p></ErrorMessage
              >
              <Field
                id="selectedOption1"
                name="selectedOption1"
                type="radio"
                rules="required"
                v-model="selectedOption1"
              >
                <div class="form-check" v-for:="option in tempProduct.select1">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="selectedOption1"
                    :id="option"
                    :value="option"
                    v-model="selectedOption1"
                  />
                  <label class="form-check-label" :for="option">
                    {{ option }}
                  </label>
                </div>
              </Field>
            </div>

            <div v-if="tempProduct.select2" class="mb-2 radioBox">
              <p class="mb-0">飲料選擇：</p>
              <ErrorMessage name="selectedOption2"
                ><p class="invalid-feedback d-block my-0">
                  *請問你要喝什麼？
                </p></ErrorMessage
              >
              <Field
                id="selectedOption2"
                name="selectedOption2"
                type="radio"
                rules="required"
                v-model="selectedOption2"
              >
                <div class="form-check" v-for:="option in tempProduct.select2">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="selectedOption2"
                    :id="option"
                    :value="option"
                    v-model="selectedOption2"
                  />
                  <label class="form-check-label" :for="option">
                    {{ option }}
                  </label>
                </div>
              </Field>
            </div>
            <div v-if="tempProduct.iceLevel" class="mb-2 radioBox">
              <p class="mb-0">冰冷熱選擇：</p>
              <ErrorMessage name="iceLevel"
                ><p class="invalid-feedback d-block my-0">
                  *請問要冰的？還是熱的？
                </p></ErrorMessage
              >
              <Field
                id="iceLevel"
                name="iceLevel"
                type="radio"
                rules="required"
                v-model="iceLevel"
              >
                <div
                  class="form-check"
                  v-for="(option, index) in drinkType"
                  :key="index"
                >
                  <input
                    class="form-check-input"
                    type="radio"
                    name="iceLevel"
                    :id="option"
                    :value="option"
                    v-model="iceLevel"
                  />
                  <label class="form-check-label" :for="option">
                    {{ option }}
                  </label>
                </div>
              </Field>
            </div>
            <div class="mb-3">

              <label for="message" class="col-form-label"
                >餐點備註<br /><span class="fs-6"
                  >我們將盡量配合，未符合期待還請多包容哦，如兩份一樣的餐點要不同做法，請寫在一起。</span
                ></label
              >
              <Field
                class="form-control"
                name="message"
                as="textarea"
                id="message"
                v-model="message"
                placeholder="例如：不要小黃瓜、不要沙拉醬、要加番茄醬、一份正常做，一份不要沙拉醬"
              />
            </div>
            <div class="modal-footer justify-content-between">
          <button
            type="button"
            class="btn btn-danger"
            @click="watchMore(tempProduct.id)"
          >
            看更多
          </button>
          <button type="submit" class="btn btn-secondary">放入購物車</button>
        </div>
          </VForm>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import cartStore from '@/stores/useCartStore'
import { mapActions } from 'pinia'
import { Field, Form, ErrorMessage } from 'vee-validate'
export default {
  props: ['tempProduct', 'products', 'productModalElement'],
  data () {
    return {
      drinkType: ['冰', '冷(去冰)', '溫'],
      message: '',
      selectedOption1: '',
      selectedOption2: '',
      iceLevel: '',
      id: this.tempProduct.id,
      isSelect: this.tempProduct.is_select
    }
  },
  methods: {
    addToCartBtn (data) {
      let addid = this.tempProduct.id
      if (this.tempProduct.is_select === 1) {
        addid = this.findId()
      }
      this.addToCart(addid, 1, this.message)
      this.productModalElement.hide()
      this.$refs.form.resetForm()
    },
    findId () {
      if (this.selectedOption1 === '') {
        this.selectedOption1 = undefined
      }
      if (this.selectedOption2 === '') {
        this.selectedOption2 = undefined
      }
      if (this.iceLevel === '') {
        this.iceLevel = undefined
      }
      const findProduct = this.products.find((p) => {
        return (p.mainTitle === this.tempProduct.mainTitle &&
                    p.select1 === this.selectedOption1 &&
                    p.select2 === this.selectedOption2 &&
                    p.iceLevel === this.iceLevel)
      })
      return findProduct.id
    },
    watchMore (id) {
      this.productModalElement.hide()
      this.$router.push(`/product/${id}`)
    },
    ...mapActions(cartStore, ['addToCart'])
  },
  components: {
    ErrorMessage,
    VForm: Form,
    Field
  }
}
</script>
