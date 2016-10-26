import React from 'react';
import {connect} from 'react-redux';


import sortUsersAPI from 'sortUsersAPI';
import Users from 'Users';
import Nav from 'Nav';

class UserList extends React.Component {

  render() {
    let {recentUsers, alltimeUsers} = this.props;
    let renderedUsers = () => {
      let rank = 1;
      return alltimeUsers.map((user) => {
        return (<Users key={user.username} rank={rank++} {...user} />)
      })
    }
    return (
      <div className="columns small-10 medium-7 large-6 small-centered">
        <Nav />
        <table>
          <thead>
            <tr>
              <th width="25">Rank</th>
              <th width="350">Username</th>
              <th width="50">Recent</th>
              <th width="50">Alltime</th>
            </tr>
          </thead>
          <tbody>
              {renderedUsers()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect((state) => {
  return state;
})(UserList);
