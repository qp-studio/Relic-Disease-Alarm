import { createRouter, createWebHashHistory } from 'vue-router'
import LoginPage from './pages/Login.vue'
import MainPage from './pages/Main.vue'

const MainPageSensorBinding = () => import('./pages/Main/SensorBinding.vue')
const MainPageSensorList    = () => import('./pages/Main/SensorList.vue')

const MainPageDataRelic   = () => import('./pages/Main/DataRelic.vue')
const MainPageDataMonitor = () => import('./pages/Main/DataMonitor.vue')

const MainPageAlarmDisease     = () => import('./pages/Main/AlarmDisease.vue')
const MainPageAlarmEnvironment = () => import('./pages/Main/AlarmEnvironment.vue')

const MainPageSystemManager = () => import('./pages/Main/SystemManager.vue')

const Home = { template: '<div>Home</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginPage },
  { 
    path: '/main',
    component: MainPage,
    children: [
      {path: 'senser-binding',    component: MainPageSensorBinding},
      {path: 'senser-list',       component: MainPageSensorList},
      {path: 'data-relic',        component: MainPageDataRelic},
      {path: 'data-monitor',      component: MainPageDataMonitor},
      {path: 'alarm-disease',     component: MainPageAlarmDisease},
      {path: 'alarm-environment', component: MainPageAlarmEnvironment},
      {path: 'system-manager',    component: MainPageSystemManager},
    
    ]
  },

]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
