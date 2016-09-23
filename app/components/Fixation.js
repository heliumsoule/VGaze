import React from 'react';
import ReactDOM from 'react-dom'
const PropTypes = React.PropTypes;

const Fixation = React.createClass({
	PropTypes: {
		style: PropTypes.object.isRequired
	},
	getInitialState() {
		return {
			context: '',
			height: window.innerHeight,
			width: window.innerWidth,
			radius: 20,
			circleAngle: 2 * Math.PI
		}
	},
	componentDidMount() {
		this.setState({
			context: ReactDOM.findDOMNode(this).getContext('2d')
		});
	},
	animate(xPos, yPos) {
		// this.state.context.clearRect(0, 0, this.state.width, this.state.height);
		// this.state.context.beginPath();
		// this.state.context.arc(xPos, yPos, this.state.radius, 0, this.state.circleAngle);
		// this.state.context.fillStyle = "#f8ae21";
		// this.state.context.fill()
	},
	render() {
		return (
			<canvas width={this.state.width} height={this.state.height} style={this.props.style}>
			</canvas>
		)
	}

});


module.exports = Fixation;