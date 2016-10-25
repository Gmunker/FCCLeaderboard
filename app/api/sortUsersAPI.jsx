import $ from 'jquery';

module.exports = {
  sortUsers(users) {
    let sortedUsers = users.recent;


    //Sort todos with non-completed first
		sortedUsers.sort((a, b) => {
			return -1
		});

		return sortedUsers;
	}
  }
