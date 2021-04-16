import {
	createRouter,
	createWebHistory,
	NavigationGuard,
	RouteRecordRaw,
	NavigationHookAfter
} from 'vue-router';

import Home from '@/routes/home';

export const defaultRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		component: Home,
		meta: {
			public: true
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: defaultRoutes,
});

export const onBeforeEach: NavigationGuard = async (to, from, next) => {
	if (to.meta?.public !== true) {
		// ....
	}

	return next();
};

export const onAfterEach: NavigationHookAfter = (to, from, failure) => {
	if (to.meta.public !== true) {
		// ...
	}
};

// use Guard
router.beforeEach(onBeforeEach);
router.afterEach(onAfterEach);

export default router;
