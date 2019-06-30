import React from 'react';

class Bio extends React.Component {
  render() {
    return (
      <div className="Bio jumbotron jumbotron-fluid collapse" data-parent="#nav-accordian">
        <div className="container d-flex">
          <div className="col-6">
            <h1 className="display-4">Bio</h1>
            <p className="lead">Praesent risus neque, feugiat a laoreet sit amet, iaculis eu arcu. Donec semper, lectus vel auctor suscipit, turpis dui accumsan purus, eu vehicula sem risus vitae sem. In hac habitasse platea dictumst. Cras a massa quam. Nulla malesuada non urna eget interdum. Proin placerat ligula ipsum, interdum imperdiet ipsum lobortis vitae. Vestibulum quis ex pharetra, fringilla mauris ut, ullamcorper massa. Nullam in faucibus nunc. Nullam viverra elit id augue malesuada egestas. Curabitur et ipsum est.</p>
            <div className="d-flex justify-content-center">
              <div>
                <button type="button" className="btn btn-dark mr-3">Technologies</button>
                <button type="button" className="btn btn-dark">Projects</button>
              </div>
            </div>
          </div>
          <div className="col-6 d-flex overflow-hidden">
              <img src="https://picsum.photos/1000/1000?image=776" className="img-fluid bio-image" alt=""/>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
