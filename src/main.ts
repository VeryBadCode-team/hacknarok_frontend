import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from './router';
import Toast, { PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';

const app = createApp(App);

const options: PluginOptions = {};

app.use(createPinia()).use(router).use(Toast, options);

app.mount('#app');
