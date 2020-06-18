import React from 'react';
import {string} from 'prop-types';

const isLoggedIn = false;

const {lazy} = React;

const AuthApp = lazy(() => import('./Authenticated'));
const PublicApp = lazy(() => import('./Unauthenticated'));

export default function MobileApp({theme}) {
	return isLoggedIn ? <AuthApp theme={theme} /> : <PublicApp theme={theme} />;
}

MobileApp.propTypes = {
	theme: string.isRequired,
};
