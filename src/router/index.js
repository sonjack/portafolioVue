import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MiPortafolio',
    component: () => import('@/views/MiPortafolio.vue'),
  },
  {
    path: '/HistoriaLaboral',
    name: 'HistoriaLaboral',
    component: () => import('@/views/Experiencia.vue'),
  },
  {
    path: '/DatosPersonales',
    name: 'DatosPersonales',
    component: () => import('@/views/DatosPersonales.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
