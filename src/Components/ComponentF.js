import React, { Component } from 'react';
import { UserConsumer } from './UserContext'; // Assuming UserContext is correctly imported

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
         {
          username =>{
            return <div>hello {username}</div>
          }
         }
        </UserConsumer>
      </div>
    );
  }
}

export default ComponentF;
