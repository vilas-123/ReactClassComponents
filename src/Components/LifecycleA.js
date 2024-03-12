import React, { Component } from 'react'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'vilas'
      }
    console.log('it is constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('mount')
    }

    shouldComponentUpdate(){
        console.log("update")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('lifecbefore update')
    }

    componentDidUpdate(){
        console.log("did update")
    }
  render() {
    console.log('render')
    return (
      <div>
        <h1>Lifecycle A</h1>
      </div>
    )
  }
}

export default LifecycleA
