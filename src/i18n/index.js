import { createI18n } from 'vue-i18n';
// import cn from './zh-cn';

const defaultLocale = window.navigator.language.toLowerCase() || 'zh-cn';

const messages = {
	'zh-cn': {
		name: '姓名',
		hello: '您好',
	},
};

console.log('asdasd');

const i18n = createI18n({
	locale: defaultLocale,
	allowComposition: true,
	fallbackLocale: 'zh-cn',
	// allowComposition: true,
	messages,
});

export default i18n;
