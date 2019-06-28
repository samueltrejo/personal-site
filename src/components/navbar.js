import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-blue">
        <div className="container">
          <a className="navbar-brand typewriter" href="#home">Samuel Trejo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a id="navToBio" className="nav-item nav-link" href="#home">Bio <span className="sr-only">(current)</span></a>
              <a id="navToTechnologies" className="nav-item nav-link" href="#explore">Technologies</a>
              <a id="navToProjects" className="nav-item nav-link" href="#features">Projects</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
