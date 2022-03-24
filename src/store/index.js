import { createStore } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = createStore({
	state() {
		return {
			locale: window.navigator.language.toLowerCase() || 'zh-cn',
		};
	},
	actions,
	mutations,
	getters,
	modules: {},
});

export default store;
