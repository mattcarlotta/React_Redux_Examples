import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/*
TAKES ALL THE REDUCERS FROM reducers/index.jsx AND COMBINES SOME MIDDLEWARES
*/

// Creates the store with our reducers, setting any initial state found in Reducer's first argument, and include any Redux middlewares
// SEE routes/root.jsx FOR MORE INFORMATION ON HOW THE STORE IS INITIALIZED
const configureStore = initialState => {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
	return store;
};

export default configureStore;
