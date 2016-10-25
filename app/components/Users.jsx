import React from 'react';
import {connect} from 'react-redux';

export class Users extends React.Component {
  render() {
    let {username, img, alltime, recent, lastUpdate} = this.props;

    return (
      <div>
        <p>{username}</p>
        <p>{recent}</p>
        <p>{alltime}</p>
        <img src={img} height="100px" width="100px" />
      </div>
    )
  }
};

export default connect()(Users);
