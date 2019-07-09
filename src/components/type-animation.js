import React from 'react';

import Character from './characters';

import content from '../data/animation-content';

class TypeAnimation extends React.Component {
  state = {
    colorClass: {},
    cursorClass: '',
    characterData: [],
  }

  getTypeWriterContent = () => {
    const characters = [];

    content.typewriterContent.forEach((item) => {
      const delay = (100 * item.delay) + 800;
      if (item.action) {
        setTimeout(() => {
          const colorClassCopy = { ...this.state.colorClass };
          colorClassCopy[item.target] = item.class;
          this.setState({ colorClass: colorClassCopy });
        }, delay);
      } else {
        setTimeout(() => {
          characters.push(item);
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

    this.getTypeWriterContent();
  }

  componentWillUnmount() {
    clearInterval(this.typewriter);
  }

  render() {
    const { cursorClass, characterData, colorClass } = this.state;
    const writeCharacters = characterData.map(character => (
      <Character key={character.type + character.delay} character={character} colorClass={colorClass} />
    ));
    return (
      <div className="TypeAnimation intruduction-animation-1 position-absolute text-hazelblue">
        <div>{'const whoIsSamuel? = () => {'}</div>
        <div className="pl-3">{'logTimer = setInterval(logInfo(), 1s);'}</div>
        <div>{'};'}</div>
        <span className="line1 text-lightblue">{writeCharacters}</span><span className={cursorClass}></span><br />
      </div>
    );
  }
}

export default TypeAnimation;
