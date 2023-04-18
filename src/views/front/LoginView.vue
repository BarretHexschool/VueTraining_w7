<template>
    <main
      id="app"
      class="login-center container d-flex align-items-center justify-content-center"
      style="min-height: calc(100vh - 50px)"
    >
      <form class="col-auto shadow rounded p-4 bg-secondary" @submit.prevent="login">
        <div class="mb-3">
          <h4 class="fw-bold">歡迎使用 鮮堡漢堡 管理系統</h4>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label ls-3">帳號：</label>
          <input type="email" class="form-control" id="email" v-model="user.username"/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label ls-3">密碼：</label>
          <input type="password" class="form-control" id="password" v-model="user.password" />
        </div>
        <button type="submit" class="btn btn-secondary w-100 mb-3 bg-black text-secondary ls-3">登  入</button>
      </form>
    </main>

</template>
<script>
import { mapActions } from 'pinia'
import sweetAlertStore from '@/stores/useSweetAlertStore'
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$http.post(`${VITE_APP_URL}/v2/admin/signin`, this.user)
        .then(res => {
          const { token, expired } = res.data
          document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin')
        })
        .catch(err => {
          this.loginCheckError(err.response.data.message)
        })
    },
    ...mapActions(sweetAlertStore, ['loginCheckError'])

  }
}
</script>
