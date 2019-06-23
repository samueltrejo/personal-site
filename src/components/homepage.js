import React from 'react';

import Bio from './bio';
import Technologies from './technologies';

class Homepage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Bio />
        <Technologies />
      </div>
    );
  }
}

export default Homepage;
