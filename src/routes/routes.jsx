import React from 'react';
import { Route, IndexRoute } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../components';
import Home from '../views/home';
import Counter from '../views/counter';
import Inputs from '../views/inputs';
import NotFound from '../views/notFound';
import TestPage from '../views/testPage';

injectTapEventPlugin();

const routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="/counter" component={Counter} />
		<Route path="/inputs" component={Inputs} />
		<Route path="/test-page" component={TestPage} />
		<Route path="*" component={NotFound} />
	</Route>
);

export default routes;
