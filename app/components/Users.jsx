import React from 'react';
import {connect} from 'react-redux';

export class Users extends React.Component {
  render() {
    let {username, img, alltime, recent, lastUpdate, rank} = this.props;
    return (
      <tr className="user-row">
        <td><p>{rank}</p></td>
        <td className="td-username">
          <a
            className="td-username-link"
            href={`https://www.freecodecamp.com/${username}`}
            target="_blank"
            >
            <img className="userpic" src={img} />
            <p className="username">{username}</p>
          </a>
        </td>

        <td><p>{recent}</p></td>
        <td><p>{alltime}</p></td>
      </tr>
    )
  }
};

export default connect()(Users);
