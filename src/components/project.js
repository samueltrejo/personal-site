import React from 'react';

class Project extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div className="col">
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={project.screenshot} className="card-img" alt="..."/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">{project.title}</h5>
                <p class="card-text">{project.description}</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
