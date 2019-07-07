import React from 'react';

class Project extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div class="p-3 col-md-6 col-lg-4">
        <div className="Project card">
          <img src={project.screenshot} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="lead">{project.description}</div>
          </div>
          <div class="modal-footer p-2 justify-content-between">
            <i class="fas fa-link"></i>
            <i class="fas fa-external-link-alt"></i>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
