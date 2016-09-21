import React from 'react';
import ReactRouter from 'react-router';
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

import Home from '../components/Home';
import Calibration from '../components/Calibration';
import Experiment from '../components/Experiment';

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Home}>
			<IndexRoute component={Calibration} />
		</Route>
	</Router>
);

module.exports = routes;