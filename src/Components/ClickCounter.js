import React, { Component } from 'react';
import UpdatedComponent from './UpdatedCounter';

class ClickCounter extends Component {
  render() {
    const { count, IncrementCount } = this.props;
    return (
      <div>
        <button onClick={IncrementCount}>Click me {count}</button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter, 5); 
