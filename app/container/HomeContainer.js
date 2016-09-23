import React from 'react';
import Header from '../components/Header';
import Fixation from '../components/Fixation';
import {fixationStyle, HeaderStyle, preStyle} from '../styles/styles';
import {Link} from 'react-router';

const app_data = {
	app_name: 'VGaze',
	app_url: 'https://github.com/heliumsoule/VGaze',
	lab_name: 'MIT CSAIL Vision Group',
	lab_url: 'http://cvcl.mit.edu/Aude.htm',
	contact: 'jinglin@mit.edu'
};

const HomeContainer = React.createClass({
	componentDidMount() {
		
	},
	render() {
		console.log(this.props.children);
		return (
			<div className="container">
				<Header style={HeaderStyle} app_data={app_data}/>
				<Fixation style={fixationStyle}>
				</Fixation>
				{this.props.children}
			</div>
		)
	}

});

module.exports = HomeContainer;