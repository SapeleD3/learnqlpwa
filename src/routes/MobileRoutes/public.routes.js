import React, {lazy} from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {string} from 'prop-types';
import {ROUTES} from '../constants';

const {login, WILD_CARD, home} = ROUTES;

const NotFound = lazy(() => import('../../components/NotFound'));

const routes = [
	{path: login, Component: lazy(() => import('../../pages/Login/'))},
];

export default function publicRouter({theme, device}) {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path={home}>
					<Redirect to={login} />
				</Route>
				{routes.map(({path, Component}) => (
					<Route
						key={path}
						path={path}
						exact
						component={() => (
							<Component theme={theme} device={device} />
						)}
					/>
				))}
				<Route path={WILD_CARD}>
					<NotFound device="mobile" theme={theme} />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

publicRouter.propTypes = {
	theme: string.isRequired,
	device: string.isRequired,
};
