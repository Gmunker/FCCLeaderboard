import React from 'react';
import {connect} from 'react-redux';
import Users from 'Users';

class UserList extends React.Component {
  render() {
    let {recentUsers, alltimeUsers} = this.props;
    let test = () => {
      return recentUsers.map((user) => {
        return (<Users key={user.username} {...user} />)
      })
    }
    return (
      <div>
        {test()}
      </div>
    )
  }
}

export default connect((state) => {
  return state;
})(UserList);
