import routes from './routes';
import React from 'react';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
// IMPORT ALLOWS US TO PROVIDE ALL connect COMPONENTS WITH REDUX STORE
import { Provider } from 'react-redux';
// IMPORT ALLOWS US TO SYNC ALL connect COMPONENTS WITH REDUX STORE
import { syncHistoryWithStore } from 'react-router-redux';
// IMPORT configureStore (THE REDUX STORE)
import configureStore from '../store/configureStore';

// SET const store TO BE THE CONFIGURED REDUX STORE FROM store/configureStore.jsx
const store = configureStore();
// THEN ALLOW IT TO BE SYNCED WITH browserHistory
const history = syncHistoryWithStore(browserHistory, store);

/* THE APP WILL NOW BE CONFIGURED/UPDATED WITH REDUX STORE, BROWSERHISTORY AND ROUTES */

const App = () => {
	return (
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	);
};

// THEN APP FUNCTION WILL BE PASSED TO src/Index.jsx TO BE RENDERED BY render (REACTDOM.RENDER)
export default App;
