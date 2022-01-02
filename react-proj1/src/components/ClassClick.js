import React, { Component } from "react";

export default class ClassClick extends Component {
  clickHandler() {
    console.log("Button Clcked");
  }
  render() {
    return (
      <div>
        {/* Without use of this keyword in handler method */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}
