import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementByOne() {
    //this.state.count += 1;    // count will be incresed but. UI will not be updated
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback value : ", this.state.count);
      }
    );
  }

  increment() {
    this.setState((prevState, props) => ({
      count: prevState.count + 1,
    }));
  }

  incrementByFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={() => this.incrementByOne()}>Increment By One</button>
        <button onClick={() => this.incrementByFive()}>
          Increment By Five
        </button>
      </div>
    );
  }
}
