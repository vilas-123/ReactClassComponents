import React, { Component } from 'react'

 class ClickCountertwo extends Component {
    
    
  render() {
    const { count,Increment } = this.props;
    return (
      <div>
        <button onClick={Increment}>Click {count}</button>
      </div>
    )
  }
}

export default ClickCountertwo
