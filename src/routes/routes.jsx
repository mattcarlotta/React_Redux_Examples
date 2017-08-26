import React from 'react';
import { Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../components';
import Home from '../views/home';
import NotFound from '../components/notFound';
import TestPage from '../views/testPage';

injectTapEventPlugin();

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/test-page" component={TestPage} />
		<Route path="*" component={NotFound} />
	</Route>
);

export default routes;
