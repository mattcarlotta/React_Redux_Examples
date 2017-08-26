import routes from './routes';
import React from 'react';
import { Router } from 'react-router';
import { browserHistory } from 'react-router';
// IMPORT ALLOWS US TO PROVIDE ALL connect COMPONENTS REDUX STORE
import { Provider } from 'react-redux';
// IMPORT ALLOWS US TO SYNC ALL connect COMPONENTS WITH REDUX STORE
import { syncHistoryWithStore } from 'react-router-redux';
// IMPORT configureStore (REDUX STORE)
import configureStore from '../store/configureStore';

// SET store TO BE THE CONFIGURED/UPDATED WITH THE REDUX STORE FROM store/configureStore.jsx
const store = configureStore();
// THEN ALLOW IT TO BE SYNCED WITH browserHistory
const history = syncHistoryWithStore(browserHistory, store);

/*
STEP 4: THE APP WILL NOW BE CONFIGURED/UPDATED WITH REDUX STORE, BROWSERHISTORY AND ROUTES
THEN IT'LL BE PASSED TO src/Index.jsx TO BE RENDERED BY REACTDOM.RENDER
*/

const App = () => {
	return (
		<Provider store={store}>
			<Router history={history} routes={routes} />
		</Provider>
	);
};

export default App;
