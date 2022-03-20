import { createI18n } from 'vue-i18n';
import cn from './zh-cn';

const defaultLocale = window.navigator.language || 'zh-cn';

const i18n = createI18n({
	locale: defaultLocale,
	fallbackLocale: 'zh-cn',
	allowComposition: true,
	messages: {
		'zh-cn': cn,
	},
});

export default i18n;
