import React from 'react';
// IMPORT REACT-REDUX CONNECT HELPER -- ALLOWS US TO RETRIEVE REDUX STATE FROM ITS STORE
import { connect } from 'react-redux';
// IMPORT bindActionCreators ALLOWS US TO PRE-BIND DISPATCH TO OUR ACTION CREATORS ==> THIS.PROPS.DISPATCH(ACTIONCREATOR()) IS NOW this.props.actioncreator()
import { bindActionCreators } from 'redux';
// IMPORT OUR ACTION CREATORS
import { increaseCounter, decreaseCounter } from '../actions';

// SINCE WE'RE NOT UTILIZING REACT STATE, A STATELESS FUNCTION WILL DO -- CAN USE CLASSES IF NEEDED, DOESN'T CHANGE REDUX SETUP
const Counter = ({ counter, increaseCounter, decreaseCounter }) => {
	console.log(
		'The React-Redux container component has been (re)rendered!' +
			' -- @@containers/counter.jsx'
	);
	const incCounter = () => {
		console.log(
			'Step 1: User triggered increaseCounter action creator' +
				' -- @@containers/counter.jsx'
		);
		increaseCounter();
	};
	const decCounter = () => {
		console.log(
			'Step 1: User triggered decreaseCounter action creator' +
				' -- @@containers/counter.jsx'
		);
		decreaseCounter();
	};
	return (
		<div>
			<h1>Increase or Decrease The Counter</h1>
			{counter}
			<div className="counter-button-container">
				<button className="btn btn-primary" onClick={incCounter}>
					<i className="fa fa-plus" aria-hidden="true" />
				</button>
				<button
					className={counter > 0 ? 'btn btn-danger' : 'btn btn-danger disabled'}
					onClick={counter > 0 ? decCounter : null}>
					<i className="fa fa-minus" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
};

// THIS FUNCTION ALLOWS US TO PULL FROM REDUX STATE AND MAP IT TO THE Counter PROPS
// WE NOW HAVE ACCESS TO REDUX STATE IN THE Counter COMPONENT VIA props.counter
const mapStateToProps = state => {
	return {
		counter: state.counterValue
	};
};

// THIS FUNCTION ALLOWS US TO PRE-BIND DISPATCH TO OUR ACTION CREATORS
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ increaseCounter, decreaseCounter }, dispatch);
};

// THE CONNECT FUNCTION ALLOWS US TO HOOK UP REDUX STATE AND OUR ACTION CREATORS TO THE Counter FUNCTION
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
