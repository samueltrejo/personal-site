import React from 'react';

class Bio extends React.Component {
  render() {
    return (
      <div className="Bio bg-white py-5">
        <div className="container">
          <div className="col">
            <h1 className="display-4 font-weight-bold">About Me</h1>
            <p className="lead">I enjoy learning new things and consider myself a fast learner due to my diverse background. I am a self taught musician, maths lover, computer technician, volleyball and soccer player, drawer, spanish speaker, singer, pc builder, gamer, bicycle trickster, etc.</p>
            <p className="lead">I've always been particularly drawn to technology and the technical aspect of life. From tinkering with phones and game systems to repairing phones and computers from friends and family. I recently discovered a love and passion for software development while tinkering with SNES game ROMs to create new games. The ability to create and share an idea that is my own in this new way fascinated me.</p>
            <p className="lead">I had to learn more, and so my journey begins with Nashville Software School. I hope to perfect and use the skills I learn to not only share my creations and ideas, and build my future, but to help people in various ways with the almost limitless world of programming.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
