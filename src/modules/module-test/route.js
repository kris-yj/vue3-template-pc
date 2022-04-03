export default [
	{
		children: [
			{
				path: 'child',
				name: 'child',
				component: () => import('./pages/child'),
			},
		],
	},
];
