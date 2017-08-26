import React from 'react';
import { Link } from 'react-router';

import Inputs from '../containers/Inputs';

const InputsView = () => {
	return (
		<div className="container">
			<h1 className="title">Redux Inputs Example</h1>
			<Inputs />
			<Link to="/" className="btn btn-success">
				Home
			</Link>
		</div>
	);
};

export default InputsView;
