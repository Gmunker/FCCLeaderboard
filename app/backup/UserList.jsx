import React from 'react';
import {connect} from 'react-redux';
import Users from 'Users';

class UserList extends React.Component {
  render() {
    let {recentUsers} = this.props;
    console.log('USER LIST OUTPUT:')
    console.table(recentUsers);
    let test = () => {
      let userKey = (key = 1) => {
        return key++;
      }
      return recentUsers.map((user) => {
        return (<Users key={userKey} {...user}/>)
      })
    }
    return (
      <div>
        {test}
      </div>
    )
  }
}

export default connect((state) => {
  return state;
})(UserList);
