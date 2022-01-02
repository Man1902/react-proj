import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    // Approach1
    this.inputRef = React.createRef();

    // Approach2
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();

    this.cbRef.focus();
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>

        <input type="text" ref={this.setCbRef} />
      </div>
    );
  }
}

export default RefsDemo;
