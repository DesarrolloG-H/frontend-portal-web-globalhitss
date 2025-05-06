import { createRouter, createWebHistory } from 'vue-router'
import SoapSearch from '../modules/soap-search/pages/SoapSearch.vue'
import FormInc from '../modules/control-incidencias/pages/FormInc.vue'

const routes = [
  {
    path: '/',
    redirect: '/google-soap',
  },
  {
    path: '/SoapSearch',
    name: 'SoapSearch',
    component: SoapSearch,
  },
  {
    path: '/formInc',
    name: 'FormINC',
    component: FormInc,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
