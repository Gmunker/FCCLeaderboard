import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import Leaderboard from 'Leaderboard';
const store = require('configureStore').configure();
import * as actions from 'actions';
import fccLeaderAPI from 'fccLeaderAPI';

actions.getRecentUsers();

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
