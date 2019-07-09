import React from 'react';

import content from '../data/animation-content';

class ConsoleAnimation extends React.Component {
  state = {
    consoleData: [],
    counter: 0,
  }

  consoleAnimation = () => {
    const messages = [];
    content.consoleContent.forEach((item) => {
      const delay = 1000 * item.delay;
      setTimeout(() => {
        const newMessage = <div key={`console${item.delay}`} className="text-hazelred">{ item.consoleMessage }</div>;
        messages.push(newMessage);
        this.setState({ consoleData: messages });
      }, delay);
    });
  }

  componentDidMount() {
    this.consoleAnimation();
  }

  render() {
    const { consoleData } = this.state;
    return (
      <div className="ConsoleAnimation intruduction-animation-2 position-absolute">
        <div className="text-hazelblue"><i className="fas fa-cogs text-hazelblue"></i> Console</div>
        <div>{ consoleData }</div>
      </div>
    );
  }
}

export default ConsoleAnimation;
