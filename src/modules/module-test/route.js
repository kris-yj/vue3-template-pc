export default [
	{
		children: [
			{
				path: 'child',
				name: 'child',
				component: () =>
					import(/* webpackChunkName: "child" */ './pages/child'),
				meta: {
					title: '子路由1',
				},
			},
			{
				path: 'child-other',
				name: 'childOther',
				component: () =>
					import(
						/* webpackChunkName: "child-other" */ './pages/child-other'
					),
				meta: {
					title: '子路由2',
				},
			},
		],
	},
];
