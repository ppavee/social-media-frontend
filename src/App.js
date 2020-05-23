import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const App = () => {
	return (
	<Router>
		<div>
			<Link to="/">Home</Link>
		</div>

		<Switch>
			<Route path="/">
				
			</Route>
		</Switch>
	</Router>
	);
};

export default App;