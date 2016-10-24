import React from 'react';
import {connect} from 'react-redux';

export class Users extends React.Component {
  render() {
    let {username} = this.props;

    return (
      <div>
        {username}
        <p>something else</p>
      </div>
    )
  }
};

export default connect()(Users);
