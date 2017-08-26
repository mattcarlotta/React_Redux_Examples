import React from 'react';

const App = props => {
	return (
		<div className="wrapper">
			<div className="col-xs-12 no-padding">
				{props.children}
			</div>
		</div>
	);
};

export default App;
