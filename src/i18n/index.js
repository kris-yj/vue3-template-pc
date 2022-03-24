import { createI18n } from 'vue-i18n';
import store from '@/store';

const i18n = createI18n({
	locale: store.state.locale,
	allowComposition: true,
	fallbackLocale: 'zh-cn',
});

export default i18n;
