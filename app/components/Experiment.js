import React from 'react';

const Experiment = React.createClass({
	componentWillMount() {
		// const gazeListener = (data, elapsedTime) => {
		// 	const xPos = data.x;
		// 	const yPos = data.y;

		// 	this.props.handleFixation(xPos, yPos);
		// }

		webgazer
			.setRegression('ridge')
			.setTracker('clmtrackr')
			.setGazeListener((data, elapsedTime) => {
				if (!data) return;

				const xPos = data.x;
				const yPos = data.y

				this.props.handleFixation(xPos, yPos);
			})
			.begin()
			.showPredictionPoints(true)
	},
	render() {
		return (
			<div>
				The second page
			</div>


		)
	}
});

module.exports = Experiment