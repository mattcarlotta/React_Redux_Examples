import routes from './routes';
import React from 'react';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from '../store/configureStore';

// CONFIGURE THE REDUX STORE TO SYNC WITH BROWSERHISTORY
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

// APP IS THEN CONFIGURED WITH REDUX STORE, BROWSERHISTORY AND ROUTES
// THIS IS THEN RENDERED IN THE REACTDOM IN src/Index.jsx
const App = () => {
	return (
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	);
};

export default App;
