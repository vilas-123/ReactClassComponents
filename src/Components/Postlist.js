import React, { Component } from 'react'
import axios from 'axios';

 class Postlist extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Posts:[]
      }
    }
    componentDidCatch(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
  render() {
    return (
      <div>
        List of Posts
      </div>
    )
  }
}

export default Postlist
