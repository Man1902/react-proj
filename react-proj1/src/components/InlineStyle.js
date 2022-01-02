import React from "react";

export default function InlineStyle() {
  let styleObj = { fontSize: "50px", color: "green" };
  return (
    <div>
      <h1 style={styleObj}>Inline</h1>
    </div>
  );
}
