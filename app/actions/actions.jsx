import axios from 'axios';

export let addRecentUsers = (recentUsers) => {
	return {type: "ADD_RECENT_USERS", recentUsers};
};

export let getRecentUsers = () => {
	const requestRecentURL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
	return (dispatch, getState) => {
		return axios.get(requestRecentURL).then(function(res) {
      dispatch(addRecentUsers(res.data));
    });
	}
}

export let addAlltimeUsers = (alltimeUsers) => {
	return {type: "ADD_ALLTIME_USERS", alltimeUsers};
};

export let getAlltimeUsers = () => {
	const requestAlltimeURL = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
	return (dispatch, getState) => {
		return axios.get(requestAlltimeURL).then(function(res) {
      dispatch(addAlltimeUsers(res.data));
    });
	}
}
