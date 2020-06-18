import React from 'react';
import {string} from 'prop-types';

const isLoggedIn = false;

const {lazy} = React;

const AuthApp = lazy(() => import('./Authenticated'));
const PublicApp = lazy(() => import('./Unauthenticated'));

export default function MobileApp({theme, device}) {
	return isLoggedIn ? (
		<AuthApp theme={theme} device={device} />
	) : (
		<PublicApp theme={theme} device={device} />
	);
}

MobileApp.propTypes = {
	theme: string.isRequired,
	device: string.isRequired,
};
