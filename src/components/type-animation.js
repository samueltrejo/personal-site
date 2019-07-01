import React from 'react';
import $ from 'jquery';

import content from '../data/animation-content';

class TypeAnimation extends React.Component {
  componentDidMount() {
    const typewriter = setInterval(() => {
      $('.cursor').toggleClass('blink');
    }, 350);

    content.forEach((item) => {
      const delay = 200 * item.delay;
      if (item.action) {
        setTimeout(() => {
          $(item.target).addClass(item.class);
        }, delay);
      } else {
        setTimeout(() => {
          const character = `<span class="${item.type}">${item.character}</span>`;
          $(item.target).append(character);
        }, delay);
      }
    });
  }

  render() {
    return (
      <div className="TypeAnimation intruduction-animation-1 position-absolute text-darkblue">
        <div>{'const whoIsSamuel? = () => {'}</div>
        <div className="pl-3">{'const displayTimer = setInterval(logSamuelInfo());'}</div>
        <span className="line1 pl-3 text-blue"></span><span className="cursor"></span><br />
        <div>{'};'}</div>
      </div>
    );
  }
}

export default TypeAnimation;
