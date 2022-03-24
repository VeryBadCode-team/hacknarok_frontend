import { createRouter, createWebHistory } from 'vue-router';
import { useStore } from '../store';

const HelloWorld = () => import('../components/HelloWorld.vue');
const VSignUp = () => import('../components/VSignUp.vue');
const VLogin = () => import('../components/VLogin.vue');
const VSuccess = () => import('../components/VSuccess.vue');

const routes = [
  { path: '/', component: HelloWorld, meta: { guest: true } },
  { path: '/signup', component: VSignUp, meta: { guest: true } },
  { path: '/login', component: VLogin, meta: { guest: true } },
  { path: '/authenticated', component: VSuccess, meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const store = useStore()
  
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.user.token.type) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
