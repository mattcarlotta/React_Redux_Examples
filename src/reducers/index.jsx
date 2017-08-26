import { routerReducer as routing } from 'react-router-redux';
// IMPORT COMBINEREDUCERS TO COMBINE ANY REDUCERS SPEFICIED BELOW AS ONE OBJECT
import { combineReducers } from 'redux';
// IMPORT ACTION CREATORS
import {
	INCREASE_COUNTER,
	DECREASE_COUNTER,
	RESET_COUNTER,
	RESET_INPUTS,
	SET_TEXT,
	SET_NUMBER
} from '../actions/types';

/*
THE ACTION CREATOR HAS RETURNED A type AND value (if required)

HERE'S A BREAKDOWN OF A REDUCER (see function below afterward)...

FIRST NOTICE THAT THE SECOND ARGUMENT IN THE REDUCER BELOW IS THE ACTION, IT CONTAINS THE type (action.type) AND value (action.someValue) FROM OUR ACTION CREATOR:
																															      |
																		 -------------------------------
                                     v
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

	// IF type IS NEITHER, THEN RETURN SAME THE STATE:
		default:
			return state;
	}
};

ALL ACTION TYPES FLOW THROUGH ALL REDUCERS UNTIL IT FINDS A MATCH

*/

// Special Note: Initial state can be an object, an array, a string, null...etc.

// In the function below, we'll be setting the initial state to 0 (a number)
// Since we're just manipulatng and returning the state, in the Redux store, it'll be: state.counterValue (see bottom of page)
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

// In the function below, we'll be setting state as an empty object
// We need to spread the state out to either create or update a property, otherwise, it'll just be overwritten
// So our state for this reducer would be in the Redux store as: state.input.string and state.input.value (see bottom of page)
const inputString = (state = {}, action) => {
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
// SEE store/configureStore.jsx FOR MORE INFORMATION ON WHAT HAPPENS NEXT
const rootReducer = combineReducers({
	// we set the counterReducer state value to Redux state as: state.counterValue
	counterValue: counterReducer,
	// we set the inputReducer all state values to Redux state as: state.inputValue.someOtherValue
	inputValue: inputString,
	routing
});

export default rootReducer;
