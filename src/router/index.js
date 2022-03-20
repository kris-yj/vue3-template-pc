import { createRouter, createWebHashHistory } from 'vue-router';
import camelcase from 'camelcase';

const routes = [];

// 设置默认自动跳转的路由模块
const defaultModule = undefined;
const requireModules = require.context(
	// 其组件目录的相对路径
	'@/modules/',
	// 是否查询其子目录
	true,
	/routes.js$/
);
const modulesKeys = requireModules.keys();

routes.push({
	path: '/',
	redirect: {
		name: defaultModule
			? `${defaultModule}`
			: `${camelcase(modulesKeys[0].split('/')[1])}`,
	},
});

// 读取 modules 目录，默认module name为一级路由的 path，camelcase为route name
requireModules.keys().forEach((matchPath) => {
	const moduleName = matchPath.split('/')[1];
	const routeConfig = requireModules(matchPath).default[0];
	routes.push({
		path: `/${moduleName}`,
		name: `${camelcase(moduleName)}`,
		component: () => import(`@/modules/${moduleName}/pages/${moduleName}`),
	});
	// 如果module里存在子路由，提取出来 push 到 routes 配置中
	if (routeConfig && routeConfig.children) {
		for (const childRoute of routeConfig.children) {
			routes.push({
				path: `/${moduleName}/${childRoute.path}`,
				name: `${childRoute.name}`,
				component: childRoute.component,
			});
		}
	}
});

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
