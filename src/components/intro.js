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
                  <div className="introduction-heading position-absolute text-hazelblue">
                    <div className="display-4">
                      <strong>Samuel</strong> Trejo
                    </div>
                    <div className="text-right">
                      <a className="text-hazelblue mr-3" href="https://github.com/samueltrejo" rel="noopener noreferrer" target="_blank" title="github"><i class="fab fa-github-alt"></i></a>
                      <a className="text-hazelgreen mr-3" href="https://www.linkedin.com/in/samueltrejo/" rel="noopener noreferrer" target="_blank" title="linkedin"><i class="fab fa-linkedin-in"></i></a>
                      <a className="text-hazelred mr-3" href="mailto:samuel.trejo@s.tcatnashville.edu" rel="noopener noreferrer" target="_blank" title="email"><i class="fas fa-paper-plane"></i></a>
                    </div>
                  </div>
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
