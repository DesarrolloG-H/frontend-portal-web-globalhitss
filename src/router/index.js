import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import HomeView from '@/modules/home/pages/HomeView.vue'
import OperativasView from '@/modules/operativas/pages/OperativasView.vue'
import FormularioView from '@/modules/formulario/pages/FormularioView.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout, // Layout principal
    children: [
      { path: '', component: HomeView },
      { path: 'operativas', component: OperativasView },
      { path: 'formulario', component: FormularioView },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
