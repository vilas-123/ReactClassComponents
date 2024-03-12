import React, { Component } from 'react';
import UpdatedComponent from './UpdatedCounter';

class HoverCounter extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={IncrementCount}>Hovered times: {count}</h2>
      </div>
    );
  }
}

export default UpdatedComponent(HoverCounter, 10); 
