<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="mb-3">
          <label for="inputUsername" class="form-label">用户名</label>
          <input type="text" class="form-control" id="inputUsername">
        </div>
        <div class="mb-3">
          <label for="inputPassword" class="form-label">密码</label>
          <input type="password" class="form-control" id="inputPassword">
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          @click="login"
        >
          登陆
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import router from '../router.js'

function login() {
  router.push('/main/alert-binding')
}

</script>

<style scoped>
</style>
