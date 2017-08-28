import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/* TAKES ALL THE REDUCERS FROM reducers/index.jsx AND COMBINES ANY REDUX MIDDLEWARES */

// Creates the store with our reducers and includes any Redux middlewares
const configureStore = () => {
	const store = createStore(rootReducer, applyMiddleware(thunk));
	return store;
};

// SEE routes/root.jsx FOR MORE INFORMATION ON HOW THE STORE IS INITIALIZED/UPDATED
export default configureStore;
