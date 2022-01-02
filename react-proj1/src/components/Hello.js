import React from "react";

// with JSX
/*const Hello = () => (
  <div>
    <h1>Hello Learner </h1>
  </div>
);*/

// witout JSX
const Hello = () => {
  return React.createElement(
    "div",
    { id: "greetDiv" },
    React.createElement("h1", null, "Hello Learner")
  );
};

export default Hello;
