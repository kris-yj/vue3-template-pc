/**
 * 添加听云支持，添加Vue.config.errorHandler,拦截异常信息然后上报到听云
 * 注意: 如果需要设置用户ID，需要将用户ID设置到localStorage中，具体操作：
 * localStorage.setItem('TY_USER_ID', 'user1');
 */
function formatComponentName(vm) {
	if (vm.$root === vm) {
		return 'root';
	}
	let name = vm.name;
	if (vm._isVue) {
		name =
			(vm.$options && vm.$options.name) ||
			(vm.$options && vm.$options._componentTag);
	}
	let result;
	if (name) {
		result = `component <${name}>`;
	} else {
		result = 'anonymous component';
	}
	if (vm._isVue && vm.$options && vm.$options.__file) {
		result += ' at ' + (vm.$options && vm.$options.__file);
	}
	return result;
}

function errorHandler(err, vm, info) {
	console.error('ErrorHandler:', err);
	if (!window.TINGYUN) {
		return;
	}
	if (vm) {
		const componentName = formatComponentName(vm);
		const propsData = vm.$options && vm.$options.propsData;
		window.TINGYUN.captureException(err, {
			componentName: componentName,
			propsData: propsData,
			info: info,
		});
	} else {
		window.TINGYUN.captureException(err);
	}
}

export default {
	install: function (Vue) {
		Vue.config.errorHandler = errorHandler;
	},
};
