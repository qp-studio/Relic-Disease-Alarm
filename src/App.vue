<template>

  <div class="container root">

    <h1>馆藏青铜质文物的本体检测和病害报警智慧应用</h1>
    <router-view></router-view>
    
  </div>

  <footer class="footer">
    <div class="container">
      版权所有: xxx | 地址: xxx | 邮编: xxx
    </div>
  </footer>

</template>

<script setup>
import router from './router.js'
router.push('/login')
</script>

<style scoped>

.root {
  background-color: rgba(255, 255, 255, 0);
  min-height: 100vh;
  background:
    linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.5) 100%),
    left  10% bottom 25% / 15% no-repeat url(src/assets/school_badge_blue.png),
    right 10% top    40% / 15% no-repeat url(src/assets/school_badge_blue.png),
    right 15% bottom 15% / 15% no-repeat url(src/assets/school_badge_blue.png);
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 25px;
  background-color: #f5f5f5;
  text-align: center;
}

</style>
