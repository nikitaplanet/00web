import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'HomePage',
		component: () => import('@/views/HomePage.vue'),
		children: [],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'Error404Page',
		component: () => import('@/views/error/Error404Page.vue'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	scrollBehavior() {
		return {top: 0};
	},
});

export default router;
