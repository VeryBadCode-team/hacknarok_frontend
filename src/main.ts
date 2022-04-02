import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import 'leaflet/dist/leaflet.css';

const app = createApp(App);

app.use(createPinia()).use(router).use(Toast);

app.mount('#app');
