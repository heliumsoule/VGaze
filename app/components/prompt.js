import React from 'react'

export default React.createClass({
	startTracking() {
		let gazeListener = (data, elapsedTime) => {
			if (!data) {
				return;
			}
			let x_prediction = data.x;
			let y_prediction = data.y;
			console.log(elapsedTime, x_prediction, y_prediction);			
		}
		webgazer.setGazeListener(gazeListener)
				.begin()
	},
	render() {
		return (
			<div className="col-mid-6 text-center" onClick={this.startTracking}>
				Whenever you're ready now
			</div>
		);
	},
});
