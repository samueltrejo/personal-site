import React from 'react';

class Character extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <span key={item.type + item.delay} className={item.type}>{item.character}</span>
    );
  }
}

export default Character;
