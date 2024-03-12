import React from "react";

const UpdatedCounter =(OriginalComponent,incrementValue)=> {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    
    IncrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementValue };
      });
    }

    render() {
      return (
        <OriginalComponent 
          count={this.state.count} 
          IncrementCount={this.IncrementCount} 
          {...this.props} 
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedCounter;
