import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '../store/auth';

const HelloWorld = () => import('@/components/HelloWorld.vue');
const VSignUp = () => import('@/components/VSignUp.vue');
const SignIn = () => import('@/views/SignIn/SignIn.vue');
const VSuccess = () => import('@/components/VSuccess.vue');

const routes = [
  { path: '/', component: HelloWorld, meta: { guest: true } },
  { path: '/signup', component: VSignUp, meta: { guest: true } },
  { path: '/login', component: SignIn, meta: { guest: true } },
  { path: '/authenticated', component: VSuccess, meta: { requiresAuth: true } },
  { path: '/:notFound(.*)', redirect: '/', meta: { guest: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  const store = useAuth();

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (store.user && store.user?.token?.type) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});

export default router;
