import React from 'react';
import {string} from 'prop-types';
import PublicRouter from './public.routes';

export default function UnauthenticatedApp({theme}) {
	return <PublicRouter theme={theme} />;
}

UnauthenticatedApp.propTypes = {
	theme: string.isRequired,
};
