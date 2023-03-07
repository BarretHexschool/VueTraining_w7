<template>
  <table class="table table-hover mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th width="200">產品名稱</th>
        <th width="100">原價</th>
        <th width="100">售價</th>
        <th width="100">是否啟用</th>
        <th width="100">功能</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <th width="120">{{ product.category }}</th>
        <td width="200" class="w-100 d-flex align-items-center">
          <img class="w-25 pe-1" :src="product.imageUrl" />
          <p>{{ product.title }}</p>
        </td>
        <td width="100">{{ product.origin_price }}</td>
        <td width="100">{{ product.price }}</td>
        <td width="100">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="changeStatus"
              v-model="product.is_enabled"
              :true-value="1"
              :false-value="0"
              @change="changeState(product)"
            />
          </div>
        </td>
        <td width="100">
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="openModal('edit', product)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="openModal('delete', product)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: ['products', 'openModal', 'changeState']
}
</script>
