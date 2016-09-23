import React from 'react';
const PropTypes = React.PropTypes;

const Fixation = React.createClass({
	PropTypes: {
		style: PropTypes.object.isRequired
	},
	render() {
		return (
			<div style={this.props.style}>
			</div>
		)
	}

});


module.exports = Fixation;