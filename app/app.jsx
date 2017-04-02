import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Provider} from 'react-redux';

const store = require('configureStore').configure();
import * as actions from 'actions';
import Nav from 'Nav';
import RecentUsers from 'RecentUsers';
import AlltimeUsers from 'AlltimeUsers';
import Users from 'Users';
import LandingPage from 'LandingPage';

store.dispatch(actions.getRecentUsers());
store.dispatch(actions.getAlltimeUsers());

//Load Foundation
$(document).foundation();

//Load css
require('style!css!sass!applicationStyles');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/">
				<Route path="AlltimeUsers" component={AlltimeUsers} />
				<Route path="RecentUsers" component={RecentUsers} />
				<IndexRoute component={LandingPage} />
			</Route>
		</Router>
	</Provider>,document.getElementById('app'));
