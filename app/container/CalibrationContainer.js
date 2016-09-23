import React from 'react';
import Calibraiton from '../components/Calibration';

const CalibrationContainer = React.createClass({
	getInitialState() {
		return {
			app_name = 'VGaze',
			app_url = 'https://github.com/heliumsoule/VGaze',
		}
	},
	render() {
		return (
			<Header
				app_name={this.state.app_name}
				app_url={this.state.url} />
	}
})


module.exports = HeaderContainer;