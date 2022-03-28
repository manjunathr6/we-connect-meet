import React from "react";

function Button(props) {
  return (
    <div className={`button d-inlineBlock ${props.class ? props.class : ""}`}>
      <button type={props.type ? props.type : "button"}>{props.name}</button>
    </div>
  );
}
export default Button;
