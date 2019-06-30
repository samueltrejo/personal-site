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
      <div className="Navbar h-100-lg">
        <div className="container h-100-lg">

          <div className="row">
            <div className="introduction-text-container col-12 col-lg-6 px-5">
              <div className="introduction-text-card position-relative">
                <div className="introduction-heading display-4 position-absolute">Samuel Trejo</div>
                <div className="intruduction-animation-1 position-absolute">{'const whoIsSamuel = () => {samuelInfo}'}</div>
                <div className="intruduction-animation-2 position-absolute">{'const whoIsSamuel = () => {samuelInfo}'}</div>
              </div>
            </div>
            <div className="introduction-image-container col-12 col-lg-6 px-5">
              <div className="introduction-image-card position-relative">
                <div className="introduction-image position-absolute w-100">
                  <img className="img-fluid" src="https://i.imgur.com/kPrfxPY.jpg" alt="Samuel Trejo"/>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="text-white">nav buttons</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
