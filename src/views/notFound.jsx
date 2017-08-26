import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
	return (
		<div className="notfound-container">
			<Link to="/">404 Not Found</Link>
		</div>
	);
};

export default NotFound;
