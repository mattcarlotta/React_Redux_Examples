import React from 'react';
import { browserHistory } from 'react-router';

const TestPage = () => {
	return (
		<div className="text-center">
			<h1>
				This is a dummy page. Your Redux state will persist despite changing
				routes.
			</h1>
			<button
				className="btn btn-primary"
				onClick={() => browserHistory.goBack()}>
				Go Back
			</button>
		</div>
	);
};

export default TestPage;
