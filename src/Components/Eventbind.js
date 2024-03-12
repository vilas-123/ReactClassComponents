import React, { Component } from 'react'

 class Eventbind extends Component {
   constructor(props){
     super(props)
     this.state={
        message:'hello'
     }
   } 
   clickHandler(){
      this.setState({
        message:"goodbye"
      })
   }
  
    render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click me</button>
      </div>
    )
  }
}

export default Eventbind
