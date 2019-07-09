import React from 'react';

import css3 from './technology-icons/css3.png';
import html5 from './technology-icons/html5.png';
import javascript from './technology-icons/javascript.png';
import react from './technology-icons/react.png';
import vscode from './technology-icons/vscode.png';
import webpack from './technology-icons/webpack.png';

class Technologies extends React.Component {
  render() {
    return (
      <div className="Technologies bg-dark py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2 className="display-4 font-weight-bold text-white">Technologies</h2>
              <div className="row">
                <div className="col-12 col-sm-4 col-md-3 col-lg-2 p-3">
                  <div className="icon-container text-center p-3">
                    <img src={css3} className="icon" alt="css3 icon"></img>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-md-3 col-lg-2 p-3">
                  <div className="icon-container text-center p-3">
                    <img src={html5} className="icon" alt="html5 icon"></img>
                    </div>
                </div>
                <div className="col-12 col-sm-4 col-md-3 col-lg-2 p-3">
                  <div className="icon-container text-center p-3">
                    <img src={javascript} className="icon" alt="javascript icon"></img>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-md-3 col-lg-2 p-3">
                  <div className="icon-container text-center p-3">
                    <img src={react} className="icon" alt="react icon"></img>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-md-3 col-lg-2 p-3">
                  <div className="icon-container text-center p-3">
                    <img src={vscode} className="icon" alt="vscode icon"></img>
                  </div>
                </div>
                <div className="col-12 col-sm-4 col-md-3 col-lg-2 p-3">
                  <div className="icon-container text-center p-3">
                    <img src={webpack} className="icon" alt="webpack icon"></img>
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

export default Technologies;
