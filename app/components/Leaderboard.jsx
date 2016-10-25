import React from 'react';

import Nav from 'Nav';
import UserList from 'UserList';

class Leaderboard extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <UserList />
      </div>
    )
  }
};

export default Leaderboard;
