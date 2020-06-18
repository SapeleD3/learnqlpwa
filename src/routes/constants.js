/**
 * Application's UI routes
 * @constant
 */

import Home from '../pages/Home';

export const ROUTES = {
	login: '/login',
	home: '/',
	register: '/register',
	WILD_CARD: '/*',
};

/**
 * Authenticated user pages
 * @constant
 */

export const AUTH_PAGES = [{url: ROUTES.home, page: Home}];
