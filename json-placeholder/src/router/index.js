import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('@/views/List.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/views/Detail.vue'),
    },
  ],
});

export default router;
