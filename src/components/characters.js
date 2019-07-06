import React from 'react';

class Character extends React.Component {
  render() {
    const { character, colorClass } = this.props;
    return (
      <span className={colorClass[character.type]}>{character.character}</span>
    );
  }
}

export default Character;
