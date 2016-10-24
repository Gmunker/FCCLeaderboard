import uuid from 'node-uuid';
var axios = require('axios');

export let addRecentUsers = (recentUsers) => {
  return {type: "ADD_RECENT_USERS", recentUsers}
};

export let getRecentUsers = () => {
  return (dispatch, getState) => {
    const requestRecentURL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
    return axios.get(requestRecentURL).then((res) => {
      dispatch(addRecentUsers(res.data));
    });
  };
};
