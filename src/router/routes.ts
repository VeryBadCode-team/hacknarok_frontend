const HomeView = () => import('@/views/Home/HomeView.vue');
const SignIn = () => import('@/views/SignIn/SignIn.vue');
const SignUp = () => import('@/views/signup/signup.vue');
const VSuccess = () => import('@/components/VSuccess.vue');

const routes = [
  {
    path: '/',
    component: HomeView,
    meta: { guest: true },
    children: [
      { path: 'signup', component: SignUp, meta: { guest: true } },
      { path: 'login', component: SignIn, meta: { guest: true } },
    ],
  },
  { path: '/authenticated', component: VSuccess, meta: { requiresAuth: true } },
  { path: '/:notFound(.*)', redirect: '/', meta: { guest: true } },
];

export default routes;
