import { createRouter, createWebHistory } from 'vue-router'
import OverviewView from '@/views/OverviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      component: OverviewView
    },
    {
      path: '/trafficsource',
      name: 'trafficsource',
      component: () => import('@/views/TrafficSourceVIew.vue')
    }
  ]
})

export default router
