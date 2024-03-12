import React, { Component } from 'react';

import Purecomponent from './PureComponent';
import RegComponent from './RegComponent';
import Memos from './Memos';

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'vilas'
        };
    }
    componentDidMount() {
        setInterval(() => { }, 2000);
        this.setState({
            name: 'vilas'
        });
    }
    render() {
      console.log('parent')
        return (
            <div>
                ParentComponent
                <RegComponent name={this.state.name} />
                <Purecomponent name={this.state.name} />
                {/* <Memos name={this.state.name} /> */}
            </div>
        );
    }
}

export default ParentComponent;
