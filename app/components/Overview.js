import React from 'react';
import {Link} from 'react-router';
import {preStyle} from '../styles/styles';

const Overview = props => (
	<div className="row container display-table">
		<div className="col-md-8 col-md-offset-2 display-cell">
			<h2>VGaze is a webcam based eyetracking package</h2>
			<pre style={preStyle}>
				{props.home_data.first_tutorial}
				<kbd>{props.exp_params.select} Key</kbd>
				{props.home_data.second_tutorial}
				<kbd>{props.exp_params.confirm} Key</kbd>
				{props.home_data.third_tutorial}
			</pre>
			<Link to="/Experiment">
				<button className="btn btn-info btn-default">
					Ready To Start?
				</button>
			</Link>
		</div>
		{props.children}
	</div>
)

module.exports = Overview;