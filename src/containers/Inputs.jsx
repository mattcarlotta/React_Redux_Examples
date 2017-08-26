import React, { Component } from 'react';
// IMPORT REACT-REDUX CONNECT HELPER -- ALLOWS US TO RETRIEVE REDUX STATE FROM ITS STORE
import { connect } from 'react-redux';
// IMPORT bindActionCreators ALLOWS US TO PRE-BIND DISPATCH TO OUR ACTION CREATORS ==> THIS.PROPS.DISPATCH(ACTIONCREATOR()) IS NOW this.props.actioncreator()
import { bindActionCreators } from 'redux';
// IMPORT OUR ACTION CREATORS
import { setInputText, setInputNumber } from '../actions';

// SINCE WE'RE UTILIZING REACT STATE, WE'll BE USING A CLASS OBJECT -- STATELESS FUNCTIONS WORK SIMILARY, DOESN'T CHANGE REDUX SETUP
class Input extends Component {
	state = {
		string: '',
		number: ''
	};

	// SENDS this.state.string TO THE setInputText ACTION CREATOR
	onStringSubmit = e => {
		e.preventDefault();
		this.props.setInputText(this.state.string);
		this.setState({ string: '' });
	};

	// SENDS this.state.number TO THE setInputNumber ACTION CREATOR
	onNumberSubmit = e => {
		e.preventDefault();
		this.props.setInputNumber(this.state.number);
		this.setState({ number: '' });
	};

	// UPDATES LOCAL STATE WITH INPUT VALUES UNTIL FORM SUBMISSION
	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { string, number } = this.props;
		return (
			<div>
				<h1>Input a String or Value</h1>
				<p>
					This is your submitted string value: {string ? string : '(empty)'}
				</p>
				<form onSubmit={this.onStringSubmit}>
					<input
						type="text"
						name="string"
						placeholder="Enter string here..."
						value={this.state.string}
						onChange={this.handleChange}
					/>
					<br />
					<button className="btn btn-primary" type="Submit">
						Submit String
					</button>
				</form>
				<p>
					This is your submitted number value: {number ? number : '(empty)'}
				</p>
				<form onSubmit={this.onNumberSubmit}>
					<input
						type="number"
						name="number"
						placeholder="Enter number here..."
						value={this.state.number}
						onChange={this.handleChange}
					/>
					<br />
					<button className="btn btn-primary" type="Submit">
						Submit Number
					</button>
				</form>
			</div>
		);
	}
}

// THIS FUNCTION ALLOWS US TO PULL FROM REDUX STATE AND MAP IT TO THE Input CLASS' PROPS
// WE NOW HAVE ACCESS TO REDUX STATE IN THE Input COMPONENT VIA this.props.string AND this.props.number
const mapStateToProps = state => {
	return {
		string: state.inputValue.string,
		number: state.inputValue.number
	};
};

// THIS FUNCTION ALLOWS US TO PRE-BIND DISPATCH TO OUR ACTION CREATORS
const mapDispatchToProps = dispatch => {
	return bindActionCreators({ setInputText, setInputNumber }, dispatch);
};

// THE CONNECT FUNCTION ALLOWS US TO HOOK UP REDUX STATE AND OUR ACTION CREATORS TO THE Input CLASS
export default connect(mapStateToProps, mapDispatchToProps)(Input);
