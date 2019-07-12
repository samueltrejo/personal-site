import React from 'react';

import Intro from './intro';
import Bio from './bio';
import Technologies from './technologies';

import Projects from './projects-container';

class Homepage extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="home-page">
        <Intro />
        <span id="biolink"></span>
        <Bio />
        <span id="technologieslink"></span>
        <Technologies />
        <span id="projectslink"></span>
        <Projects projects={projects}/>
      </div>
    );
  }
}

export default Homepage;
