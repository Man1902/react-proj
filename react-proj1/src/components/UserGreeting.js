import React, { Component } from "react";

export default class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // 1) conditional rendering using if-else (can't be used inside JSX)
    /* if (this.state.isLoggedIn) {
      return <div>Welcome Learner</div>;
    } else {
      return <div>Welcome Guest</div>;
    }*/
    // 2) conditional rendering using Element variables
    /* let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Learner</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }
    return <div>{message}</div>; */
    // 3) Ternary conditional operator
    /* return this.state.isLoggedIn ? (
      <div>Welcome Learner</div>
    ) : (
      <div>Welcome Guest</div>
    );*/

    // 4) Short circuit operator
    return this.state.isLoggedIn && <div>Welcome Learner</div>;
  }
}
