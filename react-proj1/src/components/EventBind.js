import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    //Approach3 : event handler binding in constructor
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    console.log("this", this);
    this.setState({
      message: "Good Bye!",
    });
  }

  //Approach4 : event handler binding by declaring event handler using arrow fn as class property
  clickHandler1 = () => {
    this.setState({
      message: "Good Bye!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Witohut event handler binding. this keyword will be undefined in event handler method */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* Approach1 : Inline event handler binding */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Approach2 : event handler binding using arrow funtion */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* Approach3 : event handler binding in constructor */}
        <button onClick={this.clickHandler}>Click</button>

        {/* Approach4 : event handler binding by declaring event handler using arrow fn as class property */}
        <button onClick={this.clickHandler1}>Click1</button>
      </div>
    );
  }
}
