import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import Leaderboard from 'Leaderboard';
const store = require('configureStore').configure();
import * as actions from 'actions';
import fccLeaderAPI from 'fccLeaderAPI';

let users = [
	{
	username: "sjames1958gm",
	img: "https://avatars.githubusercontent.com/u/4639625?v=3",
	alltime: 3645,
	recent: 515,
	lastUpdate: "2016-10-24T06:11:46.540Z"
	},
	{
	username: "maz-net-au",
	img: "https://avatars.githubusercontent.com/u/9792899?v=3",
	alltime: 1323,
	recent: 338,
	lastUpdate: "2016-10-23T18:26:42.940Z"
	},
	{
	username: "diomed",
	img: "https://avatars.githubusercontent.com/u/72777?v=3",
	alltime: 915,
	recent: 264,
	lastUpdate: "2016-10-21T22:09:04.664Z"
	},
	{
	username: "Blauelf",
	img: "https://avatars.githubusercontent.com/u/5952026?v=3",
	alltime: 2416,
	recent: 235,
	lastUpdate: "2016-10-21T22:03:21.882Z"
	}
]

actions.addRecentUsers(users);

//Load Foundation
$(document).foundation();

//Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<div>
			<Leaderboard />
		</div>
	</Provider>,document.getElementById('app'));
