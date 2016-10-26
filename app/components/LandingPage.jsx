import React from 'react';
import {Link, IndexLink} from 'react-router';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="columns small-centered landing-page">

          <h1 className="fcc-title"><a href="http://www.freecodecamp.com" target="_blank">FreeCodeCamp</a><img className="fcc-flame-icon" src="https://fvcproductions.files.wordpress.com/2016/06/freecodecamp.png?w=750" />LeaderBoards</h1>


          <div className="credits">
            <h2>Designed and Created by: </h2>
            <h2>Greg Munker</h2>
            <div className="social-buttons expanded button-group">
                <a className="button secondary" href="http://www.facebook.com/gmunker" target="_blank">Facebook</a>
                <a className="button secondary" href="https://plus.google.com/u/0/+GregMunker" target="_blank">Google+</a>
                <a className="button secondary" href="https://github.com/Gmunker" target="_blank">Github</a>
                <a className="button secondary" href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank">LinkedIn</a>
                <a className="button secondary" href="https://twitter.com/Gmunker" target="_blank">Twitter</a>
            </div>
          </div>

          <img className="camp-img small-12 small-centered" src="https://camo.githubusercontent.com/60c67cf9ac2db30d478d21755289c423e1f985c6/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f66726565636f646563616d702f776964652d736f6369616c2d62616e6e65722e706e67" />
          <div className="nav-buttons button-group small-centered">
              <Link className="button expanded success" to="/RecentUsers" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Recent Users</Link>
              <Link className="button expanded success" to="/AlltimeUsers" activeClassName="active" activeStyle={{fontWeight: "bold"}}>Alltime Users</Link>
          </div>
      </div>
    )
  }
}

export default LandingPage;
