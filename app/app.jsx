import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

const store = require('configureStore').configure();
const actions = require('actions');

let users = [
	{
	username: "sjames1958gm"
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
			<h3>App Component</h3>
		</div>
	</Provider>,document.getElementById('app'));
