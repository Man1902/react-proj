import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    return <h1>Hello {this.props.name} from Class Component</h1>;
  }
}
