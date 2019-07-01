import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="navbar navbar-expand-lg navbar-dark bg-blue">
        <div className="container d-flex justify-content-end">
          <div className="navbar-nav">
            <p className="nav-item nav-link mb-0">Portfolio, by <a className="text-white" href="https://github.com/samueltrejo">@samueltrejo</a>.</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
