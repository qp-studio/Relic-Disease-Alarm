<template>
  <dl class="row">
    <dt class="col-sm-2">系统状态</dt>
    <dd class="col-sm-10 row">
      <p class="col-sm-4">在线传感器数量:</p>
      <p class="col-sm-8">{{ system_state.sensor_online }}</p>
      <p class="col-sm-4">离线传感器数量:</p>
      <p class="col-sm-8">{{ system_state.sensor_offline }}</p>
      <p class="col-sm-4">报警数量:</p>
      <p class="col-sm-8">{{ system_state.alert_count }}</p>
      <p class="col-sm-4">新传感器数量:</p>
      <p class="col-sm-8">{{ system_state.sensor_new }}</p>
    </dd>

    <dt class="col-sm-2">最新报警</dt>
    <dd class="col-sm-10 row">
      <template
        v-for="msg in lastest_alert"
        :key="msg.datetime"
      >
        <p class="col-sm-4">{{ msg.title }}</p>
        <p class="col-sm-8">{{ msg.datetime.toLocaleString() }}</p>
      </template>
    </dd>

    <dt class="col-sm-3">新传感器提醒</dt>
    <dd class="col-sm-9">
      <p
        v-for="msg in sensor_new_notice"
        :key="msg"
      >
        {{ msg }}
      </p>
    </dd>
  </dl>
</template>

<script setup>
import { reactive } from 'vue'

const system_state = reactive({
  sensor_online: 10,
  sensor_offline: 12,
  sensor_new: 23,
  alert_count: 35,
})

const lastest_alert = reactive([
  {title: '文物A报警', datetime: new Date(2022, 1, 1, 11, 23, 45)},
  {title: '文物B报警', datetime: new Date(2022, 2, 2, 13, 45, 23)},
])

const sensor_new_notice = reactive([
  '您有新的传感器ID001请求连接',
])


</script>

<style scoped>

</style>
