<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    id="productModal"
    ref="productModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="productModalLabel" class="modal-title">
            <span class="lh-2" v-if="isNew">新增最新消息</span>
            <span class="lh-2" v-else>編輯 最新消息</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
              <div class="mb-3">
                <label for="title" class="form-label">內容</label>
                <input
                  id="title"
                  v-model="tempArticle.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入顯示的訊息內容"
                />
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    id="isPublic"
                    v-model="tempArticle.isPublic"
                    class="form-check-input"
                    type="checkbox"
                    :true-value= "true"
                    :false-value= "false"
                  />
                  <label class="form-check-label" for="isPublic"
                    >是否啟用</label
                  >
                </div>
              </div>

        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateArticle">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['tempArticle', 'isNew', 'updateArticle', 'createImages'],
  template: '#product-modal-template'
}
</script>
