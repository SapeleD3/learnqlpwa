import React from 'react';
import {string} from 'prop-types';
import PublicRouter from './public.routes';

export default function UnauthenticatedApp({theme, device}) {
	return <PublicRouter theme={theme} device={device} />;
}

UnauthenticatedApp.propTypes = {
	theme: string.isRequired,
};
