import React from 'react';

const isLoggedIn = false;

const {lazy} = React;

const AuthApp = lazy(() => import('./Authenticated'));
const PublicApp = lazy(() => import('./Unauthenticated'));

export default function TabDesktopApp() {
	return isLoggedIn ? <AuthApp /> : <PublicApp />;
}
