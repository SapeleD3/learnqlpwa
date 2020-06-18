import React, {lazy} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {string} from 'prop-types';
import {ROUTES} from '../constants';

const {login, WILD_CARD, home} = ROUTES;

const NotFound = lazy(() => import('../../components/NotFound'));

const routes = [
	{path: login, component: lazy(() => import('../../pages/Login/'))},
];

export default function publicRouter({theme}) {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={home}>
					<Redirect to={login} />
				</Route>
				{routes.map(({path, component}) => (
					<Route key={path} path={path} exact component={component} />
				))}
				<Route path={WILD_CARD}>
					<NotFound device="desktop" theme={theme} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

publicRouter.propTypes = {
	theme: string.isRequired,
};
