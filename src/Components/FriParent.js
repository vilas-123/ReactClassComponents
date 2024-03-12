import React, { Component } from 'react'
import FRInput from './FRInput'

 class FriParent extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }  
    
    ClickHandler= () => {
         this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.ClickHandler}>focus </button>
      </div>
    )
  }

 }
export default FriParent
