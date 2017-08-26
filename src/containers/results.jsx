import map from 'lodash/map';
import React from 'react';
// IMPORT REACT-REDUX CONNECT HELPER -- ALLOWS US TO RETRIEVE REDUX STATE FROM ITS STORE
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import Thunk from '../containers/thunk';

// SINCE WE'RE NOT UTILIZING REACT STATE, A STATELESS FUNCTION WILL DO -- CAN USE CLASSES IF NEEDED, DOESN'T CHANGE REDUX SETUP
const Results = ({ counter, string, number }) => {
	const REDUXDATA = [
		{
			title: 'Counter',
			inputValue: counter,
			link: '/counter',
			description: 'Click to update counter'
		},
		{
			title: 'String',
			inputValue: string,
			link: '/inputs',
			description: 'Click to update string'
		},
		{
			title: 'Number',
			inputValue: number,
			link: '/inputs',
			description: 'Click to update number'
		}
	];
	return (
		<div>
			<ul className="data-container">
				{map(
					REDUXDATA,
					({ className, title, inputValue, link, description }, key) => {
						return (
							<li key={key} className="data">
								<h1>
									{title}: {inputValue ? inputValue : '(empty)'}
								</h1>
								<button
									className="btn btn-primary"
									onClick={() => browserHistory.push(`${link}`)}>
									{description}
								</button>
							</li>
						);
					}
				)}
			</ul>
			<Thunk />
		</div>
	);
};

// THIS FUNCTION ALLOWS US TO PULL FROM REDUX STATE AND MAP IT TO THE Results PROPS
// WE NOW HAVE ACCESS TO REDUX STATE IN THE Results COMPONENT VIA props.counter, props.string, props.number
const mapStateToProps = state => {
	return {
		counter: state.counterValue,
		string: state.inputValue.string,
		number: state.inputValue.number
	};
};

// THE CONNECT FUNCTION ALLOWS US TO HOOK UP REDUX STATE TO THE Results FUNCTION
export default connect(mapStateToProps)(Results);
