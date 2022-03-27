import React, { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");
  const handleChange = (eve) => {
    setValue(eve.target.value);
  };
  return (
    <div className={`mb-3 ${props.class}`}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
export default Input;
