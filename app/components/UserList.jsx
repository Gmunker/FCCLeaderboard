import React from 'react';
import {connect} from 'react-redux';


import sortUsersAPI from 'sortUsersAPI';
import Users from 'Users';

class UserList extends React.Component {
  render() {
    let {recentUsers, alltimeUsers} = this.props;
    let renderedUsers = () => {
      return recentUsers.map((user) => {
        return (<Users key={user.username} {...user} />)
      })
    }
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th width="50">Rank</th>
              <th width="150">Username</th>
              <th width="100">Recent</th>
              <th width="100">Alltime</th>
              <th width="100">Last Update</th>
            </tr>
          </thead>
          <tbody>
              {renderedUsers}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state) => {
  return state;
})(UserList);
