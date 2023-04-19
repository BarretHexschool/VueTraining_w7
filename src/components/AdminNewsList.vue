<template>
  <table class="table table-hover mt-4">
    <thead>
      <tr>
        <th width="200">最新消息內容</th>
        <th width="100">建立日期</th>
        <th width="100">是否啟用</th>
        <th width="100">功能</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles" :key="article.id">
        <td>{{ article.title }}</td>
        <td>{{ $moment(new Date(article.create_at )).format('YYYY-MM-DD HH:mm') }}</td>
        <td>
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="changeStatus"
              v-model="article.isPublic"
              :true-value="true"
              :false-value="false"
              @change="changeState(product)"
            />
          </div>
        </td>
        <td>
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-outline-primary"
              @click="openModal('edit', article)"
            >
              編輯
            </button>
            <button
              type="button"
              class="btn btn-outline-danger"
              @click="openModal('delete', article)"
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
  props: ['articles', 'openModal', 'changeState']
}
</script>
