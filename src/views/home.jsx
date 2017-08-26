import React from 'react';
import { Link } from 'react-router';

import Counter from '../containers/counter';
import Inputs from '../containers/Inputs';
import Thunk from '../containers/thunk';

const Home = () => {
	return (
		<div className="index-container text-center">
			<h1 className="title">React and Redux Examples</h1>
			<div className="redux-container">
				<Counter />
				<Inputs />
				<Thunk />
				<Link to="/test-page" className="btn btn-success">
					Click To Go Test Page
				</Link>
			</div>
		</div>
	);
};

export default Home;
