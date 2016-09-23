import React from 'react';
const PropTypes = React.PropTypes;

const Fixation = props => (
	<div className='text-center' style={props.style}>
		{props.children}
	</div>
)

Fixation.PropTypes = {
	style: PropTypes.object.isRequired
}

module.exports = Fixation;