<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col"> </th>
        <th scope="col">文物名称</th>
        <th scope="col">缩略图</th>
        <th scope="col">文物编号</th>
        <th scope="col">传感器ID</th>
        <th scope="col">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="搜索" aria-label="搜索" aria-describedby="button-addon2">
            <button class="btn btn-outline-secondary" type="button" id="button-addon2">搜索</button>
          </div>
        </th>
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
        <td>{{ item.sensor_id }}</td>
        <td class="d-flex flex-row">
          <button type="button" class="btn btn-primary p-2">
            检查数据
          </button>
          <button type="button" class="btn btn-primary p-2">
            实时查看
          </button>
          <button type="button" class="btn btn-outline-secondary p-2">
            点击报警
          </button>
          <button type="button" class="btn btn-outline-success p-2">
            已处理
          </button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="toast-container position-fixed top-0 end-0 p-3">
    <div ref="el" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <!-- <img src="..." class="rounded me-2" alt="..."> -->
        <strong class="me-auto">紧急报警</strong>
        <small class="text-muted">just now</small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        突发情况
      </div>
    </div>
  </div>


</template>

<script setup>
import { reactive } from 'vue'

const relic_list = reactive([
  {name: 'A', img: '', code: '001', sensor_id: '001'},
  {name: 'B', img: '', code: '002', sensor_id: '002'},
  {name: 'C', img: '', code: '003', sensor_id: '003'},
])

import { onMounted, ref } from 'vue'
import { Toast } from 'bootstrap'
const el = ref()

onMounted(() => {
  var toast = new Toast(el.value)
  toast.show()
})

</script>

<style scoped>

</style>
