import React from 'react';
import {Router, Route, hashHistory} from 'react-router';
import Header from '../components/Header';

const app_data = {
	app_name: 'VGaze',
	app_url: 'https://github.com/heliumsoule/VGaze',
	lab_name: 'MIT CSAIL Vision Group',
	lab_url: 'http://cvcl.mit.edu/Aude.htm',
	contact: 'jinglin@mit.edu'
}

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={() => (<Header app_data={app_data} />)} />
		<Route path='/Calibration' component={() => (<CalibrationContainer />)} />
	</Router>
);

module.exports = routes;