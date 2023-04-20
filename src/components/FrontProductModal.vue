<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <img class="w-100" :src="tempProduct.imageUrl">
      <div class="modal-header d-block">
        <div class="d-flex justify-content-between">
          <h3>{{ tempProduct.mainTitle }}</h3>
          <p>$ {{ tempProduct.price }}</p>
        </div>
        <p class="mb-2">{{ tempProduct.description }}</p>
        <button type="button" class="btn-close position-absolute top-0 end-0 p-1 m-1 rounded-circle bg-opacity-75 bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
            <div class="mb-3">
              <label for="message" class="col-form-label">餐點備註<br><span class="fs-6">我們將盡量配合，未符合期待還請多包容哦</span></label>
              <textarea v-model="message" class="form-control" id="message" placeholder="例如：不要小黃瓜、不要沙拉醬、要加番茄醬"></textarea>
            </div>
          </form>
      </div>
      <div class="modal-footer justify-content-between">
        <button type="button" class="btn btn-danger" >看更多</button>
        <button type="button" class="btn btn-secondary"  @click="addToCart(tempProduct.id,1,message)">放入購物車</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import cartStore from '@/stores/useCartStore'
import { mapActions } from 'pinia'
export default {
  props: ['tempProduct'],
  data () {
    return {
      drinkType: [{ selectValue: 'cold', chinese: '冷飲(去冰)' }, { selectValue: 'ice', chinese: '冰飲' }, { selectValue: 'hot', chinese: '熱飲' }],
      message: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['addToCart'])
  }
}
</script>
