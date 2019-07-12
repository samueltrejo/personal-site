import React from 'react';

import Project from './project';

class Projects extends React.Component {
  render() {
    const { projects } = this.props;
    const writeProjects = projects.map(project => (
      <Project key={project.id} project={project} />
    ));
    return (
      <div className="Projects bg-white">
        <div className="container py-5">

          <div className="row">

            <div className="col">
              <h2 className="display-4 pb-5">Projects</h2>
            </div>

          </div>

          <div className="row">{writeProjects}</div>
        </div>
      </div>
    );
  }
}

export default Projects;
