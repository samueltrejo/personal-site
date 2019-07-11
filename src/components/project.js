import React from 'react';

class Project extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div id="Projects" class="p-3 col-md-6 col-lg-4">
        <div className="Project card">
          <img src={project.screenshot} class="card-img-top" alt="..." />
          <div class="card-body">
            <div class="lead">{project.description}</div>
          </div>
          <div class="modal-footer p-2 justify-content-between">
            <a href={project.githubUrl} rel="noopener noreferrer" target="_blank" title="github"><i class="fs-2 fab fa-github-square"></i></a>
            <a href={project.url} rel="noopener noreferrer" target="_blank" title="full link"><i class="fas fa-external-link-alt"></i></a>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
