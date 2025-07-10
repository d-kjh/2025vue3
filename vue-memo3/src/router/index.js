import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/add',
      component: () => import('@/views/Form.vue'),
    },
    {
      path: '/mod/:memoId',
      component: () => import('@/views/Form.vue'),
    },
  ],
});

export default router;
