import React from 'react';

import Bio from './bio';
import Technologies from './technologies';

import Projects from './projects-container';

class Homepage extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="home-page">
        <Bio />
        <Technologies />
        <Projects projects={projects}/>
      </div>
    );
  }
}

export default Homepage;
