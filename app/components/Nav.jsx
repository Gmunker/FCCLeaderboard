import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = React.createClass({
  render() {
    return (
      <div className="nav-bar">
        <div className="top-bar">

          <h1 className="fcc-title"><a href="http://www.freecodecamp.com" target="_blank">FreeCodeCamp</a><img className="fcc-flame-icon" src="https://fvcproductions.files.wordpress.com/2016/06/freecodecamp.png?w=750" />LeaderBoards</h1>
            <div className="credits">
              <h2>Designed and Created by: </h2>
              <h2>Greg Munker</h2>
              <h2><a className="github-link" href="https://github.com/Gmunker/FCCLeaderboard">(GitHub Repo)</a></h2>
              <div className="social-buttons expanded button-group">
                  <a className="button secondary" href="http://www.facebook.com/gmunker" target="_blank">Facebook</a>
                  <a className="button secondary" href="https://plus.google.com/u/0/+GregMunker" target="_blank">Google+</a>
                  <a className="button secondary" href="https://github.com/Gmunker" target="_blank">Github</a>
                  <a className="button secondary" href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank">LinkedIn</a>
                  <a className="button secondary" href="https://twitter.com/Gmunker" target="_blank">Twitter</a>
              </div>
            </div>

        </div>
        <div className="nav-buttons button-group small-centered">
            <Link className="button expanded success" to="/RecentUsers" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Recent Users</Link>
            <Link className="button expanded success" to="/AlltimeUsers" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Alltime Users</Link>
        </div>
      </div>
    )
  }
});

export default Nav;
