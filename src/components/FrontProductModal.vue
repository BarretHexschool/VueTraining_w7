<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
  <div class="modal-dialog modal-dialog-centered modal-sm">
    <div class="modal-content">
      <img class="w-100" :src="tempProduct.imageUrl">
      <div class="modal-header d-block">
        <div class="d-flex justify-content-between flex-wrap">
          <h3>{{ tempProduct.mainTitle }}</h3>
          <p>$ {{ tempProduct.price }}</p>
        </div>
        <p class="mb-2">{{ tempProduct.description }}</p>
        <button type="button" class="btn-close position-absolute top-0 end-0 p-1 m-1 rounded-circle bg-opacity-75 bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div v-if="tempProduct.select1" class="mb-2">
            <p class="mb-0"> 主食選擇：</p>
              <div v-for="option in tempProduct.select1" :key="option">
            <label>
        <input type="radio" :value="option" v-model="selectedOption1">
        {{ option }}</label>
      </div>
    </div>

      <div v-if="tempProduct.select2" class="mb-2">
    <p class="mb-0"> 飲料選擇：</p>
    <div v-for="option in tempProduct.select2" :key="option">
          <label>
      <input type="radio" :value="option" v-model="selectedOption2">
      {{ option }}</label>
    </div>
    </div>
            <div class="mb-3">
              <label for="message" class="col-form-label">餐點備註<br><span class="fs-6">我們將盡量配合，未符合期待還請多包容哦，如兩份一樣的餐點要不同做法，請寫在一起。</span></label>
              <textarea v-model="message" class="form-control" id="message" placeholder="例如：不要小黃瓜、不要沙拉醬、要加番茄醬、一份正常做，一份不要沙拉醬"></textarea>
            </div>
          </form>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-danger"  @click="watchMore(tempProduct.id)">看更多</button>
        <button type="button" class="btn btn-secondary"  @click="addToCartBtn(tempProduct.id,tempProduct.is_select)">放入購物車</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import cartStore from '@/stores/useCartStore'
import { mapActions } from 'pinia'
export default {
  props: ['tempProduct', 'products', 'productModalElement'],
  data () {
    return {
      drinkType: [{ selectValue: 'cold', chinese: '冷飲(去冰)' }, { selectValue: 'ice', chinese: '冰飲' }, { selectValue: 'hot', chinese: '熱飲' }],
      message: '',
      selectedOption1: '',
      selectedOption2: ''
    }
  },
  methods: {
    addToCartBtn (id, isSelect) {
      if (isSelect === 1) {
        id = this.findId()
      }
      this.addToCart(id, 1, this.message)
      this.productModalElement.hide()
      this.message = ''
      this.selectedOption1 = ''
      this.selectedOption2 = ''
    },
    findId () {
      const findProduct = this.products.find(p => {
        return p.mainTitle === this.tempProduct.mainTitle &&
        p.select1 === this.selectedOption1 &&
             p.select2 === this.selectedOption2
      })
      return findProduct.id
    },
    watchMore (id) {
      this.productModalElement.hide()
      this.$router.push(`/product/${id}`)
    },
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>
