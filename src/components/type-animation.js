import React from 'react';
import $ from 'jquery';

import Character from './characters';

import content from '../data/animation-content';

class TypeAnimation extends React.Component {
  state = {
    cursorClass: '',
    characterData: [],
  }

  typewriterAnimation = () => {
    const characters = [];

    content.typewriterContent.forEach((item) => {
      const delay = (100 * item.delay) + 800;
      if (item.action) {
        setTimeout(() => {
          $(item.target).addClass(item.class);
          // const colorClassCopy = { ...this.state.colorClass };
          // colorClassCopy[item.target] = item.class;
          // this.setState({ colorClass: colorClassCopy });
        }, delay);
      } else {
        setTimeout(() => {
          const character = <Character key={item.type + item.delay} item={item} colorClass={this.state.colorClass}/>;
          characters.push(character);
          this.setState({ characterData: characters });
        }, delay);
      }
    });
  }

  componentDidMount() {
    this.typewriter = setInterval(() => {
      if (this.state.cursorClass === 'cursor') {
        this.setState({ cursorClass: '' });
      } else {
        this.setState({ cursorClass: 'cursor' });
      }
    }, 350);

    this.typewriterAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.typewriter);
  }

  render() {
    const { cursorClass, characterData } = this.state;
    return (
      <div className="TypeAnimation intruduction-animation-1 position-absolute text-darkblue">
        <div>{'const whoIsSamuel? = () => {'}</div>
        <div className="pl-3">{'const logTimer = setInterval(logInfo(), 1s);'}</div>
        <div>{'};'}</div>
        <span className="line1 pl-3 text-blue">{characterData}</span><span className={cursorClass}></span><br />
      </div>
    );
  }
}

export default TypeAnimation;
