import React from 'react';
import {string} from 'prop-types';

const isLoggedIn = false;

const {lazy} = React;

const AuthApp = lazy(() => import('./Authenticated'));
const PublicApp = lazy(() => import('./Unauthenticated'));

export default function TabDesktopApp({theme}) {
	return isLoggedIn ? <AuthApp theme={theme} /> : <PublicApp theme={theme} />;
}

TabDesktopApp.propTypes = {
	theme: string.isRequired,
};
