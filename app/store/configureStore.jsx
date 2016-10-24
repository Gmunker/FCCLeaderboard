import * as redux from 'redux';
import thunk from 'redux-thunk';
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';

import {recentUsersReducer} from 'reducers';

export let configure = (initialState = {}) => {
	let reducer = combineReducers({
		recentUsers: recentUsersReducer
	});

	let store = createStore(reducer, initialState, compose(applyMiddleware(thunk), window.devToolsExtension
		? window.devToolsExtension()
		: f => f));
	return store;
};
