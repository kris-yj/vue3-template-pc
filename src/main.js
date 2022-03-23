import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import '@/styles/index.css';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import App from '@/app.vue';

const app = createApp(App);

// element-plus
app.use(ElementPlus);
//vue-router初始化，module routes约定配置和集成
app.use(router);
// vuex初始化，module store约定配置和集成
app.use(store);
// i18n初始化
app.use(i18n);

app.mount('#app');
