import React from "react";

/*export default function Greet(props){
    return <h1>Hello {props.name}</h1>
}*/

const Greet = (props) => (
  <div>
    <h1>
      Hello {props.name} from {props.city} in Functional Component
    </h1>
    {props.children}
  </div>
);

export default Greet;
