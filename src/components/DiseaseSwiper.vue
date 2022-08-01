<template>
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
 
   <!-- 指示符 -->
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  <!-- 轮播图片 -->
  <div class="carousel-inner" @click="detail">
    <div class="carousel-item active" >
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp7.itc.cn%2Fq_70%2Fimages03%2F20201113%2Fe13ac041fa8340c7aee29ea48bfcef3f.jpeg&refer=http%3A%2F%2Fp7.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661747492&t=1df7d0411a49e4f0f7f2f42940476448" class="d-block" style="width:100%" height="300px" >
    </div>
    <div class="carousel-item">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fboot-img.xuexi.cn%2Fcontribute_img%2F20211210084836%2F45473510987807319.jpg&refer=http%3A%2F%2Fboot-img.xuexi.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661747495&t=ad781a26a96bc9d8ea11122bf69f5909" class="d-block" style="width:100%" height="300px">
    </div>
    <div class="carousel-item">
      <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp3.itc.cn%2Fq_70%2Fimages03%2F20201113%2F2d95c2b786144e62bdbeafd36fb7f754.jpeg&refer=http%3A%2F%2Fp3.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1661747495&t=563b44ed86511413e33b11f0119ff2fb" class="d-block"  height="300px" style="width:100%">
    </div>
  </div>
  
  <!-- 左右切换按钮 -->
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>
</template>
<script setup>

import router from '../router.js'

function detail(){
  router.push('/main/data-monitor')
}
</script>
<style scoped>

</style>
