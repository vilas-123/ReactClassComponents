import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import ClickCountertwo from './ClickCountertwo'
import HoverCounterTwo from './HoverCountertwo'

export class Ccounter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           count:0
        }
      }
      Increment = () => {
          this.setState(prevstate => {
              return {count : prevstate.count + 1}
          })
      }
  render() {
    
    return (
      <div>
        {this.props.render(this.state.count,this.Increment)}
        
      </div>
    )
  }
}

export default Ccounter
