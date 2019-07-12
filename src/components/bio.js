import React from 'react';

class Bio extends React.Component {
  render() {
    return (
      <div id="Bio" className="Bio bg-white py-5">
        <div className="container">
          <div className="col">
            <h1 className="display-4 pb-5">About Me</h1>
            <p className="lead">I enjoy learning new things and consider myself a fast learner due to my diverse background. I am a self taught musician, maths lover, computer technician, volleyball and soccer player, drawer, spanish speaker, singer, pc builder, gamer, bicycle trickster, etc.</p>
            <p className="lead">I've always been particularly drawn to technology and the technical aspect of life. From tinkering with phones and game systems to repairing phones and computers from friends and family. I recently discovered a love and passion for software development while tinkering with SNES game ROMs to create new games. The ability to create and share an idea that is my own in this new way fascinated me.</p>
            <p className="lead">I had to learn more, and so my journey begins with Nashville Software School. I hope to perfect and use the skills I learn to not only share my creations and ideas, and build my future, but to help people in various ways with the almost limitless world of programming.</p>
            <p className="lead">Connect with me!</p>
            <div className="lead">
              <a className="btn btn-dark text-white mr-3" href="https://github.com/samueltrejo" rel="noopener noreferrer" target="_blank"><i class="fab fa-github-square mr-2"></i>Github</a>
              <a className="btn btn-dark text-white mr-3" href="https://www.linkedin.com/in/samueltrejo/" rel="noopener noreferrer" target="_blank"><i class="fab fa-linkedin mr-2"></i>LinkedIn</a>
              <a className="btn btn-dark text-white mr-3" href="mailto:samuel.trejo@s.tcatnashville.edu" rel="noopener noreferrer" target="_blank"><i class="fas fa-envelope-square mr-2"></i>Email</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
