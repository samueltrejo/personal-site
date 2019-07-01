import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="Intro">
        <div className="intro-overlay">
          <div className="container">
            <div className="row">
              <div className="introduction-text-container col-12 col-lg-6 px-5">
                <div className="introduction-text-card position-relative">
                  <div className="introduction-heading display-4 position-absolute">Samuel Trejo</div>
                  <div className="intruduction-animation-1 position-absolute">{'const whoIsSamuel = () => {samuelInfo}'}</div>
                  <div className="intruduction-animation-2 position-absolute">{'const whoIsSamuel = () => {samuelInfo}'}</div>
                </div>
              </div>
              <div className="introduction-image-container col-12 col-lg-6 px-5 mb-5">
                <div className="introduction-image-card position-relative">
                  <div className="introduction-image position-absolute w-100">
                    <img className="img-fluid" src="https://i.imgur.com/kPrfxPY.jpg" alt="Samuel Trejo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
