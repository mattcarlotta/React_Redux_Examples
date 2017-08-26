import React from 'react';
// IMPORT REACT-REDUX CONNECT HELPER -- ALLOWS US TO RETRIEVE REDUX STATE FROM ITS STORE
import { connect } from 'react-redux';
// IMPORT OUR ACTION CREATORS
import { resetAll } from '../actions';

// SINCE WE'RE NOT UTILIZING REACT STATE, A STATELESS FUNCTION WILL DO -- CAN USE CLASSES IF NEEDED, DOESN'T CHANGE REDUX SETUP
const resetAllReduxState = ({ resetAll }) => {
	return (
		<div>
			<h1>Redux Thunk:</h1>
			<div className="button-container">
				<button className="btn btn-danger" onClick={resetAll}>
					Reset All Data
				</button>
			</div>
		</div>
	);
};

// THE CONNECT FUNCTION ALLOWS US TO HOOK UP REDUX STATE AND OUR ACTION CREATORS TO THE resetAllReduxState FUNCTION
// HOWEVER, WE MUST PASS NULL AS THE FIRST ARGUMENT (mapStateToProps) IF WE DON'T USE IT, BUT STILL ARE BINDING ACTION CREATORS.
// ALSO WE CAN USE ES6 DESTRUCTING TO BIND ACTION CREATORS (mapDispatchToProps) AUTOMATICALLY.
export default connect(null, { resetAll })(resetAllReduxState);
