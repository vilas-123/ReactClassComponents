import React, { Component } from 'react';

class Refsdemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef=React.createRef
  }

  componentDidMount() {
    this.inputRef.current.focus();
   
  }

  Clickhandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef}></input>
        <button onClick={this.Clickhandler}>Submit</button>
      </div>
    );
  }
}

export default Refsdemo;
