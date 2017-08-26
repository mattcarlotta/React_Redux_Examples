import React from 'react';
import { Link } from 'react-router';

import Counter from '../containers/counter';

const CounterView = () => {
	return (
		<div className="container">
			<h1 className="title">Redux Counter Example</h1>
			<Counter />
			<Link to="/" className="btn btn-success">
				Home
			</Link>
		</div>
	);
};

export default CounterView;
