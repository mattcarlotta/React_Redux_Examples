import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/*
STEP 3: TAKES ALL THE REDUCERS AND ITS INITIAL STATE FROM reducers/index.jsx AND COMBINES SOME REDUX MIDDLEWARES
*/

// Creates the store with our reducers, setting any initial state found in our Reducer's first argument, and include any Redux middlewares
const configureStore = initialState => {
	const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
	return store;
};

// SEE STEP 4 routes/root.jsx FOR MORE INFORMATION ON HOW THE STORE IS INITIALIZED/UPDATED
export default configureStore;
