import React, { Component } from 'react';

class HoverCounterTwo extends Component {
 

  render() {
    const { count,Increment } = this.props;
    return (
      <div>
        <h2 onMouseOver={Increment}>Hovered times: {count}</h2>
      </div>
    );
  }
}

export default HoverCounterTwo;
