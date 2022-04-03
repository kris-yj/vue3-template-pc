export default [
	{
		children: [
			{
				path: 'child',
				name: 'child',
				component: () => import('./pages/child'),
				meta: {
					title: '子路由1',
				},
			},
			{
				path: 'child-other',
				name: 'childOther',
				component: () => import('./pages/child-other'),
				meta: {
					title: '子路由2',
				},
			},
		],
	},
];
