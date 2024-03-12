import React, { PureComponent } from 'react'
class Purecomponent extends PureComponent {
  render() {
    console.log('pure')
    return (
      <div>
        Purecompoent {this.props.name}
      </div>
    )
  }
}

export default Purecomponent
