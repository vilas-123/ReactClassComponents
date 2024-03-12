import React, { Component } from 'react'
import Welcome from './welcome'

export class If extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
  render() {

            return this.state.isLoggedIn && <div>Welcome</div>
             
  
    
  }

}
export default If
