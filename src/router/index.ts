import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard/:channel',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to) => {
  if (to.name === 'dashboard' && !to.params.channel) {
    router.push({ name: 'home' });
  }
});
export default router;
