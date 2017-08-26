// ACTION TYPES IMPORTED FROM types.jsx -- WE'LL BE UTILIZING THESE TO CREATE A 1:1 = ACTION CREATOR : REDUCER
import {
	INCREASE_COUNTER,
	DECREASE_COUNTER,
	RESET_COUNTER,
	RESET_INPUTS,
	SET_TEXT,
	SET_NUMBER
} from './types';

/*
STEP 1: USER TRIGGERS AN ACTION CREATOR

- OUR ACTION CREATORS WILL ALWAYS RETURN AT MINIMUM A type FOR A REDUCER TO COMPARE AGAINST.
- OUR REDUCERS **TYPICALLY** EXPECT A type AND A value RETURNED FROM OUR ACTION CREATORS...
	HOWEVER, IN THE COUNTER EXAMPLE BELOW, THE LOGIC IS DONE INSIDE THE REDUCER, SO IT
	ONLY NEEDS A type.
	IN THE STRING/NUMBER EXAMPLE BELOW, THE VALUE IS SET FROM THE REACT COMPONENT AND PASSED TO
	THE ACTION CREATOR, THEN PASSED TO THE REDUCER, SO ITS REDUCER NEEDS A type AND value.

SEE STEP 2 reducers/index.jsx FOR MORE INFORMATION ON WHAT HAPPENS AFTER THE type AND value (if required) ARE RETURNED
*/

// Increases counter by 1
export const increaseCounter = () => {
	return {
		type: INCREASE_COUNTER
	};
};

// Decreases counter by 1
export const decreaseCounter = () => {
	return {
		type: DECREASE_COUNTER
	};
};

// Reset the counter to 0
export const resetCounter = () => {
	return {
		type: RESET_COUNTER
	};
};

/* RETURNING TWO PROPS: type AND value */

// Sets string input value
export const setInputText = stringValue => {
	return {
		type: SET_TEXT,
		stringValue
	};
};

// Sets a number value
export const setInputNumber = numberValue => {
	return {
		type: SET_NUMBER,
		numberValue
	};
};

// Reset inputs
export const resetInputs = () => {
	return {
		type: RESET_INPUTS
	};
};

/* EXAMPLE OF REDUX THUNK */

// resets all Redux data
export const resetAll = dispatch => {
	// Thunk is mainly used for promises, so, for example:
	// Let's say we send a successful AJAX request with our inputs to an API,
	// the promise gets resolved, then we have to dispatch some secondary actions
	// to wipe out the data -- with Thunk we DO NOT need to return any types/data
	// just functions
	return dispatch => {
		dispatch(resetCounter());
		dispatch(resetInputs());
	};
};
