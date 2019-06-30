import React from 'react';

import Intro from './intro-content';
import Bio from './bio';
import Technologies from './technologies';

import Projects from './projects-container';

class Homepage extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="home-page">
        <Intro />
        <Bio />
        <Technologies />
        <Projects projects={projects}/>
      </div>
    );
  }
}

export default Homepage;
