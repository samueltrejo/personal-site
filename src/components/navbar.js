import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar navbar sticky-top navbar-expand-lg navbar-dark bg-blue">
        <div className="container">
          <span className="navbar-brand" href="#">
            <img src="http://www.st-design.be/v1/wp-content/uploads/2014/06/logo2.png" width="30" height="30" alt="" />
          </span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <span className="nav-item nav-link active">Home <span className="sr-only">(current)</span></span>
              <span className="nav-item nav-link">About Me</span>
              <span className="nav-item nav-link">Technologies</span>
              <span className="nav-item nav-link">Projects</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
