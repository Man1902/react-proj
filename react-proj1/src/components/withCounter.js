import React from "react";

// WrappedComponent : original component , WithCounter : new component
const withCounter = (WrappedComponent, incrementNo) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNo };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props} //to pass other props which are passed from caller comp
        ></WrappedComponent>
      );
    }
  }
  return WithCounter;
};

export default withCounter;
