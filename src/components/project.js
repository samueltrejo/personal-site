import React from 'react';

class Project extends React.Component {
  render() {
    const { project } = this.props;
    return (
      <div id="Projects" className="p-3 col-md-6 col-lg-4">
        <div className="Project card">
          <img src={project.screenshot} className="card-img-top" alt={project.description} />
          <div className="card-body">
            <div className="lead">{project.description}</div>
          </div>
          <div className="modal-footer p-2 justify-content-between">
            <a href={project.githubUrl} rel="noopener noreferrer" target="_blank" title="github"><i className="fs-2 fab fa-github-square"></i></a>
            <a href={project.url} rel="noopener noreferrer" target="_blank" title="full link"><i className="fas fa-external-link-alt"></i></a>
          </div>

        </div>
      </div>
    );
  }
}

export default Project;
