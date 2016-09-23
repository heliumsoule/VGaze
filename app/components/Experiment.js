import React from 'react';

const Experiment = React.createClass({
	componentWillMount() {
		webgazer.setGazeListener((data, elapsedTime) => {
			if (!data) return;
			const xPrediction = data.x;
			const yPrediction = data.y;
			
			this.props.handleFixation(xPrediction, yPrediction);
		}).begin()
	},
	render() {
		return (
			<div style={{backgroundColor: 'red'}}>
				The second page
			</div>


		)
	}
});

module.exports = Experiment