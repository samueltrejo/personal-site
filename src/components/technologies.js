import React from 'react';

import TechnologyImage from './technology-image';

import css3 from './technology-icons/css3.png';
import html5 from './technology-icons/html5.png';
import javascript from './technology-icons/javascript.png';
import react from './technology-icons/react.png';
import vscode from './technology-icons/vscode.png';
import webpack from './technology-icons/webpack.png';
import bootstrap from './technology-icons/bootstrap.png';
import jquery from './technology-icons/jquery.png';
import sass from './technology-icons/sass.png';

class Technologies extends React.Component {
  render() {
    const technologyImages = [css3, html5, javascript, react, vscode, webpack, bootstrap, jquery, sass];
    const writeTechImages = technologyImages.map(img => (
      <TechnologyImage img={img}/>
    ))
    return (
      <div className="Technologies bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="display-4 font-weight-bold text-white">Technologies</h2>
              <div className="row">
                {writeTechImages}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
