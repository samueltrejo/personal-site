import React from 'react';

class Technologies extends React.Component {
  render() {
    return (
      <div className="container border-bottom border-secondary mb-5">
        <div className="row">
          <div className="col">
            <h2>Technologies</h2>
            <p className="lead">Praesent risus neque, feugiat a laoreet sit amet, iaculis eu arcu. Donec semper, lectus vel auctor suscipit, turpis dui accumsan purus, eu vehicula sem risus vitae sem. In hac habitasse platea dictumst. Cras a massa quam. Nulla malesuada non urna eget interdum. Proin placerat ligula ipsum, interdum imperdiet ipsum lobortis vitae. Vestibulum quis ex pharetra, fringilla mauris ut, ullamcorper massa. Nullam in faucibus nunc. Nullam viverra elit id augue malesuada egestas. Curabitur et ipsum est.</p>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col d-flex justify-content-end">
            <div>
              <button type="button" className="btn btn-dark">Technologies</button>
              <button type="button" className="btn btn-dark">More Info</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;
