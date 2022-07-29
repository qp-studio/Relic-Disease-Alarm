<template>
  <div class="row">
    <div class="col-4">

      <div
        class="accordion"
        id="accordionPanelsStayOpenExample"
      >
        <div
          class="accordion-item"
          v-for="menu_item in menu"
          :key="menu_item.title"
        >
          <h2 
            class="accordion-header"
            :id="'heading' + menu_item.title"
          >
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#collapse' + menu_item.title"
              aria-expanded="true"
              :aria-controls="'collapse' + menu_item.title"
            >
                {{ menu_item.title }}
            </button>
          </h2>
          <div 
            :id="'collapse' + menu_item.title"
            class="accordion-collapse collapse show"
            :aria-labelledby="'heading' + menu_item.title"
          >
            <div class="accordion-body">
              <div class="list-group">
                <router-link
                  class="list-group-item list-group-item-action"
                  v-for="sub_menu in menu_item.sub_menu"
                  :key="sub_menu.title"
                  :to="sub_menu.url"
                >
                  {{ sub_menu.title }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const menu = reactive([
  {
    title: '文物和传感器管理',
    sub_menu: [
      { title: '传感器发现和绑定', url: '/main/senser-binding' },
      { title: '传感器列表',      url: '/main/senser-list' },
    ],
  }, {
    title: '数据管理',
    sub_menu: [
      { title: '文物浏览',       url: '/main/data-relic' },
      { title: '检测数据浏览',    url: '/main/data-monitor' },
    ],
  }, {
    title: '报警管理',
    sub_menu: [
      { title: '病害报警',       url: '/main/alarm-disease' },
      { title: '环境报警',       url: '/main/alarm-environment' },
    ],
  }, {
    title: '系统管理',
    sub_menu: [
      { title: '系统管理',       url: '/main/system-manager' },
    ],
  },
])

</script>

<style scoped>


</style>
