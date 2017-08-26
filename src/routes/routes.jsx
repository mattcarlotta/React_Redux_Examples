import React from 'react';
import { Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../components';
import Home from '../views/home';
import NotFound from '../components/notFound';

injectTapEventPlugin();

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="*" component={NotFound} />
	</Route>
);

export default routes;
