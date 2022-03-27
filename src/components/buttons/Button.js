import React from "react";

function Button(props) {
  return (
    <div className={`button ${props.class ? props.class : ""}`}>
      <button>{props.name}</button>
    </div>
  );
}
export default Button;
