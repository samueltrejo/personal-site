import React from 'react';

// import Bio from './bio';
// import Technologies from './technologies';

// import Projects from './projects-container';

class Homepage extends React.Component {
  render() {
    // const { projects } = this.props;
    return (
      <div className="Homepages h-100">
        <div className="container mt-5">
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
        </div>
      </div>
      // <div className="home-page">
      //   <Bio />
      //   <Technologies />
      //   <Projects projects={projects}/>
      // </div>
    );
  }
}

export default Homepage;
