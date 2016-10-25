import React from 'react';
import {connect} from 'react-redux';

export class Users extends React.Component {
  render() {
    let {username, img, alltime, recent, lastUpdate} = this.props;
    return (
      <tr>
        <td>""</td>
        <td>{username}</td>
        <td>{recent}</td>
        <td>{alltime}</td>
        <td>{lastUpdate.substr(0,10)}</td>
      </tr>
    )
  }
};

export default connect()(Users);
