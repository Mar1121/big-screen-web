import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/projectMaster',
      component: () => import('layout/index.vue'),
      children: [
        {
          path: 'projectMaster',
          name: 'projectMaster',
          component: () => import('pages/home/projectMaster/index.vue')
        },
        {
          path: 'videoMaster',
          name: 'videoMaster',
          component: () => import('pages/home/videoMaster/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('pages/login/index.vue')
    }

  ]
})

export default router
