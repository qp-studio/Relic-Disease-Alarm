<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col"> </th>
        <th scope="col">文物名称</th>
        <th scope="col">缩略图</th>
        <th scope="col">文物编号</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr
        v-for="(item, index) in relic_list"
        :key="index"
      >
        
        <th scope="row">
          <input 
            class="form-check-input"
            type="radio"
            name="radioSensorBinding"
            :id="'radio' + index"
          >
        </th>
        <td>{{ item.name }}</td>
        <td>{{ item.img }}</td>
        <td>{{ item.code }}</td>
      </tr>
    </tbody>
  </table>
  <button
    type="button"
    class="btn btn-primary"
    @click="confirm"
  >
    确认绑定
  </button>
</template>

<script setup>
import { reactive } from 'vue'
import router from '../router.js'

function confirm(){
  alert("绑定成功")
  router.push('/main/senser-list')
}
const relic_list = reactive([
  {name: 'A', img: '', code: '001'},
  {name: 'B', img: '', code: '002'},
  {name: 'C', img: '', code: '003'},
])

</script>

<style scoped>

</style>
