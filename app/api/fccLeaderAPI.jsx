import axios from 'axios';

const FCC_RECENT_LEADER_URL = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
const FCC_ALLTIME_LEADER_URL = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";

module.exports = {
  getRecent() {
    const requestRecentURL = FCC_RECENT_LEADER_URL;

    return axios.get(requestRecentURL).then(function(res) {
      console.log('API OUTPUT:')
      console.table(res.data);
    });
  },

  getAllTime() {
    const requestAllTimeURL = FCC_ALLTIME_LEADER_URL;

    return axios.get(requestAllTimeURL).then(function(res) {
      if (res.status !== 200) {
        throw new Error(res.statusText);
      } else {
        return res.data;
      }
    })
  }
}
