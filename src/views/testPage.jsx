import React from 'react';
import { Link } from 'react-router';

const TestPage = () => {
	return (
		<div className="container">
			<h1>
				This is a dummy page. Your Redux state will still persist despite moving
				to a completely different route that doesn't have any mounted Redux
				connected components.
			</h1>
			<Link className="btn btn-primary" to="/">
				Go Back
			</Link>
		</div>
	);
};

export default TestPage;
