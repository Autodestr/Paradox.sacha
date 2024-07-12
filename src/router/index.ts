import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import router from '@/router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },

  {
    path:  '/store',
    name:  'Store',
    component: () => import('@/views/Store.vue')


  },

  {
    path:  '/contacts',
    name:  'Contacts',
    component: () => import('@/views/Contacts.vue')


  },

]

export const navigate = (name: string) => router.push({ name })

const route = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    document.getElementById('app')?.scrollIntoView()
  },
})


export default route
