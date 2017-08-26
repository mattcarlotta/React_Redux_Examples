import { routerReducer as routing } from 'react-router-redux';
// IMPORT COMBINEREDUCERS TO COMBINE ANY REDUCERS SPEFICIED BELOW AS ONE OBJECT
import { combineReducers } from 'redux';
// IMPORT ACTION CREATOR TYPES
import {
	INCREASE_COUNTER,
	DECREASE_COUNTER,
	RESET_COUNTER,
	RESET_INPUTS,
	SET_TEXT,
	SET_NUMBER
} from '../actions/types';

/*
STEP 2: THE ACTION CREATOR HAS RETURNED A type AND value (if required)

HERE'S A BREAKDOWN OF A REDUCER (see function below afterward)...

- FIRST NOTICE THAT THE SECOND ARGUMENT IN THE REDUCER BELOW IS THE ACTION,
	IT CONTAINS THE type (action.type) AND value (action.someValue) FROM OUR ACTION CREATOR.

- NOW NOTICE THAT THE state=0 IS INITIALLY SET AS: a number that is 0, SO THE CASES BELOW MANIPULATE
 	THIS VALUE JUST BASED UPON THE type THAT WAS RETURNED FROM THE ACTION CREATOR

const counterReducer = (state = 0, action) => {
	// THE type IS THEN TRICKLED THROUGH THE SWITCH CASES UNTIL IT FINDS A MATCH:
	switch (action.type) {

	// IF type IS DECREASE_COUNTER, THEN TAKE STATE AND SUBTRACT 1:
		case DECREASE_COUNTER:
			return state - 1;

	// IF type IS INCREASE_COUNTER, THEN TAKE STATE AND ADD 1:
		case INCREASE_COUNTER:
			return state + 1;

	// IF type IS RESET_COUNTER, THEN SET STATE TO 0:
		case RESET_COUNTER:
			return 0;

	// IF type IS NEITHER, THEN RETURN THE SAME STATE:
		default:
			return state;
	}
};
IMPORTANT NOTE: ALL ACTION TYPES FLOW THROUGH ALL REDUCERS UNTIL IT FINDS A MATCH
IMPORTANT NOTE: INITIAL STATE CAN BE ANYTHING: an object, an array, a string, a number, null...etc.
*/

// In the reducer below, we'll be setting the initial state to 0 (a number)
// Since we're just manipulatng and returning the state, in the Redux store, it'll be: state.counterValue (see rootReducer below)
const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case DECREASE_COUNTER:
			return state - 1;
		case INCREASE_COUNTER:
			return state + 1;
		case RESET_COUNTER:
			return 0;
		default:
			return state;
	}
};

// In the reducer below, we'll be setting initial state as an empty object
// We need to spread the state out to either create or update a property, otherwise, it'll just be overwritten on subsequent calls
// So our state for this reducer would be in the Redux store as: state.inputValue.string and state.inputValue.value (see rootReducer below)
const inputStringReducer = (state = {}, action) => {
	switch (action.type) {
		case RESET_INPUTS:
			return { ...state, string: '', number: '' };
		case SET_TEXT:
			return { ...state, string: action.stringValue };
		case SET_NUMBER:
			return { ...state, number: action.numberValue };
		default:
			return state;
	}
};

// WE NEED TO COMBINE THE REDUCERS BEFORE PASSING IT OFF TO configureStore.jsx
// SEE STEP 3 store/configureStore.jsx FOR MORE INFORMATION ON WHAT HAPPENS NEXT
const rootReducer = combineReducers({
	// we set the counterReducer's state value in Redux state as: state.counterValue
	counterValue: counterReducer,
	// we set the inputReducer's state values in Redux state as: state.inputValue.someOtherValue
	inputValue: inputStringReducer,
	routing
});

export default rootReducer;
