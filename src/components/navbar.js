import React from 'react';

import samuelLogo from './technology-icons/samueltrejo.png';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar navbar sticky-top navbar-expand-lg navbar-dark bg-grey">
        <div className="container">
          <span className="samuel-logo bg-hazel rounded-circle">
            <img src={samuelLogo} width="50" height="50" alt="" />
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#Intro">Samuel Trejo <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#Bio">About Me</a>
              <a className="nav-item nav-link" href="#Technologies">Technologies</a>
              <a className="nav-item nav-link" href="#Projects">Projects</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
