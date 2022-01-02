import React, { Component } from "react";

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Vishal",
    };
    console.log("LifecycleB -> constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB -> getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB -> componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifecycleB -> shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB -> getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("LifecycleB -> componentDidUpdate");
  }

  render() {
    console.log("LifecycleB -> render");
    return <div>Lifecycle B</div>;
  }
}