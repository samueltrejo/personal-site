import React from 'react';

import TypeAnimation from './type-animation';
import ConsoleAnimation from './console-animation';

class Intro extends React.Component {
  render() {
    return (
      <div id="Intro" className="Intro">
        <div className="intro-overlay">
          <div className="container">
            <div className="row">
              <div className="introduction-text-container col-12 col-lg-6 px-5">
                <div className="introduction-text-card position-relative">
                  <div className="introduction-heading display-4 position-absolute text-hazelblue">Samuel Trejo</div>
                  <TypeAnimation />
                  <ConsoleAnimation />
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
