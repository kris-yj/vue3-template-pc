import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import '@/styles/index.css';
import router from '@/router';
import store from '@/store';
import i18n from '@/i18n';
import '@/utils/http';
import App from '@/app.vue';
// import ElementPlusZhCn from 'element-plus/lib/locale/lang/zh-cn';

const app = createApp(App);

const { locale } = store.state;

(async () => {
	const messages = await import(
		/* webpackChunkName: "[request]" */ `@/i18n/${locale}.js`
	);
	const { message } = messages.default;

	// set locale and locale message
	i18n.global.setLocaleMessage(locale, message);
	// element-plus
	app.use(ElementPlus, {
		locale: message,
	});
	//vue-router初始化，module routes约定配置和集成
	app.use(router);
	// vuex初始化，module store约定配置和集成
	app.use(store);
	// i18n初始化
	app.use(i18n);

	app.mount('#app');
})();
