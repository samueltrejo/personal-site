import React from 'react';

// <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-blue">
// <div className="container">
// <a className="navbar-brand typewriter" href="#home">Samuel Trejo</a>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
// <div className="navbar-nav">
// <a id="navToBio" className="nav-item nav-link" href="#home">Bio <span className="sr-only">(current)</span></a>
// <a id="navToTechnologies" className="nav-item nav-link" href="#explore">Technologies</a>
// <a id="navToProjects" className="nav-item nav-link" href="#features">Projects</a>
// </div>
// </div>
// </div>
// </nav>

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar navbar fixed-bottom navbar-expand-lg navbar-dark bg-blue">
        <div className="container">
          <span className="navbar-brand" href="#">
            <img src="http://www.st-design.be/v1/wp-content/uploads/2014/06/logo2.png" width="30" height="30" alt="" />
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <span className="nav-item nav-link active">Home <span class="sr-only">(current)</span></span>
              <span className="nav-item nav-link">Features</span>
              <span className="nav-item nav-link">Pricing</span>
              <span className="nav-item nav-link disabled" tabindex="-1" aria-disabled="true">Disabled</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
