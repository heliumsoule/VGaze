import React from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import HomeContainer from '../container/HomeContainer';
import Overview from '../components/Overview';

const exp_params = {
	img_shown: 5,
	select: 'J',
	confirm: 'K'
}

const home_data = {
	first_tutorial: 	"VGaze is comprised of two types of visual question answering (VQA) tasks. \n" +
						"    1. Calibrate the setup to perform reliable eye tracking. \n" + 
						"    2. During EXPLORE tasks, the image will be shown first for " + exp_params.img_shown + " seconds \n" + 
						"       Then, the question prompt will appear. \n" + 
						"    3. During FIND tasks, the question will be shown first, followed by the image.\n" + 
						"    4. Use the ",
	second_tutorial: 	" to toggle between different answer options. \n" + 
						"    5. transition to the next screen and the ",
	third_tutorial: 	" to confirm a selection."
}

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={HomeContainer}>
			<IndexRoute component={() => (<Overview exp_params={exp_params} home_data={home_data} />)} />
		</Route>
	</Router>
)

module.exports = routes;