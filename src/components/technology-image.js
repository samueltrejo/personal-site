import React from 'react';

class TechnologyImage extends React.Component {
  render() {
    const { img } = this.props;
    return (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2 p-3">
        <div className="icon-container p-3">
          <div className="text-center">
            <img src={img} className="icon" alt="css3 icon"></img>
          </div>
        </div>
      </div>
    );
  }
}

export default TechnologyImage;
