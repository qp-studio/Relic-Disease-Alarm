<template>
  <table class="table table-borderless">
    <thead>
      <tr>
        <th scope="col">文物名称</th>
        <th scope="col">缩略图</th>
        <th scope="col">文物编号</th>
        <th scope="col">传感器ID</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{ relic.name }}</th>
        <td>{{ relic.img }}</td>
        <td>{{ relic.code }}</td>
        <td>{{ relic.sensor_id }}</td>
      </tr>
    </tbody>
  </table>

</template>

<script setup>
import { reactive } from 'vue'

const relic = reactive({
  name: 'C',
  img: '',
  code: '003',
  sensor_id: '003'
})


</script>

<style scoped>

</style>
