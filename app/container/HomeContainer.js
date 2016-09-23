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
	handleFixation(xPos, yPos) {
		this.refs.currFixation.animate(xPos, yPos);
	},
	render() {
		return (
			<div className="container">
				<Header style={HeaderStyle} app_data={app_data}/>
				<Fixation style={fixationStyle} ref={'currFixation'}/>
				{React.cloneElement(this.props.children, {handleFixation: this.handleFixation})}
				
			</div>
		)
	}

});

module.exports = HomeContainer;