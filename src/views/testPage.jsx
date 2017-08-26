import React from 'react';
import { Link } from 'react-router';

const TestPage = () => {
	return (
		<div className="container">
			<h1>
				This is a dummy page. Your Redux state will still persist despite moving
				to a completely different route without any hooked up Redux store.
			</h1>
			<Link className="btn btn-primary" to="/">
				Go Back
			</Link>
		</div>
	);
};

export default TestPage;
