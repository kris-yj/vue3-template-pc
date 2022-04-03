import { createRouter, createWebHashHistory } from 'vue-router';
import camelcase from 'camelcase';
import IBLayout from '@/layout/ib-layout';

const routes = [];

// 设置默认自动跳转的路由模块
const defaultModule = undefined;
const requireModules = require.context(
	// 其组件目录的相对路径
	'@/modules/',
	// 是否查询其子目录
	true,
	/route.js$/
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
	const moduleRoute = {
		path: `/${moduleName}`,
		component: IBLayout,
		meta: {
			title: moduleName,
		},
		children: [
			{
				path: '',
				name: `${camelcase(moduleName)}`,
				component: () => import(`@/modules/${moduleName}/pages/index`),
			},
		],
	};

	// 如果module里存在子路由，提取出来
	if (routeConfig && routeConfig.children) {
		moduleRoute.children.push(...routeConfig.children);
	}

	routes.push(moduleRoute);
});

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
