import React from 'react';
import { Link } from 'react-router';

import Results from '../containers/results';

const Home = () => {
	return (
		<div className="container">
			<h1 className="title">React and Redux Examples</h1>
			<Link className="btn btn-success" to="/test-page">
				Go To Test Page
			</Link>
			<Results />
		</div>
	);
};

export default Home;
