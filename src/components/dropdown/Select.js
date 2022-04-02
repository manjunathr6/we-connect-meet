import React, { useState } from "react";
import useSelectedValue from "./UseSelectedValue";

function Select(props) {
  const [value, setValue] = useSelectedValue("Select option");
  // console.log("what is it..", value, setValue, useSelectedValue("Hello"));
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
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="f-18 md-f-22"
    >
      {options}
    </select>
  );
}
export default Select;
