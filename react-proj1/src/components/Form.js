import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comments: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { userName, comments, topic } = this.state;
    return (
      <form className="container" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Username : </label>
          <input
            type="text"
            className="form-control"
            value={userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div className="form-group">
          <label>Comments : </label>
          <textarea
            className="form-control"
            value={comments}
            onChange={this.handleCommentsChange}
          />
        </div>
        <div className="form-group">
          <label>Topic : </label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
