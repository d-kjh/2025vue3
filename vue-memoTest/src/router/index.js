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
      path: '/memo_test/add',
      component: () => import('@/views/Form.vue'),
    },
    {
      path: '/memo_test/list/:id',
      component: () => import('@/views/Detail.vue'),
    },
    {
      path: '/memo_test/login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/memo_test/sign_up',
      component: () => import('@/views/SignUp.vue'),
    },
  ],
});

export default router;
