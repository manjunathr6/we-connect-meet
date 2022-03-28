import React, { useState } from "react";

function Select(props) {
  const [value, setValue] = useState("Select option");
  const options = props.options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });
  const handleChange = (eve) => {
    setValue(eve.target.value);
  };
  return (
    <select value={value} onChange={handleChange} className="f-18 md-f-22">
      {options}
    </select>
  );
}
export default Select;
