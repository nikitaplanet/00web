import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'HomePage',
		meta: {
			title: 'LIANG LIN  ∣ 00',
		},
		component: () => import('@/views/HomePage.vue'),
		children: [
			{
				path: '/:pathMatch(.*)*',
				name: 'Error404Page',
				component: () => import('@/views/error/Error404Page.vue'),
				meta: {
					title: ' 404 頁面 - LIANG LIN  ∣ 00',
				},
			},
		],
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	scrollBehavior() {
		return {top: 0};
	},
});

router.beforeEach((to, from, next) => {
	console.log('from', from);
	document.title = (to.meta.title as string) || 'LIANG LIN  ∣ 00';
	next();
});

export default router;
