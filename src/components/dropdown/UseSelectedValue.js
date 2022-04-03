import { useState } from "react";

function useSelectedValue(initalValue) {
  console.log("am loggin..", initalValue);
  const [value, setValue] = useState(initalValue);
  return [value, setValue];
}
export default useSelectedValue;
