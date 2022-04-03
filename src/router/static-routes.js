const staticRoutes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/login'),
	},
];

export default staticRoutes;
